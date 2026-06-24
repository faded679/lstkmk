import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стоимость ангара за 1 м² | Справочник ЛСТК",
  description: "Профессиональное руководство по стоимость ангара за 1 м². Цены, сроки, технологии ЛСТК.",
  keywords: ["stoimost m2"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Стоимость ангара за 1 м²",
    "description": "Руководство по стоимость ангара за 1 м²",
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
            Стоимость ангара за 1 м²
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Цены
          </div>

          <h1>Сколько стоит построить ангар за 1 м² в 2024 году</h1>

<p>Строительство ангара из ЛСТК — это оптимальное решение для бизнеса, который ценит сроки и бюджет. В 2024 году цена за квадратный метр такого объекта остаётся одной из самых конкурентных на рынке быстровозводимых конструкций. Компания МАКСТИЛ предлагает полный цикл: от проекта до монтажа под ключ. Разберём, из чего складывается итоговая стоимость.</p>

<h2>Средняя цена ангара ЛСТК в 2024 году</h2>
<p>Базовая стоимость строительства ангара из ЛСТК стартует от <strong>8 500 руб./м²</strong> за каркас и от <strong>14 000 руб./м²</strong> «под ключ» с фундаментом, кровлей и воротами. Для сравнения: классический металлокаркас обойдётся в 18 000–25 000 руб./м². Экономия достигает 30–40% за счёт меньшего веса конструкции и упрощённого фундамента. Подробный прайс на полный цикл строительства — на странице <a href="/angar-pod-klyuch-cena/" className="text-accent-blue hover:underline">ангар под ключ цена за м²</a>.</p>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse">
<thead>
<tr className="bg-slate-100">
<th className="border border-slate-300 px-4 py-2 text-left">Тип конструкции / комплектация</th>
<th className="border border-slate-300 px-4 py-2 text-left">Стоимость, руб./м²</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-300 px-4 py-2">Каркас ЛСТК</td>
<td className="border border-slate-300 px-4 py-2">от 8 500</td>
</tr>
<tr className="bg-slate-50">
<td className="border border-slate-300 px-4 py-2">Ангар ЛСТК «под ключ»</td>
<td className="border border-slate-300 px-4 py-2">от 14 000</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Классический металлокаркас</td>
<td className="border border-slate-300 px-4 py-2">18 000 – 25 000</td>
</tr>
<tr className="bg-slate-50">
<td className="border border-slate-300 px-4 py-2">Экономия с ЛСТК</td>
<td className="border border-slate-300 px-4 py-2">30 – 40%</td>
</tr>
</tbody>
</table>
</div>

<h2>Что влияет на расчёт стоимости</h2>
<p>Финальная цена зависит от нескольких факторов:</p>
<ul>
<li><strong>Площадь и пролёт</strong> — ангары ЛСТК эффективны при пролётах до 24 м;</li>
<li><strong>Снеговая и ветровая нагрузка</strong> региона;</li>
<li><strong>Тип утепления</strong> — холодный ангар дешевле тёплого на 20–25%;</li>
<li><strong>Сложность проекта</strong> — кран-балка, антресоли, доковые ворота.</li>
</ul>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse">
<thead>
<tr className="bg-slate-100">
<th className="border border-slate-300 px-4 py-2 text-left">Фактор</th>
<th className="border border-slate-300 px-4 py-2 text-left">Влияние на цену</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-300 px-4 py-2">Пролёт</td>
<td className="border border-slate-300 px-4 py-2">Эффективно до 24 м</td>
</tr>
<tr className="bg-slate-50">
<td className="border border-slate-300 px-4 py-2">Холодный vs тёплый ангар</td>
<td className="border border-slate-300 px-4 py-2">Холодный дешевле на 20–25%</td>
</tr>
<tr>
<td className="border border-slate-300 px-4 py-2">Дополнительное оборудование</td>
<td className="border border-slate-300 px-4 py-2">Увеличивает смету индивидуально</td>
</tr>
<tr className="bg-slate-50">
<td className="border border-slate-300 px-4 py-2">Снеговой/ветровой район</td>
<td className="border border-slate-300 px-4 py-2">Влияет на сечение профиля</td>
</tr>
</tbody>
</table>
</div>

<h2>Сроки строительства и монтаж</h2>
<p>Один из главных плюсов технологии ЛСТК — скорость. Монтаж каркаса ангара площадью 500 м² занимает <strong>от 14 рабочих дней</strong>, а полный цикл строительства с отделкой — 1,5–2 месяца. Все элементы изготавливаются на заводе с точностью до 1 мм, что исключает подгонку на стройплощадке.</p>

<h2>Преимущества ангаров ЛСТК от МАКСТИЛ</h2>
<p>Срок службы оцинкованного профиля — <strong>более 50 лет</strong> без коррозии. Конструкция в 3 раза легче традиционной, что снижает затраты на фундамент. Мы выполняем индивидуальный расчёт под задачи заказчика — будь то склад, СТО, производственный цех или сельскохозяйственный объект.</p>

<h2>Часто задаваемые вопросы</h2>

<h3>Сколько стоит ангар ЛСТК «под ключ» в 2024 году?</h3>
<p>Стоимость стартует от 14 000 руб./м² и включает фундамент, каркас, кровлю, стеновые панели и ворота. Точная цена рассчитывается индивидуально по проекту.</p>

<h3>Почему ЛСТК дешевле классического металлокаркаса?</h3>
<p>Конструкция в 3 раза легче, что сокращает расходы на фундамент и транспортировку. Заводская точность изготовления исключает подгонку и переделки, экономия достигает 30–40%.</p>

<h3>За сколько можно построить ангар площадью 500 м²?</h3>
<p>Монтаж каркаса занимает от 14 рабочих дней, а полный цикл с отделкой — 1,5–2 месяца. Это в 2–3 раза быстрее, чем традиционное строительство.</p>

<h3>Какой срок службы у ангара из ЛСТК?</h3>
<p>Оцинкованный профиль служит более 50 лет без коррозии. Антикоррозийное покрытие наносится на заводе и сохраняет свойства на весь срок эксплуатации.</p>

<h3>Можно ли утеплить ангар ЛСТК?</h3>
<p>Да, тёплый вариант с сэндвич-панелями или минватой обойдётся на 20–25% дороже холодного, но обеспечит круглогодичную эксплуатацию объекта.</p>

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
