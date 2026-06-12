"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Warehouse,
  Barn,
  Wrench,
} from "@phosphor-icons/react";

type BuildingType = "small-building" | "warehouse" | "agriculture" | "service";
type Insulation = "none" | "proflist" | "sandwich";

// Цена за м² (руб/м²) по контрольным площадям — чем больше площадь, тем дешевле
// Опорные точки из реальных расчётов:
//   warehouse:   288м²→5463, 1080м²→5520, 1440м²→4648, 2160м²→4957
//   agriculture: 3912м²→4719
//   service:     288м²→5463
const standardAreas = [100, 300, 600, 1000, 1440, 2160, 3000, 4000];

const priceMatrix: Record<BuildingType, number[]> = {
  //                    100    300    600    1000   1440   2160   3000   4000  м²
  "small-building":  [9500,  7800,  7000,  6500,  6200,  6000,  5800,  5600],
  warehouse:         [7500,  6500,  5900,  5600,  4648,  4957,  4700,  4500],
  agriculture:       [7800,  6800,  6000,  5500,  5100,  4900,  4719,  4600],
  service:           [8500,  7200,  6300,  5800,  5463,  5200,  5000,  4800],
};

// Allowed discrete values per type
const typeConfig: Record<BuildingType, { widths: number[]; lengthMin: number; lengthMax: number; lengthStep: number; heights: number[] }> = {
  "small-building": { widths: [4, 6, 8, 10],        lengthMin: 6,  lengthMax: 24,  lengthStep: 6,   heights: [3, 4, 5, 6] },
  warehouse:        { widths: [18, 20, 24, 30, 36],  lengthMin: 30, lengthMax: 120, lengthStep: 6,   heights: [5, 6, 7, 8, 9] },
  agriculture:      { widths: [32.6],                lengthMin: 48, lengthMax: 120, lengthStep: 4.8, heights: [4] },
  service:          { widths: [12, 15, 18],          lengthMin: 18, lengthMax: 120, lengthStep: 6,   heights: [4, 5, 6, 7] },
};

const buildingTypes: {
  id: BuildingType;
  label: string;
  icon: typeof Warehouse;
}[] = [
  { id: "small-building", label: "До 300 м²",           icon: Warehouse },
  { id: "warehouse",      label: "Склад / Производство", icon: Warehouse },
  { id: "agriculture",    label: "Сельхоз",              icon: Barn },
  { id: "service",        label: "Автосервис / Гараж",   icon: Wrench },
];

const insulationOptions: {
  id: Insulation;
  label: string;
  multiplier: number;
}[] = [
  { id: "none",     label: "Без утепления",  multiplier: 0.85 },
  { id: "proflist", label: "Профлист",        multiplier: 1 },
  { id: "sandwich", label: "Сэндвич-панели",  multiplier: 1.25 },
];

export default function Calculator() {
  const reduce = useReducedMotion();
  const [type, setType] = useState<BuildingType>("warehouse");

  const cfg = typeConfig[type];

  const [widthIdx, setWidthIdx]   = useState(0);
  const [lengthVal, setLengthVal] = useState(cfg.lengthMin);
  const [heightIdx, setHeightIdx] = useState(0);
  const [insulation, setInsulation] = useState<Insulation>("none");

  // Reset sliders when type changes
  useEffect(() => {
    setWidthIdx(0);
    setLengthVal(typeConfig[type].lengthMin);
    setHeightIdx(0);
  }, [type]);

  const width  = cfg.widths[widthIdx];
  const length = lengthVal;
  const height = cfg.heights[heightIdx];

  // Number of length steps
  const lengthSteps = Math.round((cfg.lengthMax - cfg.lengthMin) / cfg.lengthStep);

  // Convert slider index → length value
  const lengthFromIdx = (idx: number) =>
    Math.round((cfg.lengthMin + idx * cfg.lengthStep) * 10) / 10;

  const selectedType = buildingTypes.find((t) => t.id === type)!;
  const selectedInsulation = insulationOptions.find(
    (i) => i.id === insulation
  )!;

  // Интерполируем цену за м² по площади, затем умножаем на площадь
  const getPriceFromMatrix = (area: number, bType: BuildingType): number => {
    const rates = priceMatrix[bType];
    if (!rates) return 0;

    let ratePerSqm: number;

    if (area <= standardAreas[0]) {
      ratePerSqm = rates[0];
    } else if (area >= standardAreas[standardAreas.length - 1]) {
      ratePerSqm = rates[rates.length - 1];
    } else {
      ratePerSqm = rates[0];
      for (let i = 0; i < standardAreas.length - 1; i++) {
        if (area >= standardAreas[i] && area <= standardAreas[i + 1]) {
          const t = (area - standardAreas[i]) / (standardAreas[i + 1] - standardAreas[i]);
          ratePerSqm = rates[i] + t * (rates[i + 1] - rates[i]);
          break;
        }
      }
    }

    return ratePerSqm * area;
  };

  const estimate = useMemo(() => {
    const area = width * length;
    const basePrice = getPriceFromMatrix(area, type);
    const heightMultiplier = height > 6 ? 1 + (height - 6) * 0.03 : 1;
    const total = basePrice * selectedInsulation.multiplier * heightMultiplier;
    return { area, total };
  }, [width, length, height, type, selectedInsulation]);

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("ru-RU").format(Math.round(n));

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Калькулятор стоимости
          </h2>
          <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
            Рассчитайте предварительную стоимость вашего здания.
            Точную смету подготовим после выезда инженера.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Тип здания
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {buildingTypes.map((bt) => (
                  <button
                    key={bt.id}
                    onClick={() => setType(bt.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all duration-200 ${
                      type === bt.id
                        ? "border-accent-blue bg-accent-blue/5 text-accent-blue"
                        : "border-border bg-white text-muted hover:border-slate-300"
                    }`}
                  >
                    <bt.icon
                      size={24}
                      weight={type === bt.id ? "duotone" : "regular"}
                    />
                    <span className="text-xs font-medium">{bt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Ширина — дискретные кнопки */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ширина, м
                </label>
                {cfg.widths.length === 1 ? (
                  <div className="mt-1 text-2xl font-bold text-foreground">
                    {cfg.widths[0]}
                    <span className="text-sm font-normal text-muted ml-1">м</span>
                  </div>
                ) : (
                  <>
                    <input
                      type="range"
                      min={0}
                      max={cfg.widths.length - 1}
                      step={1}
                      value={widthIdx}
                      onChange={(e) => setWidthIdx(Number(e.target.value))}
                      className="w-full accent-accent-blue"
                    />
                    <div className="mt-1 text-2xl font-bold text-foreground">
                      {width}
                      <span className="text-sm font-normal text-muted ml-1">м</span>
                    </div>
                  </>
                )}
              </div>

              {/* Длина — непрерывный ползунок с шагом */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Длина, м
                </label>
                <input
                  type="range"
                  min={0}
                  max={lengthSteps}
                  step={1}
                  value={Math.round((lengthVal - cfg.lengthMin) / cfg.lengthStep)}
                  onChange={(e) => setLengthVal(lengthFromIdx(Number(e.target.value)))}
                  className="w-full accent-accent-blue"
                />
                <div className="mt-1 text-2xl font-bold text-foreground">
                  {length}
                  <span className="text-sm font-normal text-muted ml-1">м</span>
                </div>
              </div>

              {/* Высота — дискретные кнопки */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Высота, м
                </label>
                {cfg.heights.length === 1 ? (
                  <div className="mt-1 text-2xl font-bold text-foreground">
                    {cfg.heights[0]}
                    <span className="text-sm font-normal text-muted ml-1">м</span>
                  </div>
                ) : (
                  <>
                    <input
                      type="range"
                      min={0}
                      max={cfg.heights.length - 1}
                      step={1}
                      value={heightIdx}
                      onChange={(e) => setHeightIdx(Number(e.target.value))}
                      className="w-full accent-accent-blue"
                    />
                    <div className="mt-1 text-2xl font-bold text-foreground">
                      {height}
                      <span className="text-sm font-normal text-muted ml-1">м</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Утепление
              </label>
              <div className="grid grid-cols-3 gap-3">
                {insulationOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setInsulation(opt.id)}
                    className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                      insulation === opt.id
                        ? "border-accent-blue bg-accent-blue/5"
                        : "border-border bg-white hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        insulation === opt.id
                          ? "text-accent-blue"
                          : "text-foreground"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 bg-white border border-border rounded-lg p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Предварительный расчёт
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted">Тип</span>
                  <span className="font-medium text-foreground">
                    {selectedType.label}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted">Размеры</span>
                  <span className="font-medium text-foreground">
                    {width} x {length} x {height} м
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted">Площадь</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(estimate.area)} м²
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted">Утепление</span>
                  <span className="font-medium text-foreground">
                    {selectedInsulation.label}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-accent-orange">
                <div className="text-sm text-muted mb-1">
                  Ориентировочная стоимость
                </div>
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  {formatPrice(estimate.total)}{" "}
                  <span className="text-lg font-normal text-muted">руб.</span>
                </div>
                <div className="text-xs text-muted mt-1">
                  ~ {formatPrice(estimate.total / estimate.area)} руб/м²
                </div>
                <div className="text-xs text-amber-600 mt-2">
                  * Цена без монтажа и фундамента. Точная смета после выезда инженера.
                </div>
              </div>

              <a
                href="#contacts"
                className="mt-6 w-full inline-flex h-12 items-center justify-center text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Получить точную смету
              </a>
              <p className="mt-3 text-xs text-muted text-center leading-relaxed">
                Инженер свяжется с вами в течение 2 часов
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
