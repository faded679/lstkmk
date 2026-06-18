import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Документы для строительства | Справочник ЛСТК",
  description: "Профессиональное руководство по документы для строительства. Цены, сроки, технологии ЛСТК.",
  keywords: ["dokumenty na stroitelstvo"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Документы для строительства",
    "description": "Руководство по документы для строительства",
    "author": { "@type": "Organization", "name": "ЛСТК-МК" }
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Документы для строительства
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Документы
          </div>

          <h1 itemProp="headline">Какие документы нужны для строительства ангара из ЛСТК</h1>

<p>Строительство ангара — серьёзный инвестиционный проект, и грамотное оформление документации напрямую влияет на сроки, цену и итоговый расчёт стоимости объекта. Компания <strong>ЛСТК МАКСТИЛ</strong> возводит ангары из лёгких стальных тонкостенных конструкций с 2012 года и помогает клиентам пройти весь путь — от эскиза до ввода в эксплуатацию. Разберём, какой пакет документов потребуется для законного строительства.</p>

<h2>Правоустанавливающие документы на земельный участок</h2>
<p>Первый и обязательный блок — подтверждение прав на землю. Сюда входят свидетельство о собственности или договор аренды (минимум на 5 лет), кадастровый паспорт участка и градостроительный план (ГПЗУ). Важно: вид разрешённого использования должен допускать размещение производственных или складских объектов. Около 30% задержек на старте монтажа связано именно с несоответствием категории земли.</p>

<h2>Проектная документация на ангар</h2>
<p>Полноценный проект ЛСТК-ангара включает архитектурные, конструктивные и инженерные разделы. Специалисты МАКСТИЛ разрабатывают проект за 7–14 рабочих дней. В состав входят: расчёт металлокаркаса на снеговые и ветровые нагрузки (по СП 20.13330.2016), схема фундамента, узлы крепления, спецификация материалов. Для ангаров площадью до 1500 м² и высотой до 20 м экспертиза проекта в большинстве регионов не требуется — это сокращает сроки на 2–3 месяца.</p>

<h2>Разрешение на строительство и уведомления</h2>
<p>Для капитального ангара необходимо получить разрешение на строительство в местной администрации. Если объект некапитальный (на сборно-разборном фундаменте), достаточно уведомительного порядка. Срок рассмотрения — до 7 рабочих дней. Дополнительно могут потребоваться технические условия на подключение к коммуникациям и согласования с надзорными органами.</p>

<h2>Сравнение пакетов документов: капитальный и некапитальный ангар</h2>
<div className="overflow-x-auto my-6">
  <table className="w-full border border-slate-300 border-collapse">
    <thead>
      <tr className="bg-slate-100">
        <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Капитальный ангар</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Некапитальный ангар</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Тип процедуры</td>
        <td className="border border-slate-300 px-4 py-2">Разрешение на строительство</td>
        <td className="border border-slate-300 px-4 py-2">Уведомительный порядок</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Срок рассмотрения</td>
        <td className="border border-slate-300 px-4 py-2">До 30 рабочих дней</td>
        <td className="border border-slate-300 px-4 py-2">До 7 рабочих дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Фундамент</td>
        <td className="border border-slate-300 px-4 py-2">Стационарный (свайный, плитный)</td>
        <td className="border border-slate-300 px-4 py-2">Сборно-разборный</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Экспертиза проекта</td>
        <td className="border border-slate-300 px-4 py-2">Не требуется до 1500 м² и H≤20 м</td>
        <td className="border border-slate-300 px-4 py-2">Не требуется</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Ввод в эксплуатацию</td>
        <td className="border border-slate-300 px-4 py-2">Обязателен</td>
        <td className="border border-slate-300 px-4 py-2">Не требуется</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Сроки подготовки документации</h2>
<div className="overflow-x-auto my-6">
  <table className="w-full border border-slate-300 border-collapse">
    <thead>
      <tr className="bg-slate-100">
        <th className="border border-slate-300 px-4 py-2 text-left">Этап</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Срок</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Получение ГПЗУ</td>
        <td className="border border-slate-300 px-4 py-2">14–20 рабочих дней</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Разработка проекта ЛСТК</td>
        <td className="border border-slate-300 px-4 py-2">7–14 рабочих дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Разрешение на строительство</td>
        <td className="border border-slate-300 px-4 py-2">До 30 рабочих дней</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Уведомление о некапитальном объекте</td>
        <td className="border border-slate-300 px-4 py-2">До 7 рабочих дней</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>FAQ — частые вопросы по документам</h2>

<h3>Нужно ли разрешение на строительство для ангара из ЛСТК?</h3>
<p>Зависит от типа объекта. Для капитальных ангаров на стационарном фундаменте разрешение обязательно. Для некапитальных конструкций на сборно-разборном основании достаточно уведомительного порядка — срок рассмотрения до 7 рабочих дней.</p>

<h3>Требуется ли экспертиза проекта ангара?</h3>
<p>Для ангаров площадью до 1500 м² и высотой до 20 м экспертиза в большинстве регионов не требуется. Это позволяет сократить сроки строительства на 2–3 месяца.</p>

<h3>Какой минимальный срок аренды земли допустим для строительства ангара?</h3>
<p>Минимум 5 лет. При меньшем сроке аренды получить разрешение на строительство капитального объекта невозможно. Также вид разрешённого использования участка должен допускать производственное или складское назначение.</p>

<h3>Сколько времени занимает разработка проекта в МАКСТИЛ?</h3>
<p>Специалисты ЛСТК МАКСТИЛ готовят полный комплект проектной документации за 7–14 рабочих дней. Проект включает архитектурный, конструктивный и инженерный разделы с расчётом нагрузок по СП 20.13330.2016.</p>

<h3>Что входит в проектную документацию на ангар ЛСТК?</h3>
<p>Расчёт металлокаркаса на снеговые и ветровые нагрузки, схема фундамента, узлы крепления конструкций, спецификация материалов, архитектурные планы и инженерные разделы. Этот пакет необходим как для согласования, так и для корректного монтажа.</p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Нужна консультация?</h3>
            <p className="text-muted mb-4">Наши инженеры бесплатно рассчитают стоимость вашего проекта за 15 минут.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/configurator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
