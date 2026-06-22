import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Приёмка ангара у подрядчика: чек-лист | Справочник ЛСТК",
  description: "Как принять построенный ангар: что проверить в каркасе, кровле, полах и документах. Чек-лист для заказчика перед подписанием акта.",
  keywords: ["приёмка ангара", "акт приёмки строительства", "проверка ангара", "сдача ангара подрядчиком"],
};

const faqData = [
  {
    question: "Можно ли отказаться подписывать акт?",
    answer: "Да. Если обнаружены существенные дефекты — составьте дефектный акт и укажите сроки устранения. Подписывайте итоговый акт только после исправления."
  },
  {
    question: "Нужен ли технический надзор при приёмке?",
    answer: "Для объектов дороже 5 млн рублей — настоятельно рекомендуется. Независимый технадзор видит скрытые дефекты и помогает грамотно оформить претензии."
  },
  {
    question: "Что делать, если подрядчик отказывается устранять недостатки?",
    answer: "Направьте письменную претензию. Если реакции нет — обращайтесь в суд. Договор подряда защищает заказчика: подрядчик несёт гарантийные обязательства 3–5 лет."
  }
];

export default function PriemkaAngaraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Приёмка ангара у подрядчика: чек-лист",
    "description": "Как принять построенный ангар. Что проверить перед подписанием акта.",
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
            Советы заказчику
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Приёмка ангара у подрядчика: чек-лист
          </h1>

          <p className="text-muted mb-6">
            Подписать акт и обнаружить проблемы через месяц — распространённая ошибка. Вот что нужно проверить до подписания.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Каркас и несущие конструкции</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Что проверить</th>
                  <th className="text-left py-3 font-semibold">Норма</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Вертикальность колонн</td>
                  <td className="py-3 font-medium">Отклонение не более 1/300 высоты</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Затяжка болтовых соединений</td>
                  <td className="py-3 font-medium">По проекту, с моментными ключами</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Антикоррозийная обработка</td>
                  <td className="py-3 font-medium">Грунт + краска или оцинковка по спецификации</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted">Опорные пятки и анкеры</td>
                  <td className="py-3 font-medium">Без зазоров, полная опора, затянуты</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Кровля и стены</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Нахлёсты сэндвич-панелей или профлиста — не менее 100–150 мм</li>
            <li>Все стыки и конёк загерметизированы, нет щелей</li>
            <li>Доборные элементы (конёк, отливы, углы) смонтированы без зазоров</li>
            <li>Крепёж кровельных саморезов — шаг по проекту, шляпки не вдавлены</li>
            <li>Отсутствие вмятин, царапин до металла (риск коррозии)</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mb-3">Ворота и двери</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Ворота открываются и закрываются без усилий</li>
            <li>Уплотнители по периметру — без разрывов</li>
            <li>Замки и засовы работают штатно</li>
            <li>Зазор между створками не более 5 мм</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mb-3">Документы при сдаче</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Документ</th>
                  <th className="text-left py-3 font-semibold">Зачем нужен</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Исполнительная документация (КМД)</td>
                  <td className="py-3 font-medium">Подтверждает соответствие проекту</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Акты скрытых работ (фундамент)</td>
                  <td className="py-3 font-medium">Доказательство качества фундамента</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 text-muted">Сертификаты на металл и панели</td>
                  <td className="py-3 font-medium">Подтверждают качество материалов</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted">Гарантийное письмо</td>
                  <td className="py-3 font-medium">Сроки и условия гарантии (min 3 года)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> не подписывайте акт, если хоть один пункт из списка не выполнен. После подписания претензии предъявить значительно сложнее.
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
