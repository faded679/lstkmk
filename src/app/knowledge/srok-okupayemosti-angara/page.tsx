import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Срок окупаемости ангара: расчёт для склада и производства | Справочник ЛСТК",
  description: "Как рассчитать окупаемость собственного ангара. Сравнение со стоимостью аренды. Реальные сроки — 3–6 лет в зависимости от региона.",
  keywords: ["окупаемость ангара", "срок окупаемости склада", "выгодно ли строить ангар", "инвестиции в ангар"],
};

const faqData = [
  {
    question: "Какой срок окупаемости считается нормальным?",
    answer: "Для производственных зданий — 4–7 лет. Для ангара под сдачу в аренду — 5–8 лет. Если используете для собственного бизнеса и экономите на аренде — 3–5 лет."
  },
  {
    question: "Влияет ли регион на окупаемость?",
    answer: "Да. В Москве и Московской области аренда в 3–4 раза выше, чем в регионах — окупаемость короче. В малых городах при низких арендных ставках срок может превысить 10 лет."
  },
  {
    question: "Можно ли сдавать ангар в аренду и ускорить окупаемость?",
    answer: "Да. Ангар 500 м² в центральном регионе можно сдать за 100 000–200 000 ₽/месяц. При стоимости строительства 6 млн — окупаемость 3–5 лет."
  }
];

export default function SrokOkupayemostiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Срок окупаемости ангара",
    "description": "Расчёт окупаемости собственного ангара из ЛСТК.",
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
            Цены
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Срок окупаемости ангара
          </h1>

          <p className="text-muted mb-6">
            Простая формула: стоимость строительства ÷ ежемесячная экономия на аренде = срок окупаемости в месяцах.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Примеры расчёта (центральный регион)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Площадь</th>
                  <th className="text-left py-3 font-semibold">Стройка под ключ</th>
                  <th className="text-left py-3 font-semibold">Экономия на аренде/мес</th>
                  <th className="text-left py-3 font-semibold">Срок окупаемости</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">288 м²</td>
                  <td className="py-3 text-muted">~2,8 млн ₽</td>
                  <td className="py-3 font-medium">~72 000 ₽</td>
                  <td className="py-3 font-medium text-green-600">~3,2 года</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">500 м²</td>
                  <td className="py-3 text-muted">~5,5 млн ₽</td>
                  <td className="py-3 font-medium">~150 000 ₽</td>
                  <td className="py-3 font-medium text-green-600">~3,1 года</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">1 080 м²</td>
                  <td className="py-3 text-muted">~9,5 млн ₽</td>
                  <td className="py-3 font-medium">~270 000 ₽</td>
                  <td className="py-3 font-medium text-green-600">~2,9 года</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">1 440 м²</td>
                  <td className="py-3 text-muted">~12 млн ₽</td>
                  <td className="py-3 font-medium">~360 000 ₽</td>
                  <td className="py-3 font-medium text-green-600">~2,8 года</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted mb-6">
            * Аренда тёплого склада в центральном регионе — 250–350 ₽/м²/месяц. Расчёт из 300 ₽/м²/мес.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Что ускоряет окупаемость</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Высокие арендные ставки в регионе (Москва, МО, Петербург)</li>
            <li>Сдача части площади третьим лицам</li>
            <li>Использование для интенсивного производства (высокая добавленная стоимость)</li>
            <li>Экономия на логистике — здание рядом с производством или клиентами</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> после окупаемости ангар продолжает работать 50+ лет, а арендные ставки растут ежегодно. Собственное здание — защита от роста аренды и непродления договоров.
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
