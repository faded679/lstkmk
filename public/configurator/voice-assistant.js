// Step-by-step speaking guide for 3D Configurator
// Greets user, walks through each section with speech synthesis

(function () {
  "use strict";

  // --- Guide steps ---
  const STEPS = [
    {
      id: "welcome",
      text: "Добрый день! Вы в 3D-конфигураторе металлоконструкций. Здесь вы можете спроектировать своё здание — ангар, склад или производственный цех. Давайте пройдёмся по настройкам вместе. Нажмите «Далее», чтобы начать.",
      highlight: null,
    },
    {
      id: "sizes",
      text: "Шаг 1 — Размеры. Слева в разделе «Размеры» выберите ширину, длину и высоту вашего будущего здания. Двигайте ползунки — 3D-модель обновится в реальном времени.",
      highlight: '[data-accordion="sizes"]',
    },
    {
      id: "column-step",
      text: "Также можно задать шаг колонн. Стандарт для ангаров — 6 метров, но вы можете выбрать 3, 9, 12 или задать своё значение. Чем меньше шаг — тем прочнее конструкция.",
      highlight: '[data-accordion="sizes"]',
    },
    {
      id: "equipment",
      text: "Шаг 2 — Оборудование. Откройте раздел «Оборудование». Здесь можно добавить кран-балку для подъёма грузов и антресоль — второй уровень внутри здания. У антресоли настраивается сторона, высота и глубина.",
      highlight: '[data-accordion="equipment"]',
    },
    {
      id: "cladding",
      text: "Шаг 3 — Обшивка. В разделе «Обшивка» включите сэндвич-панели. После этого появятся палитры цветов — вы сможете выбрать цвет стен и кровли из каталога RAL.",
      highlight: '[data-accordion="cladding"]',
    },
    {
      id: "openings",
      text: "Шаг 4 — Проёмы. Когда обшивка включена, становится доступен раздел «Проёмы». Здесь добавляются секционные ворота, боковые и фронтальные двери, а также окна. Ворота, двери и окна можно перетаскивать прямо на 3D-модели — зажмите и двигайте.",
      highlight: '[data-accordion="openings"]',
    },
    {
      id: "final",
      text: "Отлично! Теперь вы знаете все возможности конфигуратора. Вращайте модель мышкой, приближайте колёсиком. Когда будете готовы — свяжитесь с нами для точного расчёта: +7 960 632-20-61. Удачного проектирования!",
      highlight: null,
    },
  ];

  let currentStep = 0;
  let guideActive = false;
  let guideDismissed = false;

  // --- Speech synthesis ---
  function speak(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "ru-RU";
    utt.rate = 0.95;
    const voices = window.speechSynthesis.getVoices();
    const ruVoice = voices.find(v => v.lang.startsWith("ru") && v.name.includes("Google"))
      || voices.find(v => v.lang.startsWith("ru") && v.name.includes("Yandex"))
      || voices.find(v => v.lang.startsWith("ru"));
    if (ruVoice) utt.voice = ruVoice;
    utt.onend = () => { if (onEnd) onEnd(); };
    utt.onerror = () => { if (onEnd) onEnd(); };
    window.speechSynthesis.speak(utt);
  }

  // --- UI ---
  const style = document.createElement("style");
  style.textContent = `
    #guide-panel {
      position: fixed; bottom: 24px; right: 24px; z-index: 10000;
      width: 340px; max-width: calc(100vw - 48px);
      background: #fff; border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08);
      font-family: 'Inter', sans-serif;
      animation: guideIn 0.35s ease-out;
      overflow: hidden;
    }
    #guide-panel.hidden { display: none; }
    #guide-header {
      background: #e67e22; color: #fff; padding: 14px 16px;
      display: flex; align-items: center; gap: 10px;
    }
    #guide-header svg { flex-shrink: 0; }
    #guide-header span { font-size: 14px; font-weight: 600; }
    #guide-body {
      padding: 16px; font-size: 14px; line-height: 1.6; color: #2c3e50;
      min-height: 80px;
    }
    #guide-footer {
      padding: 10px 16px 14px; display: flex; gap: 8px; justify-content: flex-end;
      border-top: 1px solid #f0f0f0;
    }
    #guide-footer button {
      padding: 8px 16px; border-radius: 8px; border: none;
      font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.15s;
    }
    #guide-next {
      background: #e67e22; color: #fff;
    }
    #guide-next:hover { background: #d35400; }
    #guide-skip {
      background: transparent; color: #999;
    }
    #guide-skip:hover { color: #666; }
    #guide-repeat {
      background: #f0f0f0; color: #555;
    }
    #guide-repeat:hover { background: #e0e0e0; }
    #guide-dots {
      display: flex; gap: 4px; justify-content: center; padding-bottom: 12px;
    }
    #guide-dots span {
      width: 8px; height: 8px; border-radius: 50%; background: #ddd; transition: background 0.2s;
    }
    #guide-dots span.active { background: #e67e22; }
    #guide-start-btn {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 56px; height: 56px; border-radius: 50%; border: none;
      background: #e67e22; color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(230,126,34,0.4), 0 2px 6px rgba(0,0,0,0.12);
      transition: transform 0.15s;
    }
    #guide-start-btn:hover { transform: scale(1.08); }
    #guide-start-btn.hidden { display: none; }
    .guide-highlight {
      outline: 3px solid #e67e22 !important;
      outline-offset: 4px;
      border-radius: 8px;
      transition: outline-color 0.3s;
    }
    @keyframes guideIn {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @media (max-width: 600px) {
      #guide-panel { width: calc(100vw - 32px); right: 16px; bottom: 16px; }
      #guide-start-btn { bottom: 16px; right: 16px; }
    }
  `;
  document.head.appendChild(style);

  // Start button (shown when guide is closed)
  const startBtn = document.createElement("button");
  startBtn.id = "guide-start-btn";
  startBtn.title = "Помощник";
  startBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  startBtn.classList.add("hidden");
  document.body.appendChild(startBtn);

  // Panel
  const panel = document.createElement("div");
  panel.id = "guide-panel";
  panel.classList.add("hidden");
  panel.innerHTML = `
    <div id="guide-header">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>
      <span>Помощник по конфигуратору</span>
    </div>
    <div id="guide-body"></div>
    <div id="guide-dots"></div>
    <div id="guide-footer">
      <button id="guide-skip">Пропустить</button>
      <button id="guide-repeat">🔊 Повторить</button>
      <button id="guide-next">Далее →</button>
    </div>
  `;
  document.body.appendChild(panel);

  const guideBody = document.getElementById("guide-body");
  const guideDots = document.getElementById("guide-dots");
  const guideNext = document.getElementById("guide-next");
  const guideSkip = document.getElementById("guide-skip");
  const guideRepeat = document.getElementById("guide-repeat");

  // --- Render step ---
  function renderStep() {
    const step = STEPS[currentStep];
    guideBody.textContent = step.text;

    // Dots
    guideDots.innerHTML = STEPS.map((_, i) =>
      `<span class="${i === currentStep ? "active" : ""}"></span>`
    ).join("");

    // Button text
    guideNext.textContent = currentStep < STEPS.length - 1 ? "Далее →" : "Готово ✓";

    // Highlight section
    document.querySelectorAll(".guide-highlight").forEach(el => el.classList.remove("guide-highlight"));
    if (step.highlight) {
      const target = document.querySelector(step.highlight);
      if (target) {
        target.classList.add("guide-highlight");
        // Open accordion
        if (!target.classList.contains("is-open")) {
          target.classList.add("is-open");
          const trigger = target.querySelector(".accordion-trigger");
          if (trigger) trigger.setAttribute("aria-expanded", "true");
        }
        // Scroll into view in sidebar
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    // Speak
    speak(step.text);
  }

  // --- Open/close guide ---
  function openGuide() {
    guideActive = true;
    panel.classList.remove("hidden");
    startBtn.classList.add("hidden");
    renderStep();
  }

  function closeGuide() {
    guideActive = false;
    guideDismissed = true;
    panel.classList.add("hidden");
    startBtn.classList.remove("hidden");
    window.speechSynthesis && window.speechSynthesis.cancel();
    document.querySelectorAll(".guide-highlight").forEach(el => el.classList.remove("guide-highlight"));
  }

  // --- Events ---
  guideNext.addEventListener("click", () => {
    if (currentStep < STEPS.length - 1) {
      currentStep++;
      renderStep();
    } else {
      closeGuide();
    }
  });

  guideSkip.addEventListener("click", () => {
    closeGuide();
  });

  guideRepeat.addEventListener("click", () => {
    const step = STEPS[currentStep];
    speak(step.text);
  });

  startBtn.addEventListener("click", () => {
    currentStep = 0;
    openGuide();
  });

  // --- Auto-start on page load (with delay for 3D scene to load) ---
  function autoStart() {
    if (guideDismissed) return;
    // Load voices first
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
    setTimeout(() => {
      openGuide();
    }, 2000);
  }

  // Wait for loading to finish
  const loading = document.getElementById("loading");
  if (loading) {
    const observer = new MutationObserver(() => {
      if (loading.style.display === "none" || loading.classList.contains("hidden") || !loading.offsetParent) {
        observer.disconnect();
        autoStart();
      }
    });
    observer.observe(loading, { attributes: true, attributeFilter: ["style", "class"] });
    // Fallback if already hidden
    if (loading.style.display === "none" || !loading.offsetParent) {
      observer.disconnect();
      autoStart();
    }
  } else {
    autoStart();
  }

  // Load voices early
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
})();
