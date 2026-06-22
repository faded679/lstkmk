export default function HeroVideo() {
  return (
    <section className="relative bg-white">
      <div className="min-h-screen w-full flex flex-col bg-white">
        <div className="pt-24 pb-2 px-6 lg:px-10 text-center bg-white">
          <p className="text-sm font-mono uppercase tracking-[0.18em] text-accent-orange mb-3">
            От фундамента до готового здания
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-foreground">
            Строим быстрее,<br className="hidden sm:block" /> чем вы думаете
          </h1>
          <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">
            Полный цикл строительства из металлоконструкций. Проект, производство, монтаж.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#calculator" className="inline-flex h-12 items-center justify-center px-7 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
            <a href="#projects" className="inline-flex h-12 items-center justify-center px-7 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Наши проекты</a>
          </div>
        </div>
        <div className="flex-1 relative min-h-0 flex items-end bg-white pb-0">
          <div className="relative flex-1 min-w-0 bg-white flex items-end justify-center">
            <div className="relative w-full max-w-4xl mx-auto flex items-end justify-center">
              {/* Боковой текст слева — выровнен по высоте ангара */}
              <div className="hidden lg:flex flex-col justify-around items-end w-32 xl:w-40 pr-4 pb-8 select-none shrink-0 self-center">
                {["Проектирование", "Производство", "Монтаж"].map((label) => <span key={label} className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight">{label}</span>)}
              </div>
              <img
                src="/newherophoto.png"
                alt="Готовый ангар из металлоконструкций"
                className="w-full object-contain object-bottom"
                style={{ maxHeight: "52vh", marginBottom: "-2px" }}
              />
              {/* Боковой текст справа */}
              <div className="hidden lg:flex flex-col justify-around items-start w-32 xl:w-40 pl-4 pb-8 select-none shrink-0 self-center">
                {["Под ключ", "45 дней", "14 лет опыта"].map((label) => <span key={label} className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight">{label}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
