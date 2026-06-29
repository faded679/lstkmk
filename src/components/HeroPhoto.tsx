export default function HeroPhoto() {
  return (
    <div className="relative flex-1 min-w-0 bg-white flex items-end justify-center w-full">
      <div className="relative w-full max-w-5xl mx-auto" style={{ height: "50vh" }}>
        <picture>
          <source srcSet="/newherophoto.webp" type="image/webp" />
          <img
            src="/newherophoto.png"
            alt="Готовый ангар из металлоконструкций"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="absolute bottom-0 left-0 right-0 mx-auto w-full object-contain object-bottom"
            style={{ maxHeight: "50vh", objectPosition: "center 30%" }}
          />
        </picture>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "22%", right: "calc(50% + 460px)" }}>Проектирование</span>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "55%", right: "calc(50% + 460px)" }}>Производство</span>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight whitespace-nowrap" style={{ top: "88%", right: "calc(50% + 460px)" }}>Монтаж</span>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "22%", left: "calc(50% + 460px)" }}>Под ключ</span>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "55%", left: "calc(50% + 460px)" }}>45 дней</span>
        <span className="hidden lg:block absolute text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight whitespace-nowrap" style={{ top: "88%", left: "calc(50% + 460px)" }}>14 лет опыта</span>
      </div>
    </div>
  );
}
