import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Быстровозводимые здания из ЛСТК: 14 преимуществ технологии | МАКСТИЛ",
  description: "Разбираем 14 главных преимуществ быстровозводимых зданий из ЛСТК: скорость монтажа, стоимость, долговечность, сейсмостойкость, экология. Сравнение с кирпичом и бетоном.",
  keywords: ["преимущества ЛСТК", "быстровозводимые здания из ЛСТК", "ЛСТК плюсы и минусы", "технология ЛСТК преимущества", "зачем строить из ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Быстровозводимые здания из ЛСТК: 14 преимуществ технологии",
    "description": "14 главных преимуществ быстровозводимых зданий из ЛСТК.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Быстровозводимые здания из ЛСТК: 14 преимуществ технологии</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Технологии
          </div>

<p className="mb-4">Лёгкие стальные тонкостенные конструкции (ЛСТК) — технология быстровозводимых зданий, которая за 20 лет завоевала рынок промышленного, сельскохозяйственного и коммерческого строительства. Рассказываем, почему 70% наших заказчиков выбирают именно ЛСТК.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">14 преимуществ ЛСТК</h2>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1. Скорость строительства</h3>
<p className="mb-4">Здание 1 000 м² строится за 45–60 дней. Кирпичное аналогичного размера — 6–12 месяцев. Скорость достигается за счёт заводского изготовления всех элементов и сборки на болтах без мокрых процессов.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Низкая стоимость</h3>
<p className="mb-4">Стоимость ЛСТК-здания на 30–50% ниже кирпичного аналога. Экономия на фундаменте (лёгкий каркас — лёгкий фундамент), на рабочей силе (малая бригада) и на времени (быстрый возврат инвестиций).</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Минимальный фундамент</h3>
<p className="mb-4">Вес металлокаркаса — 25–60 кг/м². Вес кирпичного здания — 700–1 200 кг/м². Это позволяет применять свайный или столбчатый фундамент вместо дорогой монолитной плиты.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4. Большие пролёты без колонн</h3>
<p className="mb-4">Пролёт без внутренних опор — до 60 метров. Это открывает максимальные возможности для расстановки оборудования, стеллажей, техники без ограничений.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5. Точность изготовления</h3>
<p className="mb-4">Все элементы изготавливаются на заводе с допуском ±1 мм. Исключаются ошибки монтажа, характерные для кирпичной кладки или монолита.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6. Долговечность</h3>
<p className="mb-4">Оцинкованный стальной профиль ЛСТК служит 50–80 лет. Цинковое покрытие 275 г/м² обеспечивает катодную защиту от коррозии без дополнительной окраски.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7. Сейсмостойкость</h3>
<p className="mb-4">Металлокаркас обладает высокой пластичностью и демпфирует сейсмические нагрузки. ЛСТК-здания применяются в зонах сейсмичностью до 9 баллов.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">8. Возможность расширения</h3>
<p className="mb-4">Здание из ЛСТК легко расширить: пристроить секцию, надстроить этаж, сделать антресоль. Кирпичное здание расширить значительно сложнее и дороже.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9. Лёгкий демонтаж и переезд</h3>
<p className="mb-4">При необходимости здание можно разобрать и перевезти на новое место. Это важно для временных сооружений, вахтовых посёлков, выставочных павильонов.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10. Малый вес — меньше транспортных расходов</h3>
<p className="mb-4">Металлокаркас здания 1 000 м² весит 25–60 тонн и умещается в 2–3 фуры. Кирпич или бетон для аналогичного здания потребует 100+ рейсов.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11. Всесезонный монтаж</h3>
<p className="mb-4">Монтаж ЛСТК можно вести при температуре до −25 °C. Нет мокрых процессов, не нужно прогревать бетон. Зимний монтаж дороже всего на 10–15%.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">12. Экологичность</h3>
<p className="mb-4">Сталь — полностью перерабатываемый материал. При сносе здания 95% материалов идёт во вторичную переработку. Углеродный след в 2–3 раза меньше, чем у железобетона.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">13. Любая архитектура</h3>
<p className="mb-4">ЛСТК позволяет реализовать здания любой конфигурации: многощипцовые кровли, криволинейные фасады, большие остекления, мезонины и двусветные пространства.</p>

<h3 className="text-lg font-semibold text-foreground mt-6 mb-2">14. Гарантия и нормативная база</h3>
<p className="mb-4">Проектирование ведётся по ГОСТ Р 58619-2019, СП 260.1325800.2016. МАКСТИЛ даёт гарантию на конструкции 5 лет и сопровождает объект в течение всего гарантийного срока.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Построить здание из ЛСТК</h3>
<p className="text-muted mb-4">14 лет опыта, более 200 объектов по всей России. Рассчитайте стоимость за 2 минуты.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
