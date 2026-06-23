import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Здание из ЛСТК под ключ: стоимость, сроки, виды | МАКСТИЛ",
  description: "Строительство зданий из ЛСТК под ключ. Цены за м², сроки, виды зданий. Ангары, склады, цеха, сельхоз объекты из лёгких стальных конструкций.",
  keywords: [
    "здание из ЛСТК",
    "ЛСТК под ключ",
    "строительство из ЛСТК",
    "здание из ЛСТК цена",
    "здание из ЛСТК под ключ",
    "быстровозводимое здание ЛСТК",
  ],
  openGraph: {
    title: "Здание из ЛСТК под ключ: стоимость, сроки, виды",
    description: "Строительство зданий из ЛСТК под ключ. Цены за м², сроки, виды зданий.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Здание из ЛСТК под ключ: стоимость, сроки, виды",
    "description": "Строительство зданий из ЛСТК под ключ. Цены за м², сроки, виды зданий.",
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
            Здание из ЛСТК под ключ: стоимость и сроки
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">ЛСТК</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Технологии</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            ЛСТК (лёгкие стальные тонкостенные конструкции) — современная технология строительства, которая заменяет тяжёлый металлокаркас и кирпич. Здание из ЛСТК возводится в 2–3 раза быстрее, при этом стоит на 30–40% дешевле классики.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Какие здания строят из ЛСТК</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Ангары и склады</li>
            <li>Производственные цеха и мастерские</li>
            <li>Автосервисы и СТО</li>
            <li>Коровники и сельхозздания</li>
            <li>Торговые павильоны и магазины</li>
            <li>Гаражи и навесы</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость здания из ЛСТК под ключ</h2>
          <p className="mb-4">
            Цены за м² в 2025 году: холодное здание — от <strong>4 500 ₽</strong>, тёплое — от <strong>9 000 ₽</strong>, производственное с краном — от <strong>11 000 ₽</strong>.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Сроки</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный ангар</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td><td className="border border-slate-300 px-4 py-2">45–60 дней</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый склад</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td><td className="border border-slate-300 px-4 py-2">60–90 дней</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Производственный цех</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td><td className="border border-slate-300 px-4 py-2">90–120 дней</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Коровник</td><td className="border border-slate-300 px-4 py-2">от 8 000 ₽</td><td className="border border-slate-300 px-4 py-2">60–90 дней</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Этапы строительства здания из ЛСТК</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li>Проектирование и расчёт — 10–15 дней</li>
            <li>Изготовление ЛСТК-профиля — 15–30 дней</li>
            <li>Фундамент — 7–21 день</li>
            <li>Монтаж каркаса — 10–30 дней</li>
            <li>Кровля и стены — 10–20 дней</li>
            <li>Инженерия и отделка — 7–20 дней</li>
          </ol>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Преимущества ЛСТК</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Быстрый монтаж без сварки</li>
            <li>Лёгкий вес — экономия на фундаменте</li>
            <li>Оцинкованный профиль — 50+ лет без коррозии</li>
            <li>Низкая стоимость по сравнению с кирпичом и металлокаркасом</li>
            <li>Легко модернизировать и расширять</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Построим здание из ЛСТК под ключ</h3>
            <p className="text-muted mb-4">Проект, производство, монтаж и сдача — полный цикл от МАКСТИЛ.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать здание
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
