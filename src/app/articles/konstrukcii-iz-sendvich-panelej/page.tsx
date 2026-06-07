import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Конструкции из сэндвич-панелей: виды, применение и монтаж | МАКСТИЛ",
  description: "Разбираем конструкции из сэндвич-панелей: стены, кровля, перегородки. Технология монтажа, типы замков, толщины и сферы применения. Полное руководство 2025.",
  keywords: "конструкции из сэндвич панелей, сэндвич панели монтаж, стены из сэндвич панелей, кровля из сэндвич панелей, типы сэндвич панелей",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Конструкции из сэндвич-панелей: виды, применение и монтаж",
  description: "Разбираем конструкции из сэндвич-панелей: стены, кровля, перегородки. Технология монтажа, типы замков, толщины и сферы применения.",
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
    "@id": "https://lstkmk.ru/articles/konstrukcii-iz-sendvich-panelej",
  },
};

export default function SandwichPanelsArticle() {
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
            Конструкции из сэндвич-панелей: виды, применение и монтаж
          </h1>
          
          <p className="text-muted text-lg mb-8">
            Полное руководство по выбору и монтажу сэндвич-панелей для строительства быстровозводимых зданий.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Что такое сэндвич-панели и из чего состоят
          </h2>
          
          <p>
            <strong>Сэндвич-панель</strong> — это строительный материал «сэндвич»-структуры: два листа металла с утеплителем между ними. 
            Такая конструкция обеспечивает высокую теплоизоляцию при минимальном весе и быстром монтаже.
          </p>

          <p>Стандартная структура панели:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Внешние облицовки:</strong> оцинкованная сталь с полимерным покрытием (полиэстер, Пурал, ПВДФ)</li>
            <li><strong>Утеплитель:</strong> минеральная вата, пенополистирол (ППС) или полиуретан (ППУ/PIR)</li>
            <li><strong>Толщина:</strong> от 50 до 250 мм в зависимости от назначения</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Виды конструкций из сэндвич-панелей
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Стеновые сэндвич-панели
          </h3>
          
          <p>
            <strong>Назначение:</strong> возведение наружных и внутренних стен зданий. 
            Стеновые панели имеют рельеф профиля «микроволна» или «трапеция» для жёсткости и эстетики.
          </p>

          <p><strong>Характеристики:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Толщина: 80–200 мм</li>
            <li>Ширина: 1000–1200 мм</li>
            <li>Длина: до 12 м (по заказу — до 18 м)</li>
            <li>Теплопроводность: 0,034–0,042 Вт/(м·К)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Кровельные сэндвич-панели
          </h3>
          
          <p>
            <strong>Назначение:</strong> устройство плоских и скатных кровель без дополнительной обрешётки. 
            Кровельные панели имеют специальный гребень для отвода воды и повышенную несущую способность.
          </p>

          <p><strong>Особенности:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Усиленный замок для герметичности</li>
            <li>Нагрузка до 300 кг/м² при пролёте 3 м</li>
            <li>Готовое покрытие — не требует дополнительной гидроизоляции</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Перегородочные и холодильные панели
          </h3>
          
          <p>
            <strong>Перегородочные</strong> — для зонирования пространства внутри зданий. 
            Толщина 50–100 мм, двусторонняя эстетичная поверхность.
          </p>
          
          <p>
            <strong>Холодильные</strong> — для камер хранения и морозильных складов. 
            Повышенная толщина (150–250 мм), замки с терморазрывом, герметичность до -40°C.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Типы замков и соединений
          </h2>

          <p>
            От типа замка зависит теплоизоляция и скорость монтажа:
          </p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Тип замка</th>
                <th className="text-left py-2 px-3">Особенности</th>
                <th className="text-left py-2 px-3">Применение</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3"><strong>Шип-паз</strong></td>
                <td className="py-2 px-3">Простой, быстрый монтаж</td>
                <td className="py-2 px-3">Склады, ангары</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3"><strong>Замок Z-LOCK</strong></td>
                <td className="py-2 px-3">Скрытый крепёж, эстетика</td>
                <td className="py-2 px-3">Торговые центры, офисы</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3"><strong>Терморазрыв</strong></td>
                <td className="py-2 px-3">Минимальные мостики холода</td>
                <td className="py-2 px-3">Холодильные камеры</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Технология монтажа сэндвич-панелей
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Подготовка основания
          </h3>
          
          <p>
            Конструкции из сэндвич-панелей монтируются на готовое основание: 
            фундаментную балку, ростверк или металлокаркас. 
            Важно обеспечить горизонтальность ±2 мм на 10 м — иначе замки не сойдутся.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Последовательность монтажа стен
          </h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>Установка стартового профиля по периметру</li>
            <li>Монтаж первого ряда панелей с выверкой уровня</li>
            <li>Соединение панелей через замок (лёгкий удар резиновой киянкой)</li>
            <li>Крепление к несущему каркасу саморезами 5,5×60 мм через каждые 500 мм</li>
            <li>Герметизация стыков полиуретановым герметиком</li>
            <li>Монтаж доборных элементов (планки, откосы, парапеты)</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Монтаж кровли из сэндвич-панелей
          </h3>

          <p>
            Кровельные панели укладываются на несущие фермы или балки с шагом 3–6 м. 
            Уклон минимум 5° для естественного отвода воды. 
            Кровельный замок требует уплотнения в местах стыков — используют специальные уплотнительные ленты.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Сферы применения конструкций из сэндвич-панелей
          </h2>

          <ul className="list-disc pl-6 mb-4">
            <li><strong>Складские комплексы</strong> — быстровозводимые холодные и тёплые склады</li>
            <li><strong>Производственные цеха</strong> — здания с требованиями к микроклимату</li>
            <li><strong>Торговые и выставочные павильоны</strong> — эстетичный внешний вид без отделки</li>
            <li><strong>Сельхозобъекты</strong> — ангары, овощехранилища, фермы</li>
            <li><strong>Спортивные сооружения</strong> — ледовые арены (PIR-панели), теннисные корты</li>
            <li><strong>Автосервисы и СТО</strong> — огнестойкие панели с минватой</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Расчёт толщины панелей по регионам
          </h2>

          <p>
            Толщина утеплителя подбирается по климатической зоне и назначению здания:
          </p>

          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3">Регион/назначение</th>
                <th className="text-left py-2 px-3">Стены</th>
                <th className="text-left py-2 px-3">Кровля</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Центральная Россия (Москва)</td>
                <td className="py-2 px-3">100–150 мм</td>
                <td className="py-2 px-3">150–200 мм</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Юг (Краснодар, Ростов)</td>
                <td className="py-2 px-3">80–100 мм</td>
                <td className="py-2 px-3">100–150 мм</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Сибирь, Урал</td>
                <td className="py-2 px-3">150–200 мм</td>
                <td className="py-2 px-3">200–250 мм</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Холодильные камеры (до -25°C)</td>
                <td className="py-2 px-3">150–200 мм</td>
                <td className="py-2 px-3">200–250 мм</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Плюсы и минусы конструкций из сэндвич-панелей
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Преимущества</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Скорость строительства — в 3-5 раз быстрее кирпича</li>
                <li>Минимум «мокрых» процессов</li>
                <li>Готовая отделка — не требует штукатурки/облицовки</li>
                <li>Лёгкость конструкции — снижение нагрузки на фундамент</li>
                <li>Энергоэффективность — экономия до 40% на отоплении</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Ограничения</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Ограниченная архитектурная выразительность</li>
                <li>Необходимость точного расчёта толщины</li>
                <li>Чувствительность к монтажным ошибкам</li>
                <li>Сложность перепланировки после сборки</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Итог: как выбрать конструкцию из сэндвич-панелей
          </h2>

          <p>
            При выборе конструкций из сэндвич-панелей учитывайте три параметра: 
            <strong>назначение здания</strong> (склад/офис/производство), 
            <strong>климатическую зону</strong> (толщина утеплителя) и 
            <strong>требования к пожарной безопасности</strong> (минвата vs ППС).
          </p>

          <p>
            Для складов и ангаров оптимальны стеновые панели 100–150 мм с минеральной ватой. 
            Для торговых центров — панели с замком Z-LOCK и эстетичным профилем. 
            Для холодильных камер — только PIR-панели с терморазрывом толщиной от 150 мм.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-foreground mb-2">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/metallokonstrukcii-belgorod" className="text-accent-blue hover:underline">
                  Металлоконструкции в Белгороде — цены и сроки
                </Link>
              </li>
              <li>
                <Link href="/articles/montazh-metallokonstrukcij-oshibki" className="text-accent-blue hover:underline">
                  Монтаж металлоконструкций: типичные ошибки
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
