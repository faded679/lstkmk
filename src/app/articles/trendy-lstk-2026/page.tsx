import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы | МАКСТИЛ",
  description:
    "Тренды ЛСТК 2026: BIM-проектирование, роботизация, новые утеплители, модульное строительство. Что меняется в отрасли металлоконструкций.",
  keywords: [
    "тренды ЛСТК 2026",
    "технологии ЛСТК",
    "будущее металлоконструкций",
    "новые материалы ЛСТК",
    "инновации в строительстве",
  ],
  openGraph: {
    title: "Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы",
    description:
      "Обзор ключевых тенденций в ЛСТК-строительстве: технологии, материалы, рынок.",
    url: "https://lstkmk.ru/articles/trendy-lstk-2026/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/trendy-lstk-2026/",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/articles/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
              Технологии
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              ЛСТК-отрасль в России растёт на 12–15 % ежегодно. Дефицит рабочей силы, рост стоимости бетона и ужесточение экологических требований ускоряют переход на стальные каркасы. Разбираем ключевые тренды 2026 года: от BIM-проектирования до роботизированной сборки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              1. BIM-проектирование как стандарт
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Building Information Modeling перестаёт быть «модной опцией» и становится обязательным инструментом:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>С 2025 года BIM обязателен для объектов с госфинансированием (постановление Правительства №331)</li>
              <li>3D-модель каркаса генерирует чертежи, спецификации и управляющие программы для станков за минуты</li>
              <li>Коллизии между каркасом и инженерными сетями обнаруживаются до начала монтажа</li>
              <li>Заказчик видит здание в VR до начала строительства — снижается количество изменений</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              2. Автоматизация производства профилей
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Современные производственные линии ЛСТК:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Прямая связь BIM → станок:</strong> модель выгружается в управляющую программу без ручного ввода</li>
              <li><strong>Автоматическая маркировка:</strong> каждый профиль получает QR-код с позицией на сборочной схеме</li>
              <li><strong>Скорость:</strong> линия производит 500–1000 м профиля в час</li>
              <li><strong>Точность:</strong> допуски ±0,5 мм — ручная подгонка на площадке не нужна</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              3. Роботизированная сборка
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В 2025–2026 годах в России появляются первые линии роботизированной сборки стеновых и кровельных панелей ЛСТК. Робот устанавливает стойки в направляющие, закручивает саморезы и формирует готовые панели размером до 3×12 м. Производительность — 200–300 м² стен в смену при бригаде из 2 операторов (вместо 6–8 монтажников).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              4. Высокопрочные стали
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Переход на стали класса прочности 550–700 МПа:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>S550GD и S700MC позволяют уменьшить толщину профиля на 20–30 % при тех же нагрузках</li>
              <li>Снижение расхода металла: −15–25 % на тонну каркаса</li>
              <li>Экономия на логистике: легче = меньше рейсов</li>
              <li>Ограничение: высокопрочные стали хуже профилируются — нужны специальные станки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              5. PIR/PUR-панели вместо минваты
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Сэндвич-панели с PIR-утеплителем (полиизоцианурат) вытесняют минвату в коммерческом строительстве:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Теплопроводность 0,022 W/(m·K) vs 0,040 у минваты — в 1,8 раза теплее при той же толщине</li>
              <li>Панель 100 мм PIR = 180 мм минваты по теплозащите</li>
              <li>Меньший вес: PIR-панель на 30 % легче аналогичной из минваты</li>
              <li>Закрытые ячейки — не впитывает влагу, не теряет свойства</li>
              <li>Класс горючести Г1 (слабогорючий) — допускается в большинстве зданий</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              6. Модульное строительство
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Полная сборка модулей на заводе (включая отделку, электрику, сантехнику) и доставка на площадку в виде готовых блоков. Монтаж здания из модулей — 1–3 дня для объекта 200–500 м². Особенно востребовано для вахтовых посёлков, медпунктов и модульных гостиниц.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              7. Цифровые двойники зданий
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Digital twin — виртуальная копия здания, которая обновляется в реальном времени:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Данные с датчиков (температура, деформации, энергопотребление) отображаются на 3D-модели</li>
              <li>Предиктивное обслуживание: система предупреждает о необходимости ремонта до поломки</li>
              <li>Оптимизация энергопотребления на основе исторических данных</li>
              <li>Пока применяется на крупных объектах (ЦОД, логистические комплексы), но удешевляется</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              8. Импортозамещение оборудования
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              После 2022 года российские производители оборудования для ЛСТК активно заместили импорт:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Профилегибочные линии: «Липецкий станкостроительный», «МОБИПРОФ», «ПРОФИМЕТ»</li>
              <li>Программное обеспечение: отечественные CAD/CAM-системы интегрируются с BIM</li>
              <li>Крепёж: российские производители вышли на качество европейских аналогов</li>
              <li>Сэндвич-панели: мощности выросли на 40 % за 2023–2025, дефицит ликвидирован</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              9. Экологическая сертификация
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Растёт спрос на EPD (Environmental Product Declaration) для стальных конструкций</li>
              <li>Крупные заказчики требуют расчёт углеродного следа здания</li>
              <li>Российский «Зелёный стандарт» адаптируется под промышленные здания</li>
              <li>Переход на электродуговую переплавку (EAF) снижает CO₂ стали в 3–4 раза</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              10. Рост этажности ЛСТК
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Если ещё 5 лет назад ЛСТК ограничивался 2–3 этажами, то в 2026 году реализуются проекты 5–7 этажей с комбинированным каркасом (ЛСТК + стальные колонны). Это открывает рынок многоэтажных гостиниц, офисов и жилых домов — ранее недоступный для лёгких конструкций.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК в 2026 году — это уже не «альтернативная технология», а мейнстрим для промышленного и коммерческого строительства. BIM, роботизация и высокопрочные стали снижают стоимость и сроки, а модульный подход позволяет строить в любых условиях — от Арктики до мегаполисов.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Применяем современные технологии ЛСТК: BIM-проектирование, автоматизированное производство, PIR-панели. Строим быстро и с гарантией качества.
            </p>
            <p className="text-muted mb-6">
              Телефон: <a href="tel:+74722400854" className="text-accent-blue hover:underline">+7 (4722) 40-08-54</a> · Email: <a href="mailto:info@lstkmk.ru" className="text-accent-blue hover:underline">info@lstkmk.ru</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="/#contacts"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                Получить консультацию
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Читайте также
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/ekologichnost-lstk/" className="text-accent-blue hover:underline">
                  Экологичность ЛСТК — углеродный след и переработка металла
                </Link>
              </li>
              <li>
                <Link href="/articles/marki-stali-dlya-lstk/" className="text-accent-blue hover:underline">
                  Марки стали для ЛСТК — оцинковка, профили и выбор металла
                </Link>
              </li>
              <li>
                <Link href="/articles/umnyj-angar/" className="text-accent-blue hover:underline">
                  Умный ангар — автоматизация ворот, климата и освещения
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
