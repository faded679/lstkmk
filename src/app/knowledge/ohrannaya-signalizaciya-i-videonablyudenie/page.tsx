import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Охранная сигнализация и видеонаблюдение на складе | Справочник ЛСТК",
  description: "Охранная сигнализация и видеонаблюдение для склада и ангара. Типы систем, зоны контроля, цены, интеграция с пожарной сигнализацией.",
  keywords: ["охранная сигнализация склад", "видеонаблюдение ангар", "сигнализация склад", "камеры на склад", "охрана склада"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Охранная сигнализация и видеонаблюдение на складе",
    "description": "Охранная сигнализация и видеонаблюдение для склада и ангара. Типы систем, зоны контроля, цены, интеграция с пожарной сигнализацией.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Охранная сигнализация и видеонаблюдение на складе</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>Охранная сигнализация и видеонаблюдение — обязательная часть безопасности склада, ангара и производственного цеха. МАКСТИЛ проектирует и монтирует системы охраны, видеоконтроля и контроля доступа.</p>

<h2>Зоны контроля</h2>
<p>Основные зоны: периметр участка, въездные группы, складские помещения, зоны погрузки, офисы, технические помещения. Каждая зона требует разного типа датчиков и камер.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Периметр — датчики движения и линии охраны;</li>
<li>Въезд — камеры с распознаванием номеров;</li>
<li>Склад — внутреннее видеонаблюдение и датчики движения;</li>
<li>Пожарная сигнализация — дымовые и тепловые датчики.</li>
</ul>

<h2>Системы и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Элемент</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">IP-камера с монтажом</td><td className="border border-slate-300 px-4 py-2">15 000–40 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Датчик движения/открытия</td><td className="border border-slate-300 px-4 py-2">3 000–8 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Пультовая охрана</td><td className="border border-slate-300 px-4 py-2">5 000–15 000 ₽/мес</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Сервер видеонаблюдения</td><td className="border border-slate-300 px-4 py-2">50 000–150 000 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Интеграция</h2>
<p>Современные системы объединяют охранную, пожарную сигнализацию, видеонаблюдение и контроль доступа в одном приложении. МАКСТИЛ помогает подобрать комплектацию и подрядчика для монтажа.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Защитить склад</h3>
<p className="text-muted mb-4">Расскажите площадь и задачи — подготовим схему охраны.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
