import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Производственное здание из металлоконструкций: проектирование и строительство | МАКСТИЛ",
  description: "Строительство производственных зданий из металлоконструкций под ключ. Проектирование, производство, монтаж. Цены от 5 500 ₽/м², срок от 60 дней. Гарантия качества.",
  keywords: ["производственное здание из металлоконструкций", "строительство производственного здания", "производственный цех под ключ", "металлоконструкции производство", "ЛМК производственное здание"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Производственное здание из металлоконструкций: проектирование и строительство",
    "description": "Строительство производственных зданий из металлоконструкций под ключ. Проектирование, производство, монтаж.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Производственное здание из металлоконструкций: проектирование и строительство</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Промышленные здания
          </div>

<p className="mb-4">Производственное здание из металлоконструкций — оптимальное решение для предприятий, которым нужна большая площадь, высокие потолки и возможность размещения тяжёлого оборудования. МАКСТИЛ проектирует и строит производственные здания из ЛСТК и ЛМК под ключ с 2011 года.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Виды производственных зданий из металлоконструкций</h2>
<p className="mb-4">По назначению производственные объекты делятся на несколько категорий:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Производственные цеха — сборочные, механообрабатывающие, сварочные;</li>
<li>Заготовительные корпуса — штамповочные, литейные, кузнечные;</li>
<li>Вспомогательные здания — склады инструмента, ремонтные мастерские;</li>
<li>Энергетические объекты — котельные, трансформаторные подстанции;</li>
<li>Административно-бытовые корпуса — офисные пристройки к цехам.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Этапы проектирования</h2>
<p className="mb-4">Проектирование производственного здания включает несколько обязательных стадий:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Техническое задание — требования к площади, высоте, нагрузкам, оборудованию;</li>
<li>Эскизный проект — планировки, фасады, схема генплана;</li>
<li>Стадия П — проектная документация для экспертизы;</li>
<li>Стадия Р — рабочая документация для строительства;</li>
<li>Заводская документация — КМД (конструкции металлические деталировочные).</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Конструктивные решения</h2>
<p className="mb-4">Металлокаркас производственного здания состоит из рам, прогонов, связей и ограждающих конструкций. Шаг рам — 6 или 12 метров. Высота от 5 до 20 метров. Пролёт без внутренних опор — до 60 метров. Возможна установка кран-балки грузоподъёмностью до 32 тонн.</p>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Параметр</th><th className="border border-slate-300 px-4 py-2 text-left">Значение</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Пролёт здания</td><td className="border border-slate-300 px-4 py-2">12–60 м</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Высота до низа несущих конструкций</td><td className="border border-slate-300 px-4 py-2">5–20 м</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Шаг рам</td><td className="border border-slate-300 px-4 py-2">6 или 12 м</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Грузоподъёмность кран-балки</td><td className="border border-slate-300 px-4 py-2">до 32 т</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Цена за м²</td><td className="border border-slate-300 px-4 py-2">от 5 500 ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стоимость строительства производственного здания</h2>
<p className="mb-4">Цена производственного здания из металлоконструкций зависит от площади, высоты, комплектации и региона строительства. Ориентировочные цены:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Металлокаркас без утепления — от 3 500 ₽/м²;</li>
<li>Здание с профлистом без утепления — от 4 500 ₽/м²;</li>
<li>Здание с сэндвич-панелями 100 мм — от 5 500 ₽/м²;</li>
<li>Полная комплектация с фундаментом и инженерией — от 7 000 ₽/м².</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Сроки строительства</h2>
<p className="mb-4">Производственное здание площадью 1 000 м² возводится за 60–90 дней. Здание 5 000 м² — за 4–6 месяцев. Проектирование занимает 2–4 недели. Изготовление металлокаркаса — 3–5 недель. Монтаж — 2–6 недель в зависимости от сложности.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Получить расчёт стоимости</h3>
<p className="text-muted mb-4">Укажите размеры и назначение — подготовим КП в течение 2 часов.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
