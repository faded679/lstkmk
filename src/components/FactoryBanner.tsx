"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export default function FactoryBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-60, 60]);

  return (
    <section ref={ref} className="relative h-[520px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="/210mnyal2yqegf757m7kgadnbm924h8n.jpeg"
          alt="Завод МАКСТИЛ в Белгороде"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-orange mb-4">
              Собственное производство
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
              Завод в Белгороде —
              <br />
              15 000 м² в месяц
            </h2>
            <p className="mt-4 text-base font-normal text-slate-300 leading-relaxed max-w-[45ch]">
              Современное оборудование, аттестованные сварщики НАКС, входной
              контроль металла. Производим и монтируем сами — без посредников.
            </p>
            <a
              href="#contacts"
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 text-sm font-medium text-white bg-accent-orange rounded-lg hover:bg-accent-orange/90 transition-colors"
            >
              Обсудить проект
              <ArrowRight size={16} weight="bold" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
