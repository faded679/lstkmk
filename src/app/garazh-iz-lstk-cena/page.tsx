import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import LeadForm from "@/components/LeadForm";
import FaqSchema from "@/components/FaqSchema";
import {
  Clock,
  Coins,
  Ruler,
  Snowflake,
  ArrowsOut,
  ShieldCheck,
  Garage,
  Wrench,
  House,
  Car,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сколько стоит построить гараж из ЛСТК в 2026 — цены под ключ | МАКСТИЛ",
  description:
    "Стоимость гаража из ЛСТК в 2026 году. Цены от 7 800 ₽/м², срок от 2 недель. Гараж на 1, 2 машины, мастерская, с навесом. Проект, фундамент, монтаж, гарантия 5 лет.",
  keywords: [
    "сколько стоит построить гараж в 2026 году",
    "гараж из ЛСТК цена",
    "гараж из металлоконструкций",
    "строительство гаража под ключ",
    "быстровозводимый гараж",
  ],
  openGraph: {
    title: "Сколько стоит построить гараж из ЛСТК в 2026 — цены под ключ",
    description: "Цены от 7 800 ₽/м², срок от 2 недель. Гараж на 1, 2 машины, мастерская, с навесом.",
    url: "https://lstkmk.ru/garazh-iz-lstk-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/garazh-iz-lstk-cena/",
  },
};

export default function GarazhLandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Строительство гаража из ЛСТК под ключ",
    description: "Проектирование, производство и монтаж гаражей из ЛСТК любого размера. Работаем по всей России.",
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: { "@type": "PostalAddress", addressLocality: "Белгород", addressCountry: "RU" },
    },
    areaServed: "Россия",
    priceRange: "от 7 800 ₽/м²",
  };


  const prices = [
    {
      title: "Гараж на 1 машину",
      size: "6×4 м — 24 м²",
      price: "от 228 000 ₽",
      desc: "Холодный гараж на легковой автомобиль. Профлист, ворота, фундамент лента, монтаж.",
    },
    {
      title: "Гараж на 2 машины",
      size: "8×6 м — 48 м²",
      price: "от 456 000 ₽",
      desc: "Тёплый или холодный гараж на две машины. Секционные ворота, фундамент, кровля.",
    },
    {
      title: "Гараж-мастерская",
      size: "10×6 м — 60 м²",
      price: "от 570 000 ₽",
      desc: "С запасом площади для верстака, инструментов и запчастей. Утепление и электрика.",
    },
    {
      title: "Гараж с навесом",
      size: "12×8 м — 80 м²",
      price: "от 760 000 ₽",
      desc: "Закрытое помещение + навес для второй машины, прицепа или мотоцикла.",
    },
  ];

  const factors = [
    "Размер и планировка гаража",
    "Тип фундамента (ленточный, плита, сваи)",
    "Материал стен и кровли (профлист или сэндвич)",
    "Тип ворот (откатные, секционные, подъёмно-поворотные)",
    "Наличие отопления, электрики, смотровой ямы",
    "Удалённость объекта и сложность подъезда",
  ];

  const types = [
    { title: "Холодный гараж", price: "от 7 800 ₽/м²", desc: "Для хранения автомобиля и инструментов. Профлист, без утепления, минимальная цена." },
    { title: "Тёплый гараж с отоплением", price: "от 9 800 ₽/м²", desc: "Сэндвич-панели, утепление, электрика, отопление. Комфортная работа зимой." },
    { title: "Гараж-СТО с ямой", price: "от 11 000 ₽/м²", desc: "Смотровая яма, подъёмник или эстакада, усиленный пол, вентиляция." },
    { title: "Гаражный комплекс", price: "от 7 800 ₽/м²", desc: "Несколько боксов, навес, общая крыша. Экономия за счёт масштаба." },
  ];

  const advantages = [
    { icon: Clock, title: "Быстро — 2-3 недели", text: "Заводские элементы собираются на участке за 7–14 дней. Полный цикл — до 3 недель." },
    { icon: Coins, title: "Дешевле кирпича на 30-40%", text: "Не нужен массивный фундамент и тяжёлые стены. Меньше материалов и рабочих." },
    { icon: Ruler, title: "Ровная геометрия", text: "Точность заводского производства до 1 мм. Ворота не перекашиваются, не залипают." },
    { icon: ShieldCheck, title: "Не нужен мощный фундамент", text: "Лёгкий каркас ЛСТК в 3-4 раза легче кирпича. Экономия на фундаменте." },
    { icon: Snowflake, title: "Можно строить зимой", text: "Сборка без сварки и мокрых процессов. Мороз не мешает монтажу." },
    { icon: ArrowsOut, title: "Легко расширить", text: "Пристройка, второй бокс или навес добавляются без демонтажа существующего гаража." },
  ];

  const cases = [
    { title: "Холодный гараж 6×4 м", place: "Белгород", area: 24, term: "14 дней", price: "228 000 ₽" },
    { title: "Тёплый гараж на 2 машины 8×6 м", place: "Воронеж", area: 48, term: "21 день", price: "570 000 ₽" },
    { title: "Утеплённая гараж-мастерская 10×8 м", place: "Курск", area: 80, term: "28 дней", price: "950 000 ₽" },
  ];

  const faq = [
    {
      q: "Нужно ли разрешение на строительство гаража из ЛСТК?",
      a: "Для гаража площадью до 500 м² и высотой до 20 м на ИЖС достаточно уведомления о начале строительства по 152-ФЗ. Для крупных гаражных комплексов и на коммерческих землях может потребоваться разрешение. Мы помогаем подготовить документацию.",
    },
    {
      q: "Можно ли сделать смотровую яму в гараже из ЛСТК?",
      a: "Да. Смотровая яма или эстакада монтируются на этапе фундамента. Важно учесть гидроизоляцию и вентиляцию. Возможно также оборудование подкранового пути, подъёмника и рабочей ямы.",
    },
    {
      q: "Какой фундамент лучше для гаража из ЛСТК?",
      a: "Для лёгкого гаража из ЛСТК подходит мелкозаглублённая ленточная основа или плита. Плита предпочтительнее для мастерских и при наличии ямы — даёт ровный пол и высокую нагрузку. Лента — экономичнее для хранения автомобилей.",
    },
    {
      q: "Сколько служит гараж из ЛСТК?",
      a: "Срок службы оцинкованного каркаса ЛСТК — от 50 лет. Ограждающие конструкции (профлист, сэндвич-панели) при правильной эксплуатации служат 25–50 лет. Гарантия МАКСТИЛ на конструкции — 5 лет.",
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
                Сколько стоит построить гараж из ЛСТК в 2026 году — цены под ключ
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Строим гаражи из лёгких стальных тонкостенных конструкций. От проекта до сдачи за 2-3 недели. Цены от 7 800 ₽/м². Гарантия 5 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#calculator"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Рассчитать цену гаража
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
              {/* PRICES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Цены на строительство гаража из ЛСТК
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {prices.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-sm font-bold text-accent-blue">{item.price}</span>
                      </div>
                      <div className="text-xs text-muted mb-2">{item.size}</div>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3">
                  * В стоимость под ключ входит: каркас ЛСТК, фундамент (плита или лента), стены (профлист или сэндвич), кровля, секционные ворота, монтаж.
                </p>
              </section>

              {/* FACTORS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Что влияет на стоимость гаража
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {factors.map((factor) => (
                    <div key={factor} className="flex items-center gap-2 text-muted text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
                      {factor}
                    </div>
                  ))}
                </div>
              </section>

              {/* TYPES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Виды гаражей из ЛСТК
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {types.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted mb-2">{item.desc}</p>
                      <span className="text-sm font-bold text-accent-blue">{item.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ADVANTAGES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Преимущества гаража из ЛСТК
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

              {/* CASES */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Примеры проектов
                </h2>
                <div className="space-y-4">
                  {cases.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted">{item.place}, {item.area} м², {item.term}</p>
                      </div>
                      <span className="text-lg font-bold text-accent-blue whitespace-nowrap">{item.price}</span>
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
                  Узнать цену гаража
                </h3>
                <p className="text-sm text-muted mb-5">
                  Оставьте телефон и имя — инженер рассчитает стоимость гаража под ваш размер и комплектацию.
                </p>
                <LeadForm comment="Заявка со страницы гаража из ЛСТК" />
              </div>
            </aside>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Получите расчёт гаража из ЛСТК
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Расскажите размеры и назначение гаража — подготовим коммерческое предложение с разбивкой по разделам.
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
