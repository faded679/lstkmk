"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Warehouse,
  Factory,
  Barn,
  Storefront,
} from "@phosphor-icons/react";

type BuildingType = "warehouse" | "production" | "agriculture" | "commercial" | "small-building" | "service";
type Insulation = "none" | "proflist" | "sandwich" | "pir";

// Real prices from pricelist.txt (300, 600, 900, 1200, 1500 m2)
const priceMatrix: Record<BuildingType, number[]> = {
  "small-building": [2100000, 3600000, 4950000, 6000000, 7500000],  // Здания до 300м² (7000/6000/5500/5000/5000 ₽/м²)
  warehouse: [1425000, 2850000, 4275000, 5700000, 7125000],    // Склады
  production: [1185000, 2370000, 3555000, 4740000, 5925000],   // Производство
  agriculture: [1725000, 3450000, 5175000, 6900000, 8625000],  // Коровники (avg)
  commercial: [1635000, 3270000, 4905000, 6540000, 8175000],   // Выставочные залы
  service: [1605000, 3210000, 4815000, 6420000, 8025000],      // СТО/автомойки
};

const standardAreas = [300, 600, 900, 1200, 1500];

const buildingTypes: {
  id: BuildingType;
  label: string;
  icon: typeof Warehouse;
}[] = [
  { id: "small-building", label: "Здания до 300 м²", icon: Warehouse },
  { id: "warehouse", label: "Склад", icon: Warehouse },
  { id: "production", label: "Производство", icon: Factory },
  { id: "agriculture", label: "Сельхоз", icon: Barn },
  { id: "service", label: "Автосервис", icon: Storefront },
  { id: "commercial", label: "Торговля", icon: Storefront },
];

const insulationOptions: {
  id: Insulation;
  label: string;
  multiplier: number;
}[] = [
  {
    id: "none",
    label: "Без утепления",
    multiplier: 0.85,
  },
  {
    id: "proflist",
    label: "Профлист",
    multiplier: 1,
  },
  {
    id: "sandwich",
    label: "Сэндвич-панели",
    multiplier: 1.25,
  },
  {
    id: "pir",
    label: "PIR-панели",
    multiplier: 1.5,
  },
];

export default function Calculator() {
  const reduce = useReducedMotion();
  const [type, setType] = useState<BuildingType>("warehouse");
  const [width, setWidth] = useState(24);
  const [length, setLength] = useState(48);
  const [height, setHeight] = useState(8);

  // Reset dimensions when switching to small-building
  useEffect(() => {
    if (type === "small-building") {
      setWidth(6);
      setLength(12);
      setHeight(4);
    }
  }, [type]);
  const [insulation, setInsulation] = useState<Insulation>("none");

  const selectedType = buildingTypes.find((t) => t.id === type)!;
  const selectedInsulation = insulationOptions.find(
    (i) => i.id === insulation
  )!;

  // Interpolate price from pricelist based on area
  const getPriceFromMatrix = (area: number, type: BuildingType): number => {
    const prices = priceMatrix[type];
    if (!prices) return 0;
    
    // Find position in standard areas
    for (let i = 0; i < standardAreas.length - 1; i++) {
      if (area >= standardAreas[i] && area <= standardAreas[i + 1]) {
        // Linear interpolation
        const t = (area - standardAreas[i]) / (standardAreas[i + 1] - standardAreas[i]);
        return prices[i] + t * (prices[i + 1] - prices[i]);
      }
    }
    // Extrapolation for areas outside range
    if (area < standardAreas[0]) {
      return (area / standardAreas[0]) * prices[0];
    }
    const lastIdx = standardAreas.length - 1;
    return (area / standardAreas[lastIdx]) * prices[lastIdx];
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ширина, м
                </label>
                <input
                  type="range"
                  min={type === "small-building" ? 0 : 12}
                  max={type === "small-building" ? 3 : 48}
                  step={type === "small-building" ? 1 : 6}
                  value={type === "small-building" ? [4, 6, 8, 10].indexOf(width) : width}
                  onChange={(e) => {
                    if (type === "small-building") {
                      const widths = [4, 6, 8, 10];
                      setWidth(widths[Number(e.target.value)]);
                    } else {
                      setWidth(Number(e.target.value));
                    }
                  }}
                  className="w-full accent-accent-blue"
                />
                <div className="mt-1 text-2xl font-bold text-foreground">
                  {width}
                  <span className="text-sm font-normal text-muted ml-1">м</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Длина, м
                </label>
                <input
                  type="range"
                  min={type === "small-building" ? 0 : 18}
                  max={type === "small-building" ? 3 : 120}
                  step={type === "small-building" ? 1 : 6}
                  value={type === "small-building" ? [6, 12, 18, 24].indexOf(length) : length}
                  onChange={(e) => {
                    if (type === "small-building") {
                      const lengths = [6, 12, 18, 24];
                      setLength(lengths[Number(e.target.value)]);
                    } else {
                      setLength(Number(e.target.value));
                    }
                  }}
                  className="w-full accent-accent-blue"
                />
                <div className="mt-1 text-2xl font-bold text-foreground">
                  {length}
                  <span className="text-sm font-normal text-muted ml-1">м</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Высота, м
                </label>
                <input
                  type="range"
                  min={type === "small-building" ? 0 : 4}
                  max={type === "small-building" ? 3 : 9}
                  step={type === "small-building" ? 1 : 1}
                  value={type === "small-building" ? [3, 4, 5, 6].indexOf(height) : height}
                  onChange={(e) => {
                    if (type === "small-building") {
                      const heights = [3, 4, 5, 6];
                      setHeight(heights[Number(e.target.value)]);
                    } else {
                      setHeight(Number(e.target.value));
                    }
                  }}
                  className="w-full accent-accent-blue"
                />
                <div className="mt-1 text-2xl font-bold text-foreground">
                  {height}
                  <span className="text-sm font-normal text-muted ml-1">м</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Утепление
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
