"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const articles = [
  {
    id: 1,
    title: "ЛСТК или горячекатаный прокат: что выбрать для склада?",
    excerpt:
      "Сравниваем два подхода к строительству складских помещений — лёгкие стальные конструкции и традиционный горячекатаный каркас. Плюсы, минусы и когда какой вариант выгоднее.",
    image: "/articles/lstk-profil.jpg",
    date: "28 мая 2026",
    readTime: "7 мин",
    category: "Технологии",
    slug: "lstk-vs-goryachekatanyj-prokat",
  },
  {
    id: 2,
    title: "Как подготовить площадку под быстровозводимое здание",
    excerpt:
      "Пошаговая инструкция: от геологических изысканий до устройства фундамента. Какие ошибки допускают заказчики и как их избежать.",
    image: "/articles/geolog-izyskaniya.jpg",
    date: "15 мая 2026",
    readTime: "5 мин",
    category: "Строительство",
    slug: "podgotovka-ploshchadki",
  },
  {
    id: 3,
    title: "Сэндвич-панели: обзор материалов и толщин",
    excerpt:
      "Разбираем типы наполнителей (минвата, ПИР, пенополистирол), рекомендованные толщины для разных регионов и климатических зон.",
    image: "/articles/sendvich-paneli-sklad.jpg",
    date: "2 мая 2026",
    readTime: "6 мин",
    category: "Материалы",
    slug: "sendvich-paneli-obzor",
  },
  {
    id: 4,
    title: "Вентиляция в производственных зданиях из металлоконструкций",
    excerpt:
      "Как правильно организовать воздухообмен в цехах и складах. Нормы СНиП, типы систем и практические решения.",
    image: "/articles/ventilyaciya-ceh.jpg",
    date: "18 апреля 2026",
    readTime: "8 мин",
    category: "Инженерия",
    slug: "ventilyaciya-v-proizvodstvennyh-zdaniyah",
  },
  {
    id: 5,
    title: "5 причин выбрать ЛСТК для промышленного строительства",
    excerpt:
      "Почему лёгкие стальные тонкостенные конструкции выигрывают у традиционных материалов: скорость, экономия, надёжность и экологичность.",
    image: "/articles/lstk-preimushchestva.jpg",
    date: "5 апреля 2026",
    readTime: "8 мин",
    category: "Технологии",
    slug: "preimushchestva-lstk-stroitelstva",
  },
  {
    id: 6,
    title: "Антикоррозийная защита металлоконструкций: методы и сроки",
    excerpt:
      "Горячее цинкование, порошковая окраска, грунт-эмали — сравниваем стоимость, долговечность и применимость для разных условий эксплуатации.",
    image: "/articles/ocinkovannyj-profil.jpg",
    date: "20 марта 2026",
    readTime: "6 мин",
    category: "Технологии",
    slug: "antikorrozijnaya-zashchita",
  },
];

export default function ArticlesPage() {
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
            Статьи и руководства
          </h1>
          <p className="mt-4 text-base text-muted max-w-lg leading-relaxed">
            Полезные материалы о строительстве из металлоконструкций: технологии,
            материалы, расчёты, практический опыт.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}/`}
              className="block"
            >
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-lg border border-border bg-white hover:border-accent-blue/30 transition-all duration-300 overflow-hidden cursor-pointer h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent-blue transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} weight="bold" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} weight="bold" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
