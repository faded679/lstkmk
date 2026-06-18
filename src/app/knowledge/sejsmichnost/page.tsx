import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Сейсмичность 7, 8, 9 баллов | Требования к строительству",
  description: "Сейсмические районы России. Строительство в сейсмических зонах 7, 8, 9 баллов — требования к конструкциям ЛСТК.",
  keywords: ["сейсмичность 7 баллов", "сейсмичность 8 баллов", "сейсмичность 9 баллов", "строительство в сейсмической зоне"],
};

const sejsmData = [
  { ball: "5-6", zone: "Несейсмическая", trebovaniya: "Стандартное проектирование" },
  { ball: "7", zone: "Слабосейсмическая", trebovaniya: "Усиленные соединения, арматура" },
  { ball: "8", zone: "Среднесейсмическая", trebovaniya: "Специальный расчёт, диафрагмы жёсткости" },
  { ball: "9", zone: "Сильносейсмическая", trebovaniya: "Индивидуальный проект, усиленный фундамент" },
  { ball: "9+", zone: "Особо сейсмическая", trebovaniya: "Специальные мероприятия, экспертиза" },
];

const faqData = [
  {
    question: "Можно ли строить ЛСТК в сейсмических зонах?",
    answer: "Да, ЛСТК допускается для зон 7-8 баллов при соблюдении СП 16 и усилении узлов. Для 9 баллов требуется специальный расчёт."
  },
  {
    question: "Где в России 9 баллов сейсмичности?",
    answer: "Камчатка, Курилы, часть Сахалина, горные районы Кавказа. В европейской части России максимум 7 баллов."
  }
];

export default function SejsmichnostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Сейсмичность 7, 8, 9 баллов",
    "description": "Сейсмические районы и требования к строительству из ЛСТК",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Сейсмичность 7, 8, 9 баллов
          </h1>
          
          <p className="text-muted mb-6">
            Сейсмичность определяет требования к конструктивной схеме здания по СП 14.13330.2014. 
            Для ЛСТК важно правильно спроектировать узлы соединения.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Баллы</th>
                  <th className="text-left py-3 font-semibold">Зона</th>
                  <th className="text-left py-3 font-semibold">Требования к ЛСТК</th>
                </tr>
              </thead>
              <tbody>
                {sejsmData.map((item, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{item.ball}</td>
                    <td className="py-3 text-muted">{item.zone}</td>
                    <td className="py-3 text-muted">{item.trebovaniya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> В сейсмических зонах обязательна развязка инженерных сетей, 
              гибкие вводы и резервирование несущих элементов.
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

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/knowledge/tolshina-sendvich-panelej/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
              Следующая статья: Толщина сэндвич-панелей
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
