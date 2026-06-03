export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200 text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src="/photo_2026-06-01_19-06-27 (2).jpg" alt="МАКСТИЛ" className="h-12 w-auto object-contain mb-3 rounded" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-[30ch]">
              Проектирование, производство и монтаж быстровозводимых зданий из
              металлоконструкций.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Услуги</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Проектирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Производство каркасов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Монтаж зданий
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Строительство под ключ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Объекты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Склады
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Производственные цеха
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Ангары
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Торговые центры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="tel:+78001009151"
                  className="hover:text-foreground transition-colors"
                >
                  +7 (800) 100-91-51
                </a>
              </li>
              <li>
                <a
                  href="mailto:maxsteel31@bk.ru"
                  className="hover:text-foreground transition-colors"
                >
                  maxsteel31@bk.ru
                </a>
              </li>
              <li className="text-slate-500">
                Белгородский р-н, с. Репное, ул. Автодорожная, 2
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} МАКСТИЛ. Все права защищены.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
