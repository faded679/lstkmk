import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар 15×30 м: проект, стоимость, сроки | Справочник ЛСТК",
  description: "Ангар 15×30 м (450 м²): стоимость каркаса, кровли и монтажа. Подходит для склада, мастерской, СТО на 3 поста. Цены из реального расчёта.",
  keywords: ["ангар 15 на 30", "ангар 15х30 цена", "склад 450 квадратных метров", "ангар 15х30 проект"],
};

const faqData = [
  {
    question: "Сколько стоит ангар 15×30 под ключ?",
    answer: "Холодный ангар (профлист) — от 2,2–2,8 млн ₽. Тёплый (сэндвич-панели 100 мм) — от 3,8–4,5 млн ₽. Стоимость зависит от высоты стен, типа фундамента и комплектации ворот."
  },
  {
    question: "Для чего подходит ангар 15×30?",
    answer: "СТО на 3–4 поста, небольшой склад 400–450 м², мастерская, автомойка, магазин стройматериалов. При высоте стен 4,5 м — хватит для грузовой техники."
  },
  {
    question: "Сколько строится ангар 15×30?",
    answer: "Каркас монтируется за 7–10 рабочих дней. С фундаментом, облицовкой и воротами — 4–6 недель. Если фундамент уже готов — от 2–3 недель до сдачи."
  }
];

export default function Angar15na30Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар 15×30 м: проект, стоимость, сроки",
    "description": "Стоимость и характеристики ангара 15×30 м из ЛСТК.",
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
            Объекты
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ангар 15×30 м
          </h1>

          <p className="text-muted mb-6">
            Площадь 450 м² — универсальный формат для малого бизнеса. Помещается 3–4 поста СТО, небольшой производственный цех или склад под одну фуру.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Технические характеристики</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Параметр</th>
                  <th className="text-left py-3 font-semibold">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Площадь</td>
                  <td className="py-3 text-muted">450 м²</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Высота боковой стены</td>
                  <td className="py-3 text-muted">3,6–6 м (по заказу)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Шаг колонн</td>
                  <td className="py-3 text-muted">5–6 м</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Уклон кровли</td>
                  <td className="py-3 text-muted">8–14° (двускатная)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Металлоёмкость каркаса</td>
                  <td className="py-3 text-muted">~29 кг/м²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Стоимость комплектаций</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Комплектация</th>
                  <th className="text-left py-3 font-semibold">Что включено</th>
                  <th className="text-left py-3 font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Холодный</td>
                  <td className="py-3 text-muted">Каркас + профлист + ворота</td>
                  <td className="py-3 font-medium">от 2 200 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Тёплый (сэндвич 100 мм)</td>
                  <td className="py-3 text-muted">Каркас + сэндвич + ворота</td>
                  <td className="py-3 font-medium">от 3 800 000 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Под ключ с фундаментом</td>
                  <td className="py-3 text-muted">Фундамент + всё выше + бетонный пол</td>
                  <td className="py-3 font-medium">от 5 200 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Типовые применения</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>СТО на 3–4 поста</strong> — рекомендуемая высота стен 4,5–5 м, ворота 4×4,5 м</li>
            <li><strong>Склад</strong> — при высоте 6 м можно установить стеллажи в 4 яруса</li>
            <li><strong>Производственный цех</strong> — при высоте 5 м помещается кран-балка до 3 т</li>
            <li><strong>Коровник на 30–40 голов</strong> — с зонированием на стойла, кормовой проход и навозный канал</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Цены МАКСТИЛ</strong> рассчитываются индивидуально под снеговой район, ветровую нагрузку и тип фундамента вашего участка. Расчёт бесплатно — за 15 минут.
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
