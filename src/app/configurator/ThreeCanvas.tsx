"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

  // Инициализация сцены
  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return;

    // Сцена
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    scene.fog = new THREE.Fog(0x0f172a, 50, 200);

    // Камера
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(width * 0.8, height * 1.5, length * 0.8);

    // Рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Контролы
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(50, 50, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight2.position.set(-50, 30, -50);
    scene.add(dirLight2);

    // Сетка пола
    const gridHelper = new THREE.GridHelper(200, 100, 0x64748b, 0x475569);
    scene.add(gridHelper);

    // Группа для здания
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Сохраняем ссылки
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

    // Cleanup
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

  // Обновление здания при изменении параметров
  useEffect(() => {
    if (!sceneRef.current) return;

    const { buildingGroup, camera } = sceneRef.current;
    
    // Очищаем предыдущее здание
    while (buildingGroup.children.length > 0) {
      const child = buildingGroup.children[0];
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
      buildingGroup.remove(child);
    }

    // Создаем каркас
    createBuilding(buildingGroup, width, length, height, showSandwich);

    // Обновляем позицию камеры
    camera.position.set(width * 0.8, height * 1.5, length * 0.8);
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

// Функция создания здания
function createBuilding(
  group: THREE.Group,
  width: number,
  length: number,
  height: number,
  showSandwich: boolean
) {
  const columnStep = 6;
  const trussHeight = 1.2;
  
  // Материалы
  const steelMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a5568,
    roughness: 0.4,
    metalness: 0.6,
  });

  const steelHighlightMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.4,
    metalness: 0.6,
  });

  const sandwichMaterial = new THREE.MeshStandardMaterial({
    color: 0xf7fafc,
    roughness: 0.8,
    metalness: 0.1,
  });

  // Колонны
  const columnCount = Math.ceil(length / columnStep) + 1;
  for (let i = 0; i < columnCount; i++) {
    const z = (i * columnStep) - length / 2;
    
    // Левая колонна
    const leftColumn = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, height, 0.15),
      steelMaterial
    );
    leftColumn.position.set(-width / 2, height / 2, z);
    leftColumn.castShadow = true;
    group.add(leftColumn);

    // Правая колонна
    const rightColumn = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, height, 0.15),
      steelMaterial
    );
    rightColumn.position.set(width / 2, height / 2, z);
    rightColumn.castShadow = true;
    group.add(rightColumn);

    // Ригель
    if (i < columnCount - 1) {
      const righel = new THREE.Mesh(
        new THREE.BoxGeometry(width, 0.15, 0.1),
        steelHighlightMaterial
      );
      righel.position.set(0, height, z);
      righel.castShadow = true;
      group.add(righel);
    }
  }

  // Фермы
  for (let i = 0; i < columnCount - 1; i++) {
    const z = (i * columnStep) - length / 2;
    const zNext = ((i + 1) * columnStep) - length / 2;
    const bayLength = zNext - z;

    // Нижний пояс
    const bottomChord = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, bayLength),
      steelMaterial
    );
    bottomChord.position.set(-width / 2, height, z + bayLength / 2);
    bottomChord.castShadow = true;
    group.add(bottomChord);

    // Верхний пояс
    const topChord = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, bayLength),
      steelHighlightMaterial
    );
    topChord.position.set(0, height + trussHeight, z + bayLength / 2);
    topChord.castShadow = true;
    group.add(topChord);
  }

  // Связи между фермами
  for (let i = 1; i < columnCount - 1; i++) {
    const z = (i * columnStep) - length / 2;
    
    const leftConn = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, trussHeight, 0.05),
      steelMaterial
    );
    leftConn.position.set(-width / 2, height + trussHeight / 2, z);
    leftConn.castShadow = true;
    group.add(leftConn);

    const rightConn = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, trussHeight, 0.05),
      steelMaterial
    );
    rightConn.position.set(width / 2, height + trussHeight / 2, z);
    rightConn.castShadow = true;
    group.add(rightConn);
  }

  // Сэндвич-панели
  if (showSandwich) {
    // Стены
    const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, height, length),
      sandwichMaterial
    );
    leftWall.position.set(-width / 2 - 0.1, height / 2, 0);
    leftWall.receiveShadow = true;
    group.add(leftWall);

    const rightWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, height, length),
      sandwichMaterial
    );
    rightWall.position.set(width / 2 + 0.1, height / 2, 0);
    rightWall.receiveShadow = true;
    group.add(rightWall);

    // Кровля
    const roofHeight = height + trussHeight;
    const slopeLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(trussHeight, 2));
    const angle = Math.atan(trussHeight / (width / 2));

    const leftRoof = new THREE.Mesh(
      new THREE.BoxGeometry(slopeLength, 0.08, length),
      sandwichMaterial
    );
    leftRoof.position.set(-width / 4, roofHeight - trussHeight / 2, 0);
    leftRoof.rotation.z = angle;
    leftRoof.receiveShadow = true;
    group.add(leftRoof);

    const rightRoof = new THREE.Mesh(
      new THREE.BoxGeometry(slopeLength, 0.08, length),
      sandwichMaterial
    );
    rightRoof.position.set(width / 4, roofHeight - trussHeight / 2, 0);
    rightRoof.rotation.z = -angle;
    rightRoof.receiveShadow = true;
    group.add(rightRoof);
  }
}
