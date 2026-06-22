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
            <div className="relative w-full max-w-5xl mx-auto" style={{ height: "80vh" }}>
              {/* Ангар — занимает всю высоту контейнера, прибит к низу */}
              <img
                src="/newherophoto.png"
                alt="Готовый ангар из металлоконструкций"
                className="absolute bottom-0 left-0 right-0 mx-auto w-full object-contain object-bottom"
                style={{ maxHeight: "80vh" }}
              />
              {/* Боковой текст слева — абсолютно напротив крыши / середины / фундамента */}
              <div className="hidden lg:absolute lg:block left-0 top-0 bottom-0 w-32 xl:w-40 select-none" style={{ display: "none" }} />
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "22%", right: "calc(50% + 460px)" }}>Проектирование</span>
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "55%", right: "calc(50% + 460px)" }}>Производство</span>
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "88%", right: "calc(50% + 460px)" }}>Монтаж</span>
              {/* Боковой текст справа */}
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "22%", left: "calc(50% + 460px)" }}>Под ключ</span>
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "55%", left: "calc(50% + 460px)" }}>45 дней</span>
              <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "88%", left: "calc(50% + 460px)" }}>14 лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
