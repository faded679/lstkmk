import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Площадь на голову КРС | Нормы по СП для коровника",
  description: "Норма площади на 1 голову КРС по СП 56. Сколько квадратных метров нужно на корову в привязи и беспривязи.",
  keywords: ["площадь на голову крс", "норма площади на корову", "сколько метров на корову", "норма крс"],
};

export default function PloshchadKrsPage() {
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
            Площадь на голову КРС
          </h1>
          
          <p className="text-muted mb-6">
            По СП 56-102-95 норма площади для дойных коров составляет 6-7 м² в беспривязном содержании 
            и 5-6 м² в привязном.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип содержания</th>
                  <th className="text-left py-3 font-semibold">Норма площади</th>
                  <th className="text-left py-3 font-semibold">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Привязное</td>
                  <td className="py-3 font-medium">5-6 м²</td>
                  <td className="py-3 text-muted">На 1 голову</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Беспривязное (троссовое)</td>
                  <td className="py-3 font-medium">6-7 м²</td>
                  <td className="py-3 text-muted">На 1 голову</td>
                </tr>
                <tr>
                  <td className="py-3">Глубокая подстилка</td>
                  <td className="py-3 font-medium">7-8 м²</td>
                  <td className="py-3 text-muted">Свободный выгул</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Пример расчёта:</strong> Коровник на 100 голов беспривязного содержания 
              требует минимум 600-700 м² площади по нормам СП.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Можно ли уменьшить норму?</p>
              <p className="text-sm text-muted">Нет, ветеринарные нормы обязательны. Уменьшение площади приводит к санкциям и ухудшению продуктивности.</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Что включается в площадь?</p>
              <p className="text-sm text-muted">Площадь стойла + проходы. Площадь доильного зала, хранилища и техпомещений считается отдельно.</p>
            </div>
          </div>

          <Link href="/knowledge/shag-kollon/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Шаг колонн
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
