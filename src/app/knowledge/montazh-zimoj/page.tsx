import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Монтаж ангара зимой: можно ли строить при морозе | Справочник ЛСТК",
  description: "Можно ли монтировать ЛСТК и сэндвич-панели зимой. Ограничения по температуре, особенности бетонирования и сварки на морозе.",
  keywords: ["монтаж ангара зимой", "строительство ангара зима", "ЛСТК зимой", "сэндвич-панели мороз"],
};

const faqData = [
  {
    question: "При какой температуре нельзя монтировать сэндвич-панели?",
    answer: "Производители рекомендуют не монтировать при −15°C и ниже: полимерное покрытие становится хрупким, уплотнители теряют эластичность. При −10…−15°C монтаж возможен с прогревом панелей."
  },
  {
    question: "Можно ли заливать фундамент зимой?",
    answer: "Да, с применением противоморозных добавок (до −15°C) или прогрева бетона (до −25°C). Стоимость зимнего бетонирования выше на 15–25% из-за добавок и укрывного материала."
  },
  {
    question: "Каркас ЛСТК монтируют зимой?",
    answer: "Да, без ограничений по температуре — болтовые соединения не зависят от мороза. Сварочные работы допускаются до −30°C при защите рабочей зоны от ветра."
  }
];

export default function MontazhZimojPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Монтаж ангара зимой: ограничения и особенности",
    "description": "При каких температурах можно строить ангар из ЛСТК.",
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
            Монтаж
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Монтаж ангара зимой
          </h1>

          <p className="text-muted mb-6">
            Строить ангар зимой можно — но с ограничениями. Каркас монтируют при любом морозе, а вот бетон и сэндвич-панели требуют соблюдения температурных условий.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Вид работ</th>
                  <th className="text-left py-3 font-semibold">Мин. температура</th>
                  <th className="text-left py-3 font-semibold">Условия</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Монтаж каркаса ЛСТК</td>
                  <td className="py-3 text-muted">Без ограничений</td>
                  <td className="py-3 text-muted">Болтовые соединения</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сварочные работы</td>
                  <td className="py-3 text-muted">до −30°C</td>
                  <td className="py-3 text-muted">Защита от ветра, предварительный прогрев</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Монтаж сэндвич-панелей</td>
                  <td className="py-3 text-muted">до −10°C</td>
                  <td className="py-3 text-muted">При −10…−15°C — прогрев панелей</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Бетонирование (с добавками)</td>
                  <td className="py-3 text-muted">до −15°C</td>
                  <td className="py-3 text-muted">Противоморозные добавки + укрывной материал</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Бетонирование (с прогревом)</td>
                  <td className="py-3 text-muted">до −25°C</td>
                  <td className="py-3 text-muted">Электропрогрев или тепляк. Удорожание +20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Плюсы зимнего строительства</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Подрядчики свободнее — меньше очередь, быстрее начало</li>
            <li>Цены на металл и услуги ниже в несезон (октябрь–февраль)</li>
            <li>К весне объект готов — сразу можно запускать производство</li>
            <li>Промёрзший грунт удерживает сваи надёжнее (на период монтажа)</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mb-3">Риски и как их избежать</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>Сколы на покрытии панелей</strong> — при морозе ниже −15°C транспортировать и монтировать аккуратно, хранить в тёплом месте</li>
            <li><strong>Некачественный бетон</strong> — требуйте акты прогрева и температурные журналы</li>
            <li><strong>Плохая герметизация стыков</strong> — герметик наносить только в плюсовую температуру (в тепляке)</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Практика МАКСТИЛ:</strong> мы строим ангары круглый год. Каркас монтируем при любом морозе, фундамент — с противоморозными добавками до −15°C. Панели завозим прогретыми.
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
