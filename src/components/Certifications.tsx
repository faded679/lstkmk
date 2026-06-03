"use client";

import { motion, useReducedMotion } from "motion/react";
import { Certificate, Wrench, Factory, Scales } from "@phosphor-icons/react";

const certs = [
  {
    icon: Certificate,
    title: "СРО",
    subtitle: "Допуск к особо опасным\nи технически сложным объектам",
    number: "СРО-С-016-22102010",
  },
  {
    icon: Wrench,
    title: "НАКС",
    subtitle: "Аттестация сварочного\nпроизводства",
    number: "НАКС РД, МП, ААДП",
  },
  {
    icon: Factory,
    title: "ИСО 9001:2015",
    subtitle: "Система менеджмента\nкачества",
    number: "Сертификат № RU-9001-2021",
  },
  {
    icon: Scales,
    title: "ГОСТ",
    subtitle: "Конструкции соответствуют\nГОСТ 23118-2012",
    number: "Металлоконструкции стальные",
  },
];

export default function Certifications() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 bg-blue-50 overflow-hidden relative">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#1E40AF 1px, transparent 1px), linear-gradient(90deg, #1E40AF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-orange mb-4">
              Документы и допуски
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground">
              Работаем только
              <br />
              <span className="text-accent-blue">в рамках закона</span>
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed max-w-[50ch]">
              Все работы выполняются при наличии разрешительной документации.
              Производство аттестовано по сварке, конструкции соответствуют
              строительным нормам и ГОСТ. Строим объекты I, II и III классов
              ответственности.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["МКД", "Промышленность", "АПК", "Логистика", "Торговля"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border border-accent-blue/30 rounded-full text-accent-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-5 rounded-lg border border-accent-blue/15 hover:border-accent-blue/40 bg-white transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center mb-4">
                  <cert.icon size={22} weight="duotone" className="text-accent-orange" />
                </div>
                <div className="text-lg font-bold text-foreground mb-1">{cert.title}</div>
                <div className="text-sm text-muted leading-snug whitespace-pre-line mb-3">
                  {cert.subtitle}
                </div>
                <div className="text-xs font-mono text-slate-400">{cert.number}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
