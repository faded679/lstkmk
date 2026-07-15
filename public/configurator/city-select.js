// City selection for wind/snow region determination
(function () {
  "use strict";

  // Wind regions: 1-7, Snow regions: 1-8 (СП 20.13330)
  const CITIES = [
    { name: "Москва", region: "Московская обл.", wind: 1, snow: 3 },
    { name: "Санкт-Петербург", region: "Ленинградская обл.", wind: 2, snow: 3 },
    { name: "Новосибирск", region: "Новосибирская обл.", wind: 3, snow: 4 },
    { name: "Екатеринбург", region: "Свердловская обл.", wind: 2, snow: 3 },
    { name: "Казань", region: "Татарстан", wind: 2, snow: 4 },
    { name: "Нижний Новгород", region: "Нижегородская обл.", wind: 2, snow: 4 },
    { name: "Челябинск", region: "Челябинская обл.", wind: 3, snow: 3 },
    { name: "Самара", region: "Самарская обл.", wind: 3, snow: 4 },
    { name: "Омск", region: "Омская обл.", wind: 2, snow: 3 },
    { name: "Ростов-на-Дону", region: "Ростовская обл.", wind: 3, snow: 2 },
    { name: "Уфа", region: "Башкортостан", wind: 2, snow: 5 },
    { name: "Красноярск", region: "Красноярский край", wind: 3, snow: 3 },
    { name: "Воронеж", region: "Воронежская обл.", wind: 2, snow: 3 },
    { name: "Пермь", region: "Пермский край", wind: 2, snow: 5 },
    { name: "Волгоград", region: "Волгоградская обл.", wind: 3, snow: 2 },
    { name: "Краснодар", region: "Краснодарский край", wind: 3, snow: 2 },
    { name: "Саратов", region: "Саратовская обл.", wind: 3, snow: 3 },
    { name: "Тюмень", region: "Тюменская обл.", wind: 2, snow: 4 },
    { name: "Тольятти", region: "Самарская обл.", wind: 3, snow: 4 },
    { name: "Ижевск", region: "Удмуртия", wind: 2, snow: 5 },
    { name: "Барнаул", region: "Алтайский край", wind: 3, snow: 4 },
    { name: "Ульяновск", region: "Ульяновская обл.", wind: 2, snow: 4 },
    { name: "Иркутск", region: "Иркутская обл.", wind: 3, snow: 2 },
    { name: "Хабаровск", region: "Хабаровский край", wind: 4, snow: 3 },
    { name: "Ярославль", region: "Ярославская обл.", wind: 1, snow: 4 },
    { name: "Владивосток", region: "Приморский край", wind: 5, snow: 3 },
    { name: "Махачкала", region: "Дагестан", wind: 5, snow: 2 },
    { name: "Томск", region: "Томская обл.", wind: 3, snow: 4 },
    { name: "Оренбург", region: "Оренбургская обл.", wind: 3, snow: 4 },
    { name: "Кемерово", region: "Кемеровская обл.", wind: 3, snow: 4 },
    { name: "Новокузнецк", region: "Кемеровская обл.", wind: 3, snow: 4 },
    { name: "Рязань", region: "Рязанская обл.", wind: 1, snow: 3 },
    { name: "Астрахань", region: "Астраханская обл.", wind: 4, snow: 1 },
    { name: "Пенза", region: "Пензенская обл.", wind: 2, snow: 3 },
    { name: "Липецк", region: "Липецкая обл.", wind: 2, snow: 3 },
    { name: "Тула", region: "Тульская обл.", wind: 1, snow: 3 },
    { name: "Киров", region: "Кировская обл.", wind: 2, snow: 5 },
    { name: "Чебоксары", region: "Чувашия", wind: 2, snow: 4 },
    { name: "Курск", region: "Курская обл.", wind: 2, snow: 3 },
    { name: "Улан-Удэ", region: "Бурятия", wind: 3, snow: 2 },
    { name: "Тверь", region: "Тверская обл.", wind: 1, snow: 4 },
    { name: "Магнитогорск", region: "Челябинская обл.", wind: 3, snow: 3 },
    { name: "Сочи", region: "Краснодарский край", wind: 3, snow: 2 },
    { name: "Иваново", region: "Ивановская обл.", wind: 1, snow: 4 },
    { name: "Брянск", region: "Брянская обл.", wind: 1, snow: 3 },
    { name: "Белгород", region: "Белгородская обл.", wind: 2, snow: 3 },
    { name: "Сургут", region: "ХМАО", wind: 2, snow: 4 },
    { name: "Владимир", region: "Владимирская обл.", wind: 1, snow: 3 },
    { name: "Архангельск", region: "Архангельская обл.", wind: 3, snow: 5 },
    { name: "Калуга", region: "Калужская обл.", wind: 1, snow: 3 },
    { name: "Смоленск", region: "Смоленская обл.", wind: 1, snow: 3 },
    { name: "Курган", region: "Курганская обл.", wind: 2, snow: 3 },
    { name: "Орёл", region: "Орловская обл.", wind: 2, snow: 3 },
    { name: "Мурманск", region: "Мурманская обл.", wind: 4, snow: 5 },
    { name: "Вологда", region: "Вологодская обл.", wind: 1, snow: 4 },
    { name: "Тамбов", region: "Тамбовская обл.", wind: 2, snow: 3 },
    { name: "Стерлитамак", region: "Башкортостан", wind: 2, snow: 5 },
    { name: "Петрозаводск", region: "Карелия", wind: 2, snow: 4 },
    { name: "Нижневартовск", region: "ХМАО", wind: 2, snow: 4 },
    { name: "Кострома", region: "Костромская обл.", wind: 1, snow: 4 },
    { name: "Калининград", region: "Калининградская обл.", wind: 2, snow: 2 },
    { name: "Новороссийск", region: "Краснодарский край", wind: 5, snow: 2 },
    { name: "Йошкар-Ола", region: "Марий Эл", wind: 2, snow: 4 },
    { name: "Таганрог", region: "Ростовская обл.", wind: 4, snow: 2 },
    { name: "Комсомольск-на-Амуре", region: "Хабаровский край", wind: 4, snow: 4 },
    { name: "Сыктывкар", region: "Коми", wind: 2, snow: 5 },
    { name: "Нижнекамск", region: "Татарстан", wind: 2, snow: 4 },
    { name: "Дзержинск", region: "Нижегородская обл.", wind: 2, snow: 4 },
    { name: "Братск", region: "Иркутская обл.", wind: 3, snow: 3 },
    { name: "Шахты", region: "Ростовская обл.", wind: 3, snow: 2 },
    { name: "Орск", region: "Оренбургская обл.", wind: 3, snow: 3 },
    { name: "Ангарск", region: "Иркутская обл.", wind: 3, snow: 2 },
    { name: "Старый Оскол", region: "Белгородская обл.", wind: 2, snow: 3 },
    { name: "Миасс", region: "Челябинская обл.", wind: 3, snow: 3 },
    { name: "Энгельс", region: "Саратовская обл.", wind: 3, snow: 3 },
    { name: "Псков", region: "Псковская обл.", wind: 2, snow: 3 },
    { name: "Великий Новгород", region: "Новгородская обл.", wind: 2, snow: 3 },
    { name: "Бийск", region: "Алтайский край", wind: 3, snow: 3 },
  ];

  const modal = document.getElementById("city-modal");
  const input = document.getElementById("city-input");
  const suggestions = document.getElementById("city-suggestions");
  const result = document.getElementById("city-result");
  const windEl = document.getElementById("city-wind");
  const snowEl = document.getElementById("city-snow");
  const confirmBtn = document.getElementById("city-confirm");

  let selectedCity = null;

  function search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return CITIES.filter(c =>
      c.name.toLowerCase().startsWith(q) ||
      c.name.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  function renderSuggestions(list) {
    suggestions.innerHTML = "";
    for (const city of list) {
      const div = document.createElement("div");
      div.className = "city-option";
      div.textContent = city.name + " (" + city.region + ")";
      div.addEventListener("click", () => selectCity(city));
      suggestions.appendChild(div);
    }
  }

  function selectCity(city) {
    selectedCity = city;
    input.value = city.name;
    suggestions.innerHTML = "";
    result.classList.remove("hidden");
    windEl.textContent = "Ветровой район: " + city.wind;
    snowEl.textContent = "Снеговой район: " + city.snow;
    confirmBtn.disabled = false;
  }

  input.addEventListener("input", () => {
    selectedCity = null;
    confirmBtn.disabled = true;
    result.classList.add("hidden");
    const matches = search(input.value.trim());
    renderSuggestions(matches);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const matches = search(input.value.trim());
      if (matches.length > 0) selectCity(matches[0]);
    }
  });

  confirmBtn.addEventListener("click", () => {
    if (!selectedCity) return;
    modal.classList.add("hidden");
    // Store selection globally
    window.__cityData = selectedCity;
    // Start AI quiz after short delay
    setTimeout(() => {
      if (window.__configuratorQuiz && typeof window.__configuratorQuiz.open === "function") {
        window.__configuratorQuiz.open();
      }
    }, 400);
  });

  // Open quiz first (city modal will be shown by quiz after name step)
  setTimeout(() => {
    if (window.__configuratorQuiz && typeof window.__configuratorQuiz.open === "function") {
      window.__configuratorQuiz.open(1);
    }
  }, 800);
})();
