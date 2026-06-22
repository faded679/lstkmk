import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Сколько стоит проект ангара: КМ, КМД, АР | Справочник ЛСТК",
  description: "Стоимость проектирования ангара из ЛСТК: разделы КМ, КМД, АР, ЭМ. Когда проект обязателен, а когда достаточно типового расчёта.",
  keywords: ["стоимость проекта ангара", "проектирование ангара цена", "КМД ангар", "проект металлоконструкций"],
};

const faqData = [
  {
    question: "Можно ли строить ангар без проекта?",
    answer: "Типовые здания до 1 500 м² без кран-балок и сложных нагрузок часто строятся по стандартному расчёту производителя. Для получения разрешения на строительство и ввода в эксплуатацию — проект обязателен."
  },
  {
    question: "Что такое КМ и КМД?",
    answer: "КМ (конструкции металлические) — проектная документация с расчётами и схемами. КМД (конструкции металлические деталировочные) — рабочая документация для производства, то есть чертежи каждой детали. КМД делает завод-изготовитель."
  },
  {
    question: "Сколько времени занимает проектирование?",
    answer: "Типовой расчёт каркаса — 3–7 рабочих дней. Полный проект с АР, КМ, ЭМ, ОВ — 3–6 недель. При согласовании с экспертизой — 2–4 месяца дополнительно."
  }
];

export default function StoimostProektaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Сколько стоит проект ангара",
    "description": "Стоимость разделов проектирования производственного здания из ЛСТК.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
            Проектирование
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Сколько стоит проект ангара
          </h1>

          <p className="text-muted mb-6">
            Стоимость проектирования зависит от комплектности: минимальный расчёт каркаса стоит от 1,5 ₽/кг, полный проект с разрешительной документацией — значительно дороже.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Разделы проектной документации и цены</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Раздел</th>
                  <th className="text-left py-3 font-semibold">Что включает</th>
                  <th className="text-left py-3 font-semibold">Ориентировочная цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Расчёт каркаса (КМ)</td>
                  <td className="py-3 text-muted">Спецификация металла, схемы</td>
                  <td className="py-3 font-medium">от 1,5–2 ₽/кг каркаса</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">КМД (деталировка)</td>
                  <td className="py-3 text-muted">Чертежи каждой детали</td>
                  <td className="py-3 font-medium">Входит в стоимость каркаса</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">АР (архитектурный)</td>
                  <td className="py-3 text-muted">Фасады, планы, разрезы</td>
                  <td className="py-3 font-medium">30 000–80 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">ЭМ (электрика)</td>
                  <td className="py-3 text-muted">Однолинейная схема, ЭО</td>
                  <td className="py-3 font-medium">25 000–60 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">ОВ (отопление, вентиляция)</td>
                  <td className="py-3 text-muted">Схема инженерных систем</td>
                  <td className="py-3 font-medium">25 000–70 000 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Полный комплект с экспертизой</td>
                  <td className="py-3 text-muted">Все разделы + согласования</td>
                  <td className="py-3 font-medium">200 000–600 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Когда достаточно типового расчёта</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Площадь до 1 500 м², без специальных нагрузок</li>
            <li>Нет кран-балок с грузоподъёмностью выше 5 т</li>
            <li>Здание не вводится в эксплуатацию официально (временное)</li>
            <li>Строительство на собственном участке сельхозназначения</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mb-3">Когда нужен полный проект</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Получение разрешения на строительство и ввод в эксплуатацию</li>
            <li>Кредитование объекта или привлечение инвесторов</li>
            <li>Площадь более 1 500 м² или сложные нагрузки</li>
            <li>Производственные здания с требованиями промышленной безопасности</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>У нас:</strong> расчёт каркаса и КМД входит в стоимость заказа на производство металлоконструкций. Архитектурный раздел и инженерные разделы — по запросу, выполняем за 2–4 недели.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            {faqData.map((item, i) => (
              <div key={i} className="border-l-2 border-accent-blue pl-4">
                <p className="font-medium text-foreground mb-1">{item.question}</p>
                <p className="text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
