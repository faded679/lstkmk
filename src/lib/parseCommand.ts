// Парсер голосовых команд для 3D-конфигуратора (без ИИ, чистые регулярки)

export interface ConfigState {
  width: number;
  length: number;
  height: number;
  cladding: "none" | "prof" | "sandwich";
  gates: boolean;
  gateType: "sectional" | "swing" | null;
  gatesCount: number;
  gateWidth: number;
  gateHeight: number;
  doors: boolean;
  doorPosition: "side" | "gate" | null;
  windows: boolean;
  windowCount: number;
}

export interface ParseResult {
  text: string;
  action: Partial<ConfigState> | null;
}

const claddingNames: Record<string, string> = {
  none: "без обшивки",
  prof: "профлист",
  sandwich: "сэндвич-панели",
};

function describeState(state: ConfigState): string {
  const parts: string[] = [];
  parts.push(`${state.width}×${state.length}×${state.height} м`);
  parts.push(claddingNames[state.cladding] || state.cladding);
  if (state.gates) {
    const gt = state.gateType === "sectional" ? "секционные" : state.gateType === "swing" ? "распашные" : "";
    parts.push(`${gt} ворота ${state.gateWidth}×${state.gateHeight} м${state.gatesCount > 1 ? ` (×${state.gatesCount})` : ""}`);
  }
  if (state.doors) parts.push(`дверь${state.doorPosition ? ` (${state.doorPosition === "side" ? "сбоку" : "у ворот"})` : ""}`);
  if (state.windows) parts.push(`${state.windowCount} окон`);
  return parts.join(", ");
}

function pickDimensions(area: number): { width: number; length: number } {
  const widths = [12, 15, 18, 20, 24, 30, 36];
  let best = { width: 12, length: Math.round(area / 12) };
  let bestDiff = Infinity;
  for (const w of widths) {
    const l = Math.round(area / w);
    if (l < 6) continue;
    const diff = Math.abs(w * l - area);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = { width: w, length: l };
    }
  }
  return best;
}

export function parseCommand(text: string, currentState: ConfigState): ParseResult {
  const lower = text.toLowerCase().trim();
  const action: Partial<ConfigState> = {};
  let hasAction = false;
  const responses: string[] = [];

  // --- СПРАВКА ---
  if (/что ты умеешь|помощь|команды|help|помоги/.test(lower)) {
    return {
      text: "Я понимаю команды: размеры (например «20 на 40»), обшивка (сэндвич, профлист, без обшивки), ворота (секционные, распашные, размер), двери, окна. Спросите «какие сейчас параметры» или «сколько стоит».",
      action: null,
    };
  }

  if (/какой сейчас|что сейчас|параметры|текущ|что выбрано|что стоит сейчас/.test(lower)) {
    return {
      text: `Сейчас: ${describeState(currentState)}.`,
      action: null,
    };
  }

  if (/сколько стоит|цена|стоимость|почём|прайс/.test(lower)) {
    return {
      text: "Точная цена зависит от проекта. Позвоните: +7 (960) 632-20-61 или оставьте заявку на сайте.",
      action: null,
    };
  }

  // --- РАЗМЕРЫ ---
  // "20 на 40" / "20x40" / "20×40" / "20х40"
  const dimMatch = lower.match(/(\d+)\s*(?:на|x|×|х)\s*(\d+)(?:\s*(?:на|x|×|х)\s*(\d+))?/);
  if (dimMatch) {
    const d1 = parseInt(dimMatch[1]);
    const d2 = parseInt(dimMatch[2]);
    const d3 = dimMatch[3] ? parseInt(dimMatch[3]) : null;

    if (d3) {
      // width × length × height
      action.width = d1;
      action.length = d2;
      action.height = d3;
      responses.push(`Размеры: ${d1}×${d2}×${d3} м`);
    } else {
      // Контекст: если рядом "ворота" — это размер ворот
      if (/ворот/.test(lower)) {
        action.gates = true;
        action.gateWidth = d1;
        action.gateHeight = d2;
        responses.push(`Ворота ${d1}×${d2} м`);
      } else {
        action.width = d1;
        action.length = d2;
        responses.push(`Размер: ${d1}×${d2} м`);
      }
    }
    hasAction = true;
  }

  // Отдельные размеры
  if (!dimMatch) {
    const widthMatch = lower.match(/ширин[ауы]\s*(\d+)/);
    if (widthMatch) {
      action.width = parseInt(widthMatch[1]);
      responses.push(`Ширина: ${action.width} м`);
      hasAction = true;
    }

    const lengthMatch = lower.match(/длин[ауы]\s*(\d+)/);
    if (lengthMatch) {
      action.length = parseInt(lengthMatch[1]);
      responses.push(`Длина: ${action.length} м`);
      hasAction = true;
    }

    const heightMatch = lower.match(/высот[ауы]\s*(\d+)/);
    if (heightMatch) {
      action.height = parseInt(heightMatch[1]);
      responses.push(`Высота: ${action.height} м`);
      hasAction = true;
    }

    // "500 квадратов"
    const areaMatch = lower.match(/(\d+)\s*(?:квадратов|м2|кв\.?\s*м|квадрат)/);
    if (areaMatch) {
      const area = parseInt(areaMatch[1]);
      const dims = pickDimensions(area);
      action.width = dims.width;
      action.length = dims.length;
      responses.push(`Площадь ~${area} м² → ${dims.width}×${dims.length} м`);
      hasAction = true;
    }
  }

  // --- ОБШИВКА ---
  if (/сэндвич|сандвич|sandwich/.test(lower)) {
    action.cladding = "sandwich";
    responses.push("Обшивка: сэндвич-панели");
    hasAction = true;
  } else if (/профлист|профнастил/.test(lower)) {
    action.cladding = "prof";
    responses.push("Обшивка: профлист");
    hasAction = true;
  } else if (/без обшивки|только каркас|голый каркас/.test(lower)) {
    action.cladding = "none";
    responses.push("Обшивка снята, только каркас");
    hasAction = true;
  }

  // --- ВОРОТА ---
  if (/ворот/.test(lower) && !dimMatch) {
    action.gates = true;
    hasAction = true;

    if (/секционн/.test(lower)) {
      action.gateType = "sectional";
      responses.push("Секционные ворота");
    } else if (/распашн/.test(lower)) {
      action.gateType = "swing";
      responses.push("Распашные ворота");
    } else {
      responses.push("Ворота добавлены");
    }

    if (/двое|два\s*въезд|2\s*ворот/.test(lower)) {
      action.gatesCount = 2;
      responses.push("2 ворот");
    }

    // Размер ворот отдельно
    const gateSize = lower.match(/ворот[а]?\s*(\d+)\s*(?:на|х|×)\s*(\d+)/);
    if (gateSize) {
      action.gateWidth = parseInt(gateSize[1]);
      action.gateHeight = parseInt(gateSize[2]);
    }
  }

  // Убрать ворота
  if (/убери ворота|без ворот|удали ворота/.test(lower)) {
    action.gates = false;
    action.gatesCount = 0;
    responses.push("Ворота убраны");
    hasAction = true;
  }

  // --- ДВЕРИ ---
  if (/дверь|двери/.test(lower)) {
    action.doors = true;
    hasAction = true;
    if (/сбоку|боков/.test(lower)) {
      action.doorPosition = "side";
      responses.push("Дверь сбоку");
    } else if (/у ворот|рядом с ворот/.test(lower)) {
      action.doorPosition = "gate";
      responses.push("Дверь у ворот");
    } else {
      responses.push("Дверь добавлена");
    }
  }

  if (/убери дверь|без двер|удали дверь/.test(lower)) {
    action.doors = false;
    responses.push("Дверь убрана");
    hasAction = true;
  }

  // --- ОКНА ---
  if (/ок[оё]н|окна|окно/.test(lower)) {
    action.windows = true;
    hasAction = true;
    const winCount = lower.match(/(\d+)\s*ок[оё]н/);
    if (winCount) {
      action.windowCount = parseInt(winCount[1]);
      responses.push(`${action.windowCount} окон`);
    } else {
      responses.push("Окна добавлены");
    }
  }

  if (/убери окна|без окон|удали окна/.test(lower)) {
    action.windows = false;
    action.windowCount = 0;
    responses.push("Окна убраны");
    hasAction = true;
  }

  // --- ОТВЕТ ---
  if (hasAction) {
    return {
      text: `Готово. ${responses.join(". ")}.`,
      action,
    };
  }

  return {
    text: "Не поняла. Попробуйте: «ангар 20 на 40», «сэндвич-панели», «добавь ворота», «помощь».",
    action: null,
  };
}
