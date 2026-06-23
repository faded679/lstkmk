import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Металлоконструкции Белгород цена за тонну | МАКСТИЛ",
  description:
    "Металлоконструкции в Белгороде: цена за тонну, производство, монтаж. ЛСТК, колонны, фермы, связи. Рассчитайте стоимость — заявка онлайн.",
  keywords: [
    "металлоконструкции Белгород цена за тонну",
    "металлоконструкции Белгород",
    "цена металлоконструкций за тонну",
    "ЛСТК Белгород цена",
    "производство металлоконструкций Белгород",
    "заказать металлоконструкции Белгород",
  ],
  openGraph: {
    title: "Металлоконструкции Белгород цена за тонну",
    description: "Производство металлоконструкций в Белгороде. Цена за тонну, расчёт, монтаж. Гарантия 5 лет.",
    url: "https://lstkmk.ru/metallokonstrukcii-belgorod-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/metallokonstrukcii-belgorod-cena/",
  },
};

export default function LandingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "МАКСТИЛ — металлоконструкции в Белгороде",
    description: "Производство и продажа металлоконструкций ЛСТК в Белгороде. Цена за тонну, проектирование, доставка, монтаж.",
    url: "https://lstkmk.ru/metallokonstrukcii-belgorod-cena/",
    telephone: "+7 (980) 321-15-42",
    email: "maxsteel31@bk.ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Белгород",
      addressRegion: "Белгородская область",
      addressCountry: "RU",
    },
    areaServed: "Белгород, Белгородская область, ЦФО, РФ",
    priceRange: "от 95 000 ₽/тонну",
  };

  const stats = [
    { num: 500, suffix: "+", label: "Тонн металла в месяц" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 250, suffix: "+", label: "Объектов с нашими металлоконструкциями" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Каркас ЛСТК холодного ангара", price: "от 95 000 ₽/т", desc: "Колонны, ригели, фермы, связи" },
    { type: "Каркас тёплого здания", price: "от 110 000 ₽/т", desc: "С усилением под сэндвич-панели" },
    { type: "Металлокаркас с кран-балкой", price: "от 130 000 ₽/т", desc: "Усиленные колонны и подкрановые балки" },
    { type: "Несущие фермы пролётом 24–30 м", price: "от 125 000 ₽/т", desc: "Сварные или болтовые фермы" },
    { type: "Металлоконструкции по чертежам заказчика", price: "договорная", desc: "По вашему КМД, любая сложность" },
  ];

  const products = [
    { name: "Колонны ЛСТК", desc: "C- и Z-образные профили, оцинкованные или окрашенные." },
    { name: "Фермы и балки", desc: "Пролётом до 60 м, сварные и болтовые." },
    { name: "Связи и раскосы", desc: "Для стабильности каркаса, комплектация под проект." },
    { name: "Подкрановые балки", desc: "Для мостовых и подвесных кранов." },
    { name: "Арматурные изделия", desc: "Закладные детали, анкерные болты, пластины." },
  ];

  const advantages = [
    { title: "Собственный завод", text: "Производство в Белгородском районе. Современный профилегибочный стан и линия обработки." },
    { title: "Цена за тонну без посредников", text: "Производим сами — минимальные наценки. Рассчитываем стоимость по металлоёмкости проекта." },
    { title: "Проектирование КМ/КМД", text: "Инженеры-конструкторы готовят рабочую документацию для производства и монтажа." },
    { title: "Доставка и монтаж", text: "Доставляем по Белгородской области и РФ. Собственные монтажные бригады." },
    { title: "Сертифицированная сталь", text: "Работаем с металлом с сертификатами соответствия ГОСТ." },
  ];

  const steps = [
    { step: 1, title: "Отправка заявки или чертежей", text: "Принимаем ТЗ, эскизы, КМ или КМД для расчёта." },
    { step: 2, title: "Расчёт металлоёмкости и цены", text: "Считаем вес конструкций, стоимость материалов и обработки." },
    { step: 3, title: "Производство", text: "Резка, сверловка, грунтовка и окраска по КМД." },
    { step: 4, title: "Комплектация и доставка", text: "Маркируем элементы, упаковываем по секциям, доставляем на объект." },
    { step: 5, title: "Монтаж и сдача", text: "Собираем каркас на площадке, проводим испытания и сдаём объект." },
  ];

  const cities = [
    "Белгород", "Старый Оскол", "Губкин", "Шебекино", "Алексеевка", "Валуйки", "Короча", "Борисовка", "Ивня", "Красное", "Ракитянское", "Прохоровка", "Чернянка"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <FaqSchema />

      <main className="pt-28">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Производство в Белгороде
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Металлоконструкции в Белгороде цена за тонну
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Производим металлоконструкции ЛСТК и металлокаркасы в Белгороде. Цена от 95 000 ₽ за тонну. Проектирование, доставка, монтаж. Рассчитаем по вашим чертежам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать металлоконструкции
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
                  Производство металлоконструкций в Белгороде
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  МАКСТИЛ производит металлоконструкции ЛСТК и тяжёлые металлокаркасы на собственном заводе в Белгородском районе. Производительность — до 500 тонн в месяц. Работаем с рулонной оцинкованной сталью, горячекатаным прокатом и по чертежам заказчика.
                </p>
                <p className="text-muted leading-relaxed">
                  Производим колонны, ригели, фермы, связи, подкрановые балки, закладные детали и анкерные болты. Все элементы маркируются по КМД и комплектуются по секциям здания для удобного монтажа.
                </p>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цена металлоконструкций за тонну
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип конструкции</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена за тонну</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Состав</th>
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
                <p className="text-xs text-muted mt-3">* Цены указаны без НДС. Точная стоимость зависит от металлоёмкости, сложности узлов и объёма партии.</p>
              </section>

              {/* PRODUCTS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Что производим
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div key={product.name} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHY WE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Почему заказывают металлоконструкции у МАКСТИЛ
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
                  Как заказать металлоконструкции
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

              {/* CITIES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Доставка и монтаж по Белгородской области
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Поставляем металлоконструкции в Белгород и близлежащие города. Собственный транспорт и монтажные бригады снижают сроки и стоимость:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span key={city} className="px-3 py-1.5 rounded-full bg-slate-100 text-sm text-muted">
                      {city}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Рассчитать металлоконструкции
                </h3>
                <p className="text-sm text-muted mb-5">
                  Отправьте чертежи или размеры — инженер рассчитает вес, цену за тонну и сроки производства.
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
              Узнайте цену металлоконструкций за тонну
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — менеджер рассчитает стоимость по вашему проекту и сроки производства в Белгороде.
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
