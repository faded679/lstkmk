import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Строительство складов из металлоконструкций под ключ | МАКСТИЛ",
  description:
    "Строим склады из металлоконструкций под ключ. Проектирование, фундамент, каркас ЛСТК, сэндвич-панели. Цены от 4 500 ₽/м². Расчёт онлайн.",
  keywords: [
    "строительство складов из металлоконструкций под ключ",
    "склады из металлоконструкций",
    "склад из ЛСТК",
    "строительство склада под ключ",
    "склад быстровозводимый",
    "склад цена за м²",
  ],
  openGraph: {
    title: "Строительство складов из металлоконструкций под ключ",
    description: "Склады из металлоконструкций под ключ. Проектирование, производство, монтаж. Цены от 4 500 ₽/м².",
    url: "https://lstkmk.ru/stroitelstvo-skladov-iz-metallokonstrukcij/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/stroitelstvo-skladov-iz-metallokonstrukcij/",
  },
};

export default function LandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство складов из металлоконструкций под ключ",
    description: "Проектирование, производство и монтаж складов из металлоконструкций ЛСТК по всей России.",
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
    { num: 120, suffix: "+", label: "Складов построено" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 45, suffix: "", label: "Дней средний срок" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Склад холодный (профлист)", price: "от 4 500 ₽/м²", desc: "Каркас ЛСТК, кровля, ворота" },
    { type: "Склад тёплый (сэндвич 100 мм)", price: "от 5 600 ₽/м²", desc: "Утепление, ворота, окна" },
    { type: "Склад класса А", price: "от 5 600 ₽/м²", desc: "Повышенная теплоизоляция, освещение, пожарная безопасность" },
    { type: "Склад с кран-балкой", price: "от 4 800 ₽/м²", desc: "Усиленный каркас, подкрановые пути" },
    { type: "Мини-склад до 300 м²", price: "от 5 600 ₽/м²", desc: "Быстрый монтаж, минимальный фундамент" },
  ];

  const advantages = [
    { title: "Проект под ключ", text: "Проектируем КМ, КМД, делаем фундамент, каркас, кровлю и ворота." },
    { title: "Быстрые сроки", text: "Склад 1000 м² возводим за 60–90 дней — в 3 раза быстрее кирпича." },
    { title: "Гибкие планировки", text: "Пролёты до 60 м без колонн. Ширина, длина и высота под ваш стеллаж." },
    { title: "Экономия", text: "ЛСТК дешевле кирпича и железобетона на 30–40% при той же площади." },
  ];

  const steps = [
    { step: 1, title: "Замер и анализ", text: "Выезжаем на участок, изучаем грунты, УГВ, подъездные пути." },
    { step: 2, title: "Проектирование", text: "Готовим планировку, расчёт каркаса, ворот, стеллажей, инженерии." },
    { step: 3, title: "Фундамент и каркас", text: "Заливаем фундамент, производим и монтируем металлоконструкции." },
    { step: 4, title: "Ограждение и кровля", text: "Монтируем сэндвич-панели или профлист, кровлю, ворота." },
    { step: 5, title: "Сдача", text: "Проверяем геометрию, запускаем инженерию, передаём документацию." },
  ];

  const warehouseTypes = [
    { name: "Холодные склады", desc: "Для негигроскопичных грузов: стройматериалы, техника, металл." },
    { name: "Тёплые склады", desc: "С утеплением 100–200 мм для хранения товаров при положительной температуре." },
    { name: "Склады класса А", desc: "Современные логистические центры с высокими потолками и пожаротушением." },
    { name: "Сельхозсклады", desc: "Для зерна, удобрений, кормов и техники." },
    { name: "Производственно-складские", desc: "Совмещают производство и хранение на одной площадке." },
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
                Склады под ключ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Строительство складов из металлоконструкций под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим склады из металлоконструкций ЛСТК. Холодные, тёплые, класса А, с кран-балкой. От 4 500 ₽/м², срок от 45 дней.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать склад
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
                  Склады из металлоконструкций: быстро и надёжно
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Склады из металлоконструкций ЛСТК — оптимальное решение для логистики, производства и сельского хозяйства. Технология позволяет строить большие пролёты без колонн, сокращает сроки и снижает стоимость по сравнению с кирпичом или железобетоном.
                </p>
                <p className="text-muted leading-relaxed">
                  МАКСТИЛ строит склады площадью от 100 до 50 000 м². Проектируем под стеллажи, погрузчики, краны и специфику хранимых грузов.
                </p>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Стоимость строительства склада за м²
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип склада</th>
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
                  Почему выбирают склады из ЛСТК
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
                  Этапы строительства склада
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

              {/* WAREHOUSE TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Виды складов, которые строим
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {warehouseTypes.map((item) => (
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
                  Рассчитать стоимость склада
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — инженер рассчитает цену склада под ваши размеры и комплектацию.
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
              Построим склад из металлоконструкций под ключ
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — рассчитаем проект, смету и сроки строительства склада под ваш бизнес.
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
