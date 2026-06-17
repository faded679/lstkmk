import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Антикоррозийная обработка профиля | Цинкование vs окраска",
  description: "Методы антикоррозийной защиты металлоконструкций: горячее цинкование, холодное цинкование, порошковая окраска. Сравнение сроков и условий.",
  keywords: ["антикоррозийная обработка металлоконструкций", "цинкование профиля", "защита от коррозии сталь", "порошковая окраска металла"],
};

const faqData = [
  {
    question: "Горячее цинкование или порошковая окраска?",
    answer: "Горячее цинкование — для агрессивной среды и скрытых конструкций (50+ лет). Порошковая окраска — для видимых элементов с эстетическими требованиями (15-25 лет)."
  },
  {
    question: "Что такое холодное цинкование?",
    answer: "Нанесение цинксодержащего состава кистью или краскопультом. Бюджетное решение для ремонта и труднодоступных мест. Срок защиты — 10-15 лет."
  },
  {
    question: "Нужна ли обработка для оцинкованного профиля?",
    answer: "Заводская оцинковка 275 г/м² защищает на 50 лет. Дополнительная обработка нужна только в агрессивных условиях (химпром, побережье)."
  }
];

export default function AntikorrozijnayaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Антикоррозийная обработка профиля
          </h1>

          <p className="text-muted mb-6">
            Коррозия — главный враг стальных конструкций. Правильная защита увеличивает 
            срок службы здания в 2-3 раза. Метод выбирается по условиям эксплуатации и бюджету.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Метод</th>
                  <th className="text-left py-3 font-semibold">Срок защиты</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Горячее цинкование</td>
                  <td className="py-3 font-medium">50-80 лет</td>
                  <td className="py-3 text-muted">Каркасы, фермы, закладные</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Термодиффузионное цинкование</td>
                  <td className="py-3 font-medium">40-60 лет</td>
                  <td className="py-3 text-muted">Крепёж, метизы, мелкие детали</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Порошковая окраска</td>
                  <td className="py-3 font-medium">15-25 лет</td>
                  <td className="py-3 text-muted">Фасады, ограждения, видимые элементы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Холодное цинкование</td>
                  <td className="py-3 font-medium">10-15 лет</td>
                  <td className="py-3 text-muted">Ремонт, сварные швы, труднодоступные места</td>
                </tr>
                <tr>
                  <td className="py-3">Грунт-эмаль 3 в 1</td>
                  <td className="py-3 font-medium">5-10 лет</td>
                  <td className="py-3 text-muted">Бюджетное решение, требует обновления</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>По ГОСТ 9.307-89:</strong> Толщина цинкового покрытия при горячем цинковании — 
              не менее 60 мкм для конструкций с расчётным сроком службы более 30 лет.
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

          <Link href="/knowledge/poly-v-promyshlennom-zdanii/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Полы в промышленном здании
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
