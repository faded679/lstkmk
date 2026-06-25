"use client";

import { useState } from "react";

type PanelType = "wall" | "roof" | "both";
type Insulation = "pir" | "eps" | "mineral";

const PRICE: Record<PanelType, Record<Insulation, [number, number]>> = {
  wall: { pir: [1800, 2200], eps: [1200, 1800], mineral: [1900, 2400] },
  roof: { pir: [1800, 2800], eps: [1400, 1900], mineral: [2000, 2500] },
  both: { pir: [1800, 2500], eps: [1300, 1900], mineral: [1900, 2450] },
};

const thicknessList = [50, 80, 100, 120, 150, 200];

export default function SandwichCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [panelType, setPanelType] = useState<PanelType>("both");
  const [thickness, setThickness] = useState(100);
  const [insulation, setInsulation] = useState<Insulation>("pir");
  const [result, setResult] = useState<null | {
    wallArea: number;
    roofArea: number;
    totalArea: number;
    priceMin: number;
    priceMax: number;
  }>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!l || !w || !h || l <= 0 || w <= 0 || h <= 0) return;

    const wallArea = (l + w) * 2 * h;
    const roofArea = l * w * 1.07;

    let totalArea = 0;
    if (panelType === "wall") totalArea = wallArea;
    else if (panelType === "roof") totalArea = roofArea;
    else totalArea = wallArea + roofArea;

    const [min, max] = PRICE[panelType][insulation];
    const thicknessMultiplier = 1 + (thickness - 100) * 0.003;
    setResult({
      wallArea: Math.round(wallArea),
      roofArea: Math.round(roofArea),
      totalArea: Math.round(totalArea),
      priceMin: Math.round(totalArea * min * thicknessMultiplier),
      priceMax: Math.round(totalArea * max * thicknessMultiplier),
    });
  };

  const fmt = (n: number) => n.toLocaleString("ru-RU");

  return (
    <div className="border border-border rounded-2xl overflow-hidden mb-10">
      <div className="bg-slate-50 px-6 py-4 border-b border-border">
        <p className="font-semibold text-foreground">Параметры здания</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Длина здания (м)", value: length, set: setLength },
            { label: "Ширина здания (м)", value: width, set: setWidth },
            { label: "Высота стен (м)", value: height, set: setHeight },
          ].map(({ label, value, set }) => (
            <div key={label}>
              <label className="block text-sm text-muted mb-1">{label}</label>
              <input
                type="number"
                min="1"
                step="0.5"
                value={value}
                onChange={(e) => set(e.target.value)}
                placeholder="0"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm text-muted mb-1">Тип панелей</label>
            <select
              value={panelType}
              onChange={(e) => setPanelType(e.target.value as PanelType)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            >
              <option value="wall">Стеновые</option>
              <option value="roof">Кровельные</option>
              <option value="both">Стеновые + Кровельные</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Толщина панелей</label>
            <select
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            >
              {thicknessList.map((t) => (
                <option key={t} value={t}>{t} мм</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Утеплитель</label>
            <select
              value={insulation}
              onChange={(e) => setInsulation(e.target.value as Insulation)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            >
              <option value="pir">PIR</option>
              <option value="eps">ППС (пенополистирол)</option>
              <option value="mineral">Минвата</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full sm:w-auto px-8 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors text-sm"
        >
          Рассчитать
        </button>

        {result && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Площадь стен", value: `${fmt(result.wallArea)} м²` },
              { label: "Площадь кровли", value: `${fmt(result.roofArea)} м²` },
              { label: "Общая площадь", value: `${fmt(result.totalArea)} м²` },
              { label: "Стоимость (ориент.)", value: `${fmt(result.priceMin)}–${fmt(result.priceMax)} ₽`, highlight: true },
            ].map(({ label, value, highlight }) => (
              <div
                key={label}
                className={`rounded-xl p-4 border ${highlight ? "border-accent-blue/30 bg-accent-blue/5" : "border-border bg-slate-50"}`}
              >
                <p className="text-xs text-muted mb-1">{label}</p>
                <p className={`font-bold text-sm ${highlight ? "text-accent-blue" : "text-foreground"}`}>{value}</p>
              </div>
            ))}
            <p className="col-span-2 sm:col-span-4 text-xs text-muted mt-1">
              * Ориентировочная стоимость материала без монтажа и доставки. Для точного расчёта оставьте заявку.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
