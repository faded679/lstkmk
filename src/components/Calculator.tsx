"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Warehouse,
  Barn,
  Wrench,
  Robot,
  PaperPlaneRight,
  Microphone,
  MicrophoneSlash,
} from "@phosphor-icons/react";
import { createVoice, type VoiceController } from "@/lib/voice-input";

type BuildingType = "small-building" | "warehouse" | "agriculture" | "service";
type Insulation = "none" | "proflist" | "sandwich";

// Цена за м² (руб/м²) по контрольным площадям — чем больше площадь, тем дешевле
// Опорные точки из реальных расчётов (черный металл, профлист, без кран-балок):
//   warehouse:   1080м²→5520, 1440м²→4648, 2160м²→4957
//   agriculture: 3912м²→4719
//   service:     288м²→5463
//   warehouse <300м²: из Excel — цена выше (эффект масштаба)
const standardAreas = [100, 168, 288, 500, 1080, 1440, 2160, 3000, 4000, 10000];

const priceMatrix: Record<BuildingType, number[]> = {
  //                    100    168    288    500    1080   1440   2160   3000   4000   10000  м²
  "small-building":  [9500,  8600,  8000,  7200,  6500,  6200,  6000,  5800,  5600,  5400],
  warehouse:         [9000,  7500,  6200,  5800,  5520,  4648,  4957,  4500,  4200,  3500],
  agriculture:       [7800,  6800,  6000,  5500,  5100,  4900,  4719,  4719,  4719,  4719],
  service:           [8500,  6500,  5463,  5200,  5000,  4900,  4800,  4700,  4600,  4500],
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
    return "Извините, произошла ошибка. Позвоните нам: +7 (960) 632-20-61";
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
  const [chatListening, setChatListening] = useState(false);
  const [chatVoiceError, setChatVoiceError] = useState<string | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<VoiceController | null>(null);
  const baseInputRef = useRef<string>("");

  const stopChatListening = () => {
    voiceRef.current?.stop();
  };

  const toggleChatListening = () => {
    if (chatListening) { stopChatListening(); return; }
    setChatVoiceError(null);
    baseInputRef.current = chatInput ? chatInput.trim() + " " : "";
    const ctrl = createVoice({
      onTranscript: (text) => setChatInput(baseInputRef.current + text),
      onError: (msg) => { setChatVoiceError(msg); setChatListening(false); },
      onEnd: () => setChatListening(false),
    });
    if (!ctrl) {
      setChatVoiceError("Браузер не поддерживает голосовой ввод. Используйте Chrome или Safari.");
      return;
    }
    voiceRef.current = ctrl;
    ctrl.start();
    setChatListening(true);
  };

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
    if (chatListening) stopChatListening();
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

  // SVG building sketch — isometric 3D view with fixed viewBox
  const BuildingSketch = () => {
    const VW = 400;
    const VH = 280;

    // Max possible values for current building type → used for normalisation
    const maxW = Math.max(...cfg.widths);
    const maxL = cfg.lengthMax;
    const maxH = Math.max(...cfg.heights);

    // Visual extents at maximum values
    const MAX_W = 130;
    const MAX_L = 150;
    const MAX_H = 120;

    // Scale proportionally: at max value = MAX_*, at min value = ~40% of MAX_*
    const MIN_RATIO = 0.4;
    // Agriculture gets scaled down so it fits compactly
    const agriScale = type === "agriculture" ? 0.72 : 1.0;
    const isoW = MAX_W * (MIN_RATIO + (1 - MIN_RATIO) * (width  / maxW)) * agriScale;
    const isoL = MAX_L * (MIN_RATIO + (1 - MIN_RATIO) * (length / maxL)) * agriScale;
    const isoH = MAX_H * (MIN_RATIO + (1 - MIN_RATIO) * (height / maxH)) * agriScale;

    // Isometric projection angles: 30° for both axes
    const wxDx = -Math.cos(Math.PI / 6);
    const wxDy =  Math.sin(Math.PI / 6);
    const lxDx =  Math.cos(Math.PI / 6);
    const lxDy =  Math.sin(Math.PI / 6);

    // Fixed origin — always at the same spot, high enough that even at
    // maximum dimensions (MAX_W + MAX_L both at sin30°) nothing clips
    // maxDrop at max = MAX_W*0.5 + MAX_L*0.5 = 65+75 = 140 → oy = 280-18-140 = 122
    const ox = VW / 2;
    const oy = 122;

    // Key vertices (bottom layer)
    const A = { x: ox,                          y: oy };                         // front-bottom (origin)
    const B = { x: ox + isoW * wxDx,            y: oy + isoW * wxDy };           // left-bottom
    const C = { x: ox + isoW * wxDx + isoL * lxDx, y: oy + isoW * wxDy + isoL * lxDy }; // back-bottom
    const D = { x: ox + isoL * lxDx,            y: oy + isoL * lxDy };           // right-bottom

    // Top layer (shift up by isoH)
    const A2 = { x: A.x, y: A.y - isoH };
    const B2 = { x: B.x, y: B.y - isoH };
    const C2 = { x: C.x, y: C.y - isoH };
    const D2 = { x: D.x, y: D.y - isoH };

    // Roof ridge — runs along the "length" axis at mid-width, above top layer
    const roofRise = type === "agriculture"
      ? isoW * 0.22   // чуть ниже чем раньше — здание компактнее
      : isoW * 0.18;  // standard pitched roof

    // Ridge points: midpoint of A2↔B2 and D2↔C2, elevated
    const ridgeA = { x: (A2.x + B2.x) / 2, y: (A2.y + B2.y) / 2 - roofRise };
    const ridgeD = { x: (D2.x + C2.x) / 2, y: (D2.y + C2.y) / 2 - roofRise };

    const pt = (p: { x: number; y: number }) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`;


    return (
      <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full" fill="none">

        {/* ── Bottom face (ground outline, dashed) ── */}
        <polygon
          points={`${pt(A)} ${pt(B)} ${pt(C)} ${pt(D)}`}
          stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="4 3" fill="none"
        />

        {/* ── Left face (width × height) ── */}
        <polygon
          points={`${pt(A)} ${pt(B)} ${pt(B2)} ${pt(A2)}`}
          fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2"
        />

        {/* ── Right face (length × height) ── */}
        <polygon
          points={`${pt(A)} ${pt(D)} ${pt(D2)} ${pt(A2)}`}
          fill="#e8eef6" stroke="#94a3b8" strokeWidth="1.2"
        />

        {/* ── Back-left face (hidden, light stroke only) ── */}
        <polygon
          points={`${pt(B)} ${pt(C)} ${pt(C2)} ${pt(B2)}`}
          fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8"
        />

        {/* ── Back-right face ── */}
        <polygon
          points={`${pt(D)} ${pt(C)} ${pt(C2)} ${pt(D2)}`}
          fill="#f0f4fa" stroke="#cbd5e1" strokeWidth="0.8"
        />

        {/* ── Roof left slope ── */}
        <polygon
          points={`${pt(A2)} ${pt(B2)} ${pt(ridgeA)}`}
          fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"
        />
        {/* ── Roof right slope ── */}
        <polygon
          points={`${pt(A2)} ${pt(D2)} ${pt(ridgeD)} ${pt(ridgeA)}`}
          fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"
        />
        {/* ── Roof back slopes ── */}
        <polygon
          points={`${pt(B2)} ${pt(C2)} ${pt(ridgeD)} ${pt(ridgeA)}`}
          fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"
        />
        <polygon
          points={`${pt(D2)} ${pt(C2)} ${pt(ridgeD)}`}
          fill="#eff6ff" stroke="#3b82f6" strokeWidth="1"
        />

        {/* ── Ridge line ── */}
        <line x1={ridgeA.x} y1={ridgeA.y} x2={ridgeD.x} y2={ridgeD.y}
          stroke="#2563eb" strokeWidth="1.8" />

        {/* ── Вентиляционный конёк (только для сельхоз) ── */}
        {type === "agriculture" && (() => {
          const vH = isoH * 0.10;   // высота короба
          const vW = isoW * 0.06;   // полуширина короба (в пикселях по ширинной оси)
          // Конёк идёт от ridgeA до ridgeD, короб чуть уже (отступ 15% с каждого торца)
          // конёк на всю длину крыши без отступов
          const rA2 = ridgeA;
          const rD2 = ridgeD;
          // Боковые смещения — перпендикулярно оси конька (по ширинному направлению iso)
          const dx = wxDx * vW;
          const dy = wxDy * vW;
          // 8 вершин короба
          const v0 = { x: rA2.x + dx, y: rA2.y + dy };          // front-left-bottom
          const v1 = { x: rA2.x - dx, y: rA2.y - dy };          // front-right-bottom
          const v2 = { x: rD2.x + dx, y: rD2.y + dy };          // back-left-bottom
          const v3 = { x: rD2.x - dx, y: rD2.y - dy };          // back-right-bottom
          const v0t = { x: v0.x, y: v0.y - vH };
          const v1t = { x: v1.x, y: v1.y - vH };
          const v2t = { x: v2.x, y: v2.y - vH };
          const v3t = { x: v3.x, y: v3.y - vH };
          return (
            <g>
              {/* top */}
              <polygon points={`${pt(v0t)} ${pt(v1t)} ${pt(v3t)} ${pt(v2t)}`}
                fill="#bfdbfe" stroke="#2563eb" strokeWidth="1" />
              {/* front face */}
              <polygon points={`${pt(v0)} ${pt(v1)} ${pt(v1t)} ${pt(v0t)}`}
                fill="#dbeafe" stroke="#2563eb" strokeWidth="0.8" />
              {/* left face */}
              <polygon points={`${pt(v0)} ${pt(v2)} ${pt(v2t)} ${pt(v0t)}`}
                fill="#eff6ff" stroke="#2563eb" strokeWidth="0.8" />
              {/* вентиляционные прорези сверху — пунктирные линии */}
              {[0.25, 0.5, 0.75].map((t, i) => {
                const lx = v0t.x + (v2t.x - v0t.x) * t;
                const ly = v0t.y + (v2t.y - v0t.y) * t;
                const rx = v1t.x + (v3t.x - v1t.x) * t;
                const ry = v1t.y + (v3t.y - v1t.y) * t;
                return <line key={i} x1={lx} y1={ly} x2={rx} y2={ry}
                  stroke="#93c5fd" strokeWidth="0.7" strokeDasharray="3 2" />;
              })}
            </g>
          );
        })()}


        {/* ── Vertical edge lines for clarity ── */}
        <line x1={A.x} y1={A.y} x2={A2.x} y2={A2.y} stroke="#94a3b8" strokeWidth="1.2" />
        <line x1={D.x} y1={D.y} x2={D2.x} y2={D2.y} stroke="#94a3b8" strokeWidth="1.2" />
        <line x1={B.x} y1={B.y} x2={B2.x} y2={B2.y} stroke="#94a3b8" strokeWidth="0.8" />

        {/* ── Dimension labels ── */}
        {/* Width label — along right-bottom edge */}
        <text
          x={(A.x + D.x) / 2 + 8} y={(A.y + D.y) / 2 + 4}
          textAnchor="middle" className="text-[9px] fill-slate-500 font-mono"
        >{width}м</text>

        {/* Length label — along left-bottom edge */}
        <text
          x={(A.x + B.x) / 2 - 8} y={(A.y + B.y) / 2 + 4}
          textAnchor="middle" className="text-[9px] fill-slate-500 font-mono"
        >{length}м</text>

        {/* Height label — along front-left vertical edge */}
        <text
          x={A.x - 8} y={(A.y + A2.y) / 2}
          textAnchor="end" dominantBaseline="middle"
          className="text-[9px] fill-slate-500 font-mono"
        >{height}м</text>

        {/* Dimension summary */}
        <text x={VW / 2} y={VH - 6} textAnchor="middle"
          className="text-[10px] fill-slate-400 font-mono"
        >{width}×{length}×{height} м</text>
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
                      aria-label="Ширина ангара, м"
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
                  aria-label="Длина ангара, м"
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
                      aria-label="Высота ангара, м"
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
                    <div className={`max-w-[88%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
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
                {chatVoiceError && (
                  <div className="mb-2 px-2 py-1.5 text-[11px] text-red-600 bg-red-50 border border-red-100 rounded">
                    {chatVoiceError}
                  </div>
                )}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={toggleChatListening}
                    className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${chatListening ? "bg-red-500 text-white animate-pulse" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                    title={chatListening ? "Остановить" : "Голосовой ввод"}
                    aria-label={chatListening ? "Остановить запись" : "Голосовой ввод"}
                  >
                    {chatListening ? <MicrophoneSlash size={16} weight="bold" /> : <Microphone size={16} weight="bold" />}
                  </button>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
                    placeholder={chatListening ? "Говорите..." : "Задайте вопрос..."}
                    aria-label="Вопрос помощнику"
                    className="flex-1 h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                  />
                  <button
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || chatLoading}
                    aria-label="Отправить вопрос"
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
              <a
                href="/catalog"
                className="mt-3 w-full inline-flex h-11 items-center justify-center text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Перейти в каталог
              </a>
              <p className="mt-2 text-xs text-muted text-center leading-relaxed">
                Менеджер свяжется с вами в течение 15 минут
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
