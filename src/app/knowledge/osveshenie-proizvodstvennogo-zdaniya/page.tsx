import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Освещение в производственном здании | Нормы СП 52.13330",
  description: "Нормы освещённости для складов, цехов, мастерских по СП 52.13330. Типы светильников, расчёт количества и расположение.",
  keywords: ["освещение производственного здания", "нормы освещённости склада", "свет в ангаре", "СП 52.13330"],
};

const faqData = [
  {
    question: "Сколько люкс нужно на складе?",
    answer: "Для складов с напольным хранением — 75 лк, для стеллажного хранения — 200 лк, для зоны комплектации — 300 лк."
  },
  {
    question: "LED или ДРЛ — что выбрать?",
    answer: "LED экономичнее в 3-4 раза по электроэнергии, служит 50 000 часов (против 12 000 у ДРЛ) и не требует времени на разогрев."
  },
  {
    question: "Нужно ли естественное освещение?",
    answer: "По СП обязательно для постоянных рабочих мест. Решается светопрозрачными вставками в кровле или стеновыми окнами из поликарбоната."
  }
];

export default function OsvesheniePage() {
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
            Освещение в производственном здании
          </h1>

          <p className="text-muted mb-6">
            Нормы освещённости регулируются <strong>СП 52.13330.2016</strong>. Уровень зависит 
            от назначения помещения и характера работ. Для металлоконструкций оптимальны 
            промышленные LED-светильники с креплением к фермам.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Назначение</th>
                  <th className="text-left py-3 font-semibold">Норма, лк</th>
                  <th className="text-left py-3 font-semibold">Тип светильника</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Склад (напольное хранение)</td>
                  <td className="py-3 font-medium">75</td>
                  <td className="py-3 text-muted">LED highbay 100-150 Вт</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Склад (стеллажи)</td>
                  <td className="py-3 font-medium">200</td>
                  <td className="py-3 text-muted">LED highbay 150-200 Вт</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Производственный цех</td>
                  <td className="py-3 font-medium">300</td>
                  <td className="py-3 text-muted">LED highbay 200 Вт + локальные</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Автосервис / мастерская</td>
                  <td className="py-3 font-medium">300-500</td>
                  <td className="py-3 text-muted">LED панели + точечные</td>
                </tr>
                <tr>
                  <td className="py-3">Офис при производстве</td>
                  <td className="py-3 font-medium">400</td>
                  <td className="py-3 text-muted">LED панели 595×595</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Расчёт:</strong> Количество светильников = (площадь × норма лк) / (световой поток одного 
              светильника × коэффициент использования × коэффициент запаса).
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

          <Link href="/knowledge/vodostochnaya-sistema-angara/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Водосточная система для ангара
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
