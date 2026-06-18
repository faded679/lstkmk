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
        {/* Хлебные крошки */}
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          {/* Заголовок */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Монтаж ЛСТК своими руками
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Монтаж
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по монтаж лстк своими руками. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
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

<h2>Вывод</h2>
<p>Самостоятельный монтаж ЛСТК реален при условии качественного проекта и соблюдения технологии. Однако ошибки на этапе расчёта или сборки могут привести к удорожанию объекта на 20–30%. Доверьте проектирование и шеф-монтаж профессионалам.</p>

<p><strong>Закажите расчёт стоимости вашего ангара в компании ЛСТК МАКСТИЛ по телефону +7 (980) 321-15-42 — подготовим проект и КП за 1 рабочий день!</strong></p>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Монтаж ЛСТК своими руками: пошаговая инструкция",
  "description": "Пошаговая инструкция по самостоятельному монтажу ЛСТК-конструкций: проект, фундамент, сборка каркаса ангара, сроки и цены.",
  "author": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ",
    "telephone": "+7 (980) 321-15-42"
  },
  "keywords": "ЛСТК, ангар, строительство, монтаж, проект, расчёт, цена, сроки"
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
