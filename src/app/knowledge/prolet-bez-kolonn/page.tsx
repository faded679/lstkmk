import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Максимальный пролёт без колонн | ЛСТК и фермы",
  description: "Максимальный свободный пролёт для зданий из металлоконструкций: 12, 18, 24, 36 м. От чего зависит и какую конструкцию выбрать.",
  keywords: ["пролёт без колонн", "максимальный пролёт ангара", "бесколонное здание", "ферма пролёт"],
};

const faqData = [
  {
    question: "Какой максимальный пролёт можно сделать из ЛСТК?",
    answer: "Из ЛСТК-профилей экономически целесообразен пролёт до 12-15 м. Для больших пролётов применяют горячекатаные фермы."
  },
  {
    question: "Можно ли сделать пролёт 30 м без промежуточных колонн?",
    answer: "Да, с помощью стропильных ферм из горячекатаного проката. Высота фермы в середине пролёта составит около 2-2,5 м."
  },
  {
    question: "Что дешевле — пролёт 18 м или два по 9 м с колонной?",
    answer: "Два пролёта по 9 м дешевле на 15-20% по каркасу. Но колонна в центре может мешать технологическому процессу."
  }
];

export default function ProletBezKolonnPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Максимальный пролёт без колонн
          </h1>

          <p className="text-muted mb-6">
            Свободный пролёт — расстояние между несущими стенами или колоннами без промежуточных 
            опор. Определяет полезную площадь здания и возможность размещения техники.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Пролёт</th>
                  <th className="text-left py-3 font-semibold">Конструкция</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">6-12 м</td>
                  <td className="py-3">ЛСТК рамы</td>
                  <td className="py-3 text-muted">Склады, гаражи, мастерские</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">12-18 м</td>
                  <td className="py-3">ЛСТК фермы</td>
                  <td className="py-3 text-muted">Производственные цеха, автосервисы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">18-24 м</td>
                  <td className="py-3">Горячекатаные фермы</td>
                  <td className="py-3 text-muted">Ангары, спортзалы, торговые залы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">24-36 м</td>
                  <td className="py-3">Тяжёлые фермы</td>
                  <td className="py-3 text-muted">Логистические центры, авиаангары</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">36-60 м</td>
                  <td className="py-3">Арочные / структурные</td>
                  <td className="py-3 text-muted">Стадионы, выставочные залы</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Правило:</strong> Высота стропильной фермы ≈ 1/8–1/12 от пролёта. 
              Для пролёта 24 м высота фермы составит 2–3 метра.
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

          <Link href="/knowledge/ognestojkost-metallokonstrukcij/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Огнестойкость металлоконструкций
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
