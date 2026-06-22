import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Канализация и водоснабжение в ангаре | Справочник ЛСТК",
  description: "Как подвести воду и канализацию в ангар. Требования к санузлу, мойке, производственной канализации. Стоимость инженерных сетей.",
  keywords: ["канализация в ангаре", "водоснабжение ангара", "инженерные сети склад", "санузел в ангаре"],
};

const faqData = [
  {
    question: "Обязателен ли санузел в ангаре?",
    answer: "Да, по СанПиН 2.2.3.1384-03 при численности работников от 5 человек необходим туалет. При 10+ работниках — с умывальником. Расстояние от рабочего места до туалета — не более 75 м."
  },
  {
    question: "Можно ли подключиться к центральной канализации?",
    answer: "Если ангар в населённом пункте с централизованными сетями — обычно можно. Нужно ТУ от водоканала и врезка. Для промышленных стоков может потребоваться локальная очистная установка."
  },
  {
    question: "Что делать, если нет центрального водоснабжения?",
    answer: "Бурят скважину (от 150 000 ₽) или строят накопительный колодец. Для технических нужд (мойка оборудования) часто достаточно ёмкости на 1–5 м³ с насосом и подвозом воды."
  }
];

export default function KanalizaciyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Канализация и водоснабжение в ангаре",
    "description": "Требования и решения для инженерных сетей в производственных зданиях.",
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
            Инженерия
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Канализация и водоснабжение в ангаре
          </h1>

          <p className="text-muted mb-6">
            Инженерные сети закладываются до заливки пола. Переделать после — дорого. Разбираем требования и типовые решения.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Нормы по санузлам</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Кол-во работников</th>
                  <th className="text-left py-3 font-semibold">Минимум по СанПиН</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">До 5 человек</td>
                  <td className="py-3 text-muted">Биотуалет допускается</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">5–30 человек</td>
                  <td className="py-3 text-muted">1 унитаз + умывальник</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">30–100 человек</td>
                  <td className="py-3 text-muted">Раздельные WC, душевая</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">100+ человек</td>
                  <td className="py-3 text-muted">Полноценный санузловый блок</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Решения по водоснабжению</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>Центральный водопровод</strong> — врезка по ТУ, стоимость подключения 30 000–150 000 ₽</li>
            <li><strong>Скважина</strong> — 40–150 м глубиной, стоимость 150 000–400 000 ₽ с насосом и автоматикой</li>
            <li><strong>Накопительная ёмкость</strong> — для небольшого потребления: ёмкость 2–5 м³ + насосная станция, от 50 000 ₽</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mb-3">Производственные трапы и канализация полов</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Трапы закладывают до заливки бетонного пола — уклон пола к трапу 0,5–1%</li>
            <li>Для автосервиса и мойки — жироуловитель и грязеуловитель перед выводом в канализацию</li>
            <li>Для производства с химикатами — нейтрализационный колодец</li>
            <li>Септик на участке — от 80 000 ₽ на 3–5 м³</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Важно:</strong> трубы канализации и водоснабжения укладываются до заливки фундаментной плиты или под бетонным полом. Предусмотрите все выводы заранее — вскрытие пола после заливки обойдётся в 50 000–100 000 ₽.
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
