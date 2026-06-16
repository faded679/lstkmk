// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface ThreeCanvasProps {
  width: number;
  length: number;
  height: number;
  showSandwich: boolean;
}

export default function ThreeCanvas({ width, length, height, showSandwich }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    buildingGroup: THREE.Group;
  } | null>(null);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return;

    const scene = new THREE.Scene();
    
    // Градиентный фон
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 512;
    const context = canvas.getContext('2d')!;
    const gradient = context.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(0.5, '#1e293b');
    gradient.addColorStop(1, '#334155');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 2, 512);
    const backgroundTexture = new THREE.CanvasTexture(canvas);
    scene.background = backgroundTexture;
    scene.fog = new THREE.Fog(0x334155, 50, 200);

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(width * 0.8, height * 1.5, length * 0.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.target.set(0, height / 2, 0);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8e7, 1.4);
    sunLight.position.set(80, 100, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x64748b, 0.3);
    fillLight.position.set(-40, 20, -40);
    scene.add(fillLight);

    // Земля (светлее для лучшей видимости)
    const groundGeometry = new THREE.PlaneGeometry(400, 400);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x475569,
      roughness: 0.95,
      metalness: 0.05
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Сетка и разметка убраны по запросу

    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    sceneRef.current = { scene, camera, renderer, controls, buildingGroup };
    setIsInitialized(true);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { buildingGroup, controls, camera } = sceneRef.current;
    
    while (buildingGroup.children.length > 0) {
      const child = buildingGroup.children[0];
      if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
      buildingGroup.remove(child);
    }

    createBuilding(buildingGroup, width, length, height, showSandwich);

    camera.position.set(width * 0.8, height * 1.5, length * 0.8);
    controls.target.set(0, height / 2, 0);
    controls.update();
  }, [width, length, height, showSandwich]);

  return (
    <div ref={containerRef} className="w-full h-full" style={{ minHeight: "500px" }}>
      {!isInitialized && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-slate-400">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Загрузка 3D...</p>
          </div>
        </div>
      )}
    </div>
  );
}

function createBuilding(group: THREE.Group, width: number, length: number, height: number, showSandwich: boolean) {
  const columnStep = 6;
  const trussHeight = 1.2;
  const halfWidth = width / 2;
  
  // Материалы ЛСТК - реалистичная сталь
  const steelColor = 0x8b9299; // Цвет оцинкованной стали
  const columnMat = new THREE.MeshStandardMaterial({ color: steelColor, roughness: 0.35, metalness: 0.85 });
  const beamMat = new THREE.MeshStandardMaterial({ color: steelColor, roughness: 0.35, metalness: 0.85 });
  const trussMat = new THREE.MeshStandardMaterial({ color: 0x7a828a, roughness: 0.4, metalness: 0.8 });
  const sandwichMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.5, metalness: 0.05 });
  const boltMat = new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.3, metalness: 0.9 });

  const frameCount = Math.ceil(length / columnStep);
  const actualLength = frameCount * columnStep;
  const startZ = -actualLength / 2;

  // === ПОРТАЛЫ (РАМЫ) ===
  for (let i = 0; i <= frameCount; i++) {
    const z = startZ + i * columnStep;
    
    // Левая колонна - ЛСТК профиль шире (300мм х 150мм)
    const leftCol = new THREE.Mesh(new THREE.BoxGeometry(0.3, height, 0.15), columnMat);
    leftCol.position.set(-halfWidth, height / 2, z);
    leftCol.castShadow = true;
    leftCol.receiveShadow = true;
    group.add(leftCol);

    // Правая колонна - ЛСТК профиль
    const rightCol = new THREE.Mesh(new THREE.BoxGeometry(0.3, height, 0.15), columnMat);
    rightCol.position.set(halfWidth, height / 2, z);
    rightCol.castShadow = true;
    rightCol.receiveShadow = true;
    group.add(rightCol);

    // Ребра жесткости на колоннах (уголки)
    for (const colX of [-halfWidth, halfWidth]) {
      // Лицевое ребро (справа/слева от колонны)
      const rib1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, height * 0.6, 0.02), columnMat);
      rib1.position.set(colX + (colX > 0 ? 0.17 : -0.17), height * 0.4, z);
      rib1.castShadow = true;
      group.add(rib1);
      
      // Боковое ребро
      const rib2 = new THREE.Mesh(new THREE.BoxGeometry(0.02, height * 0.5, 0.08), columnMat);
      rib2.position.set(colX, height * 0.35, z + (colX > 0 ? 0.1 : -0.1));
      rib2.castShadow = true;
      group.add(rib2);
    }

    // Ригель (связь колонн сверху)
    if (i < frameCount) {
      const righel = new THREE.Mesh(new THREE.BoxGeometry(width, 0.16, 0.12), beamMat);
      righel.position.set(0, height, z + columnStep / 2);
      righel.castShadow = true;
      righel.receiveShadow = true;
      group.add(righel);

      // Соединительные пластины
      for (const x of [-halfWidth, halfWidth]) {
        const plate = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.06), boltMat);
        plate.position.set(x, height, z + columnStep / 2);
        plate.castShadow = true;
        group.add(plate);
        
        // Болты на пластине (2x3 сетка)
        const boltGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.08, 8);
        const boltHeadGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.01, 6);
        for (let bx = -1; bx <= 1; bx++) {
          for (let by = -1; by <= 1; by++) {
            const boltX = x + bx * 0.1;
            const boltY = height + by * 0.08;
            const boltZ = z + columnStep / 2 + (x > 0 ? 0.03 : -0.03);
            
            const bolt = new THREE.Mesh(boltGeo, boltMat);
            bolt.position.set(boltX, boltY, boltZ);
            bolt.rotation.x = Math.PI / 2;
            group.add(bolt);
            
            // Головка болта
            const head = new THREE.Mesh(boltHeadGeo, boltMat);
            head.position.set(boltX, boltY, boltZ + (x > 0 ? 0.03 : -0.03));
            head.rotation.x = Math.PI / 2;
            group.add(head);
          }
        }
      }
    }

    // База колонн (фундаментная пластина)
    for (const x of [-halfWidth, halfWidth]) {
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.3), boltMat);
      base.position.set(x, 0.04, z);
      base.castShadow = true;
      group.add(base);
      
      // Анкерные болты по углам пластины
      const anchorGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.12, 8);
      const anchorHeadGeo = new THREE.BoxGeometry(0.05, 0.02, 0.05);
      const anchorPositions = [[-0.15, -0.1], [0.15, -0.1], [-0.15, 0.1], [0.15, 0.1]];
      
      for (const [ax, az] of anchorPositions) {
        const anchor = new THREE.Mesh(anchorGeo, boltMat);
        anchor.position.set(x + ax, 0.06, z + az);
        group.add(anchor);
        
        // Гайка/шайба сверху
        const head = new THREE.Mesh(anchorHeadGeo, boltMat);
        head.position.set(x + ax, 0.12, z + az);
        group.add(head);
      }
    }
  }

  // === ФЕРМЫ ПОКРЫТИЯ ===
  for (let i = 0; i < frameCount; i++) {
    const z = startZ + i * columnStep;
    const zNext = startZ + (i + 1) * columnStep;
    const midZ = (z + zNext) / 2;

    // === ЛЕВАЯ ФЕРМА ===
    // Нижний пояс (от колонны до конька)
    const leftLowerLen = Math.sqrt(halfWidth * halfWidth + trussHeight * trussHeight);
    const leftLower = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, leftLowerLen), trussMat);
    leftLower.position.set(-halfWidth / 2, height + trussHeight / 2, z + columnStep / 2);
    leftLower.rotation.z = Math.atan(trussHeight / halfWidth);
    leftLower.castShadow = true;
    group.add(leftLower);

    // Верхний пояс (конек)
    const topChord = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, columnStep), trussMat);
    topChord.position.set(0, height + trussHeight, z + columnStep / 2);
    topChord.castShadow = true;
    group.add(topChord);

    // === ПРАВАЯ ФЕРМА (зеркально) ===
    const rightLower = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, leftLowerLen), trussMat);
    rightLower.position.set(halfWidth / 2, height + trussHeight / 2, z + columnStep / 2);
    rightLower.rotation.z = -Math.atan(trussHeight / halfWidth);
    rightLower.castShadow = true;
    group.add(rightLower);

    // Связи в плоскости фермы (раскосы)
    const braceZ1 = z + columnStep * 0.25;
    const braceZ2 = z + columnStep * 0.75;
    
    // Левый раскос 1
    const leftBrace1 = createDiagonal(-halfWidth, height, braceZ1, 0, height + trussHeight, braceZ1, 0.04, trussMat);
    group.add(leftBrace1);
    
    // Левый раскос 2
    const leftBrace2 = createDiagonal(0, height + trussHeight, braceZ2, -halfWidth, height, braceZ2, 0.04, trussMat);
    group.add(leftBrace2);

    // Правый раскос 1
    const rightBrace1 = createDiagonal(halfWidth, height, braceZ1, 0, height + trussHeight, braceZ1, 0.04, trussMat);
    group.add(rightBrace1);
    
    // Правый раскос 2
    const rightBrace2 = createDiagonal(0, height + trussHeight, braceZ2, halfWidth, height, braceZ2, 0.04, trussMat);
    group.add(rightBrace2);
  }

  // === ПРОДОЛЬНЫЕ СВЯЗИ (вдоль здания) ===
  // Укорочены чтобы не торчать за торцы ферм
  const tieLength = actualLength - 0.6;
  
  // Связи на уровне ригелей (под фермами)
  const leftTie = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, tieLength), trussMat);
  leftTie.position.set(-halfWidth, height, 0);
  leftTie.castShadow = true;
  group.add(leftTie);

  const rightTie = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, tieLength), trussMat);
  rightTie.position.set(halfWidth, height, 0);
  rightTie.castShadow = true;
  group.add(rightTie);

  // Связь на коньке - укороченная, скрываем если сэндвич включен
  if (!showSandwich) {
    const ridgeTie = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, tieLength), trussMat);
    ridgeTie.position.set(0, height + trussHeight, 0);
    ridgeTie.castShadow = true;
    group.add(ridgeTie);
  }
  
  // Убраны мелкие вертикальные связи на скатах - они мешали визуально

  // === ФРОНТАЛЬНЫЕ СВЯЗИ (торцы здания) ===
  const leftEndZ = startZ;
  const rightEndZ = startZ + actualLength;
  const ridgeY = height + trussHeight;
  
  for (const endZ of [leftEndZ, rightEndZ]) {
    // V-образные связи на торце: от колонн к коньку
    // Левая связь торца: от левой колонны к коньку
    const leftEndBrace = createDiagonal(
      -halfWidth, height, endZ,  // от основания левой фермы
      0, ridgeY, endZ,          // к коньку
      0.05, trussMat
    );
    group.add(leftEndBrace);
    
    // Правая связь торца: от правой колонны к коньку
    const rightEndBrace = createDiagonal(
      halfWidth, height, endZ,  // от основания правой фермы
      0, ridgeY, endZ,          // к коньку
      0.05, trussMat
    );
    group.add(rightEndBrace);
    
    // Горизонтальная связь на коньке между V-образными (короткая)
    const ridgeEndTie = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.05, 0.05), 
      trussMat
    );
    ridgeEndTie.position.set(0, ridgeY - 0.1, endZ);
    ridgeEndTie.castShadow = true;
    group.add(ridgeEndTie);
  }

  // === СЭНДВИЧ-ПАНЕЛИ ===
  if (showSandwich) {
    // Стены
    const wallThick = 0.08;
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, height, length), sandwichMat);
    leftWall.position.set(-halfWidth - wallThick / 2, height / 2, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    group.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, height, length), sandwichMat);
    rightWall.position.set(halfWidth + wallThick / 2, height / 2, 0);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    group.add(rightWall);

    // Кровля - левый скат
    const roofLen = Math.sqrt(halfWidth * halfWidth + trussHeight * trussHeight);
    const roofAngle = Math.atan(trussHeight / halfWidth);
    
    const leftRoof = new THREE.Mesh(new THREE.BoxGeometry(roofLen, 0.06, length), sandwichMat);
    leftRoof.position.set(-halfWidth / 2, height + trussHeight / 2, 0);
    leftRoof.rotation.z = roofAngle;
    leftRoof.castShadow = true;
    leftRoof.receiveShadow = true;
    group.add(leftRoof);

    // Кровля - правый скат
    const rightRoof = new THREE.Mesh(new THREE.BoxGeometry(roofLen, 0.06, length), sandwichMat);
    rightRoof.position.set(halfWidth / 2, height + trussHeight / 2, 0);
    rightRoof.rotation.z = -roofAngle;
    rightRoof.castShadow = true;
    rightRoof.receiveShadow = true;
    group.add(rightRoof);

    // Конек
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, length), beamMat);
    ridge.position.set(0, height + trussHeight + 0.05, 0);
    ridge.castShadow = true;
    group.add(ridge);
  }
}

// Хелпер для создания диагонали
function createDiagonal(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, thickness: number, material: THREE.Material) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
  
  const geometry = new THREE.BoxGeometry(thickness, length, thickness);
  const mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  
  // Вычисляем угол поворота
  mesh.lookAt(x2, y2, z2);
  mesh.rotateX(Math.PI / 2);
  
  mesh.castShadow = true;
  return mesh;
}
