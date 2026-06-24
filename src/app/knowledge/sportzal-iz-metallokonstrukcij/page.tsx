import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Спортзал из металлоконструкций: размеры, покрытие, цена | Справочник ЛСТК",
  description: "Строительство спортзалов из ЛСТК. Площади, высота, покрытие, освещение, цены от 5 600 ₽/м². Срок от 60 дней.",
  keywords: ["спортзал из металлоконструкций", "спортзал из ЛСТК", "строительство спортзала", "спортзал цена", "спортивный зал ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Спортзал из металлоконструкций: размеры, покрытие, цена",
    "description": "Строительство спортзалов из ЛСТК. Площади, высота, покрытие, освещение, цены от 5 600 ₽/м². Срок от 60 дней.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Спортзал из металлоконструкций: размеры, покрытие, цена</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Коммерция
          </div>
          <>
<p>Спортзал из металлоконструкций ЛСТК — это быстровозводимое здание с большим свободным пролётом, высоким потолком и возможностью установки любого спортивного покрытия. МАКСТИЛ строит спортивные залы для школ, клубов, фитнес-центров и частных объектов.</p>

<h2>Размеры и нормы</h2>
<p>Минимальная высота в коньке для спортзала — 6–8 м, ширина — от 12 м, длина — от 24 м. Для полноценного баскетбольного зала нужно 15×28 м, для волейбольного — 9×18 м. ЛСТК позволяет делать пролёты до 24 м без промежуточных колонн.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Высота в коньке — от 6 м;</li>
<li>Пролёт — до 24 м без колонн;</li>
<li>Освещённость — 300–500 люкс;</li>
<li>Покрытие — паркет, резина, линолеум, синтетика.</li>
</ul>

<h2>Цены на спортзал</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Каркас и кровля (холодный)</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый зал с сэндвич-панелями</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С освещением, вентиляцией, подготовкой под пол</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Инженерия и покрытие</h2>
<p>Проект включает вентиляцию с расчётом воздухообмена, отопление, освещение, электрику, водоснабжение. Пол делаем под требования покрытия — стяжка, бетон, подготовка под паркет или резиновое покрытие.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать спортзал</h3>
<p className="text-muted mb-4">Расскажите размеры и вид спорта — подготовим проект.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
