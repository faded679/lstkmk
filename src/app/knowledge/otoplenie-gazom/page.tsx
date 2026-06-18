import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Отопление ангара газом | Справочник ЛСТК",
  description: "Профессиональное руководство по отопление ангара газом. Цены, сроки, технологии ЛСТК.",
  keywords: ["otoplenie gazom"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Отопление ангара газом",
    "description": "Руководство по отопление ангара газом",
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
            Отопление ангара газом
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по отопление ангара газом. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Отопление ангара газом: расчёт мощности и стоимость</h1>

<p>Газовое отопление — оптимальное решение для ангаров из ЛСТК площадью от 300 м². Оно сочетает экономичность эксплуатации и быстрый прогрев пространства. Специалисты ЛСТК МАКСТИЛ выполняют расчёт системы отопления ещё на этапе проекта здания, что позволяет точно подобрать оборудование и снизить теплопотери на 25–40% по сравнению с типовыми решениями.</p>

<h2>Как выполняется расчёт мощности газового котла</h2>
<p>Базовая формула для ангара: 1 кВт мощности на 10 м² площади при высоте потолков до 3 м. Для строительства складских ЛСТК-ангаров с высотой 6–8 м применяется коэффициент 1,5–2. Например, для ангара 600 м² потребуется котёл мощностью 90–120 кВт. На итоговый расчёт влияют толщина утеплителя сэндвич-панелей (100–200 мм), регион строительства и режим эксплуатации объекта.</p>

<h2>Стоимость газового отопления ангара</h2>
<p>Цена системы под ключ для ангара ЛСТК 500–800 м² составляет от 450 000 до 1 200 000 рублей. В смету входят:</p>
<ul>
<li>Газовый котёл — от 180 000 руб.</li>
<li>Воздушные тепловентиляторы или регистры — от 120 000 руб.</li>
<li>Дымоход, обвязка, автоматика — от 90 000 руб.</li>
<li>Монтаж и пусконаладка — от 60 000 руб.</li>
</ul>
<p>Расход газа при правильно утеплённом ангаре ЛСТК — около 1,2 м³/час на 100 м² при -20 °C за бортом.</p>

<h2>Преимущества интеграции отопления в проект ЛСТК</h2>
<p>Когда монтаж системы отопления закладывается в проект ангара ЛСТК изначально, удаётся оптимизировать разводку коммуникаций, расположить котельную в техническом блоке и избежать переделок. Это сокращает сроки строительства на 2–3 недели и снижает итоговую цену на 10–15%.</p>

<h2>Сроки реализации</h2>
<p>Стандартный срок монтажа газового отопления в ангаре ЛСТК площадью до 1000 м² — 14–21 день. Полный цикл: проект ангара, строительство каркаса, обшивка, монтаж инженерных систем — от 45 до 90 дней в зависимости от размеров объекта.</p>

<h2>Заключение</h2>
<p>Газовое отопление ангара ЛСТК — это инвестиция, которая окупается за 2–3 отопительных сезона. Закажите расчёт стоимости и проект отопления в компании МАКСТИЛ по телефону <strong>+7 (980) 321-15-42</strong> — подготовим коммерческое предложение за 1 рабочий день.</p>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Отопление ангара газом: расчёт мощности и стоимость",
  "description": "Расчёт мощности и стоимости газового отопления для ангара ЛСТК. Цены, сроки монтажа и преимущества интеграции системы в проект от компании МАКСТИЛ.",
  "author": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ",
    "telephone": "+7 (980) 321-15-42"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ"
  },
  "about": "Газовое отопление ангаров из ЛСТК",
  "keywords": "ЛСТК, ангар, отопление, газ, расчёт мощности, цена, проект, монтаж, сроки строительства"
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
