import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Storefront,
  Buildings,
  Clock,
  Coins,
  PaintBrush,
  ArrowsOut,
  ShieldCheck,
  Users,
  Car,
  House,
  Warehouse,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Строительство торгового центра из металлоконструкций | МАКСТИЛ",
  description:
    "Проектируем и строим торговые центры из металлоконструкций под ключ. Быстровозводимые ТЦ, павильоны, рынки. Цены от 7 000 ₽/м². Работаем по всей России.",
  keywords: [
    "строительство торгового центра",
    "торговый центр из металлоконструкций",
    "быстровозводимый торговый центр",
    "торговый павильон из лстк",
    "строительство тц цена",
  ],
  openGraph: {
    title: "Строительство торгового центра из металлоконструкций",
    description: "Быстровозводимые торговые центры под ключ. Проект, фундамент, каркас, фасад, сдача.",
    url: "https://lstkmk.ru/stroitelstvo-torgovogo-centra/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/stroitelstvo-torgovogo-centra/",
  },
};

export default function TorgovijCentrPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство торгового центра из металлоконструкций",
    description: "Проектирование, производство и монтаж торговых центров, павильонов и рынков из металлоконструкций. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 7 000 ₽/м²",
  };

  const whyMetal = [
    { icon: Clock, title: "Скорость", text: "Монтаж металлокаркаса в 2–3 раза быстрее капитального строительства. ТЦ 1 000 м² — за 2 месяца." },
    { icon: Coins, title: "Экономия", text: "Лёгкий каркас снижает нагрузку на фундамент. Меньше материалов и рабочих на площадке." },
    { icon: PaintBrush, title: "Архитектура", text: "Металлокаркас позволяет делать большие пролёты, панорамное остекление, современные фасады." },
    { icon: ArrowsOut, title: "Расширяемость", text: "Легко добавить торговые модули, второй этаж или пристроить парковку." },
  ];

  const types = [
    { icon: Storefront, title: "Торговый павильон", desc: "Отдельно стоящий павильон 100–500 м². Быстрый запуск торговли." },
    { icon: Buildings, title: "Торговый центр", desc: "Закрытый ТЦ с несколькими торговыми залами, АБК, санузлами." },
    { icon: Warehouse, title: "Рынок", desc: "Открытые и полуоткрытые торговые ряды, крытые павильоны для торговли." },
    { icon: Car, title: "Автосалон / автосервис", desc: "Тёплое здание с воротами, выставочной площадкой и зоной обслуживания." },
  ];

  const priceTable = [
    { type: "Торговый павильон (профлист)", price: "от 7 000 ₽/м²", desc: "Каркас ЛСТК, фундамент, профлист, ворота, монтаж." },
    { type: "Тёплый ТЦ (сэндвич 100 мм)", price: "от 9 000 ₽/м²", desc: "Сэндвич-панели, отопление, электрика, вентиляция." },
    { type: "ТЦ с фасадом и остеклением", price: "от 11 000 ₽/м²", desc: "Декоративный фасад, панорамное остекление, инженерия." },
  ];

  const examples = [
    { name: "Торговый павильон 300 м²", term: "1 месяц", price: "от 2 100 000 ₽" },
    { name: "ТЦ 1 000 м²", term: "2 месяца", price: "от 7 000 000 ₽" },
    { name: "ТЦ 2 000 м² с АБК", term: "3 месяца", price: "от 14 000 000 ₽" },
  ];

  const faq = [
    {
      q: "Сколько стоит построить торговый центр 1000 м²?",
      a: "Тёплый торговый центр 1 000 м² из металлоконструкций обойдётся от 7 000 000 ₽. Точная цена зависит от фасада, остекления, инженерии и региона.",
    },
    {
      q: "Какие сроки строительства ТЦ?",
      a: "Торговый павильон 300 м² — 1 месяц, ТЦ 1 000 м² — 2 месяца, ТЦ 2 000 м² с АБК — 3 месяца. Проектирование и согласование добавляют 1–2 месяца.",
    },
    {
      q: "Нужно ли разрешение на торговый центр?",
      a: "Да, для торговых центров требуется разрешение на строительство. Мы готовим проектную документацию и помогаем согласовать объект.",
    },
    {
      q: "Можно ли сделать второй этаж в ТЦ из металлоконструкций?",
      a: "Да. Металлокаркас позволяет строить одно- и двухэтажные торговые центры с большими пролётами. Второй этаж часто используется под АБК или дополнительные торговые площади.",
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
                Строительство торгового центра из металлоконструкций
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим торговые центры, павильоны и рынки из ЛСТК под ключ. Современная архитектура, большие пролёты, быстрые сроки. Цены от 7 000 ₽/м².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать стоимость ТЦ
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
                  Почему торговый центр из металлоконструкций
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyMetal.map((item) => (
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
                  Виды торговых центров, которые мы строим
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
                  Цены на строительство торгового центра
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип ТЦ</th>
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
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Примеры проектов
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {examples.map((item) => (
                    <div key={item.name} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted">Срок: {item.term}</p>
                      <p className="text-sm font-medium text-accent-blue mt-1">{item.price}</p>
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
                  Узнать цену торгового центра
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — подготовим коммерческое предложение под ваш проект.
                </p>
                <LeadForm comment="Заявка со страницы Строительство торгового центра" />
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте стоимость вашего ТЦ
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Подготовим проект, смету и сроки строительства торгового центра под ваш бюджет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать онлайн
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
