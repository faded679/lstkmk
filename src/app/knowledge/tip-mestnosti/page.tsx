import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Тип местности для строительства ангара и фермы | Справочник ЛСТК",
  description: "Категории местности А, Б, В, Г, Д по СП 131. Расчёт ветровой и снеговой нагрузки в зависимости от типа местности.",
  keywords: ["тип местности строительство", "категория местности А Б В Г Д", "ветровая нагрузка тип местности"],
};

const faqData = [
  {
    question: "Какой тип местности выбрать для коровника?",
    answer: "Для большинства районов России подходит тип Б — открытая местность с небольшими препятствиями. В горных районах — тип В или Г."
  },
  {
    question: "Влияет ли тип местности на цену строительства?",
    answer: "Да, чем выше ветровая нагрузка (тип А), тем мощнее требуется каркас, что увеличивает стоимость на 5-15%."
  }
];

export default function TipMestnostiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Тип местности для строительства",
    "description": "Категории местности А, Б, В, Г, Д и их влияние на проектирование",
    "author": {
      "@type": "Organization",
      "name": "ЛСТК-МК"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Тип местности для строительства
          </h1>
          
          <p className="text-muted mb-6">
            Тип местности определяет ветровую нагрузку на здание по СП 131.13330.2020. 
            От этого зависит расчёт несущих конструкций каркаса.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Описание</th>
                  <th className="text-left py-3 font-semibold">Примеры</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">А</td>
                  <td className="py-3 text-muted">Открытая местность</td>
                  <td className="py-3 text-muted">Степи, поля, берега водоёмов</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Б</td>
                  <td className="py-3 text-muted">Местность с препятствиями</td>
                  <td className="py-3 text-muted">Сельхозугодья, посадки</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">В</td>
                  <td className="py-3 text-muted">Города и леса</td>
                  <td className="py-3 text-muted">Населённые пункты, лесные массивы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Г</td>
                  <td className="py-3 text-muted">Горные районы до 1500м</td>
                  <td className="py-3 text-muted">Предгорья, плато</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Д</td>
                  <td className="py-3 text-muted">Горы выше 1500м</td>
                  <td className="py-3 text-muted">Высокогорье</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Коэффициенты ветровой нагрузки:</strong> А = 1,0; Б = 0,65; В = 0,4; Г и Д рассчитываются индивидуально.
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
            <Link 
              href="/knowledge/snegovoj-rajon/" 
              className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline"
            >
              Следующая статья: Снеговой район
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
