import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Строительство ангаров в Белгороде под ключ цена | МАКСТИЛ",
  description:
    "Строительство ангаров в Белгороде под ключ: проектирование, производство, монтаж. Цены за м² от 12 000 ₽. Узнайте стоимость и сроки — оставьте заявку.",
  keywords: [
    "строительство ангаров в Белгороде",
    "строительство ангаров в Белгороде под ключ цена",
    "ангары Белгород",
    "ангар Белгород под ключ",
    "склады Белгород",
    "ЛСТК Белгород",
  ],
  openGraph: {
    title: "Строительство ангаров в Белгороде под ключ цена",
    description: "Строительство ангаров в Белгороде под ключ. Цены за м², сроки, гарантия. Заявка онлайн.",
    url: "https://lstkmk.ru/stroitelstvo-angarov-belgorod/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/stroitelstvo-angarov-belgorod/",
  },
};

export default function LandingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "МАКСТИЛ — строительство ангаров в Белгороде",
    description: "Проектирование, производство и монтаж ангаров, складов и быстровозводимых зданий в Белгороде и области.",
    url: "https://lstkmk.ru/stroitelstvo-angarov-belgorod/",
    telephone: "+7 (980) 321-15-42",
    email: "maxsteel31@bk.ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Белгород",
      addressRegion: "Белгородская область",
      addressCountry: "RU",
    },
    areaServed: "Белгород, Белгородская область, ЦФО, РФ",
    priceRange: "от 12 000 ₽/м²",
  };

  const stats = [
    { num: 250, suffix: "+", label: "Объектов построено" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 45, suffix: "", label: "Дней средний срок" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Холодный ангар", price: "от 12 000 ₽/м²", includes: "Каркас ЛСТК, профлист, кровля" },
    { type: "Тёплый склад", price: "от 18 000 ₽/м²", includes: "Сэндвич-панели, ворота, утепление" },
    { type: "Ангар с кран-балкой", price: "от 22 000 ₽/м²", includes: "Усиленный каркас, кран, монтаж" },
    { type: "Сельхозангар", price: "от 11 000 ₽/м²", includes: "Каркас, кровля, ограждение" },
  ];

  const advantages = [
    { title: "Собственное производство", text: "Завод в Белгородском районе. Собственный цех резки, сверления и грунтовки металлоконструкций." },
    { title: "Проектирование и согласование", text: "Разделы КМ, КМД, АР, ЭМ. Помогаем с разрешительной документацией в Белгороде." },
    { title: "Монтаж бригадами из региона", text: "Знаем грунты, ветровой и снеговой районы. Работаем круглый год." },
    { title: "Фиксированная смета", text: "Цена прописана в договоре. Никаких неожиданных доплат в процессе строительства." },
    { title: "Гарантия 5 лет", text: "На конструкции и узлы. Сервисное обслуживание после сдачи объекта." },
  ];

  const steps = [
    { step: 1, title: "Заявка и замер", text: "Оставляете заявку, инженер выезжает на участок в Белгороде или области бесплатно." },
    { step: 2, title: "Проект и смета", text: "Готовим КМ/КМД, рассчитываем фундамент, каркас и монтаж." },
    { step: 3, title: "Производство", text: "Изготавливаем металлоконструкции на заводе. Контроль качества на каждом этапе." },
    { step: 4, title: "Фундамент и монтаж", text: "Заливаем фундамент, собираем каркас и ограждающие конструкции на вашем участке." },
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
    "Белгород", "Старый Оскол", "Губкин", "Шебекино", "Алексеевка", "Валуйки", "Короча", "Вейделевка", "Ракитянское", "Борисовка", "Красное", "Ивня", "Прохоровка", "Чернянка", "Новый Оскол", "Яковлево"
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
                Строительство в Белгороде и области
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Строительство ангаров в Белгороде под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем, производим и монтируем ангары, склады и быстровозводимые здания в Белгороде и Белгородской области. Цены от 12 000 ₽/м², срок от 45 дней, гарантия 5 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать стоимость ангара
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
                  Ангары в Белгороде — проект, цена, монтаж
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  МАКСТИЛ строит ангары в Белгороде и Белгородской области с 2012 года. Работаем с холодными и тёплыми складами, сельхоззданиями, производственными цехами, автосервисами и СТО. Собственное производство металлоконструкций ЛСТК позволяет контролировать качество и сроки на каждом этапе.
                </p>
                <p className="text-muted leading-relaxed">
                  Для Белгородской области учитываем снеговой район III, ветровой район II, глубину промерзания 0,9–1,1 м и типы грунтов. Это влияет на фундамент, каркас и кровлю, поэтому типовые решения адаптируем под каждый участок.
                </p>
              </section>

              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Стоимость строительства ангара в Белгороде
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип ангара</th>
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
                  Почему заказывают ангары у МАКСТИЛ
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
                  Этапы строительства ангара под ключ
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
                  Какие здания мы строим в Белгороде
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
                  Работаем по всей Белгородской области
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Выезд инженера на площадку — бесплатно в радиусе 150 км от Белгорода. Строим ангары и склады в городах и районах:
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
                  Получите расчёт ангара за 1 час
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте номер — инженер перезвонит, уточнит задачу и рассчитает стоимость под ваш участок в Белгороде.
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
                  Или пишите на <a href="mailto:maxsteel31@bk.ru" className="text-accent-blue hover:underline">maxsteel31@bk.ru</a>
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте стоимость ангара в Белгороде
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку — инженер МАКСТИЛ рассчитает проект, фундамент, каркас и монтаж под ваш участок. Бесплатный выезд на объект.
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
