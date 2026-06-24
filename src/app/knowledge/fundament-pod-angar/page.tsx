import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Фундамент под ангар | Справочник ЛСТК",
  description: "Профессиональное руководство по фундамент под ангар. Цены, сроки, технологии ЛСТК.",
  keywords: ["fundament pod angar"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Фундамент под ангар",
    "description": "Руководство по фундамент под ангар",
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
            Фундамент под ангар
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Фундамент
          </div>

          <h1 className="text-4xl font-bold mb-6">Какой фундамент лучше под ангар: ленточный или свайный</h1>

<div className="prose prose-slate max-w-none">

<p className="text-lg mb-6">При строительстве ангара из ЛСТК выбор фундамента напрямую влияет на цену проекта, сроки монтажа и долговечность здания. Лёгкие стальные тонкостенные конструкции дают нагрузку на основание в 3-4 раза меньше, чем традиционные кирпич или железобетон, что открывает возможности для экономичных решений. Разберём, какой тип фундамента подходит именно вашему ангару.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Ленточный фундамент: классика для тяжёлых грунтов</h2>
<p className="mb-4">Мелкозаглублённая лента (глубина 0,5-0,7 м) — оптимальный вариант для устойчивых непучинистых грунтов. Преимущества: высокая несущая способность до 20 тонн на погонный метр, простота монтажа ворот и примыканий, возможность устройства бетонного пола. Минусы — сроки возведения 3-4 недели с учётом набора прочности бетона и стоимость от 5500 ₽/м.п. Используется для ангаров шириной свыше 24 м с тяжёлым крановым оборудованием.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Свайно-винтовой фундамент: быстро и экономично</h2>
<p className="mb-4">Для ангаров ЛСТК площадью до 1500 м² свайно-винтовое основание — лидер по соотношению цена/качество. Монтаж занимает всего 2-3 дня, нагрузка на одну сваю Ø108 мм достигает 5-7 тонн, а работы возможны круглый год даже при -15°C. Стоимость на 30-40% ниже ленточного варианта. Идеален для слабых, обводнённых и пучинистых грунтов, где промерзание превышает 1,5 м.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Сравнение по ключевым параметрам</h2>
<p className="mb-4">При расчёте проекта ангара ЛСТК учитываем: ленточный фундамент окупается при пролётах от 24 м и наличии мостовых кранов; свайный — выигрывает по срокам (готовность за 72 часа) и работает на любых грунтах. Срок службы винтовых свай с антикоррозийным покрытием — 70+ лет, ленты — 50-100 лет в зависимости от марки бетона.</p>

<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Ленточный</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Свайно-винтовой</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Сроки монтажа</td>
        <td className="border border-slate-300 px-4 py-2">3-4 недели</td>
        <td className="border border-slate-300 px-4 py-2">2-3 дня (72 часа)</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Стоимость</td>
        <td className="border border-slate-300 px-4 py-2">от 5500 ₽/м.п.</td>
        <td className="border border-slate-300 px-4 py-2">на 30-40% дешевле</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Несущая способность</td>
        <td className="border border-slate-300 px-4 py-2">до 20 т/п.м.</td>
        <td className="border border-slate-300 px-4 py-2">5-7 т на сваю Ø108 мм</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Срок службы</td>
        <td className="border border-slate-300 px-4 py-2">50-100 лет</td>
        <td className="border border-slate-300 px-4 py-2">70+ лет</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Работа зимой</td>
        <td className="border border-slate-300 px-4 py-2">Ограничено</td>
        <td className="border border-slate-300 px-4 py-2">Да, до -15°C</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Оптимальные грунты</td>
        <td className="border border-slate-300 px-4 py-2">Устойчивые непучинистые</td>
        <td className="border border-slate-300 px-4 py-2">Слабые, обводнённые, пучинистые</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Рекомендуемая площадь</td>
        <td className="border border-slate-300 px-4 py-2">Пролёты от 24 м, с кранами</td>
        <td className="border border-slate-300 px-4 py-2">До 1500 м²</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-semibold mt-8 mb-4">Что выбирает МАКСТИЛ для своих объектов</h2>
<p className="mb-4">В 75% проектов мы рекомендуем свайно-винтовое основание: оно даёт максимальную скорость монтажа, минимальные затраты и универсально подходит под большинство грунтов в регионе. Ленточный фундамент применяем для крупных промышленных ангаров с мостовыми кранами и пролётами свыше 24 м, где требуется повышенная несущая способность.</p>

<h2 className="text-2xl font-semibold mt-10 mb-4">Часто задаваемые вопросы</h2>

<h3 className="text-xl font-semibold mt-6 mb-2">Какой фундамент дешевле для ангара ЛСТК?</h3>
<p className="mb-4">Свайно-винтовой фундамент обходится на 30-40% дешевле ленточного. Для ангара площадью до 1500 м² это самое экономичное решение по соотношению цена/качество.</p>

<h3 className="text-xl font-semibold mt-6 mb-2">Можно ли строить фундамент зимой?</h3>
<p className="mb-4">Да, свайно-винтовые сваи монтируются круглогодично при температуре до -15°C. Ленточный фундамент зимой устраивать сложнее из-за необходимости прогрева бетона и увеличения сроков набора прочности.</p>

<h3 className="text-xl font-semibold mt-6 mb-2">Сколько служит свайно-винтовой фундамент?</h3>
<p className="mb-4">При наличии качественного антикоррозийного покрытия срок службы винтовых свай превышает 70 лет, что сопоставимо со сроком службы самого ангара ЛСТК.</p>

<h3 className="text-xl font-semibold mt-6 mb-2">Когда нужен только ленточный фундамент?</h3>
<p className="mb-4">Ленточный фундамент необходим для ангаров с пролётами свыше 24 м, при установке мостовых кранов и тяжёлого подъёмного оборудования, а также если требуется устройство монолитного бетонного пола в составе единой конструкции.</p>

<h3 className="text-xl font-semibold mt-6 mb-2">За сколько монтируется свайный фундамент?</h3>
<p className="mb-4">Монтаж свайно-винтового основания для ангара ЛСТК занимает 2-3 дня. Полная готовность к началу монтажа металлокаркаса достигается уже через 72 часа.</p>

<h3 className="text-xl font-semibold mt-6 mb-2">Подходит ли свайный фундамент для слабых грунтов?</h3>
<p className="mb-4">Да, свайно-винтовое основание идеально для слабых, обводнённых и пучинистых грунтов, в том числе там, где глубина промерзания превышает 1,5 м. Сваи передают нагрузку на плотные слои грунта ниже зоны промерзания.</p>

</div>

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
