import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Теплотехнический расчёт ангара: как не переплатить за отопление | Справочник ЛСТК",
  description: "Теплотехнический расчёт ангара. Теплопотери, сопротивление теплопередаче, выбор утеплителя, мощность отопления. Экономия.",
  keywords: ["теплотехнический расчёт ангара", "теплопотери ангара", "утепление ангара", "расчёт отопления ангара", "сопротивление теплопередаче"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Теплотехнический расчёт ангара: как не переплатить за отопление",
    "description": "Теплотехнический расчёт ангара. Теплопотери, сопротивление теплопередаче, выбор утеплителя, мощность отопления. Экономия.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Теплотехнический расчёт ангара: как не переплатить за отопление</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>Теплотехнический расчёт позволяет подобрать толщину сэндвич-панелей и мощность отопления так, чтобы не переплачивать ни за утепление, ни за эксплуатацию. МАКСТИЛ выполняет расчёты по СП 50.13330 для каждого региона.</p>

<h2>Основные параметры</h2>
<p>Главный показатель — сопротивление теплопередаче R (м²·°C/Вт). Для стен склада в средней полосе России R ≥ 2,5–3,0, для кровли — ≥ 3,5–4,0. Чем выше R, тем меньше теплопотери и затраты на отопление.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Минвата 100 мм — R ≈ 2,5;</li>
<li>Минвата 150 мм — R ≈ 3,7;</li>
<li>ПИР 100 мм — R ≈ 4,5;</li>
<li>Мощность отопления зависит от теплопотерь и режима.</li>
</ul>

<h2>Расчёт мощности отопления</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th><th className="border border-slate-300 px-4 py-2 text-left">Удельная мощность</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Склад с утеплением 100 мм</td><td className="border border-slate-300 px-4 py-2">80–100 Вт/м²</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Производственный цех 150 мм</td><td className="border border-slate-300 px-4 py-2">60–80 Вт/м²</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Холодный ангар</td><td className="border border-slate-300 px-4 py-2">не отапливается</td></tr>
</tbody>
</table>
</div>

<h2>Как сэкономить</h2>
<p>Правильный расчёт толщины утеплителя, герметичные ворота, инфракрасные обогреватели, рекуперация воздуха — всё это снижает расходы на отопление в 2–3 раза. МАКСТИЛ подбирает оптимальную комплектацию под бюджет.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Теплотехнический расчёт</h3>
<p className="text-muted mb-4">Закажите расчёт — подберём утепление и отопление без переплат.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
