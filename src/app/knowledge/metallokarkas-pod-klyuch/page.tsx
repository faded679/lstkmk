import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Металлокаркас под ключ: цены, сроки, проектирование | МАКСТИЛ",
  description: "Строительство зданий на металлокаркасе под ключ. Цены за м², сроки, этапы проектирования и монтажа. Когда выбирать металлокаркас вместо ЛСТК.",
  keywords: [
    "металлокаркас под ключ",
    "металлокаркас цена",
    "здание на металлокаркасе",
    "строительство металлокаркас",
    "металлокаркас за м2",
    "металлокаркас под ключ цена",
  ],
  openGraph: {
    title: "Металлокаркас под ключ: цены, сроки, проектирование",
    description: "Строительство зданий на металлокаркасе под ключ. Цены за м², сроки, этапы.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Металлокаркас под ключ: цены, сроки, проектирование",
    "description": "Строительство зданий на металлокаркасе под ключ. Цены за м², сроки, этапы проектирования и монтажа.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Металлокаркас под ключ: цены и сроки
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Металлоконструкции</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Цены</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Металлокаркас — это стальной силовой каркас из двутавров, швеллеров и сварных колонн. Такая технология применяется для больших пролётов, повышенных нагрузок и многоэтажных зданий. В отличие от ЛСТК, металлокаркас выдерживает пролёты свыше 30 м и краны грузоподъёмностью 20+ тонн.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Когда выбирать металлокаркас</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Пролёт здания более 24 м</li>
            <li>Мостовой кран грузоподъёмностью от 10 т</li>
            <li>Повышенные снеговые или ветровые нагрузки</li>
            <li>Многоэтажные производственные здания</li>
            <li>Спортивные залы, выставочные комплексы</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость металлокаркаса под ключ</h2>
          <p className="mb-4">
            Цена строительства на металлокаркасе стартует от <strong>18 000 ₽/м²</strong>. В стоимость входят проектирование, изготовление конструкций, фундамент, монтаж, кровля и стеновое покрытие.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Склад на металлокаркасе</td><td className="border border-slate-300 px-4 py-2">от 18 000 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Производственный цех</td><td className="border border-slate-300 px-4 py-2">от 22 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Здание с краном 20 т</td><td className="border border-slate-300 px-4 py-2">от 30 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Этапы строительства</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li>Инженерные изыскания и проектирование (КМ, КМД) — 15–30 дней</li>
            <li>Изготовление металлоконструкций — 30–45 дней</li>
            <li>Фундамент — 14–30 дней</li>
            <li>Монтаж каркаса — 30–60 дней</li>
            <li>Кровля, стены, инженерия — 20–40 дней</li>
          </ol>
          <p className="mb-4">Итого: <strong>90–180 дней</strong> в зависимости от сложности.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Металлокаркас vs ЛСТК</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Металлокаркас</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">ЛСТК</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Пролёт</td><td className="border border-slate-300 px-4 py-2">30–60+ м</td><td className="border border-slate-300 px-4 py-2">до 24 м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Нагрузка</td><td className="border border-slate-300 px-4 py-2">Высокая</td><td className="border border-slate-300 px-4 py-2">Средняя</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Цена</td><td className="border border-slate-300 px-4 py-2">от 18 000 ₽/м²</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽/м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Сроки</td><td className="border border-slate-300 px-4 py-2">90–180 дней</td><td className="border border-slate-300 px-4 py-2">45–60 дней</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Расчёт металлокаркаса под ключ</h3>
            <p className="text-muted mb-4">Наши инженеры подберут технологию под ваши нагрузки и пролёты.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
