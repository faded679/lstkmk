import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Проектирование логистических центров и складских комплексов | МАКСТИЛ",
  description: "Проектирование и строительство логистических центров из металлоконструкций. Складские комплексы класса A, B, C под ключ. Цены от 5 000 ₽/м².",
  keywords: ["проектирование логистического центра", "строительство складского комплекса", "логистический центр из металлоконструкций", "склад класса А строительство", "складской комплекс под ключ"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Проектирование логистических центров и складских комплексов",
    "description": "Проектирование и строительство логистических центров из металлоконструкций.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Проектирование логистических центров и складских комплексов</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Складские здания
          </div>

<p className="mb-4">Логистический центр из металлоконструкций — это крупный складской комплекс с зонами хранения, комплектации, погрузки и административными помещениями. МАКСТИЛ проектирует и строит логистические объекты под ключ от 3 000 м².</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Классификация складских помещений</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Класс A</strong> — современные одноэтажные здания высотой 10–14 м, ровный пол (A-level), спринклерное пожаротушение, доки с регулируемыми уровнями, температурный режим;</li>
<li><strong>Класс B</strong> — высота 7–12 м, хорошее состояние, вентиляция, ворота на уровне земли или доки;</li>
<li><strong>Класс C</strong> — производственные здания, переоборудованные под склад, высота 4–8 м;</li>
<li><strong>Класс D</strong> — неотапливаемые ангары, навесы.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Ключевые параметры логистического центра</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Высота до нижнего пояса несущих конструкций — 9–14 м;</li>
<li>Нагрузка на пол — 5–7 т/м², на стеллажи до 10 т/м²;</li>
<li>Ровность пола по DIN 18202 — отклонение не более 2 мм на 2 метра;</li>
<li>Шаг колонн — 12×24 или 12×12 м;</li>
<li>Количество докованых ворот — 1 на 500–1 000 м² склада;</li>
<li>Административные помещения — 5–10% от общей площади.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Этапы проектирования</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Концепция и ТЭО — целесообразность строительства, площадь, конфигурация;</li>
<li>Технологическое проектирование — расстановка стеллажей, маршруты техники, количество доков;</li>
<li>Архитектурный раздел — генплан, фасады, планировки;</li>
<li>Конструктивный раздел — металлокаркас, фундамент, полы;</li>
<li>Инженерные разделы — ОВК, ВК, ЭОМ, пожаротушение, сети связи.</li>
</ul>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Класс склада</th><th className="border border-slate-300 px-4 py-2 text-left">Высота</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Класс C (без доков)</td><td className="border border-slate-300 px-4 py-2">6–8 м</td><td className="border border-slate-300 px-4 py-2">от 5 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Класс B (с доками)</td><td className="border border-slate-300 px-4 py-2">8–10 м</td><td className="border border-slate-300 px-4 py-2">от 6 500 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Класс A (full spec)</td><td className="border border-slate-300 px-4 py-2">10–14 м</td><td className="border border-slate-300 px-4 py-2">от 8 500 ₽</td></tr>
</tbody>
</table>
</div>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Спроектировать логистический центр</h3>
<p className="text-muted mb-4">Опишите задачу — разработаем концепцию и смету за 5 рабочих дней.</p>
<a href="/#contacts" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Связаться с нами</a>
</div>
        </article>
      </main>
    </div>
  );
}
