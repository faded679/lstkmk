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
  wallColor: number;
  showWindows: boolean;
  showGate: boolean;
}

export default function ThreeCanvas({ width, length, height, showSandwich, wallColor, showWindows, showGate }: ThreeCanvasProps) {
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

    createBuilding(buildingGroup, width, length, height, showSandwich, wallColor, showWindows, showGate);

    camera.position.set(width * 0.8, height * 1.5, length * 0.8);
    controls.target.set(0, height / 2, 0);
    controls.update();
  }, [width, length, height, showSandwich, wallColor, showWindows, showGate]);

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

function createBuilding(group: THREE.Group, width: number, length: number, height: number, showSandwich: boolean, wallColor: number, showWindows: boolean, showGate: boolean) {
  const columnStep = 6;
  // Уклон кровли ~15° от горизонта
  const roofPitch = Math.tan(15 * Math.PI / 180);
  const apexH = height + (width / 2) * roofPitch; // высота конька над землёй
  const halfW = width / 2;

  // Материалы
  const steelMat  = new THREE.MeshStandardMaterial({ color: 0x8b9299, roughness: 0.35, metalness: 0.85 });
  const purlinMat = new THREE.MeshStandardMaterial({ color: 0x9aa2a8, roughness: 0.4,  metalness: 0.75 });
  const boltMat   = new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.3,  metalness: 0.9  });
  const wallMat   = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.55, metalness: 0.2, side: THREE.DoubleSide });
  const roofMat   = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.4,  metalness: 0.25, side: THREE.DoubleSide });
  const glassMat  = new THREE.MeshStandardMaterial({ color: 0xadd8e6, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
  const gateMat   = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.4, metalness: 0.35 });
  const frameMat  = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.4, metalness: 0.7 });

  const frameCount = Math.ceil(length / columnStep);
  const totalLen   = frameCount * columnStep;
  const startZ     = -totalLen / 2;

  // Вспомогательная функция — добавить box-mesh
  function box(sx: number, sy: number, sz: number, mat: THREE.Material, px: number, py: number, pz: number, rx = 0, ry = 0, rz = 0) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    m.position.set(px, py, pz);
    m.rotation.set(rx, ry, rz);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  }

  // ── РАМЫ ──────────────────────────────────────────────────────────────────
  // Каждая рама = левая колонна + правая колонна + левый рафтер + правый рафтер
  for (let i = 0; i <= frameCount; i++) {
    const z = startZ + i * columnStep;

    // Колонны (вертикальные, 0.2×0.15 сечение)
    box(0.2, height, 0.15, steelMat, -halfW, height / 2, z);
    box(0.2, height, 0.15, steelMat,  halfW, height / 2, z);

    // Опорные пластины у основания
    box(0.4, 0.06, 0.3, boltMat, -halfW, 0.03, z);
    box(0.4, 0.06, 0.3, boltMat,  halfW, 0.03, z);

    // Рафтеры (наклонные балки крыши от верха колонны до конька)
    // Левый рафтер: от (-halfW, height) до (0, apexH)
    {
      const dx = halfW, dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle  = Math.atan2(dy, dx); // наклон от горизонта
      const midX   = -halfW + dx / 2;
      const midY   = height + dy / 2;
      box(rafLen, 0.18, 0.12, steelMat, midX, midY, z, 0, 0, angle);
    }
    // Правый рафтер (зеркально)
    {
      const dx = halfW, dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle  = Math.atan2(dy, dx);
      const midX   = halfW - dx / 2;
      const midY   = height + dy / 2;
      box(rafLen, 0.18, 0.12, steelMat, midX, midY, z, 0, 0, -angle);
    }

    // Коньковый узел (небольшой блок на вершине)
    box(0.25, 0.25, 0.15, boltMat, 0, apexH, z);
  }

  // ── ПРОГОНЫ СТЕН (горизонтальные вдоль здания, на левой и правой стене) ──
  const wallPurlinCount = Math.max(2, Math.round(height / 1.5));
  for (let p = 1; p <= wallPurlinCount; p++) {
    const y = (height / (wallPurlinCount + 1)) * p;
    box(0.08, 0.06, totalLen, purlinMat, -halfW, y, 0);
    box(0.08, 0.06, totalLen, purlinMat,  halfW, y, 0);
  }

  // ── ПРОГОНЫ КРОВЛИ (вдоль здания, вдоль скатов) ──────────────────────────
  const roofPurlinCount = 4; // прогонов на каждом скате
  {
    const dx = halfW, dy = apexH - height;
    const rafLen = Math.sqrt(dx * dx + dy * dy);
    const angle  = Math.atan2(dy, dx);
    for (let p = 1; p <= roofPurlinCount; p++) {
      const t = p / (roofPurlinCount + 1); // 0..1 вдоль рафтера
      // Левый скат: начало (-halfW, height), конец (0, apexH)
      const lx = -halfW + dx * t;
      const ly = height + dy * t;
      box(0.06, 0.06, totalLen, purlinMat, lx, ly, 0, 0, 0, angle);
      // Правый скат
      box(0.06, 0.06, totalLen, purlinMat, -lx, ly, 0, 0, 0, -angle);
    }
  }

  // ── ПРОДОЛЬНАЯ КОНЁК-СВЯЗЬ ────────────────────────────────────────────────
  box(0.1, 0.1, totalLen, steelMat, 0, apexH, 0);

  // ── КРЕСТОВЫЕ СВЯЗИ В БОКОВЫХ СТЕНАХ (первый и последний пролёт) ──────────
  for (const span of [0, frameCount - 1]) {
    const z0 = startZ + span * columnStep;
    const z1 = z0 + columnStep;
    addDiag(group, -halfW, 0,      z0, -halfW, height, z1, 0.05, steelMat);
    addDiag(group, -halfW, height, z0, -halfW, 0,      z1, 0.05, steelMat);
    addDiag(group,  halfW, 0,      z0,  halfW, height, z1, 0.05, steelMat);
    addDiag(group,  halfW, height, z0,  halfW, 0,      z1, 0.05, steelMat);
  }

  // ── ТОРЦЕВЫЕ СТЕНЫ (фронтоны) ─────────────────────────────────────────────
  // Промежуточные колонны на торцах + горизонтальные прогоны + рафтеры фронтона
  const endColStep = 3; // шаг промежуточных колонн на торце
  const endColCount = Math.floor(width / endColStep) - 1; // колонны между угловыми

  for (const endZ of [startZ, startZ + totalLen]) {
    // Промежуточные колонны торца (не угловые — угловые уже есть в рамах)
    for (let c = 1; c <= endColCount; c++) {
      const cx = -halfW + c * (width / (endColCount + 1));
      // Высота колонны до точки на рафтере
      const colH = height + Math.abs(cx) * roofPitch; // высота у края = height, к центру растёт
      // Поправка: высота = height + (halfW - |cx|) * roofPitch
      const colHeight = height + (halfW - Math.abs(cx)) * roofPitch;
      box(0.15, colHeight, 0.15, steelMat, cx, colHeight / 2, endZ);
      // Опорная пластина
      box(0.3, 0.05, 0.3, boltMat, cx, 0.025, endZ);
    }

    // Горизонтальные прогоны торцевой стены
    const endPurlinCount = Math.max(2, Math.round(height / 1.5));
    for (let p = 1; p <= endPurlinCount; p++) {
      const y = (height / (endPurlinCount + 1)) * p;
      box(width, 0.06, 0.08, purlinMat, 0, y, endZ);
    }

    // Рафтеры фронтона: от каждой промежуточной колонны до конька
    const dx = halfW, dy = apexH - height;
    const rafAngle = Math.atan2(dy, dx);
    // Левый рафтер фронтона (от -halfW до 0)
    const rafLen = Math.sqrt(dx * dx + dy * dy);
    box(rafLen, 0.12, 0.1, steelMat, -dx / 2, height + dy / 2, endZ, 0, 0,  rafAngle);
    // Правый рафтер фронтона
    box(rafLen, 0.12, 0.1, steelMat,  dx / 2, height + dy / 2, endZ, 0, 0, -rafAngle);

    // Прогоны фронтона вдоль скатов (между угловой колонной и коньком)
    const frontPurlinCount = 3;
    for (let p = 1; p <= frontPurlinCount; p++) {
      const t = p / (frontPurlinCount + 1);
      const lx = -halfW + dx * t;
      const ly = height + dy * t;
      box(0.08, 0.06, 0.08, purlinMat, lx,  ly, endZ);
      box(0.08, 0.06, 0.08, purlinMat, -lx, ly, endZ);
    }

    // Крестовая связь на фронтоне (в плоскости торца)
    addDiag(group, -halfW, 0,      endZ, 0, apexH, endZ, 0.05, steelMat);
    addDiag(group,  halfW, 0,      endZ, 0, apexH, endZ, 0.05, steelMat);
  }

  // ── ПРОГОНЫ ПЕРЕДНЕЙ И ЗАДНЕЙ СТЕНЫ вдоль здания (нижние пояса) ──────────
  // Горизонтальные пояса у основания торцов — связывают торцевые колонны вдоль здания
  // (уже есть прогоны боковых стен; добавляем лишь нижний обвязочный пояс)
  box(0.1, 0.08, totalLen, steelMat, -halfW, 0.12, 0);
  box(0.1, 0.08, totalLen, steelMat,  halfW, 0.12, 0);

  // ── СЭНДВИЧ-ПАНЕЛИ ────────────────────────────────────────────────────────
  if (showSandwich) {
    const thick = 0.12;
    const gateW = Math.min(4.5, halfW * 1.2); // ширина ворот
    const gateH = Math.min(4.2, height - 0.3); // высота ворот
    const frontZ = startZ - thick / 2; // передний торец
    const backZ  = startZ + totalLen + thick / 2;

    // Боковые стены
    if (showWindows) {
      // Окно центрировано в пролёте. Пролёт от z0 до z1 (длина columnStep).
      // Раскладка по Z: [глухая полоса sideLen] [окно winW] [глухая полоса sideLen]
      const winW = 1.5, winH = 1.2;
      const winBottomY = height * 0.45;   // низ окна
      const winTopY    = winBottomY + winH; // верх окна
      const sideLen    = (columnStep - winW) / 2; // ширина боковой глухой полосы

      for (let i = 0; i < frameCount; i++) {
        const z0  = startZ + i * columnStep;         // левая рама пролёта
        const wz  = z0 + columnStep / 2;             // центр пролёта = центр окна
        const zL  = z0 + sideLen / 2;                // центр левой глухой полосы
        const zR  = z0 + columnStep - sideLen / 2;   // центр правой глухой полосы

        for (const sx of [-halfW - thick / 2, halfW + thick / 2]) {
          // Левая глухая полоса (полная высота)
          box(thick, height, sideLen, wallMat, sx, height / 2, zL);
          // Правая глухая полоса (полная высота)
          box(thick, height, sideLen, wallMat, sx, height / 2, zR);
          // Панель ниже окна
          box(thick, winBottomY, winW, wallMat, sx, winBottomY / 2, wz);
          // Панель выше окна
          const aboveH = height - winTopY;
          box(thick, aboveH, winW, wallMat, sx, winTopY + aboveH / 2, wz);
          // Стекло
          box(thick, winH, winW, glassMat, sx, winBottomY + winH / 2, wz);
        }
      }
    } else {
      box(thick, height, totalLen, wallMat, -halfW - thick / 2, height / 2, 0);
      box(thick, height, totalLen, wallMat,  halfW + thick / 2, height / 2, 0);
    }

    // Торцевые стены
    for (const z of [frontZ, backZ]) {
      const isGateSide = showGate && (z === frontZ);
      if (isGateSide) {
        // Боковые полосы рядом с воротами
        const sideW = (width - gateW) / 2;
        box(sideW, height, thick, wallMat, -halfW + sideW / 2, height / 2, z);
        box(sideW, height, thick, wallMat,  halfW - sideW / 2, height / 2, z);
        // Полоса над воротами
        box(gateW, height - gateH, thick, wallMat, 0, gateH + (height - gateH) / 2, z);
        // Ворота (секционные — 3 секции)
        const secH = gateH / 3;
        for (let s = 0; s < 3; s++) {
          box(gateW - 0.1, secH - 0.05, thick * 0.8, gateMat, 0, secH * s + secH / 2 + 0.05, z);
          // горизонтальная планка между секциями
          if (s < 2) box(gateW, 0.06, thick * 1.2, frameMat, 0, secH * (s + 1), z);
        }
        // Рама ворот
        box(0.1, gateH, thick * 1.5, frameMat, -gateW / 2, gateH / 2, z);
        box(0.1, gateH, thick * 1.5, frameMat,  gateW / 2, gateH / 2, z);
        box(gateW, 0.1, thick * 1.5, frameMat, 0, gateH, z);
        // Дверь рядом с воротами (правая сторона)
        const doorW = 0.9, doorH = 2.1;
        const doorX = halfW - sideW / 2 - doorW;
        box(doorW, doorH, thick * 0.8, gateMat, doorX, doorH / 2, z);
        box(doorW, 0.05, thick * 1.3, frameMat, doorX, doorH, z);
        box(0.05, doorH, thick * 1.3, frameMat, doorX - doorW / 2, doorH / 2, z);
        box(0.05, doorH, thick * 1.3, frameMat, doorX + doorW / 2, doorH / 2, z);
      } else {
        box(width, height, thick, wallMat, 0, height / 2, z);
      }
      // Фронтон (треугольная часть над height)
      const dx = halfW, dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle  = Math.atan2(dy, dx);
      box(rafLen, thick, thick, wallMat, -dx / 2, height + dy / 2, z, 0, 0, angle);
      box(rafLen, thick, thick, wallMat,  dx / 2, height + dy / 2, z, 0, 0, -angle);
    }

    // Кровля — два ската
    {
      const dx = halfW, dy = apexH - height;
      const rafLen = Math.sqrt(dx * dx + dy * dy);
      const angle  = Math.atan2(dy, dx);
      box(rafLen, thick, totalLen, roofMat, -dx / 2, height + dy / 2, 0, 0, 0,  angle);
      box(rafLen, thick, totalLen, roofMat,  dx / 2, height + dy / 2, 0, 0, 0, -angle);
    }

    // Конёк
    box(0.2, 0.15, totalLen, steelMat, 0, apexH + thick / 2, 0);
  }
}

// Хелпер для создания диагональной связи
function addDiag(group: THREE.Group, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, thickness: number, material: THREE.Material) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const geometry = new THREE.BoxGeometry(thickness, len, thickness);
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
  mesh.lookAt(x2, y2, z2);
  mesh.rotateX(Math.PI / 2);
  mesh.castShadow = true;
  group.add(mesh);
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
