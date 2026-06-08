const TgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const MxIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z"/>
  </svg>
);

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
                  href="tel:+79803211542"
                  className="hover:text-foreground transition-colors"
                >
                  +7 (980) 321-15-42
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
                Белгородская область, с. Репное, ул. Автодорожная, 2
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} МАКСТИЛ. Все права защищены.</span>
          <div className="flex items-center gap-2">
            <a href="https://t.me/mcsteel031" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#229ED9] hover:bg-[#229ED9]/10 transition-colors" title="Telegram">
              <TgIcon />
            </a>
            <a href="https://www.instagram.com/maksteel31/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#E1306C] hover:bg-[#E1306C]/10 transition-colors" title="Instagram">
              <IgIcon />
            </a>
            <a href="https://max.ru/join/n-9OuRJ2NTY_1f77DHMswPbVCe14w8rMicyRr-3-rAk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors" title="Max">
              <MxIcon />
            </a>
          </div>
          <span>Разработка: <a href="https://vvcode.ru" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">VVCode</a></span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
