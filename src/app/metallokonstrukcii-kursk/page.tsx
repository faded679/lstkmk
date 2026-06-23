import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Металлоконструкции в Курске и области под ключ | МАКСТИЛ",
  description:
    "Проектирование, производство и монтаж металлоконструкций в Курске и Курской области. Цены от 12 000 ₽/м². Узнайте стоимость и сроки — оставьте заявку.",
  keywords: [
    "металлоконструкции в Курске",
    "металлоконструкции Курск цена",
    "металлоконструкции Курская область",
    "производство металлоконструкций Курск",
    "монтаж металлоконструкций Курск",
    "ЛСТК Курск",
  ],
  openGraph: {
    title: "Металлоконструкции в Курске и области под ключ цена",
    description: "Металлоконструкции в Курске и Курской области. Цены, сроки, гарантия. Заявка онлайн.",
    url: "https://lstkmk.ru/metallokonstrukcii-kursk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/metallokonstrukcii-kursk/",
  },
};

export default function LandingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "МАКСТИЛ — металлоконструкции в Курске",
    description: "Проектирование, производство и монтаж металлоконструкций, складов, ангаров и быстровозводимых зданий в Курске и области.",
    url: "https://lstkmk.ru/metallokonstrukcii-kursk/",
    telephone: "+7 (980) 321-15-42",
    email: "info@lstkmk.ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Курск",
      addressRegion: "Курская область",
      addressCountry: "RU",
    },
    areaServed: "Курск, Курская область, ЦФО, РФ",
    priceRange: "от 12 000 ₽/м²",
  };

  const stats = [
    { num: 250, suffix: "+", label: "Объектов построено" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 45, suffix: "", label: "Дней средний срок" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Каркас ЛСТК", price: "от 12 000 ₽/м²", includes: "Колонны, фермы, связи, прогоны" },
    { type: "Металлокаркас под ключ", price: "от 18 000 ₽/м²", includes: "Каркас, кровля, ограждение, монтаж" },
    { type: "Конструкции с кран-балкой", price: "от 22 000 ₽/м²", includes: "Усиленный каркас, кран, монтаж" },
    { type: "Сельхоз металлоконструкции", price: "от 11 000 ₽/м²", includes: "Каркас, кровля, ограждение" },
  ];

  const advantages = [
    { title: "Собственное производство", text: "Завод в Белгородском районе. Собственный цех резки, сверления и грунтовки металлоконструкций. Доставка в Курскую область — 1–2 дня." },
    { title: "Проектирование и согласование", text: "Разделы КМ, КМД, АР, ЭМ. Помогаем с разрешительной документацией в Курске." },
    { title: "Монтаж бригадами из региона", text: "Знаем грунты, ветровой и снеговой районы Курской области. Работаем круглый год." },
    { title: "Фиксированная смета", text: "Цена прописана в договоре. Никаких неожиданных доплат в процессе производства и монтажа." },
    { title: "Гарантия 5 лет", text: "На конструкции и узлы. Сервисное обслуживание после сдачи объекта." },
  ];

  const steps = [
    { step: 1, title: "Заявка и замер", text: "Оставляете заявку, инженер выезжает на площадку в Курске или области бесплатно." },
    { step: 2, title: "Проект и смета", text: "Готовим КМ/КМД, рассчитываем металлоконструкции, фундамент и монтаж." },
    { step: 3, title: "Производство", text: "Изготавливаем металлоконструкции на заводе. Контроль качества на каждом этапе." },
    { step: 4, title: "Доставка и монтаж", text: "Доставляем конструкции в Курскую область, собираем каркас на вашем участке." },
    { step: 5, title: "Сдача объекта", text: "Исполнительная документация, подписание акта, гарантия." },
  ];

  const objects = [
    { name: "Склады", desc: "От 200 м², холодные и тёплые, с воротами и стеллажами." },
    { name: "Ангары", desc: "Для техники, грузовых автомобилей, материалов." },
    { name: "Коровники", desc: "С вентиляцией, утеплением и системами навозоудаления." },
    { name: "Цеха", desc: "Производственные здания с кранами и инженерией." },
    { name: "Автосервисы", desc: "СТО, мойки, шиномонтажи с нужной высотой ворот." },
  ];

  const cities = [
    "Курск", "Железногорск", "Курчатов", "Льгов", "Рыльск", "Щигры", "Обоянь", "Суджа", "Дмитриев", "Фатеж", "Конышёвка"
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
                Металлоконструкции в Курске и области
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Металлоконструкции в Курске под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем, производим и монтируем металлоконструкции для складов, ангаров, цехов и сельхозобъектов в Курске и Курской области. Цены от 12 000 ₽/м², срок от 45 дней, гарантия 5 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <div className="space-y-16">
              {/* INTRO */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Металлоконструкции в Курске — проект, цена, монтаж
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  МАКСТИЛ производит металлоконструкции для объектов в Курске и Курской области с 2012 года. Работаем со складами, ангарами, сельхоззданиями, производственными цехами, автосервисами и СТО. Собственное производство металлоконструкций ЛСТК позволяет контролировать качество и сроки на каждом этапе.
                </p>
                <p className="text-muted leading-relaxed">
                  Для Курской области учитываем снеговой район III, ветровой район II, глубину промерзания 0,9–1,1 м и типы грунтов. Это влияет на проектирование каркаса, фундамента и креплений, поэтому типовые решения адаптируем под каждый участок.
                </p>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Стоимость металлоконструкций в Курске
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип металлоконструкции</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Цена за м²</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Что входит</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {priceTable.map((row) => (
                        <tr key={row.type} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-3 font-medium text-foreground">{row.type}</td>
                          <td className="px-4 py-3 whitespace-nowrap">{row.price}</td>
                          <td className="px-4 py-3">{row.includes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-3">* Цены указаны без НДС, фундамента и инженерных сетей. Точная смета — после замера и ТЗ.</p>
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
                  Этапы производства металлоконструкций под ключ
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

              {/* OBJECT TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Какие объекты мы строим в Курской области
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {objects.map((obj) => (
                    <div key={obj.name} className="p-5 rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground mb-2">{obj.name}</h3>
                      <p className="text-sm text-muted">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CITIES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Работаем по всей Курской области
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Выезд инженера на площадку — бесплатно в радиусе 150 км от Курска. Производим и монтируем металлоконструкции в городах и районах:
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

            {/* SIDEBAR CTA */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Получите расчёт металлоконструкций за 1 час
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте номер — инженер перезвонит, уточнит задачу и рассчитает стоимость под ваш объект в Курске.
                </p>
                <a
                  href="tel:+79803211542"
                  className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors mb-3"
                >
                  Позвонить
                </a>
                <a
                  href="/#calculator"
                  className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-foreground border border-border rounded-lg hover:bg-white transition-colors"
                >
                  Рассчитать онлайн
                </a>
                <p className="text-xs text-muted mt-4 text-center">
                  Или пишите на <a href="mailto:info@lstkmk.ru" className="text-accent-blue hover:underline">info@lstkmk.ru</a>
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте стоимость металлоконструкций в Курске
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — инженер МАКСТИЛ рассчитает проект, металлоконструкции, фундамент и монтаж под ваш участок. Бесплатный выезд на объект.
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
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
