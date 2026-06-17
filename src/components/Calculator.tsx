"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Warehouse,
  Barn,
  Wrench,
  Robot,
  PaperPlaneRight,
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

const typeHints: Record<BuildingType, string> = {
  "small-building": "Здания до 300 м² — это хозблоки, гаражи на 2–4 машины, небольшие мастерские, торговые павильоны, бытовки и модульные офисы.",
  warehouse: "Склады и производственные здания — логистические комплексы, распределительные склады, производственные цеха, сборочные линии, упаковочные центры.",
  agriculture: "Сельхоз здания — коровники, телятники, свинарники, птицефабрики, овощехранилища, зернохранилища, сенохранилища.",
  service: "Автосервисы и гаражи — СТО, автомойки, шиномонтажи, автосалоны, гаражные комплексы, пункты техосмотра.",
};

interface ChatMessage {
  role: "assistant" | "user";
  text: string;
  isHint?: boolean;
}

async function getChatResponse(message: string): Promise<string> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.reply;
  } catch {
    return "Извините, произошла ошибка. Позвоните нам: +7 (980) 321-15-42";
  }
}

export default function Calculator() {
  const reduce = useReducedMotion();
  const [type, setType] = useState<BuildingType>("warehouse");

  const cfg = typeConfig[type];

  const [widthIdx, setWidthIdx]   = useState(0);
  const [lengthVal, setLengthVal] = useState(cfg.lengthMin);
  const [heightIdx, setHeightIdx] = useState(0);
  const [insulation, setInsulation] = useState<Insulation>("none");

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Здравствуйте! Я помощник по расчёту. Выберите тип здания — подскажу что в него входит. Задавайте любые вопросы!" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Reset sliders when type changes + send chat hint
  useEffect(() => {
    setWidthIdx(0);
    setLengthVal(typeConfig[type].lengthMin);
    setHeightIdx(0);
    setChatMessages((prev) => {
      const filtered = prev.filter((m) => !m.isHint);
      return [...filtered, { role: "assistant", text: typeHints[type], isHint: true }];
    });
  }, [type]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatMessages, chatLoading]);

  const sendChatMessage = async () => {
    const text = chatInput.trim();
    if (!text || chatLoading) return;
    setChatMessages((prev) => [...prev, { role: "user", text }]);
    setChatInput("");
    setChatLoading(true);
    const reply = await getChatResponse(text);
    setChatMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    setChatLoading(false);
  };

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

  // SVG building sketch — front + side projections with dynamic viewBox
  const BuildingSketch = () => {
    // Scale factors (px per meter) — adjusted for large buildings
    const scaleW = Math.min(6, 180 / Math.max(width, 12));
    const scaleL = Math.min(2.5, 140 / Math.max(length, 24));
    const scaleH = Math.min(15, 160 / Math.max(height, 5));

    const margin = 20;
    const gap = 40;

    // Front view (shows width × height)
    const fw = width * scaleW;
    const fh = height * scaleH;
    const fx = margin;
    const fy = margin + 30 + fh * 0.3; // roof space
    const fRoof = type === "agriculture" ? fy - fw * 0.25 : fy - Math.min(30, fh * 0.3);

    // Side view (shows length × height)
    const sl = length * scaleL;
    const sh = height * scaleH;
    const sx = fx + fw + gap;
    const sy = margin + 30 + sh * 0.3;
    const sRoof = type === "agriculture" ? sy - sl * 0.15 : sy - Math.min(30, sh * 0.3);

    // Dynamic viewBox size
    const svgW = Math.max(400, sx + sl + margin);
    const svgH = Math.max(260, margin + 30 + Math.max(fh, sh) * 1.5 + 40);

    // Common styles
    const strokeWall = { stroke: "currentColor", strokeWidth: 1.5, className: "text-slate-400" };
    const strokeRoof = { stroke: "currentColor", strokeWidth: 2, className: "text-accent-blue" };
    const strokeDetail = { stroke: "currentColor", strokeWidth: 1, className: "text-slate-400" };

    // Front view roof shape
    const frontRoofPath = type === "agriculture"
      ? `M${fx} ${fy} Q${fx + fw / 2} ${fRoof} ${fx + fw} ${fy}`
      : `M${fx} ${fy} L${fx + fw / 2} ${fRoof} L${fx + fw} ${fy}`;

    // Side view roof shape
    const sideRoofPath = type === "agriculture"
      ? `M${sx} ${sy} L${sx + sl} ${sy}`
      : `M${sx} ${sy} L${sx + sl / 2} ${sRoof} L${sx + sl} ${sy}`;

    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-full" fill="none">
        {/* === FRONT VIEW (width × height) === */}
        <text x={fx} y={20} className="text-[11px] fill-slate-500 font-medium">Фасад (Ш×В)</text>

        {/* Walls */}
        <rect x={fx} y={fy} width={fw} height={fh} rx="1" fill="none" {...strokeWall} />

        {/* Roof */}
        <path d={frontRoofPath} fill="none" {...strokeRoof} />
        {type !== "agriculture" && (
          <line x1={fx + fw / 2} y1={fRoof} x2={fx + fw / 2} y2={fy} stroke="currentColor" strokeWidth={0.5} className="text-slate-300" strokeDasharray="3 2" />
        )}

        {/* Columns/pillars for larger buildings */}
        {fw > 100 && Array.from({ length: Math.max(2, Math.floor(fw / 80)) }).map((_, i) => (
          <line
            key={`col-${i}`}
            x1={fx + (i + 1) * (fw / (Math.floor(fw / 80) + 1))}
            y1={fy}
            x2={fx + (i + 1) * (fw / (Math.floor(fw / 80) + 1))}
            y2={fy + fh}
            stroke="currentColor"
            strokeWidth={0.5}
            className="text-slate-300"
            strokeDasharray="4 2"
          />
        ))}

        {/* Door/gate for service/agriculture */}
        {(type === "service" || type === "agriculture" || type === "warehouse") && (
          <rect
            x={fx + fw * 0.35}
            y={fy + fh - Math.min(40, fh * 0.35)}
            width={fw * 0.3}
            height={Math.min(40, fh * 0.35)}
            rx="1"
            fill="none"
            {...strokeDetail}
          />
        )}

        {/* Width dimension label */}
        <line x1={fx} y1={fy + fh + 8} x2={fx + fw} y2={fy + fh + 8} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <line x1={fx} y1={fy + fh + 4} x2={fx} y2={fy + fh + 12} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <line x1={fx + fw} y1={fy + fh + 4} x2={fx + fw} y2={fy + fh + 12} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <text x={fx + fw / 2} y={fy + fh + 18} textAnchor="middle" className="text-[9px] fill-slate-500">{width}м</text>

        {/* === SIDE VIEW (length × height) === */}
        <text x={sx} y={20} className="text-[11px] fill-slate-500 font-medium">Боковой (Д×В)</text>

        {/* Walls */}
        <rect x={sx} y={sy} width={sl} height={sh} rx="1" fill="none" {...strokeWall} />

        {/* Roof */}
        <path d={sideRoofPath} fill="none" {...strokeRoof} />

        {/* Length dimension label */}
        <line x1={sx} y1={sy + sh + 8} x2={sx + sl} y2={sy + sh + 8} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <line x1={sx} y1={sy + sh + 4} x2={sx} y2={sy + sh + 12} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <line x1={sx + sl} y1={sy + sh + 4} x2={sx + sl} y2={sy + sh + 12} stroke="currentColor" strokeWidth={0.5} className="text-slate-400" />
        <text x={sx + sl / 2} y={sy + sh + 18} textAnchor="middle" className="text-[9px] fill-slate-500">{length}м</text>

        {/* Height labels on both views */}
        <text x={fx - 5} y={fy + fh / 2} textAnchor="end" className="text-[9px] fill-slate-500">{height}м</text>
        <text x={sx - 5} y={sy + sh / 2} textAnchor="end" className="text-[9px] fill-slate-500">{height}м</text>

        {/* Dimensions info at bottom */}
        <text x={svgW / 2} y={svgH - 2} textAnchor="middle" className="text-[10px] fill-slate-400 font-mono">{width}×{length}×{height} м</text>
      </svg>
    );
  };

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Калькулятор стоимости
          </h2>
          <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
            Рассчитайте предварительную стоимость металлокаркаса.
            Точную стоимость строительства подготовим после обсуждения и предоставления ТЗ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* TOP LEFT — Тип здания + утепление + ползунки */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
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
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-lg border transition-all duration-200 ${
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

              {/* Утепление — появляется внутри блока типа */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-muted shrink-0">Утепление:</span>
                <div className="flex gap-1.5">
                  {insulationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setInsulation(opt.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 ${
                        insulation === opt.id
                          ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                          : "border-border bg-white text-muted hover:border-slate-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
          </motion.div>

          {/* TOP RIGHT — Помощник */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-border rounded-lg flex flex-col" style={{ height: 340 }}>
              <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-border shrink-0">
                <div className="w-7 h-7 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <Robot size={14} weight="bold" className="text-accent-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Помощник</div>
                  <div className="text-[11px] text-muted">Подскажу по расчёту</div>
                </div>
              </div>

              <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5 min-h-0">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[88%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-accent-blue text-white rounded-br-sm"
                        : "bg-slate-50 border border-border text-foreground rounded-bl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-50 border border-border px-3 py-2 rounded-xl rounded-bl-sm text-sm text-muted">Печатает...</div>
                  </div>
                )}
              </div>

              <div className="px-3 py-2.5 border-t border-border shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
                    placeholder="Задайте вопрос..."
                    className="flex-1 h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                  />
                  <button
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || chatLoading}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-accent-blue text-white hover:bg-accent-blue/90 transition-colors disabled:opacity-40"
                  >
                    <PaperPlaneRight size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM LEFT — Предварительный расчёт */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-border rounded-lg p-5 h-full">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Предварительный расчёт
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-border/60">
                  <span className="text-muted">Тип</span>
                  <span className="font-medium text-foreground">{selectedType.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/60">
                  <span className="text-muted">Размеры</span>
                  <span className="font-medium text-foreground">{width} × {length} × {height} м</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/60">
                  <span className="text-muted">Площадь</span>
                  <span className="font-medium text-foreground">{formatPrice(estimate.area)} м²</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/60">
                  <span className="text-muted">Утепление</span>
                  <span className="font-medium text-foreground">{selectedInsulation.label}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t-2 border-accent-orange">
                <div className="text-sm text-muted mb-1">Цена без монтажных работ</div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {formatPrice(estimate.total)}{" "}
                  <span className="text-base font-normal text-muted">руб.</span>
                </div>
                <div className="text-xs text-muted mt-1">
                  ~ {formatPrice(estimate.total / estimate.area)} руб/м²
                </div>
              </div>

              <a
                href="#contacts"
                className="mt-4 w-full inline-flex h-11 items-center justify-center text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость строительства
              </a>
              <p className="mt-2 text-xs text-muted text-center leading-relaxed">
                Менеджер свяжется с вами в течение 2 часов
              </p>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT — Схема здания */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-border rounded-lg p-5 h-full flex flex-col">
              <div className="text-xs text-muted mb-3 font-mono uppercase tracking-wider">Схема здания</div>
              <div className="flex-1 w-full min-h-0">
                <BuildingSketch />
              </div>
              <div className="mt-3 text-xs text-muted text-center">
                {selectedType.label} · {selectedInsulation.label}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
