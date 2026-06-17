"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quotes, Star } from "@phosphor-icons/react";

const reviews = [
  {
    text: "Выражаем благодарность ООО «ПромПрофиль» (ТМ Макстил) за качественное и добросовестное выполнение работ по строительству целого ряда крупных объектов сельскохозяйственного назначения, в том числе зданий молочно-товарной фермы на каркасе ЛСТК.",
    name: "Мирошников В.А.",
    title: "Генеральный директор, ООО «Бутово-Агро»",
    logo: "/projects/bytovo.png",
    stars: 5,
  },
  {
    text: "ООО «БелЗнак» рекомендует ООО «ПромПрофиль» как надёжного поставщика оцинкованного профиля для возведения зданий на каркасе ЛСТК, а также стабильного и эффективного партнёра в строительстве.",
    name: "Кабалин Д.П.",
    title: "Генеральный директор, ЗАО «БелЗнак-Прохоровка»",
    logo: "/projects/belznak.png",
    stars: 5,
  },
  {
    text: "Надёжность ООО «ПромПрофиль» как партнёра в строительстве, профессионализм сотрудников, умение решать сложные задачи в короткие сроки позволяет рекомендовать данную компанию всем, кто планирует строительство промышленных, сельскохозяйственных и коммерческих зданий.",
    name: "Голенищев И.А.",
    title: "Генеральный директор, ООО «Луч»",
    logo: "/projects/luch.png",
    stars: 5,
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-orange mb-3">
            Отзывы клиентов
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Говорят заказчики
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-xl border border-border p-7 flex flex-col"
            >
              <Quotes
                size={28}
                weight="fill"
                className="text-accent-orange/30 mb-4"
              />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={14} weight="fill" className="text-accent-orange" />
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                {review.text}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-14 h-14 bg-white rounded-lg border border-border flex items-center justify-center p-1.5 flex-shrink-0">
                  <img
                    src={review.logo}
                    alt={review.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted">{review.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
