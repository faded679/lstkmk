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

    // Сцена с градиентным фоном
    const scene = new THREE.Scene();
    
    // Создаем градиентный фон (небо)
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 512;
    const context = canvas.getContext('2d')!;
    const gradient = context.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#1e293b'); // Темно-синий сверху
    gradient.addColorStop(0.5, '#334155'); // Средний
    gradient.addColorStop(1, '#475569'); // Светлее снизу
    context.fillStyle = gradient;
    context.fillRect(0, 0, 2, 512);
    const backgroundTexture = new THREE.CanvasTexture(canvas);
    scene.background = backgroundTexture;
    scene.fog = new THREE.Fog(0x475569, 30, 150);

    // Камера
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(width * 0.9, height * 1.8, length * 0.9);

    // Рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // Контролы
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.target.set(0, height / 2, 0);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Основное солнце
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(50, 100, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    sunLight.shadow.camera.left = -100;
    sunLight.shadow.camera.right = 100;
    sunLight.shadow.camera.top = 100;
    sunLight.shadow.camera.bottom = -100;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    // Дополнительный свет сбоку
    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.4);
    fillLight.position.set(-50, 30, -50);
    scene.add(fillLight);

    // Земля с разметкой
    const groundGeometry = new THREE.PlaneGeometry(300, 300);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Сетка на земле
    const gridHelper = new THREE.GridHelper(300, 60, 0x64748b, 0x334155);
    gridHelper.position.y = 0.01;
    gridHelper.material.opacity = 0.3;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Разметка участка (красный прямоугольник)
    const siteGeometry = new THREE.PlaneGeometry(width + 4, length + 4);
    const siteMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const site = new THREE.Mesh(siteGeometry, siteMaterial);
    site.rotation.x = -Math.PI / 2;
    site.position.y = 0.02;
    scene.add(site);

    // Линии границы участка
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(width + 4, 0.1, length + 4));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xef4444, linewidth: 2 });
    const siteLines = new THREE.LineSegments(edges, lineMaterial);
    siteLines.position.y = 0.05;
    scene.add(siteLines);

    // Группа для здания
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    sceneRef.current = { scene, camera, renderer, controls, buildingGroup };
    setIsInitialized(true);

    // Анимация
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Обработчик resize
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

  // Обновление здания
  useEffect(() => {
    if (!sceneRef.current) return;

    const { buildingGroup, controls, camera } = sceneRef.current;
    
    // Очищаем предыдущее здание
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

    // Обновляем камеру и контролы
    camera.position.set(width * 0.9, height * 1.8, length * 0.9);
    controls.target.set(0, height / 2, 0);
    controls.update();
  }, [width, length, height, showSandwich]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ minHeight: "500px" }}
    >
      {!isInitialized && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-slate-400">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Инициализация 3D...</p>
          </div>
        </div>
      )}
    </div>
  );
}

function createBuilding(
  group: THREE.Group,
  width: number,
  length: number,
  height: number,
  showSandwich: boolean
) {
  const columnStep = 6;
  const trussHeight = 1.2;
  
  // Материалы металла
  const steelMaterial = new THREE.MeshStandardMaterial({
    color: 0x475569,
    roughness: 0.3,
    metalness: 0.8,
  });

  const steelHighlightMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.3,
    metalness: 0.85,
  });

  const connectionMaterial = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.4,
    metalness: 0.7,
  });

  const sandwichMaterial = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.7,
    metalness: 0.05,
  });

  const columnCount = Math.ceil(length / columnStep) + 1;

  // === КОЛОННЫ И СВЯЗИ ===
  for (let i = 0; i < columnCount; i++) {
    const z = (i * columnStep) - length / 2;
    
    // Левая колонна
    const leftColumn = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, height, 0.15),
      steelMaterial
    );
    leftColumn.position.set(-width / 2, height / 2, z);
    leftColumn.castShadow = true;
    leftColumn.receiveShadow = true;
    group.add(leftColumn);

    // Правая колонна
    const rightColumn = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, height, 0.15),
      steelMaterial
    );
    rightColumn.position.set(width / 2, height / 2, z);
    rightColumn.castShadow = true;
    rightColumn.receiveShadow = true;
    group.add(rightColumn);

    // Ригель (горизонтальная связь наверху)
    if (i < columnCount - 1) {
      const righel = new THREE.Mesh(
        new THREE.BoxGeometry(width, 0.12, 0.08),
        steelHighlightMaterial
      );
      righel.position.set(0, height, z);
      righel.castShadow = true;
      righel.receiveShadow = true;
      group.add(righel);

      // Вертикальная связь от ригеля до верхнего пояса
      const leftBrace = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, trussHeight, 0.04),
        connectionMaterial
      );
      leftBrace.position.set(-width / 2, height + trussHeight / 2, z + columnStep / 2);
      leftBrace.castShadow = true;
      group.add(leftBrace);

      const rightBrace = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, trussHeight, 0.04),
        connectionMaterial
      );
      rightBrace.position.set(width / 2, height + trussHeight / 2, z + columnStep / 2);
      rightBrace.castShadow = true;
      group.add(rightBrace);
    }

    // Продольные связи между колоннами (если не последняя)
    if (i < columnCount - 1) {
      const nextZ = ((i + 1) * columnStep) - length / 2;
      const midZ = (z + nextZ) / 2;
      const bayLength = nextZ - z;

      // Нижняя продольная связь
      const bottomTie = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.06, bayLength),
        connectionMaterial
      );
      bottomTie.position.set(-width / 2, 2, midZ);
      bottomTie.castShadow = true;
      group.add(bottomTie);

      const bottomTieRight = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.06, bayLength),
        connectionMaterial
      );
      bottomTieRight.position.set(width / 2, 2, midZ);
      bottomTieRight.castShadow = true;
      group.add(bottomTieRight);

      // Верхняя продольная связь
      const topTie = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, bayLength),
        connectionMaterial
      );
      topTie.position.set(-width / 2, height - 0.5, midZ);
      topTie.castShadow = true;
      group.add(topTie);

      const topTieRight = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, bayLength),
        connectionMaterial
      );
      topTieRight.position.set(width / 2, height - 0.5, midZ);
      topTieRight.castShadow = true;
      group.add(topTieRight);
    }
  }

  // === ФЕРМЫ ПОКРЫТИЯ ===
  for (let i = 0; i < columnCount - 1; i++) {
    const z = (i * columnStep) - length / 2;
    const zNext = ((i + 1) * columnStep) - length / 2;
    const bayLength = zNext - z;

    // Нижний пояс фермы (по длине)
    const bottomChord = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.08, bayLength),
      steelMaterial
    );
    bottomChord.position.set(-width / 2, height, z + bayLength / 2);
    bottomChord.castShadow = true;
    bottomChord.receiveShadow = true;
    group.add(bottomChord);

    // Верхний пояс (конек)
    const topChord = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.06, bayLength),
      steelHighlightMaterial
    );
    topChord.position.set(0, height + trussHeight, z + bayLength / 2);
    topChord.castShadow = true;
    topChord.receiveShadow = true;
    group.add(topChord);

    // Раскосы в ферме (каждые 1.5м)
    const braceCount = Math.floor(bayLength / 1.5);
    for (let j = 0; j <= braceCount; j++) {
      const braceZ = z + (j * bayLength) / braceCount;
      
      // Левый раскос
      const leftBraceHeight = trussHeight;
      const leftBraceLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(leftBraceHeight, 2));
      const leftBrace = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, leftBraceLength, 0.04),
        connectionMaterial
      );
      leftBrace.position.set(-width / 4, height + leftBraceHeight / 2, braceZ);
      leftBrace.rotation.z = Math.atan((width / 2) / leftBraceHeight);
      leftBrace.castShadow = true;
      group.add(leftBrace);

      // Правый раскос
      const rightBrace = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, leftBraceLength, 0.04),
        connectionMaterial
      );
      rightBrace.position.set(width / 4, height + leftBraceHeight / 2, braceZ);
      rightBrace.rotation.z = -Math.atan((width / 2) / leftBraceHeight);
      rightBrace.castShadow = true;
      group.add(rightBrace);
    }
  }

  // === СЭНДВИЧ-ПАНЕЛИ ===
  if (showSandwich) {
    // Стены
    const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, height, length),
      sandwichMaterial
    );
    leftWall.position.set(-width / 2 - 0.1, height / 2, 0);
    leftWall.receiveShadow = true;
    leftWall.castShadow = true;
    group.add(leftWall);

    const rightWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, height, length),
      sandwichMaterial
    );
    rightWall.position.set(width / 2 + 0.1, height / 2, 0);
    rightWall.receiveShadow = true;
    rightWall.castShadow = true;
    group.add(rightWall);

    // Кровля
    const roofHeight = height + trussHeight;
    const slopeLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(trussHeight, 2));
    const angle = Math.atan(trussHeight / (width / 2));

    const leftRoof = new THREE.Mesh(
      new THREE.BoxGeometry(slopeLength, 0.06, length),
      sandwichMaterial
    );
    leftRoof.position.set(-width / 4, roofHeight - trussHeight / 2, 0);
    leftRoof.rotation.z = angle;
    leftRoof.receiveShadow = true;
    leftRoof.castShadow = true;
    group.add(leftRoof);

    const rightRoof = new THREE.Mesh(
      new THREE.BoxGeometry(slopeLength, 0.06, length),
      sandwichMaterial
    );
    rightRoof.position.set(width / 4, roofHeight - trussHeight / 2, 0);
    rightRoof.rotation.z = -angle;
    rightRoof.receiveShadow = true;
    rightRoof.castShadow = true;
    group.add(rightRoof);

    // Конек (гребень кровли)
    const ridge = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, length),
      steelHighlightMaterial
    );
    ridge.position.set(0, roofHeight + 0.05, 0);
    ridge.castShadow = true;
    group.add(ridge);
  }
}
