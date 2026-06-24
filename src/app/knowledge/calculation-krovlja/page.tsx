import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Расчёт кровли ангара: калькулятор и формулы | Справочник ЛСТК",
  description: "Профессиональное руководство по расчёт кровли ангара: калькулятор и формулы. Цены, сроки, технологии ЛСТК.",
  keywords: ["calculation krovlja"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Расчёт кровли ангара: калькулятор и формулы",
    "description": "Руководство по расчёт кровли ангара: калькулятор и формулы",
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
            Расчёт кровли ангара: калькулятор и формулы
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Калькуляторы
          </div>

          <h1>Расчёт кровли ангара: калькулятор и формулы для точного проекта</h1>

<p>Грамотный расчёт кровли — основа надёжного ангара из ЛСТК. От правильно подобранных параметров зависит цена строительства, сроки монтажа и долговечность конструкции. Компания МАКСТИЛ использует профессиональные методики расчёта, которые позволяют оптимизировать проект и сэкономить до 25% бюджета без потери качества.</p>

<h2>Основные формулы расчёта кровли ангара</h2>
<p>Площадь двускатной кровли вычисляется по формуле: <strong>S = (L × B) / cos(α)</strong>, где L — длина ангара, B — ширина ската, α — угол наклона. Для арочных конструкций ЛСТК применяется формула длины дуги: <strong>L = π × R × α / 180°</strong>. Стандартный угол наклона для ангаров — от 8° до 25°, оптимум — 15°, что обеспечивает баланс между ветровой и снеговой нагрузкой.</p>

<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Значение</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Комментарий</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Угол наклона (диапазон)</td>
        <td className="border border-slate-300 px-4 py-2">8° – 25°</td>
        <td className="border border-slate-300 px-4 py-2">Допустимый интервал для ангаров</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Оптимальный угол</td>
        <td className="border border-slate-300 px-4 py-2">15°</td>
        <td className="border border-slate-300 px-4 py-2">Баланс ветровой и снеговой нагрузки</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Площадь двускатной кровли</td>
        <td className="border border-slate-300 px-4 py-2">S = (L × B) / cos(α)</td>
        <td className="border border-slate-300 px-4 py-2">Базовая формула</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Длина дуги (арочная)</td>
        <td className="border border-slate-300 px-4 py-2">L = π × R × α / 180°</td>
        <td className="border border-slate-300 px-4 py-2">Для арочных ЛСТК-конструкций</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Расчёт нагрузок: снег и ветер</h2>
<p>Согласно СП 20.13330.2016, снеговая нагрузка в средней полосе России составляет 180 кг/м², в северных регионах — до 320 кг/м². Ветровая нагрузка для большинства районов — 23-30 кг/м². Конструкции ЛСТК МАКСТИЛ из оцинкованной стали толщиной 1,5-3 мм выдерживают суммарные нагрузки до 450 кг/м² при шаге ферм 1,2 м.</p>

<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Тип нагрузки</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Регион/Условия</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Значение</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Снеговая</td>
        <td className="border border-slate-300 px-4 py-2">Средняя полоса РФ</td>
        <td className="border border-slate-300 px-4 py-2">180 кг/м²</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Снеговая</td>
        <td className="border border-slate-300 px-4 py-2">Северные регионы</td>
        <td className="border border-slate-300 px-4 py-2">до 320 кг/м²</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Ветровая</td>
        <td className="border border-slate-300 px-4 py-2">Большинство районов</td>
        <td className="border border-slate-300 px-4 py-2">23–30 кг/м²</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Несущая способность ЛСТК</td>
        <td className="border border-slate-300 px-4 py-2">Сталь 1,5–3 мм, шаг ферм 1,2 м</td>
        <td className="border border-slate-300 px-4 py-2">до 450 кг/м²</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Онлайн-калькулятор кровли: как им пользоваться</h2>
<p>Для предварительного расчёта проекта ангара введите в калькулятор: длину, ширину, высоту стен, тип кровли (двускатная или арочная) и регион строительства. Система автоматически рассчитает количество ЛСТК-профилей, объём кровельного материала и ориентировочную цену. Точность такого расчёта — около 90%, финальная смета составляется инженером.</p>

<h2>Что учесть при расчёте: практические нюансы</h2>
<p>К базовой площади кровли добавьте 7-10% на свесы, нахлёсты и обрезки. Учтите вес утеплителя (минвата 100 мм — 15 кг/м²), пароизоляции и обрешётки. Для ангаров шириной более 24 м применяются усиленные фермы, что увеличивает стоимость конструкции.</p>

<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Элемент</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Поправка / Вес</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Свесы, нахлёсты, обрезки</td>
        <td className="border border-slate-300 px-4 py-2">+7–10% к площади</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Минвата 100 мм</td>
        <td className="border border-slate-300 px-4 py-2">15 кг/м²</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Ширина ангара &gt; 24 м</td>
        <td className="border border-slate-300 px-4 py-2">Требуются усиленные фермы</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Экономия бюджета (МАКСТИЛ)</td>
        <td className="border border-slate-300 px-4 py-2">до 25%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>FAQ: часто задаваемые вопросы</h2>

<h3>Какой угол наклона кровли оптимален для ангара?</h3>
<p>Оптимальный угол наклона кровли ангара — 15°. Допустимый диапазон составляет от 8° до 25°. Угол в 15° обеспечивает наилучший баланс между ветровой и снеговой нагрузкой, а также эффективный сход осадков.</p>

<h3>Какую нагрузку выдерживает кровля из ЛСТК МАКСТИЛ?</h3>
<p>Конструкции из оцинкованной стали толщиной 1,5–3 мм при шаге ферм 1,2 м выдерживают суммарную нагрузку до 450 кг/м². Этого достаточно даже для северных регионов, где снеговая нагрузка достигает 320 кг/м².</p>

<h3>Насколько точен онлайн-калькулятор кровли?</h3>
<p>Точность онлайн-расчёта составляет около 90%. Он подходит для предварительной оценки стоимости и объёмов материалов, однако финальную смету и рабочий проект составляет инженер компании с учётом всех технических нюансов.</p>

<h3>Сколько материала закладывать сверх базовой площади?</h3>
<p>К расчётной площади кровли необходимо добавить 7–10% на свесы, нахлёсты листов и технологические обрезки. Также важно учесть вес дополнительных слоёв: утеплителя, пароизоляции и обрешётки.</p>

<h3>Почему ангары шире 24 метров дороже?</h3>
<p>При ширине пролёта свыше 24 м стандартных ферм недостаточно — требуются усиленные конструкции с увеличенным сечением профиля и дополнительными узлами жёсткости. Это увеличивает расход металла и итоговую стоимость кровли.</p>

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
