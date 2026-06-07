"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const articles = [
  {
    id: 1,
    title: "Конструкции из сэндвич-панелей: виды, применение и монтаж",
    excerpt:
      "Разбираем конструкции из сэндвич-панелей: стены, кровля, перегородки. Технология монтажа, типы замков, толщины и сферы применения. Полное руководство 2025.",
    image: "/articles/sandwich.jpg",
    date: "7 июня 2026",
    readTime: "10 мин",
    category: "Материалы",
    slug: "konstrukcii-iz-sendvich-panelej",
  },
  {
    id: 2,
    title: "Большепролётные здания: проекты и технологии строительства",
    excerpt:
      "Проекты большепролётных зданий без колонн: ангары, склады, цеха. Технологии ЛСТК и ферм, расчёт пролётов до 60 м, цены и сроки строительства.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
    date: "7 июня 2026",
    readTime: "11 мин",
    category: "Технологии",
    slug: "bolsheproletnye-zdaniya-proekty",
  },
  {
    id: 3,
    title: "Технология ЛСТК в строительстве: преимущества и применение",
    excerpt:
      "Технология ЛСТК (лёгкие стальные тонкостенные конструкции): принципы, профили, преимущества перед традиционным строительством. Области применения ЛСТК в 2025 году.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "7 июня 2026",
    readTime: "9 мин",
    category: "Технологии",
    slug: "tehnologiya-lstk",
  },
  {
    id: 4,
    title: "ЛСТК или горячекатаный прокат: что выбрать для склада?",
    excerpt:
      "Сравниваем два подхода к строительству складских помещений — лёгкие стальные конструкции и традиционный горячекатаный каркас. Плюсы, минусы и когда какой вариант выгоднее.",
    image: "/articles/lstk-vs-goryachekatanyj-prokat.jpg",
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
    image: "/articles/stroitelnaya-ploshadka.jpg",
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
    image: "/articles/sandwich.jpg",
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
    image: "/articles/ventilators.jpg",
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
    image: "/articles/5-variants-lstk.jpg",
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
    image: "/articles/anticorossion-def.jpg",
    date: "20 марта 2026",
    readTime: "6 мин",
    category: "Технологии",
    slug: "antikorrozijnaya-zashchita",
  },
  {
    id: 7,
    title: "Что такое ЛСТК: полный разбор технологии",
    excerpt:
      "ЛСТК — лёгкие стальные тонкостенные конструкции. Простым языком о том, из чего состоит технология, где применяется и чем отличается от кирпича, бетона и дерева.",
    image: "/articles/chto-takoe-lstk.jpg",
    date: "4 июня 2026",
    readTime: "7 мин",
    category: "Технологии",
    slug: "chto-takoe-lstk",
  },
  {
    id: 8,
    title: "Фундамент под быстровозводимое здание: как выбрать и не ошибиться",
    excerpt:
      "Свайный, ленточный, плита — разбираем типы фундаментов под металлокаркас, критерии выбора по грунту и типичные ошибки, которые стоят дороже всего.",
    image: "/articles/fundament-pod-bystrovozvodimoe-zdanie.jpg",
    date: "4 июня 2026",
    readTime: "8 мин",
    category: "Строительство",
    slug: "fundament-pod-bystrovozvodimoe-zdanie",
  },
  {
    id: 9,
    title: "Сроки строительства ангара: реальные цифры по этапам",
    excerpt:
      "Сколько времени занимает каждый этап — проектирование, производство, фундамент, монтаж. Что замедляет стройку и как сократить общий срок без потери качества.",
    image: "/articles/sroki-stroitelstva-angara.jpg",
    date: "4 июня 2026",
    readTime: "6 мин",
    category: "Строительство",
    slug: "sroki-stroitelstva-angara",
  },
  {
    id: 10,
    title: "Как выбрать подрядчика для строительства из металлоконструкций",
    excerpt:
      "Чеклист для заказчика: как проверить юрлицо, оценить опыт, что спросить у менеджера и какие пункты договора нельзя игнорировать.",
    image: "/articles/kak-vybrat-podryadchika-metallokonstrukcii.jpg",
    date: "4 июня 2026",
    readTime: "7 мин",
    category: "Советы заказчику",
    slug: "kak-vybrat-podryadchika-metallokonstrukcii",
  },
  {
    id: 11,
    title: "Металлоконструкции в Белгороде: от заказа до сдачи объекта",
    excerpt:
      "Полный разбор процесса строительства изнутри: этапы, реальные сроки, типичные проблемы и лайфхаки от практикующих инженеров с 14-летним опытом работы в регионе.",
    image: "/articles/metallokonstrukcii-belgorod.jpg",
    date: "5 июня 2026",
    readTime: "12 мин",
    category: "Строительство",
    slug: "metallokonstrukcii-belgorod",
  },
  {
    id: 12,
    title: "Ангар для сельского хозяйства: виды, размеры, требования",
    excerpt:
      "Зернохранилища, коровники, птичники, навесы — какие конструктивные решения применяются в АПК и чем сельхозангар отличается от промышленного.",
    image: "/articles/angar-dlya-selskogo-hozyajstva.jpg",
    date: "5 июня 2026",
    readTime: "7 мин",
    category: "Строительство",
    slug: "angar-dlya-selskogo-hozyajstva",
  },
  {
    id: 12,
    title: "Утепление быстровозводимого здания: нормы и практика",
    excerpt:
      "Какой слой утеплителя нужен для отапливаемого склада, цеха или СТО. Расчёт по СП 50, типичные ошибки монтажа и как они влияют на теплопотери.",
    image: "/articles/uteplenie-bystrovozvodimogo-zdaniya.jpg",
    date: "5 июня 2026",
    readTime: "8 мин",
    category: "Материалы",
    slug: "uteplenie-bystrovozvodimogo-zdaniya",
  },
  {
    id: 13,
    title: "Пожарная безопасность металлических зданий: требования и решения",
    excerpt:
      "Огнезащитная обработка металлоконструкций, классы огнестойкости, требования МЧС — что нужно знать ещё на этапе проектирования.",
    image: "/articles/pozharnaya-bezopasnost-metallicheskih-zdanij.jpg",
    date: "5 июня 2026",
    readTime: "6 мин",
    category: "Безопасность",
    slug: "pozharnaya-bezopasnost-metallicheskih-zdanij",
  },
  {
    id: 14,
    title: "Монтаж металлоконструкций: 10 типичных ошибок и способы их избежать",
    excerpt:
      "Технология монтажа металлоконструкций: типичные ошибки при монтаже колонн и ферм, контроль качества, приёмка металлоконструкций. Практические советы по монтажу металлического каркаса и ангаров.",
    image: "/articles/montazh-metallokonstrukcij-hero.jpg",
    date: "5 июня 2026",
    readTime: "12 мин",
    category: "Строительство",
    slug: "montazh-metallokonstrukcij-oshibki",
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
