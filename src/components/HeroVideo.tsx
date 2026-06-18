export default function HeroVideo() {
  return (
    <section className="relative bg-white">
      <div className="min-h-screen w-full flex flex-col bg-white">
        <div className="pt-24 pb-4 px-6 lg:px-10 text-center bg-white">
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
        <div className="flex-1 relative min-h-0 flex items-stretch bg-white">
          <div className="hidden lg:flex flex-col justify-around items-end w-36 xl:w-44 pr-4 py-4 select-none bg-white">
            {["Проектирование", "Производство", "Монтаж"].map((label) => <span key={label} className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight">{label}</span>)}
          </div>
<<<<<<< HEAD
          <div className="relative flex-1 min-w-0 bg-white flex items-center justify-center">
            <img src="/frames2/frame_0152.webp" alt="Готовый ангар" className="max-w-full max-h-full object-contain" />
=======

          <div className="relative flex-1 min-w-0 bg-white flex items-center justify-center">
            <img
              src="/frames2/frame_0152.webp"
              alt="Готовый ангар из металлоконструкций"
              className="max-w-full max-h-full object-contain"
            />
>>>>>>> cdb6b87 (fix: add Navigation to all knowledge articles)
          </div>
          <div className="hidden lg:flex flex-col justify-around items-start w-36 xl:w-44 pl-4 py-4 select-none bg-white">
            {["Под ключ", "45 дней", "14 лет опыта"].map((label) => <span key={label} className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight">{label}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
