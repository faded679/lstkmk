import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Каркасное здание под ключ: что входит в цену и как не переплатить | Справочник ЛСТК",
  description: "Каркасное здание из ЛСТК под ключ. Что входит в цену: проект, фундамент, каркас, кровля, утепление, монтаж. Цены от 4 500 ₽/м².",
  keywords: ["каркасное здание под ключ", "каркасное здание из ЛСТК", "что входит в цену ангара", "каркасное здание цена", "ЛСТК под ключ"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Каркасное здание под ключ: что входит в цену и как не переплатить",
    "description": "Каркасное здание из ЛСТК под ключ. Что входит в цену: проект, фундамент, каркас, кровля, утепление, монтаж. Цены от 4 500 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Каркасное здание под ключ: что входит в цену и как не переплатить</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Технологии
          </div>
          <>
<p>Каркасное здание под ключ — это комплексное решение, когда заказчик получает готовый объект с проектом, фундаментом, каркасом, кровлей, ограждением и монтажом. МАКСТИЛ строит каркасные здания из ЛСТК без скрытых доплат.</p>

<h2>Что входит в цену</h2>
<p>Под ключ означает, что в смету включены все основные работы: инженерные изыскания, проект КМ/КМД, производство металлоконструкций, фундамент, кровля, стеновое покрытие, ворота, монтаж каркаса и сдача объекта. Дополнительно можно заказать утепление, отопление, электрику и вентиляцию.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Проектирование и согласование;</li>
<li>Производство ЛСТК-профиля и деталей;</li>
<li>Фундамент, кровля, ограждение;</li>
<li>Монтаж и гарантия 5 лет.</li>
</ul>

<h2>Цены на каркасное здание</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный ангар/склад</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплое каркасное здание</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С утеплением и инженерией</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Как не переплатить</h2>
<p>Сравнивайте сметы построчно, уточняйте, входит ли фундамент и ворота, проверяйте толщину утеплителя и марку стали. МАКСТИЛ фиксирует цену в договоре — никаких неожиданных доплат.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать каркасное здание</h3>
<p className="text-muted mb-4">Оставьте заявку — получите детальную смету под ключ.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
