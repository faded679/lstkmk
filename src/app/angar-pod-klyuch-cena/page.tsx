import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Строительство ангара под ключ цена за м2 | МАКСТИЛ",
  description:
    "Стоимость ангара под ключ за м² в 2026 году. Цены на холодный и тёплый ангар, склад, цех. Рассчитайте проект онлайн — оставьте заявку.",
  keywords: [
    "ангар под ключ цена",
    "строительство ангара под ключ цена за м2",
    "цена ангара за м²",
    "сколько стоит ангар под ключ",
    "ангар ЛСТК цена",
    "стоимость ангара 2026",
  ],
  openGraph: {
    title: "Строительство ангара под ключ цена за м²",
    description: "Цены на ангары под ключ за м². Расчёт стоимости онлайн. Гарантия 5 лет.",
    url: "https://lstkmk.ru/angar-pod-klyuch-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/angar-pod-klyuch-cena/",
  },
};

export default function LandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство ангара под ключ",
    description: "Проектирование, производство и монтаж ангаров под ключ по цене за м². Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (980) 321-15-42",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 12 000 ₽/м²",
  };

  const stats = [
    { num: 250, suffix: "+", label: "Объектов построено" },
    { num: 14, suffix: "", label: "Лет на рынке" },
    { num: 45, suffix: "", label: "Дней средний срок" },
    { num: 5, suffix: " лет", label: "Гарантия" },
  ];

  const priceTable = [
    { type: "Холодный ангар (профлист)", price: "от 12 000 ₽/м²", desc: "Каркас ЛСТК, ограждение, кровля, ворота" },
    { type: "Тёплый склад (сэндвич 100 мм)", price: "от 18 000 ₽/м²", desc: "Утеплённый контур, ворота, фундамент*" },
    { type: "Производственный цех", price: "от 24 000 ₽/м²", desc: "Усиленный каркас, кран-балка, инженерия" },
    { type: "Автосервис / СТО", price: "от 22 000 ₽/м²", desc: "Тёплый ангар, ворота под погрузчик, полы" },
    { type: "Сельхозангар", price: "от 11 000 ₽/м²", desc: "Каркас, кровля, ограждение, ворота" },
  ];

  const factors = [
    "Пролёт и высота здания",
    "Снеговой и ветровой район",
    "Тип фундамента и грунты",
    "Тип ограждающих конструкций",
    "Наличие крановых нагрузок",
    "Инженерные сети и отопление",
  ];

  const advantages = [
    { title: "Проект в подарок", text: "При заказе строительства под ключ — проектирование КМ и КМД включено в стоимость." },
    { title: "Фиксированная цена", text: "Смета прописана в договоре. После подписания не меняется без изменения ТЗ." },
    { title: "Собственный завод", text: "Производим металлоконструкции на своём оборудовании — без посреднических наценок." },
    { title: "Монтаж по всей России", text: "Бригады опытных монтажников. Работаем в любых регионах и климатических условиях." },
  ];

  const steps = [
    { step: 1, title: "Расчёт заявки", text: "Уточняем размеры, назначение, регион — выдаём предварительную цену за 30 минут." },
    { step: 2, title: "Техническое задание", text: "Согласовываем комплектацию, ворота, фундамент, инженерию." },
    { step: 3, title: "Проектирование", text: "Готовим рабочую документацию КМ, КМД, АР при необходимости." },
    { step: 4, title: "Производство и монтаж", text: "Изготавливаем каркас, заливаем фундамент, собираем ангар на участке." },
    { step: 5, title: "Сдача с гарантией", text: "Подписываем акт, передаём документацию, даём гарантию 5 лет." },
  ];

  const objects = [
    { name: "Склады", desc: "Логистические, производственные, сельхозсклады." },
    { name: "Ангары", desc: "Для техники, материалов, грузового транспорта." },
    { name: "Коровники", desc: "Фермы КРС, зернохранилища, свинарники." },
    { name: "Цеха", desc: "Производственные и сборочные здания." },
    { name: "Автосервисы", desc: "СТО, мойки, шиномонтажи, покрасочные." },
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
                Строительство ангара под ключ цена за м²
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Рассчитайте стоимость ангара под ключ за квадратный метр. Цены от 12 000 ₽/м². Холодные, тёплые, производственные — под ваш бюджет и задачу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать цену ангара
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
              {/* PRICE TABLE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Сколько стоит ангар под ключ за м²
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип ангара</th>
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
                <p className="text-xs text-muted mt-3">* Фундамент и инженерные сети рассчитываются отдельно после геологии участка.</p>
              </section>

              {/* FACTORS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Что влияет на стоимость ангара за м²
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Цена за квадратный метр не бывает фиксированной. Она зависит от конструктивных и инженерных решений, которые подбираются под каждый проект:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {factors.map((factor) => (
                    <li key={factor} className="flex items-center gap-2 text-muted">
                      <span className="w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </section>

              {/* WHY WE */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Почему выгодно строить ангар под ключ с МАКСТИЛ
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
                  Как мы строим ангар под ключ
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

              {/* OBJECTS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Типы зданий, которые строим под ключ
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
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Узнать цену ангара за м²
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — инженер рассчитает стоимость под ваш размер и комплектацию.
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
              Получите точный расчёт ангара под ключ
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажем, сколько стоит ваш ангар за м², и подготовим коммерческое предложение с разбивкой по разделам.
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
