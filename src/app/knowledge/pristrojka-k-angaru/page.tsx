import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Пристройка к ангару: расширение площади | Справочник ЛСТК",
  description: "Как пристроить дополнительный пролёт к существующему ангару из ЛСТК. Варианты расширения, стоимость, нюансы примыкания кровли.",
  keywords: ["пристройка к ангару", "расширение ангара", "пристроить пролёт", "увеличить площадь ангара"],
};

const faqData = [
  {
    question: "Можно ли пристроить пролёт к любому ангару?",
    answer: "К ЛСТК — почти всегда, конструкция рассчитана на это. К горячекатаному каркасу — нужна проверка несущей способности существующих колонн и фундамента. К кирпичным стенам — сложнее, требует индивидуального решения."
  },
  {
    question: "Нужно ли новое разрешение на пристройку?",
    answer: "Если пристройка увеличивает площадь здания — технически это реконструкция. Требуется проект и уведомление в администрацию. Без оформления — риск штрафа и проблем при продаже."
  },
  {
    question: "Как решить стык кровли со старым зданием?",
    answer: "Примыкание кровли делается через фартук из оцинковки с нахлёстом на существующую кровлю не менее 200 мм + герметик. Если старая кровля профлист, а новая сэндвич — ставят промежуточный переходной элемент."
  }
];

export default function PristrojkaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Пристройка к ангару: расширение площади",
    "description": "Варианты расширения ангара из ЛСТК: пристройка пролёта.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" }
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

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
            Строительство
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Пристройка к ангару: расширение площади
          </h1>

          <p className="text-muted mb-6">
            Бизнес вырос и ангара не хватает? Пристройка пролёта — быстрее и дешевле, чем новое строительство. Разбираем варианты и стоимость.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Варианты расширения</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Вариант</th>
                  <th className="text-left py-3 font-semibold">Прирост площади</th>
                  <th className="text-left py-3 font-semibold">Ориентировочная цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Пристройка пролёта в длину (+6 м)</td>
                  <td className="py-3 text-muted">+ширина × 6 м</td>
                  <td className="py-3 font-medium">от 900 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Пристройка пролёта в ширину (+6 м)</td>
                  <td className="py-3 text-muted">+6 × длина м</td>
                  <td className="py-3 font-medium">от 1 200 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Антресольный этаж внутри</td>
                  <td className="py-3 text-muted">До 50% от площади</td>
                  <td className="py-3 font-medium">от 3 500 ₽/м²</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Пристройка бытового блока</td>
                  <td className="py-3 text-muted">50–200 м²</td>
                  <td className="py-3 font-medium">от 600 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Технические нюансы примыкания</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>Деформационный шов</strong> — между старым и новым зданием обязателен: ширина 20–30 мм, заполняется ПСУЛ-лентой</li>
            <li><strong>Отдельный фундамент</strong> — пристройка ставится на независимые сваи или ленту, не опирается на существующий фундамент</li>
            <li><strong>Кровля</strong> — примыкание через оцинкованный фартук с нахлёстом 200+ мм + силиконовый герметик</li>
            <li><strong>Торцевая стена</strong> — в существующем торце оставляются или прорезаются проёмы для соединения пространств</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Сроки:</strong> пристройка пролёта 12×18 м строится за 3–4 недели при готовом фундаменте. Производство при этом можно не останавливать.
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
        </article>
      </main>
    </div>
  );
}
