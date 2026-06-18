import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ворота для ангара: типы и размеры | Подбор по технике",
  description: "Типы ворот для ангаров и складов: откатные, подъёмные секционные, рулонные, распашные. Размеры, скорость открывания, утепление.",
  keywords: ["ворота для ангара", "откатные ворота склад", "подъёмные ворота ангар", "размеры ворот ангара"],
};

const faqData = [
  {
    question: "Какие ворота лучше для фуры?",
    answer: "Для проезда еврофуры нужен проём минимум 4×4,2 м. Оптимальны секционные подъёмные ворота с доклевеллером или откатные."
  },
  {
    question: "Можно ли утеплить ворота?",
    answer: "Да. Секционные ворота с сэндвич-панелью 40 мм имеют коэффициент теплопередачи 0,5 Вт/м²·К — достаточно для отапливаемых зданий."
  },
  {
    question: "Какие ворота самые быстрые?",
    answer: "Скоростные рулонные ворота открываются со скоростью 1,5-3 м/с. Используются в логистике для сокращения теплопотерь."
  }
];

export default function VorotaPage() {
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
            Ворота для ангара: типы и размеры
          </h1>

          <p className="text-muted mb-6">
            Выбор ворот зависит от типа техники, частоты открывания и климата. 
            Для неотапливаемых ангаров подойдут откатные, для тёплых складов — секционные с утеплением.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип ворот</th>
                  <th className="text-left py-3 font-semibold">Макс. размер</th>
                  <th className="text-left py-3 font-semibold">Особенности</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Откатные</td>
                  <td className="py-3 font-medium">до 12×6 м</td>
                  <td className="py-3 text-muted">Простые, надёжные, без ограничений по высоте</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Подъёмные секционные</td>
                  <td className="py-3 font-medium">до 7×6 м</td>
                  <td className="py-3 text-muted">Утеплённые, герметичные, с электроприводом</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Рулонные (скоростные)</td>
                  <td className="py-3 font-medium">до 6×5 м</td>
                  <td className="py-3 text-muted">Быстрые, для частого открывания</td>
                </tr>
                <tr>
                  <td className="py-3">Распашные</td>
                  <td className="py-3 font-medium">до 6×4 м</td>
                  <td className="py-3 text-muted">Бюджетные, нужна зона распахивания</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Совет:</strong> Для ангаров с крановым оборудованием выбирайте откатные ворота — 
              они не занимают пространство под потолком в отличие от секционных.
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
