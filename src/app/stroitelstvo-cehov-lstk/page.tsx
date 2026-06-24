import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import {
  Clock,
  Coins,
  ArrowsOut,
  Snowflake,
  Wrench,
  Ruler,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Строительство цехов из ЛСТК под ключ | МАКСТИЛ",
  description:
    "Проектируем и строим производственные цеха из ЛСТК под ключ. Цены от 4 500 ₽/м². Проект, фундамент, каркас, монтаж, сдача. Срок от 3 недель.",
  keywords: [
    "лстк строительство цехов под ключ",
    "цех из ЛСТК под ключ",
    "производственный цех ЛСТК",
    "строительство цеха цена",
    "цех из металлоконструкций",
    "ЛСТК цех",
  ],
  openGraph: {
    title: "Строительство цехов из ЛСТК под ключ",
    description: "Производственные цеха из ЛСТК от 4 500 ₽/м². Проект, фундамент, каркас, монтаж, сдача.",
    url: "https://lstkmk.ru/stroitelstvo-cehov-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/stroitelstvo-cehov-lstk/",
  },
};

export default function CehLandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство цехов из ЛСТК под ключ",
    description:
      "Проектирование, производство и монтаж производственных цехов из лёгких стальных тонкостенных конструкций. Работаем по всей России.",
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
    priceRange: "от 4 500 ₽/м²",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли поставить мостовой кран в цехе из ЛСТК?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Каркас ЛСТК может быть рассчитан на крановые нагрузки до 20 т и более. Мы усиливаем фермы, колонны и фундамент под конкретную грузоподъёмность и тип крана. Это заранее закладывается в проект КМ/КМД.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли разрешение на строительство цеха?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для большинства быстровозводимых цехов площадью до 1 500 м² и высотой до 20 м достаточно уведомления о начале строительства по 152-ФЗ. Для крупных и ответственных объектов требуется разрешение на строительство. Мы готовим документацию и помогаем согласовать проект.",
        },
      },
      {
        "@type": "Question",
        name: "Чем ЛСТК-цех отличается от цеха из сэндвич-панелей?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ЛСТК — это несущий каркас, а сэндвич-панели — это ограждающие конструкции. Цех из ЛСТК может быть облицован сэндвич-панелями, профлистом или комбинированным фасадом. Технология ЛСТК выигрывает по скорости монтажа, весу и стоимости фундамента.",
        },
      },
      {
        "@type": "Question",
        name: "Какая минимальная и максимальная площадь цеха?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Минимальная экономически целесообразная площадь — от 200–300 м². Максимальная практически не ограничена: строим цеха и заводы площадью 5 000–10 000 м² и более. Пролёты без промежуточных колонн — до 30–36 м.",
        },
      },
    ],
  };

  const workshopTypes = [
    {
      title: "Производственный цех",
      desc: "Для лёгкой промышленности: сборка, упаковка, мелкосерийное производство. Высота 6–9 м, возможно размещение кран-балки. Цены от 4 500 ₽/м².",
    },
    {
      title: "Сборочный цех",
      desc: "Просторный пролёт без колонн для сборочных линий. Хорошая естественная и искусственная вентиляция. Цены от 5 600 ₽/м².",
    },
    {
      title: "Цех металлообработки",
      desc: "Усиленный каркас под станки, прессы, крановые нагрузки. Бетонные полы с армированием. Цены от 6 000 ₽/м².",
    },
    {
      title: "Столярный цех",
      desc: "Тёплый контур, пылеулавливание, сухой микроклимат. Подходит для деревообработки и мебельного производства. Цены от 5 600 ₽/м².",
    },
    {
      title: "Цех пищевого производства",
      desc: "Герметичные сэндвич-панели, моечные покрытия, вентиляция и кондиционирование. Соответствие санитарным нормам. Цены от 7 000 ₽/м².",
    },
    {
      title: "Ремонтный цех (СТО, автосервис)",
      desc: "Высота 5–7 м, ворота под грузовой и легковой транспорт, ямы, эстакады. Цены от 5 000 ₽/м².",
    },
  ];

  const priceTable = [
    {
      type: "Холодный цех (профлист)",
      price: "от 4 500 ₽/м²",
      desc: "Каркас ЛСТК, фундамент, ограждение из профилированного листа, кровля, монтаж, ворота.",
    },
    {
      type: "Тёплый цех (сэндвич 100 мм)",
      price: "от 5 600 ₽/м²",
      desc: "Каркас ЛСТК, фундамент, сэндвич-панели стен и кровли, ворота, монтаж.",
    },
    {
      type: "Цех с отоплением и вентиляцией",
      price: "от 7 000 ₽/м²",
      desc: "Всё включено тёплого цеха плюс отопление, вентиляция, электрика, внутренние инженерные сети.",
    },
  ];

  const terms = [
    { area: "Цех 500 м²", term: "3–4 недели" },
    { area: "Цех 1 000 м²", term: "5–6 недель" },
    { area: "Цех 2 000 м²", term: "8–10 недель" },
  ];

  const advantages = [
    { icon: Clock, title: "Скорость", text: "Монтаж каркаса в 2–3 раза быстрее традиционного строительства. Цех 1 000 м² — за 5–6 недель." },
    { icon: Coins, title: "Экономия на фундаменте", text: "Лёгкий каркас ЛСТК в 3–4 раза легче металлокаркаса. Снижаем нагрузку на фундамент и его стоимость." },
    { icon: ArrowsOut, title: "Возможность расширения", text: "Цех легко достроить, пристроить пролёт или увеличить площадь без демонтажа основного здания." },
    { icon: Snowflake, title: "Монтаж зимой", text: "Сборка болтовыми узлами без сварки позволяет вести работы круглый год, включая морозы." },
    { icon: Wrench, title: "Отсутствие сварки на площадке", text: "Все детали изготавливаются на заводе с точностью до 1 мм. На участке — только сборка и крепление." },
    { icon: Ruler, title: "Большой пролёт без колонн", text: "Пролёты до 30–36 м без промежуточных опор. Удобно для размещения линий, кранов и техники." },
  ];

  const faq = [
    {
      q: "Можно ли поставить мостовой кран в цехе из ЛСТК?",
      a: "Да. Каркас ЛСТК может быть рассчитан на крановые нагрузки до 20 т и более. Мы усиливаем фермы, колонны и фундамент под конкретную грузоподъёмность и тип крана. Это заранее закладывается в проект КМ/КМД.",
    },
    {
      q: "Нужно ли разрешение на строительство цеха?",
      a: "Для большинства быстровозводимых цехов площадью до 1 500 м² и высотой до 20 м достаточно уведомления о начале строительства по 152-ФЗ. Для крупных и ответственных объектов требуется разрешение на строительство. Мы готовим документацию и помогаем согласовать проект.",
    },
    {
      q: "Чем ЛСТК-цех отличается от цеха из сэндвич-панелей?",
      a: "ЛСТК — это несущий каркас, а сэндвич-панели — это ограждающие конструкции. Цех из ЛСТК может быть облицован сэндвич-панелями, профлистом или комбинированным фасадом. Технология ЛСТК выигрывает по скорости монтажа, весу и стоимости фундамента.",
    },
    {
      q: "Какая минимальная и максимальная площадь цеха?",
      a: "Минимальная экономически целесообразная площадь — от 200–300 м². Максимальная практически не ограничена: строим цеха и заводы площадью 5 000–10 000 м² и более. Пролёты без промежуточных колонн — до 30–36 м.",
    },
  ];

  const steps = [
    { step: 1, title: "Заявка", text: "Оставляете заявку или звоните. Менеджер уточняет площадь, назначение, регион и бюджет." },
    { step: 2, title: "Проект", text: "Инженер выезжает на объект, делаем замеры и геологию, готовим проект КМ/КМД и смету." },
    { step: 3, title: "Строительство", text: "Производим каркас, заливаем фундамент, монтируем здание, устанавливаем инженерию." },
    { step: 4, title: "Сдача", text: "Подписываем акт, передаём документацию, даём гарантию 5 лет на конструкции." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-28">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Цены 2026 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Строительство цехов из ЛСТК под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим производственные цеха из лёгких стальных тонкостенных конструкций. Полный цикл: проект → фундамент → каркас → сдача. Цены от 4 500 ₽/м².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать стоимость цеха
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
              {/* TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Виды цехов, которые мы строим
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {workshopTypes.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цены на строительство цеха из ЛСТК
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Комплектация</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена за м²</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Что входит</th>
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
                <p className="text-xs text-muted mt-3">
                  * Фундамент рассчитывается после геологии участка. Инженерные сети — по отдельной смете.
                </p>
              </section>

              {/* TERMS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Сроки строительства
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {terms.map((item) => (
                    <div key={item.area} className="p-5 rounded-xl border border-border text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">{item.area}</div>
                      <div className="text-sm text-muted">{item.term}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ADVANTAGES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества ЛСТК для цеха
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

              {/* FAQ */}
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

              {/* STEPS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Как заказать строительство цеха
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
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Узнать цену цеха
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте телефон и имя — инженер рассчитает стоимость под ваш размер и комплектацию.
                </p>
                <LeadForm comment="Заявка со страницы строительства цехов ЛСТК" />
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите точный расчёт цеха из ЛСТК
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажите размеры и назначение цеха — подготовим коммерческое предложение с разбивкой по разделам.
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
