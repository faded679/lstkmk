import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Свинокомплекс под ключ: проектирование и строительство из металлоконструкций | МАКСТИЛ",
  description: "Строительство свинокомплексов и свинарников из ЛСТК под ключ. Проект, вентиляция, навозоудаление, цены от 5 200 ₽/м². Гарантия 5 лет.",
  keywords: ["свинокомплекс под ключ", "строительство свинарника", "свинарник из металлоконструкций", "свинарник ЛСТК", "свинокомплекс проект цена"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Свинокомплекс под ключ: проектирование и строительство",
    "description": "Строительство свинокомплексов из ЛСТК под ключ. Проект, вентиляция, навозоудаление, цены от 5 200 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Свинокомплекс под ключ: проектирование и строительство из металлоконструкций</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>

<p className="mb-4">Свинокомплекс из металлоконструкций — это быстровозводимое здание с системой вентиляции, навозоудаления, отопления и поения. МАКСТИЛ строит свинарники и свинокомплексы под ключ на 200, 500, 1 000 и более голов.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Требования к зданию свинарника</h2>
<p className="mb-4">Свинарник — технологически сложное здание с жёсткими требованиями по зоогигиене:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Температура в помещении — 18–22 °C для взрослых свиней, 28–32 °C для поросят;</li>
<li>Влажность воздуха — 60–75%;</li>
<li>Воздухообмен — 20–60 м³/ч на голову в зависимости от возраста;</li>
<li>Освещённость — 50–100 лк в зоне кормления;</li>
<li>Навозные каналы — под щелевыми полами глубиной 0,6–1,0 м.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Планировочные решения</h2>
<p className="mb-4">Типовые секции свинарника: маточники, доращивание, откорм, карантин. Ширина здания — 18, 21 или 24 метра. Длина — от 48 до 120 метров. Высота до конька — 5–7 метров. Ворота и тамбуры для дезинфекции — обязательны по нормам.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Инженерные системы свинокомплекса</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Вентиляция — приточно-вытяжная с автоматическим управлением;</li>
<li>Отопление — водяное от котельной или инфракрасные обогреватели для поросят;</li>
<li>Водоснабжение — ниппельные поилки или корытные;</li>
<li>Навозоудаление — самотёчная система с лагунами или биогазовой установкой;</li>
<li>Электрика — освещение, автоматика климата, охранная сигнализация.</li>
</ul>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th><th className="border border-slate-300 px-4 py-2 text-left">Площадь</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Свинарник на 200 голов</td><td className="border border-slate-300 px-4 py-2">500–700 м²</td><td className="border border-slate-300 px-4 py-2">от 5 200 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Свинарник на 500 голов</td><td className="border border-slate-300 px-4 py-2">1 200–1 500 м²</td><td className="border border-slate-300 px-4 py-2">от 5 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Свинокомплекс на 1 000 голов</td><td className="border border-slate-300 px-4 py-2">2 500–3 000 м²</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Нормативная база</h2>
<p className="mb-4">Проектирование свинарников ведётся по НТП-АПК 1.10.02.001-00 (нормы технологического проектирования), СП 19.13330.2017 (сельскохозяйственные предприятия), ветеринарно-санитарным требованиям. Санитарно-защитная зона — не менее 500 м от жилья.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать свинарник</h3>
<p className="text-muted mb-4">Укажите поголовье и тип производства — подготовим смету и предварительный проект.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
