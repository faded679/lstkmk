import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Технология ЛСТК в строительстве: преимущества и применение | МАКСТИЛ",
  description: "Технология ЛСТК (лёгкие стальные тонкостенные конструкции): принципы, профили, преимущества перед традиционным строительством. Области применения ЛСТК в 2025 году.",
  keywords: "технология ЛСТК, ЛСТК строительство, легкие стальные конструкции, профили ЛСТК, дома из ЛСТК",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Технология ЛСТК в строительстве: преимущества и применение",
  description: "Технология ЛСТК (лёгкие стальные тонкостенные конструкции): принципы, профили, преимущества перед традиционным строительством.",
  author: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  publisher: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  datePublished: "2025-06-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://lstkmk.ru/articles/tehnologija-lstk",
  },
};

export default function LSTKTechnologyArticle() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        <nav className="mb-8">
          <Link 
            href="/articles" 
            className="text-accent-blue hover:underline text-sm"
          >
            ← Все статьи
          </Link>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Технология ЛСТК в строительстве: преимущества и применение
          </h1>
          
          <p className="text-muted text-lg mb-8">
            Разбираем технологию лёгких стальных тонкостенных конструкций: от принципов работы 
            до реальных преимуществ перед кирпичом и железобетоном.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Что такое ЛСТК: принцип технологии
          </h2>
          
          <p>
            <strong>ЛСТК</strong> (Лёгкие Стальные Тонкостенные Конструкции) — это строительная технология, 
            при которой несущий каркас здания изготавливается из оцинкованного стального профиля толщиной 1–3 мм.
          </p>

          <p>
            В отличие от тяжёлого железобетона или кладки, ЛСТК работает как «пространственная ферма» — 
            тонкостенные профили соединяются саморезами в жёсткие конструктивные элементы: 
            стойки, балки, связи, рамы.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-foreground mb-3">Из чего состоит каркас ЛСТК</h3>
            <ul className="list-disc pl-6">
              <li><strong>С-образные профили (стойки):</strong> несущие вертикальные элементы стен</li>
              <li><strong>U-образные профили (обвязка):</strong> верхняя и нижняя обвязка стен</li>
              <li><strong>Полки и усилители:</strong> местное усиление под концентрированные нагрузки</li>
              <li><strong>Ферменные балки:</strong> для перекрытий и кровли</li>
              <li><strong>Соединители:</strong> саморезы и болты для сборки элементов</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Технология производства профилей ЛСТК
          </h2>

          <p>
            Производство ЛСТК-профилей — это автоматизированный процесс проката оцинкованной стали:
          </p>

          <ol className="list-decimal pl-6 mb-4">
            <li><strong>Исходный материал:</strong> рулон оцинкованной стали 1–3 мм (оцинковка 180–275 г/м²)</li>
            <li><strong>Профилирование:</strong> холодная прокатка на станках с ЧПУ — получение С и U профилей</li>
            <li><strong>Дыропробивка:</strong> автоматическая перфорация под коммуникации и соединения</li>
            <li><strong>Раскрой:</strong> резка профилей по заданным длинам (точность ±1 мм)</li>
            <li><strong>Маркировка:</strong> нанесение номеров для сборки по проекту</li>
          </ol>

          <p>
            <strong>Толщины стали для разных элементов:</strong>
          </p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Элемент каркаса</th>
                <th className="text-left py-2 px-3">Толщина стали</th>
                <th className="text-left py-2 px-3">Назначение</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стойки стен 1 этажа</td>
                <td className="py-2 px-3">1,0–1,5 мм</td>
                <td className="py-2 px-3">Жилые дома, офисы</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стойки промышленных зданий</td>
                <td className="py-2 px-3">1,5–2,0 мм</td>
                <td className="py-2 px-3">Склады, цеха, ангары</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Балки перекрытий</td>
                <td className="py-2 px-3">1,2–2,0 мм</td>
                <td className="py-2 px-3">Пролёты до 6 м</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Фермы кровли</td>
                <td className="py-2 px-3">1,5–2,5 мм</td>
                <td className="py-2 px-3">Пролёты 12–30 м</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Преимущества технологии ЛСТК
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Скорость строительства</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Каркас дома 150 м² — 3–5 дней бригадой из 4 человек</li>
                <li>Нет «мокрых» процессов (бетонирование, кладка)</li>
                <li>Монтаж в любое время года при -15°C</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Лёгкость конструкций</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Вес каркаса в 5–10 раз меньше железобетона</li>
                <li>Экономия на фундаменте до 30%</li>
                <li>Возможность строить на слабых грунтах</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Точность и качество</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Заводская точность ±1 мм</li>
                <li>Нет усадки (как у деревянных домов)</li>
                <li>Геометрия не меняется со временем</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Экологичность</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Минимум строительного мусора на участке</li>
                <li>Сталь перерабатывается на 100%</li>
                <li>Нет вредных выделений (как у пенопласта)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Сравнение ЛСТК с традиционными технологиями
          </h2>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Параметр</th>
                <th className="text-left py-2 px-3">ЛСТК</th>
                <th className="text-left py-2 px-3">Кирпич</th>
                <th className="text-left py-2 px-3">Дерево (брус)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Срок строительства (100 м²)</td>
                <td className="py-2 px-3">1–2 месяца</td>
                <td className="py-2 px-3">4–6 месяцев</td>
                <td className="py-2 px-3">2–3 месяца</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Вес конструкций</td>
                <td className="py-2 px-3">30–50 кг/м²</td>
                <td className="py-2 px-3">400–600 кг/м²</td>
                <td className="py-2 px-3">70–100 кг/м²</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Усадка</td>
                <td className="py-2 px-3">Нет</td>
                <td className="py-2 px-3">Нет</td>
                <td className="py-2 px-3">3–7% за 2 года</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Пожаростойкость</td>
                <td className="py-2 px-3">REI 30–60*</td>
                <td className="py-2 px-3">REI 120–240</td>
                <td className="py-2 px-3">R 15–30</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стоимость каркаса за м²</td>
                <td className="py-2 px-3">3000–5000 ₽</td>
                <td className="py-2 px-3">—</td>
                <td className="py-2 px-3">4000–7000 ₽</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-muted mt-2">
            * При использовании огнезащитных плит и гипсокартона классификация повышается до REI 120–180
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Области применения технологии ЛСТК
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Малоэтажное жилищное строительство
          </h3>
          
          <p>
            Дома 1–3 этажа с несущим каркасом ЛСТК и наружной обшивкой. 
            Популярны проекты с комбинацией: ЛСТК каркас + сэндвич-панели или вентилируемый фасад.
          </p>

          <p><strong>Ограничения для жилья:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Необходимость звукоизоляции (дополнительный слой минваты 100 мм)</li>
            <li>Теплоизоляция — ЛСТК сам по себе «холодный», требует утепления 150–200 мм</li>
            <li>Для многоэтажки (4+ этажа) требуется усиленный каркас и расчёт устойчивости</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Быстровозводимые здания коммерческого назначения
          </h3>

          <p>
            Основная и наиболее эффективная ниша ЛСТК: склады, производства, торговые центры, ангары.
            Здесь технология раскрывается полностью:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Пролёты до 30 м без промежуточных колонн (фермы ЛСТК)</li>
            <li>Высота под ферму до 12 м</li>
            <li>Площади от 100 до 10 000 м²</li>
            <li>Сроки строительства — от 30 дней</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Сельскохозяйственные объекты
          </h3>

          <p>
            Коровники, свинарники, овощехранилища — агрессивная среда требует оцинкованной стали. 
            ЛСТК с толщиной оцинковки 275 г/м² служит 50+ лет в таких условиях.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            4. Пристройки и реконструкция
          </h3>

          <p>
            Лёгкий вес ЛСТК позволяет пристраивать к существующим зданиям без усиления фундаментов. 
            Часто используют для:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Террас и веранд к дому</li>
            <li>Надстроек второго этажа</li>
            <li>Зимних садов</li>
            <li>Гаражей и бытовок</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Критерии выбора профилей ЛСТК
          </h2>

          <p>При заказе металлоконструкций ЛСТК обращайте внимание на:</p>

          <div className="space-y-4 mt-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="font-semibold">Толщина оцинковки</h4>
                <p className="text-muted text-sm">Для сухих помещений — 180 г/м², для влажных и сельхоз — минимум 275 г/м²</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="font-semibold">Марка стали</h4>
                <p className="text-muted text-sm">Для несущих элементов — S350GD или S550GD (высокая прочность)</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="font-semibold">Проект и КМД</h4>
                <p className="text-muted text-sm">Обязательно наличие проекта с расчётом устойчивости и чертежей КМД</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h4 className="font-semibold">Заводское производство</h4>
                <p className="text-muted text-sm">Профили должны изготавливаться на станках (не ручной гибкой)</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Этапы строительства здания из ЛСТК
          </h2>

          <p><strong>1. Проектирование (7–14 дней)</strong></p>
          <p className="text-muted mb-4">
            Разработка архитектурного решения, расчёт несущего каркаса, чертежи КМД для каждого профиля.
          </p>

          <p><strong>2. Производство конструкций (10–20 дней)</strong></p>
          <p className="text-muted mb-4">
            Раскрой рулонов, профилирование, дыропробивка, маркировка. На выходе — комплект элементов с номерами.
          </p>

          <p><strong>3. Фундамент (10–15 дней)</strong></p>
          <p className="text-muted mb-4">
            Ленточный или плитный фундамент с анкерными закладными под стойки. В 2–3 раза легче, чем под кирпич.
          </p>

          <p><strong>4. Сборка каркаса (5–15 дней)</strong></p>
          <p className="text-muted mb-4">
            Монтаж стен, балок, ферм. Соединение саморезами и болтами. Проверка геометрии.
          </p>

          <p><strong>5. Устройство ограждений (10–20 дней)</strong></p>
          <p className="text-muted mb-4">
            Сэндвич-панели, утепление, пароизоляция, обшивка. Установка окон и ворот.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Итог: когда выбирать ЛСТК
          </h2>

          <p>
            Технология ЛСТК — оптимальный выбор для быстровозводимых зданий площадью от 50 м² 
            с требованиями к скорости и экономии фундамента.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">✓ Идеально подходит</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Склады и ангары до 30 м пролётом</li>
                <li>Сельхозобъекты</li>
                <li>Торговые павильоны</li>
                <li>Модульные здания</li>
                <li>Пристройки и реконструкция</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">✗ Не рекомендуется</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Многоэтажка (4+ этажа без усиления)</li>
                <li>Здания с высокими акустическими требованиями (кинотеатры)</li>
                <li>Объекты с агрессивной средой без оцинковки 275+ г/м²</li>
              </ul>
            </div>
          </div>

          <p>
            При правильном проектировании и качественном монтаже здания из ЛСТК служат 50+ лет 
            без капитального ремонта, сохраняя геометрию и теплотехнические характеристики.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-foreground mb-2">Полезные материалы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/bolsheproletnye-zdaniya-proekty" className="text-accent-blue hover:underline">
                  Большепролётные здания: проекты и технологии
                </Link>
              </li>
              <li>
                <Link href="/articles/lstk-vs-goryachekatanyj-prokat" className="text-accent-blue hover:underline">
                  ЛСТК vs горячекатаный прокат: подробное сравнение
                </Link>
              </li>
              <li>
                <Link href="/articles/konstrukcii-iz-sendvich-panelej" className="text-accent-blue hover:underline">
                  Конструкции из сэндвич-панелей: виды и монтаж
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
