import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стоимость ангара за 1 м² в 2024 | Справочник ЛСТК",
  description: "Профессиональное руководство по стоимость ангара за 1 м² в 2024. Цены, сроки, технологии ЛСТК.",
  keywords: ["stoimost m2"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Стоимость ангара за 1 м² в 2024",
    "description": "Руководство по стоимость ангара за 1 м² в 2024",
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
            Стоимость ангара за 1 м² в 2024
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Цены
          </div>

          {/* Вступление */}
          <p className="text-muted mb-8 leading-relaxed">
            Профессиональное руководство по стоимость ангара за 1 м² в 2024. 
            Актуальная информация на 2024 год с учётом последних изменений в законодательстве и практики строительства.
          </p>

          {/* Содержание статьи */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Основные аспекты</h2>
              <div className="prose prose-slate max-w-none">
                <h1>Сколько стоит построить ангар за 1 м² в 2024 году</h1>

<p>Строительство ангара из ЛСТК — это оптимальное решение для бизнеса, который ценит сроки и бюджет. В 2024 году цена за квадратный метр такого объекта остаётся одной из самых конкурентных на рынке быстровозводимых конструкций. Компания МАКСТИЛ предлагает полный цикл: от проекта до монтажа под ключ. Разберём, из чего складывается итоговая стоимость.</p>

<h2>Средняя цена ангара ЛСТК в 2024 году</h2>
<p>Базовая стоимость строительства ангара из ЛСТК стартует от <strong>8 500 руб./м²</strong> за каркас и от <strong>14 000 руб./м²</strong> «под ключ» с фундаментом, кровлей и воротами. Для сравнения: классический металлокаркас обойдётся в 18 000–25 000 руб./м². Экономия достигает 30–40% за счёт меньшего веса конструкции и упрощённого фундамента.</p>

<h2>Что влияет на расчёт стоимости</h2>
<p>Финальная цена зависит от нескольких факторов:</p>
<ul>
<li><strong>Площадь и пролёт</strong> — ангары ЛСТК эффективны при пролётах до 24 м;</li>
<li><strong>Снеговая и ветровая нагрузка</strong> региона;</li>
<li><strong>Тип утепления</strong> — холодный ангар дешевле тёплого на 20–25%;</li>
<li><strong>Сложность проекта</strong> — кран-балка, антресоли, доковые ворота.</li>
</ul>

<h2>Сроки строительства и монтаж</h2>
<p>Один из главных плюсов технологии ЛСТК — скорость. Монтаж каркаса ангара площадью 500 м² занимает <strong>от 14 рабочих дней</strong>, а полный цикл строительства с отделкой — 1,5–2 месяца. Все элементы изготавливаются на заводе с точностью до 1 мм, что исключает подгонку на стройплощадке.</p>

<h2>Преимущества ангаров ЛСТК от МАКСТИЛ</h2>
<p>Срок службы оцинкованного профиля — <strong>более 50 лет</strong> без коррозии. Конструкция в 3 раза легче традиционной, что снижает затраты на фундамент. Мы выполняем индивидуальный расчёт под задачи заказчика — будь то склад, СТО, производство или сельхозкомплекс.</p>

<h2>Закажите расчёт ангара уже сегодня</h2>
<p>Хотите узнать точную цену для вашего проекта? Инженеры МАКСТИЛ подготовят коммерческое предложение за 1 рабочий день. Звоните: <strong>+7 (980) 321-15-42</strong> — поможем выбрать оптимальное решение и сэкономить до 40% бюджета.</p>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Сколько стоит построить ангар за 1 м² в 2024 году",
  "description": "Актуальные цены на строительство ангаров из ЛСТК в 2024 году. Расчёт стоимости за 1 м², сроки монтажа и факторы ценообразования от компании МАКСТИЛ.",
  "author": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ЛСТК МАКСТИЛ",
    "telephone": "+7 (980) 321-15-42"
  },
  "datePublished": "2024-01-15",
  "about": "Строительство ангаров из ЛСТК"
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
