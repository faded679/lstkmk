"use client";

import { motion, useReducedMotion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import {
  Lightning,
  ShieldCheck,
  Ruler,
  Clock,
} from "@phosphor-icons/react";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 80 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString("ru-RU") + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { num: 250, suffix: "+", label: "Объектов построено" },
  { num: 14, suffix: "", label: "Лет на рынке" },
  { num: 45, suffix: "", label: "Дней средний срок" },
  { num: 15000, suffix: "", label: "м² в месяц" },
];

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

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center py-8 border-t-2 border-accent-orange"
            >
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-foreground tabular-nums">
                {reduce ? `${stat.num}${stat.suffix}` : (
                  <AnimatedCounter to={stat.num} suffix={stat.suffix} />
                )}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
              Надёжные здания
              <br />
              <span className="text-accent-blue">за разумные сроки</span>
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed max-w-[55ch]">
              МАКСТИЛ специализируется на проектировании, производстве и монтаже
              быстровозводимых зданий из металлоконструкций. Мы строим ангары,
              склады, производственные цеха, торговые комплексы и
              сельскохозяйственные объекты по всей России.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed max-w-[55ch]">
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
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-5 rounded-lg border border-border hover:border-accent-blue/30 transition-colors"
              >
                <adv.icon
                  size={28}
                  weight="duotone"
                  className="text-accent-orange mb-3"
                />
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {adv.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
