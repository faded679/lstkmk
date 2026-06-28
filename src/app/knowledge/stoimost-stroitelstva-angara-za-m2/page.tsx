import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стоимость строительства ангара за м²: из чего складывается цена | МАКСТИЛ",
  description: "Разбираем из чего складывается цена строительства ангара за м². Металлокаркас, фундамент, утепление, ворота, монтаж. Цены от 3 500 до 8 000 ₽/м² в зависимости от комплектации.",
  keywords: ["стоимость строительства ангара за м2", "цена ангара за квадратный метр", "сколько стоит ангар", "ангар цена за м2", "стоимость металлоангара"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Стоимость строительства ангара за м²: из чего складывается цена",
    "description": "Из чего складывается цена строительства ангара. От 3 500 до 8 000 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Стоимость строительства ангара за м²: из чего складывается цена</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Стоимость и цены
          </div>

<p className="mb-4">Цена строительства ангара за м² зависит от десятков факторов. Разбираем каждую составляющую — чтобы вы понимали, за что платите и где можно сэкономить без потери качества.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Основные составляющие стоимости ангара</h2>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1. Фундамент — 15–25% стоимости</h3>
<p className="mb-4">Тип фундамента зависит от геологии участка. Забивные сваи — от 600 ₽/пог. м. Буронабивные — от 2 500 ₽/шт. Ленточный фундамент — от 4 000 ₽/м. Плитный — от 2 500 ₽/м². Экономия на фундаменте недопустима — это основа всего здания.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Металлокаркас — 25–35% стоимости</h3>
<p className="mb-4">Стоимость металлокаркаса зависит от пролёта, высоты, снеговой и ветровой нагрузки региона. Вес конструкций — 20–60 кг/м². Цена стали — 80 000–120 000 ₽/т в зависимости от рыночной ситуации. Изготовление по КМД — 18 000–25 000 ₽/т.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Кровля — 15–20% стоимости</h3>
<p className="mb-4">Профлист Н60 — от 450 ₽/м². Сэндвич-панель 100 мм — от 1 800 ₽/м². Кровельный конёк, торцевые планки, снегозадержатели — отдельная статья. Уклон кровли — стандартно 8–15°.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4. Стены — 10–20% стоимости</h3>
<p className="mb-4">Профлист С21 — от 380 ₽/м². Сэндвич-панель 80–150 мм — от 1 600 ₽/м². Цоколь из бетонных блоков или кирпича — по отдельному расчёту.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5. Ворота и двери — 3–8% стоимости</h3>
<p className="mb-4">Распашные ворота 4×4 м — от 45 000 ₽. Секционные ворота — от 85 000 ₽. Откатные ворота — от 120 000 ₽. Противопожарные двери — от 25 000 ₽.</p>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация ангара</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Только металлокаркас</td><td className="border border-slate-300 px-4 py-2">от 1 800 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Каркас + профлист (без фундамента)</td><td className="border border-slate-300 px-4 py-2">от 3 500 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С фундаментом, без утепления</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Утеплённый (сэндвич-панели)</td><td className="border border-slate-300 px-4 py-2">от 5 800 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Под ключ с инженерией</td><td className="border border-slate-300 px-4 py-2">от 7 000 ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Что влияет на итоговую цену</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Площадь — чем больше, тем дешевле за м²;</li>
<li>Высота — каждый метр сверх 6 м увеличивает стоимость на 3–5%;</li>
<li>Регион — транспорт и командировочные расходы;</li>
<li>Срочность — срочный монтаж на 10–20% дороже;</li>
<li>Сезон — зимнее строительство дороже на 15%.</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Узнать точную цену ангара</h3>
<p className="text-muted mb-4">Введите размеры в калькуляторе — получите предварительную смету мгновенно.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
