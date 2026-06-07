import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Большепролётные здания: проекты и технологии строительства | МАКСТИЛ",
  description: "Проекты большепролётных зданий без колонн: ангары, склады, цеха. Технологии ЛСТК и ферм, расчёт пролётов до 60 м, цены и сроки строительства 2025.",
  keywords: "большепролетные здания проекты, ангары без колонн, пролет 30 метров, ЛСТК фермы, большепролетные склады",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Большепролётные здания: проекты и технологии строительства",
  description: "Проекты большепролётных зданий без колонн: ангары, склады, цеха. Технологии ЛСТК и ферм, расчёт пролётов до 60 м.",
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
    "@id": "https://lstkmk.ru/articles/bolsheproletnye-zdaniya-proekty",
  },
};

export default function LargeSpanBuildingsArticle() {
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
            Большепролётные здания: проекты и технологии строительства
          </h1>
          
          <p className="text-muted text-lg mb-8">
            Как построить склад, ангар или производственный цех без внутренних колонн с пролётом до 60 метров.
            Обзор технологий, типовых проектов и расчёт стоимости.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Что такое большепролётное здание
          </h2>
          
          <p>
            <strong>Большепролётное здание</strong> — это сооружение с шириной пролёта (расстоянием между несущими конструкциями) 
            более 24 метров без промежуточных опор внутри помещения.
          </p>

          <p>Классификация по ширине пролёта:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>24–36 м:</strong> стандартные большепролётные склады</li>
            <li><strong>36–48 м:</strong> промышленные цеха, логистические центры</li>
            <li><strong>48–60 м:</strong> спортивные комплексы, авиационные ангары</li>
            <li><strong>60+ м:</strong> уникальные объекты с усиленными несущими системами</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Преимущества большепролётных зданий без колонн
          </h2>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold">01</span>
                <span><strong>Свободная планировка</strong> — 100% полезная площадь без ограничений колоннами</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold">02</span>
                <span><strong>Эффективная логистика</strong> — свободное движение техники и людей</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold">03</span>
                <span><strong>Модульное развитие</strong> — легко пристроить дополнительный пролёт</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold">04</span>
                <span><strong>Снижение затрат</strong> — меньше фундаментных работ под колонны</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Технологии строительства большепролётных зданий
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Ферменные конструкции (ЛСТК и горячий прокат)
          </h3>
          
          <p>
            Классическая технология для пролётов 30–60 м. Фермы — это плоские или объёмные решётчатые конструкции 
            из профилей, работающие на изгиб и растяжение.
          </p>

          <p><strong>Типы ферм:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Параллельные хорды:</strong> прямоугольное сечение, простое производство</li>
            <li><strong>Треугольные (фермы Уоррена):</strong> минимум материала, лёгкий вес</li>
            <li><strong>Арочные:</strong> естественный водоотвод, эстетика</li>
          </ul>

          <p><strong>Характеристики ферменных зданий:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Высота фермы: 1/10–1/15 пролёта (при 30 м — высота 2–3 м)</li>
            <li>Шаг ферм: 6–12 м</li>
            <li>Покрытие: профнастил или сэндвич-панели на обрешётке</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Балочные системы ЛСТК
          </h3>

          <p>
            Для пролётов до 24–30 м применяют балки из тонколистового стального профиля (ЛСТК). 
            Балки формируются на станках с нескольких листов, соединённых саморезами.
          </p>

          <p><strong>Плюсы балок ЛСТК:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Вес в 2–3 раза меньше балок горячего проката</li>
            <li>Точность ±1 мм благодаря заводскому производству</li>
            <li>Готовность под покрытие без дополнительной обрешётки</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Бескаркасные арочные сооружения
          </h3>

          <p>
            Для сельхозангара и неотапливаемых складов применяют бескаркасные арки из гнутого профиля. 
            Арки соединяются болтами, образуя самонесущую оболочку.
          </p>

          <p><strong>Параметры бескаркасных ангаров:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ширина: 12–25 м</li>
            <li>Длина: неограниченно (модуль 3–6 м)</li>
            <li>Высота: до 1/3 ширины пролёта</li>
            <li>Стоимость: от 2500 ₽/м² конструкций</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Типовые проекты большепролётных зданий
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Проект 1: Склад 30×60 м (пролёт 30 м)
          </h3>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Параметр</th>
                <th className="text-left py-2 px-3">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Технология</td>
                <td className="py-2 px-3">Фермы ЛСТК, шаг 6 м</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Высота в свету</td>
                <td className="py-2 px-3">8 м</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стены</td>
                <td className="py-2 px-3">Сэндвич-панели 150 мм, минвата</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Кровля</td>
                <td className="py-2 px-3">Сэндвич-панели 200 мм</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Ворота</td>
                <td className="py-2 px-3">2 промышленных секционных 4×5 м</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Сроки</td>
                <td className="py-2 px-3">45–60 дней</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стоимость под ключ</td>
                <td className="py-2 px-3">от 8 500 000 ₽</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Проект 2: Производственный цех 36×72 м (пролёт 36 м)
          </h3>

          <p>
            Усиленная ферменная система из горячекатаного проката для размещения мостового крана грузоподъёмностью 5 т.
            Треугольные фермы высотой 3,6 м с шагом 6 м.
          </p>

          <p><strong>Особенности проекта:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Крановая балка — встроена в несущие фермы</li>
            <li>Усиленный фундамент — монолитная плита 400 мм</li>
            <li>Система вентиляции — вытяжные каналы в фермах</li>
            <li>Освещение — линейные LED-светильники на фермах</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Проект 3: Ангар 24×48 м на фермах ЛСТК
          </h3>

          <p>
            Оптимальный бюджетный вариант для сельхозхранения и неотапливаемых складов. 
            Прямоугольные фермы ЛСТК с параллельными поясами, высота 2,4 м.
          </p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Параметр</th>
                <th className="text-left py-2 px-3">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Площадь</td>
                <td className="py-2 px-3">1152 м²</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Высота</td>
                <td className="py-2 px-3">6 м в коньке</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Покрытие</td>
                <td className="py-2 px-3">Профнастил НС-35 с утеплением 200 мм</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Срок строительства</td>
                <td className="py-2 px-3">30–40 дней</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Стоимость конструкций</td>
                <td className="py-2 px-3">от 3200 ₽/м²</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Расчёт несущей способности ферм
          </h2>

          <p>
            Основные нагрузки на несущие конструкции большепролётных зданий:
          </p>

          <ol className="list-decimal pl-6 mb-4">
            <li><strong>Постоянные:</strong> вес конструкций, оборудования, перекрытий</li>
            <li><strong>Временные:</strong> снеговая нагрузка (региональная), ветровая</li>
            <li><strong>Особые:</strong> крановые нагрузки, динамика от техники</li>
          </ol>

          <p>
            <strong>Снеговые нагрузки по регионам России:</strong>
          </p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Регион</th>
                <th className="text-left py-2 px-3">Нагрузка, кг/м²</th>
                <th className="text-left py-2 px-3">Пример городов</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">I район (юг)</td>
                <td className="py-2 px-3">50</td>
                <td className="py-2 px-3">Сочи, Краснодар</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">III район (центр)</td>
                <td className="py-2 px-3">125</td>
                <td className="py-2 px-3">Москва, Белгород</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">V район (север)</td>
                <td className="py-2 px-3">320</td>
                <td className="py-2 px-3">Мурманск, Воркута</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Этапы строительства большепролётного здания
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="font-semibold">Проектирование (10–15 дней)</h4>
                <p className="text-muted text-sm">Анализ грунтов, расчёт фундамента и ферм, разработка КМ и КМД</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="font-semibold">Фундамент (15–20 дней)</h4>
                <p className="text-muted text-sm">Монолитная плита или ленточный фундамент с анкерными болтами</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="font-semibold">Производство металлоконструкций (15–25 дней)</h4>
                <p className="text-muted text-sm">Изготовление ферм, колонн, связей на заводе</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h4 className="font-semibold">Монтаж каркаса (10–15 дней)</h4>
                <p className="text-muted text-sm">Установка колонн, сборка ферм, обвязка связями</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold shrink-0">5</div>
              <div>
                <h4 className="font-semibold">Устройство ограждений и кровли (10–15 дней)</h4>
                <p className="text-muted text-sm">Монтаж сэндвич-панелей или профнастила, герметизация</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Стоимость строительства: от чего зависит цена
          </h2>

          <p>Формула расчёта стоимости большепролётного здания:</p>

          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-mono text-sm">
              Стоимость = Фундамент + Каркас + Покрытие + Инженерия
            </p>
          </div>

          <p><strong>Средние цены 2025 года:</strong></p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Вид работ</th>
                <th className="text-left py-2 px-3">Цена за м²</th>
                <th className="text-left py-2 px-3">Доля в бюджете</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Фундамент (плита)</td>
                <td className="py-2 px-3">2500–4000 ₽</td>
                <td className="py-2 px-3">25–30%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Металлокаркас (ЛСТК)</td>
                <td className="py-2 px-3">3000–5000 ₽</td>
                <td className="py-2 px-3">30–35%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Сэндвич-панели стены</td>
                <td className="py-2 px-3">1500–2500 ₽</td>
                <td className="py-2 px-3">15–20%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Кровля и инженерия</td>
                <td className="py-2 px-3">2000–3500 ₽</td>
                <td className="py-2 px-3">20–25%</td>
              </tr>
              <tr className="border-b border-border bg-slate-50">
                <td className="py-2 px-3 font-semibold">Итого под ключ</td>
                <td className="py-2 px-3 font-semibold">9000–15000 ₽</td>
                <td className="py-2 px-3">100%</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Итог: как выбрать проект большепролётного здания
          </h2>

          <p>
            При планировании большепролётного здания опирайтесь на три критерия:
          </p>

          <ol className="list-decimal pl-6 mb-4">
            <li><strong>Назначение</strong> — для крановых цехов нужны горячие фермы, для складов хватит ЛСТК</li>
            <li><strong>Климат</strong> — снеговая и ветровая нагрузка определяет сечение ферм</li>
            <li><strong>Бюджет</strong> — при ограниченном бюджете рассмотрите бескаркасные арочные ангары до 25 м</li>
          </ol>

          <p>
            Для пролётов до 30 м оптимальны <strong>балки ЛСТК</strong> — минимальный вес и стоимость. 
            Для 36–60 м выбирайте <strong>ферменные системы</strong> из горячего проката с треугольным решётчатым поясом.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-foreground mb-2">Читайте также</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/lstk-vs-goryachekatanyj-prokat" className="text-accent-blue hover:underline">
                  ЛСТК vs горячекатаный прокат: сравнение технологий
                </Link>
              </li>
              <li>
                <Link href="/articles/montazh-metallokonstrukcij-oshibki" className="text-accent-blue hover:underline">
                  Монтаж металлоконструкций: типичные ошибки
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
