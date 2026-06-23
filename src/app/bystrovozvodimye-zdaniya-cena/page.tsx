import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Быстровозводимые здания из металлоконструкций цена | МАКСТИЛ",
  description:
    "Быстровозводимые здания из металлоконструкций: цена за м², сроки, виды. Ангары, склады, цеха, магазины. Расчёт онлайн — заявка за 1 минуту.",
  keywords: [
    "быстровозводимые здания из металлоконструкций цена",
    "быстровозводимые здания цена",
    "ЛСТК здания цена",
    "быстровозводимые ангары цена",
    "склады из металлоконструкций цена",
    "цех из металлоконструкций",
  ],
  openGraph: {
    title: "Быстровозводимые здания из металлоконструкций цена",
    description: "Цены на быстровозводимые здания из металлоконструкций. Ангары, склады, цеха. Расчёт онлайн.",
    url: "https://lstkmk.ru/bystrovozvodimye-zdaniya-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/bystrovozvodimye-zdaniya-cena/",
  },
};

export default function LandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Быстровозводимые здания из металлоконструкций",
    description: "Проектирование, производство и строительство быстровозводимых зданий из металлоконструкций ЛСТК по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (980) 321-15-42",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 4 500 ₽/м²",
  };

  const stats = [
    { num: 250, suffix: "+", label: "Объектов построено" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 45, suffix: "", label: "Дней средний срок" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Холодный ангар", price: "от 4 500 ₽/м²", desc: "Каркас ЛСТК, профлист, кровля, ворота" },
    { type: "Тёплый склад", price: "от 5 600 ₽/м²", desc: "Сэндвич-панели, утепление, ворота" },
    { type: "Производственный цех", price: "от 5 600 ₽/м²", desc: "Усиленный каркас, краны, инженерия" },
    { type: "Автосервис / СТО", price: "от 4 800 ₽/м²", desc: "Тёплый контур, ворота, полы" },
    { type: "Сельхозздание", price: "от 4 600 ₽/м²", desc: "Каркас, кровля, ограждение, вентиляция" },
    { type: "Торговый павильон / магазин", price: "от 5 600 ₽/м²", desc: "Тёплый контур, витрины, отделка" },
  ];

  const advantages = [
    { title: "Скорость", text: "Средний срок строительства — 45 дней. Монтаж каркаса занимает 1–3 недели." },
    { title: "Экономия", text: "Дешевле капитального строительства на 30–50% при той же полезной площади." },
    { title: "Без сварки на площадке", text: "ЛСТК собирается на болтах — монтаж чистый, быстрый, безопасный." },
    { title: "Легко расширить", text: "Можно пристроить секцию или второй этаж без разрушения основного здания." },
    { title: "Долговечность", text: "Срок службы здания из ЛСТК — от 50 лет при правильной эксплуатации." },
  ];

  const steps = [
    { step: 1, title: "Заявка и расчёт", text: "Уточняем размеры, назначение, регион — даём предварительную цену за 30 минут." },
    { step: 2, title: "Проектирование", text: "Готовим КМ, КМД, разделы АР и ЭМ при необходимости." },
    { step: 3, title: "Производство", text: "Изготавливаем металлоконструкции на заводе с точностью до 1 мм." },
    { step: 4, title: "Фундамент и монтаж", text: "Заливаем фундамент, собираем каркас и ограждающие конструкции." },
    { step: 5, title: "Сдача", text: "Подключаем инженерию, проверяем здание, передаём документы." },
  ];

  const buildingTypes = [
    { name: "Ангары", desc: "Для техники, грузов, материалов и хранения." },
    { name: "Склады", desc: "Холодные, тёплые, класса А, с кран-балкой." },
    { name: "Коровники", desc: "С вентиляцией, утеплением и навозоудалением." },
    { name: "Цеха", desc: "Производственные здания с кранами и инженерией." },
    { name: "Автосервисы", desc: "СТО, мойки, шиномонтажи с высокими воротами." },
    { name: "Магазины и павильоны", desc: "Торговые и выставочные здания." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema />

      <main className="pt-28">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Цены 2026 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Быстровозводимые здания из металлоконструкций цена
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Строим быстровозводимые здания из металлоконструкций ЛСТК. Цены от 4 500 ₽/м², срок от 45 дней. Ангары, склады, цеха, автосервисы — под ключ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать стоимость здания
                </a>
                <a
                  href="tel:+79803211542"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                >
                  +7 (980) 321-15-42
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 lg:py-16 border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-6 border-t-2 border-accent-orange">
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground tabular-nums">
                    {stat.num}{stat.suffix}
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <div className="space-y-16">
              {/* INTRO */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Быстровозводимые здания из ЛСТК
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Быстровозводимые здания из металлоконструкций — это современный способ построить ангар, склад, цех или магазин в 2–3 раза быстрее, чем из кирпича или железобетона. Каркас собирается из готовых элементов, а ограждающие конструкции монтируются на болтах без сварки.
                </p>
                <p className="text-muted leading-relaxed">
                  МАКСТИЛ проектирует, производит и монтирует быстровозводимые здания с 2012 года. Собственный завод, инженерный отдел и монтажные бригады позволяют контролировать весь цикл и давать фиксированную цену в договоре.
                </p>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цена быстровозводимого здания за м²
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип здания</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена за м²</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Комплектация</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {priceTable.map((row) => (
                        <tr key={row.type} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-3 font-medium text-foreground">{row.type}</td>
                          <td className="px-4 py-3 whitespace-nowrap">{row.price}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-3">* Цены без НДС, фундамента и инженерных сетей. Точный расчёт после ТЗ и геологии.</p>
              </section>

              {/* ADVANTAGES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Почему выбирают быстровозводимые здания
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* STEPS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Как мы строим быстровозводимые здания
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

              {/* TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Виды быстровозводимых зданий
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {buildingTypes.map((item) => (
                    <div key={item.name} className="p-5 rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Рассчитать цену здания
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — инженер рассчитает стоимость и сроки под ваши размеры.
                </p>
                <a
                  href="/#calculator"
                  className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors mb-3"
                >
                  Рассчитать онлайн
                </a>
                <a
                  href="tel:+79803211542"
                  className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-foreground border border-border rounded-lg hover:bg-white transition-colors"
                >
                  +7 (980) 321-15-42
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте стоимость быстровозводимого здания
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — менеджер рассчитает цену за м² и подготовит коммерческое предложение под ваш объект.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="tel:+79803211542"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Позвонить
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
