"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Lightning,
  ShieldCheck,
  Ruler,
  Clock,
  Notebook,
  Blueprint,
  Factory,
  CraneTower,
  Key,
  Certificate,
  Wrench,
  Scales,
} from "@phosphor-icons/react";

const advantages = [
  {
    icon: Lightning,
    title: "Скорость строительства",
    text: "Возведение здания от 30 дней. Заводская готовность элементов до 95% сокращает сроки монтажа в 3 раза.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    text: "Собственное производство с контролем на каждом этапе. Сертифицированные материалы и сварочные швы.",
  },
  {
    icon: Ruler,
    title: "Любые размеры",
    text: "Проектируем здания от 100 до 50 000 м². Пролёты до 60 метров без промежуточных опор.",
  },
  {
    icon: Clock,
    title: "Под ключ",
    text: "Полный цикл: проект, фундамент, каркас, ограждающие конструкции, инженерные сети, сдача объекта.",
  },
];

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

const certs = [
  {
    icon: Certificate,
    title: "СРО",
    subtitle: "Допуск к особо опасным и технически сложным объектам",
    number: "СРО-С-016-22102010",
  },
  {
    icon: Wrench,
    title: "НАКС",
    subtitle: "Аттестация сварочного производства",
    number: "НАКС РД, МП, ААДП",
  },
  {
    icon: Factory,
    title: "ИСО 9001:2015",
    subtitle: "Система менеджмента качества",
    number: "Сертификат № RU-9001-2021",
  },
  {
    icon: Scales,
    title: "ГОСТ",
    subtitle: "Конструкции соответствуют ГОСТ 23118-2012",
    number: "Металлоконструкции стальные",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/zavod.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-white">
              Надёжные здания
              <br />
              <span className="text-white">за разумные сроки</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <div className="text-center">
                <div className="text-xl font-bold text-accent-orange">250+</div>
                <div className="text-xs text-white/80">объектов</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-orange">14 лет</div>
                <div className="text-xs text-white/80">на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-orange">45 дней</div>
                <div className="text-xs text-white/80">средний срок</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-orange">15 000 м²</div>
                <div className="text-xs text-white/80">в месяц</div>
              </div>
            </div>
            <p className="mt-5 text-base text-white/80 leading-relaxed max-w-[55ch]">
              МАКСТИЛ специализируется на проектировании, производстве и монтаже
              быстровозводимых зданий из металлоконструкций. Мы строим ангары,
              склады, производственные цеха, торговые комплексы и
              сельскохозяйственные объекты по всей России.
            </p>
            <p className="mt-4 text-base text-white/80 leading-relaxed max-w-[55ch]">
              Собственный завод мощностью 15 000 м² металлоконструкций в месяц
              позволяет контролировать качество и сроки на каждом этапе
              производства.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <adv.icon
                  size={28}
                  weight="duotone"
                  className="text-accent-orange mb-3"
                />
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {adv.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Как мы работаем */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-8">
            Как мы работаем
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                className="p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <step.icon size={22} weight="duotone" className="text-white" />
                  </div>
                  <div className="text-xs font-mono text-accent-orange font-bold">{step.number}</div>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{step.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Документы и допуски */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-8">
            Работаем только <span className="text-accent-blue">в рамках закона</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  <cert.icon size={22} weight="duotone" className="text-white" />
                </div>
                <div className="text-lg font-bold text-white mb-1">{cert.title}</div>
                <div className="text-sm text-white/80 leading-snug mb-2">{cert.subtitle}</div>
                <div className="text-xs font-mono text-white/60">{cert.number}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
