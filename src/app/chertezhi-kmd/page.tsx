import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import {
  Blueprint,
  Pencil,
  ListNumbers,
  CheckCircle,
  Hash,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Чертежи КМД: деталировочные чертежи металлоконструкций | МАКСТИЛ",
  description:
    "Разработка чертежей КМД (конструкции металлические деталировочные). Состав, расшифровка, отличия от КМ. Закажите КМД для производства и монтажа.",
  keywords: [
    "кмд",
    "чертежи кмд",
    "кмд расшифровка",
    "кмд что это",
    "кмд в строительстве",
    "что такое кмд",
    "конструкции металлические деталировочные",
  ],
  openGraph: {
    title: "Чертежи КМД: деталировочные чертежи металлоконструкций",
    description: "Разработка КМД. Состав, расшифровка, отличия от КМ. Закажите КМД у МАКСТИЛ.",
    url: "https://lstkmk.ru/chertezhi-kmd/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/chertezhi-kmd/",
  },
};

export default function ChertezhiKmdPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Кмд что это в строительстве?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "КМД — это конструкции металлические деталировочные, раздел проектной документации с чертежами каждой детали для изготовления. В КМД указываются размеры, отверстия, сечения, маркировка, сварные швы и ведомости метизов.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоят чертежи КМД?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость КМД зависит от количества деталей и площади здания. Для ангара или цеха площадью 1 000 м² — от 100 000 до 250 000 ₽. Точную цену рассчитываем после КМ и технического задания.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли заказать КМД без КМ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Теоретически можно, но не рекомендуется. КМД — это детализация КМ. Если КМ отсутствует, его придётся разработать заново или создать по существующим схемам, что увеличивает сроки и стоимость.",
        },
      },
    ],
  };

  const composition = [
    { title: "Монтажные схемы", text: "Планы и разрезы с маркировкой каждой детали, схемы последовательности монтажа." },
    { title: "Деталировочные чертежи", text: "Каждая деталь с размерами, отверстиями, сварными швами, покрытием и массой." },
    { title: "Ведомости метизов", text: "Полный список болтов, гаек, шайб, анкеров с количеством и классом прочности." },
    { title: "Ведомость элементов", text: "Таблица всех марок с указанием количества, длины, профиля и массы." },
  ];

  const differences = [
    { km: "КМ", kmd: "КМД", text: "Конструктивные решения — принципиальные схемы и узлы." },
    { km: "Содержит", kmd: "Содержит", text: "Деталировочные чертежи каждой детали для завода." },
    { km: "Расчётный", kmd: "Производственный", text: "КМ — для расчёта и согласования, КМД — для изготовления и монтажа." },
    { km: "Раньше", kmd: "Позже", text: "КМД разрабатывается на основе утверждённого КМ." },
  ];

  const marking = [
    "Колонны — К1, К2, К3...",
    "Ригели — Р1, Р2, Р3...",
    "Фермы — Ф1, Ф2, Ф3...",
    "Балки — Б1, Б2, Б3...",
    "Связи — С1, С2, С3...",
    "Закладные — З1, З2, З3...",
  ];

  const requirements = [
    "ГОСТ 21.1101-2013 — Система проектной документации",
    "ГОСТ 23118-2019 — Стальные конструкции зданий",
    "СП 16.13330.2017 — Стальные конструкции",
    "ГОСТ 27751-2014 — Надёжность строительных конструкций",
    "СНиП 3.03.01-87 — Несущие и ограждающие конструкции",
  ];

  const faq = [
    {
      q: "Кмд что это в строительстве?",
      a: "КМД — это конструкции металлические деталировочные, раздел проектной документации с чертежами каждой детали для изготовления. В КМД указываются размеры, отверстия, сечения, маркировка, сварные швы и ведомости метизов.",
    },
    {
      q: "Сколько стоят чертежи КМД?",
      a: "Стоимость КМД зависит от количества деталей и площади здания. Для ангара или цеха площадью 1 000 м² — от 100 000 до 250 000 ₽. Точную цену рассчитываем после КМ и технического задания.",
    },
    {
      q: "Можно ли заказать КМД без КМ?",
      a: "Теоретически можно, но не рекомендуется. КМД — это детализация КМ. Если КМ отсутствует, его придётся разработать заново или создать по существующим схемам, что увеличивает сроки и стоимость.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-28">
        <section className="bg-slate-900 text-white py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue-light text-sm font-medium mb-6">
                Проектирование
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Чертежи КМД: деталировочные чертежи металлоконструкций
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Разработка деталировочных чертежей КМД для производства и монтажа металлоконструкций. Каждая деталь с размерами, маркировкой и ведомостями.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+79606322061"
                  className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Заказать КМД
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Что такое КМД и расшифровка
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                КМД — это конструкции металлические деталировочные. Это раздел проектной документации, который содержит чертежи каждой отдельной детали металлокаркаса для её изготовления на заводе и монтажа на стройплощадке.
              </p>
              <p className="text-muted leading-relaxed">
                По КМД завод изготавливает колонны, фермы, ригели, балки, связи, закладные детали и другие элементы. Монтажная бригада использует монтажные схемы и ведомости для сборки здания.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Отличия КМД от КМ
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">КМ</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">КМД</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Конструктивные решения: схемы, узлы, расчёты.</td>
                      <td className="px-4 py-3">Деталировка: чертежи каждой детали для завода.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Для согласования и экспертизы.</td>
                      <td className="px-4 py-3">Для изготовления и монтажа.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Разрабатывается первым.</td>
                      <td className="px-4 py-3">Разрабатывается после утверждения КМ.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Состав КМД
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {composition.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-border bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-3">
                      <Blueprint size={22} weight="bold" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Маркировка элементов в КМД
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {marking.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted text-sm p-3 rounded-lg border border-border bg-slate-50">
                    <Hash size={18} weight="bold" className="text-accent-blue flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Требования к оформлению
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {requirements.map((item) => (
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
              Закажите разработку КМД
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Подготовим деталировочные чертежи для производства и монтажа вашего здания из металлоконструкций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Заказать КМД
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
