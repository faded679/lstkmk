"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, BookOpen, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const knowledgeItems = [
  {
    id: 1,
    title: "Тип местности для строительства",
    slug: "tip-mestnosti",
    description: "Категории местности А, Б, В, Г, Д и их влияние на проектирование ферм.",
    category: "Нагрузки",
  },
  {
    id: 2,
    title: "Снеговой район",
    slug: "snegovoj-rajon",
    description: "I-VIII снеговые районы и расчёт снеговой нагрузки на кровлю.",
    category: "Нагрузки",
  },
  {
    id: 3,
    title: "Сейсмичность",
    slug: "sejsmichnost",
    description: "Сейсмические районы 7, 8, 9 баллов и требования к конструкциям.",
    category: "Нагрузки",
  },
  {
    id: 4,
    title: "Толщина сэндвич-панелей",
    slug: "tolshina-sendvich-panelej",
    description: "Диапазон 80-200 мм — подберём под любой тип здания.",
    category: "Материалы",
  },
  {
    id: 5,
    title: "Высота коровника",
    slug: "vysota-korovnika",
    description: "Стандартная высота в коньке для коровников разной вместимости.",
    category: "Коровники",
  },
  {
    id: 6,
    title: "Площадь на голову КРС",
    slug: "ploshchad-na-golovu-krs",
    description: "Нормы площади для дойных коров по СП и ветеринарным требованиям.",
    category: "Коровники",
  },
  {
    id: 7,
    title: "Шаг колонн в коровнике",
    slug: "shag-kollon",
    description: "Оптимальный шаг несущих колонн для быстровозводимых ферм.",
    category: "Коровники",
  },
  {
    id: 8,
    title: "Фундамент для коровника",
    slug: "fundament-korovnika",
    description: "Свайный, ленточный, плитный фундамент — что выбрать.",
    category: "Фундаменты",
  },
  {
    id: 9,
    title: "Вентиляция в коровнике",
    slug: "ventilyaciya-korovnika",
    description: "Нормы воздухообмена и системы вентиляции по СП 56.",
    category: "Инженерия",
  },
  {
    id: 10,
    title: "Утепление коровника",
    slug: "uteplenie-korovnika",
    description: "Требования к теплозащите и выбор утеплителя для фермы.",
    category: "Материалы",
  },
  {
    id: 11,
    title: "Срок службы здания из ЛСТК",
    slug: "srok-sluzhby-lstk",
    description: "Реальный срок эксплуатации — от 50 лет при правильной антикоррозийной защите профиля.",
    category: "Технологии",
  },
  {
    id: 12,
    title: "Минимальный уклон кровли из сэндвич-панелей",
    slug: "minimalnyj-uklon-krovli",
    description: "Допустимый уклон для сэндвич-панелей и профлиста: нормы СП и практика монтажа.",
    category: "Конструкции",
  },
  {
    id: 13,
    title: "Ветровая нагрузка на здание",
    slug: "vetrovaya-nagruzka",
    description: "Расчёт ветровой нагрузки по СП 20.13330: районы, коэффициенты, влияние формы кровли.",
    category: "Нагрузки",
  },
  {
    id: 14,
    title: "Максимальный пролёт без колонн",
    slug: "prolet-bez-kolonn",
    description: "Свободный пролёт для ЛСТК и ферм: 12, 18, 24, 36 м — от чего зависит конструкция.",
    category: "Конструкции",
  },
  {
    id: 15,
    title: "Огнестойкость металлоконструкций",
    slug: "ognestojkost-metallokonstrukcij",
    description: "Классы огнестойкости R15–R120, методы огнезащиты стали и требования МЧС.",
    category: "Безопасность",
  },
  {
    id: 16,
    title: "Ворота для ангара: типы и размеры",
    slug: "vorota-dlya-angara",
    description: "Откатные, подъёмные, распашные, рулонные — какие ворота под какую технику.",
    category: "Конструкции",
  },
  {
    id: 17,
    title: "Освещение в производственном здании",
    slug: "osveshenie-proizvodstvennogo-zdaniya",
    description: "Нормы освещённости по СП 52.13330: люксы для складов, цехов и мастерских.",
    category: "Инженерия",
  },
  {
    id: 18,
    title: "Водосточная система для ангара",
    slug: "vodostochnaya-sistema-angara",
    description: "Внутренний и наружный водосток: расчёт сечения, материалы, монтаж на сэндвич-кровле.",
    category: "Инженерия",
  },
  {
    id: 19,
    title: "Антикоррозийная обработка профиля",
    slug: "antikorrozijnaya-obrabotka",
    description: "Горячее цинкование vs порошковая окраска — сравнение методов и срок защиты.",
    category: "Технологии",
  },
  {
    id: 20,
    title: "Полы в промышленном здании",
    slug: "poly-v-promyshlennom-zdanii",
    description: "Бетонные, топпинговые, полимерные полы — выбор по нагрузке и назначению здания.",
    category: "Конструкции",
  },
  {
    id: 21,
    title: "Стоимость ангара: цены 2025",
    slug: "stoimost-angara",
    description: "Сколько стоит построить ангар из металлоконструкций под ключ. Цены за м² от 4 500 ₽.",
    category: "Цены",
  },
  {
    id: 22,
    title: "Сроки строительства ангара",
    slug: "sroki-stroitelstva",
    description: "От проектирования до сдачи: реальные сроки строительства ангара из ЛСТК.",
    category: "Сроки",
  },
  {
    id: 23,
    title: "Зернохранилище из металлоконструкций",
    slug: "zernohranilishche",
    description: "Проектирование и строительство зернохранилищ. Особенности вентиляции и герметичности.",
    category: "Сельхозздания",
  },
  {
    id: 24,
    title: "Ангар ЛСТК vs кирпич: сравнение",
    slug: "angar-lstk-vs-kirpich",
    description: "Что выгоднее и быстрее: ангар из ЛСТК или кирпичное здание. Сравнение по цене и срокам.",
    category: "Сравнения",
  },
  {
    id: 25,
    title: "Утепление ангара: способы и цены",
    slug: "uteplenie-angara",
    description: "Как утеплить ангар из металлоконструкций. Сэндвич-панели, минвата, пеноплекс.",
    category: "Материалы",
  },
];

const categories = ["Все", ...Array.from(new Set(knowledgeItems.map(item => item.category)))];

export default function KnowledgePage() {
  const reduce = useReducedMotion();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredItems = useMemo(() => {
    let items = knowledgeItems;

    if (selectedCategory !== "Все") {
      items = items.filter(item => item.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [search, selectedCategory]);

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
            Краткие ответы на частые вопросы о строительстве из ЛСТК.
            Быстрые справки без лишней информации.
          </p>
        </motion.div>

        {/* Поиск */}
        <div className="mt-8 relative max-w-md">
          <MagnifyingGlass
            size={18}
            weight="bold"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по базе знаний..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/10 transition-all"
          />
        </div>

        {/* Категории */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Результаты */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, i) => (
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
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base font-semibold text-foreground leading-snug group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {item.description}
                </p>
                <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  {item.category}
                </span>
              </motion.article>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              Ничего не найдено. Попробуйте изменить запрос или категорию.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
