import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Сравнение сэндвич-панелей | Справочник ЛСТК",
  description: "Профессиональное руководство по сравнение сэндвич-панелей. Цены, сроки, технологии ЛСТК.",
  keywords: ["sravnenie sendvich"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Сравнение сэндвич-панелей",
    "description": "Руководство по сравнение сэндвич-панелей",
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
            Сравнение сэндвич-панелей
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Материалы
          </div>

          <h1 className="text-4xl font-bold mb-6">Сравнение сэндвич-панелей: какие выбрать для ангара из ЛСТК</h1>

<p className="mb-6">Выбор сэндвич-панелей напрямую влияет на стоимость строительства ангара, сроки монтажа и эксплуатационные характеристики объекта. Компания «МАКСТИЛ» специализируется на возведении зданий из ЛСТК под ключ и помогает заказчикам подобрать оптимальное решение под конкретный проект и бюджет.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Минеральная вата: безопасность и универсальность</h2>
<p className="mb-6">Панели с наполнителем из минеральной ваты — лидер для отапливаемых ангаров и складов с повышенными требованиями к пожарной безопасности. Класс горючести НГ (негорючие), коэффициент теплопроводности 0,042 Вт/м·К, плотность сердечника 105–140 кг/м³. Толщина 100–150 мм обеспечивает комфортный температурный режим даже при -35 °C. Цена выше пенополиуретановых аналогов на 15–20%, но окупается за счёт долговечности и страховых тарифов.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Пенополиуретан (ППУ): максимум тепла при минимальной толщине</h2>
<p className="mb-6">ППУ-панели — лучший выбор для холодильных ангаров и быстровозводимых складов. Теплопроводность всего 0,022 Вт/м·К — в 2 раза эффективнее минваты. Панель толщиной 80 мм по теплоизоляции равна 150 мм минераловатной. Снижают нагрузку на каркас ЛСТК и ускоряют монтаж до 30%. Класс горючести Г2.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Пенополистирол (ПСБ): экономичное решение</h2>
<p className="mb-6">Самый бюджетный вариант — на 25–30% дешевле минваты. Подходит для неотапливаемых ангаров, сельхозхранилищ, гаражных боксов. Срок службы до 25 лет. Ограничение — класс горючести Г3, поэтому для производств с открытым огнём не рекомендуется.</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Сравнительная таблица сэндвич-панелей</h2>
<div className="overflow-x-auto my-6">
  <table className="w-full border border-slate-300 border-collapse">
    <thead>
      <tr className="bg-slate-100">
        <th className="border border-slate-300 px-4 py-2 text-left">Характеристика</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Минвата</th>
        <th className="border border-slate-300 px-4 py-2 text-left">ППУ</th>
        <th className="border border-slate-300 px-4 py-2 text-left">ПСБ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Теплопроводность, Вт/м·К</td>
        <td className="border border-slate-300 px-4 py-2">0,042</td>
        <td className="border border-slate-300 px-4 py-2">0,022</td>
        <td className="border border-slate-300 px-4 py-2">0,038</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Класс горючести</td>
        <td className="border border-slate-300 px-4 py-2">НГ</td>
        <td className="border border-slate-300 px-4 py-2">Г2</td>
        <td className="border border-slate-300 px-4 py-2">Г3</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Плотность, кг/м³</td>
        <td className="border border-slate-300 px-4 py-2">105–140</td>
        <td className="border border-slate-300 px-4 py-2">40–60</td>
        <td className="border border-slate-300 px-4 py-2">15–25</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Толщина, мм</td>
        <td className="border border-slate-300 px-4 py-2">100–150</td>
        <td className="border border-slate-300 px-4 py-2">80–120</td>
        <td className="border border-slate-300 px-4 py-2">100–150</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Срок службы, лет</td>
        <td className="border border-slate-300 px-4 py-2">до 50</td>
        <td className="border border-slate-300 px-4 py-2">до 40</td>
        <td className="border border-slate-300 px-4 py-2">до 25</td>
      </tr>
      <tr className="bg-slate-50">
        <td className="border border-slate-300 px-4 py-2">Стоимость</td>
        <td className="border border-slate-300 px-4 py-2">Базовая</td>
        <td className="border border-slate-300 px-4 py-2">+15–20%</td>
        <td className="border border-slate-300 px-4 py-2">−25–30%</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Применение</td>
        <td className="border border-slate-300 px-4 py-2">Отапливаемые склады, производства</td>
        <td className="border border-slate-300 px-4 py-2">Холодильники, быстровозводимые</td>
        <td className="border border-slate-300 px-4 py-2">Неотапливаемые ангары, гаражи</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-semibold mt-8 mb-4">Что учесть при расчёте проекта</h2>
<p className="mb-6">На итоговую цену ангара из ЛСТК влияют: климатический регион, назначение здания, ширина пролёта (стандарт 12–36 м), снеговая и ветровая нагрузки. Средние сроки строительства ангара 600 м² «под ключ» — 30–45 дней с момента готовности фундамента. Экономия на типе панелей возможна только при грамотном подборе под назначение объекта.</p>

<h2 className="text-2xl font-semibold mt-10 mb-6">Часто задаваемые вопросы</h2>

<h3 className="text-xl font-semibold mt-6 mb-3">Какие сэндвич-панели лучше для отапливаемого ангара?</h3>
<p className="mb-6">Для отапливаемых объектов оптимальны минераловатные панели толщиной 100–150 мм. Они негорючие (класс НГ), обеспечивают комфорт при -35 °C и снижают страховые тарифы. Если важна минимальная толщина и быстрый монтаж — выбирайте ППУ.</p>

<h3 className="text-xl font-semibold mt-6 mb-3">Можно ли использовать пенополистирол для производственного здания?</h3>
<p className="mb-6">ПСБ-панели имеют класс горючести Г3 и не рекомендуются для производств с открытым огнём или повышенными требованиями пожарной безопасности. Подходят для неотапливаемых ангаров, сельхозхранилищ и гаражных боксов.</p>

<h3 className="text-xl font-semibold mt-6 mb-3">Почему ППУ-панели тоньше минераловатных при той же теплоизоляции?</h3>
<p className="mb-6">Теплопроводность пенополиуретана (0,022 Вт/м·К) почти в 2 раза ниже минваты (0,042 Вт/м·К). Поэтому ППУ толщиной 80 мм даёт ту же теплоизоляцию, что минвата 150 мм, плюс снижает нагрузку на каркас ЛСТК.</p>

<h3 className="text-xl font-semibold mt-6 mb-3">Сколько занимает строительство ангара 600 м² под ключ?</h3>
<p className="mb-6">Средний срок монтажа ангара площадью 600 м² из ЛСТК с сэндвич-панелями составляет 30–45 дней с момента готовности фундамента. ППУ-панели позволяют ускорить процесс до 30%.</p>

<h3 className="text-xl font-semibold mt-6 mb-3">Как выбрать оптимальный тип панели по бюджету?</h3>
<p className="mb-6">Минимальный бюджет — ПСБ (на 25–30% дешевле минваты), универсальный выбор — минвата, премиум-решение с лучшей теплоизоляцией — ППУ (+15–20% к цене минваты). Инженеры «МАКСТИЛ» рассчитают оптимальный вариант под ваш проект — звоните +7 (960) 632-20-61.</p>

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
