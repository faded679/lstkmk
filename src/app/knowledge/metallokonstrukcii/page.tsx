import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Металлоконструкции для строительства: виды, цены, применение 2025 | МАКСТИЛ",
  description: "Всё о металлоконструкциях: виды стальных конструкций, цены на металлокаркасы, преимущества ЛСТК. Строительство зданий из металлоконструкций под ключ в Белгороде и Черноземье. Производство и монтаж.",
  keywords: [
    "металлоконструкции",
    "строительство из металлоконструкций",
    "металлоконструкции цена",
    "стальные конструкции",
    "металлокаркас",
    "ЛСТК металлоконструкции",
    "купить металлоконструкции",
    "производство металлоконструкций",
    "монтаж металлоконструкций",
    "здания из металлоконструкций",
    "металлоконструкции Белгород",
    "металлоконструкции под ключ",
  ],
  openGraph: {
    title: "Металлоконструкции для строительства: виды, цены, применение",
    description: "Полный гид по строительству зданий из металлоконструкций. Виды, цены, сроки, преимущества ЛСТК перед классическим металлокаркасом.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Металлоконструкции для строительства: виды, цены, применение 2025",
    "description": "Полное руководство по металлоконструкциям: виды, цены, технологии производства и монтажа. Сравнение ЛСТК и классического металлокаркаса.",
    "author": {
      "@type": "Organization",
      "name": "МАКСТИЛ",
      "url": "https://lstkmk.ru",
    },
    "publisher": {
      "@type": "Organization",
      "name": "МАКСТИЛ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lstkmk.ru/logo-makstil-new.png",
      },
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-06-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lstkmk.ru/knowledge/metallokonstrukcii/",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое металлоконструкции в строительстве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Металлоконструкции — это несущие элементы зданий и сооружений из стали: колонны, балки, фермы, прогоны, связи. Они образуют жёсткий каркас, на который навешивается кровля, стеновые панели и перекрытия.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько стоят металлоконструкции за 1 кг в 2025 году?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Цена металлоконструкций в 2025 году составляет от 90 до 180 руб./кг в зависимости от типа стали, сложности изготовления и антикоррозийного покрытия. ЛСТК-профиль — от 110 руб./кг с доставкой.",
        },
      },
      {
        "@type": "Question",
        "name": "Что лучше: ЛСТК или классический металлокаркас?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для зданий пролётом до 24 м ЛСТК выгоднее на 30–40% за счёт меньшего веса и упрощённого фундамента. При пролётах свыше 30 м и больших нагрузках эффективнее тяжёлый металлокаркас из двутавра.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько служат металлоконструкции?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Оцинкованный ЛСТК-профиль с полимерным покрытием служит 50 лет и более без коррозии. Тяжёлый металлокаркас при правильной антикоррозийной обработке — 30–50 лет.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Металлоконструкции для строительства: виды, цены и применение в 2025 году
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Металлоконструкции</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">ЛСТК</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Строительство</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Металлоконструкции — основа современного промышленного и коммерческого строительства. Ангары, склады, производственные цеха, торговые центры, спортивные объекты — всё это здания на стальном каркасе. В этой статье разберём: какие виды металлоконструкций существуют, как выбрать технологию, сколько стоит строительство и почему ЛСТК выигрывает у классики в большинстве задач.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что такое металлоконструкции</h2>
          <p className="mb-4">
            <strong>Металлоконструкции</strong> — несущие стальные элементы зданий и сооружений: колонны, балки, фермы, прогоны, связи и рамы. Они образуют жёсткий силовой скелет, воспринимают снеговые, ветровые и эксплуатационные нагрузки, передавая их на фундамент.
          </p>
          <p className="mb-4">
            В России строительство из металлоконструкций регулируется ГОСТ 23118-2012 и СП 16.13330.2017. Производство ведётся на специализированных заводах с применением автоматизированной сварки и дробеструйной обработки.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Виды металлоконструкций для строительства</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Лёгкие стальные тонкостенные конструкции (ЛСТК)</h3>
          <p className="mb-4">
            ЛСТК — это холодногнутый оцинкованный профиль толщиной 0,7–3 мм. Технология пришла из Канады и США, где применяется 40+ лет. Ключевые преимущества:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-muted">
            <li>Вес конструкции в 3–4 раза меньше классического металлокаркаса</li>
            <li>Упрощённый фундамент — ленточный или свайный вместо плиты</li>
            <li>Заводская точность изготовления ±1 мм, монтаж без сварки</li>
            <li>Оцинковка 275 г/м² — срок службы 50+ лет без коррозии</li>
            <li>Монтаж ангара 500 м² — от 14 рабочих дней</li>
          </ul>
          <p className="mb-4">
            ЛСТК оптимальны для зданий <strong>пролётом до 24 метров</strong>: ангары, склады, сельскохозяйственные объекты, автосервисы, торговые павильоны.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Тяжёлые металлоконструкции (ТМК)</h3>
          <p className="mb-4">
            Классический металлокаркас из двутавровых балок, сварных колонн и стропильных ферм. Применяется при пролётах свыше 30 м и повышенных нагрузках: мостовые краны грузоподъёмностью от 20 т, многоэтажные здания, стадионы.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Пространственные фермы и решётчатые конструкции</h3>
          <p className="mb-4">
            Применяются для больших пролётов без промежуточных опор — спортивные залы, выставочные павильоны, покрытия рынков. Позволяют перекрывать пролёты 60–100 м и более.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Модульные металлоконструкции</h3>
          <p className="mb-4">
            Быстровозводимые здания из унифицированных блок-модулей. Используются как временные и мобильные объекты: бытовки, КПП, временные офисы на стройке.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Тип</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Пролёт</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Нагрузка</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Срок монтажа</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-2 font-medium">ЛСТК</td>
                  <td className="border border-slate-300 px-4 py-2">до 24 м</td>
                  <td className="border border-slate-300 px-4 py-2">до 10 т/м²</td>
                  <td className="border border-slate-300 px-4 py-2">14–30 дней</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-medium">ТМК (металлокаркас)</td>
                  <td className="border border-slate-300 px-4 py-2">30–60 м</td>
                  <td className="border border-slate-300 px-4 py-2">до 50 т/м²</td>
                  <td className="border border-slate-300 px-4 py-2">45–90 дней</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2 font-medium">Пространственные фермы</td>
                  <td className="border border-slate-300 px-4 py-2">60–120 м</td>
                  <td className="border border-slate-300 px-4 py-2">индивидуально</td>
                  <td className="border border-slate-300 px-4 py-2">90+ дней</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Цены на металлоконструкции в 2025 году</h2>
          <p className="mb-4">
            Стоимость металлоконструкций зависит от марки стали, сложности узлов, антикоррозийного покрытия и объёма заказа. Актуальные ориентиры:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Позиция</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">ЛСТК-профиль (оцинкованный)</td>
                  <td className="border border-slate-300 px-4 py-2">от 110 руб./кг</td>
                  <td className="border border-slate-300 px-4 py-2">с доставкой по ЦФО</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Каркас ангара ЛСТК под ключ</td>
                  <td className="border border-slate-300 px-4 py-2">от 4 500 руб./м²</td>
                  <td className="border border-slate-300 px-4 py-2">холодный, без фундамента</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Утеплённый склад ЛСТК</td>
                  <td className="border border-slate-300 px-4 py-2">от 9 000 руб./м²</td>
                  <td className="border border-slate-300 px-4 py-2">сэндвич-панели 100 мм</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Производственный цех ЛСТК</td>
                  <td className="border border-slate-300 px-4 py-2">от 11 000 руб./м²</td>
                  <td className="border border-slate-300 px-4 py-2">с кран-балкой до 5 т</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Классический металлокаркас</td>
                  <td className="border border-slate-300 px-4 py-2">от 18 000 руб./м²</td>
                  <td className="border border-slate-300 px-4 py-2">при пролёте 30+ м</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted mb-6">
            * Цены актуальны на 2025 год. Точная стоимость рассчитывается индивидуально по проекту с учётом региона, нагрузок и комплектации.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Применение металлоконструкций: где и что строят</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Промышленные и складские здания</h3>
          <p className="mb-4">
            Самое массовое применение металлоконструкций — <strong>складские комплексы и производственные цеха</strong>. Технология ЛСТК позволяет возвести склад площадью 1 000 м² за 45 дней. Большой пролёт без внутренних колонн даёт максимальную свободу при организации хранения и производства.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Сельскохозяйственные объекты</h3>
          <p className="mb-4">
            Коровники, птицефабрики, зернохранилища, ангары для сельхозтехники — металлоконструкции идеально подходят для агробизнеса. Оцинкованный профиль не боится влаги и агрессивной среды животноводческих помещений. Коровник на 200 голов обходится в 2–3 раза дешевле кирпичного аналога.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Автосервисы и СТО</h3>
          <p className="mb-4">
            Металлокаркас позволяет организовать открытое пространство без колонн — критично для заезда крупногабаритного транспорта. Ворота нестандартных размеров, приямки, антресольные этажи для офисов — всё реализуется в рамках проекта.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Торговые павильоны и коммерческая недвижимость</h3>
          <p className="mb-4">
            Строительство торгового павильона из металлоконструкций занимает 30–60 дней от фундамента до отделки. Объект окупается в 2–4 раза быстрее капитального строения за счёт меньших инвестиций на старте.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Производство металлоконструкций: как это работает</h2>
          <p className="mb-4">
            Полный цикл производства металлоконструкций включает несколько этапов:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Проектирование (КМ и КМД)</strong> — разработка конструктивных чертежей с расчётом нагрузок. Занимает 10–15 дней.</li>
            <li><strong>Изготовление профиля</strong> — холодная прокатка на профилегибочном станке с точностью ±1 мм. МАКСТИЛ производит профиль на собственном оборудовании в Белгородской области.</li>
            <li><strong>Антикоррозийная обработка</strong> — горячее цинкование или нанесение полимерного покрытия. Толщина цинкового слоя — 275 г/м² по ГОСТ.</li>
            <li><strong>Маркировка и комплектация</strong> — каждый элемент маркируется согласно монтажной схеме, что исключает ошибки на объекте.</li>
            <li><strong>Монтаж</strong> — сборка каркаса без сварки, на болтовых соединениях. Бригада из 4 человек собирает 500 м² за 14 дней.</li>
          </ol>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ЛСТК vs классический металлокаркас: детальное сравнение</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Критерий</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">ЛСТК</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Металлокаркас</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Вес 1 м² каркаса</td>
                  <td className="border border-slate-300 px-4 py-2">15–25 кг</td>
                  <td className="border border-slate-300 px-4 py-2">50–80 кг</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Фундамент</td>
                  <td className="border border-slate-300 px-4 py-2">Ленточный / свайный</td>
                  <td className="border border-slate-300 px-4 py-2">Плита / ростверк</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Сварка на объекте</td>
                  <td className="border border-slate-300 px-4 py-2">Не нужна</td>
                  <td className="border border-slate-300 px-4 py-2">Обязательна</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Антикоррозийная защита</td>
                  <td className="border border-slate-300 px-4 py-2">Заводская оцинковка</td>
                  <td className="border border-slate-300 px-4 py-2">Грунтовка + покраска</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Срок монтажа (500 м²)</td>
                  <td className="border border-slate-300 px-4 py-2">14–21 день</td>
                  <td className="border border-slate-300 px-4 py-2">30–60 дней</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Стоимость (руб./м²)</td>
                  <td className="border border-slate-300 px-4 py-2">от 4 500</td>
                  <td className="border border-slate-300 px-4 py-2">от 18 000</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Максимальный пролёт</td>
                  <td className="border border-slate-300 px-4 py-2">до 24 м</td>
                  <td className="border border-slate-300 px-4 py-2">60+ м</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Срок службы</td>
                  <td className="border border-slate-300 px-4 py-2">50+ лет</td>
                  <td className="border border-slate-300 px-4 py-2">30–50 лет</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Нормативная база и разрешения</h2>
          <p className="mb-4">
            Строительство зданий из металлоконструкций площадью до 1 500 м² в большинстве случаев не требует экспертизы проекта. Для объектов промышленного назначения потребуется:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-muted">
            <li>ГПЗУ (градостроительный план земельного участка)</li>
            <li>Уведомление о начале строительства (для объектов ИЖС и нежилых до 1 500 м²)</li>
            <li>Разрешение на строительство (для объектов капитального строительства)</li>
          </ul>
          <p className="mb-4">
            МАКСТИЛ разрабатывает всю проектную документацию в соответствии с требованиями СП 16.13330.2017 и ГОСТ 23118-2012, что обеспечивает беспроблемное прохождение экспертизы.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Как выбрать производителя металлоконструкций</h2>
          <p className="mb-4">
            При выборе компании для строительства здания из металлоконструкций обращайте внимание на:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Собственное производство</strong> — исключает посредников и ускоряет сроки</li>
            <li><strong>Наличие инженерного отдела</strong> — КМ и КМД должны разрабатываться с профессиональными расчётами</li>
            <li><strong>Портфолио реализованных объектов</strong> — запросите реальные адреса, съездите на объект</li>
            <li><strong>Гарантия</strong> — серьёзный производитель даёт 5 лет на конструкции и 3 года на монтаж</li>
            <li><strong>Договор с фиксированной ценой</strong> — защита от удорожания в процессе строительства</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Часто задаваемые вопросы</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Что такое металлоконструкции в строительстве?</h3>
          <p className="mb-4">
            Металлоконструкции — это несущие элементы зданий из стали: колонны, балки, фермы, прогоны. Они образуют жёсткий каркас, воспринимающий все нагрузки и передающий их на фундамент. Бывают лёгкими (ЛСТК) и тяжёлыми (двутавр, сварные конструкции).
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Сколько стоят металлоконструкции за 1 кг в 2025 году?</h3>
          <p className="mb-4">
            Цена металлоконструкций в 2025 году — от 90 до 180 руб./кг в зависимости от типа стали, сложности и покрытия. ЛСТК-профиль с оцинковкой — от 110 руб./кг. Стоимость здания под ключ из ЛСТК стартует от 4 500 руб./м².
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Что лучше: ЛСТК или классический металлокаркас?</h3>
          <p className="mb-4">
            Для зданий пролётом до 24 м ЛСТК дешевле на 30–40% и монтируется в 2 раза быстрее. При пролётах свыше 30 м или нагрузке от мостового крана 20+ т необходим тяжёлый металлокаркас из двутавра.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Нужно ли разрешение на строительство здания из металлоконструкций?</h3>
          <p className="mb-4">
            Зависит от площади и назначения. Нежилые здания до 1 500 м² требуют только уведомления о начале строительства. Промышленные объекты с экспертизой — разрешения на строительство. Наши инженеры бесплатно проконсультируют по документации для вашего проекта.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Сколько служат металлоконструкции?</h3>
          <p className="mb-4">
            Оцинкованный ЛСТК-профиль с покрытием 275 г/м² служит 50 лет и более без коррозии. Тяжёлый металлокаркас при правильной антикоррозийной обработке — 30–50 лет. МАКСТИЛ даёт гарантию 5 лет на конструкции.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Получите расчёт стоимости металлоконструкций</h3>
            <p className="text-muted mb-4">
              МАКСТИЛ — производитель металлоконструкций и ЛСТК в Белгороде. Собственный завод, инженерный отдел, монтажные бригады. Работаем по всему Черноземью и ДНР/ЛНР. Бесплатный расчёт за 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-6">
            <p className="text-sm text-muted">Читайте также:</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <Link href="/knowledge/stoimost-m2/" className="text-sm text-accent-blue hover:underline">Стоимость ангара за 1 м²</Link>
              <Link href="/knowledge/sroki-stroitelstva/" className="text-sm text-accent-blue hover:underline">Сроки строительства</Link>
              <Link href="/knowledge/fundament-dlya-angara/" className="text-sm text-accent-blue hover:underline">Фундамент для ангара</Link>
              <Link href="/knowledge/montazh-sendvich-panelej/" className="text-sm text-accent-blue hover:underline">Монтаж сэндвич-панелей</Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
