import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Монтаж ЛСТК своими руками | Справочник ЛСТК",
  description: "Профессиональное руководство по монтаж лстк своими руками. Цены, сроки, технологии ЛСТК.",
  keywords: ["montazh svoimi rukami"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Монтаж ЛСТК своими руками",
    "description": "Руководство по монтаж лстк своими руками",
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
            Монтаж ЛСТК своими руками
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Монтаж
          </div>

          <h1>Монтаж ЛСТК своими руками: пошаговая инструкция</h1>

<p>Технология ЛСТК (лёгкие стальные тонкостенные конструкции) — оптимальное решение для строительства ангаров, складов и быстровозводимых зданий. Благодаря точному заводскому изготовлению деталей с погрешностью до 1 мм, монтаж ЛСТК можно выполнить своими руками при наличии готового проекта и базовых строительных навыков. Расскажем, как организовать работы, уложиться в сроки и не превысить расчётную цену.</p>

<h2>Этап 1. Подготовка проекта и расчёт материалов</h2>
<p>Перед началом строительства необходим инженерный проект с КМД-чертежами и спецификацией. Точный расчёт металлоконструкций позволяет сократить расход материала на 15–20% по сравнению с традиционным металлокаркасом. Все элементы ЛСТК поставляются на объект пронумерованными и готовыми к сборке — резка и сварка на площадке не требуются.</p>

<h2>Этап 2. Устройство фундамента</h2>
<p>Малый вес конструкций ЛСТК (всего 25–35 кг/м²) позволяет использовать облегчённый фундамент: свайно-винтовой или мелкозаглублённый ленточный. Это снижает цену нулевого цикла на 30–40%. Анкерные пластины устанавливаются строго по проекту с шагом, указанным в чертежах.</p>

<h2>Этап 3. Сборка каркаса ангара</h2>
<p>Монтаж рам ЛСТК ведётся на земле, затем готовые рамы поднимаются краном и фиксируются на анкерах болтовыми соединениями. Далее устанавливаются прогоны, связи жёсткости и фахверк. Бригада из 4 человек собирает каркас ангара площадью 500 м² за 7–10 рабочих дней.</p>

<h2>Этап 4. Монтаж кровли и стен</h2>
<p>На каркас крепится сэндвич-панель или профлист с утеплителем. Работы ведутся снизу вверх, с обязательным контролем геометрии. Общий срок строительства ангара ЛСТК «под ключ» — от 1 до 3 месяцев в зависимости от площади.</p>

<h2>Сводная таблица этапов монтажа</h2>
<div className="overflow-x-auto my-6">
  <table className="w-full border border-slate-300 border-collapse">
    <thead>
      <tr className="bg-slate-100">
        <th className="border border-slate-300 px-4 py-2 text-left">Этап</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Ключевые показатели</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Экономия / Сроки</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Проект и расчёт</td>
        <td className="border border-slate-300 px-4 py-2">КМД-чертежи, погрешность до 1 мм</td>
        <td className="border border-slate-300 px-4 py-2">Экономия материала 15–20%</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Фундамент</td>
        <td className="border border-slate-300 px-4 py-2">Вес конструкций 25–35 кг/м²</td>
        <td className="border border-slate-300 px-4 py-2">Снижение цены на 30–40%</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Сборка каркаса</td>
        <td className="border border-slate-300 px-4 py-2">Бригада 4 человека, площадь 500 м²</td>
        <td className="border border-slate-300 px-4 py-2">7–10 рабочих дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Кровля и стены</td>
        <td className="border border-slate-300 px-4 py-2">Сэндвич-панель или профлист</td>
        <td className="border border-slate-300 px-4 py-2">1–3 месяца «под ключ»</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Вывод</h2>
<p>Самостоятельный монтаж ЛСТК реален при условии качественного проекта и соблюдения технологии сборки. Заводская готовность деталей, лёгкий вес конструкций и болтовые соединения позволяют небольшой бригаде возвести ангар за считанные недели, существенно сэкономив на фундаменте и материалах.</p>

<h2>FAQ — Часто задаваемые вопросы</h2>

<h3>Можно ли смонтировать ангар ЛСТК без крана?</h3>
<p>Для небольших объектов высотой до 4–5 метров возможна ручная сборка с использованием лебёдок и подъёмников, однако для ангаров площадью от 300 м² и более кран обязателен — он обеспечивает безопасный подъём готовых рам и точную установку на анкерные пластины.</p>

<h3>Какая минимальная бригада нужна для монтажа?</h3>
<p>Оптимальный состав — 4 человека: двое работают на высоте, двое подают и собирают элементы на земле. Такая бригада собирает каркас ангара 500 м² за 7–10 рабочих дней.</p>

<h3>Нужна ли сварка при монтаже ЛСТК?</h3>
<p>Нет, технология ЛСТК полностью исключает сварочные работы на объекте. Все детали поставляются с заводскими отверстиями и соединяются болтами или самонарезающими винтами по нумерации из спецификации.</p>

<h3>Какой фундамент выбрать под ангар ЛСТК?</h3>
<p>Благодаря малому весу конструкций (25–35 кг/м²) подойдёт свайно-винтовой или мелкозаглублённый ленточный фундамент. Это снижает стоимость нулевого цикла на 30–40% по сравнению с тяжёлыми зданиями.</p>

<h3>За какой срок реально построить ангар ЛСТК «под ключ»?</h3>
<p>Общий срок строительства составляет от 1 до 3 месяцев в зависимости от площади и сложности объекта, включая фундамент, сборку каркаса и монтаж ограждающих конструкций.</p>

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
