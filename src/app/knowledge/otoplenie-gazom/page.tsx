import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Отопление ангара газом | Справочник ЛСТК",
  description: "Профессиональное руководство по отопление ангара газом. Цены, сроки, технологии ЛСТК.",
  keywords: ["otoplenie gazom"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Отопление ангара газом",
    "description": "Руководство по отопление ангара газом",
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
            Отопление ангара газом
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>

          <h1>Отопление ангара газом: расчёт мощности и стоимость</h1>

<p>Газовое отопление — оптимальное решение для ангаров из ЛСТК площадью от 300 м². Оно сочетает экономичность эксплуатации и быстрый прогрев пространства. Специалисты ЛСТК МАКСТИЛ выполняют расчёт системы отопления ещё на этапе проекта здания, что позволяет точно подобрать оборудование и снизить теплопотери на 25–40% по сравнению с типовыми решениями.</p>

<h2>Как выполняется расчёт мощности газового котла</h2>
<p>Базовая формула для ангара: 1 кВт мощности на 10 м² площади при высоте потолков до 3 м. Для строительства складских ЛСТК-ангаров с высотой 6–8 м применяется коэффициент 1,5–2. Например, для ангара 600 м² потребуется котёл мощностью 90–120 кВт. На итоговый расчёт влияют толщина утеплителя сэндвич-панелей (100–200 мм), регион строительства и режим эксплуатации объекта.</p>

<div className="overflow-x-auto my-6">
<table className="min-w-full border border-slate-300">
<thead className="bg-slate-100">
<tr>
<th className="border border-slate-300 px-4 py-2 text-left">Площадь ангара</th>
<th className="border border-slate-300 px-4 py-2 text-left">Высота потолков</th>
<th className="border border-slate-300 px-4 py-2 text-left">Требуемая мощность котла</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-300 px-4 py-2">300 м²</td>
<td className="border border-slate-300 px-4 py-2">до 3 м</td>
<td className="border border-slate-300 px-4 py-2">30 кВт</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">600 м²</td>
<td className="border border-slate-300 px-4 py-2">6–8 м</td>
<td className="border border-slate-300 px-4 py-2">90–120 кВт</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">1000 м²</td>
<td className="border border-slate-300 px-4 py-2">6–8 м</td>
<td className="border border-slate-300 px-4 py-2">150–200 кВт</td>
</tr>
</tbody>
</table>
</div>

<h2>Стоимость газового отопления ангара</h2>
<p>Цена системы под ключ для ангара ЛСТК 500–800 м² составляет от 450 000 до 1 200 000 рублей.</p>

<div className="overflow-x-auto my-6">
<table className="min-w-full border border-slate-300">
<thead className="bg-slate-100">
<tr>
<th className="border border-slate-300 px-4 py-2 text-left">Статья сметы</th>
<th className="border border-slate-300 px-4 py-2 text-left">Стоимость (от)</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-300 px-4 py-2">Газовый котёл</td>
<td className="border border-slate-300 px-4 py-2">180 000 руб.</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Воздушные тепловентиляторы или регистры</td>
<td className="border border-slate-300 px-4 py-2">120 000 руб.</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Дымоход, обвязка, автоматика</td>
<td className="border border-slate-300 px-4 py-2">90 000 руб.</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Монтаж и пусконаладка</td>
<td className="border border-slate-300 px-4 py-2">60 000 руб.</td>
</tr>
</tbody>
</table>
</div>

<p>Расход газа при правильно утеплённом ангаре ЛСТК — около 1,2 м³/час на 100 м² при -20 °C за бортом.</p>

<h2>Преимущества интеграции отопления в проект ЛСТК</h2>
<p>Когда монтаж системы отопления закладывается в проект ангара ЛСТК изначально, удаётся оптимизировать разводку коммуникаций, расположить котельную в техническом блоке и избежать переделок. Это сокращает сроки строительства на 2–3 недели и снижает итоговую цену на 10–15%.</p>

<h2>Сроки реализации</h2>
<p>Стандартный срок монтажа газового отопления в ангаре ЛСТК площадью до 1000 м² — 14–21 день. Полный цикл включает проектирование, строительство ангара и ввод системы отопления в эксплуатацию.</p>

<h2>Часто задаваемые вопросы</h2>

<h3>Какой котёл выбрать для ангара 600 м²?</h3>
<p>Для ангара ЛСТК площадью 600 м² с высотой потолков 6–8 м рекомендуется газовый котёл мощностью 90–120 кВт. Точный выбор зависит от толщины утеплителя сэндвич-панелей и климатического региона.</p>

<h3>Сколько газа потребляет отопление ангара?</h3>
<p>В правильно утеплённом ангаре ЛСТК расход составляет около 1,2 м³/час на каждые 100 м² площади при наружной температуре -20 °C. Для ангара 500 м² это примерно 6 м³/час в пиковые морозы.</p>

<h3>Сколько стоит газовое отопление ангара под ключ?</h3>
<p>Стоимость системы для ангара ЛСТК 500–800 м² составляет от 450 000 до 1 200 000 рублей с учётом котла, тепловентиляторов, дымохода, автоматики и монтажа.</p>

<h3>За какой срок монтируется система отопления?</h3>
<p>Полный монтаж газового отопления в ангаре площадью до 1000 м² занимает 14–21 день. При интеграции в проект ЛСТК на этапе строительства сроки сокращаются на 2–3 недели.</p>

<h3>Почему выгодно проектировать отопление вместе с ангаром?</h3>
<p>Совместное проектирование позволяет оптимально разместить котельную, сократить длину коммуникаций, снизить теплопотери на 25–40% и уменьшить итоговую цену на 10–15% за счёт исключения переделок.</p>

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
