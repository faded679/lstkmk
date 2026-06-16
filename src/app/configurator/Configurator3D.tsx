// @ts-nocheck
"use client";

import { useState, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, PerspectiveCamera } from "@react-three/drei";
import BuildingFrame from "./BuildingFrame";

export default function Configurator3D() {
  const [width, setWidth] = useState(24);
  const [length, setLength] = useState(48);
  const [height, setHeight] = useState(5);
  const [showSandwich, setShowSandwich] = useState(false);

  const frameConfig = useMemo(() => ({
    width,
    length,
    height,
    columnStep: 6,
    trussHeight: 1.2,
  }), [width, length, height]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-10 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg">МАКСТИЛ 3D</a>
          <span className="text-xs text-slate-400">Beta</span>
        </div>
      </header>

      <div className="pt-14 h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-80 bg-slate-800 border-r border-slate-700 p-6 overflow-y-auto">
          <h1 className="text-xl font-bold mb-6">3D Конфигуратор</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Ширина: {width} м
              </label>
              <input
                type="range"
                min={12}
                max={36}
                step={6}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-accent-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>12м</span>
                <span>36м</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Длина: {length} м
              </label>
              <input
                type="range"
                min={24}
                max={120}
                step={6}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-accent-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>24м</span>
                <span>120м</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Высота: {height} м
              </label>
              <input
                type="range"
                min={4}
                max={9}
                step={1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-accent-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>4м</span>
                <span>9м</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSandwich}
                  onChange={(e) => setShowSandwich(e.target.checked)}
                  className="w-5 h-5 accent-accent-blue"
                />
                <span className="text-sm font-medium">
                  Сэндвич-панели
                </span>
              </label>
            </div>

            <div className="pt-4 border-t border-slate-700 text-xs text-slate-400">
              <p>Колонн: {Math.ceil(length / 6) + 1}</p>
              <p>Ферм: {Math.ceil(length / 6)}</p>
              <p>Площадь: {width * length} м²</p>
            </div>
          </div>

          <a
            href="/"
            className="mt-8 block w-full py-3 text-center text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
          >
            Вернуться на сайт
          </a>
        </div>

        <div className="flex-1 relative">
          <Canvas shadows className="bg-slate-900">
            <PerspectiveCamera makeDefault position={[width * 0.8, height * 1.5, length * 0.8]} />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={10}
              maxDistance={200}
            />
            
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[50, 50, 50]} 
              intensity={1}
              castShadow
              shadow-mapSize={2048}
            />
            <directionalLight position={[-50, 30, -50]} intensity={0.3} />
            
            <Grid 
              position={[0, 0, 0]}
              args={[200, 200]}
              cellSize={2}
              cellThickness={0.5}
              cellColor={"#475569"}
              sectionSize={10}
              sectionThickness={1}
              sectionColor={"#64748b"}
              fadeDistance={100}
              fadeStrength={1}
            />
            
            <BuildingFrame 
              config={frameConfig}
              showSandwich={showSandwich}
            />
          </Canvas>

          <div className="absolute bottom-4 left-4 text-xs text-slate-400 bg-slate-900/80 px-3 py-2 rounded">
            ЛКМ — вращение • Колесо — zoom • ПКМ — панорама
          </div>
        </div>
      </div>
    </div>
  );
}
