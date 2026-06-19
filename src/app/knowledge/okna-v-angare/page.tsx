import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Окна в ангаре: типы остекления и нормы | МАКСТИЛ",
  description: "Окна в ангаре и складе ЛСТК: ПВХ, алюминий, фонари верхнего света. Нормы естественного освещения по СП 52.",
  keywords: ["окна в ангаре", "остекление склада", "фонари в ангаре", "окна в производственном здании"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/okna-v-angare/" },
};

const faqData = [
  {
    question: "Какая площадь остекления нужна для склада?",
    answer: "Минимум 10% от площади пола при естественном освещении. Для производства — 20-25%. Для холодильников окна не требуются."
  },
  {
    question: "Алюминий или ПВХ — что выбрать?",
    answer: "Для холодного склада — алюминий (дешевле и долговечнее). Для тёплого ангара — ПВХ с двухкамерным стеклопакетом."
  },
  {
    question: "Что такое световой фонарь?",
    answer: "Конструкция в кровле для верхнего естественного света. Полоса 1,5-3 м вдоль конька даёт равномерное освещение всей площади."
  }
];

export default function OknaVAngarePage() {
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
            Окна в ангаре
          </h1>

          <p className="text-muted mb-6">
            Естественное освещение снижает расходы на электричество и улучшает условия труда.
            Нормы по <strong>СП 52.13330.2016</strong> требуют коэффициент естественной освещённости
            не ниже 0,5% для складов и 1-3% для производств. Решение — окна по периметру или
            световые фонари в кровле.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Материал</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Ленточное</td>
                  <td className="py-3">Алюминий + стеклопакет</td>
                  <td className="py-3 text-muted">Производственные цеха</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Простеночное</td>
                  <td className="py-3">ПВХ или алюминий</td>
                  <td className="py-3 text-muted">Тёплые склады, бытовки</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Зенитный фонарь</td>
                  <td className="py-3">Поликарбонат, акрил</td>
                  <td className="py-3 text-muted">Кровельное освещение</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Сэндвич с окнами</td>
                  <td className="py-3">ПВХ-вставки в панель</td>
                  <td className="py-3 text-muted">Холодильники, спортзалы</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Энергоэффективность:</strong> двухкамерный стеклопакет с энергосберегающим
              напылением (i-стекло) снижает теплопотери в 2 раза по сравнению с обычным.
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

          <Link href="/knowledge/osveshenie-proizvodstvennogo-zdaniya/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Освещение в производственном здании
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
