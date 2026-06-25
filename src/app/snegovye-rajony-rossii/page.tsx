import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import {
  Snowflake,
  MapPin,
  Calculator,
  Buildings,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Снеговые районы России по СП 20.13330 | Таблица по всем регионам",
  description:
    "Полная таблица снеговых районов РФ: нагрузка в кПа и кг/м² для каждого региона. Карта районирования по СП 20.13330.2016. Расчёт снеговой нагрузки на кровлю.",
  keywords: [
    "снеговые районы России",
    "снеговой район",
    "снеговая нагрузка",
    "карта снеговых районов",
    "снеговые районы по регионам",
    "СП 20.13330",
    "снеговая нагрузка кг м2",
  ],
  openGraph: {
    title: "Снеговые районы России по СП 20.13330 | Таблица по всем регионам",
    description:
      "Полная таблица снеговых районов РФ: нагрузка в кПа и кг/м² для каждого региона.",
    url: "https://lstkmk.ru/snegovye-rajony-rossii/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/snegovye-rajony-rossii/",
  },
};

const snowDistricts = [
  {
    district: "I",
    kpa: "0,5 кПа",
    kgm2: "50 кг/м²",
    regions:
      "Республика Адыгея, Астраханская область, Краснодарский край (равнина), Республика Калмыкия, Ростовская область (юг), Ставропольский край (равнина), Крым, Севастополь, Дагестан (побережье), Чечня (равнина), Ингушетия (равнина), Кабардино-Балкария (равнина)",
  },
  {
    district: "II",
    kpa: "1,0 кПа",
    kgm2: "100 кг/м²",
    regions:
      "Белгородская область, Брянская область, Владимирская область, Волгоградская область, Воронежская область, Ивановская область, Калужская область, Костромская область, Курская область, Липецкая область, Марий Эл, Мордовия, Московская область, Нижегородская область, Новгородская область, Орловская область, Пензенская область, Псковская область, Ростовская область (север), Рязанская область, Самарская область, Саратовская область, Смоленская область, Тамбовская область, Татарстан, Тверская область, Тульская область, Ульяновская область, Чувашия, Ярославская область",
  },
  {
    district: "III",
    kpa: "1,5 кПа",
    kgm2: "150 кг/м²",
    regions:
      "Алтайский край, Амурская область, Башкортостан, Бурятия (юг), Еврейская АО, Забайкальский край (юг), Иркутская область (юг), Кемеровская область, Кировская область, Красноярский край (центр), Курганская область, Ленинградская область, Новосибирская область, Омская область, Оренбургская область, Пермский край, Приморский край, Свердловская область, Томская область, Тюменская область (юг), Удмуртия, Хабаровский край (юг), Хакасия, Челябинская область",
  },
  {
    district: "IV",
    kpa: "2,0 кПа",
    kgm2: "200 кг/м²",
    regions:
      "Архангельская область (юг), Вологодская область, Иркутская область (север), Карелия (юг), Коми (юг), Красноярский край (север — Эвенкия), Сахалинская область (юг), ХМАО (юг), Якутия (центр)",
  },
  {
    district: "V",
    kpa: "2,5 кПа",
    kgm2: "250 кг/м²",
    regions:
      "Архангельская область (север), Камчатский край (юг), Карелия (север), Коми (север), Магаданская область (юг), Мурманская область, Ненецкий АО, ХМАО (север), ЯНАО (юг)",
  },
  {
    district: "VI",
    kpa: "3,0 кПа",
    kgm2: "300 кг/м²",
    regions:
      "Красноярский край (Таймыр), Якутия (юг), Камчатский край (центр)",
  },
  {
    district: "VII",
    kpa: "3,5 кПа",
    kgm2: "350 кг/м²",
    regions:
      "Магаданская область (север), Чукотский АО (юг), Якутия (север)",
  },
  {
    district: "VIII",
    kpa: "4,0+ кПа",
    kgm2: "400+ кг/м²",
    regions:
      "Чукотский АО (север), острова Северного Ледовитого океана, горные районы Камчатки",
  },
];

const constructionInfluence = [
  {
    title: "Шаг несущих балок",
    desc: "В высоких снеговых районах (IV–VIII) шаг ферм уменьшается с 6 до 3–4 м, чтобы выдержать нагрузку.",
  },
  {
    title: "Толщина стали каркаса",
    desc: "Сечение колонн и ригелей подбирается по расчётной нагрузке. В VII–VIII районах сечение увеличивается на 30–50%.",
  },
  {
    title: "Уклон кровли",
    desc: "Минимальный уклон в снежных районах — 10–15°, чтобы снег самостоятельно сходил и не накапливался.",
  },
  {
    title: "Снегозадержание",
    desc: "В районах I–II снегозадержатели устанавливаются по желанию. В III–VIII — обязательный элемент безопасности.",
  },
];

const faq = [
  {
    q: "Какой снеговой район в Белгороде?",
    a: "Белгород находится во II снеговом районе по СП 20.13330.2016. Нормативная снеговая нагрузка — 1,0 кПа (100 кг/м²). Это соответствует умеренному уровню снеговой нагрузки для центральной части России.",
  },
  {
    q: "Какой снеговой район в Москве?",
    a: "Москва и Московская область относятся ко II снеговому району. Нормативная снеговая нагрузка составляет 1,0 кПа (100 кг/м²) по СП 20.13330.2016, Приложение Е.",
  },
  {
    q: "Какой снеговой район в Краснодаре?",
    a: "Краснодар расположен в I снеговом районе. Нормативная снеговая нагрузка — 0,5 кПа (50 кг/м²). Это наименьший показатель по России, что позволяет проектировать более лёгкие конструкции.",
  },
  {
    q: "Чем отличается снеговой район от снеговой нагрузки?",
    a: "Снеговой район — это территориальная зона (I–VIII), которой соответствует нормативное значение веса снегового покрова. Снеговая нагрузка — расчётная величина, которая получается умножением нормативного значения на коэффициент μ (учитывает уклон кровли) и коэффициент надёжности. Таким образом, нагрузка — производная от района.",
  },
  {
    q: "Как снеговой район влияет на стоимость ангара?",
    a: "Переход от II к III снеговому району увеличивает стоимость каркаса на 15–25% из-за усиления ферм и колонн. В районах V–VIII стоимость металлокаркаса может быть на 40–60% выше, чем в I–II районах при той же площади здания.",
  },
];

export default function SnegovyeRajonyRossiiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Проектирование зданий с учётом снеговой нагрузки",
    description:
      "Определение снегового района по СП 20.13330.2016 и расчёт снеговой нагрузки на кровлю ангаров, складов и производственных зданий. Работаем по всей России.",
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
    name: "Снеговые районы России по СП 20.13330",
    description:
      "Полная таблица снеговых районов РФ с нагрузками для каждого региона.",
    url: "https://lstkmk.ru/snegovye-rajony-rossii/",
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
          name: "Снеговые районы России",
          item: "https://lstkmk.ru/snegovye-rajony-rossii/",
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
                <span className="text-white">Снеговые районы России</span>
              </nav>
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                СП 20.13330.2016
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Снеговые районы России
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Полная таблица снеговых районов по СП 20.13330.2016 для всех
                регионов РФ. Нормативная снеговая нагрузка на кровлю в кПа и
                кг/м².
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
                Карта снеговых районов России
              </h2>
              <div className="rounded-xl overflow-hidden border border-border bg-slate-50">
                <img
                  src="/img/snegovaya-karta.jpg"
                  alt="Карта снеговых районов России по СП 20.13330.2016"
                  className="w-full h-auto"
                  loading="lazy"
                />
                {/* Цветовая заглушка, если файл отсутствует */}
                <div className="p-6 grid grid-cols-4 gap-2 text-xs font-mono">
                  {[
                    { n: "I", color: "bg-green-100 text-green-800", label: "50 кг/м²" },
                    { n: "II", color: "bg-yellow-100 text-yellow-800", label: "100 кг/м²" },
                    { n: "III", color: "bg-orange-100 text-orange-800", label: "150 кг/м²" },
                    { n: "IV", color: "bg-red-100 text-red-800", label: "200 кг/м²" },
                    { n: "V", color: "bg-red-200 text-red-900", label: "250 кг/м²" },
                    { n: "VI", color: "bg-purple-100 text-purple-800", label: "300 кг/м²" },
                    { n: "VII", color: "bg-purple-200 text-purple-900", label: "350 кг/м²" },
                    { n: "VIII", color: "bg-slate-200 text-slate-800", label: "400+ кг/м²" },
                  ].map((z) => (
                    <div
                      key={z.n}
                      className={`${z.color} rounded p-2 text-center`}
                    >
                      <div className="font-bold text-sm">Район {z.n}</div>
                      <div>{z.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted mt-2">
                Карта районирования территории России по весу снегового покрова. СП 20.13330.2016, Приложение Е.
              </p>
            </section>

            {/* Таблица по всем регионам */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Таблица снеговых районов по всем регионам РФ
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border whitespace-nowrap">
                        Район
                      </th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border whitespace-nowrap">
                        Нагрузка
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
                    {snowDistricts.map((row) => (
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
                Источник: СП 20.13330.2016 «Нагрузки и воздействия», Приложение Е. Карта 1 — районирование по весу снегового покрова.
              </p>
            </section>

            {/* Как определить снеговой район */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Как определить снеговой район
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <MapPin size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    По карте приложения Е
                  </h3>
                  <p className="text-sm text-muted">
                    Карта 1 приложения Е к СП 20.13330.2016 — основной документ для определения снегового района участка.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Buildings size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    По таблице городов
                  </h3>
                  <p className="text-sm text-muted">
                    Используйте таблицу выше или ближайший крупный город из приложения Е для ориентировочного определения района.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Calculator size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Через конфигуратор
                  </h3>
                  <p className="text-sm text-muted">
                    Используйте наш{" "}
                    <Link
                      href="/configurator-3d"
                      className="text-accent-blue hover:underline"
                    >
                      3D-конфигуратор ангара
                    </Link>{" "}
                    — укажите регион, и снеговой район подставится автоматически.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-border">
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Формула расчёта снеговой нагрузки:</strong> S = S₀ × μ × γ<sub>f</sub>, где S₀ — нормативный вес снегового покрова (кПа), μ — коэффициент перехода от веса снегового покрова к снеговой нагрузке (зависит от уклона кровли), γ<sub>f</sub> = 1,4 — коэффициент надёжности по нагрузке.
                </p>
              </div>
            </section>

            {/* Влияние на конструкцию */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Влияние снегового района на конструкцию ангара
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {constructionInfluence.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-border bg-slate-50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Snowflake size={18} weight="bold" />
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
                Частые вопросы о снеговых районах
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
                    href: "/knowledge/snegovoj-rajon/",
                    label: "Подробно о расчёте снеговой нагрузки",
                  },
                  {
                    href: "/knowledge/minimalnyj-uklon-krovli/",
                    label: "Минимальный уклон кровли",
                  },
                  {
                    href: "/vetrovye-rajony-rossii/",
                    label: "Ветровые районы России",
                  },
                  {
                    href: "/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/",
                    label: "Таблица снеговых и ветровых районов",
                  },
                  {
                    href: "/articles/snegovaya-nagruzka-na-krovlyu-angara/",
                    label: "Снеговая нагрузка на кровлю ангара",
                  },
                  {
                    href: "/configurator-3d",
                    label: "3D-конфигуратор ангара",
                  },
                  {
                    href: "/knowledge/tip-mestnosti/",
                    label: "Тип местности А/В/С",
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
              Рассчитаем ангар под ваш снеговой район
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Инженер определит снеговой район, подберёт сечения несущих
              конструкций и рассчитает стоимость строительства.
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
