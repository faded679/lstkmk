import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Warehouse,
  Thermometer,
  Snowflake,
  Clock,
  Coins,
  ShieldCheck,
  ArrowsOut,
  Truck,
  Buildings,
  Factory,
  House,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Склад под ключ из ЛСТК: цена за м² в 2026 | МАКСТИЛ",
  description:
    "Стоимость строительства склада под ключ из ЛСТК в 2026 году. Цены за м² для 500, 1000, 2000 и 5000 м². Проект, фундамент, каркас, монтаж, сдача.",
  keywords: [
    "склад под ключ цена",
    "склад из лстк цена",
    "строительство склада под ключ",
    "склад из металлоконструкций",
    "склад за м2",
    "цена склада лстк",
  ],
  openGraph: {
    title: "Склад под ключ из ЛСТК: цена за м² в 2026",
    description: "Цены на строительство склада под ключ из ЛСТК. Расчёт за 500, 1000, 2000, 5000 м².",
    url: "https://lstkmk.ru/sklad-pod-klyuch-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/sklad-pod-klyuch-cena/",
  },
};

export default function SkladLandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство склада под ключ из ЛСТК",
    description: "Проектирование, производство и монтаж складов из ЛСТК под ключ. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 4 500 ₽/м²",
  };

  const priceTable = [
    { area: "500 м²", cold: "от 6 100 ₽/м²", warm: "от 7 600 ₽/м²", totalCold: "от 3 050 000 ₽", totalWarm: "от 3 800 000 ₽" },
    { area: "1 000 м²", cold: "от 5 600 ₽/м²", warm: "от 7 000 ₽/м²", totalCold: "от 5 600 000 ₽", totalWarm: "от 7 000 000 ₽" },
    { area: "2 000 м²", cold: "от 4 900 ₽/м²", warm: "от 6 100 ₽/м²", totalCold: "от 9 800 000 ₽", totalWarm: "от 12 200 000 ₽" },
    { area: "5 000 м²", cold: "от 4 500 ₽/м²", warm: "от 5 600 ₽/м²", totalCold: "от 22 500 000 ₽", totalWarm: "от 28 000 000 ₽" },
  ];

  const types = [
    { icon: Warehouse, title: "Холодный склад", desc: "Профлист, без утепления. Для сыпучих грузов, техники, стройматериалов." },
    { icon: Thermometer, title: "Тёплый склад", desc: "Сэндвич-панели 100–150 мм. Для товаров, требующих положительной температуры." },
    { icon: Snowflake, title: "Склад с АБК", desc: "Складской блок + административно-бытовой корпус из сэндвич-панелей." },
    { icon: Truck, title: "Логистический центр", desc: "Большие пролёты, высокие ворота для фуры, погрузочные площадки." },
  ];

  const terms = [
    { area: "500 м²", term: "3–4 недели" },
    { area: "1 000 м²", term: "4–5 недель" },
    { area: "2 000 м²", term: "6–8 недель" },
    { area: "5 000 м²", term: "10–12 недель" },
  ];

  const advantages = [
    { icon: Clock, title: "Быстро", text: "Склад 1 000 м² строим за 4–5 недель. Заводская готовность до 95%." },
    { icon: Coins, title: "Экономия на фундаменте", text: "Лёгкий каркас ЛСТК в 3–4 раза легче металлокаркаса. Меньше бетона и арматуры." },
    { icon: ShieldCheck, title: "Гарантия 5 лет", text: "Гарантия на конструкции. Срок службы оцинкованного каркаса — от 50 лет." },
    { icon: ArrowsOut, title: "Расширение без остановки", text: "Легко пристроить дополнительный пролёт или увеличить длину." },
  ];

  const faq = [
    {
      q: "Сколько стоит построить склад 1000 м²?",
      a: "Холодный склад 1000 м² из ЛСТК обойдётся от 5 600 000 ₽. Тёплый склад с сэндвич-панелями — от 7 000 000 ₽. Точная цена зависит от региона, фундамента и инженерии.",
    },
    {
      q: "Какие сроки строительства склада?",
      a: "Склад 500 м² — 3–4 недели, 1 000 м² — 4–5 недель, 2 000 м² — 6–8 недель, 5 000 м² — 10–12 недель. Проектирование и согласование добавляют 2–4 недели.",
    },
    {
      q: "Можно ли строить склад зимой?",
      a: "Да. Сборка каркаса ЛСТК ведётся на болтовых соединениях без сварки и мокрых процессов. Монтаж возможен круглый год.",
    },
    {
      q: "Нужно ли разрешение на строительство склада?",
      a: "Для складов площадью до 1 500 м² и высотой до 20 м обычно достаточно уведомления по 152-ФЗ. Для крупных объектов требуется разрешение. Мы помогаем с документами.",
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
                Цены 2026 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Склад под ключ из ЛСТК: цена за м² в 2026
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Строим склады из лёгких стальных тонкостенных конструкций под ключ. Проект, фундамент, каркас, ограждение, кровля, ворота. Цены от 4 500 ₽/м².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать стоимость склада
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
                  Типы складов, которые мы строим
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {types.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                        <item.icon size={22} weight="bold" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цены на строительство склада под ключ
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Площадь</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Холодный склад</th>
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тёплый склад</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {priceTable.map((row) => (
                        <tr key={row.area} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-3 font-medium text-foreground">{row.area}</td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-foreground">{row.cold}</div>
                            <div className="text-xs">{row.totalCold}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-foreground">{row.warm}</div>
                            <div className="text-xs">{row.totalWarm}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-3">
                  * Цены рассчитаны по калькулятору МАКСТИЛ для стандартной комплектации. Фундамент и инженерные сети рассчитываются отдельно.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Сроки строительства склада
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {terms.map((item) => (
                    <div key={item.area} className="p-5 rounded-xl border border-border text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">{item.area}</div>
                      <div className="text-sm text-muted">{item.term}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества склада из ЛСТК
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                        <item.icon size={22} weight="bold" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  ))}
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
                  Узнать точную цену склада
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — инженер рассчитает стоимость под ваш размер и комплектацию.
                </p>
                <LeadForm comment="Заявка со страницы Склад под ключ цена" />
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите расчёт стоимости склада
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажем, сколько стоит ваш склад за м², и подготовим коммерческое предложение.
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
