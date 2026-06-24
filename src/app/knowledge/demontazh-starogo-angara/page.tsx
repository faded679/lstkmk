import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Сколько стоит демонтировать старый ангар и построить новый | Справочник ЛСТК",
  description: "Демонтаж старого ангара и строительство нового из ЛСТК. Стоимость демонтажа, вывоза, фундамента, нового ангара. Сроки и порядок работ.",
  keywords: ["демонтаж ангара", "разборка старого ангара", "строительство нового ангара", "демонтаж металлоконструкций", "замена ангара"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Сколько стоит демонтировать старый ангар и построить новый",
    "description": "Демонтаж старого ангара и строительство нового из ЛСТК. Стоимость демонтажа, вывоза, фундамента, нового ангара. Сроки и порядок работ.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Сколько стоит демонтировать старый ангар и построить новый</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сервис
          </div>
          <>
<p>Если старый ангар износился, не соответствует задачам или требует полной замены, выгоднее снести его и построить новый из ЛСТК. МАКСТИЛ выполняет демонтаж, вывоз, проектирование и строительство нового здания под ключ.</p>

<h2>Стоимость демонтажа</h2>
<p>Цена зависит от площади, типа конструкций, доступа техники, необходимости вывоза металлолома и утилизации покрытия. Демонтаж лёгкого ангара ЛСТК обычно дешевле, чем металлокаркаса или кирпичного здания.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Демонтаж каркаса — 300–700 ₽/м²;</li>
<li>Демонтаж кровли и ограждения — 150–400 ₽/м²;</li>
<li>Вывоз и утилизация — по объёму;</li>
<li>Разборка фундамента — отдельно по смете.</li>
</ul>

<h2>Цены на новый ангар</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Этап</th><th className="border border-slate-300 px-4 py-2 text-left">Стоимость</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Демонтаж старого ангара</td><td className="border border-slate-300 px-4 py-2">300–700 ₽/м²</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Новый холодный ангар ЛСТК</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽/м²</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Новый тёплый ангар ЛСТК</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽/м²</td></tr>
</tbody>
</table>
</div>

<h2>Порядок работ</h2>
<p>Обследование, смета, демонтаж, вывоз, подготовка площадки, фундамент, производство каркаса, монтаж, кровля, сдача. Общий срок — от 2 до 4 месяцев в зависимости от площади.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Заменить старый ангар</h3>
<p className="text-muted mb-4">Оставьте заявку — выезд инженера и смета бесплатно.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
