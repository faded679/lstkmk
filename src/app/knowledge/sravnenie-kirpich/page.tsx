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
        {/* Хлебные крошки */}
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          {/* Заголовок */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ЛСТК vs кирпич
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сравнение
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по лстк vs кирпич. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Ангар из ЛСТК vs кирпича: что дешевле и быстрее</h1>

<p>При выборе технологии строительства ангара заказчики всё чаще сравнивают классическую кирпичную кладку и современные лёгкие стальные тонкостенные конструкции (ЛСТК). Разберёмся, какой проект выгоднее по цене, срокам монтажа и эксплуатационным характеристикам.</p>

<h2>Цена строительства: разница до 40%</h2>
<p>Средняя стоимость ангара из кирпича составляет 28 000–35 000 ₽/м² с учётом фундамента, кладки, кровли и отделки. Цена аналогичного объекта из ЛСТК — 12 000–18 000 ₽/м². Экономия достигается за счёт лёгкости конструкций: вес 1 м² каркаса ЛСТК — около 25 кг против 600 кг у кирпичной стены, что позволяет использовать облегчённый свайный или ленточный мелкозаглублённый фундамент. Расчёт по реальному объекту 1000 м² показывает экономию от 12 до 17 млн рублей.</p>

<h2>Сроки монтажа: 30 дней против 6 месяцев</h2>
<p>Возведение кирпичного ангара площадью 1000 м² занимает 5–7 месяцев с учётом сезонности — кладка невозможна при температуре ниже −5 °C. Монтаж каркаса ЛСТК выполняется за 25–35 дней в любое время года. Элементы изготавливаются на заводе с точностью до 1 мм, а сборка ведётся болтовыми соединениями без сварки на площадке.</p>

<h2>Эксплуатация и долговечность</h2>
<p>Кирпич требует регулярного обслуживания швов и защиты от промерзания. Оцинкованные профили ЛСТК с покрытием Z350 служат 50+ лет без коррозии. Каркас выдерживает снеговую нагрузку до 320 кг/м² и ветровую — до 48 м/с, что подтверждено расчётами по СП 20.13330.</p>

<h2>Когда выбрать кирпич, а когда ЛСТК</h2>
<p>Кирпич оправдан только для архитектурно сложных или капитальных объектов с особыми требованиями к массе. Для складов, производств, СТО, сельхозкомплексов и логистических хабов ЛСТК — оптимальное решение по соотношению «цена–сроки–качество».</p>

<h2>Закажите расчёт ангара под ваш проект</h2>
<p>Компания ЛСТК МАКСТИЛ выполнит бесплатный расчёт стоимости ангара по вашим габаритам за 1 рабочий день. Проектирование, изготовление и монтаж — под ключ с гарантией 25 лет.</p>
<p><strong>Звоните: +7 (980) 321-15-42</strong> — инженер ответит на все вопросы и подготовит коммерческое предложение.</p>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ангар из ЛСТК vs кирпича: что дешевле и быстрее",
  "description": "Сравнение технологий строительства ангаров из ЛСТК и кирпича: цена, сроки монтажа, эксплуатация. Экономия до 40% и возведение за 30 дней.",
  "author": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ",
    "telephone": "+7 (980) 321-15-42"
  },
  "about": "Строительство ангаров из ЛСТК",
  "keywords": "ЛСТК, ангар, строительство, цена, проект, монтаж, сроки, расчёт"
}
`}} />
              </div>
            </section>

            {/* Блок с CTA */}
            <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Нужна консультация?
              </h3>
              <p className="text-muted mb-4">
                Наши инженеры бесплатно рассчитают стоимость вашего проекта за 15 минут.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/configurator" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  <Calculator size={18} />
                  Рассчитать стоимость
                </a>
                <a 
                  href="tel:+79803211542" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Phone size={18} />
                  +7 (980) 321-15-42
                </a>
              </div>
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Частые вопросы</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Вопрос 1?</h3>
                  <p className="text-muted text-sm">Ответ на вопрос...</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Вопрос 2?</h3>
                  <p className="text-muted text-sm">Ответ на вопрос...</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
