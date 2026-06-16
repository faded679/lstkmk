import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Фундамент для коровника | Свайный, ленточный, плитный",
  description: "Какой фундамент выбрать для коровника. Сравнение свайного, ленточного и плитного фундамента для фермы КРС.",
  keywords: ["фундамент коровник", "фундамент для фермы", "свайный фундамент коровник", "ленточный фундамент"],
};

export default function FundamentKorovnikaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Фундамент для коровника
          </h1>
          
          <p className="text-muted mb-6">
            Для коровников из ЛСТК чаще всего используется свайно-ростверковый фундамент 
            — он быстрее и дешевле при условии нормальных грунтах.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Цена</th>
                  <th className="text-left py-3 font-semibold">Срок</th>
                  <th className="text-left py-3 font-semibold">Грунты</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Свайно-ростверковый ⭐</td>
                  <td className="py-3">от 800 ₽/м²</td>
                  <td className="py-3">3-5 дней</td>
                  <td className="py-3 text-muted">Нормальные, пучинистые</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Ленточный</td>
                  <td className="py-3">от 1200 ₽/м²</td>
                  <td className="py-3">7-14 дней</td>
                  <td className="py-3 text-muted">Нормальные</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Плитный</td>
                  <td className="py-3">от 1500 ₽/м²</td>
                  <td className="py-3">14-21 день</td>
                  <td className="py-3 text-muted">Сложные, слабые</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              ⭐ <strong>Рекомендуем свайный</strong> — для ЛСТК он оптимален: колонны ставятся на ростверк 
              через анкерные болты, что обеспечивает жёсткость и быстроту монтажа.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Нужна ли плита под коровник?</p>
              <p className="text-sm text-muted">Нет, пол делается отдельно — бетонная стяжка с уклоном для удаления навоза. Фундамент только под несущие колонны.</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Глубина заложения фундамента?</p>
              <p className="text-sm text-muted">В средней полосе — 1,2-1,5 м ниже уровня земли (ниже глубины промерзания). Зависит от региона.</p>
            </div>
          </div>

          <Link href="/knowledge/ventilyaciya-korovnika/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Вентиляция коровника
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
