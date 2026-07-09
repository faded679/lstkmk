// Multi-step AI quiz for the 3D configurator
(function () {
  "use strict";

  const STEPS = [
    {
      id: "intro",
      type: "intro",
      text: "Меня зовут Помощник Макстил. Я помогу подобрать здание под ваши задачи.",
      button: "Начать",
    },
    {
      id: "name",
      type: "text",
      question: "А вас как зовут?",
      placeholder: "Иван",
      field: "clientName",
      required: true,
    },
    {
      id: "building-type",
      type: "choice",
      question: "Какой тип здания вам нужен?",
      field: "buildingType",
      options: [
        { value: "angar", label: "Ангар" },
        { value: "sklad", label: "Склад" },
        { value: "ceh", label: "Производственный цех" },
        { value: "sto", label: "СТО / автосервис" },
        { value: "ferma", label: "Ферма / животноводство" },
        { value: "pavilion", label: "Торговый павильон" },
        { value: "other", label: "Другое" },
      ],
      required: true,
    },
    {
      id: "purpose",
      type: "text",
      question: "Что планируете размещать внутри? Например, технику, товары, скот.",
      placeholder: "Сельхозтехника и зерно",
      field: "purpose",
    },
    {
      id: "client-type",
      type: "choice",
      question: "Вы строите для себя или для компании?",
      field: "clientType",
      options: [
        { value: "personal", label: "Для себя" },
        { value: "company", label: "Для компании" },
      ],
      required: true,
    },
    {
      id: "site",
      type: "choice",
      question: "Выбрали ли вы местность / участок или только присматриваетесь?",
      field: "siteStatus",
      options: [
        { value: "have", label: "Участок уже есть" },
        { value: "searching", label: "Присматриваюсь" },
        { value: "later", label: "Уточню позже" },
      ],
      required: true,
    },
    {
      id: "deadline",
      type: "choice",
      question: "Когда планируете построить?",
      field: "deadline",
      options: [
        { value: "urgent", label: "Срочно — в течение месяца" },
        { value: "season", label: "В этом сезоне — 3-6 месяцев" },
        { value: "year", label: "Через год и позже" },
        { value: "estimate", label: "Пока нужна смета / проект" },
      ],
      required: true,
    },
    {
      id: "gate-transport",
      type: "choice",
      question: "Какой транспорт будет заезжать в здание? От этого зависят ворота.",
      field: "gateTransport",
      options: [
        { value: "gazel", label: "Газель / легковой автомобиль" },
        { value: "truck", label: "Фура / еврофура" },
        { value: "special", label: "Самосвал / спецтехника" },
        { value: "tractor", label: "Трактор / сельхозтехника" },
        { value: "consult", label: "Нужна консультация менеджера" },
      ],
      required: true,
    },
    {
      id: "phone",
      type: "tel",
      question: "Оставьте номер телефона. Менеджер Макстил перезвонит и поможет с воротами, дверями и расчётом.",
      placeholder: "+7 (___) ___-__-__",
      field: "phone",
      required: true,
    },
  ];

  const CHOICE_SYNONYMS = {
    angar: ["анг", "ангар", "навес"],
    sklad: ["склад", "хран"],
    ceh: ["цех", "производ"],
    sto: ["сто", "сервис", "авто", "мойка"],
    ferma: ["ферма", "живот", "коров", "свин", "птич"],
    pavilion: ["павильон", "торг"],
    other: ["другое", "иное"],
    personal: ["себя", "лично", "личный"],
    company: ["компан", "организац", "фирм"],
    have: ["есть", "выбрал", "купил"],
    searching: ["присматриваюсь", "ищу", "подбираю"],
    later: ["уточню", "позже"],
    urgent: ["срочно", "месяц", "недел"],
    season: ["сезон", "3", "6", "полгода"],
    year: ["год", "позже"],
    estimate: ["смета", "проект", "пока"],
    gazel: ["газель", "легков", "мален"],
    truck: ["фура", "фуры", "евро", "больш"],
    special: ["самосвал", "спецтехник", "бульдоз"],
    tractor: ["трактор", "сельхоз", "комбайн"],
    consult: ["консультац", "не знаю", "менеджер"],
  };

  class ConfiguratorQuiz {
    constructor() {
      this.currentStep = 0;
      this.data = {};
      this.modal = null;
      this.content = null;
      this.progressCurrent = null;
      this.questionEl = null;
      this.inputArea = null;
      this.nextBtn = null;
      this.onQuestionCallback = null;
      this.onComplete = null;
      this.isOpen = false;
      this._init();
    }

    _init() {
      this._createModal();
      this._bindFinishHandler();
    }

    _createModal() {
      const modal = document.createElement("div");
      modal.id = "quiz-modal";
      modal.className = "quiz-modal hidden";
      modal.innerHTML = `
        <div class="quiz-modal-content">
          <div class="quiz-head">
            <div class="quiz-progress"><span id="quiz-progress-current">1</span> / <span id="quiz-progress-total">${STEPS.length}</span></div>
            <button type="button" class="quiz-skip" id="quiz-skip">Пропустить</button>
          </div>
          <div class="quiz-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b6fd9" stroke-width="1.5"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          </div>
          <h2 id="quiz-question" class="quiz-question"></h2>
          <div id="quiz-input-area" class="quiz-input-area"></div>
          <button type="button" id="quiz-next" class="quiz-next"></button>
          <p class="quiz-hint">Можно ответить голосом — нажмите кнопку микрофона в углу</p>
        </div>
      `;
      document.body.appendChild(modal);
      this.modal = modal;
      this.content = modal.querySelector(".quiz-modal-content");
      this.progressCurrent = modal.querySelector("#quiz-progress-current");
      this.questionEl = modal.querySelector("#quiz-question");
      this.inputArea = modal.querySelector("#quiz-input-area");
      this.nextBtn = modal.querySelector("#quiz-next");

      modal.querySelector("#quiz-skip").addEventListener("click", () => this.skip());
      modal.addEventListener("click", (e) => { if (e.target === modal) this.skip(); });
      this.nextBtn.addEventListener("click", () => this.next());
    }

    _bindFinishHandler() {
      this.onComplete = (data, skipped) => {
        window.__quizData = { ...data, skipped };
        // Show success in voice bubble
        if (window.__aiVoiceShowBubble) {
          window.__aiVoiceShowBubble("Помощник", skipped
            ? "Если передумаете — нажмите «Получить расчёт» и мы свяжемся."
            : "Спасибо! Менеджер перезвонит вам. Продолжайте настраивать здание голосом или вручную.");
        }
      };
    }

    open() {
      this.currentStep = 0;
      this.data = {};
      this.isOpen = true;
      this.modal.classList.remove("hidden");
      this._renderStep();
      this._speakQuestion();
    }

    close() {
      this.isOpen = false;
      this.modal.classList.add("hidden");
    }

    skip() {
      this.close();
      if (this.onComplete) this.onComplete(this.data, true);
    }

    setOnQuestion(cb) { this.onQuestionCallback = cb; }
    setOnComplete(cb) { this.onComplete = cb; }

    _renderStep() {
      const step = STEPS[this.currentStep];
      this.progressCurrent.textContent = String(this.currentStep + 1);
      this.questionEl.textContent = step.type === "intro" ? step.text : step.question;
      this.inputArea.innerHTML = "";
      this.nextBtn.textContent = step.type === "intro" ? step.button : "Далее";
      this.nextBtn.disabled = step.type !== "intro";

      if (step.type === "text" || step.type === "tel") {
        const input = document.createElement("input");
        input.type = step.type === "tel" ? "tel" : "text";
        input.className = "quiz-input";
        input.placeholder = step.placeholder || "";
        input.value = this.data[step.field] || "";
        input.addEventListener("input", () => {
          this.data[step.field] = input.value.trim();
          this._validateStep();
        });
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") this.next(); });
        this.inputArea.appendChild(input);
        setTimeout(() => input.focus(), 100);
      } else if (step.type === "choice") {
        const grid = document.createElement("div");
        grid.className = "quiz-options";
        for (const opt of step.options) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "quiz-option";
          btn.textContent = opt.label;
          btn.dataset.value = opt.value;
          if (this.data[step.field] === opt.value) btn.classList.add("active");
          btn.addEventListener("click", () => {
            this.data[step.field] = opt.value;
            grid.querySelectorAll(".quiz-option").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            this._validateStep();
            setTimeout(() => this.next(), 250);
          });
          grid.appendChild(btn);
        }
        this.inputArea.appendChild(grid);
      }

      this._validateStep();
      if (this.onQuestionCallback) this.onQuestionCallback(step);
    }

    _validateStep() {
      const step = STEPS[this.currentStep];
      if (step.type === "intro") {
        this.nextBtn.disabled = false;
        return;
      }
      const val = this.data[step.field];
      let valid = false;
      if (step.type === "choice") valid = !!val;
      else if (step.required) valid = !!(val && val.length >= (step.field === "phone" ? 10 : 2));
      else valid = !val || val.length >= 2;
      this.nextBtn.disabled = !valid;
    }

    next() {
      if (this.nextBtn.disabled) return;
      if (this.currentStep < STEPS.length - 1) {
        this.currentStep++;
        this._renderStep();
        this._speakQuestion();
      } else {
        this._finish();
      }
    }

    handleVoiceAnswer(text) {
      if (!this.isOpen || !text) return false;
      const step = STEPS[this.currentStep];
      const lower = text.toLowerCase().trim();

      if (step.type === "choice") {
        // Direct label or value match
        for (const opt of step.options) {
          const label = opt.label.toLowerCase();
          if (lower.includes(label) || lower.includes(opt.value.toLowerCase())) {
            this.data[step.field] = opt.value;
            this._renderStep();
            setTimeout(() => this.next(), 400);
            return true;
          }
        }
        // Synonyms
        for (const [value, words] of Object.entries(CHOICE_SYNONYMS)) {
          if (!step.options.find((o) => o.value === value)) continue;
          for (const w of words) {
            if (lower.includes(w)) {
              this.data[step.field] = value;
              this._renderStep();
              setTimeout(() => this.next(), 400);
              return true;
            }
          }
        }
        return false;
      }

      if (step.type === "tel") {
        const digits = text.replace(/\D/g, "");
        if (digits.length >= 10) {
          this.data[step.field] = digits.startsWith("7") || digits.startsWith("8") ? digits : "7" + digits;
          this._renderStep();
          setTimeout(() => this.next(), 400);
          return true;
        }
      }

      if (step.type === "text") {
        this.data[step.field] = text.trim();
        this._renderStep();
        setTimeout(() => this.next(), 400);
        return true;
      }

      return false;
    }

    _speakQuestion() {
      const step = STEPS[this.currentStep];
      const text = step.type === "intro" ? step.text : step.question;
      if (window.__aiVoiceSpeak && typeof window.__aiVoiceSpeak === "function") {
        window.__aiVoiceSpeak(text);
      }
    }

    _finish() {
      this.isOpen = false;
      this.modal.classList.add("hidden");
      if (window.__cityData) {
        this.data.city = window.__cityData.name;
        this.data.windRegion = window.__cityData.wind;
        this.data.snowRegion = window.__cityData.snow;
      }
      if (this.onComplete) this.onComplete(this.data, false);
    }

    getData() { return { ...this.data }; }
    isActive() { return this.isOpen; }
  }

  window.__configuratorQuiz = new ConfiguratorQuiz();
})();
