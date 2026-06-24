import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Basketball,
  SwimmingPool,
  TennisBall,
  Clock,
  Coins,
  ArrowsOut,
  ShieldCheck,
  Snowflake,
  Sun,
  Users,
  House,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Спортивный комплекс из металлоконструкций | МАКСТИЛ",
  description:
    "Проектируем и строим спортивные комплексы из металлоконструкций: ФОК, манежи, корты, бассейны. Большие пролёты, быстрые сроки, цены от 8 000 ₽/м².",
  keywords: [
    "спортивный комплекс из металлоконструкций",
    "фок из металлоконструкций",
    "спортивный манеж из лстк",
    "корт из металлоконструкций",
    "строительство спорткомплекса",
  ],
  openGraph: {
    title: "Спортивный комплекс из металлоконструкций",
    description: "ФОК, манежи, корты, бассейны из металлоконструкций. Проект, производство, монтаж под ключ.",
    url: "https://lstkmk.ru/sportivnyj-kompleks-iz-metallokonstrukcij/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/sportivnyj-kompleks-iz-metallokonstrukcij/",
  },
};

export default function SportKompleksPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство спортивного комплекса из металлоконструкций",
    description: "Проектирование, производство и монтаж спортивных комплексов, ФОК, манежей и кортов. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 8 000 ₽/м²",
  };

  const advantages = [
    { icon: ArrowsOut, title: "Большие пролёты без колонн", text: "Пролёты до 30–36 м без промежуточных опор. Свободная планировка для спортивных залов." },
    { icon: Clock, title: "Быстрые сроки", text: "Спортивный манеж 1 000 м² строится за 1,5–2 месяца. Заводская готовность до 95%." },
    { icon: Coins, title: "Экономия", text: "Лёгкий каркас снижает стоимость фундамента и монтажа по сравнению с капитальным строительством." },
    { icon: ShieldCheck, title: "Надёжность", text: "Гарантия 5 лет на конструкции. Срок службы оцинкованного каркаса — от 50 лет." },
  ];

  const types = [
    { icon: Basketball, title: "ФОК", desc: "Физкультурно-оздоровительный комплекс с несколькими залами, раздевалками и трибунами." },
    { icon: SwimmingPool, title: "Бассейн", desc: "Помещение для бассейна с повышенной влажностью, вентиляцией и теплоизоляцией." },
    { icon: TennisBall, title: "Теннисный корт", desc: "Крытый теннисный корт с высоким потолком и равномерным освещением." },
    { icon: Sun, title: "Спортивный манеж", desc: "Универсальное помещение для футбола, лёгкой атлетики, хоккея с мячом." },
  ];

  const priceTable = [
    { type: "Манеж / ФОК (профлист)", price: "от 8 000 ₽/м²", desc: "Каркас ЛСТК, фундамент, профлист, кровля, ворота, монтаж." },
    { type: "Тёплый ФОК (сэндвич 100 мм)", price: "от 10 000 ₽/м²", desc: "Сэндвич-панели, отопление, вентиляция, электрика." },
    { type: "Бассейн с влажностным режимом", price: "от 12 000 ₽/м²", desc: "Усиленная вентиляция, гидроизоляция, антикоррозийная обработка." },
  ];

  const faq = [
    {
      q: "Сколько стоит построить спортивный манеж 1000 м²?",
      a: "Холодный манеж 1 000 м² — от 8 000 000 ₽. Тёплый ФОК с сэндвич-панелями — от 10 000 000 ₽. Точная цена зависит от высоты, фундамента и инженерии.",
    },
    {
      q: "Какие пролёты возможны для спортивного комплекса?",
      a: "Металлокаркас позволяет делать пролёты до 30–36 м без промежуточных колонн. Это идеально для манежей, ФОК и кортов.",
    },
    {
      q: "Можно ли строить спорткомплекс зимой?",
      a: "Да. Сборка каркаса ЛСТК без сварки и мокрых процессов позволяет вести работы круглый год. Монтаж сэндвич-панелей также возможен при отрицательных температурах.",
    },
    {
      q: "Нужно ли разрешение на спортивный комплекс?",
      a: "Да, для спортивных комплексов требуется разрешение на строительство. Мы готовим проектную документацию и помогаем согласовать объект.",
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
                Спортивный комплекс из металлоконструкций
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим спортивные комплексы, ФОК, манежи, корты и бассейны из ЛСТК. Большие пролёты, быстрые сроки, современная архитектура. Цены от 8 000 ₽/м².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Преимущества спорткомплекса из металлоконструкций
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
                  Типы спортивных комплексов
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
                  Цены на строительство спорткомплекса
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип объекта</th>
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
                  Узнать цену спорткомплекса
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте заявку — инженер рассчитает стоимость под ваш объект.
                </p>
                <LeadForm comment="Заявка со страницы Спортивный комплекс из металлоконструкций" />
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте стоимость спорткомплекса
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Подготовим проект, смету и сроки строительства под ваш бюджет и вид спорта.
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
