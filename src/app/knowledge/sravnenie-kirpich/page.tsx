import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "ЛСТК vs кирпич | Справочник ЛСТК",
  description: "Профессиональное руководство по лстк vs кирпич. Цены, сроки, технологии ЛСТК.",
  keywords: ["sravnenie kirpich"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ЛСТК vs кирпич",
    "description": "Руководство по лстк vs кирпич",
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
            ЛСТК vs кирпич
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сравнение
          </div>

          <h1>Ангар из ЛСТК vs кирпича: что дешевле и быстрее</h1>

<p>При выборе технологии строительства ангара заказчики всё чаще сравнивают классическую кирпичную кладку и современные лёгкие стальные тонкостенные конструкции (ЛСТК). Разберёмся, какой проект выгоднее по цене, срокам монтажа и эксплуатационным характеристикам.</p>

<h2>Сводное сравнение технологий</h2>

<div className="overflow-x-auto my-6">
<table className="min-w-full border border-slate-300">
<thead className="bg-slate-100">
<tr>
<th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
<th className="border border-slate-300 px-4 py-2 text-left">ЛСТК</th>
<th className="border border-slate-300 px-4 py-2 text-left">Кирпич</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-300 px-4 py-2">Стоимость, ₽/м²</td>
<td className="border border-slate-300 px-4 py-2">12 000–18 000</td>
<td className="border border-slate-300 px-4 py-2">28 000–35 000</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Сроки монтажа (1000 м²)</td>
<td className="border border-slate-300 px-4 py-2">25–35 дней</td>
<td className="border border-slate-300 px-4 py-2">5–7 месяцев</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Вес 1 м² стены</td>
<td className="border border-slate-300 px-4 py-2">~25 кг</td>
<td className="border border-slate-300 px-4 py-2">~600 кг</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Сезонность работ</td>
<td className="border border-slate-300 px-4 py-2">Круглый год</td>
<td className="border border-slate-300 px-4 py-2">Не ниже −5 °C</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Срок службы</td>
<td className="border border-slate-300 px-4 py-2">50+ лет</td>
<td className="border border-slate-300 px-4 py-2">Требует обслуживания швов</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Тип фундамента</td>
<td className="border border-slate-300 px-4 py-2">Свайный / мелкозаглублённый</td>
<td className="border border-slate-300 px-4 py-2">Заглублённый ленточный</td>
</tr>
</tbody>
</table>
</div>

<h2>Цена строительства: разница до 40%</h2>
<p>Средняя стоимость ангара из кирпича составляет 28 000–35 000 ₽/м² с учётом фундамента, кладки, кровли и отделки. Цена аналогичного объекта из ЛСТК — 4 500–5 600 ₽/м². Экономия достигается за счёт лёгкости конструкций: вес 1 м² каркаса ЛСТК — около 25 кг против 600 кг у кирпичной стены, что позволяет использовать облегчённый свайный или ленточный мелкозаглублённый фундамент. Расчёт по реальному объекту 1000 м² показывает экономию от 22 до 29 млн рублей.</p>

<h2>Сроки монтажа: 30 дней против 6 месяцев</h2>
<p>Возведение кирпичного ангара площадью 1000 м² занимает 5–7 месяцев с учётом сезонности — кладка невозможна при температуре ниже −5 °C. Монтаж каркаса ЛСТК выполняется за 25–35 дней в любое время года. Элементы изготавливаются на заводе с точностью до 1 мм, а сборка ведётся болтовыми соединениями без сварки на площадке.</p>

<h2>Эксплуатация и долговечность</h2>
<p>Кирпич требует регулярного обслуживания швов и защиты от промерзания. Оцинкованные профили ЛСТК с покрытием Z350 служат 50+ лет без коррозии. Каркас выдерживает снеговую нагрузку до 320 кг/м² и ветровую — до 48 м/с, что подтверждено расчётами по СП 20.13330.</p>

<h2>Когда выбрать кирпич, а когда ЛСТК</h2>
<p>Кирпич оправдан только для архитектурно сложных или капитальных объектов с особыми требованиями к массе. Для складов, производств, СТО, сельхозкомплексов и логистических хабов ЛСТК — оптимальное решение по соотношению «цена–сроки–качество».</p>

<h2>Часто задаваемые вопросы</h2>

<h3>Насколько реально дешевле построить ангар из ЛСТК по сравнению с кирпичом?</h3>
<p>Экономия составляет до 40%. На объекте площадью 1000 м² разница в стоимости достигает 12–17 млн рублей за счёт лёгкого фундамента, отсутствия мокрых процессов и сокращённых сроков работ.</p>

<h3>Можно ли монтировать ангар из ЛСТК зимой?</h3>
<p>Да, монтаж ведётся круглогодично. В отличие от кирпичной кладки, которую нельзя выполнять при температуре ниже −5 °C, сборка ЛСТК на болтовых соединениях не зависит от погодных условий.</p>

<h3>Сколько служит ангар из ЛСТК и нужен ли ему ремонт?</h3>
<p>Срок службы оцинкованного каркаса с покрытием Z350 — более 50 лет без коррозии. В отличие от кирпича, не требуется обслуживание швов, защита от промерзания и регулярная реставрация фасада.</p>

<h3>Выдержит ли каркас ЛСТК снеговые и ветровые нагрузки?</h3>
<p>Да. Расчётная снеговая нагрузка — до 320 кг/м², ветровая — до 48 м/с. Все конструкции проектируются по СП 20.13330 с учётом снегового района заказчика.</p>

<h3>Для каких объектов лучше выбрать кирпич, а не ЛСТК?</h3>
<p>Кирпичная кладка оправдана только для архитектурно сложных капитальных зданий с особыми требованиями. Для складов, производственных цехов, СТО, сельхозкомплексов и логистических хабов оптимален ЛСТК.</p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Нужна консультация?</h3>
            <p className="text-muted mb-4">Наши инженеры бесплатно рассчитают стоимость вашего проекта за 15 минут.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/configurator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79606322061" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
