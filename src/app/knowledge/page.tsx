"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, BookOpen } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const knowledgeItems = [
  {
    id: 1,
    title: "Тип местности для строительства",
    slug: "tip-mestnosti",
    description: "Категории местности А, Б, В, Г, Д и их влияние на проектирование ферм.",
  },
  {
    id: 2,
    title: "Снеговой район",
    slug: "snegovoj-rajon",
    description: "I-VIII снеговые районы и расчёт снеговой нагрузки на кровлю.",
  },
  {
    id: 3,
    title: "Сейсмичность",
    slug: "sejsmichnost",
    description: "Сейсмические районы 7, 8, 9 баллов и требования к конструкциям.",
  },
  {
    id: 4,
    title: "Толщина сэндвич-панелей",
    slug: "tolshina-sendvich-panelej",
    description: "Диапазон 80-200 мм — подберём под любой тип здания.",
  },
  {
    id: 5,
    title: "Высота коровника",
    slug: "vysota-korovnika",
    description: "Стандартная высота в коньке для коровников разной вместимости.",
  },
  {
    id: 6,
    title: "Площадь на голову КРС",
    slug: "ploshchad-na-golovu-krs",
    description: "Нормы площади для дойных коров по СП и ветеринарным требованиям.",
  },
  {
    id: 7,
    title: "Шаг колонн в коровнике",
    slug: "shag-kollon",
    description: "Оптимальный шаг несущих колонн для быстровозводимых ферм.",
  },
  {
    id: 8,
    title: "Фундамент для коровника",
    slug: "fundament-korovnika",
    description: "Свайный, ленточный, плитный фундамент — что выбрать.",
  },
  {
    id: 9,
    title: "Вентиляция в коровнике",
    slug: "ventilyaciya-korovnika",
    description: "Нормы воздухообмена и системы вентиляции по СП 56.",
  },
  {
    id: 10,
    title: "Утепление коровника",
    slug: "uteplenie-korovnika",
    description: "Требования к теплозащите и выбор утеплителя для фермы.",
  },
];

export default function KnowledgePage() {
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
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} weight="bold" className="text-accent-blue" />
            <span className="text-sm font-medium text-accent-blue uppercase tracking-wider">
              Справочник
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            База знаний
          </h1>
          <p className="text-base text-muted max-w-lg leading-relaxed">
            Краткие ответы на частые вопросы о строительстве сельхоззданий из ЛСТК. 
            Быстрые справки без лишней информации.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {knowledgeItems.map((item, i) => (
            <Link
              key={item.id}
              href={`/knowledge/${item.slug}/`}
              className="block"
            >
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-5 rounded-lg border border-border bg-white hover:border-accent-blue/30 hover:shadow-sm transition-all duration-300 h-full"
              >
                <h2 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent-blue transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
