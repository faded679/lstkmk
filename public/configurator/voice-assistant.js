// Voice Assistant for 3D Configurator — Web Speech API only, no external deps

(function () {
  "use strict";

  // --- Color map for voice commands ---
  const COLOR_MAP = [
    { keywords: ["синий", "синяя", "синее", "голубой"], wallValue: 0x1a4b8c, roofValue: 0x1a4b8c },
    { keywords: ["зелёный", "зеленый", "зелёная", "зелёное"], wallValue: 0x1f4f2b, roofValue: 0x1f4f2b },
    { keywords: ["серый", "серая", "серое", "светло-серый"], wallValue: 0xc2c5c0, roofValue: 0xc2c5c0 },
    { keywords: ["бордо", "бордовый", "бордовая", "красный", "красная", "тёмно-красный"], wallValue: 0x621827, roofValue: 0x621827 },
    { keywords: ["коричневый", "коричневая", "коричневое", "шоколад"], wallValue: 0x4a2b1a, roofValue: 0x4a2b1a },
    { keywords: ["белый", "белая", "белое"], wallValue: 0xf4f4f4, roofValue: 0xf4f4f4 },
    { keywords: ["жёлтый", "желтый", "жёлтая", "жёлтое"], wallValue: 0xf5d033, roofValue: null },
    { keywords: ["оранжевый", "оранжевая", "оранжевое", "рыжий"], wallValue: 0xe05c1a, roofValue: null },
    { keywords: ["алюминиевый", "алюминий", "металлик"], wallValue: null, roofValue: 0x9aa2a8 },
  ];

  function findColor(text) {
    const lower = text.toLowerCase();
    for (const c of COLOR_MAP) {
      for (const kw of c.keywords) {
        if (lower.includes(kw)) return c;
      }
    }
    return null;
  }

  // --- Parse Command (regex-based, no AI) ---
  function describeState(s) {
    const parts = [`${s.width}×${s.length}×${s.height} м`];
    parts.push(`шаг колонн ${s.columnStep} м`);
    parts.push(s.showSandwich ? "сэндвич-панели" : "каркас без обшивки");
    if (s.showGate) parts.push("ворота");
    if (s.showSideDoor) parts.push("боковая дверь");
    if (s.showFrontDoor) parts.push("фронтальная дверь");
    if (s.showWindows) parts.push(`окна (${s.windows ? s.windows.length : 0} шт.)`);
    if (s.showCraneBeam) parts.push("кран-балка");
    if (s.showMezzanine) parts.push(`антресоль (${s.mezzWall === "left" ? "слева" : "справа"}, h=${s.mezzHeight}м)`);
    return parts.join(", ");
  }

  function parseCommand(text, state) {
    const lower = text.toLowerCase().trim();
    const action = {};
    let hasAction = false;
    const responses = [];

    // --- HELP ---
    if (/что ты умеешь|помощь|команды|help|помоги/.test(lower)) {
      return {
        text: "Команды: размеры («20 на 40», «высота 7»), шаг колонн («шаг 3»), обшивка («сэндвич», «без обшивки»), цвет («стены синие», «кровля зелёная»), ворота, дверь сбоку, дверь у ворот, окна, кран-балка, антресоль (слева/справа, высота, глубина). Спросите «параметры» или «сброс».",
        action: null,
      };
    }

    if (/какой сейчас|что сейчас|параметры|текущ|что выбрано|статус/.test(lower)) {
      return { text: `Сейчас: ${describeState(state)}.`, action: null };
    }

    if (/сколько стоит|цена|стоимость|почём|прайс/.test(lower)) {
      return { text: "Точная цена зависит от проекта. Позвоните: +7 (960) 632-20-61 или оставьте заявку на сайте.", action: null };
    }

    // --- RESET ---
    if (/сброс|сбрось|начать заново|по умолчанию|reset/.test(lower)) {
      return {
        text: "Сброс. Параметры по умолчанию: 18×36×5 м, без обшивки.",
        action: { width: 18, length: 36, height: 5, columnStep: 6, showSandwich: false, showGate: false, showSideDoor: false, showFrontDoor: false, showWindows: false, showCraneBeam: false, showMezzanine: false },
      };
    }

    // --- DIMENSIONS ---
    const dimMatch = lower.match(/(\d+)\s*(?:на|x|×|х)\s*(\d+)(?:\s*(?:на|x|×|х)\s*(\d+))?/);
    if (dimMatch && !/ворот|окн/.test(lower)) {
      const d1 = parseInt(dimMatch[1]);
      const d2 = parseInt(dimMatch[2]);
      const d3 = dimMatch[3] ? parseInt(dimMatch[3]) : null;
      if (d3) {
        action.width = d1; action.length = d2; action.height = d3;
        responses.push(`Размеры: ${d1}×${d2}×${d3} м`);
      } else {
        action.width = d1; action.length = d2;
        responses.push(`Размер: ${d1}×${d2} м`);
      }
      hasAction = true;
    }

    if (!dimMatch || /ворот|окн/.test(lower)) {
      const wm = lower.match(/ширин[ауы]\s*(\d+)/);
      if (wm) { action.width = parseInt(wm[1]); responses.push(`Ширина: ${action.width} м`); hasAction = true; }
      const lm = lower.match(/длин[ауы]\s*(\d+)/);
      if (lm) { action.length = parseInt(lm[1]); responses.push(`Длина: ${action.length} м`); hasAction = true; }
      const hm = lower.match(/высот[ауы]\s*(\d+)/);
      if (hm && !/антресол|мезонин/.test(lower)) { action.height = parseInt(hm[1]); responses.push(`Высота: ${action.height} м`); hasAction = true; }
      const am = lower.match(/(\d+)\s*(?:квадратов|м2|кв\.?\s*м|квадрат)/);
      if (am) {
        const area = parseInt(am[1]);
        const w = Math.min(36, Math.max(12, Math.round(Math.sqrt(area * 0.5) / 6) * 6));
        const l = Math.max(24, Math.round(area / w / 6) * 6);
        action.width = w; action.length = l;
        responses.push(`Площадь ~${area} м² → ${w}×${l} м`);
        hasAction = true;
      }
    }

    // --- COLUMN STEP ---
    const stepMatch = lower.match(/шаг\s*(?:колонн|стоек|рам|рамы)?\s*(\d+(?:[.,]\d+)?)/);
    if (stepMatch) {
      action.columnStep = parseFloat(stepMatch[1].replace(",", "."));
      responses.push(`Шаг колонн: ${action.columnStep} м`);
      hasAction = true;
    }

    // --- CLADDING ---
    if (/сэндвич|сандвич|sandwich|панел/.test(lower) && !/без|убер|удал/.test(lower)) {
      action.showSandwich = true; responses.push("Сэндвич-панели включены"); hasAction = true;
    } else if (/без обшивки|только каркас|голый каркас|убери обшивк|убери панел|без панел/.test(lower)) {
      action.showSandwich = false; responses.push("Обшивка убрана, только каркас"); hasAction = true;
    } else if (/профлист|профнастил/.test(lower)) {
      action.showSandwich = true; responses.push("Обшивка включена (профлист = сэндвич в конфигураторе)"); hasAction = true;
    }

    // --- COLORS ---
    const isRoof = /кровл|крыш/.test(lower);
    const isWall = /стен|фасад|обшивк/.test(lower);
    const color = findColor(lower);
    if (color) {
      if (isRoof && color.roofValue !== null) {
        action.roofColor = color.roofValue;
        if (!action.showSandwich && state && !state.showSandwich) action.showSandwich = true;
        responses.push(`Цвет кровли изменён`);
        hasAction = true;
      } else if (isWall && color.wallValue !== null) {
        action.wallColor = color.wallValue;
        if (!action.showSandwich && state && !state.showSandwich) action.showSandwich = true;
        responses.push(`Цвет стен изменён`);
        hasAction = true;
      } else if (!isRoof && !isWall) {
        // Default: apply to walls
        if (color.wallValue !== null) {
          action.wallColor = color.wallValue;
          if (!action.showSandwich && state && !state.showSandwich) action.showSandwich = true;
          responses.push(`Цвет стен изменён`);
          hasAction = true;
        }
      }
    }
    // RAL number
    const ralMatch = lower.match(/рал\s*(\d{4})|ral\s*(\d{4})/);
    if (ralMatch) {
      const ralNum = ralMatch[1] || ralMatch[2];
      const allColors = [
        { ral: "5005", value: 0x1a4b8c }, { ral: "6005", value: 0x1f4f2b },
        { ral: "7035", value: 0xc2c5c0 }, { ral: "3005", value: 0x621827 },
        { ral: "8017", value: 0x4a2b1a }, { ral: "9003", value: 0xf4f4f4 },
        { ral: "1018", value: 0xf5d033 }, { ral: "2004", value: 0xe05c1a },
        { ral: "9006", value: 0x9aa2a8 }, { ral: "7004", value: 0x969992 },
      ];
      const found = allColors.find(c => c.ral === ralNum);
      if (found) {
        if (isRoof) { action.roofColor = found.value; responses.push(`Кровля RAL ${ralNum}`); }
        else { action.wallColor = found.value; responses.push(`Стены RAL ${ralNum}`); }
        if (!action.showSandwich && state && !state.showSandwich) action.showSandwich = true;
        hasAction = true;
      }
    }

    // --- GATES ---
    if (/добав.*ворот|включи.*ворот|поставь.*ворот|нужн.*ворот|покажи.*ворот/.test(lower) || (/ворот/.test(lower) && !/убер|удал|без|закр/.test(lower) && !hasAction)) {
      action.showGate = true;
      if (!state.showSandwich && !action.showSandwich) action.showSandwich = true;
      responses.push("Ворота добавлены");
      hasAction = true;
    }
    if (/убери.*ворот|удали.*ворот|без ворот|скрой.*ворот/.test(lower)) {
      action.showGate = false; responses.push("Ворота убраны"); hasAction = true;
    }

    // --- DOORS ---
    if (/добав.*дверь|включи.*дверь|поставь.*дверь|нужн.*дверь|покажи.*дверь/.test(lower) || (/дверь|двери/.test(lower) && !/убер|удал|без/.test(lower) && !hasAction)) {
      if (/фасад|перед|фронт|у ворот|передн/.test(lower)) {
        action.showFrontDoor = true;
        if (!state.showSandwich && !action.showSandwich) action.showSandwich = true;
        responses.push("Фронтальная дверь добавлена");
      } else if (/сбоку|боков|слева|справа|бок/.test(lower)) {
        action.showSideDoor = true;
        if (/слева|лев/.test(lower)) action.sideDoorWall = "left";
        else if (/справа|прав/.test(lower)) action.sideDoorWall = "right";
        if (!state.showSandwich && !action.showSandwich) action.showSandwich = true;
        responses.push("Боковая дверь добавлена");
      } else {
        action.showSideDoor = true;
        if (!state.showSandwich && !action.showSandwich) action.showSandwich = true;
        responses.push("Дверь добавлена (сбоку)");
      }
      hasAction = true;
    }
    if (/убери.*дверь|удали.*дверь|без двер|скрой.*дверь/.test(lower)) {
      action.showSideDoor = false; action.showFrontDoor = false;
      responses.push("Двери убраны"); hasAction = true;
    }

    // --- WINDOWS ---
    if (/добав.*окн|включи.*окн|поставь.*окн|нужн.*окн|покажи.*окн/.test(lower) || (/ок[оё]н|окна|окно/.test(lower) && !/убер|удал|без/.test(lower) && !hasAction)) {
      action.showWindows = true;
      if (!state.showSandwich && !action.showSandwich) action.showSandwich = true;
      // Check if number specified
      const winNum = lower.match(/(\d+)\s*ок[оё]н/);
      if (winNum) {
        action.windowCount = parseInt(winNum[1]);
        responses.push(`${action.windowCount} окон`);
      } else {
        responses.push("Окна добавлены");
      }
      hasAction = true;
    }
    if (/убери.*окн|удали.*окн|без окон|скрой.*окн/.test(lower)) {
      action.showWindows = false; responses.push("Окна убраны"); hasAction = true;
    }

    // --- CRANE BEAM ---
    if (/добав.*кран|включи.*кран|поставь.*кран|нужн.*кран|покажи.*кран|кран.?балк/.test(lower) && !/убер|удал|без/.test(lower)) {
      action.showCraneBeam = true; responses.push("Кран-балка добавлена"); hasAction = true;
    }
    if (/убери.*кран|удали.*кран|без кран|скрой.*кран/.test(lower)) {
      action.showCraneBeam = false; responses.push("Кран-балка убрана"); hasAction = true;
    }

    // --- MEZZANINE ---
    if (/добав.*антресол|включи.*антресол|поставь.*антресол|нужн.*антресол|покажи.*антресол|антресоль|мезонин|второй этаж|2\s*этаж/.test(lower) && !/убер|удал|без/.test(lower)) {
      action.showMezzanine = true;
      if (/слева|лев/.test(lower)) action.mezzWall = "left";
      else if (/справа|прав/.test(lower)) action.mezzWall = "right";
      // Mezzanine height
      const mhMatch = lower.match(/(?:антресол|мезонин).*высот[ауы]\s*(\d+(?:[.,]\d+)?)/);
      if (mhMatch) action.mezzHeight = parseFloat(mhMatch[1].replace(",", "."));
      // Mezzanine depth %
      const mdMatch = lower.match(/глубин[ауы]\s*(\d+)/);
      if (mdMatch) action.mezzDepthPct = parseInt(mdMatch[1]);
      // Mezzanine length %
      const mlMatch = lower.match(/длин[ауы]\s*антресол\w*\s*(\d+)/);
      if (mlMatch) action.mezzLengthPct = parseInt(mlMatch[1]);
      responses.push("Антресоль добавлена");
      hasAction = true;
    }
    if (/убери.*антресол|удали.*антресол|без антресол|скрой.*антресол/.test(lower)) {
      action.showMezzanine = false; responses.push("Антресоль убрана"); hasAction = true;
    }
    // Change mezzanine side without "add"
    if (state.showMezzanine && /антресоль\s*(?:на\s*)?слев|антресоль\s*(?:на\s*)?лев/.test(lower)) {
      action.mezzWall = "left"; responses.push("Антресоль слева"); hasAction = true;
    }
    if (state.showMezzanine && /антресоль\s*(?:на\s*)?справ|антресоль\s*(?:на\s*)?прав/.test(lower)) {
      action.mezzWall = "right"; responses.push("Антресоль справа"); hasAction = true;
    }
    // Mezzanine height standalone
    if (state.showMezzanine && /высот[ауы]\s*антресол|антресол.*высот/.test(lower)) {
      const mhMatch2 = lower.match(/высот[ауы]\s*(?:антресол\w*)?\s*(\d+(?:[.,]\d+)?)/);
      if (mhMatch2) { action.mezzHeight = parseFloat(mhMatch2[1].replace(",", ".")); responses.push(`Высота антресоли: ${action.mezzHeight} м`); hasAction = true; }
    }

    if (hasAction) {
      return { text: `Готово. ${responses.join(". ")}.`, action };
    }

    return { text: "Не поняла. Скажите, например: «ангар 24 на 60», «высота 7», «сэндвич-панели», «стены синие», «добавь ворота», «кран-балка», «антресоль слева». Скажите «помощь» для списка всех команд.", action: null };
  }

  // --- Voice Assistant UI ---
  const STATES = { IDLE: "idle", LISTENING: "listening", PROCESSING: "processing", SPEAKING: "speaking" };
  let currentState = STATES.IDLE;
  let recognition = null;
  let micDenied = false;

  // Create DOM elements
  const btn = document.createElement("button");
  btn.id = "voice-btn";
  btn.title = "Голосовой помощник";
  btn.setAttribute("aria-label", "Голосовой помощник");
  btn.innerHTML = micSvg();
  document.body.appendChild(btn);

  const bubble = document.createElement("div");
  bubble.id = "voice-bubble";
  bubble.style.display = "none";
  document.body.appendChild(bubble);

  const inputWrap = document.createElement("div");
  inputWrap.id = "voice-input-wrap";
  inputWrap.style.display = "none";
  inputWrap.innerHTML = `
    <input type="text" id="voice-text-input" placeholder="Введите команду..." />
    <button id="voice-text-send">→</button>
    <button id="voice-text-close">×</button>
  `;
  document.body.appendChild(inputWrap);

  // Styles
  const style = document.createElement("style");
  style.textContent = `
    #voice-btn {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 56px; height: 56px; border-radius: 50%; border: none;
      background: #e67e22; color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(230,126,34,0.4), 0 2px 6px rgba(0,0,0,0.12);
      transition: background 0.2s, transform 0.15s;
    }
    #voice-btn:hover { transform: scale(1.05); }
    #voice-btn.listening {
      background: #c0392b;
      animation: vpulse 1.5s ease-in-out infinite;
      transform: scale(1.1);
    }
    #voice-btn.speaking { background: #27ae60; }
    #voice-btn.processing { background: #f39c12; }
    @keyframes vpulse {
      0%,100% { box-shadow: 0 4px 16px rgba(192,57,43,0.4); }
      50% { box-shadow: 0 4px 32px rgba(192,57,43,0.7); }
    }
    #voice-bubble {
      position: fixed; bottom: 92px; right: 24px; z-index: 10000;
      max-width: 300px; padding: 12px 32px 12px 16px;
      background: #fff; border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
      font: 14px/1.5 'Inter', sans-serif; color: #1a1a2e;
      animation: vfadeIn 0.25s ease-out;
    }
    #voice-bubble .close-bubble {
      position: absolute; top: 4px; right: 8px;
      background: none; border: none; font-size: 16px; cursor: pointer; color: #999;
    }
    #voice-input-wrap {
      position: fixed; bottom: 92px; right: 24px; z-index: 10000;
      display: flex; gap: 8px;
      animation: vfadeIn 0.25s ease-out;
    }
    #voice-text-input {
      width: 220px; height: 40px; padding: 0 12px;
      border: 1px solid #ddd; border-radius: 8px;
      font: 14px 'Inter', sans-serif; outline: none;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    }
    #voice-text-input:focus { border-color: #e67e22; }
    #voice-text-send, #voice-text-close {
      width: 40px; height: 40px; border-radius: 8px; border: none;
      font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }
    #voice-text-send { background: #e67e22; color: #fff; }
    #voice-text-close { background: #fff; border: 1px solid #ddd; color: #999; }
    @keyframes vfadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // --- State management ---
  function setState(s) {
    currentState = s;
    btn.className = s === STATES.IDLE ? "" : s;
    if (s === STATES.IDLE) btn.innerHTML = micSvg();
    else if (s === STATES.LISTENING) btn.innerHTML = micOnSvg();
    else if (s === STATES.PROCESSING) btn.innerHTML = processSvg();
    else if (s === STATES.SPEAKING) btn.innerHTML = speakerSvg();
  }

  function showBubble(text) {
    bubble.style.display = "block";
    bubble.innerHTML = `${text}<button class="close-bubble" onclick="document.getElementById('voice-bubble').style.display='none'">×</button>`;
    clearTimeout(bubble._timer);
    bubble._timer = setTimeout(() => { bubble.style.display = "none"; }, 8000);
  }

  // --- Speech synthesis ---
  function speak(text) {
    if (!window.speechSynthesis) { setState(STATES.IDLE); return; }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "ru-RU";
    utt.rate = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const ruVoice = voices.find(v => v.lang.startsWith("ru") && v.name.includes("Google"))
      || voices.find(v => v.lang.startsWith("ru") && v.name.includes("Yandex"))
      || voices.find(v => v.lang.startsWith("ru"));
    if (ruVoice) utt.voice = ruVoice;
    utt.onstart = () => setState(STATES.SPEAKING);
    utt.onend = () => setState(STATES.IDLE);
    utt.onerror = () => setState(STATES.IDLE);
    window.speechSynthesis.speak(utt);
  }

  // --- Process command ---
  function processText(text) {
    setState(STATES.PROCESSING);
    // Get current state from the configurator
    const appState = window.__configuratorState || {};
    const result = parseCommand(text, appState);
    showBubble(result.text);

    // Apply actions
    if (result.action && window.__applyVoiceAction) {
      window.__applyVoiceAction(result.action);
    }

    speak(result.text);
  }

  // --- Speech recognition ---
  function startListening() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { micDenied = true; showInputMode(); return; }

    recognition = new SR();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setState(STATES.LISTENING);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      processText(transcript);
    };
    recognition.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        micDenied = true; showInputMode();
      }
      setState(STATES.IDLE);
    };
    recognition.onend = () => { if (currentState === STATES.LISTENING) setState(STATES.IDLE); };

    try { recognition.start(); } catch (e) { setState(STATES.IDLE); }
  }

  function stopListening() {
    if (recognition) { try { recognition.stop(); } catch (e) {} recognition = null; }
    setState(STATES.IDLE);
  }

  function showInputMode() {
    inputWrap.style.display = "flex";
    document.getElementById("voice-text-input").focus();
  }

  // --- Event handlers ---
  btn.addEventListener("click", () => {
    if (currentState === STATES.LISTENING) { stopListening(); return; }
    if (currentState === STATES.SPEAKING) { window.speechSynthesis && window.speechSynthesis.cancel(); setState(STATES.IDLE); return; }
    if (micDenied) { showInputMode(); return; }
    startListening();
  });

  btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    inputWrap.style.display = inputWrap.style.display === "none" ? "flex" : "none";
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "voice-text-send") {
      const inp = document.getElementById("voice-text-input");
      const text = inp.value.trim();
      if (text) { inp.value = ""; processText(text); }
    }
    if (e.target.id === "voice-text-close") {
      inputWrap.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.id === "voice-text-input" && e.key === "Enter") {
      const text = e.target.value.trim();
      if (text) { e.target.value = ""; processText(text); }
    }
    if (e.target.id === "voice-text-input" && e.key === "Escape") {
      inputWrap.style.display = "none";
    }
  });

  // Load voices
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // --- SVG icons ---
  function micSvg() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="1" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
  }
  function micOnSvg() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="1" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0014 0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2"/></svg>`;
  }
  function processSvg() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32"><animate attributeName="stroke-dashoffset" values="32;0;32" dur="1.5s" repeatCount="indefinite"/></circle></svg>`;
  }
  function speakerSvg() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>`;
  }
})();
