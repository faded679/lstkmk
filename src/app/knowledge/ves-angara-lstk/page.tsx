import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Сколько весит ангар из ЛСТК: металлоёмкость конструкций | Справочник ЛСТК",
  description: "Вес каркаса ангара из ЛСТК на 1 м²: нормы металлоёмкости для разных пролётов. Почему это важно при проектировании фундамента.",
  keywords: ["вес ангара ЛСТК", "металлоёмкость ангара", "вес каркаса", "нагрузка на фундамент"],
};

const faqData = [
  {
    question: "Зачем знать вес каркаса?",
    answer: "Вес каркаса — исходная нагрузка для расчёта фундамента. Чем тяжелее каркас, тем мощнее нужны сваи или лента. Для ЛСТК нагрузка в 3–5 раз меньше, чем у горячекатаного каркаса."
  },
  {
    question: "Почему у широких пролётов меньше металлоёмкость на м²?",
    answer: "Эффект масштаба: колонны и прогоны используются эффективнее. Ангар 36 м шириной расходует ~28 кг/м², а ангар 12 м — ~30 кг/м² при той же высоте."
  },
  {
    question: "Как снизить вес каркаса?",
    answer: "Оптимизировать шаг колонн (обычно 6 м), использовать фермы вместо сплошных балок на широких пролётах, применять более высокопрочный профиль с меньшей толщиной стенки."
  }
];

export default function VesAngaraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Сколько весит ангар из ЛСТК",
    "description": "Металлоёмкость каркаса ЛСТК на м² для разных пролётов.",
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
            Конструкции
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Сколько весит ангар из ЛСТК
          </h1>

          <p className="text-muted mb-6">
            Металлоёмкость — ключевой показатель при расчёте фундамента и стоимости каркаса. Данные из реальных проектов МАКСТИЛ.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Ширина пролёта</th>
                  <th className="text-left py-3 font-semibold">Высота стены</th>
                  <th className="text-left py-3 font-semibold">Металлоёмкость, кг/м²</th>
                  <th className="text-left py-3 font-semibold">Цена каркаса, ₽/м²</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">12 м</td>
                  <td className="py-3 text-muted">4 м</td>
                  <td className="py-3 font-medium">~30 кг/м²</td>
                  <td className="py-3 font-medium">~5 460 ₽/м²</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">18 м</td>
                  <td className="py-3 text-muted">7 м</td>
                  <td className="py-3 font-medium">~29,5 кг/м²</td>
                  <td className="py-3 font-medium">~5 520 ₽/м²</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">24 м</td>
                  <td className="py-3 text-muted">7 м</td>
                  <td className="py-3 font-medium">~28,4 кг/м²</td>
                  <td className="py-3 font-medium">~4 650 ₽/м²</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">36 м</td>
                  <td className="py-3 text-muted">7 м</td>
                  <td className="py-3 font-medium">~27,9 кг/м²</td>
                  <td className="py-3 font-medium">~4 960 ₽/м²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Сравнение с другими конструкциями</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип каркаса</th>
                  <th className="text-left py-3 font-semibold">Металлоёмкость, кг/м²</th>
                  <th className="text-left py-3 font-semibold">Нагрузка на фундамент</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">ЛСТК (тонкостенный)</td>
                  <td className="py-3 text-muted">25–32</td>
                  <td className="py-3 font-medium">Низкая</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Горячекатаный прокат</td>
                  <td className="py-3 text-muted">45–80</td>
                  <td className="py-3 font-medium">Средняя</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Железобетон</td>
                  <td className="py-3 text-muted">300–600</td>
                  <td className="py-3 font-medium">Высокая</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Практический вывод:</strong> лёгкий каркас ЛСТК позволяет использовать свайный фундамент там, где для ЖБ потребовалась бы монолитная плита. Экономия на фундаменте — до 30%.
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
