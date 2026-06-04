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
          className="mt-14 flex flex-col items-center justify-center py-20 rounded-lg border border-border bg-slate-50 text-center"
        >
          <p className="text-xl font-semibold text-foreground">
            На данный момент открытых вакансий нет
          </p>
          <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
            Следите за обновлениями — новые позиции появляются регулярно.
            Вы также можете отправить резюме заранее.
          </p>
        </motion.div>

        <div className="mt-8 p-6 rounded-lg bg-slate-50 border border-border">
          <p className="text-sm text-muted leading-relaxed">
            Хотите работать в нашей команде? Отправьте резюме на{" "}
            <a
              href="mailto:maxsteel31@bk.ru?subject=Резюме"
              className="text-accent-blue font-medium hover:underline"
            >
              maxsteel31@bk.ru
            </a>{" "}
            — мы рассмотрим вашу кандидатуру при появлении новых позиций.
          </p>
        </div>
      </main>
    </div>
  );
}
