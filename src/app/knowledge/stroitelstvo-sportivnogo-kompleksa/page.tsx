import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство спортивного комплекса из металлоконструкций | МАКСТИЛ",
  description: "Строительство спортивных комплексов, залов и крытых арен из металлоконструкций под ключ. Спортзалы, манежи, бассейны. Цены от 6 000 ₽/м².",
  keywords: ["строительство спортивного комплекса", "спортзал из металлоконструкций", "крытый спортивный зал под ключ", "манеж из металлоконструкций", "спортивный комплекс ЛСТК цена"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство спортивного комплекса из металлоконструкций",
    "description": "Строительство спортивных комплексов из металлоконструкций под ключ. Цены от 6 000 ₽/м².",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
    "publisher": { "@type": "Organization", "name": "МАКСТИЛ", "url": "https://lstkmk.ru" }
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Строительство спортивного комплекса из металлоконструкций</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Общественные здания
          </div>

<p className="mb-4">Спортивный комплекс из металлоконструкций — современное и экономичное решение для муниципального, коммерческого или корпоративного спорта. МАКСТИЛ строит крытые спортзалы, манежи, фитнес-центры и многофункциональные спортивные арены под ключ.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Виды спортивных объектов из металлоконструкций</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Универсальные спортзалы</strong> — для волейбола, баскетбола, бадминтона, художественной гимнастики. Размер — от 24×42 м, высота — от 7 м;</li>
<li><strong>Легкоатлетические манежи</strong> — беговая дорожка 200 м, прыжковые секторы. Размер — от 36×90 м;</li>
<li><strong>Крытые футбольные поля</strong> — мини-футбол 20×40 м, стандартное 68×105 м с трибунами;</li>
<li><strong>Крытые теннисные корты</strong> — 1–4 корта, высота не менее 8,5 м над сеткой;</li>
<li><strong>Фитнес-центры</strong> — тренажёрные залы, залы групповых программ, SPA;</li>
<li><strong>Ледовые арены</strong> — каток 30×60 м, специальная кровля с защитой от конденсата.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Нормативные требования к спортивным зданиям</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>СП 332.1325800.2017 — Спортивные сооружения;</li>
<li>ГОСТ Р 55529-2013 — Объекты спорта. Требования безопасности;</li>
<li>СанПиН 2.1.3.2630 — Санитарно-гигиенические требования;</li>
<li>Доступность для МГН — пандусы, лифты, специальные раздевалки.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Особенности конструктива</h2>
<p className="mb-4">Спортивные здания требуют больших пролётов без внутренних опор — от 24 до 100 м. Применяются фермы, арки или структурные покрытия. Акустика — облицовка стен звукопоглощающими панелями. Освещение — равномерное, без бликов (500–750 лк для соревнований).</p>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип объекта</th><th className="border border-slate-300 px-4 py-2 text-left">Площадь</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Спортзал (школьный)</td><td className="border border-slate-300 px-4 py-2">400–600 м²</td><td className="border border-slate-300 px-4 py-2">от 6 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Фитнес-центр</td><td className="border border-slate-300 px-4 py-2">500–2 000 м²</td><td className="border border-slate-300 px-4 py-2">от 6 500 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Универсальный спорткомплекс</td><td className="border border-slate-300 px-4 py-2">1 500–5 000 м²</td><td className="border border-slate-300 px-4 py-2">от 7 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Манеж / крытый стадион</td><td className="border border-slate-300 px-4 py-2">от 3 000 м²</td><td className="border border-slate-300 px-4 py-2">от 8 500 ₽</td></tr>
</tbody>
</table>
</div>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать спортивный объект</h3>
<p className="text-muted mb-4">Опишите назначение и площадь — подготовим концепцию и КП за 3 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
