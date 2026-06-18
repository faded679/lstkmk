import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Проектирование ангаров онлайн | Справочник ЛСТК",
  description: "Профессиональное руководство по проектирование ангаров онлайн. Цены, сроки, технологии ЛСТК.",
  keywords: ["proektirovanie online"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Проектирование ангаров онлайн",
    "description": "Руководство по проектирование ангаров онлайн",
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
            Проектирование ангаров онлайн
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Проектирование
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по проектирование ангаров онлайн. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Проектирование ангаров онлайн: бесплатный расчёт стоимости и проекта ЛСТК</h1>

<p>Современные технологии позволяют выполнить проектирование ангара из ЛСТК без визита в офис. Компания МАКСТИЛ предлагает бесплатный онлайн-расчёт стоимости строительства за <strong>15 минут</strong>, готовое 3D-визуализированное решение и точную смету. Вам достаточно указать габариты и назначение объекта — наши инженеры подготовят проект с учётом снеговой и ветровой нагрузки региона.</p>

<h2>Как работает онлайн-проектирование ангара из ЛСТК</h2>
<p>Расчёт ангара выполняется в специализированном ПО на базе типовых каркасов ЛСТК. Программа учитывает более <strong>40 параметров</strong>: пролёт от 6 до 30 м, высоту до карниза, шаг ферм, тип кровли и стенового заполнения. На выходе клиент получает чертежи КМД, спецификацию металла и прозрачную цену без скрытых платежей.</p>

<h2>Что включает бесплатный расчёт</h2>
<ul>
<li>Подбор оптимального сечения профилей ЛСТК толщиной 1,5–3 мм</li>
<li>Расчёт фундамента и узлов крепления</li>
<li>Смета на материалы и монтаж «под ключ»</li>
<li>3D-визуализация будущего ангара</li>
<li>Сроки реализации проекта с разбивкой по этапам</li>
</ul>

<h2>Цена и сроки строительства ангара ЛСТК</h2>
<p>Стоимость ангара из ЛСТК стартует от <strong>6 500 ₽/м²</strong> «под ключ» — это на 30–40% дешевле традиционных решений из сварного двутавра. Срок изготовления комплекта каркаса — от <strong>14 дней</strong>, монтаж ангара площадью 600 м² занимает 3–4 недели. Гарантия на металлоконструкции — <strong>50 лет</strong> при использовании оцинкованной стали Z350.</p>

<h2>Преимущества проектирования у МАКСТИЛ</h2>
<p>Собственное производство ЛСТК исключает наценки посредников. Все проекты проходят проверку конструктора с допуском СРО. Доставка комплекта осуществляется по всей России, монтажные бригады работают в любом регионе. Технология ЛСТК позволяет возводить ангары на ленточном или свайно-винтовом фундаменте без тяжёлой техники.</p>

<h2>Закажите расчёт прямо сейчас</h2>
<p>Получите бесплатный проект и цену вашего ангара сегодня. Позвоните по телефону <strong><a href="tel:+79803211542">+7 (980) 321-15-42</a></strong> — инженер МАКСТИЛ ответит на все вопросы и подготовит коммерческое предложение в течение часа.</p>
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
