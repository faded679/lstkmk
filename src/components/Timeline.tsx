"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const events = [
  {
    year: "2012",
    title: "Основание компании",
    text: "Первый офис в Белгороде. Первые два объекта — склад и ангар для сельхозтехники в Белгородской области.",
  },
  {
    year: "2015",
    title: "Собственное производство",
    text: "Запуск металлообрабатывающего цеха. Контроль качества сварных швов, сертифицированные марки стали.",
  },
  {
    year: "2018",
    title: "100-й объект",
    text: "Сдан сотый объект — производственный комплекс 8 500 м² в Воронежской области. Получена СРО.",
  },
  {
    year: "2020",
    title: "Расширение завода",
    text: "Производственная мощность выросла до 15 000 м² в месяц. Запуск линии горячего цинкования.",
  },
  {
    year: "2023",
    title: "250 объектов",
    text: "250 построенных зданий. Заказчики из 30 регионов. Средний срок строительства — 45 дней.",
  },
  {
    year: "2025",
    title: "Сегодня",
    text: "Полный цикл под ключ. Свыше 50 сотрудников, собственный парк спецтехники.",
  },
];

export default function Timeline() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "end 0.4"],
  });

  const smooth = useSpring(scrollYProgress, { damping: 20, stiffness: 60 });
  const dotY = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[860px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-orange mb-3">
            История компании
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            13 лет в деле
          </h2>
          <p className="mt-4 text-base text-muted max-w-[50ch] mx-auto">
            Путь от первого ангара до федерального подрядчика по металлоконструкциям.
          </p>
        </motion.div>

        {/* grid: left | line | right */}
        <div className="grid grid-cols-[1fr_40px_1fr] gap-x-8">

          {/* Left column */}
          <div className="flex flex-col">
            {events.map((ev, i) =>
              i % 2 === 0 ? (
                <motion.div
                  key={ev.year}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-right py-10 px-2"
                >
                  <span className="text-xs font-mono text-accent-orange tracking-widest block mb-1">
                    {ev.year}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{ev.text}</p>
                </motion.div>
              ) : (
                <div key={ev.year} className="py-10" />
              )
            )}
          </div>

          {/* Center — line + sliding dot */}
          <div ref={trackRef} className="relative">
            {/* grey static line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            {/* sliding dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-10"
              style={{ top: dotY }}
            >
              <div className="w-5 h-5 -mt-2.5 rounded-full bg-accent-blue border-[3px] border-white shadow-md ring-4 ring-accent-blue/20" />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            {events.map((ev, i) =>
              i % 2 !== 0 ? (
                <motion.div
                  key={ev.year}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-left py-10 px-2"
                >
                  <span className="text-xs font-mono text-accent-orange tracking-widest block mb-1">
                    {ev.year}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{ev.text}</p>
                </motion.div>
              ) : (
                <div key={ev.year} className="py-10" />
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
