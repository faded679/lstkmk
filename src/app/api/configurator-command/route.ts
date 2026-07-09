import { NextRequest, NextResponse } from "next/server";

export interface ConfiguratorState {
  width: number;
  length: number;
  height: number;
  columnStep: number;
  showSandwich: boolean;
  wallColor: number;
  roofColor: number;
  showWindows: boolean;
  showGate: boolean;
  showSideDoor: boolean;
  sideDoorWall: "left" | "right";
  showFrontDoor: boolean;
  showCraneBeam: boolean;
  showMezzanine: boolean;
  mezzWall: "front" | "back" | "left" | "right";
  ribbonGlazing: boolean;
  ribbonWall: "left" | "right" | "both";
}

export interface VoiceAction {
  width?: number;
  length?: number;
  height?: number;
  columnStep?: number;
  showSandwich?: boolean;
  wallColor?: number;
  roofColor?: number;
  showWindows?: boolean;
  showGate?: boolean;
  showSideDoor?: boolean;
  sideDoorWall?: "left" | "right";
  showFrontDoor?: boolean;
  showCraneBeam?: boolean;
  showMezzanine?: boolean;
  mezzWall?: "front" | "back" | "left" | "right";
  ribbonGlazing?: boolean;
  ribbonWall?: "left" | "right" | "both";
  [key: string]: unknown;
}

const RAL_COLORS: Record<string, number> = {
  синий: 0x1a4b8c,
  голубой: 0x1a4b8c,
  зелёный: 0x1f4f2b,
  зеленый: 0x1f4f2b,
  серый: 0xc2c5c0,
  светлосерый: 0xc2c5c0,
  "светло-серый": 0xc2c5c0,
  бордо: 0x621827,
  коричневый: 0x4a2b1a,
  белый: 0xf4f4f4,
  жёлтый: 0xf5d033,
  желтый: 0xf5d033,
  оранжевый: 0xe05c1a,
  красный: 0x621827,
};

function describeAction(action: VoiceAction, state: ConfiguratorState): string {
  const parts: string[] = [];
  if (action.width !== undefined || action.length !== undefined || action.height !== undefined) {
    const w = action.width ?? state.width;
    const l = action.length ?? state.length;
    const h = action.height ?? state.height;
    parts.push(`размеры ${w}×${l}×${h} м`);
  }
  if (action.columnStep !== undefined) parts.push(`шаг колонн ${action.columnStep} м`);
  if (action.showSandwich === true) parts.push("обшивка сэндвич-панелями");
  if (action.showSandwich === false) parts.push("только каркас");
  if (action.wallColor !== undefined) parts.push("цвет стен изменён");
  if (action.roofColor !== undefined) parts.push("цвет кровли изменён");
  if (action.showGate === true) parts.push("ворота добавлены");
  if (action.showGate === false) parts.push("ворота убраны");
  if (action.showWindows === true) parts.push("окна добавлены");
  if (action.showWindows === false) parts.push("окна убраны");
  if (action.showFrontDoor === true) parts.push("дверь у ворот добавлена");
  if (action.showSideDoor === true) parts.push(`дверь сбоку (${action.sideDoorWall ?? state.sideDoorWall}) добавлена`);
  if (action.showSideDoor === false && action.showFrontDoor === false) parts.push("двери убраны");
  if (action.showCraneBeam === true) parts.push("кран-балка добавлена");
  if (action.showCraneBeam === false) parts.push("кран-балка убрана");
  if (action.showMezzanine === true) parts.push("антресоль добавлена");
  if (action.showMezzanine === false) parts.push("антресоль убрана");
  if (action.ribbonGlazing === true) parts.push("ленточное остекление добавлено");
  if (action.ribbonGlazing === false) parts.push("ленточное остекление убрано");
  return parts.join(", ");
}

export function parseConfiguratorCommand(
  text: string,
  state: ConfiguratorState
): { action: VoiceAction; text: string; handled: boolean } {
  const lower = text.toLowerCase().trim();
  const action: VoiceAction = {};
  const responses: string[] = [];
  let hasAction = false;

  // Справка
  if (/что ты умеешь|помощь|команды|help|помоги/.test(lower)) {
    return {
      action: {},
      text: "Я понимаю голосовые команды для конфигуратора: размеры, шаг колонн, сэндвич-панели, цвет, ворота, двери, окна, кран-балка, антресоль, ленточное остекление. Скажите, например: «ангар 24 на 48 высотой 6», «добавь ворота», «сделай синий».",
      handled: true,
    };
  }

  // Текущие параметры
  if (/какой сейчас|что сейчас|параметры|текущ|что выбрано/.test(lower)) {
    return {
      action: {},
      text: `Сейчас выбрано: ${state.width}×${state.length}×${state.height} м, обшивка ${state.showSandwich ? "сэндвич-панели" : "нет"}${state.showGate ? ", ворота" : ""}${state.showWindows ? ", окна" : ""}.`,
      handled: true,
    };
  }

  // Цена
  if (/сколько стоит|цена|стоимость|почём|прайс/.test(lower)) {
    return {
      action: {},
      text: "Точная цена зависит от проекта. Оставьте заявку — менеджер перезвонит и рассчитает КП.",
      handled: true,
    };
  }

  // Размеры: "24 на 48 на 6" / "20x40x5"
  const dimMatch = lower.match(/(\d+)\s*(?:на|x|×|х)\s*(\d+)(?:\s*(?:на|x|×|х)\s*(\d+))?/);
  if (dimMatch) {
    const d1 = parseInt(dimMatch[1], 10);
    const d2 = parseInt(dimMatch[2], 10);
    const d3 = dimMatch[3] ? parseInt(dimMatch[3], 10) : null;
    if (d3) {
      action.width = d1;
      action.length = d2;
      action.height = d3;
      responses.push(`${d1}×${d2}×${d3} м`);
    } else {
      action.width = d1;
      action.length = d2;
      responses.push(`${d1}×${d2} м`);
    }
    hasAction = true;
  }

  // Отдельные размеры
  const widthMatch = lower.match(/ширин[ауы]\s*(\d+)/);
  if (widthMatch) {
    action.width = parseInt(widthMatch[1], 10);
    responses.push(`ширина ${action.width} м`);
    hasAction = true;
  }
  const lengthMatch = lower.match(/длин[ауы]\s*(\d+)/);
  if (lengthMatch) {
    action.length = parseInt(lengthMatch[1], 10);
    responses.push(`длина ${action.length} м`);
    hasAction = true;
  }
  const heightMatch = lower.match(/высот[ауы]\s*(\d+)/);
  if (heightMatch) {
    action.height = parseInt(heightMatch[1], 10);
    responses.push(`высота ${action.height} м`);
    hasAction = true;
  }

  // Площадь
  const areaMatch = lower.match(/(\d+)\s*(?:квадратов|м2|кв\.?\s*м|квадрат|метров)/);
  if (areaMatch && !dimMatch && !widthMatch && !lengthMatch) {
    const area = parseInt(areaMatch[1], 10);
    const widths = [12, 15, 18, 20, 24, 30, 36];
    let best = { width: 18, length: Math.round(area / 18) };
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
    action.width = best.width;
    action.length = best.length;
    responses.push(`площадь ${area} м² → ${best.width}×${best.length} м`);
    hasAction = true;
  }

  // Шаг колонн
  const stepMatch = lower.match(/шаг\s*(?:колонн)?\s*(\d+(?:\.\d+)?)/);
  if (stepMatch) {
    action.columnStep = parseFloat(stepMatch[1]);
    responses.push(`шаг колонн ${action.columnStep} м`);
    hasAction = true;
  }

  // Обшивка
  if (/сэндвич|сандвич|sandwich/.test(lower)) {
    action.showSandwich = true;
    responses.push("сэндвич-панели");
    hasAction = true;
  } else if (/без обшивки|только каркас|голый каркас|убери обшивку/.test(lower)) {
    action.showSandwich = false;
    responses.push("только каркас");
    hasAction = true;
  }

  // Цвет
  for (const [name, value] of Object.entries(RAL_COLORS)) {
    const re = new RegExp(`(?:цвет\\s+)?${name}(?:\\s+цвет)?`);
    if (re.test(lower)) {
      if (/крыш|кровл|крыша/.test(lower)) {
        action.roofColor = value;
        responses.push(`цвет кровли — ${name}`);
      } else if (/стен|обшивк|фасад/.test(lower)) {
        action.wallColor = value;
        responses.push(`цвет стен — ${name}`);
      } else {
        action.wallColor = value;
        action.roofColor = value;
        responses.push(`цвет ${name}`);
      }
      hasAction = true;
      break;
    }
  }

  // Ворота
  if (/ворот/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.showGate = false;
      responses.push("ворота убраны");
    } else {
      action.showGate = true;
      responses.push("ворота добавлены");
    }
    hasAction = true;
  }

  // Двери
  if (/дверь|двери/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.showSideDoor = false;
      action.showFrontDoor = false;
      responses.push("двери убраны");
    } else if (/сбоку|боков/.test(lower)) {
      action.showSideDoor = true;
      action.sideDoorWall = /прав/.test(lower) ? "right" : "left";
      action.showFrontDoor = false;
      responses.push(`дверь сбоку (${action.sideDoorWall === "right" ? "справа" : "слева"})`);
    } else if (/у ворот|рядом с ворот|перед/.test(lower)) {
      action.showFrontDoor = true;
      action.showSideDoor = false;
      responses.push("дверь у ворот");
    } else {
      action.showFrontDoor = true;
      action.showSideDoor = false;
      responses.push("дверь у ворот");
    }
    hasAction = true;
  }

  // Окна
  if (/ок[оё]н|окна|окно/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.showWindows = false;
      responses.push("окна убраны");
    } else {
      action.showWindows = true;
      responses.push("окна добавлены");
    }
    hasAction = true;
  }

  // Ленточное остекление
  if (/ленточн|остеклен|панорамн/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.ribbonGlazing = false;
      responses.push("ленточное остекление убрано");
    } else {
      action.ribbonGlazing = true;
      action.ribbonWall = /прав/.test(lower) ? "right" : /обе|две/.test(lower) ? "both" : "left";
      responses.push(`ленточное остекление ${action.ribbonWall === "right" ? "справа" : action.ribbonWall === "both" ? "с обеих сторон" : "слева"}`);
    }
    hasAction = true;
  }

  // Кран-балка
  if (/кран|кранбалк|кран-балк/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.showCraneBeam = false;
      responses.push("кран-балка убрана");
    } else {
      action.showCraneBeam = true;
      responses.push("кран-балка добавлена");
    }
    hasAction = true;
  }

  // Антресоль
  if (/антресол|мезонин|второй свет/.test(lower)) {
    if (/убери|удали|без/.test(lower)) {
      action.showMezzanine = false;
      responses.push("антресоль убрана");
    } else {
      action.showMezzanine = true;
      responses.push("антресоль добавлена");
    }
    hasAction = true;
  }

  if (hasAction) {
    return {
      action,
      text: `Готово: ${describeAction(action, state)}.`,
      handled: true,
    };
  }

  return {
    action: {},
    text: "Не распознал команду. Скажите «помощь» для списка команд.",
    handled: false,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, state } = body;
    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "text is required" }, { status: 400 });
    }
    const result = parseConfiguratorCommand(text, state || {} as ConfiguratorState);
    return NextResponse.json(result);
  } catch (e) {
    console.error("Configurator command error:", e);
    return NextResponse.json({ action: {}, text: "Ошибка обработки команды.", handled: false }, { status: 500 });
  }
}
