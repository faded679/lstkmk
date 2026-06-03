"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 76;

function buildFrameUrls(): string[] {
  const urls: string[] = [];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    urls.push(`/frames/frame_${String(i).padStart(3, "0")}.webp?v=2`);
  }
  return urls;
}

const frameUrls = buildFrameUrls();

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObj = useRef({ frame: 0 });
  const leftLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rightLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (i: number) => {
      const img = imagesRef.current[i];
      if (!img || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, rect.width, rect.height);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = rect.width / rect.height;
      let dw: number, dh: number, dx: number, dy: number;
      if (canvasRatio > imgRatio) {
        dh = rect.height;
        dw = dh * imgRatio;
        dx = (rect.width - dw) / 2;
        dy = 0;
      } else {
        dw = rect.width;
        dh = dw / imgRatio;
        dx = 0;
        dy = (rect.height - dh) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const loadImages = (): Promise<void> =>
      new Promise((resolve) => {
        let loaded = 0;
        const images: HTMLImageElement[] = [];

        // Загружаем первый кадр с приоритетом
        const firstImg = new Image();
        firstImg.fetchPriority = "high";
        firstImg.src = frameUrls[0];
        firstImg.onload = firstImg.onerror = () => {
          images[0] = firstImg;
          drawFrame(0);
          loaded++;
          
          // Остальные кадры грузим с задержкой
          setTimeout(() => {
            frameUrls.slice(1).forEach((url, idx) => {
              const img = new Image();
              img.src = url;
              img.onload = img.onerror = () => {
                loaded++;
                images[idx + 1] = img;
                if (loaded === frameUrls.length) {
                  imagesRef.current = images;
                  resolve();
                }
              };
            });
          }, 100);
        };
      });

    let gsapCtx: gsap.Context;

    loadImages().then(() => {
      drawFrame(0);

      gsapCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(frameObj.current, {
          frame: imagesRef.current.length - 1,
          ease: "none",
          onUpdate: () => {
            const idx = Math.round(frameObj.current.frame);
            drawFrame(idx);
          },
        });

        // Side labels: stagger in from left/right as user scrolls
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
              scrub: 1.2,
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
              scrub: 1.2,
            },
          }
        );
      }, container);
    });

    const onResize = () => {
      drawFrame(Math.round(frameObj.current.frame));
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (gsapCtx) gsapCtx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col bg-white">
        {/* Centred heading */}
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

        {/* Canvas + side labels */}
        <div className="flex-1 relative min-h-0 flex items-stretch bg-white">
          {/* Left labels */}
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

          {/* Canvas */}
          <div className="relative flex-1 min-w-0 bg-white">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full bg-white"
            />
          </div>

          {/* Right labels */}
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
