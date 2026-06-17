"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Notebook,
  Blueprint,
  Factory,
  CraneTower,
  Key,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: Notebook,
    number: "01",
    title: "Заявка и консультация",
    text: "Обсуждаем задачу, выезжаем на площадку, проводим геодезию и геологию.",
  },
  {
    icon: Blueprint,
    number: "02",
    title: "Проектирование",
    text: "Разрабатываем проект КМ и КМД, согласовываем с заказчиком каждый узел.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Производство",
    text: "Изготавливаем каркас на собственном заводе с контролем качества.",
  },
  {
    icon: CraneTower,
    number: "04",
    title: "Монтаж",
    text: "Опытные бригады собирают здание на площадке в согласованные сроки.",
  },
  {
    icon: Key,
    number: "05",
    title: "Сдача объекта",
    text: "Передаём готовое здание с полным пакетом исполнительной документации.",
  },
];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Как мы работаем
          </h2>
          <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
            Прозрачный процесс от первого звонка до ключей от готового здания.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-lg bg-white border-2 border-accent-blue mb-4">
                  <step.icon
                    size={28}
                    weight="duotone"
                    className="text-accent-blue"
                  />
                </div>
                <div className="text-xs font-mono text-accent-orange font-bold mb-1">
                  {step.number}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
