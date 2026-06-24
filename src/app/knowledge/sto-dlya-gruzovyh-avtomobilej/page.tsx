import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "СТО для грузовых автомобилей из металлоконструкций | Справочник ЛСТК",
  description: "Строительство СТО для грузовых автомобилей из ЛСТК. Высота, ворота, кран-балка, ямы, цены от 4 800 ₽/м².",
  keywords: ["СТО для грузовых автомобилей", "СТО грузовиков из ЛСТК", "строительство СТО грузовых", "СТО грузовых цена", "грузовой автосервис ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "СТО для грузовых автомобилей из металлоконструкций",
    "description": "Строительство СТО для грузовых автомобилей из ЛСТК. Высота, ворота, кран-балка, ямы, цены от 4 800 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">СТО для грузовых автомобилей из металлоконструкций</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Автоздания
          </div>
          <>
<p>СТО для грузовых автомобилей из металлоконструкций ЛСТК — это капитальное тёплое здание с высокими воротами, прочным полом, ямами и кран-балкой. МАКСТИЛ проектирует и строит СТО под технику любой грузоподъёмности.</p>

<h2>Требования к грузовому СТО</h2>
<p>Высота в коньке — от 6 м, ширина ворот — от 4 м, высота — от 4,5 м. Пол выдерживает нагрузку от грузовиков, кранов и подъёмников. Для шиномонтажа и агрегатного ремонта устанавливают кран-балку 3–5 т.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Высота ворот — от 4,5 м;</li>
<li>Ширина поста — от 4,5 м;</li>
<li>Кран-балка — 3–5 т для грузовой техники;</li>
<li>Ямы или подъёмники — закладываются на этапе фундамента.</li>
</ul>

<h2>Цены на СТО для грузовых</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный ангар для грузовых</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый СТО с утеплением</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С кран-балкой и подготовкой под ямы</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Инженерия</h2>
<p>Проект включает мощную вентиляцию для удаления выхлопных газов, отопление, освещение 200–300 люкс, электроснабжение с учётом сварочных работ, водоснабжение и канализацию.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать СТО для грузовых</h3>
<p className="text-muted mb-4">Укажите количество постов и тип техники — подготовим проект.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
