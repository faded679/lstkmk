import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AngaraCalcForm from "@/components/AngaraCalcForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Calculator,
  Clock,
  Coins,
  Ruler,
  Thermometer,
  Phone,
  CheckCircle,
  Warehouse,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Калькулятор стоимости ангара онлайн | МАКСТИЛ",
  description:
    "Рассчитайте стоимость ангара онлайн. Укажите размер и регион — менеджер МАКСТИЛ перезвонит с точной ценой. Цены от 4 500 ₽/м².",
  keywords: [
    "калькулятор ангара",
    "расчет стоимости ангара",
    "калькулятор стоимости ангара",
    "сколько стоит ангар",
    "цена ангара онлайн",
  ],
  openGraph: {
    title: "Калькулятор стоимости ангара онлайн",
    description: "Рассчитайте стоимость ангара по размеру и региону. Точный расчёт от МАКСТИЛ.",
    url: "https://lstkmk.ru/kalkulyator-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/kalkulyator-angara/",
  },
};

export default function KalkulyatorAngaraPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Калькулятор стоимости ангара онлайн",
    description: "Расчёт стоимости строительства ангара по размеру и региону. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 4 500 ₽/м²",
  };

  const examples = [
    { size: "12×24 м (288 м²)", type: "Холодный", price: "от 1 900 000 ₽" },
    { size: "18×36 м (648 м²)", type: "Холодный", price: "от 3 900 000 ₽" },
    { size: "24×48 м (1152 м²)", type: "Тёплый", price: "от 6 500 000 ₽" },
    { size: "30×60 м (1800 м²)", type: "Тёплый", price: "от 10 100 000 ₽" },
  ];

  const steps = [
    { icon: Ruler, title: "Укажите размер", text: "Введите примерные габариты ангара или нужную площадь." },
    { icon: Calculator, title: "Выберите регион", text: "Регион влияет на ветровую и снеговую нагрузку, доставку и монтаж." },
    { icon: Phone, title: "Получите расчёт", text: "Менеджер перезвонит и озвучит точную цену с разбивкой по разделам." },
  ];

  const faq = [
    {
      q: "Как рассчитывается цена ангара?",
      a: "Цена зависит от площади, типа утепления, высоты, региона, фундамента и инженерии. По калькулятору МАКСТИЛ холодный ангар от 4 500 ₽/м², тёплый — от 5 600 ₽/м².",
    },
    {
      q: "Что входит в стоимость ангара?",
      a: "В базовую стоимость входят: проект КМ/КМД, изготовление каркаса ЛСТК, фундамент, ограждение, кровля, ворота, монтаж. Инженерия и отопление рассчитываются отдельно.",
    },
    {
      q: "Как быстро придёт расчёт?",
      a: "Менеджер связывается в течение 2 часов в рабочее время. Сложные проекты рассчитываются 1–2 дня.",
    },
    {
      q: "Можно ли рассчитать ангар нестандартного размера?",
      a: "Да. Калькулятор принимает любые размеры. Для нестандартных проектов инженер подготовит индивидуальный расчёт.",
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
                Калькулятор стоимости ангара онлайн
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Укажите размер и регион — менеджер МАКСТИЛ перезвонит с точным расчётом стоимости ангара. Цены от 4 500 ₽/м².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#calc-form"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать ангар
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
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Как работает калькулятор
                </h2>
                <div className="space-y-4">
                  {steps.map((item, idx) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <item.icon size={18} weight="bold" className="text-accent-blue" />
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Примеры расчётов
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {examples.map((item) => (
                    <div key={item.size} className="p-5 rounded-xl border border-border bg-slate-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Warehouse size={18} weight="bold" className="text-accent-blue" />
                        <h3 className="font-semibold text-foreground">{item.size}</h3>
                      </div>
                      <p className="text-sm text-muted">{item.type} ангар</p>
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

            <aside id="calc-form" className="lg:sticky lg:top-28 h-fit">
              <div className="p-6 rounded-2xl border border-border bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Рассчитать стоимость ангара
                </h3>
                <p className="text-sm text-muted mb-5">
                  Заполните форму — менеджер перезвонит с точным расчётом.
                </p>
                <AngaraCalcForm />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
