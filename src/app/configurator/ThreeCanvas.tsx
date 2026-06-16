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
    
    // Белый фон как на картинке
    scene.background = new THREE.Color(0xfafafa);
    scene.fog = new THREE.FogExp2(0xfafafa, 0.004);

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

    // Драматичное освещение для презентации
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Главное солнце - яркое
    const sunLight = new THREE.DirectionalLight(0xfff8e7, 1.6);
    sunLight.position.set(60, 80, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.bias = -0.0001;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    scene.add(sunLight);

    // Подсветка сбоку для объема (rim light)
    const rimLight = new THREE.DirectionalLight(0x4a90e2, 0.4);
    rimLight.position.set(-50, 30, -50);
    scene.add(rimLight);

    // Мягкий заполняющий свет
    const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.2);
    fillLight.position.set(-30, 20, 60);
    scene.add(fillLight);

    // Зелёная трава (весь участок)
    const grassGeo = new THREE.PlaneGeometry(400, 400);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x7cb87a, roughness: 0.9, metalness: 0 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    scene.add(grass);

    // Асфальт под ангаром и стоянка (buildingGroup ещё не создан — размеры примерные)
    const asphaltW = width * 1.8 + 20;
    const asphaltL = length * 1.3 + 20;
    const asphaltGeo = new THREE.PlaneGeometry(asphaltW, asphaltL);
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x8a9ba8, roughness: 0.95, metalness: 0 });
    const asphalt = new THREE.Mesh(asphaltGeo, asphaltMat);
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.y = 0.01;
    asphalt.receiveShadow = true;
    scene.add(asphalt);

    // Лёгкая сетка поверх асфальта (как на картинке)
    const gridHelper = new THREE.GridHelper(Math.max(asphaltW, asphaltL), 20, 0x9cafc0, 0x9cafc0);
    gridHelper.position.y = 0.02;
    (gridHelper.material as THREE.LineBasicMaterial).opacity = 0.25;
    (gridHelper.material as THREE.LineBasicMaterial).transparent = true;
    scene.add(gridHelper);

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
    
    // Левая колонна
    const leftCol = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 0.1), columnMat);
    leftCol.position.set(-halfWidth, height / 2, z);
    leftCol.castShadow = true;
    leftCol.receiveShadow = true;
    group.add(leftCol);

    // Правая колонна
    const rightCol = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 0.1), columnMat);
    rightCol.position.set(halfWidth, height / 2, z);
    rightCol.castShadow = true;
    rightCol.receiveShadow = true;
    group.add(rightCol);

    // Ригель
    if (i < frameCount) {
      const righel = new THREE.Mesh(new THREE.BoxGeometry(width, 0.12, 0.08), beamMat);
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

    // Связи в плоскости фермы (раскосы) - Σ-профили 60x30
    const braceZ1 = z + columnStep * 0.25;
    const braceZ2 = z + columnStep * 0.75;
    
    // Левый раскос 1
    const leftBrace1 = createDiagonal(-halfWidth, height, braceZ1, 0, height + trussHeight, braceZ1, 0.025, trussMat);
    group.add(leftBrace1);
    
    // Левый раскос 2
    const leftBrace2 = createDiagonal(0, height + trussHeight, braceZ2, -halfWidth, height, braceZ2, 0.025, trussMat);
    group.add(leftBrace2);

    // Правый раскос 1
    const rightBrace1 = createDiagonal(halfWidth, height, braceZ1, 0, height + trussHeight, braceZ1, 0.025, trussMat);
    group.add(rightBrace1);
    
    // Правый раскос 2
    const rightBrace2 = createDiagonal(0, height + trussHeight, braceZ2, halfWidth, height, braceZ2, 0.025, trussMat);
    group.add(rightBrace2);
  }

  // === ПРОДОЛЬНЫЕ СВЯЗИ (вдоль здания) ===
  // Укорочены чтобы не торчать за торцы ферм
  const tieLength = actualLength - 1.2;
  
  // Связи на уровне ригелей
  const leftTie = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, tieLength), trussMat);
  leftTie.position.set(-halfWidth, height, 0);
  leftTie.castShadow = true;
  group.add(leftTie);

  const rightTie = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, tieLength), trussMat);
  rightTie.position.set(halfWidth, height, 0);
  rightTie.castShadow = true;
  group.add(rightTie);

  // Связь на коньке
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
    const leftEndBrace = createDiagonal(-halfWidth, height, endZ, 0, ridgeY, endZ, 0.04, trussMat);
    group.add(leftEndBrace);
    const rightEndBrace = createDiagonal(halfWidth, height, endZ, 0, ridgeY, endZ, 0.04, trussMat);
    group.add(rightEndBrace);
    const ridgeEndTie = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.05), trussMat);
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

// Создание Σ-профиля (сигма/шляпный профиль) ЛСТК
// Форма: центральная часть + две полки с загибами
function createSigmaProfile(length: number, height: number, thickness: number, material: THREE.Material): THREE.Mesh {
  const flangeWidth = height * 0.35; // Ширина полки
  const bendDepth = height * 0.15;   // Глубина загиба
  const webHeight = height - bendDepth * 2; // Высота стенки
  
  const shape = new THREE.Shape();
  
  // Рисуем поперечное сечение Σ-профиля (вид с торца)
  // Начинаем с нижнего левого угла внутренней части
  const w = thickness;
  const h = webHeight;
  const f = flangeWidth;
  const b = bendDepth;
  
  // Внешний контур (против часовой стрелки)
  shape.moveTo(0, 0);
  // Нижняя полка вправо
  shape.lineTo(f, 0);
  // Загиб вверх
  shape.lineTo(f, b);
  // Стенка вверх
  shape.lineTo(f - w, b + h * 0.3);
  shape.lineTo(f - w, b + h * 0.7);
  // Верхний загиб
  shape.lineTo(f, b + h);
  // Верхняя полка влево
  shape.lineTo(0, b + h);
  // Загиб вниз
  shape.lineTo(0, b + h - w);
  // Внутренняя часть верхней полки
  shape.lineTo(f - w - b, b + h - w);
  // Срез к центру
  shape.lineTo(f - w - b * 1.5, b + h * 0.7);
  // Центральная часть (спуск)
  shape.lineTo(f - w - b * 1.5, b + h * 0.3);
  // Срез к нижней полке
  shape.lineTo(f - w - b, b + w);
  // Внутренняя часть нижней полки
  shape.lineTo(0, b + w);
  // Замыкаем
  shape.lineTo(0, 0);
  
  const extrudeSettings = {
    depth: length,
    bevelEnabled: false,
    steps: 1
  };
  
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  // Поворачиваем чтобы профиль шел вдоль оси Z
  geometry.rotateY(Math.PI / 2);
  // Центрируем
  geometry.translate(0, -height / 2, -length / 2);
  
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// Упрощенный С-профиль с полками
function createCProfile(length: number, height: number, width: number, thickness: number, material: THREE.Material): THREE.Mesh {
  const shape = new THREE.Shape();
  
  const w = thickness;
  const h = height;
  const b = width;
  const bend = b * 0.3; // Загиб полки
  
  // Рисуем С-сечение
  shape.moveTo(0, 0);
  // Нижняя полка (с загибом внутрь)
  shape.lineTo(b, 0);
  shape.lineTo(b, w);
  shape.lineTo(bend, w);
  // Стенка вверх
  shape.lineTo(bend, h - w);
  // Верхняя полка (с загибом внутрь)
  shape.lineTo(b, h - w);
  shape.lineTo(b, h);
  shape.lineTo(0, h);
  // Замыкаем
  shape.lineTo(0, 0);
  
  const extrudeSettings = {
    depth: length,
    bevelEnabled: false,
    steps: 1
  };
  
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.rotateY(Math.PI / 2);
  geometry.translate(0, -height / 2, -length / 2);
  
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}
