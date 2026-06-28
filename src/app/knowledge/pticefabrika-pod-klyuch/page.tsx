import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Птицефабрика под ключ: строительство птичников из ЛСТК | МАКСТИЛ",
  description: "Строительство птицефабрик и птичников из ЛСТК под ключ. Бройлеры, несушки, индейка. Вентиляция, отопление, поение, освещение. Цены от 5 000 ₽/м².",
  keywords: ["птицефабрика под ключ", "строительство птичника", "птичник из ЛСТК", "птичник для бройлеров цена", "строительство птичника под ключ"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Птицефабрика под ключ: строительство птичников из ЛСТК",
    "description": "Строительство птицефабрик и птичников из ЛСТК под ключ. Цены от 5 000 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Птицефабрика под ключ: строительство птичников из ЛСТК</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>

<p className="mb-4">Птичники из ЛСТК — это современные сельскохозяйственные здания с автоматизированным управлением микроклиматом. МАКСТИЛ строит птицефабрики и птичники для бройлеров, кур-несушек, индейки и уток под ключ с 2011 года.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Типы птичников</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Бройлерники</strong> — напольное содержание, плотность посадки 20–22 птицы/м², оборот 6–7 в год;</li>
<li><strong>Птичники для несушек</strong> — клеточное содержание 3–4 яруса, 20–25 гол/м²;</li>
<li><strong>Индюшатники</strong> — напольное содержание, раздельно самцы и самки;</li>
<li><strong>Инкубаторно-птицеводческие станции</strong> — отдельный климат, УФ-обеззараживание воздуха.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Нормативы микроклимата в птичнике</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Параметр</th><th className="border border-slate-300 px-4 py-2 text-left">Бройлеры</th><th className="border border-slate-300 px-4 py-2 text-left">Несушки</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Температура</td><td className="border border-slate-300 px-4 py-2">34 °C (1 нед.) → 18 °C</td><td className="border border-slate-300 px-4 py-2">16–18 °C</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Влажность</td><td className="border border-slate-300 px-4 py-2">55–70%</td><td className="border border-slate-300 px-4 py-2">60–70%</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">CO₂</td><td className="border border-slate-300 px-4 py-2">до 0,25%</td><td className="border border-slate-300 px-4 py-2">до 0,25%</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Освещённость</td><td className="border border-slate-300 px-4 py-2">10–50 лк</td><td className="border border-slate-300 px-4 py-2">10–30 лк</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Конструктив птичника из ЛСТК</h2>
<p className="mb-4">Металлокаркас ЛСТК, сэндвич-панели кровли и стен 150–200 мм, герметичные ворота и шлюзы. Ширина — 12–18 м, длина — 60–120 м. Высота — 3,5–4,5 м. Полы — бетонные с подстилкой или решётчатые. Фундамент — свайный или ленточный.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Инженерные системы</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Приточно-вытяжная вентиляция с тоннельным эффектом или поперечная;</li>
<li>Газовые или инфракрасные обогреватели для брудерного выращивания;</li>
<li>Ниппельные поилки с медикаторами;</li>
<li>Автоматические кормушки с суточным дозированием;</li>
<li>Программируемое LED-освещение с диммированием;</li>
<li>Система удаления помёта — транспортёры или напольная уборка.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стоимость птичника из ЛСТК</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Строительная часть без оборудования — от 5 000 ₽/м²;</li>
<li>С вентиляцией и отоплением — от 6 500 ₽/м²;</li>
<li>Полная комплектация под ключ с оборудованием — от 9 000 ₽/м².</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать птичник</h3>
<p className="text-muted mb-4">Укажите поголовье и вид птицы — подготовим КП за 2 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
