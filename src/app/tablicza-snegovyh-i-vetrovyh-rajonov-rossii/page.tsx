import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import { Snowflake, Wind, MapPin, Calculator, ArrowRight, Buildings } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Таблица и карта снеговых и ветровых районов России | Снеговая и ветровая нагрузка по СП 20.13330",
  description:
    "Единая таблица снеговых и ветровых районов РФ. Нормативная нагрузка в кПа и кг/м² для всех регионов. Карты районирования, типы местности А/В/С. Расчёт по СП 20.13330.2016.",
  keywords: [
    "снеговые и ветровые районы",
    "таблица снеговых районов",
    "таблица ветровых районов",
    "снеговая и ветровая нагрузка",
    "карта районирования",
    "районы по ветру",
    "снеговой район таблица",
  ],
  openGraph: {
    title: "Таблица снеговых и ветровых районов России по СП 20.13330",
    description: "Единая таблица снеговых и ветровых районов РФ. Нагрузка в кПа и кг/м² для всех регионов.",
    url: "https://lstkmk.ru/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/",
  },
};

const snowDistricts = [
  { district: "I", kpa: "0,5 кПа", kgm2: "50 кг/м²", regions: "Адыгея, Астраханская обл., Краснодарский край (равнина), Калмыкия, Ростовская обл. (юг), Ставропольский край (равнина), Крым, Севастополь, Дагестан (побережье), Чечня (равнина), Ингушетия (равнина), Кабардино-Балкария (равнина)" },
  { district: "II", kpa: "1,0 кПа", kgm2: "100 кг/м²", regions: "Белгородская обл., Брянская обл., Владимирская обл., Волгоградская обл., Воронежская обл., Ивановская обл., Калужская обл., Костромская обл., Курская обл., Липецкая обл., Марий Эл, Мордовия, Московская обл., Нижегородская обл., Новгородская обл., Орловская обл., Пензенская обл., Псковская обл., Ростовская обл. (север), Рязанская обл., Самарская обл., Саратовская обл., Смоленская обл., Тамбовская обл., Татарстан, Тверская обл., Тульская обл., Ульяновская обл., Чувашия, Ярославская обл." },
  { district: "III", kpa: "1,5 кПа", kgm2: "150 кг/м²", regions: "Алтайский край, Амурская обл., Башкортостан, Бурятия (юг), Еврейская АО, Забайкальский край (юг), Иркутская обл. (юг), Кемеровская обл., Кировская обл., Красноярский край (центр), Курганская обл., Ленинградская обл., Новосибирская обл., Омская обл., Оренбургская обл., Пермский край, Приморский край, Свердловская обл., Томская обл., Тюменская обл. (юг), Удмуртия, Хабаровский край (юг), Хакасия, Челябинская обл." },
  { district: "IV", kpa: "2,0 кПа", kgm2: "200 кг/м²", regions: "Архангельская обл. (юг), Вологодская обл., Иркутская обл. (север), Карелия (юг), Коми (юг), Красноярский край (Эвенкия), Сахалинская обл. (юг), ХМАО (юг), Якутия (центр)" },
  { district: "V", kpa: "2,5 кПа", kgm2: "250 кг/м²", regions: "Архангельская обл. (север), Камчатский край (юг), Карелия (север), Коми (север), Магаданская обл. (юг), Мурманская обл., Ненецкий АО, ХМАО (север), ЯНАО (юг)" },
  { district: "VI", kpa: "3,0 кПа", kgm2: "300 кг/м²", regions: "Красноярский край (Таймыр), Якутия (юг), Камчатский край (центр)" },
  { district: "VII", kpa: "3,5 кПа", kgm2: "350 кг/м²", regions: "Магаданская обл. (север), Чукотский АО (юг), Якутия (север)" },
  { district: "VIII", kpa: "4,0+ кПа", kgm2: "400+ кг/м²", regions: "Чукотский АО (север), острова Северного Ледовитого океана, горные районы Камчатки" },
];

const windDistricts = [
  { district: "I", kpa: "0,17 кПа", kgm2: "17 кг/м²", regions: "Владимирская обл., Ивановская обл., Калужская обл., Кировская обл., Костромская обл., Ленинградская обл., Марий Эл, Мордовия, Москва, Московская обл., Нижегородская обл., Новгородская обл., Пензенская обл., Пермский край, Псковская обл., Рязанская обл., Самарская обл., Санкт-Петербург, Саратовская обл., Свердловская обл., Смоленская обл., Татарстан, Тверская обл., Тульская обл., Удмуртия, Ульяновская обл., Челябинская обл., Чувашия, Ярославская обл." },
  { district: "II", kpa: "0,23 кПа", kgm2: "23 кг/м²", regions: "Алтайский край, Астраханская обл., Башкортостан, Белгородская обл., Брянская обл., Волгоградская обл., Воронежская обл., Калмыкия, Кемеровская обл., Красноярский край (юг), Курганская обл., Курская обл., Липецкая обл., Новосибирская обл., Омская обл., Оренбургская обл., Орловская обл., Ростовская обл., Тамбовская обл., Томская обл., Тюменская обл., Хакасия" },
  { district: "III", kpa: "0,30 кПа", kgm2: "30 кг/м²", regions: "Адыгея, Дагестан (равнина), Ингушетия, Иркутская обл. (юг), Кабардино-Балкария, Карачаево-Черкесия, Краснодарский край (равнина), Крым, Северная Осетия, Севастополь, Ставропольский край, ХМАО (юг), Чечня" },
  { district: "IV", kpa: "0,38 кПа", kgm2: "38 кг/м²", regions: "Амурская обл., Забайкальский край, Иркутская обл. (север), Краснодарский край (побережье), Приморский край, Сахалинская обл., Хабаровский край" },
  { district: "V", kpa: "0,48 кПа", kgm2: "48 кг/м²", regions: "Архангельская обл., Камчатский край (юг), Карелия, Коми, Мурманская обл., Ненецкий АО, Якутия (северное побережье), ЯНАО" },
  { district: "VI", kpa: "0,60 кПа", kgm2: "60 кг/м²", regions: "Камчатский край (север), Магаданская обл., Чукотский АО" },
  { district: "VII", kpa: "0,73 кПа", kgm2: "73 кг/м²", regions: "Отдельные участки побережья Северного Ледовитого океана, горные перевалы" },
];

const citiesData = [
  { city: "Абакан",              snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Архангельск",        snow: "IV",  snowKg: "200", wind: "V",   windKg: "48" },
  { city: "Астрахань",          snow: "I",   snowKg: "50",  wind: "II",  windKg: "23" },
  { city: "Барнаул",            snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Белгород",           snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Братск",             snow: "III", snowKg: "150", wind: "III", windKg: "30" },
  { city: "Великий Новгород",   snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Владивосток",        snow: "III", snowKg: "150", wind: "IV",  windKg: "38" },
  { city: "Волгоград",          snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Воронеж",            snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Екатеринбург",       snow: "III", snowKg: "150", wind: "I",   windKg: "17" },
  { city: "Иркутск",            snow: "III", snowKg: "150", wind: "III", windKg: "30" },
  { city: "Казань",             snow: "III", snowKg: "150", wind: "I",   windKg: "17" },
  { city: "Калининград",        snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Калуга",             snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Кемерово",           snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Киров",              snow: "III", snowKg: "150", wind: "I",   windKg: "17" },
  { city: "Комсомольск-на-Амуре", snow: "III", snowKg: "150", wind: "IV", windKg: "38" },
  { city: "Краснодар",          snow: "I",   snowKg: "50",  wind: "III", windKg: "30" },
  { city: "Красноярск",         snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Курган",             snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Курск",              snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Липецк",             snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Луганск",            snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Москва",             snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Мурманск",           snow: "V",   snowKg: "250", wind: "V",   windKg: "48" },
  { city: "Нижний Новгород",    snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Новосибирск",        snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Омск",               snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Орёл",               snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Оренбург",           snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Пенза",              snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Пермь",              snow: "III", snowKg: "150", wind: "I",   windKg: "17" },
  { city: "Петрозаводск",       snow: "V",   snowKg: "250", wind: "V",   windKg: "48" },
  { city: "Псков",              snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Ростов-на-Дону",     snow: "I",   snowKg: "50",  wind: "II",  windKg: "23" },
  { city: "Рязань",             snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Самара",             snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Санкт-Петербург",    snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Саратов",            snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Смоленск",           snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Тамбов",             snow: "II",  snowKg: "100", wind: "II",  windKg: "23" },
  { city: "Тверь",              snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Томск",              snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Тула",               snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Тюмень",             snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Ульяновск",          snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Уфа",                snow: "III", snowKg: "150", wind: "II",  windKg: "23" },
  { city: "Хабаровск",          snow: "III", snowKg: "150", wind: "IV",  windKg: "38" },
  { city: "Чебоксары",          snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
  { city: "Челябинск",          snow: "III", snowKg: "150", wind: "I",   windKg: "17" },
  { city: "Южно-Сахалинск",     snow: "IV",  snowKg: "200", wind: "IV",  windKg: "38" },
  { city: "Ярославль",          snow: "II",  snowKg: "100", wind: "I",   windKg: "17" },
];

const faqItems = [
  {
    q: "Какие снеговые и ветровые районы есть в России?",
    a: "В России выделяют 8 снеговых районов (I–VIII) с нагрузкой от 0,5 до 4,0+ кПа и 7 ветровых районов (I–VII) с нагрузкой от 0,17 до 0,73 кПа. Деление установлено по СП 20.13330.2016.",
  },
  {
    q: "Как определить снеговой и ветровой район для своего города?",
    a: "Воспользуйтесь таблицей городов на этой странице или картами районирования. Для точного определения используйте Приложение Е к СП 20.13330.2016.",
  },
  {
    q: "Чем отличаются снеговые районы от ветровых?",
    a: "Снеговой район определяет нагрузку от веса снега на кровлю. Ветровой район — давление ветра на стены и кровлю здания. Оба параметра учитываются при расчёте несущих конструкций независимо.",
  },
  {
    q: "Где посмотреть официальную карту районирования?",
    a: "Официальные карты снеговых и ветровых районов приведены в Приложении Е к СП 20.13330.2016 (актуализированная редакция СНиП 2.01.07-85*). Также карты публикует Росстандарт.",
  },
  {
    q: "Как тип местности влияет на расчёт ветровой нагрузки?",
    a: "Тип местности применяется как поправочный коэффициент к ветровой нагрузке: тип А (открытое поле) — k=1,0; тип Б (равнина с деревьями) — k=0,65; тип В (городская застройка >25 м) — k=0,4. На снеговую нагрузку тип местности не влияет.",
  },
  {
    q: "Что означают кПа и кг/м² в таблице?",
    a: "кПа (килопаскаль) — единица давления, используемая в нормативных документах. 1 кПа ≈ 102 кг/м². Для удобства в таблице приведены оба значения. Например, II снеговой район: 1,0 кПа = 100 кг/м².",
  },
];

export default function TabliczyaSnegVetrPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Таблица и карта снеговых и ветровых районов России",
    "description": "Единая таблица снеговых и ветровых районов РФ по СП 20.13330.2016",
    "url": "https://lstkmk.ru/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://lstkmk.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Таблица снеговых и ветровых районов", "item": "https://lstkmk.ru/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/" },
      ],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Расчёт снеговых и ветровых нагрузок для строительства",
    "provider": { "@type": "Organization", "name": "МАКСТИЛ", "url": "https://lstkmk.ru" },
    "areaServed": { "@type": "Country", "name": "Россия" },
    "description": "Определение снеговых и ветровых районов для проектирования ангаров, складов и производственных зданий по СП 20.13330.2016",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema items={faqItems} />

      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">

        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Таблица и карта снеговых и ветровых районов России
          </h1>
          <p className="text-muted leading-relaxed">
            Единая таблица снеговых и ветровых районов по СП 20.13330.2016 для всех регионов РФ. Нормативные нагрузки в кПа и кг/м². Типы местности А/В/С.
          </p>
        </section>

        {/* Оглавление */}
        <nav className="bg-slate-50 border border-border rounded-xl p-5 mb-10">
          <p className="text-sm font-semibold text-foreground mb-3">Содержание</p>
          <ul className="space-y-2 text-sm">
            {[
              ["#snegovye", "Снеговые районы России"],
              ["#karta-sneg", "Карта снеговых районов"],
              ["#vetrovye", "Ветровые районы России"],
              ["#karta-veter", "Карта ветровых районов"],
              ["#tip-mestnosti", "Типы местности А/В/С"],
              ["#goroda", "Таблица городов"],
              ["#kak-ispolzovat", "Как использовать данные"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-accent-blue hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Снеговые районы */}
        <section id="snegovye" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Snowflake size={22} className="text-accent-blue" weight="duotone" />
            Снеговые районы России
          </h2>
          <p className="text-sm text-muted mb-4">
            По СП 20.13330.2016 территория России разделена на 8 снеговых районов.{" "}
            <Link href="/snegovye-rajony-rossii/" className="text-accent-blue hover:underline">Подробная страница со снеговыми районами →</Link>
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold whitespace-nowrap">Район</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">кПа</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">кг/м²</th>
                  <th className="text-left py-3 font-semibold">Регионы</th>
                </tr>
              </thead>
              <tbody>
                {snowDistricts.map((item) => (
                  <tr key={item.district} className="border-b border-border/40 last:border-0">
                    <td className="py-3 font-bold text-accent-blue whitespace-nowrap">{item.district}</td>
                    <td className="py-3 font-medium whitespace-nowrap">{item.kpa}</td>
                    <td className="py-3 text-muted whitespace-nowrap">{item.kgm2}</td>
                    <td className="py-3 text-muted text-xs leading-relaxed">{item.regions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/snegovye-rajony-rossii/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Все снеговые районы по регионам <ArrowRight size={14} />
            </Link>
            <Link href="/knowledge/snegovoj-rajon/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Расчёт снеговой нагрузки <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Карта снеговых */}
        <section id="karta-sneg" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Карта снеговых районов России</h2>
          <div className="rounded-xl overflow-hidden border border-border bg-slate-50">
            <img
              src="/img/snegovaya-karta.jpg"
              alt="Карта снеговых районов России по СП 20.13330.2016"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted mt-2">Карта снеговых районов по СП 20.13330.2016 (Приложение Е)</p>
        </section>

        {/* Ветровые районы */}
        <section id="vetrovye" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Wind size={22} className="text-accent-blue" weight="duotone" />
            Ветровые районы России
          </h2>
          <p className="text-sm text-muted mb-4">
            По СП 20.13330.2016 территория России разделена на 7 ветровых районов.{" "}
            <Link href="/vetrovye-rajony-rossii/" className="text-accent-blue hover:underline">Подробная страница с ветровыми районами →</Link>
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold whitespace-nowrap">Район</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">кПа</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">кг/м²</th>
                  <th className="text-left py-3 font-semibold">Регионы</th>
                </tr>
              </thead>
              <tbody>
                {windDistricts.map((item) => (
                  <tr key={item.district} className="border-b border-border/40 last:border-0">
                    <td className="py-3 font-bold text-accent-blue whitespace-nowrap">{item.district}</td>
                    <td className="py-3 font-medium whitespace-nowrap">{item.kpa}</td>
                    <td className="py-3 text-muted whitespace-nowrap">{item.kgm2}</td>
                    <td className="py-3 text-muted text-xs leading-relaxed">{item.regions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/vetrovye-rajony-rossii/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Все ветровые районы по регионам <ArrowRight size={14} />
            </Link>
            <Link href="/knowledge/vetrovaya-nagruzka/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Расчёт ветровой нагрузки <ArrowRight size={14} />
            </Link>
            <Link href="/vetrovoj-rajon/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Ветровой район для строительства <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Карта ветровых */}
        <section id="karta-veter" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Карта ветровых районов России</h2>
          <div className="rounded-xl overflow-hidden border border-border bg-slate-50">
            <img
              src="/img/vetrovaya-karta.jpg"
              alt="Карта ветровых районов России по СП 20.13330.2016"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted mt-2">Карта ветровых районов по СП 20.13330.2016 (Приложение Е)</p>
        </section>

        {/* Типы местности */}
        <section id="tip-mestnosti" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Типы местности А/В/С по СП 20.13330</h2>
          <p className="text-sm text-muted mb-4">
            Тип местности — поправочный коэффициент к ветровой нагрузке. Чем более открытая местность, тем выше ветровое воздействие.{" "}
            <Link href="/knowledge/tip-mestnosti/" className="text-accent-blue hover:underline">Подробнее о типах местности →</Link>
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Коэф.</th>
                  <th className="text-left py-3 font-semibold">Описание</th>
                  <th className="text-left py-3 font-semibold">Примеры</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="py-3 font-bold text-accent-blue">А</td>
                  <td className="py-3 font-medium">1,0</td>
                  <td className="py-3 text-muted">Открытые равнины, степи, побережья</td>
                  <td className="py-3 text-muted text-xs">Ангар в чистом поле, у водоёма, на побережье</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-3 font-bold text-accent-blue">Б</td>
                  <td className="py-3 font-medium">0,65</td>
                  <td className="py-3 text-muted">Равнина с деревьями и постройками до 10 м</td>
                  <td className="py-3 text-muted text-xs">Окраина города, деревня, промзона, лесополоса</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-accent-blue">В</td>
                  <td className="py-3 font-medium">0,4</td>
                  <td className="py-3 text-muted">Городская застройка высотой более 25 м</td>
                  <td className="py-3 text-muted text-xs">Центр города, промзона между высотками</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 border border-border rounded-lg p-4 text-sm text-muted">
            <strong>Важно:</strong> для большинства промышленных объектов (ангары, склады, фермы) применяется тип Б. Тип А — для строительства на открытых участках у воды или в степи.
          </div>
        </section>

        {/* Таблица городов */}
        <section id="goroda" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-2">Таблица снеговых и ветровых районов по городам</h2>
          <p className="text-sm text-muted mb-4">
            Снеговой и ветровой район для 53 крупнейших городов России в одной таблице.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold whitespace-nowrap">Город</th>
                  <th className="text-left py-2 font-semibold whitespace-nowrap">Снег. р-н</th>
                  <th className="text-left py-2 font-semibold whitespace-nowrap">Снег. нагр.</th>
                  <th className="text-left py-2 font-semibold whitespace-nowrap">Ветр. р-н</th>
                  <th className="text-left py-2 font-semibold whitespace-nowrap">Ветр. нагр.</th>
                </tr>
              </thead>
              <tbody>
                {citiesData.map((item) => (
                  <tr key={item.city} className="border-b border-border/40 last:border-0">
                    <td className="py-2 font-medium whitespace-nowrap">{item.city}</td>
                    <td className="py-2 text-muted">{item.snow}</td>
                    <td className="py-2 text-muted whitespace-nowrap">{item.snowKg} кг/м²</td>
                    <td className="py-2 text-muted">{item.wind}</td>
                    <td className="py-2 text-muted whitespace-nowrap">{item.windKg} кг/м²</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Как использовать */}
        <section id="kak-ispolzovat" className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Как использовать данные для расчёта</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Buildings size={20} className="text-accent-blue mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Для проектирования ангара</p>
                  <p className="text-sm text-muted">
                    Определите снеговой и ветровой район по таблице. Эти данные передаются проектировщику — он учитывает их при расчёте сечений несущих балок, шага рам и узлов крепления кровельных панелей.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Calculator size={20} className="text-accent-blue mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Для расчёта каркаса</p>
                  <p className="text-sm text-muted">
                    Снеговая нагрузка — суммарная нагрузка на кровлю: S = S₀ × μ, где S₀ — нормативное значение, μ — коэффициент уклона. Ветровая нагрузка — горизонтальное воздействие с учётом коэффициента типа местности k.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-blue mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Быстрый расчёт стоимости</p>
                  <p className="text-sm text-muted">
                    Используйте наш конфигуратор — укажите размеры и регион, система автоматически учтёт нагрузки.{" "}
                    <Link href="/configurator-3d" className="text-accent-blue hover:underline font-medium">
                      Открыть конфигуратор →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Частые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border-l-2 border-accent-blue pl-4">
                <p className="font-medium text-foreground mb-1">{item.q}</p>
                <p className="text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Перелинковка */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Связанные страницы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/snegovye-rajony-rossii/", label: "Снеговые районы России", desc: "Полная таблица по всем регионам" },
              { href: "/vetrovye-rajony-rossii/", label: "Ветровые районы России", desc: "Полная таблица по всем регионам" },
              { href: "/knowledge/snegovoj-rajon/", label: "Расчёт снеговой нагрузки", desc: "Формула и примеры" },
              { href: "/knowledge/vetrovaya-nagruzka/", label: "Расчёт ветровой нагрузки", desc: "Коэффициенты и формулы" },
              { href: "/knowledge/tip-mestnosti/", label: "Типы местности А/В/С", desc: "Влияние на ветровую нагрузку" },
              { href: "/vetrovoj-rajon/", label: "Ветровой район для ангара", desc: "Практическое руководство" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-accent-blue/40 hover:bg-slate-50 transition-colors"
              >
                <ArrowRight size={16} className="text-accent-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{link.label}</p>
                  <p className="text-xs text-muted">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Рассчитаем ангар под ваш район</h2>
          <p className="text-slate-400 mb-6 text-sm">
            Учтём снеговой и ветровой район, тип местности, уклон кровли. Проект и расчёт за 1 день.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#calculator"
              className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Рассчитать стоимость
            </Link>
            <Link
              href="/#contacts"
              className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              Получить консультацию
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
