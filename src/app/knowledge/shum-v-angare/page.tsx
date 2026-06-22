import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Шумоизоляция ангара: нормы и решения | Справочник ЛСТК",
  description: "Как снизить шум в ангаре и от ангара. Нормы шума для производственных помещений. Звукоизоляция сэндвич-панелями и перегородками.",
  keywords: ["шумоизоляция ангара", "звукоизоляция цех", "шум в производственном здании", "нормы шума склад"],
};

const faqData = [
  {
    question: "Сколько дБ гасит сэндвич-панель 100 мм?",
    answer: "Стеновая сэндвич-панель 100 мм обеспечивает звукоизоляцию около 30–35 дБ. Этого достаточно для большинства складов, но недостаточно для шумного производства рядом с жилыми домами."
  },
  {
    question: "Как шумит дождь по металлической кровле?",
    answer: "Профлист без утепления — очень громко (до 70 дБ при интенсивном дожде). Сэндвич-панель с наполнителем минваты или ПИР снижает шум до 45–50 дБ — комфортный уровень для работы."
  },
  {
    question: "Нужно ли согласовывать шумное производство?",
    answer: "Да. При размещении производства с уровнем шума более 55 дБ (днём) рядом с жилой застройкой требуется акустический расчёт и согласование с Роспотребнадзором."
  }
];

export default function ShumPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Шумоизоляция ангара",
    "description": "Нормы шума и решения по звукоизоляции производственных зданий.",
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
            Инженерия
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Шумоизоляция ангара
          </h1>

          <p className="text-muted mb-6">
            Металлические здания без отделки — шумные: дождь, оборудование, эхо внутри. Разбираем, как снизить шум до нормативных значений.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Нормы шума для рабочих мест (СП 51.13330)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип помещения</th>
                  <th className="text-left py-3 font-semibold">Допустимый уровень, дБА</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Офис, переговорная</td>
                  <td className="py-3 text-muted">40–45 дБА</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Склад, холодный цех</td>
                  <td className="py-3 text-muted">60 дБА</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Производство (лёгкий труд)</td>
                  <td className="py-3 text-muted">70 дБА</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Тяжёлое производство</td>
                  <td className="py-3 text-muted">80 дБА (с СИЗ)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Звукоизоляция ограждающих конструкций</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Конструкция</th>
                  <th className="text-left py-3 font-semibold">Снижение шума, дБ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Профлист С20 (без утепления)</td>
                  <td className="py-3 text-muted">10–15 дБ</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сэндвич-панель 50 мм (ПС)</td>
                  <td className="py-3 text-muted">25–28 дБ</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сэндвич-панель 100 мм (минвата)</td>
                  <td className="py-3 text-muted">32–36 дБ</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Двойная перегородка с воздушным зазором</td>
                  <td className="py-3 text-muted">45–50 дБ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Снижение реверберации внутри</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>Акустические панели</strong> на стенах и потолке — снижают эхо, стоимость от 800 ₽/м²</li>
            <li><strong>Подвесной потолок</strong> с акустическими плитами в офисных зонах</li>
            <li><strong>Звукопоглощающие экраны</strong> вокруг шумного оборудования</li>
            <li><strong>Мягкая мебель и стеллажи с товаром</strong> — естественное поглощение звука</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Практика:</strong> для снижения шума дождя — выбирайте кровельную сэндвич-панель с наполнителем минвата (не ПИР). Минвата гасит ударный шум значительно лучше.
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
