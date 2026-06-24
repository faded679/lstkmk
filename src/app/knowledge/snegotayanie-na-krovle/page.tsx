import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Система снеготаяния на кровле ангара: греющий кабель или самостёк | Справочник ЛСТК",
  description: "Снеготаяние на кровле ангара. Греющий кабель, самостёк, расчёт мощности, цены. Безопасность и долговечность.",
  keywords: ["снеготаяние на кровле", "греющий кабель кровля", "самостёк", "снегозадержание ангар", "снеготаяние ангар"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Система снеготаяния на кровле ангара: греющий кабель или самостёк",
    "description": "Снеготаяние на кровле ангара. Греющий кабель, самостёк, расчёт мощности, цены. Безопасность и долговечность.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Система снеготаяния на кровле ангара: греющий кабель или самостёк</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>Снеготаяние на кровле ангара предотвращает образование сосулек, завалов снега и повреждение водостоков. МАКСТИЛ проектирует системы снеготаяния для тёплых складов и общественных зданий.</p>

<h2>Варианты систем</h2>
<p>Греющий кабель — электрическая система, которая укладывается в местах скопления снега: в карнизах, в водостоках, в ендовах. Самостёк — конструктивное решение, когда уклон кровли и обогрев внутри здания обеспечивают естественное таяние.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Греющий кабель — точечный, мощность 250–400 Вт/м²;</li>
<li>Самостёк — работает за счёт уклона и тепла изнутри;</li>
<li>Снегозадержатели — удерживают снег на склоне.</li>
</ul>

<h2>Расчёт и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Элемент</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Греющий кабель с монтажом</td><td className="border border-slate-300 px-4 py-2">3 000–5 000 ₽/м²</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Снегозадержатели</td><td className="border border-slate-300 px-4 py-2">1 500–3 000 ₽/п.м.</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Обогрев водостоков</td><td className="border border-slate-300 px-4 py-2">1 000–2 000 ₽/п.м.</td></tr>
</tbody>
</table>
</div>

<h2>Что выбрать</h2>
<p>Для холодных ангаров достаточно снегозадержателей и правильного уклона. Для тёплых зданий с большим теплопритоком рекомендуется греющий кабель в карнизах и водостоках. МАКСТИЛ рассчитывает систему под снеговую нагрузку региона.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Спроектировать снеготаяние</h3>
<p className="text-muted mb-4">Укажите регион и тип кровли — подготовим расчёт.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
