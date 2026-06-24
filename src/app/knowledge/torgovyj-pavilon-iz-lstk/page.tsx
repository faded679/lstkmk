import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство торгового павильона из ЛСТК под ключ | Справочник ЛСТК",
  description: "Проектируем и строим торговые павильоны из ЛСТК. Цены от 5 600 ₽/м², срок от 45 дней. Витрины, отделка, отопление, электрика.",
  keywords: ["торговый павильон из ЛСТК", "строительство павильона", "торговый павильон цена", "ЛСТК павильон", "павильон под ключ"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство торгового павильона из ЛСТК под ключ",
    "description": "Проектируем и строим торговые павильоны из ЛСТК. Цены от 5 600 ₽/м², срок от 45 дней. Витрины, отделка, отопление, электрика.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" }
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Строительство торгового павильона из ЛСТК под ключ</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Коммерция
          </div>
          <>
<p>Торговый павильон из ЛСТК — это быстровозводимое здание с тёплым контуром, готовое к эксплуатации в короткие сроки. МАКСТИЛ проектирует, производит каркас и монтирует павильоны под ключ: от фундамента до витрин и отделки.</p>

<h2>Когда выбирают ЛСТК для торговли</h2>
<p>Технология подходит для магазинов, рыночных павильонов, выставочных залов, торговых точек у трасс. Каркас лёгкий, не требует мощного фундамента, а монтаж занимает 2–4 недели. Срок службы оцинкованного профиля — более 50 лет.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Быстрый запуск бизнеса — от 45 дней под ключ;</li>
<li>Гибкая планировка под торговое оборудование;</li>
<li>Готовность к подключению электрики, отопления, водоснабжения.</li>
</ul>

<h2>Комплектация и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный торговый павильон</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый павильон с сэндвич-панелями</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С витринами, отделкой и инженерией</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Что входит в стоимость</h2>
<p>Проект КМ/КМД, изготовление каркаса ЛСТК, фундамент, кровля и ограждение из сэндвич-панелей, ворота и входные группы, монтаж. Дополнительно — витрины, отопление, вентиляция, электрика, отделка под ключ.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать торговый павильон</h3>
<p className="text-muted mb-4">Оставьте заявку — инженер МАКСТИЛ подготовит проект и смету за 1–2 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
