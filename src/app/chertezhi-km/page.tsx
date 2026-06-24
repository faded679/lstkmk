import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import {
  Blueprint,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Чертежи КМ: конструктивные решения металлоконструкций | МАКСТИЛ",
  description:
    "Разработка чертежей КМ (конструктивные решения металлоконструкций). Состав, этапы, требования СП и ГОСТ. Закажите разработку КМ у МАКСТИЛ.",
  keywords: [
    "чертежи км",
    "км чертежи",
    "чертеж км",
    "км в строительстве",
    "раздел км",
    "конструктивные решения металлоконструкций",
  ],
  openGraph: {
    title: "Чертежи КМ: конструктивные решения металлоконструкций",
    description: "Разработка чертежей КМ. Состав, этапы, требования СП и ГОСТ.",
    url: "https://lstkmk.ru/chertezhi-km/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/chertezhi-km/",
  },
};

export default function ChertezhiKmPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Разработка чертежей КМ",
    description: "Конструктивные решения металлоконструкций для ангаров, складов, цехов и быстровозводимых зданий. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 50 000 ₽",
  };

  const composition = [
    { title: "Общие данные", text: "Титульный лист, пояснительная записка, перечень чертежей, спецификация используемых профилей." },
    { title: "Схемы расположения", text: "Генплан, планы, разрезы и фасады с привязкой металлоконструкций к осям." },
    { title: "Узлы и сечения", text: "Соединения колонн с фермами, крепление ригелей, фундаментные закладные, опорные детали." },
    { title: "Спецификация металлоконструкций", text: "Таблица элементов с марками, количеством, длиной, массой и профилем." },
  ];

  const steps = [
    { step: 1, title: "Сбор исходных данных", text: "Получаем архитектурный раздел, геологию, геодезию, ТЗ на здание." },
    { step: 2, title: "Расчёт нагрузок", text: "Определяем постоянные, временные, снеговые, ветровые, крановые и технологические нагрузки." },
    { step: 3, title: "Моделирование каркаса", text: "Создаём расчётную схему в ПК LIRA-SAPR, SCAD или Tekla. Подбираем сечения профилей." },
    { step: 4, title: "Разработка чертежей", text: "Формируем планы, разрезы, схемы, узлы, спецификации по ГОСТ 21.1101-2013." },
    { step: 5, title: "Согласование и экспертиза", text: "Корректируем чертежи по замечаниям заказчика и проходим экспертизу при необходимости." },
  ];

  const requirements = [
    "ГОСТ 21.1101-2013 — Система проектной документации для строительства",
    "СП 16.13330.2017 — Стальные конструкции",
    "СП 20.13330.2016 — Нагрузки и воздействия",
    "СП 70.13330.2012 — Несущие и ограждающие конструкции",
    "ГОСТ 23118-2019 — Стальные конструкции зданий. Общие технические условия",
    "ГОСТ 27751-2014 — Надёжность строительных конструкций",
  ];

  const faq = [
    {
      q: "Чем КМ отличается от КМД?",
      a: "КМ — это конструктивные решения металлоконструкций: схемы расположения, нагрузки, принципиальные узлы. КМД — деталировочные чертежи для изготовления: каждая деталь с размерами, отверстиями и маркировкой. КМ делается перед КМД.",
    },
    {
      q: "Кто разрабатывает чертежи КМ?",
      a: "Чертежи КМ разрабатывают проектные организации и конструкторские отделы застройщиков с допуском СРО. В МАКСТИЛ разработку КМ и КМД ведут инженеры-конструкторы с опытом проектирования быстровозводимых зданий.",
    },
    {
      q: "Сколько стоит разработка КМ?",
      a: "Стоимость разработки КМ зависит от площади, сложности и наличия исходных данных. В среднем для ангара или цеха площадью 1 000 м² — от 50 000 до 150 000 ₽. Точную цену рассчитываем после технического задания.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema items={faq} />

      <main className="pt-28">
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Проектирование
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Чертежи КМ: конструктивные решения металлоконструкций
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Разработка раздела КМ для ангаров, складов, цехов и быстровозводимых зданий. Подготовим схемы, узлы, спецификации и расчётную модель каркаса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+79606322061"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Заказать разработку КМ
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Что такое КМ и зачем нужен раздел
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                КМ (конструктивные решения металлоконструкций) — это раздел проектной документации, который описывает несущий каркас здания из стали. В разделе КМ указываются схемы расположения колонн, ферм, ригелей, балок, узлы соединений, фундаментные закладные, спецификации и расчётные обоснования.
              </p>
              <p className="text-muted leading-relaxed">
                Без чертежей КМ невозможно изготовить и смонтировать металлокаркас. КМ также служит основой для раздела КМД — деталировочных чертежей, по которым завод изготавливает каждую деталь.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Состав чертежей КМ
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {composition.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                      <Blueprint size={22} weight="bold" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Этапы разработки КМ
              </h2>
              <div className="space-y-4">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Требования СП и ГОСТ к чертежам КМ
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {requirements.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted text-sm">
                    <CheckCircle size={18} weight="bold" className="text-accent-blue flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Примеры чертежей КМ
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <h3 className="font-semibold text-foreground mb-2">Ангар 24×48 м</h3>
                  <p className="text-sm text-muted">План ферм, разрез, схема колонн шагом 6 м, узлы крепления ферм к колоннам.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <h3 className="font-semibold text-foreground mb-2">Склад 30×60 м</h3>
                  <p className="text-sm text-muted">Схема расположения ригелей, разрезы по торцам, фундаментные закладные под колонны.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-slate-50">
                  <h3 className="font-semibold text-foreground mb-2">Цех с кран-балкой</h3>
                  <p className="text-sm text-muted">Усиленные фермы, расчёт на крановые нагрузки, схема крепления крановой балки.</p>
                </div>
              </div>
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
              Закажите разработку чертежей КМ
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Подготовим полный раздел КМ для вашего здания из металлоконструкций. Сроки — от 3 рабочих дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Заказать разработку КМ
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
