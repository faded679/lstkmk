import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Дренаж и ливневая канализация вокруг ангара | Справочник ЛСТК",
  description: "Дренаж и ливневая канализация вокруг ангара. Схемы, материалы, уклоны, сроки. Защита фундамента и площадки.",
  keywords: ["дренаж вокруг ангара", "ливневая канализация", "дренаж фундамента", "ливневка склад", "канализация ангар"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Дренаж и ливневая канализация вокруг ангара",
    "description": "Дренаж и ливневая канализация вокруг ангара. Схемы, материалы, уклоны, сроки. Защита фундамента и площадки.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Дренаж и ливневая канализация вокруг ангара</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>Дренаж и ливневая канализация защищают фундамент ангара от воды, предотвращают подтопление площадки и размытие грунта. МАКСТИЛ проектирует системы водоотведения в комплексе с фундаментом и благоустройством.</p>

<h2>Схема дренажа</h2>
<p>Периметральный дренаж укладывают вдоль фундамента на глубину ниже подошвы. Уклон труб — 1–2 см на погонный метр. Вода собирается в колодце-накопителе или отводится в ливневую канализацию.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Периметральный дренаж — 1,0–1,5 м от фундамента;</li>
<li>Уклон труб — 1–2 см/м;</li>
<li>Щебень фракции 20–40 мм, геотекстиль;</li>
<li>Колодец-накопитель или отвод в ливневку.</li>
</ul>

<h2>Ливневая канализация</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Элемент</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Периметральный дренаж п.м.</td><td className="border border-slate-300 px-4 py-2">1 500–2 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Лоток ливневой канализации п.м.</td><td className="border border-slate-300 px-4 py-2">3 000–6 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Колодец-накопитель</td><td className="border border-slate-300 px-4 py-2">20 000–50 000 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Интеграция с площадкой</h2>
<p>Площадка вокруг ангара делается с уклоном от здания, чтобы вода не застаивалась у фундамента. Въездные группы и пандусы также подключаются к ливневой канализации.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Спроектировать дренаж</h3>
<p className="text-muted mb-4">Расскажите о рельефе и грунтах — подготовим схему водоотведения.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
