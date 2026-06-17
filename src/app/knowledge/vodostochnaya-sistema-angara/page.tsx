import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Водосточная система для ангара | Расчёт и монтаж",
  description: "Водосточная система для ангара и склада: внутренний и наружный водосток, расчёт сечения желобов, материалы и особенности монтажа на сэндвич-кровле.",
  keywords: ["водосток для ангара", "водосточная система склада", "водоотвод с кровли", "желоба для ангара"],
};

const faqData = [
  {
    question: "Внутренний или наружный водосток — что лучше?",
    answer: "Для неотапливаемых зданий — наружный (проще, дешевле). Для отапливаемых в холодных регионах — внутренний (не замерзает)."
  },
  {
    question: "Какой диаметр трубы нужен?",
    answer: "Одна водосточная труба Ø100 мм обслуживает до 80 м² кровли. Ø150 мм — до 150 м². Расчёт зависит от интенсивности осадков в регионе."
  },
  {
    question: "Нужен ли обогрев водостока?",
    answer: "В регионах с частыми оттепелями — да. Греющий кабель в желобах предотвращает образование наледи и разрушение системы."
  }
];

export default function VodostochnayaSistemaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Водосточная система для ангара
          </h1>

          <p className="text-muted mb-6">
            Правильный водоотвод защищает фундамент и стены от разрушения. Для зданий 
            из металлоконструкций используют наружные подвесные системы или внутренний водосток 
            с выводом через фундамент.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип системы</th>
                  <th className="text-left py-3 font-semibold">Когда применяется</th>
                  <th className="text-left py-3 font-semibold">Материал</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Наружная подвесная</td>
                  <td className="py-3">Неотапливаемые ангары, навесы</td>
                  <td className="py-3 text-muted">Оцинковка, ПВХ</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Наружная парапетная</td>
                  <td className="py-3">Плоские кровли с парапетом</td>
                  <td className="py-3 text-muted">Оцинковка с полимером</td>
                </tr>
                <tr>
                  <td className="py-3">Внутренняя</td>
                  <td className="py-3">Отапливаемые склады, производства</td>
                  <td className="py-3 text-muted">ПВХ трубы, чугун</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>По СП 32.13330:</strong> Расчёт водостока ведётся по формуле Q = q₂₀ × F × ψ, 
              где q₂₀ — интенсивность дождя (л/с на га), F — площадь водосбора, ψ — коэффициент стока.
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

          <Link href="/knowledge/antikorrozijnaya-obrabotka/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Антикоррозийная обработка профиля
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
