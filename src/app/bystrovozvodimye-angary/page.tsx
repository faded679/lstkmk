import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Clock,
  Coins,
  Snowflake,
  ArrowsClockwise,
  CalendarCheck,
  Wrench,
  House,
  Garage,
  Tractor,
  Factory,
  Storefront,
  Basketball,
  Truck,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Быстровозводимые ангары из ЛСТК | МАКСТИЛ",
  description:
    "Строим быстровозводимые ангары из ЛСТК под ключ. Срок от 2 недель. Цены от 4 500 ₽/м². Холодные, тёплые, с кран-балкой, сельхоз. Работаем по всей России.",
  keywords: [
    "быстровозводимые ангары",
    "ангар из ЛСТК под ключ",
    "быстровозводимый ангар цена",
    "холодный ангар",
    "тёплый ангар",
    "ангар с кран-балкой",
  ],
  openGraph: {
    title: "Быстровозводимые ангары из ЛСТК под ключ",
    description: "Срок от 2 недель, цены от 4 500 ₽/м². Холодные, тёплые, сельхоз и производственные ангары.",
    url: "https://lstkmk.ru/bystrovozvodimye-angary/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/bystrovozvodimye-angary/",
  },
};

export default function BystrovozvodimyeAngaryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Быстровозводимые ангары из ЛСТК под ключ",
    description: "Проектирование, производство и монтаж быстровозводимых ангаров из ЛСТК любого назначения. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 4 500 ₽/м²",
  };


  const types = [
    {
      title: "Холодный ангар",
      price: "от 4 500 ₽/м²",
      desc: "Для хранения техники, сыпучих грузов, строительных материалов, сельхозинвентаря. Профлист, каркас ЛСТК, фундамент, ворота. Минимальная стоимость, максимальная скорость монтажа.",
    },
    {
      title: "Тёплый ангар",
      price: "от 5 600 ₽/м²",
      desc: "Для складов, производства, мастерских, торговли. Сэндвич-панели 100 мм, ворота, фундамент. Возможно подключение отопления и вентиляции.",
    },
    {
      title: "Ангар арочного типа",
      price: "от 4 500 ₽/м²",
      desc: "Без каркаса из прямых колонн, форма арки даёт большую внутреннюю высоту. Подходит для самолётов, вертолётов, спортзалов и крупной техники.",
    },
    {
      title: "Ангар с кран-балкой",
      price: "от 5 500 ₽/м²",
      desc: "Усиленный каркас ЛСТК под мостовые и подвесные краны. Для производства, металлообработки, сборочных работ. Расчёт нагрузок до 20 т.",
    },
    {
      title: "Ангар для сельского хозяйства",
      price: "от 4 500 ₽/м²",
      desc: "Для хранения зерна, удобрений, комбайнов, тракторов, кормов. Устойчив к агрессивной среде, легко моется, вентилируется.",
    },
  ];

  const sizes = [
    { size: "12×24 м", area: 288, price: "от 1 900 000 ₽" },
    { size: "15×30 м", area: 450, price: "от 2 800 000 ₽" },
    { size: "18×36 м", area: 648, price: "от 3 900 000 ₽" },
    { size: "20×40 м", area: 800, price: "от 4 500 000 ₽" },
  ];

  const advantages = [
    { icon: Clock, title: "Скорость", text: "Ангар 1 000 м² строим за 3 недели. Заводская готовность элементов до 95%." },
    { icon: Coins, title: "Экономия на фундаменте", text: "Лёгкий каркас ЛСТК снижает нагрузку на фундамент до 40% по сравнению с металлокаркасом." },
    { icon: Snowflake, title: "Всесезонность", text: "Сборка без сварки позволяет монтировать ангары круглый год, включая зимние морозы." },
    { icon: ArrowsClockwise, title: "Мобильность", text: "Ангар можно легко расширить, перестроить или демонтировать и перенести на другой участок." },
    { icon: CalendarCheck, title: "Долговечность от 50 лет", text: "Оцинкованный профиль ЛСТК не ржавеет и не требует покраски при правильной эксплуатации." },
    { icon: Wrench, title: "Без сварки на площадке", text: "Все детали изготовлены на заводе с точностью до 1 мм. Сборка — на болтовых узлах." },
  ];

  const applications = [
    { icon: House, title: "Склады", text: "Логистические, производственные и сельхозсклады." },
    { icon: Garage, title: "СТО и автосервисы", text: "Тёплые ангары для ремонта легковых и грузовых автомобилей." },
    { icon: Tractor, title: "Сельхозангары", text: "Хранение техники, зерна, кормов, удобрений." },
    { icon: Factory, title: "Производственные цеха", text: "Сборка, металлообработка, столярные и пищевые производства." },
    { icon: Storefront, title: "Торговые павильоны", text: "Выставочные залы, рыночные павильоны, магазины." },
    { icon: Basketball, title: "Спортивные сооружения", text: "Манежи, катки, теннисные корты, футбольные поля." },
    { icon: Truck, title: "Логистические терминалы", text: "Крупные пролёты и высокие ворота для фуры." },
  ];

  const terms = [
    { area: "До 500 м²", term: "2–3 недели" },
    { area: "500–1 000 м²", term: "3–5 недель" },
    { area: "1 000–2 000 м²", term: "5–8 недель" },
  ];

  const faq = [
    {
      q: "Чем быстровозводимый ангар отличается от капитального?",
      a: "Быстровозводимый ангар собирается из готовых заводских элементов на болтовых соединениях без сварки на площадке. Это в 2–3 раза быстрее и дешевле капитального строительства, не требует массивного фундамента и легко расширяется или переносится.",
    },
    {
      q: "Нужно ли разрешение на строительство быстровозводимого ангара?",
      a: "Для большинства ангаров площадью до 1 500 м² и высотой до 20 м достаточно уведомления по 152-ФЗ. Для крупных и ответственных объектов оформляется разрешение на строительство. Мы помогаем подготовить документацию.",
    },
    {
      q: "Можно ли утеплить ангар после строительства?",
      a: "Да. Холодный ангар из ЛСТК можно дооснастить сэндвич-панелями, утеплить кровлю, установить отопление и вентиляцию. Каркас ЛСТК легко адаптируется под изменение комплектации.",
    },
    {
      q: "Какая максимальная высота быстровозводимого ангара?",
      a: "Стандартная высота в коньке — 6–12 м. При необходимости проектируем ангары высотой до 15 м и более для размещения кран-балок, погрузчиков и крупногабаритной техники.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema items={faq} />

      <main className="pt-28">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Цены 2026 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Быстровозводимые ангары из ЛСТК под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим быстровозводимые ангары любого назначения. Срок строительства — от 2 недель. Цены от 4 500 ₽/м². Работаем по всей России.
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
              {/* TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Типы быстровозводимых ангаров
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {types.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted mb-3">{item.desc}</p>
                      <span className="text-sm font-semibold text-accent-blue">{item.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SIZES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Популярные размеры и цены
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Размер</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Площадь</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена под ключ</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {sizes.map((row) => (
                        <tr key={row.size} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-3 font-medium text-foreground">{row.size}</td>
                          <td className="px-4 py-3">{row.area} м²</td>
                          <td className="px-4 py-3 whitespace-nowrap font-medium text-foreground">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-3">
                  * Цена указана за холодный ангар под ключ: каркас ЛСТК, фундамент, профлист, кровля, ворота, монтаж.
                </p>
              </section>

              {/* ADVANTAGES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества быстровозводимых ангаров
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

              {/* APPLICATIONS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Где применяются
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {applications.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-5 rounded-xl border border-border flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-orange/10 text-accent-orange flex items-center justify-center flex-shrink-0">
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
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Узнать цену ангара
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте телефон и имя — инженер рассчитает стоимость под ваш размер и назначение.
                </p>
                <LeadForm comment="Заявка со страницы быстровозводимых ангаров" />
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите расчёт быстровозводимого ангара
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажите размеры и назначение ангара — подготовим коммерческое предложение с разбивкой по разделам.
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
