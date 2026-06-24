import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство ангаров в Воронежской области: грунты, снег, цены | Справочник ЛСТК",
  description: "Строительство ангаров и складов в Воронежской области. Грунты, снеговая нагрузка, ветер, цены от 4 500 ₽/м². Монтаж в Воронеже и области.",
  keywords: ["ангары в Воронежской области", "строительство ангаров Воронеж", "склады Воронеж", "ЛСТК Воронеж", "металлоконструкции Воронеж"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство ангаров в Воронежской области: грунты, снег, цены",
    "description": "Строительство ангаров и складов в Воронежской области. Грунты, снеговая нагрузка, ветер, цены от 4 500 ₽/м². Монтаж в Воронеже и области.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Строительство ангаров в Воронежской области: грунты, снег, цены</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Регионы
          </div>
          <>
<p>МАКСТИЛ строит ангары, склады, цеха и сельхозздания в Воронежской области. Регион входит в III снеговой район и II ветровой, что учитывается при расчёте каркаса, фундамента и кровли.</p>

<h2>Особенности региона</h2>
<p>Воронежская область — чернозёмная зона с глинистыми и суглинистыми грунтами. В большинстве случаев подходят мелкозаглублённые ленточные фундаменты или винтовые сваи. Средняя снеговая нагрузка — 180 кг/м², ветровая — до 30 м/с.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Снеговой район — III, нагрузка ~180 кг/м²;</li>
<li>Ветровой район — II, скорость до 30 м/с;</li>
<li>Грунты — суглинки, глины, песчаные;</li>
<li>Сезон строительства — круглый год.</li>
</ul>

<h2>Цены в Воронежской области</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Склад / производство</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Сельхоз здания</td><td className="border border-slate-300 px-4 py-2">от 4 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Автосервис / гараж</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Малые здания до 300 м²</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Монтаж в Воронеже и области</h2>
<p>Мы работаем в Воронеже, Борисоглебске, Россоши, Лисках, Острогожске, Павловске, Семилуках и других городах области. Собственное производство и монтажные бригады обеспечивают короткие сроки и фиксированную цену.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Строительство в Воронежской области</h3>
<p className="text-muted mb-4">Оставьте заявку — инженер выедет на объект и подготовит смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
