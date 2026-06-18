import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Срок службы здания из ЛСТК | Долговечность металлоконструкций",
  description: "Срок службы зданий из ЛСТК — от 50 лет. Факторы долговечности: цинкование, климат, эксплуатация. Сравнение с кирпичом и деревом.",
  keywords: ["срок службы ЛСТК", "долговечность металлоконструкций", "сколько стоит ЛСТК здание", "срок эксплуатации ангара"],
};

const faqData = [
  {
    question: "Правда ли что ЛСТК служит 50 лет?",
    answer: "Да, при толщине цинкового покрытия от 275 г/м² срок службы профиля составляет 50-70 лет без дополнительной обработки."
  },
  {
    question: "Что сокращает срок службы?",
    answer: "Агрессивная среда (химические пары, морской воздух), механические повреждения покрытия и отсутствие вентиляции в ограждающих конструкциях."
  },
  {
    question: "ЛСТК или кирпич — что долговечнее?",
    answer: "Кирпичное здание служит 80-100 лет, ЛСТК — 50-70 лет. Но ЛСТК строится в 3-4 раза быстрее и позволяет перестроить объект при смене назначения."
  }
];

export default function SrokSluzhbyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Срок службы здания из ЛСТК
          </h1>

          <p className="text-muted mb-6">
            Расчётный срок эксплуатации зданий из лёгких стальных тонкостенных конструкций — 
            <strong> от 50 лет</strong>. Фактический срок зависит от качества цинкового покрытия, 
            условий эксплуатации и правильности монтажа.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Покрытие профиля</th>
                  <th className="text-left py-3 font-semibold">Срок службы</th>
                  <th className="text-left py-3 font-semibold">Условия</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Цинк 120 г/м²</td>
                  <td className="py-3 font-medium">25-35 лет</td>
                  <td className="py-3 text-muted">Неотапливаемые здания</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Цинк 275 г/м²</td>
                  <td className="py-3 font-medium">50-70 лет</td>
                  <td className="py-3 text-muted">Стандарт для капитальных зданий</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Цинк + полимер</td>
                  <td className="py-3 font-medium">60-80 лет</td>
                  <td className="py-3 text-muted">Агрессивная среда</td>
                </tr>
                <tr>
                  <td className="py-3">Горячее цинкование</td>
                  <td className="py-3 font-medium">70-100 лет</td>
                  <td className="py-3 text-muted">Промышленные объекты</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> Срок службы каркаса и ограждающих конструкций различается. 
              Сэндвич-панели служат 25-30 лет, после чего заменяются без демонтажа каркаса.
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

          <Link href="/knowledge/minimalnyj-uklon-krovli/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Минимальный уклон кровли
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
