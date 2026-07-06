// Voice Assistant for 3D Configurator — Web Speech API only, no external deps

(function () {
  "use strict";

  // --- Parse Command (regex-based, no AI) ---
  const claddingNames = { none: "без обшивки", prof: "профлист", sandwich: "сэндвич-панели" };

  function describeState(s) {
    const parts = [`${s.width}×${s.length}×${s.height} м`];
    parts.push(s.showSandwich ? "сэндвич-панели" : "профлист");
    if (s.showGate) parts.push("ворота");
    if (s.showSideDoor || s.showFrontDoor) parts.push("дверь");
    if (s.showWindows) parts.push(`окна (${s.windows ? s.windows.length : 0} шт.)`);
    if (s.showCraneBeam) parts.push("кран-балка");
    if (s.showMezzanine) parts.push("антресоль");
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
        text: "Я понимаю: размеры (например «20 на 40»), обшивка (сэндвич, профлист), ворота, двери, окна, кран-балка, антресоль. Спросите «параметры» или «сколько стоит».",
        action: null,
      };
    }

    if (/какой сейчас|что сейчас|параметры|текущ|что выбрано/.test(lower)) {
      return { text: `Сейчас: ${describeState(state)}.`, action: null };
    }

    if (/сколько стоит|цена|стоимость|почём|прайс/.test(lower)) {
      return { text: "Точная цена зависит от проекта. Позвоните: +7 (960) 632-20-61 или оставьте заявку.", action: null };
    }

    // --- DIMENSIONS ---
    const dimMatch = lower.match(/(\d+)\s*(?:на|x|×|х)\s*(\d+)(?:\s*(?:на|x|×|х)\s*(\d+))?/);
    if (dimMatch) {
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

    if (!dimMatch) {
      const wm = lower.match(/ширин[ауы]\s*(\d+)/);
      if (wm) { action.width = parseInt(wm[1]); responses.push(`Ширина: ${action.width} м`); hasAction = true; }
      const lm = lower.match(/длин[ауы]\s*(\d+)/);
      if (lm) { action.length = parseInt(lm[1]); responses.push(`Длина: ${action.length} м`); hasAction = true; }
      const hm = lower.match(/высот[ауы]\s*(\d+)/);
      if (hm) { action.height = parseInt(hm[1]); responses.push(`Высота: ${action.height} м`); hasAction = true; }
      const am = lower.match(/(\d+)\s*(?:квадратов|м2|кв\.?\s*м|квадрат)/);
      if (am) {
        const area = parseInt(am[1]);
        const w = Math.min(36, Math.max(12, Math.round(Math.sqrt(area * 0.5) / 6) * 6));
        const l = Math.round(area / w / 6) * 6;
        action.width = w; action.length = Math.max(12, l);
        responses.push(`Площадь ~${area} м² → ${action.width}×${action.length} м`);
        hasAction = true;
      }
    }

    // --- CLADDING ---
    if (/сэндвич|сандвич|sandwich/.test(lower)) {
      action.showSandwich = true; responses.push("Сэндвич-панели"); hasAction = true;
    } else if (/профлист|профнастил/.test(lower)) {
      action.showSandwich = false; responses.push("Профлист"); hasAction = true;
    } else if (/без обшивки|только каркас|голый каркас/.test(lower)) {
      action.showSandwich = false; responses.push("Только каркас"); hasAction = true;
    }

    // --- GATES ---
    if (/добав.*ворот|включи.*ворот|поставь.*ворот|нужн.*ворот/.test(lower) || (/ворот/.test(lower) && !/убер|удал|без/.test(lower) && !dimMatch)) {
      action.showGate = true; responses.push("Ворота добавлены"); hasAction = true;
    }
    if (/убери.*ворот|удали.*ворот|без ворот/.test(lower)) {
      action.showGate = false; responses.push("Ворота убраны"); hasAction = true;
    }

    // --- DOORS ---
    if (/добав.*дверь|включи.*дверь|поставь.*дверь|нужн.*дверь/.test(lower) || (/дверь|двери/.test(lower) && !/убер|удал|без/.test(lower))) {
      if (/сбоку|боков|слева|справа/.test(lower)) {
        action.showSideDoor = true; responses.push("Боковая дверь"); hasAction = true;
      } else if (/фасад|перед|фронт|у ворот/.test(lower)) {
        action.showFrontDoor = true; responses.push("Фронтальная дверь"); hasAction = true;
      } else {
        action.showSideDoor = true; responses.push("Дверь добавлена"); hasAction = true;
      }
    }
    if (/убери.*дверь|удали.*дверь|без двер/.test(lower)) {
      action.showSideDoor = false; action.showFrontDoor = false; responses.push("Двери убраны"); hasAction = true;
    }

    // --- WINDOWS ---
    if (/добав.*окн|включи.*окн|поставь.*окн|нужн.*окн/.test(lower) || (/ок[оё]н|окна|окно/.test(lower) && !/убер|удал|без/.test(lower))) {
      action.showWindows = true; responses.push("Окна добавлены"); hasAction = true;
    }
    if (/убери.*окн|удали.*окн|без окон/.test(lower)) {
      action.showWindows = false; responses.push("Окна убраны"); hasAction = true;
    }

    // --- CRANE BEAM ---
    if (/кран|балк/.test(lower) && !/убер|удал|без/.test(lower)) {
      action.showCraneBeam = true; responses.push("Кран-балка добавлена"); hasAction = true;
    }
    if (/убери.*кран|удали.*кран|без кран/.test(lower)) {
      action.showCraneBeam = false; responses.push("Кран-балка убрана"); hasAction = true;
    }

    // --- MEZZANINE ---
    if (/антресоль|мезонин|второй этаж|2 этаж/.test(lower) && !/убер|удал|без/.test(lower)) {
      action.showMezzanine = true; responses.push("Антресоль добавлена"); hasAction = true;
    }
    if (/убери.*антресоль|удали.*антресоль|без антресол/.test(lower)) {
      action.showMezzanine = false; responses.push("Антресоль убрана"); hasAction = true;
    }

    // --- COLUMN STEP ---
    const stepMatch = lower.match(/шаг\s*(?:колонн|стоек|рам)?\s*(\d+)/);
    if (stepMatch) {
      action.columnStep = parseInt(stepMatch[1]); responses.push(`Шаг колонн: ${action.columnStep} м`); hasAction = true;
    }

    if (hasAction) {
      return { text: `Готово. ${responses.join(". ")}.`, action };
    }

    return { text: "Не поняла. Попробуйте: «20 на 40», «сэндвич», «добавь ворота», «помощь».", action: null };
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
