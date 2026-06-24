import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import {
  Wind,
  MapPin,
  Calculator,
  Buildings,
  CheckCircle,
  Triangle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ветровой район: карта ветровых нагрузок России по СП 20.13330 | МАКСТИЛ",
  description:
    "Ветровые районы России по СП 20.13330. Карта, таблица по городам, влияние на конструкции зданий, тип местности А/В/С. Рассчитаем конструкцию под ваш район.",
  keywords: [
    "ветровой район",
    "ветровые районы",
    "карта ветровых районов",
    "ветровой район москва",
    "ветровая нагрузка по городам",
    "ветровой район по сп 20.13330",
  ],
  openGraph: {
    title: "Ветровой район: карта ветровых нагрузок России по СП 20.13330",
    description: "Карта ветровых районов, таблица по городам, тип местности, поправочные коэффициенты.",
    url: "https://lstkmk.ru/vetrovoj-rajon/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/vetrovoj-rajon/",
  },
};

export default function VetrovojRajonPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Как узнать ветровой район участка?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ветровой район определяется по СП 20.13330.2016 «Нагрузки и воздействия». Можно использовать карту приложения Е или таблицу по ближайшему крупному городу. Для точного расчёта нужны координаты участка и тип местности.",
        },
      },
      {
        "@type": "Question",
        name: "Что будет, если не учесть ветровую нагрузку?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Недоучёт ветровой нагрузки может привести к деформации ферм, срыву кровли, повреждению ограждений и аварийному состоянию здания. Правильный расчёт — обязательное условие безопасности.",
        },
      },
      {
        "@type": "Question",
        name: "Отличается ли ветровая нагрузка для ангаров и жилых домов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Для быстровозводимых зданий с большими пролётами и высотой ветровая нагрузка может быть критичнее, чем для жилых домов. Также важны форма здания, наличие скатов кровли и расположение в условиях местности.",
        },
      },
    ],
  };

  const districts = [
    { district: "I", cities: "Москва, Санкт-Петербург, Владимир, Калуга, Рязань, Тула, Ярославль", pressure: "23 кг/м²" },
    { district: "II", cities: "Воронеж, Курск, Орёл, Белгород, Липецк, Тамбов, Нижний Новгород", pressure: "30 кг/м²" },
    { district: "III", cities: "Ростов-на-Дону, Волгоград, Саратов, Самара, Уфа, Казань, Екатеринбург", pressure: "38 кг/м²" },
    { district: "IV", cities: "Новосибирск, Омск, Тюмень, Челябинск, Пермь, Красноярск", pressure: "48 кг/м²" },
    { district: "V", cities: "Иркутск, Хабаровск, Благовещенск, Владивосток, Южно-Сахалинск", pressure: "60 кг/м²" },
    { district: "VI", cities: "Петропавловск-Камчатский, Магадан, Норильск, побережье Баренцева моря", pressure: "73 кг/м²" },
    { district: "VII", cities: "Чукотка, северные острова, отдельные прибрежные районы Дальнего Востока", pressure: "85 кг/м²" },
  ];

  const terrainTypes = [
    { type: "А", desc: "Открытые равнины, степи, тундра, пустыни, берега морей и озёр. Ветровое давление максимально." },
    { type: "В", desc: "Равнинная и холмистая местность с препятствиями высотой до 10 м (деревья, застройка). Стандартный тип." },
    { type: "С", desc: "Города с плотной застройкой высотой свыше 25 м. Ветровое давление снижается за счёт препятствий." },
  ];

  const influence = [
    "Высота и ширина здания",
    "Форма кровли (плоская, двускатная, арочная)",
    "Расположение в условиях местности (А, В, С)",
    "Наличие больших ворот и проёмов",
    "Конструктивная схема каркаса",
    "Крепление ограждающих конструкций",
  ];

  const faq = [
    {
      q: "Как узнать ветровой район участка?",
      a: "Ветровой район определяется по СП 20.13330.2016 «Нагрузки и воздействия». Можно использовать карту приложения Е или таблицу по ближайшему крупному городу. Для точного расчёта нужны координаты участка и тип местности.",
    },
    {
      q: "Что будет, если не учесть ветровую нагрузку?",
      a: "Недоучёт ветровой нагрузки может привести к деформации ферм, срыву кровли, повреждению ограждений и аварийному состоянию здания. Правильный расчёт — обязательное условие безопасности.",
    },
    {
      q: "Отличается ли ветровая нагрузка для ангаров и жилых домов?",
      a: "Да. Для быстровозводимых зданий с большими пролётами и высотой ветровая нагрузка может быть критичнее, чем для жилых домов. Также важны форма здания, наличие скатов кровли и расположение в условиях местности.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-28">
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                СП 20.13330.2016
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ветровой район: карта ветровых нагрузок России
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Определим ветровой район участка и рассчитаем ветровую нагрузку на ваше здание из металлоконструкций.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать конструкцию под ваш район
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Что такое ветровой район
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Ветровой район — это территориальное разделение России по величине нормативного ветрового давления. Всего выделяется семь районов (I–VII), где ветровое давление возрастает от 23 кг/м² до 85 кг/м².
              </p>
              <p className="text-muted leading-relaxed">
                Правильное определение ветрового района обязательно для расчёта устойчивости каркаса, ферм, кровли и ограждающих конструкций.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Таблица ветровых районов по городам
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Район</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Города</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Нормативное давление</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    {districts.map((row) => (
                      <tr key={row.district} className="border-b border-border last:border-b-0">
                        <td className="px-4 py-3 font-medium text-foreground">{row.district}</td>
                        <td className="px-4 py-3">{row.cities}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{row.pressure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Как определить ветровой район для строительства
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <MapPin size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">По координатам</h3>
                  <p className="text-sm text-muted">Укажите местоположение участка — определим район по СП 20.13330.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Buildings size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">По городу</h3>
                  <p className="text-sm text-muted">Используем ближайший крупный населённый пункт из таблицы районов.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                    <Calculator size={22} weight="bold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Расчёт</h3>
                  <p className="text-sm text-muted">Учитываем тип местности, высоту и форму здания для точного расчёта.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Влияние ветрового района на конструкцию здания
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {influence.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted text-sm p-3 rounded-lg border border-border bg-slate-50">
                    <Wind size={18} weight="bold" className="text-accent-blue flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Тип местности А/В/С и поправочные коэффициенты
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {terrainTypes.map((item) => (
                  <div key={item.type} className="p-5 rounded-xl border border-border bg-slate-50">
                    <div className="text-2xl font-bold text-foreground mb-2">{item.type}</div>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-3">
                * Коэффициенты учитывают высоту здания и тип местности. Для точного расчёта используется ПК LIRA-SAPR или SCAD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div key={item.q} className="p-5 rounded-xl border border-border bg-slate-50">
                    <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитаем конструкцию под ваш ветровой район
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — инженер определит ветровой район и подберёт каркас с учётом всех нагрузок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать конструкцию
              </a>
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
