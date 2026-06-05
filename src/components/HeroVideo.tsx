"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const leftLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rightLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();
    video.currentTime = 0;

    let gsapCtx: gsap.Context;

    gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (video && video.duration) {
              video.currentTime = self.progress * video.duration;
            }
          },
        },
      });

      const leftEls = leftLabelsRef.current.filter(Boolean);
      const rightEls = rightLabelsRef.current.filter(Boolean);

      gsap.fromTo(leftEls,
        { opacity: 0, x: -18 },
        {
          opacity: 1, x: 0,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top+=5% top",
            end: "top+=30% top",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(rightEls,
        { opacity: 0, x: 18 },
        {
          opacity: 1, x: 0,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top+=5% top",
            end: "top+=30% top",
            scrub: 0.6,
          },
        }
      );
    }, container);

    return () => {
      if (gsapCtx) gsapCtx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col bg-white">
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
            <a
              href="#calculator"
              className="inline-flex h-12 items-center justify-center px-7 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center px-7 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
            >
              Наши проекты
            </a>
          </div>
        </div>

        <div className="flex-1 relative min-h-0 flex items-stretch bg-white">
          <div className="hidden lg:flex flex-col justify-around items-end w-36 xl:w-44 pr-4 py-4 select-none bg-white">
            {["Проектирование", "Производство", "Монтаж"].map((label, i) => (
              <span
                key={label}
                ref={(el) => { leftLabelsRef.current[i] = el; }}
                className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-right leading-tight opacity-0"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="relative flex-1 min-w-0 bg-white">
            <video
              ref={videoRef}
              src="/hero-animation.mp4"
              className="absolute inset-0 w-full h-full object-contain bg-white"
              playsInline
              muted
              preload="auto"
            />
          </div>

          <div className="hidden lg:flex flex-col justify-around items-start w-36 xl:w-44 pl-4 py-4 select-none bg-white">
            {["Под ключ", "45 дней", "14 лет опыта"].map((label, i) => (
              <span
                key={label}
                ref={(el) => { rightLabelsRef.current[i] = el; }}
                className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 text-left leading-tight opacity-0"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
