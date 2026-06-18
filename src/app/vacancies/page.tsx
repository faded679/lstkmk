"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function VacanciesPage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          На главную
        </Link>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Вакансии
          </h1>
          <p className="mt-4 text-base text-muted max-w-lg leading-relaxed">
            Мы растём и ищем профессионалов в команду. Хорошие условия,
            официальное оформление, стабильная загрузка.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Открытые вакансии
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Сварщики",
              "Токарь-фрезеровщик",
              "Сборщики металлоконструкций",
              "Слесарь",
              "Разнорабочий",
              "Инженер-строитель",
              "Бригадир монтажников",
              "Монтажники металлоконструкций",
              "Бетонщики",
              "Инженер-конструктор",
              "Менеджер по продажам",
              "Кладовщик",
              "Оператор станка ЧПУ",
              "Механик по ремонту станков",
              "Водитель манипулятора",
              "Электрик",
            ].map((vacancy) => (
              <div
                key={vacancy}
                className="p-5 rounded-lg border border-border bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-foreground">{vacancy}</h3>
                <p className="mt-2 text-sm text-muted">
                  Все условия — на собеседовании
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 p-6 rounded-lg bg-slate-50 border border-border">
          <p className="text-base font-medium text-foreground mb-2">
            Связаться по вакансиям
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Телефон: {" "}
            <a
              href="tel:+79803211542"
              className="text-accent-blue font-medium hover:underline"
            >
              +7 (980) 321-15-42
            </a>
            {", "}
            <a
              href="tel:+79107372485"
              className="text-accent-blue font-medium hover:underline"
            >
              +7 (910) 737-24-85
            </a>
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Email: {" "}
            <a
              href="mailto:maxsteel31@bk.ru?subject=Резюме"
              className="text-accent-blue font-medium hover:underline"
            >
              maxsteel31@bk.ru
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
