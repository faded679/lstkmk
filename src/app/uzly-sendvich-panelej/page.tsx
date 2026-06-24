import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import {
  ArrowsInLineHorizontal,
  ArrowsInLineVertical,
  CornersIn,
  Stack,
  HouseLine,
  House,
  CheckCircle,
  Warning,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Узлы крепления сэндвич-панелей: типовые решения и схемы | МАКСТИЛ",
  description:
    "Виды узлов сэндвич-панелей: горизонтальный, вертикальный, угловой, цокольный, парапетный, коньковый. Крепёж, ошибки монтажа, нормы и ГОСТы.",
  keywords: [
    "узлы сэндвич панелей",
    "узел сэндвич панелей",
    "сэндвич панель узлы",
    "крепление сэндвич панелей",
    "монтаж сэндвич панелей узлы",
    "крепёж сэндвич панелей",
  ],
  openGraph: {
    title: "Узлы крепления сэндвич-панелей: типовые решения и схемы",
    description: "Виды узлов, крепёж, ошибки монтажа, нормы и ГОСТы. Рассчитаем крепёж для вашего проекта.",
    url: "https://lstkmk.ru/uzly-sendvich-panelej/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/uzly-sendvich-panelej/",
  },
};

export default function UzlySendvichPanelejPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Монтаж сэндвич-панелей и узлы крепления",
    description: "Типовые решения и схемы узлов крепления сэндвич-панелей для стен и кровли. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "по запросу",
  };

  const nodes = [
    { title: "Горизонтальный стык", icon: ArrowsInLineHorizontal, text: "Соединение стеновых панелей по длине. Используется замок «шип-паз» и саморезы в шаг 500–700 мм." },
    { title: "Вертикальный стык", icon: ArrowsInLineVertical, text: "Стык панелей в высоту. Обязательна герметизация и термопрокладки под крепёж." },
    { title: "Угловой узел", icon: CornersIn, text: "Соединение стен в углах здания. Применяются угловые панели, доборные элементы, герметик." },
    { title: "Цокольный узел", icon: Stack, text: "Крепление нижнего ряда панелей к фундаменту. Важен гидроизоляционный порог и правильный прижим." },
    { title: "Парапетный узел", icon: HouseLine, text: "Ограждение кромки стены на кровле. Защищает от влаги и ветра, обеспечивает эстетичный вид." },
    { title: "Коньковый узел", icon: House, text: "Соединение скатов кровли. Ключевой узел для герметичности кровельного покрытия." },
  ];

  const fasteners = [
    { title: "Саморезы", text: "Оцинкованные или нержавеющие саморезы по металлу с резиновой шайбой. Длина зависит от толщины панели." },
    { title: "Терморазделители", text: "Прокладки из полиамида или полипропилена под шайбами для предотвращения мостиков холода." },
    { title: "Уплотнители", text: "Бутиловые ленты, П-образные профили, герметики для замков и стыков." },
    { title: "Доборные элементы", text: "Углы, парапеты, коньки, откосы, планки примыкания — завершают узел и защищают от влаги." },
  ];

  const errors = [
    "Неправильный шаг саморезов — слишком редкий или слишком частый крепёж.",
    "Отсутствие термопрокладок — приводит к конденсату и мостикам холода.",
    "Плохая герметизация стыков — вода и ветер проникают внутрь здания.",
    "Крепление панелей в углах — без доборных элементов появляются щели.",
    "Неправильный цокольный узел — влага поднимается по стене и разрушает утеплитель.",
  ];

  const norms = [
    "СП 70.13330.2012 — Несущие и ограждающие конструкции",
    "СП 131.13330.2020 — Строительная климатология",
    "ГОСТ 30403-2012 — Сэндвич-панели. Методы испытаний",
    "ГОСТ 32603-2021 — Стеновые и кровельные сэндвич-панели",
    "Технологические карты производителей панелей",
  ];

  const faq = [
    {
      q: "Какой шаг саморезов для сэндвич-панелей?",
      a: "Стандартный шаг саморезов — 500–700 мм по длине панели. В зонах углов, окон, ворот и подкрановых путей шаг уменьшается до 300–400 мм. Всегда следуйте технологической карте производителя панелей.",
    },
    {
      q: "Нужны ли термопрокладки при креплении сэндвич-панелей?",
      a: "Да. Терморазделительные прокладки устанавливаются под шайбы саморезов, чтобы избежать мостиков холода и конденсата на металлическом крепеже. Особенно важно для тёплых зданий.",
    },
    {
      q: "Как герметизировать стыки сэндвич-панелей?",
      a: "Для герметизации используются заводские замки панелей, бутиловые ленты, полиуретановые герметики и уплотнительные профили. Вертикальные стыки рекомендуется дополнительно проклеивать паропроницаемой лентой.",
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
                Монтаж
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Узлы крепления сэндвич-панелей: типовые решения и схемы
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Разбираем виды узлов сэндвич-панелей, крепёж, типичные ошибки и требования. Правильные узлы — залог тёплого и герметичного здания.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать крепёж
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Виды узлов сэндвич-панелей
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nodes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                        <Icon size={22} weight="bold" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Крепёж для сэндвич-панелей
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {fasteners.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-orange/10 text-accent-orange flex items-center justify-center flex-shrink-0">
                      <Wrench size={22} weight="bold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Типичные ошибки монтажа
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {errors.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-muted text-sm p-3 rounded-lg border border-border bg-slate-50">
                    <Warning size={18} weight="bold" className="text-accent-orange flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Нормы и ГОСТы
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {norms.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted text-sm">
                    <CheckCircle size={18} weight="bold" className="text-accent-blue flex-shrink-0" />
                    {item}
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
        </div>

        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Рассчитайте крепёж для сэндвич-панелей
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Подберём комплект крепежа и доборных элементов под ваш проект.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать крепёж
              </a>
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
