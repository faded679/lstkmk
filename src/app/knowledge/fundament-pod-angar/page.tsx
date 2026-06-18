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
        {/* Хлебные крошки */}
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          {/* Заголовок */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Фундамент под ангар
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Фундамент
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по фундамент под ангар. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Какой фундамент лучше под ангар: ленточный или свайный</h1>

<p>При строительстве ангара из ЛСТК выбор фундамента напрямую влияет на цену проекта, сроки монтажа и долговечность здания. Лёгкие стальные тонкостенные конструкции дают нагрузку на основание в 3-4 раза меньше, чем традиционные кирпич или железобетон, что открывает возможности для экономичных решений. Разберём, какой тип фундамента подходит именно вашему ангару.</p>

<h2>Ленточный фундамент: классика для тяжёлых грунтов</h2>
<p>Мелкозаглублённая лента (глубина 0,5-0,7 м) — оптимальный вариант для устойчивых непучинистых грунтов. Преимущества: высокая несущая способность до 20 тонн на погонный метр, простота монтажа ворот и примыканий, возможность устройства бетонного пола. Минусы — сроки возведения 3-4 недели с учётом набора прочности бетона и стоимость от 5500 ₽/м.п. Используется для ангаров шириной свыше 24 м с тяжёлым крановым оборудованием.</p>

<h2>Свайно-винтовой фундамент: быстро и экономично</h2>
<p>Для ангаров ЛСТК площадью до 1500 м² свайно-винтовое основание — лидер по соотношению цена/качество. Монтаж занимает всего 2-3 дня, нагрузка на одну сваю Ø108 мм достигает 5-7 тонн, а работы возможны круглый год даже при -15°C. Стоимость на 30-40% ниже ленточного варианта. Идеален для слабых, обводнённых и пучинистых грунтов, где промерзание превышает 1,5 м.</p>

<h2>Сравнение по ключевым параметрам</h2>
<p>При расчёте проекта ангара ЛСТК учитываем: ленточный фундамент окупается при пролётах от 24 м и наличии мостовых кранов; свайный — выигрывает по срокам (готовность за 72 часа) и работает на любых грунтах. Срок службы винтовых свай с антикоррозийным покрытием — 70+ лет, ленты — 50-100 лет в зависимости от марки бетона.</p>

<h2>Что выбирает МАКСТИЛ для своих объектов</h2>
<p>В 75% проектов мы рекомендуем свайно-винтовое основание: оно идеально согласуется с лёгкостью каркаса ЛСТК, сокращает общий цикл строительства ангара до 30-45 дней и снижает смету на 15-20%. Ленточный фундамент закладываем под складские комплексы с интенсивной нагрузкой на пол и производственные цеха.</p>

<h2>Закажите расчёт фундамента бесплатно</h2>
<p>Инженеры ЛСТК МАКСТИЛ подберут оптимальный тип основания по геологии вашего участка, рассчитают цену и составят проект ангара под ключ. Звоните: <strong>+7 (980) 321-15-42</strong> — консультация и предварительная смета за 1 рабочий день.</p>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Какой фундамент лучше под ангар: ленточный или свайный",
  "description": "Сравнение ленточного и свайно-винтового фундамента для ангаров ЛСТК: цена, сроки монтажа, несущая способность. Рекомендации экспертов МАКСТИЛ.",
  "author": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ",
    "telephone": "+7 (980) 321-15-42"
  },
  "about": "Выбор фундамента для строительства ангара из ЛСТК"
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
