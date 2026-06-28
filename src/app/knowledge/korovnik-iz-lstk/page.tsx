import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Коровник из ЛСТК: проекты, технология, стоимость | МАКСТИЛ",
  description: "Строительство коровников из ЛСТК под ключ. Проекты на 50, 100, 200 и 400 голов. Технология, нормативы, стоимость от 5 200 ₽/м². Срок монтажа 60 дней.",
  keywords: ["коровник из ЛСТК", "строительство коровника", "коровник под ключ цена", "коровник ЛСТК проект", "строительство коровника из металлоконструкций"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Коровник из ЛСТК: проекты, технология, стоимость",
    "description": "Строительство коровников из ЛСТК под ключ. Стоимость от 5 200 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Коровник из ЛСТК: проекты, технология, стоимость</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>

<p className="mb-4">Коровник из ЛСТК — это современное животноводческое здание с металлокаркасом из лёгких стальных тонкостенных конструкций. МАКСТИЛ строит коровники на 50–600 голов КРС молочного и мясного направления под ключ.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Преимущества ЛСТК для коровников</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Скорость монтажа — коровник на 200 голов собирается за 30–45 дней;</li>
<li>Лёгкий вес — не требует массивного фундамента, снижает нагрузку на грунт;</li>
<li>Гибкость — любые размеры и планировки, возможность расширения;</li>
<li>Долговечность — оцинкованный профиль служит 50+ лет без окраски;</li>
<li>Огнестойкость — металлокаркас не горит, что важно для страхования.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Нормативы для коровников</h2>
<p className="mb-4">Проектирование ведётся по НТП-АПК 1.10.01.001-00. Основные параметры:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Площадь на голову (привязное содержание) — 8–10 м²;</li>
<li>Площадь на голову (беспривязное, боксы) — 10–12 м²;</li>
<li>Температура в помещении — +10...+12 °C;</li>
<li>Воздухообмен — 17 м³/ч·кг живой массы зимой;</li>
<li>Ширина кормового прохода — 2,7–3,0 м;</li>
<li>Ширина бокса — 1,1–1,2 м, длина — 2,1–2,2 м.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Типовые проекты коровников из ЛСТК</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Поголовье</th><th className="border border-slate-300 px-4 py-2 text-left">Размеры здания</th><th className="border border-slate-300 px-4 py-2 text-left">Площадь</th><th className="border border-slate-300 px-4 py-2 text-left">Цена от</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">100 голов</td><td className="border border-slate-300 px-4 py-2">18×48 м</td><td className="border border-slate-300 px-4 py-2">864 м²</td><td className="border border-slate-300 px-4 py-2">4,5 млн ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">200 голов</td><td className="border border-slate-300 px-4 py-2">21×72 м</td><td className="border border-slate-300 px-4 py-2">1 512 м²</td><td className="border border-slate-300 px-4 py-2">7,9 млн ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">400 голов</td><td className="border border-slate-300 px-4 py-2">32×67 м</td><td className="border border-slate-300 px-4 py-2">2 150 м²</td><td className="border border-slate-300 px-4 py-2">11,6 млн ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Инженерные системы коровника</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Вентиляция — коньковая аэрация + торцевые вентиляторы;</li>
<li>Водоснабжение — поилки групповые или индивидуальные с подогревом;</li>
<li>Навозоудаление — скребковые транспортёры или дельта-скреперы;</li>
<li>Молокопровод или молокопровод со стойловым оборудованием;</li>
<li>Освещение — 75–100 лк в зоне кормления и содержания.</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать коровник</h3>
<p className="text-muted mb-4">Укажите поголовье и направление (молочное/мясное) — КП за 2 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
