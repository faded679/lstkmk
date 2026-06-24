import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Овцеферма из металлоконструкций: проект на 200–500 голов | Справочник ЛСТК",
  description: "Проектируем и строим овцефермы из ЛСТК на 200–500 голов. Вентиляция, кормушки, навозоудаление, цены от 4 600 ₽/м².",
  keywords: ["овцеферма", "овцеферма из ЛСТК", "строительство овцефермы", "овцеферма цена", "проект овцефермы"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Овцеферма из металлоконструкций: проект на 200–500 голов",
    "description": "Проектируем и строим овцефермы из ЛСТК на 200–500 голов. Вентиляция, кормушки, навозоудаление, цены от 4 600 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Овцеферма из металлоконструкций: проект на 200–500 голов</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>
          <>
<p>Овцеферма из металлоконструкций ЛСТК — это быстровозводимое, лёгкое и долговечное здание для содержания овец. МАКСТИЛ проектирует фермы на 200, 300, 500 и более голов с учётом ветеринарных норм и технологии содержания.</p>

<h2>Нормы проектирования овцеферм</h2>
<p>На одну взрослую овцу в кошаре нужно 1,8–2,2 м², на ягнят — 0,8–1,0 м². Ширина проходов — 2,5–3 м, высота в коньке — от 3,2 м. Вентиляция должна обеспечивать 30–50 м³/ч на голову.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>200 голов — 400–450 м² площади;</li>
<li>300 голов — 600–700 м²;</li>
<li>500 голов — 1 000–1 100 м²;</li>
<li>Кормушки, поилки, навозоудаление — по проекту.</li>
</ul>

<h2>Цены на овцеферму</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный навес для овец</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Утеплённая овцеферма</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С оборудованием для содержания</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Сроки и гарантия</h2>
<p>Овцеферма площадью 500–1 000 м² строится 45–60 дней. МАКСТИЛ даёт гарантию 5 лет на каркас и 3 года на монтаж.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать овцеферму</h3>
<p className="text-muted mb-4">Укажите поголовье — подготовим проект и смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
