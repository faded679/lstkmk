// Reactive speaking guide for 3D Configurator
// Greets user on load, then speaks contextual tips when user interacts with each section

(function () {
  "use strict";

  let muted = false;
  const spoken = {}; // track which tips already said (don't repeat)

  // --- Tips per section / action ---
  const TIPS = {
    welcome: "Отлично, город выбран! Теперь давайте спроектируем ваше здание. Слева вы видите панель управления. Зажимайте левую кнопку мыши на 3D-модели чтобы вращать, колёсиком приближайте, правой кнопкой — панорама. Начните с размеров.",
    sizes: "Двигайте ползунки ширины, длины и высоты — модель обновляется в реальном времени. Ниже можно задать шаг колонн — стандарт 6 метров.",
    equipment: "В «Оборудовании» вы можете добавить кран-балку и антресоль. У антресоли настраивается сторона, высота, глубина и длина.",
    cladding: "Здесь включается обшивка сэндвич-панелями. После включения выберите цвет стен и кровли из палитры RAL.",
    openings: "В «Проёмах» добавьте ворота, двери или окна. Чтобы переместить — зажмите мышь прямо на элементе на 3D-модели и перетащите в нужное место.",
    crane: "Кран-балка добавлена внутри здания. Грузоподъёмность обсуждается при заказе.",
    mezzanine: "Антресоль добавлена. Выберите сторону, настройте высоту и глубину ползунками.",
    sandwich: "Обшивка включена. Теперь доступны цвета и раздел Проёмы для ворот, дверей и окон.",
    sandwichOff: "Обшивка отключена. Виден только металлический каркас.",
    gate: "Ворота добавлены. Зажмите мышь на воротах на модели и перетащите влево-вправо.",
    doorSide: "Боковая дверь добавлена. Зажмите мышь на двери и двигайте вдоль стены.",
    doorFront: "Дверь у ворот добавлена. Её тоже можно перемещать — зажмите и тащите.",
    windows: "Окна добавлены. Нажмите «+ Слева» или «+ Справа» для добавления. Каждое окно можно зажать мышью и перетащить вдоль стены.",
    colorWall: "Цвет стен изменён!",
    colorRoof: "Цвет кровли обновлён.",
    ribbon: "Ленточное остекление — это сплошной ряд окон по всей длине стены. Выберите сторону: слева, справа или обе.",
  };

  // --- Speech synthesis ---
  function speak(text) {
    if (muted || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "ru-RU";
    utt.rate = 0.95;
    const voices = window.speechSynthesis.getVoices();
    const ruVoice = voices.find(v => v.lang.startsWith("ru") && v.name.includes("Google"))
      || voices.find(v => v.lang.startsWith("ru") && v.name.includes("Yandex"))
      || voices.find(v => v.lang.startsWith("ru"));
    if (ruVoice) utt.voice = ruVoice;
    window.speechSynthesis.speak(utt);
  }

  function sayOnce(key) {
    if (spoken[key]) return;
    spoken[key] = true;
    speak(TIPS[key]);
    showBubble(TIPS[key]);
  }

  // --- Bubble UI ---
  const style = document.createElement("style");
  style.textContent = `
    #guide-bubble {
      position: fixed; bottom: 92px; right: 24px; z-index: 10000;
      max-width: 320px; padding: 14px 36px 14px 16px;
      background: #fff; border-radius: 14px;
      box-shadow: 0 6px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
      font: 13px/1.6 'Inter', sans-serif; color: #2c3e50;
      animation: gbIn 0.3s ease-out;
      transition: opacity 0.3s;
    }
    #guide-bubble.hidden { display: none; }
    #guide-bubble .gb-close {
      position: absolute; top: 6px; right: 10px;
      background: none; border: none; font-size: 18px; cursor: pointer; color: #aaa; line-height: 1;
    }
    #guide-bubble .gb-close:hover { color: #555; }
    #guide-mute {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 48px; height: 48px; border-radius: 50%; border: none;
      background: #e67e22; color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(230,126,34,0.35), 0 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.15s, background 0.2s;
    }
    #guide-mute:hover { transform: scale(1.08); }
    #guide-mute.muted { background: #95a5a6; }
    @keyframes gbIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 600px) {
      #guide-bubble { max-width: calc(100vw - 80px); right: 16px; bottom: 80px; }
      #guide-mute { bottom: 16px; right: 16px; width: 44px; height: 44px; }
    }
  `;
  document.head.appendChild(style);

  // Bubble element
  const bubble = document.createElement("div");
  bubble.id = "guide-bubble";
  bubble.classList.add("hidden");
  document.body.appendChild(bubble);

  // Mute button
  const muteBtn = document.createElement("button");
  muteBtn.id = "guide-mute";
  muteBtn.title = "Помощник (нажмите чтобы вкл/выкл звук)";
  muteBtn.innerHTML = speakerIcon();
  document.body.appendChild(muteBtn);

  let bubbleTimer = null;

  function showBubble(text) {
    bubble.classList.remove("hidden");
    bubble.innerHTML = `${text}<button class="gb-close">×</button>`;
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.add("hidden"), 12000);
    bubble.querySelector(".gb-close").addEventListener("click", () => bubble.classList.add("hidden"));
  }

  // Mute toggle
  muteBtn.addEventListener("click", () => {
    muted = !muted;
    muteBtn.classList.toggle("muted", muted);
    muteBtn.innerHTML = muted ? mutedIcon() : speakerIcon();
    if (muted) {
      window.speechSynthesis && window.speechSynthesis.cancel();
      bubble.classList.add("hidden");
    }
  });

  // --- Greet after city modal closes ---
  function waitForCityAndGreet() {
    const modal = document.getElementById("city-modal");
    if (!modal || modal.classList.contains("hidden")) {
      sayOnce("welcome");
      return;
    }
    const confirmBtn = document.getElementById("city-confirm");
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        setTimeout(() => sayOnce("welcome"), 600);
      }, { once: true });
    } else {
      sayOnce("welcome");
    }
  }
  waitForCityAndGreet();

  // --- Watch user interactions ---
  // Accordion open events
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      if (!item) return;
      const section = item.dataset.accordion;
      setTimeout(() => {
        if (item.classList.contains("is-open") && TIPS[section]) {
          sayOnce(section);
        }
      }, 150);
    });
  });

  // Sliders in sizes — speak sizes tip on first interaction
  const sizeSliders = document.querySelectorAll('[data-accordion="sizes"] input[type="range"]');
  sizeSliders.forEach(slider => {
    slider.addEventListener("input", () => sayOnce("sizes"), { once: true });
  });

  // Checkboxes
  const crane = document.getElementById("crane");
  if (crane) crane.addEventListener("change", () => { if (crane.checked) sayOnce("crane"); });

  const mezz = document.getElementById("mezzanine");
  if (mezz) mezz.addEventListener("change", () => { if (mezz.checked) sayOnce("mezzanine"); });

  const sandwich = document.getElementById("sandwich");
  if (sandwich) sandwich.addEventListener("change", () => {
    if (sandwich.checked) sayOnce("sandwich");
    else sayOnce("sandwichOff");
  });

  const gate = document.getElementById("gate");
  if (gate) gate.addEventListener("change", () => { if (gate.checked) sayOnce("gate"); });

  const doorSide = document.getElementById("door-side");
  if (doorSide) doorSide.addEventListener("change", () => { if (doorSide.checked) sayOnce("doorSide"); });

  const doorFront = document.getElementById("door-front");
  if (doorFront) doorFront.addEventListener("change", () => { if (doorFront.checked) sayOnce("doorFront"); });

  const windows = document.getElementById("windows");
  if (windows) windows.addEventListener("change", () => { if (windows.checked) sayOnce("windows"); });

  const ribbon = document.getElementById("ribbon-glazing");
  if (ribbon) ribbon.addEventListener("change", () => { if (ribbon.checked) sayOnce("ribbon"); });

  // Color grid clicks
  const colorGrid = document.getElementById("color-grid");
  if (colorGrid) colorGrid.addEventListener("click", () => sayOnce("colorWall"));

  const roofGrid = document.getElementById("roof-color-grid");
  if (roofGrid) roofGrid.addEventListener("click", () => sayOnce("colorRoof"));

  // Load voices
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // --- Icons ---
  function speakerIcon() {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>`;
  }
  function mutedIcon() {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  }
})();
