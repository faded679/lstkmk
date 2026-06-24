import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Автомойка из ЛСТК под ключ: проект, канализация, цена | Справочник ЛСТК",
  description: "Строительство автомоек из ЛСТК под ключ. Проект, канализация, водоотведение, цены от 4 800 ₽/м². Срок от 45 дней.",
  keywords: ["автомойка из ЛСТК", "строительство автомойки", "автомойка цена", "автомойка под ключ", "ЛСТК автомойка"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Автомойка из ЛСТК под ключ: проект, канализация, цена",
    "description": "Строительство автомоек из ЛСТК под ключ. Проект, канализация, водоотведение, цены от 4 800 ₽/м². Срок от 45 дней.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Автомойка из ЛСТК под ключ: проект, канализация, цена</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Автоздания
          </div>
          <>
<p>Автомойка из ЛСТК — это быстровозводимое здание с усиленным полом, системой водоотведения и вентиляции. МАКСТИЛ проектирует и строит мойки для легковых и грузовых автомобилей, включая подготовку под оборудование.</p>

<h2>Особенности проектирования</h2>
<p>Главные требования к автомойке — гидроизоляция пола, уклон 1–2% к лоткам, система очистки воды, вентиляция и отопление. Для грузовых моек нужна высота ворот от 4,5 м и ширина поста от 4 м.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Уклон пола — 1–2% к лоткам;</li>
<li>Гидроизоляция и дренаж;</li>
<li>Вентиляция — 60–100 м³/ч на пост;</li>
<li>Высота ворот — от 3,5 м для легковых, от 4,5 м для грузовых.</li>
</ul>

<h2>Цены на автомойку</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный навес для мойки</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплая автомойка с утеплением</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С подготовкой под канализацию и оборудование</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Что входит в проект</h2>
<p>Каркас ЛСТК, фундамент, кровля и стены, пол с уклоном и гидроизоляцией, водоотведение, вентиляция, отопление, ворота, электрика. Подготовка под моечное оборудование, компрессоры, пылесосы.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать автомойку</h3>
<p className="text-muted mb-4">Укажите количество постов и тип авто — подготовим смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
