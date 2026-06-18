import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Высота коровника в коньке | Стандарт для фермы КРС",
  description: "Оптимальная высота коровника в коньке. Стандартная высота для коровников 50, 100, 200 голов по СП 56.",
  keywords: ["высота коровника", "высота в коньке", "коровник высота потолка", "ферма высота"],
};

const faqData = [
  {
    question: "Почему высота именно 4 метра?",
    answer: "4 метра — оптимальная высота для вентиляции и удаления влаги. Ниже — плохой воздухообмен, выше — излишние теплопотери."
  },
  {
    question: "Можно ли сделать коровник выше 4 метров?",
    answer: "Можно, но это увеличит стоимость строительства на 10-15% из-за дополнительных материалов на каркас и утепление."
  }
];

export default function VysotaKorovnikaPage() {
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
            Высота коровника в коньке
          </h1>
          
          <p className="text-muted mb-6">
            Стандартная высота коровника — 4 метра в коньке. Эта высота оптимальна 
            для вентиляции, освещения и обслуживания животных.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Вместимость</th>
                  <th className="text-left py-3 font-semibold">Высота в коньке</th>
                  <th className="text-left py-3 font-semibold">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">До 50 голов</td>
                  <td className="py-3 font-medium">4,0 м</td>
                  <td className="py-3 text-muted">Стандартное решение</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">50-100 голов</td>
                  <td className="py-3 font-medium">4,0 м</td>
                  <td className="py-3 text-muted">Стандартное решение</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">100-200 голов</td>
                  <td className="py-3 font-medium">4,0-4,5 м</td>
                  <td className="py-3 text-muted">Для улучшенной вентиляции</td>
                </tr>
                <tr>
                  <td className="py-3">Более 200 голов</td>
                  <td className="py-3 font-medium">4,5 м</td>
                  <td className="py-3 text-muted">Промышленные фермы</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>По СП 56-102-95:</strong> Минимальная высота в коньке для коровников — 3,5 м. 
              Рекомендуемая — 4,0-4,5 м для естественной вентиляции.
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

          <Link href="/knowledge/ploshchad-na-golovu-krs/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Площадь на голову КРС
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
