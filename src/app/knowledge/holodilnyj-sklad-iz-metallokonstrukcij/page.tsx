import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Холодильный склад из металлоконструкций: проект и стоимость | Справочник ЛСТК",
  description: "Строительство холодильных и морозильных складов из ЛСТК. Цены от 5 600 ₽/м², проектирование под холодильное оборудование, срок от 60 дней.",
  keywords: ["холодильный склад", "морозильный склад", "холодильный склад из ЛСТК", "строительство холодильного склада", "цена холодильный склад"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Холодильный склад из металлоконструкций: проект и стоимость",
    "description": "Строительство холодильных и морозильных складов из ЛСТК. Цены от 5 600 ₽/м², проектирование под холодильное оборудование, срок от 60 дней.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Холодильный склад из металлоконструкций: проект и стоимость</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Промздания
          </div>
          <>
<p>Холодильный склад из металлоконструкций ЛСТК — это решение для хранения продуктов, фармацевтики, цветов и других товаров, требующих низкой температуры. МАКСТИЛ строит холодильные и морозильные камеры под ключ с учётом теплотехнического расчёта.</p>

<h2>Конструктивные особенности</h2>
<p>Холодильный склад требует усиленной теплоизоляции, герметичных ворот, системы снеготаяния и правильного внутреннего покрытия. Стены из сэндвич-панелей 150–200 мм с минватой или ПИР снижают теплопотери и нагрузку на холодильное оборудование.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Сэндвич-панели 150–200 мм для температур до −25 °C;</li>
<li>Герметичные откатные или рулонные ворота;</li>
<li>Обогрев порогов, снеготаяние на кровле, дренаж.</li>
</ul>

<h2>Цены на холодильный склад</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Температурный режим</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодильный склад 0…+4 °C</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Морозильный склад до −18 °C</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Подготовка под холодильное оборудование</td><td className="border border-slate-300 px-4 py-2">по смете</td></tr>
</tbody>
</table>
</div>

<h2>Проектирование под холод</h2>
<p>МАКСТИЛ согласовывает проект с поставщиком холодильного оборудования: расчитываем теплопритоки, влажность, воздухообмен, подбираем толщину ограждающих конструкций. Все узлы рассчитываем с запасом по нагрузке.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать холодильный склад</h3>
<p className="text-muted mb-4">Укажите температуру, площадь и товар — подготовим проект и смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
