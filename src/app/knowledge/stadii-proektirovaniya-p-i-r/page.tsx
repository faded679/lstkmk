import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стадии проектирования П и Р: что входит в каждую стадию | МАКСТИЛ",
  description: "Разбираем стадии проектирования П (проектная документация) и Р (рабочая документация). Состав, отличия, сроки, стоимость разработки.",
  keywords: ["стадии проектирования П и Р", "проектная документация стадия П", "рабочая документация стадия Р", "состав проектной документации", "разделы проекта здания"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Стадии проектирования П и Р: что входит в каждую стадию",
    "description": "Стадии проектирования П и Р. Состав, отличия, сроки и стоимость разработки.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Стадии проектирования П и Р: что входит в каждую стадию</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Проектирование
          </div>

<p className="mb-4">В России проектирование зданий ведётся по двухстадийной схеме: стадия П (проектная документация) и стадия Р (рабочая документация). Каждая имеет свои цели, состав и порядок согласования.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стадия П — Проектная документация</h2>
<p className="mb-4">Стадия П разрабатывается для получения разрешения на строительство и прохождения государственной экспертизы. Основание — Постановление Правительства РФ № 87 от 16.02.2008.</p>
<p className="mb-4">Разделы стадии П:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Раздел 1 — Пояснительная записка (ПЗ);</li>
<li>Раздел 2 — Схема планировочной организации земельного участка (СПОЗУ);</li>
<li>Раздел 3 — Архитектурные решения (АР);</li>
<li>Раздел 4 — Конструктивные и объёмно-планировочные решения (КР);</li>
<li>Раздел 5 — Сведения об инженерном оборудовании (ИОС 1–9);</li>
<li>Раздел 6 — Проект организации строительства (ПОС);</li>
<li>Раздел 7 — Проект организации работ по сносу (при необходимости);</li>
<li>Раздел 8 — Перечень мероприятий по охране окружающей среды (ООС);</li>
<li>Раздел 9 — Мероприятия по обеспечению пожарной безопасности (ПБ);</li>
<li>Раздел 10 — Мероприятия по доступности для МГН;</li>
<li>Раздел 11 — Смета на строительство (для госзаказа).</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стадия Р — Рабочая документация</h2>
<p className="mb-4">Стадия Р — это детальная документация для непосредственного строительства. Передаётся подрядчику и служит основой для изготовления конструкций и выполнения работ.</p>
<p className="mb-4">Основные марки рабочей документации:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>АР — архитектурные решения (планы, разрезы, фасады, узлы);</li>
<li>КМ — конструкции металлические (расчёт и компоновка каркаса);</li>
<li>КМД — конструкции металлические деталировочные (для завода-изготовителя);</li>
<li>КЖ — конструкции железобетонные (фундамент, полы);</li>
<li>ОВ — отопление и вентиляция;</li>
<li>ВК — водоснабжение и канализация;</li>
<li>ЭОМ — электроосвещение и монтаж;</li>
<li>АПС — автоматическая пожарная сигнализация;</li>
<li>СС — слаботочные системы.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Отличия П от Р</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Параметр</th><th className="border border-slate-300 px-4 py-2 text-left">Стадия П</th><th className="border border-slate-300 px-4 py-2 text-left">Стадия Р</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Цель</td><td className="border border-slate-300 px-4 py-2">Получение разрешений</td><td className="border border-slate-300 px-4 py-2">Строительство объекта</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Детализация</td><td className="border border-slate-300 px-4 py-2">Концептуальная</td><td className="border border-slate-300 px-4 py-2">Детальная, пообъектная</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Экспертиза</td><td className="border border-slate-300 px-4 py-2">Обязательна (гос. или негос.)</td><td className="border border-slate-300 px-4 py-2">Не требуется</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Сроки разработки</td><td className="border border-slate-300 px-4 py-2">4–8 недель</td><td className="border border-slate-300 px-4 py-2">4–10 недель</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Когда можно объединить П+Р</h2>
<p className="mb-4">Для объектов, не требующих государственной экспертизы (здания до 1 500 м², не более 2 этажей, не на ОПО), допускается разработка только рабочей документации без отдельной стадии П. Это экономит 2–3 месяца и снижает затраты на проектирование на 20–30%.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Заказать проектирование</h3>
<p className="text-muted mb-4">Разработаем стадии П и Р для вашего объекта. Опыт — более 200 проектов.</p>
<a href="/#contacts" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Связаться с нами</a>
</div>
        </article>
      </main>
    </div>
  );
}
