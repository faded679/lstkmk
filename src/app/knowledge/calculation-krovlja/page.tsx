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
        {/* Хлебные крошки */}
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          {/* Заголовок */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Расчёт кровли ангара: калькулятор и формулы
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Калькуляторы
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по расчёт кровли ангара: калькулятор и формулы. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Расчёт кровли ангара: калькулятор и формулы для точного проекта</h1>

<p>Грамотный расчёт кровли — основа надёжного ангара из ЛСТК. От правильно подобранных параметров зависит цена строительства, сроки монтажа и долговечность конструкции. Компания МАКСТИЛ использует профессиональные методики расчёта, которые позволяют оптимизировать проект и сэкономить до 25% бюджета без потери качества.</p>

<h2>Основные формулы расчёта кровли ангара</h2>
<p>Площадь двускатной кровли вычисляется по формуле: S = (L × B) / cos(α), где L — длина ангара, B — ширина ската, α — угол наклона. Для арочных конструкций ЛСТК применяется формула длины дуги: L = π × R × α / 180°. Стандартный угол наклона для ангаров — от 8° до 25°, оптимум — 15°, что обеспечивает баланс между ветровой и снеговой нагрузкой.</p>

<h2>Расчёт нагрузок: снег и ветер</h2>
<p>Согласно СП 20.13330.2016, снеговая нагрузка в средней полосе России составляет 180 кг/м², в северных регионах — до 320 кг/м². Ветровая нагрузка для большинства районов — 23-30 кг/м². Конструкции ЛСТК МАКСТИЛ из оцинкованной стали толщиной 1,5-3 мм выдерживают суммарные нагрузки до 450 кг/м² при шаге ферм 1,2 м.</p>

<h2>Онлайн-калькулятор кровли: как им пользоваться</h2>
<p>Для предварительного расчёта проекта ангара введите в калькулятор: длину, ширину, высоту стен, тип кровли (двускатная или арочная) и регион строительства. Система автоматически рассчитает количество ЛСТК-профилей, объём кровельного материала и ориентировочную цену. Точность такого расчёта — около 90%, финальная смета составляется инженером.</p>

<h2>Что учесть при расчёте: практические нюансы</h2>
<p>К базовой площади кровли добавьте 7-10% на свесы, нахлёсты и обрезки. Учтите вес утеплителя (минвата 100 мм — 15 кг/м²), пароизоляции и обрешётки. Для ангаров шириной более 24 м применяются усиленные фермы, что увеличивает стоимость на 12-18%, но позволяет обойтись без промежуточных опор.</p>

<h2>Заказать профессиональный расчёт</h2>
<p>Инженеры МАКСТИЛ выполнят бесплатный расчёт кровли вашего ангара за 1-2 рабочих дня. Мы предоставим детальный проект, спецификацию ЛСТК и точную смету. Средние сроки монтажа кровли ангара 500 м² — 14-21 день.</p>

<p><strong>Звоните прямо сейчас: +7 (980) 321-15-42</strong> — рассчитаем ваш проект бесплатно!</p>
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
