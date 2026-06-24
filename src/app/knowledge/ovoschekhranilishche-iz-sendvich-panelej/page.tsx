import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Овощехранилище из сэндвич-панелей под ключ | Справочник ЛСТК",
  description: "Проектируем и строим овощехранилища из сэндвич-панелей. Цены от 4 600 ₽/м², вентиляция, герметичность, температурный режим.",
  keywords: ["овощехранилище", "овощехранилище из сэндвич-панелей", "строительство овощехранилища", "хранилище для овощей", "ЛСТК овощехранилище"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Овощехранилище из сэндвич-панелей под ключ",
    "description": "Проектируем и строим овощехранилища из сэндвич-панелей. Цены от 4 600 ₽/м², вентиляция, герметичность, температурный режим.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Овощехранилище из сэндвич-панелей под ключ</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>
          <>
<p>Овощехранилище из сэндвич-панелей — это быстровозводимое здание с контролируемым микроклиматом. МАКСТИЛ проектирует хранилища для картофеля, моркови, лука, капусты, яблок и других овощей и фруктов с учётом требований хранения.</p>

<h2>Особенности проектирования</h2>
<p>Главное в овощехранилище — вентиляция, герметичность и теплоизоляция. Стены и кровля из сэндвич-панелей 100–150 мм с минватой обеспечивают стабильную температуру и низкие затраты на отопление.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Толщина панелей — 100–150 мм для умеренного климата;</li>
<li>Принудительная вентиляция с регулировкой влажности;</li>
<li>Прочный пол, выдерживающий нагрузку от паллет и техники.</li>
</ul>

<h2>Цены на овощехранилище</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодное хранилище (профлист)</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Утеплённое сэндвич-панелями</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С вентиляцией и подготовкой под холод</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Сроки и гарантия</h2>
<p>Строительство овощехранилища площадью 500–1 000 м² занимает 45–60 дней. МАКСТИЛ даёт гарантию 5 лет на каркас и 3 года на монтажные узлы.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать овощехранилище</h3>
<p className="text-muted mb-4">Оставьте заявку — подберём комплектацию под вашу культуру и объём хранения.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
