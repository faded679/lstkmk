import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство цеха из металлоконструкций: от фундамента до сдачи | МАКСТИЛ",
  description: "Строительство производственных цехов из металлоконструкций под ключ. Проектирование, фундамент, монтаж, инженерия. Цены от 5 500 ₽/м². Срок от 60 дней.",
  keywords: ["строительство цеха из металлоконструкций", "производственный цех под ключ", "цех ЛСТК цена", "металлический цех строительство", "цех из металлоконструкций под ключ"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство цеха из металлоконструкций: от фундамента до сдачи",
    "description": "Строительство производственных цехов из металлоконструкций под ключ. Цены от 5 500 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Строительство цеха из металлоконструкций: от фундамента до сдачи</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Промышленные здания
          </div>

<p className="mb-4">Строительство производственного цеха из металлоконструкций — полный цикл от проектирования до ввода в эксплуатацию. МАКСТИЛ выполняет все работы собственными силами: проект, производство металлокаркаса, фундамент, монтаж, инженерные системы.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Последовательность строительства цеха</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Шаг 1. Техническое задание</strong> — размеры, назначение, нагрузки, оборудование, инженерные требования;</li>
<li><strong>Шаг 2. Геодезия и геология</strong> — изыскания для проектирования фундамента;</li>
<li><strong>Шаг 3. Проектирование</strong> — стадия П и Р, КМД, согласование с заказчиком;</li>
<li><strong>Шаг 4. Фундамент</strong> — забивные сваи, буронабивные сваи, ленточный или плитный фундамент;</li>
<li><strong>Шаг 5. Изготовление металлокаркаса</strong> — на заводе по КМД, антикоррозийная обработка;</li>
<li><strong>Шаг 6. Монтаж каркаса</strong> — колонны, фермы, прогоны, связи;</li>
<li><strong>Шаг 7. Ограждающие конструкции</strong> — кровля, стены, ворота, окна;</li>
<li><strong>Шаг 8. Инженерные системы</strong> — отопление, вентиляция, электрика, водоснабжение;</li>
<li><strong>Шаг 9. Полы</strong> — бетонная стяжка, топпинг или промышленная плитка;</li>
<li><strong>Шаг 10. Сдача объекта</strong> — исполнительная документация, акт ввода в эксплуатацию.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Типовые размеры производственных цехов</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Размер</th><th className="border border-slate-300 px-4 py-2 text-left">Площадь</th><th className="border border-slate-300 px-4 py-2 text-left">Цена под ключ</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">18×36 м</td><td className="border border-slate-300 px-4 py-2">648 м²</td><td className="border border-slate-300 px-4 py-2">от 3,6 млн ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">18×52 м</td><td className="border border-slate-300 px-4 py-2">936 м²</td><td className="border border-slate-300 px-4 py-2">от 5,2 млн ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">24×54 м</td><td className="border border-slate-300 px-4 py-2">1 296 м²</td><td className="border border-slate-300 px-4 py-2">от 7,1 млн ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">30×60 м</td><td className="border border-slate-300 px-4 py-2">1 800 м²</td><td className="border border-slate-300 px-4 py-2">от 9,9 млн ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Особенности цехов с мостовым краном</h2>
<p className="mb-4">Если в цехе планируется мостовой кран, требуется усиленный каркас с подкрановыми балками. Высота до головки подкранового рельса — от 6 до 14 метров. Грузоподъёмность кранов — от 3,2 до 50 тонн. Это существенно влияет на расчёт нагрузок и стоимость металлокаркаса.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Построить цех из металлоконструкций</h3>
<p className="text-muted mb-4">Опишите задачу — подготовим ТЗ, КП и предварительный план работ за 2 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
