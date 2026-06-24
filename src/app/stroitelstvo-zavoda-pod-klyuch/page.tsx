import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Clock,
  Coins,
  ArrowsOut,
  Snowflake,
  Wrench,
  ShieldCheck,
  Factory,
  ForkKnife,
  Buildings,
  Warehouse,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Строительство завода под ключ из металлоконструкций | МАКСТИЛ",
  description:
    "Проектируем и строим производственные здания и заводы из металлоконструкций. Цены от 4 500 ₽/м². Сроки от 6 недель. Проект, фундамент, каркас, монтаж.",
  keywords: [
    "строительство завода",
    "завод под ключ",
    "построить завод",
    "строительство заводов",
    "здание завода",
    "завод из металлоконструкций",
  ],
  openGraph: {
    title: "Строительство завода под ключ из металлоконструкций",
    description: "Производственные здания и заводы. Цены от 4 500 ₽/м², сроки от 6 недель.",
    url: "https://lstkmk.ru/stroitelstvo-zavoda-pod-klyuch/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/stroitelstvo-zavoda-pod-klyuch/",
  },
};

export default function ZavodLandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство завода под ключ из металлоконструкций",
    description: "Проектирование, производство и монтаж производственных зданий и заводов из металлоконструкций. Работаем по всей России.",
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
      title: "Лёгкая промышленность",
      icon: Factory,
      desc: "Сборочные и швейные цеха, мебельное производство. Большие пролёты, естественное освещение.",
    },
    {
      title: "Пищевое производство",
      icon: ForkKnife,
      desc: "Цеха с санитарными требованиями, утеплённые сэндвич-панели, вентиляция и моечные полы.",
    },
    {
      title: "Сборочное производство",
      icon: Buildings,
      desc: "Сборочные линии, конвейеры, кран-балки. Усиленный каркас под оборудование.",
    },
    {
      title: "Складской комплекс с АБК",
      icon: Warehouse,
      desc: "Производственно-складской блок с административно-бытовым корпусом. Комплексное решение.",
    },
  ];

  const priceTable = [
    { type: "Холодный цех (профлист)", price: "от 4 500 ₽/м²", desc: "Каркас ЛСТК, профлист, фундамент, кровля, ворота, монтаж." },
    { type: "Тёплый цех (сэндвич 100 мм)", price: "от 5 600 ₽/м²", desc: "Каркас ЛСТК, сэндвич-панели, фундамент, ворота, монтаж." },
    { type: "Завод с АБК (сэндвич)", price: "от 7 000 ₽/м²", desc: "Производственный цех + административно-бытовой корпус, инженерия." },
  ];

  const steps = [
    { step: 1, title: "Заявка", text: "Обсуждаем площадь, назначение, технологию, бюджет и сроки." },
    { step: 2, title: "Проект", text: "Геология, замеры, проект КМ/КМД, смета, согласование." },
    { step: 3, title: "Фундамент", text: "Заливаем фундамент, устанавливаем закладные детали." },
    { step: 4, title: "Производство", text: "Изготавливаем металлокаркас на собственном заводе." },
    { step: 5, title: "Монтаж", text: "Собираем каркас, монтируем ограждение, кровлю, инженерию." },
    { step: 6, title: "Сдача", text: "Подписываем акт, передаём документацию, даём гарантию 5 лет." },
  ];

  const advantages = [
    { icon: Clock, title: "Скорость", text: "Монтаж каркаса в 2–3 раза быстрее капитального строительства." },
    { icon: Coins, title: "Экономия", text: "Лёгкий каркас снижает нагрузку на фундамент и стоимость основания." },
    { icon: ArrowsOut, title: "Расширяемость", text: "Легко добавить пролёт, пристроить склад или АБК." },
    { icon: Snowflake, title: "Всесезонность", text: "Сборка без мокрых процессов. Монтаж круглый год." },
    { icon: Wrench, title: "Без сварки на площадке", text: "Болтовые соединения, точность заводского изготовления." },
    { icon: ShieldCheck, title: "Надёжность", text: "Гарантия 5 лет на конструкции. Срок службы от 50 лет." },
  ];

  const faq = [
    {
      q: "Нужно ли разрешение на строительство завода?",
      a: "Да, для производственных зданий и заводов требуется разрешение на строительство. Мы готовим проектную документацию, проходим экспертизу и помогаем получить разрешение.",
    },
    {
      q: "Можно ли установить кран-балку в заводе из металлоконструкций?",
      a: "Да. Каркас металлоконструкций может быть рассчитан на мостовые и подвесные краны грузоподъёмностью от 5 до 50 т. Крановые нагрузки закладываются на этапе КМ.",
    },
    {
      q: "Какие пролёты возможны для завода?",
      a: "Стандартные пролёты — 12, 18, 24, 30 м. Без промежуточных колонн возможны пролёты до 36 м. Для больших пролётов используются фермы и балочные клетки.",
    },
    {
      q: "Какие сроки строительства завода?",
      a: "Сроки зависят от площади и сложности. Цех 1 000 м² — 6–8 недель, завод 5 000 м² — 3–4 месяца. Проектирование и согласование добавляют 1–2 месяца.",
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
                Строительство завода под ключ из металлоконструкций
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Проектируем и строим производственные здания и заводы. Цены от 4 500 ₽/м². Сроки от 6 недель.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать цену завода
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
                  Типы заводов, которые мы строим
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {types.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50 flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0">
                          <Icon size={22} weight="bold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цены на строительство завода
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип здания</th>
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
                <p className="text-xs text-muted mt-3">
                  * Фундамент и инженерные сети рассчитываются после геологии участка.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Этапы строительства завода
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

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества металлоконструкций для завода
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
                  Узнать цену завода
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте телефон и имя — инженер рассчитает стоимость строительства завода.
                </p>
                <LeadForm comment="Заявка со страницы строительства завода" />
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите расчёт строительства завода
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажите площадь и назначение завода — подготовим коммерческое предложение с разбивкой по разделам.
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
