import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Мостовой кран в ангаре: проектирование и цены | МАКСТИЛ",
  description: "Установка мостового крана в ангар ЛСТК: грузоподъёмность 1-50 т, подкрановые балки, требования к каркасу.",
  keywords: ["мостовой кран в ангаре", "подкрановые балки", "кран в ангар ЛСТК", "проектирование крана"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/mostovoj-kran-v-angare/" },
};

const faqData = [
  {
    question: "Можно ли поставить кран в готовый ангар?",
    answer: "Только если каркас изначально рассчитан на крановые нагрузки. Установка крана в обычный ангар требует усиления колонн и фундамента."
  },
  {
    question: "Какая высота нужна для крана 5 тонн?",
    answer: "Минимум 7-8 м в коньке: рельс — 4,5-5 м, габарит крана — 1,5 м, запас на подъём груза — 1-1,5 м."
  },
  {
    question: "Что дешевле — мостовой или козловой кран?",
    answer: "Козловой дешевле сам по себе, но мостовой не занимает пол ангара и эффективнее по площади."
  }
];

export default function MostovojKranPage() {
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
            Мостовой кран в ангаре
          </h1>

          <p className="text-muted mb-6">
            Мостовой кран — основное грузоподъёмное оборудование производственных и складских зданий.
            При проектировании ангара под кран увеличивают сечение колонн, добавляют подкрановые балки
            и усиливают фундамент. По <strong>ПБ 10-382-00</strong> кран регистрируется в Ростехнадзоре.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Г/п, т</th>
                  <th className="text-left py-3 font-semibold">Пролёт, м</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">1-3</td>
                  <td className="py-3">до 12</td>
                  <td className="py-3 text-muted">Автосервис, небольшие цеха</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">5</td>
                  <td className="py-3">12-18</td>
                  <td className="py-3 text-muted">Сборочные цеха, склады</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">10-16</td>
                  <td className="py-3">18-24</td>
                  <td className="py-3 text-muted">Машиностроение, металлобазы</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">20-50</td>
                  <td className="py-3">24-36</td>
                  <td className="py-3 text-muted">Тяжёлая промышленность</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Что входит в проект</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Усиленные колонны с консолями для подкрановых балок</li>
            <li>Подкрановые балки двутаврового сечения</li>
            <li>Тормозные конструкции и упоры</li>
            <li>Кабельный токоподвод или троллеи</li>
            <li>Расчёт фундамента с учётом крановых нагрузок</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> группа режима работы крана (А1-А8) определяет долговечность
              подкрановых конструкций. Для интенсивной работы выбирают А6-А8.
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

          <Link href="/knowledge/proizvodstvennyj-ceh/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Производственный цех из ЛСТК
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
