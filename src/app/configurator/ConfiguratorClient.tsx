// @ts-nocheck
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Динамический импорт ThreeCanvas без SSR
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-slate-400">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Загрузка 3D движка...</p>
      </div>
    </div>
  ),
});

const RAL_COLORS = [
  { name: "RAL 5005 Синий",     hex: "#1a4b8c", value: 0x1a4b8c },
  { name: "RAL 6005 Зелёный",   hex: "#1f4f2b", value: 0x1f4f2b },
  { name: "RAL 7035 Светло-серый", hex: "#c2c5c0", value: 0xc2c5c0 },
  { name: "RAL 3005 Бордо",     hex: "#621827", value: 0x621827 },
  { name: "RAL 8017 Коричневый",hex: "#4a2b1a", value: 0x4a2b1a },
  { name: "RAL 9003 Белый",     hex: "#f4f4f4", value: 0xf4f4f4 },
  { name: "RAL 1018 Жёлтый",   hex: "#f5d033", value: 0xf5d033 },
  { name: "RAL 2004 Оранжевый",hex: "#e05c1a", value: 0xe05c1a },
];

export default function ConfiguratorClient() {
  const [width, setWidth] = useState(18);
  const [length, setLength] = useState(36);
  const [height, setHeight] = useState(5);
  const [showSandwich, setShowSandwich] = useState(false);
  const [wallColor, setWallColor] = useState(RAL_COLORS[0].value);
  const [showWindows, setShowWindows] = useState(false);
  const [showGate, setShowGate] = useState(false);

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
                className="w-full accent-blue-500"
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
                className="w-full accent-blue-500"
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
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>4м</span>
                <span>9м</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={showSandwich} onChange={(e) => setShowSandwich(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                <span className="text-sm font-medium">Сэндвич-панели</span>
              </label>
              {showSandwich && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={showWindows} onChange={(e) => setShowWindows(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <span className="text-sm font-medium">Окна</span>
                </label>
              )}
              {showSandwich && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={showGate} onChange={(e) => setShowGate(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <span className="text-sm font-medium">Секционные ворота</span>
                </label>
              )}
            </div>

            {showSandwich && (
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm font-medium text-slate-300 mb-3">Цвет обшивки</p>
                <div className="grid grid-cols-4 gap-2">
                  {RAL_COLORS.map((c) => (
                    <button
                      key={c.value}
                      title={c.name}
                      onClick={() => setWallColor(c.value)}
                      className={`w-full aspect-square rounded-md border-2 transition-all ${
                        wallColor === c.value ? "border-white scale-110" : "border-transparent hover:border-slate-400"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">{RAL_COLORS.find(c => c.value === wallColor)?.name}</p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-700 text-xs text-slate-400">
              <p>Колонн: {Math.ceil(length / 6) + 1}</p>
              <p>Ферм: {Math.ceil(length / 6)}</p>
              <p>Площадь: {width * length} м²</p>
            </div>
          </div>

          <a
            href="/"
            className="mt-8 block w-full py-3 text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Вернуться на сайт
          </a>
        </div>

        <div className="flex-1 relative min-h-[500px]">
          <ThreeCanvas
            width={width}
            length={length}
            height={height}
            showSandwich={showSandwich}
            wallColor={wallColor}
            showWindows={showWindows}
            showGate={showGate}
          />
          
          <div className="absolute bottom-4 left-4 text-xs text-slate-400 bg-slate-900/80 px-3 py-2 rounded">
            ЛКМ — вращение • Колесо — zoom • ПКМ — панорама
          </div>
        </div>
      </div>
    </div>
  );
}
