"use client";

import { motion, useReducedMotion } from "motion/react";

const clients = [
  "ООО \«Белянка\»",
  "ООО \«БелЗНАК\»",
  "Холдинг \«Томмолоко\»",
  "ОАО \«Самаринское\»",
  "ООО \«Бутово-Агро\»",
  "ООО \«Заря-2000\»",
  "ООО \«Луч\»",
  "ООО \«Михайловское\»",
  "ЗАО \«БелЗнак-Прохоровка\»",
  "ООО \«АгроЛогистик\»",
  "ООО \«МеталлПрофиль\»",
  "КФХ \«Власова и партнёры\»",
];

export default function ClientMarquee() {
  const reduce = useReducedMotion();
  const repeated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Нам доверяют
          </h2>
        </motion.div>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {repeated.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 px-8 text-2xl md:text-3xl font-semibold text-slate-300 whitespace-nowrap hover:text-accent-blue transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
