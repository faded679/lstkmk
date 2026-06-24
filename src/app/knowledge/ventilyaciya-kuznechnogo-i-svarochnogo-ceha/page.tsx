import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Вентиляция кузнечного и сварочного цеха: нормы воздухообмена | Справочник ЛСТК",
  description: "Вентиляция кузнечного и сварочного цеха. Нормы воздухообмена, удаление дыма, фильтрация. Проект и цены.",
  keywords: ["вентиляция сварочного цеха", "вентиляция кузни", "воздухообмен цех", "удаление дыма сварка", "вентиляция производственного цеха"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Вентиляция кузнечного и сварочного цеха: нормы воздухообмена",
    "description": "Вентиляция кузнечного и сварочного цеха. Нормы воздухообмена, удаление дыма, фильтрация. Проект и цены.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Вентиляция кузнечного и сварочного цеха: нормы воздухообмена</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>В сварочном и кузнечном цехе вентиляция — обязательное требование по охране труда и пожарной безопасности. МАКСТИЛ проектирует системы общего и местного удаления вредных выбросов.</p>

<h2>Нормы воздухообмена</h2>
<p>По СП 60 и СП 118 воздухообмен в сварочном цехе — не менее 30–50 м³/ч на одного рабочего, при сварке в закрытых объёмах — до 100 м³/ч. Для кузнечного цеха с горном — от 40 до 60 кратов обмена в час.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Общая вентиляция — 30–50 м³/ч на рабочего;</li>
<li>Местная вытяжка у каждого поста;</li>
<li>Фильтрация сварочного дыма;</li>
<li>Приточно-вытяжная система с рекуперацией.</li>
</ul>

<h2>Системы и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Система</th><th className="border border-slate-300 px-4 py-2 text-left">Назначение</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Местная вытяжка</td><td className="border border-slate-300 px-4 py-2">Удаление дыма у поста</td><td className="border border-slate-300 px-4 py-2">40 000–80 000 ₽/пост</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Общая приточно-вытяжная</td><td className="border border-slate-300 px-4 py-2">Воздухообмен цеха</td><td className="border border-slate-300 px-4 py-2">от 300 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Фильтрация с рекуперацией</td><td className="border border-slate-300 px-4 py-2">Очистка и экономия тепла</td><td className="border border-slate-300 px-4 py-2">по смете</td></tr>
</tbody>
</table>
</div>

<h2>Проектирование</h2>
<p>МАКСТИЛ рассчитывает вентиляцию с учётом объёма цеха, количества постов, типа сварки, материалов и требований по охране труда. Устанавливаем вытяжные зонты, шкафы, фильтры, приточные установки.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Расчёт вентиляции цеха</h3>
<p className="text-muted mb-4">Укажите площадь и количество сварочных постов — подготовим проект.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
