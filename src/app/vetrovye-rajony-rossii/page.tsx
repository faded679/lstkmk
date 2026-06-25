import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import {
  Wind,
  MapPin,
  Calculator,
  Buildings,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ветровые районы России по СП 20.13330 | Таблица по всем регионам",
  description:
    "Полная таблица ветровых районов РФ: давление в кПа и кг/м². Типы местности А/В/С. Карта ветрового районирования. Расчёт нагрузки на здания.",
  keywords: [
    "ветровые районы России",
    "ветровой район",
    "ветровая нагрузка",
    "карта ветровых районов",
    "ветровые районы по регионам",
    "СП 20.13330",
    "тип местности А В С",
  ],
  openGraph: {
    title: "Ветровые районы России по СП 20.13330 | Таблица по всем регионам",
    description:
      "Полная таблица ветровых районов РФ: давление в кПа и кг/м². Типы местности А/В/С.",
    url: "https://lstkmk.ru/vetrovye-rajony-rossii/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/vetrovye-rajony-rossii/",
  },
};

const windDistricts = [
  {
    district: "I",
    kpa: "0,17 кПа",
    kgm2: "17 кг/м²",
    regions:
      "Владимирская область, Ивановская область, Калужская область, Кировская область, Костромская область, Ленинградская область, Марий Эл, Мордовия, Москва, Московская область, Нижегородская область, Новгородская область, Пензенская область, Пермский край, Псковская область, Рязанская область, Самарская область, Санкт-Петербург, Саратовская область, Свердловская область, Смоленская область, Татарстан, Тверская область, Тульская область, Удмуртия, Ульяновская область, Челябинская область, Чувашия, Ярославская область",
  },
  {
    district: "II",
    kpa: "0,23 кПа",
    kgm2: "23 кг/м²",
    regions:
      "Алтайский край, Астраханская область, Башкортостан, Белгородская область, Брянская область, Волгоградская область, Воронежская область, Калмыкия, Кемеровская область, Красноярский край (юг), Курганская область, Курская область, Липецкая область, Новосибирская область, Омская область, Оренбургская область, Орловская область, Ростовская область, Тамбовская область, Томская область, Тюменская область, Хакасия",
  },
  {
    district: "III",
    kpa: "0,30 кПа",
    kgm2: "30 кг/м²",
    regions:
      "Адыгея, Дагестан (равнина), Ингушетия, Иркутская область (юг), Кабардино-Балкария, Карачаево-Черкесия, Краснодарский край (равнина), Крым, Северная Осетия, Севастополь, Ставропольский край, ХМАО (юг), Чечня",
  },
  {
    district: "IV",
    kpa: "0,38 кПа",
    kgm2: "38 кг/м²",
    regions:
      "Амурская область, Забайкальский край, Иркутская область (север), Краснодарский край (побережье Чёрного моря), Приморский край, Сахалинская область, Хабаровский край",
  },
  {
    district: "V",
    kpa: "0,48 кПа",
    kgm2: "48 кг/м²",
    regions:
      "Архангельская область, Камчатский край (юг), Карелия, Коми, Мурманская область, Ненецкий АО, Якутия (северное побережье), ЯНАО",
  },
  {
    district: "VI",
    kpa: "0,60 кПа",
    kgm2: "60 кг/м²",
    regions: "Камчатский край (север), Магаданская область, Чукотский АО",
  },
  {
    district: "VII",
    kpa: "0,73 кПа",
    kgm2: "73 кг/м²",
    regions:
      "Отдельные участки побережья Северного Ледовитого океана, горные перевалы",
  },
];

const terrainTypes = [
  {
    type: "А",
    color: "bg-blue-50 border-blue-200",
    title: "Открытые пространства",
    desc: "Открытые равнины, степи, тундра, пустыни, берега морей, озёр и водохранилищ. Максимальное ветровое давление. Применяется при строительстве у воды и на равнинах без лесных массивов.",
    coeff: "k(z) — максимальный",
    examples: "Степные районы Поволжья, побережье Азовского моря, открытые поля",
  },
  {
    type: "В",
    color: "bg-green-50 border-green-200",
    title: "Стандартная местность",
    desc: "Равнинная и холмистая местность с препятствиями высотой 10 м и более — лесные массивы, сельские поселения, пригороды. Наиболее распространённый тип.",
    coeff: "k(z) — стандартный",
    examples: "Большинство сельских районов, пригороды крупных городов",
  },
  {
    type: "С",
    color: "bg-orange-50 border-orange-200",
    title: "Городская застройка",
    desc: "Городские территории с плотной застройкой высотой свыше 25 м. Ветровое давление снижается за счёт экранирования зданиями. Коэффициент применяется только в пределах городской черты.",
    coeff: "k(z) — минимальный",
    examples: "Центры крупных городов с многоэтажной застройкой",
  },
];

const constructionInfluence = [
  {
    title: "Анкерное крепление колонн",
    desc: "В районах IV–VII анкерные болты подбираются с запасом по вырывающей нагрузке — ветер давит на стены и приподнимает колонну.",
  },
  {
    title: "Крепление кровли и обшивки",
    desc: "Шаг самонарезающих винтов уменьшается в высоких ветровых районах с 500 до 250 мм. Профлист на кровле должен держать срывающую нагрузку.",
  },
  {
    title: "Устойчивость ворот и проёмов",
    desc: "Ворота шириной 6+ м при открытом положении создают парусность. В районах V–VII требуется усиление рамы ворот и применение двустворчатых конструкций.",
  },
  {
    title: "Форма здания",
    desc: "Арочная кровля снижает ветровую нагрузку на 20–30% по сравнению с двускатной. В сильноветровых районах предпочтительны округлые профили.",
  },
];

const faq = [
  {
    q: "Как узнать ветровой район для моего участка?",
    a: "Ветровой район определяется по карте 3 приложения Е к СП 20.13330.2016 «Нагрузки и воздействия». По координатам участка находят соответствующую зону I–VII. Для большинства городов центральной России — район I или II.",
  },
  {
    q: "Какой ветровой район в Москве и Санкт-Петербурге?",
    a: "Москва относится к I ветровому району (0,17 кПа / 17 кг/м²). Санкт-Петербург также находится в I районе, однако прибрежные зоны и острова Финского залива могут быть отнесены к более высокому району. Уточнение производится по карте СП 20.13330.2016.",
  },
  {
    q: "Что такое тип местности А, В, С и как он влияет на расчёт?",
    a: "Тип местности — поправочный коэффициент к ветровому давлению. Тип А (открытые пространства) даёт максимальное давление, тип В (стандартная застройка) — среднее, тип С (плотный город) — минимальное. Разница в давлении между типами А и С может достигать 30–40% при одинаковом ветровом районе.",
  },
  {
    q: "Как ветровой район влияет на стоимость ангара?",
    a: "При переходе от I к III ветровому району стоимость каркаса растёт примерно на 10–20% из-за усиления стоек, ферм и анкеровки. В районах V–VII, характерных для побережий и Крайнего Севера, металлоёмкость каркаса увеличивается на 30–50%.",
  },
  {
    q: "Нужно ли учитывать ветровую нагрузку для небольшого склада?",
    a: "Да, ветровая нагрузка учитывается при проектировании любого здания независимо от площади. Особенно критична она для зданий высотой более 8 м и пролётом более 18 м. Согласно СП 20.13330, расчёт на ветер обязателен для всех капитальных строений.",
  },
];

export default function VetrovyeRajonyRossiiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Проектирование зданий с учётом ветровой нагрузки",
    description:
      "Определение ветрового района и типа местности по СП 20.13330.2016. Расчёт ветровой нагрузки на здания из металлоконструкций по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Белгород",
        addressCountry: "RU",
      },
    },
    areaServed: "Россия",
    priceRange: "бесплатно при проектировании",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ветровые районы России по СП 20.13330",
    description:
      "Полная таблица ветровых районов РФ с давлением для каждого региона и описанием типов местности А/В/С.",
    url: "https://lstkmk.ru/vetrovye-rajony-rossii/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: "https://lstkmk.ru/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ветровые районы России",
          item: "https://lstkmk.ru/vetrovye-rajony-rossii/",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <FaqSchema items={faq} />

      <main className="pt-28">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
                <span>/</span>
                <span className="text-white">Ветровые районы России</span>
              </nav>
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                СП 20.13330.2016
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ветровые районы России
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Полная таблица ветровых районов РФ по СП 20.13330.2016 для всех
                регионов. Нормативное давление в кПа и кг/м². Типы местности
                А/В/С и их влияние на расчёт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/configurator-3d"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать ангар под мой район
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="space-y-16">

            {/* Карта */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Карта ветровых районов России
              </h2>
              <div className="rounded-xl overflow-hidden border border-border bg-slate-50">
                <img
                  src="/img/vetrovaya-karta.jpg"
                  alt="Карта ветровых районов России по СП 20.13330.2016"
                  className="w-full h-auto"
                  loading="lazy"
                />
                {/* Цветовая заглушка */}
                <div className="p-6 grid grid-cols-4 gap-2 text-xs font-mono">
                  {[
                    { n: "I", color: "bg-green-100 text-green-800", label: "17 кг/м²" },
                    { n: "II", color: "bg-yellow-100 text-yellow-800", label: "23 кг/м²" },
                    { n: "III", color: "bg-orange-100 text-orange-800", label: "30 кг/м²" },
                    { n: "IV", color: "bg-red-100 text-red-800", label: "38 кг/м²" },
                    { n: "V", color: "bg-red-200 text-red-900", label: "48 кг/м²" },
                    { n: "VI", color: "bg-purple-100 text-purple-800", label: "60 кг/м²" },
                    { n: "VII", color: "bg-purple-200 text-purple-900", label: "73 кг/м²" },
                    { n: "—", color: "bg-slate-100 text-slate-500", label: "" },
                  ].map((z, i) => (
                    <div
                      key={i}
                      className={`${z.color} rounded p-2 text-center`}
                    >
                      <div className="font-bold text-sm">Район {z.n}</div>
                      <div>{z.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted mt-2">
                Карта районирования территории России по ветровому давлению. СП 20.13330.2016, Приложение Е, Карта 3.
              </p>
            </section>

            {/* Таблица по всем регионам */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Таблица ветровых районов по всем регионам РФ
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border whitespace-nowrap">
                        Район
                      </th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border whitespace-nowrap">
                        Давление
                      </th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border whitespace-nowrap">
                        кг/м²
                      </th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">
                        Регионы
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    {windDistricts.map((row) => (
                      <tr
                        key={row.district}
                        className="border-b border-border last:border-b-0 align-top"
                      >
                        <td className="px-4 py-3 font-bold text-foreground whitespace-nowrap">
                          {row.district}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">
                          {row.kpa}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {row.kgm2}
                        </td>
                        <td className="px-4 py-3 leading-relaxed">
                          {row.regions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted mt-2">
                Источник: СП 20.13330.2016 «Нагрузки и воздействия», Приложение Е. Карта 3 — районирование по давлению ветра.
              </p>
            </section>

            {/* Типы местности А/В/С */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Типы местности А, В, С
              </h2>
              <p className="text-muted mb-6">
                Тип местности — поправочный коэффициент к ветровому давлению, который определяется характером застройки и рельефом в радиусе 10 км от объекта. Применяется поперечно ветровому направлению.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {terrainTypes.map((item) => (
                  <div
                    key={item.type}
                    className={`p-5 rounded-xl border ${item.color}`}
                  >
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {item.type}
                    </div>
                    <div className="font-semibold text-foreground mb-2">
                      {item.title}
                    </div>
                    <p className="text-sm text-muted mb-3">{item.desc}</p>
                    <div className="text-xs text-muted border-t border-border/50 pt-2">
                      <span className="font-medium">Примеры:</span> {item.examples}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-border mt-4">
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Расчётная формула:</strong> w = w₀ × k(z) × C<sub>e</sub>, где w₀ — нормативное давление (кПа), k(z) — коэффициент, учитывающий изменение ветрового давления с высотой для данного типа местности, C<sub>e</sub> — аэродинамический коэффициент формы здания.
                </p>
              </div>
            </section>

            {/* Как определить */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Как определить ветровой район
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <MapPin size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    По карте приложения Е
                  </h3>
                  <p className="text-sm text-muted">
                    Карта 3 приложения Е к СП 20.13330.2016 — основной документ. По координатам определяется зона I–VII.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Buildings size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    По таблице регионов
                  </h3>
                  <p className="text-sm text-muted">
                    Используйте таблицу выше — найдите свой регион и определите ветровой район.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Calculator size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    В конфигураторе
                  </h3>
                  <p className="text-sm text-muted">
                    В нашем{" "}
                    <Link
                      href="/configurator-3d"
                      className="text-accent-blue hover:underline"
                    >
                      3D-конфигураторе
                    </Link>{" "}
                    выберите регион — ветровая нагрузка подставится автоматически.
                  </p>
                </div>
              </div>
            </section>

            {/* Влияние на конструкцию */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Влияние ветрового района на конструкцию ангара
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {constructionInfluence.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-border bg-slate-50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Wind size={18} weight="bold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Частые вопросы о ветровых районах
              </h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="p-5 rounded-xl border border-border bg-slate-50"
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-muted">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Перелинковка */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Полезные материалы
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    href: "/vetrovoj-rajon/",
                    label: "Ветровой район: определение и карта",
                  },
                  {
                    href: "/knowledge/vetrovaya-nagruzka/",
                    label: "Расчёт ветровой нагрузки",
                  },
                  {
                    href: "/knowledge/tip-mestnosti/",
                    label: "Тип местности А/В/С — подробно",
                  },
                  {
                    href: "/snegovye-rajony-rossii/",
                    label: "Снеговые районы России",
                  },
                  {
                    href: "/configurator-3d",
                    label: "3D-конфигуратор ангара",
                  },
                  {
                    href: "/knowledge/snegovoj-rajon/",
                    label: "Снеговой район — расчёт нагрузки",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-4 rounded-lg border border-border hover:border-accent-blue hover:bg-accent-blue/5 transition-colors text-sm text-muted hover:text-foreground"
                  >
                    <ArrowRight
                      size={16}
                      className="text-accent-blue flex-shrink-0"
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитаем ангар под ваш ветровой район
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Инженер определит ветровой район и тип местности, подберёт сечения
              каркаса с учётом ветровых и снеговых нагрузок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Получить расчёт
              </Link>
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
