import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import {
  Thermometer,
  Snowflake,
  Clock,
  Coins,
  ShieldCheck,
  ArrowsOut,
  Wrench,
  House,
  Factory,
  Warehouse,
  Wrench as WrenchIcon,
  Plant,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар из сэндвич-панелей под ключ: цена за м² в 2026 году | МАКСТИЛ",
  description:
    "Строим ангары из сэндвич-панелей под ключ. Каркас ЛСТК. Цены от 5 600 ₽/м². Срок 2-4 недели. Склады, цеха, СТО, сельхоз. Работаем по всей России.",
  keywords: [
    "ангар из сэндвич-панелей",
    "ангар из сэндвич панелей цена",
    "ангар сэндвич под ключ",
    "теплый ангар из сэндвич панелей",
    "склад из сэндвич панелей",
  ],
  openGraph: {
    title: "Ангар из сэндвич-панелей под ключ: цена за м² в 2026 году",
    description: "Цены от 5 600 ₽/м², срок 2-4 недели. Каркас ЛСТК, сэндвич-панели, монтаж.",
    url: "https://lstkmk.ru/angar-iz-sendvich-panelej-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/angar-iz-sendvich-panelej-cena/",
  },
};

export default function AngarSendvichPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ангар из сэндвич-панелей под ключ",
    description: "Проектирование, производство и монтаж тёплых ангаров из сэндвич-панелей на каркасе ЛСТК. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 5 600 ₽/м²",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит ангар из сэндвич-панелей за м²?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цена ангара из сэндвич-панелей зависит от площади и типа. По калькулятору МАКСТИЛ: от 5 600 ₽/м² для больших площадей до 9 400 ₽/м² для малых. Точная цена рассчитывается после замеров и технического задания.",
        },
      },
      {
        "@type": "Question",
        name: "Какой срок строительства ангара из сэндвич-панелей?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Срок строительства ангара из сэндвич-панелей — от 2 до 4 недель в зависимости от площади. Ангар 500 м² строится за 2–3 недели, 1 000 м² — за 3–4 недели.",
        },
      },
      {
        "@type": "Question",
        name: "Какая толщина сэндвич-панелей нужна для ангара?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для умеренного климата достаточно 100 мм. Для холодных регионов и круглогодичного отопления — 150–200 мм. Толщина влияет на теплозащиту и конечную цену.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли строить ангар из сэндвич-панелей зимой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Каркас ЛСТК собирается на болтовых соединениях без сварки. Монтаж сэндвич-панелей также возможен при отрицательных температурах. Главное — правильная герметизация стыков.",
        },
      },
    ],
  };

  const sizes = [
    { size: "100 м²", price: "от 5 600 ₽/м²", total: "от 560 000 ₽", desc: "Малый склад, гараж, мастерская." },
    { size: "300 м²", price: "от 6 500 ₽/м²", total: "от 1 950 000 ₽", desc: "Склад, СТО, небольшой цех." },
    { size: "600 м²", price: "от 5 900 ₽/м²", total: "от 3 540 000 ₽", desc: "Производство, логистика, сельхоз." },
    { size: "1 000 м²", price: "от 5 600 ₽/м²", total: "от 5 600 000 ₽", desc: "Крупный склад или производственный цех." },
  ];

  const types = [
    { icon: Warehouse, title: "Склад", desc: "Тёплый склад с высокими воротами для фуры." },
    { icon: Factory, title: "Цех", desc: "Производственное помещение с отоплением и вентиляцией." },
    { icon: WrenchIcon, title: "СТО / Автосервис", desc: "Тёплый ангар для ремонта и обслуживания." },
    { icon: Plant, title: "Сельхоз", desc: "Тёплые хранилища, коровники, свинарники." },
  ];

  const advantages = [
    { icon: Thermometer, title: "Тёплый контур", text: "Сэндвич-панели обеспечивают теплоизоляцию и энергоэффективность." },
    { icon: Clock, title: "Быстро", text: "Ангар 1 000 м² из сэндвич-панелей строится за 3–4 недели." },
    { icon: Coins, title: "Экономия", text: "Каркас ЛСТК легче и дешевле металлокаркаса." },
    { icon: ShieldCheck, title: "Долговечность", text: "Гарантия 5 лет. Срок службы от 50 лет." },
    { icon: ArrowsOut, title: "Расширяемость", text: "Легко пристроить ещё один пролёт." },
    { icon: Snowflake, title: "Зимний монтаж", text: "Сборка без мокрых процессов круглый год." },
  ];

  const faq = [
    {
      q: "Сколько стоит ангар из сэндвич-панелей за м²?",
      a: "Цена ангара из сэндвич-панелей зависит от площади и типа. По калькулятору МАКСТИЛ: от 5 600 ₽/м² для больших площадей до 9 400 ₽/м² для малых. Точная цена рассчитывается после замеров и технического задания.",
    },
    {
      q: "Какой срок строительства ангара из сэндвич-панелей?",
      a: "Срок строительства ангара из сэндвич-панелей — от 2 до 4 недель в зависимости от площади. Ангар 500 м² строится за 2–3 недели, 1 000 м² — за 3–4 недели.",
    },
    {
      q: "Какая толщина сэндвич-панелей нужна для ангара?",
      a: "Для умеренного климата достаточно 100 мм. Для холодных регионов и круглогодичного отопления — 150–200 мм. Толщина влияет на теплозащиту и конечную цену.",
    },
    {
      q: "Можно ли строить ангар из сэндвич-панелей зимой?",
      a: "Да. Каркас ЛСТК собирается на болтовых соединениях без сварки. Монтаж сэндвич-панелей также возможен при отрицательных температурах. Главное — правильная герметизация стыков.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-28">
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Цены 2026 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ангар из сэндвич-панелей под ключ: цена за м²
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Строим ангары из сэндвич-панелей. Каркас ЛСТК. Цены от 5 600 ₽/м². Срок 2-4 недели.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать цену ангара
                </a>
                <a
                  href="tel:+79606322061"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                >
                  +7 (960) 632-20-61
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цены на ангар из сэндвич-панелей по площади
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Площадь</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена за м²</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Примерная стоимость</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Назначение</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {sizes.map((row) => (
                        <tr key={row.size} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-3 font-medium text-foreground">{row.size}</td>
                          <td className="px-4 py-3 whitespace-nowrap">{row.price}</td>
                          <td className="px-4 py-3 whitespace-nowrap">{row.total}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-3">
                  * Цены указаны за каркас ЛСТК, сэндвич-панели, кровлю, фундамент, ворота, монтаж. Точная стоимость рассчитывается после замеров.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Виды ангаров из сэндвич-панелей
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {types.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50 text-center">
                        <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mx-auto mb-3">
                          <Icon size={22} weight="bold" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества ангара из сэндвич-панелей
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50 flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0">
                          <Icon size={22} weight="bold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
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

            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Узнать цену ангара
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте телефон и имя — инженер рассчитает стоимость ангара из сэндвич-панелей.
                </p>
                <LeadForm comment="Заявка со страницы ангара из сэндвич-панелей" />
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите расчёт ангара из сэндвич-панелей
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажите размеры и назначение ангара — подготовим коммерческое предложение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="tel:+79606322061"
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
