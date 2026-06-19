"use client";

import { motion, useReducedMotion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

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

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
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
      </div>
    </section>
  );
}
