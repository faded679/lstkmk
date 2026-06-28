import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Монтаж металлоконструкций: этапы, технология, стоимость за тонну | МАКСТИЛ",
  description: "Монтаж металлоконструкций зданий под ключ. Этапы монтажа, технология, стоимость от 8 000 ₽/т. Сроки 2–6 недель. Собственная монтажная бригада.",
  keywords: ["монтаж металлоконструкций", "монтаж металлоконструкций цена за тонну", "монтаж каркаса здания", "стоимость монтажа металлоконструкций", "монтаж ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Монтаж металлоконструкций: этапы, технология, стоимость за тонну",
    "description": "Монтаж металлоконструкций зданий под ключ. Стоимость от 8 000 ₽/т.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Монтаж металлоконструкций: этапы, технология, стоимость за тонну</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Технологии
          </div>

<p className="mb-4">Монтаж металлоконструкций — ключевой этап строительства быстровозводимого здания. От качества монтажа зависит долговечность всей конструкции. МАКСТИЛ выполняет монтаж металлических каркасов собственными бригадами с опытом более 200 объектов.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Этапы монтажа металлоконструкций</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Подготовительный этап</strong> — разбивка осей здания, устройство монтажных площадок, сортировка элементов;</li>
<li><strong>Разгрузка и раскладка</strong> — приёмка конструкций, укладка по маркировке в зоне монтажа;</li>
<li><strong>Монтаж колонн</strong> — установка и выверка по осям и отметкам, временное закрепление;</li>
<li><strong>Монтаж ферм и ригелей</strong> — подъём кранами, монтажная сварка или болтовые соединения;</li>
<li><strong>Прогоны, связи, фахверк</strong> — окончательная пространственная жёсткость каркаса;</li>
<li><strong>Монтаж ограждающих конструкций</strong> — профлист или сэндвич-панели кровли и стен.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Технология монтажа</h2>
<p className="mb-4">Монтаж ведётся методом наращивания — последовательно от первой крайней рамы к последней. Стыки колонн с фундаментом — на анкерных болтах. Болтовые соединения — высокопрочные болты М20–М30 класса прочности 10.9. Сварка — только в заводских условиях или аттестованными сварщиками НАКС.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стоимость монтажа металлоконструкций</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Вид работ</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Монтаж металлокаркаса</td><td className="border border-slate-300 px-4 py-2">от 8 000 ₽/т</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Монтаж кровли из профлиста</td><td className="border border-slate-300 px-4 py-2">от 450 ₽/м²</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Монтаж сэндвич-панелей</td><td className="border border-slate-300 px-4 py-2">от 550 ₽/м²</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Монтаж ворот</td><td className="border border-slate-300 px-4 py-2">от 15 000 ₽/шт</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Монтаж здания под ключ</td><td className="border border-slate-300 px-4 py-2">от 1 500 ₽/м²</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Что влияет на стоимость монтажа</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Высота здания — чем выше, тем дороже (аренда кранов, леса);</li>
<li>Сложность конструктива — количество стыков, сварки, нестандартных узлов;</li>
<li>Удалённость объекта — командировочные расходы;</li>
<li>Сезон — зимний монтаж на 15–20% дороже.</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Заказать монтаж металлоконструкций</h3>
<p className="text-muted mb-4">Собственные бригады — без посредников. Контроль качества на каждом этапе.</p>
<a href="/#contacts" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Связаться с нами</a>
</div>
        </article>
      </main>
    </div>
  );
}
