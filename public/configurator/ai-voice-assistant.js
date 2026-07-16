// AI Voice Assistant for 3D Configurator
// Speech recognition -> command parser -> AI chat response -> Yandex TTS
(function () {
  "use strict";

  let recognition = null;
  let isListening = false;
  let muted = false;
  let currentAudio = null;
  let bubbleTimer = null;

  // --- UI: bubble ---
  const style = document.createElement("style");
  style.textContent = `
    #ai-voice-bubble {
      position: fixed; bottom: 144px; right: 24px; z-index: 10001;
      max-width: 340px; padding: 14px 40px 14px 16px;
      background: #fff; border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06);
      font: 14px/1.55 'Inter', sans-serif; color: #1a1a2e;
      animation: aiBubbleIn 0.25s ease-out; transition: opacity 0.25s;
    }
    #ai-voice-bubble.hidden { opacity: 0; pointer-events: none; }
    #ai-voice-bubble .aiv-label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 4px; }
    #ai-voice-bubble .aiv-close { position: absolute; top: 6px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; color: #aaa; line-height: 1; }
    #ai-voice-bubble .aiv-close:hover { color: #555; }
    #ai-voice-mic {
      position: fixed; bottom: 84px; right: 24px; z-index: 9999;
      width: 52px; height: 52px; border-radius: 50%; border: none;
      background: #3b6fd9; color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(59,111,217,0.35), 0 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.15s, background 0.2s;
    }
    #ai-voice-mic:hover { transform: scale(1.06); }
    #ai-voice-mic.listening { background: #c0392b; animation: aiPulse 1.4s ease-in-out infinite; }
    #ai-voice-mic.muted { background: #95a5a6; }
    @keyframes aiBubbleIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes aiPulse { 0%,100% { box-shadow: 0 4px 16px rgba(192,57,43,0.35); } 50% { box-shadow: 0 4px 28px rgba(192,57,43,0.65); } }
    @media (max-width: 600px) {
      #ai-voice-bubble { max-width: calc(100vw - 80px); right: 16px; bottom: 140px; }
      #ai-voice-mic { bottom: 76px; right: 16px; width: 48px; height: 48px; }
    }
  `;
  document.head.appendChild(style);

  const bubble = document.createElement("div");
  bubble.id = "ai-voice-bubble";
  bubble.classList.add("hidden");
  document.body.appendChild(bubble);

  const micBtn = document.createElement("button");
  micBtn.id = "ai-voice-mic";
  micBtn.title = "Голосовое управление (ПКМ — выкл/вкл звук)";
  micBtn.innerHTML = micIcon();
  document.body.appendChild(micBtn);

  function micIcon() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="1" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
  }
  function listeningIcon() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="1" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2"/></svg>`;
  }

  function showBubble(label, text) {
    bubble.classList.remove("hidden");
    bubble.innerHTML = `<div class="aiv-label">${label}</div><div>${text}</div><button class="aiv-close">×</button>`;
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.add("hidden"), 10000);
    const close = bubble.querySelector(".aiv-close");
    if (close) close.addEventListener("click", () => bubble.classList.add("hidden"));
  }

  window.__aiVoiceShowBubble = showBubble;

  let _ttsAbort = null;
  let _speechQueue = [];
  let _isSpeaking = false;

  function speak(text) {
    if (muted || !text) return;
    // Cancel any in-flight TTS request
    if (_ttsAbort) { _ttsAbort.abort(); _ttsAbort = null; }
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    _isSpeaking = true;
    _ttsAbort = new AbortController();
    fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      signal: _ttsAbort.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error("tts " + res.status);
        return res.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        currentAudio = audio;
        audio.play().catch(() => {});
        audio.onended = () => {
          URL.revokeObjectURL(url);
          currentAudio = null;
          _isSpeaking = false;
          _processQueue();
        };
      })
      .catch(err => {
        if (err.name !== "AbortError") console.warn("TTS failed:", err);
        _isSpeaking = false;
        _processQueue();
      });
  }

  // Queue: speak text after current speech finishes
  function speakAfter(text) {
    if (!text) return;
    if (!_isSpeaking && !currentAudio) {
      speak(text);
    } else {
      _speechQueue.push(text);
    }
  }

  function _processQueue() {
    if (_speechQueue.length > 0) {
      speak(_speechQueue.shift());
    }
  }

  window.__aiVoiceSpeak = speak;
  window.__aiVoiceSpeakAfter = speakAfter;

  function getState() {
    return window.__configuratorState || {};
  }

  function applyAction(action) {
    if (typeof window.__applyVoiceAction === "function") {
      window.__applyVoiceAction(action);
      return true;
    }
    return false;
  }

  // Fallback AI chat for unrecognized commands
  async function askAI(text) {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: "configurator-voice" }),
      });
      const data = await res.json();
      return data.reply || "Извините, не смогла ответить.";
    } catch (e) {
      return "Извините, произошла ошибка. Попробуйте ещё раз.";
    }
  }

  async function processCommand(transcript) {
    showBubble("Вы сказали", transcript);

    // If the AI quiz is open, try to use the voice transcript as an answer
    if (window.__configuratorQuiz && window.__configuratorQuiz.isActive && window.__configuratorQuiz.isActive()) {
      const handledByQuiz = window.__configuratorQuiz.handleVoiceAnswer(transcript);
      if (handledByQuiz) return;
      // If quiz didn't understand, ask to repeat without falling through to command parser
      showBubble("Помощник", "Не расслышал ответ. Повторите, пожалуйста, или выберите вариант.");
      speak("Не расслышал ответ. Повторите, пожалуйста, или выберите вариант.");
      return;
    }

    const state = getState();
    try {
      const res = await fetch("/api/configurator-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript, state }),
      });
      const data = await res.json();

      if (data.handled && data.action && Object.keys(data.action).length > 0) {
        applyAction(data.action);
      }

      let reply = data.text;
      if (!data.handled) {
        reply = await askAI(transcript);
      }

      showBubble("Помощник", reply);
      speak(reply);
    } catch (e) {
      console.error("Voice command error:", e);
      showBubble("Ошибка", "Не удалось обработать команду.");
    }
  }

  function startListening() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      showBubble("Ошибка", "Ваш браузер не поддерживает голосовой ввод. Попробуйте Chrome или Safari.");
      return;
    }

    recognition = new SR();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isListening = true;
      micBtn.classList.add("listening");
      micBtn.innerHTML = listeningIcon();
      showBubble("Слушаю...", "Скажите команду, например: «ангар 24 на 48»");
    };

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      processCommand(transcript);
    };

    recognition.onerror = (e) => {
      if (e.error !== "aborted") {
        showBubble("Ошибка", "Не распознала речь. Попробуйте ещё раз.");
      }
      stopListening();
    };

    recognition.onend = () => {
      stopListening();
    };

    try {
      recognition.start();
    } catch (err) {
      stopListening();
    }
  }

  function stopListening() {
    if (recognition) {
      try { recognition.stop(); } catch {}
      recognition = null;
    }
    isListening = false;
    micBtn.classList.remove("listening");
    micBtn.innerHTML = micIcon();
  }

  micBtn.addEventListener("click", () => {
    if (isListening) stopListening();
    else startListening();
  });

  micBtn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    muted = !muted;
    micBtn.classList.toggle("muted", muted);
    if (muted && currentAudio) { currentAudio.pause(); currentAudio = null; }
    showBubble("Режим", muted ? "Звук выключен" : "Звук включен");
  });

  // Phase 2: trigger when Equipment accordion opens
  function setupPhase2Trigger() {
    const equipmentSection = document.getElementById("equipment-section");
    if (!equipmentSection) return;
    const trigger = equipmentSection.querySelector(".accordion-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      setTimeout(() => {
        const isOpen = equipmentSection.classList.contains("is-open");
        if (isOpen) {
          // Quiz speaks first, equipment voice queued after
          if (window.__configuratorQuiz && typeof window.__configuratorQuiz.open === "function") {
            window.__configuratorQuiz.open(2);
          }
          speakAfter("Кран-балка, антресоль — то что превращает просто коробку в полноценный рабочий объект. Включайте, смотрите как встаёт на 3D-модель.");
        }
      }, 200);
    }, { once: true });
  }

  setTimeout(() => {
    setupPhase2Trigger();
  }, 1000);

  // --- Idle roaming helper: speaks hints when user is inactive ---
  const _idleHints = [
    "Попробуйте раздвинуть ширину — увидите как меняется силуэт здания в реальном времени.",
    "Включите сэндвич-панели — появится цвет, ворота, двери и окна. Совсем другой вид!",
    "Кран-балка превращает ангар в полноценный производственный цех. Включите и посмотрите.",
    "Нажмите «Изнутри» внизу сцены — увидите здание глазами того, кто внутри будет работать.",
    "Двигайте ворота прямо по стене — зажмите и потяните мышкой.",
    "Ленточное остекление — раз, и фасад выглядит как бизнес-центр. Попробуйте в разделе окна.",
    "Хотите быстрый расчёт? Нажмите «Получить расчёт» — ответим в течение 15 минут.",
    "Односкатная крыша — современный стиль. Переключите тип кровли в разделе Размеры.",
  ];
  let _idleIndex = 0;
  let _idleTimer = null;
  const IDLE_DELAY = 30000;

  function _resetIdle() {
    clearTimeout(_idleTimer);
    _idleTimer = setTimeout(_speakIdleHint, IDLE_DELAY);
  }

  function _speakIdleHint() {
    if (muted || _isSpeaking || currentAudio) { _resetIdle(); return; }
    const hint = _idleHints[_idleIndex % _idleHints.length];
    _idleIndex++;
    showBubble("Подсказка", hint);
    speak(hint);
    // Next hint after longer delay
    _idleTimer = setTimeout(_speakIdleHint, 60000);
  }

  // Track user activity to reset idle timer
  ["pointerdown", "keydown", "wheel", "touchstart"].forEach(evt => {
    document.addEventListener(evt, _resetIdle, { passive: true });
  });
  // Start idle timer after scene loads
  setTimeout(_resetIdle, 8000);
})();
