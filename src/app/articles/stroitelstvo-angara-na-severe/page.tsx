import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Строительство ангара в северных районах — вечная мерзлота и морозы | МАКСТИЛ",
  description:
    "Строительство ангара на севере: фундаменты на вечной мерзлоте, морозостойкая сталь, утепление 250+ мм. Особенности проектирования для холодного климата.",
  keywords: [
    "ангар на севере",
    "строительство в условиях вечной мерзлоты",
    "ангар для холодного климата",
    "фундамент на мерзлоте",
    "строительство в Арктике",
  ],
  openGraph: {
    title: "Строительство ангара в северных районах — вечная мерзлота и морозы",
    description:
      "Особенности строительства ангаров в условиях Крайнего Севера и вечной мерзлоты.",
    url: "https://lstkmk.ru/articles/stroitelstvo-angara-na-severe/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/stroitelstvo-angara-na-severe/",
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
              Строительство
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Строительство ангара в северных районах — вечная мерзлота и морозы
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              ЯНАО, ХМАО, Якутия, Норильск — здесь температура опускается до −50 °C, грунт промерзает на десятки метров, а строительный сезон длится 3–4 месяца. ЛСТК позволяет возводить ангары в таких условиях быстрее и дешевле капитальных зданий — за счёт сухого монтажа и лёгкого каркаса.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Главные сложности северного строительства
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Вечная мерзлота:</strong> нельзя допустить растепления грунта под зданием — иначе просадки</li>
              <li><strong>Экстремальные морозы:</strong> сталь становится хрупкой при −40 °C, нужны хладостойкие марки</li>
              <li><strong>Высокие снеговые нагрузки:</strong> V–VIII снеговые районы (до 560 кг/м²)</li>
              <li><strong>Ветровая нагрузка:</strong> открытая тундра — III–V ветровые районы</li>
              <li><strong>Логистика:</strong> доставка на тысячи километров, часто по зимникам</li>
              <li><strong>Короткий сезон:</strong> строить можно с мая по сентябрь (на мерзлоте — только зимой)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Фундаменты на вечной мерзлоте
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Существуют два принципа устройства фундаментов в зоне мерзлоты (СП 25.13330):
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Принцип I — сохранение мерзлоты
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Здание ставится на сваях с проветриваемым подпольем. Тепло от пола не передаётся в грунт. Применяется для всех отапливаемых ангаров.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Буронабивные сваи глубиной 8–15 м (до устойчивого мёрзлого слоя)</li>
              <li>Зазор между грунтом и полом здания: 0,5–1,5 м (вентилируемое пространство)</li>
              <li>Термостабилизаторы грунта — парожидкостные охлаждающие устройства (ПОУ)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Принцип II — допущение оттаивания
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Для холодных ангаров (без отопления) допускается устройство на поверхностных фундаментах. Грунт под зданием промерзает, и здание стоит на мёрзлом основании. Ограничение — нельзя потом подключать отопление без переустройства фундамента.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Выбор стали для Крайнего Севера
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При температуре ниже −40 °C обычная сталь Ст3 становится хрупкой. Для северных конструкций применяют:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Марка</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Температура эксплуатации</th>
                    <th className="text-left py-3 font-semibold text-foreground">Применение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">09Г2С-12</td>
                    <td className="py-3 pr-4">до −40 °C</td>
                    <td className="py-3">Каркас, фермы</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">09Г2С-14</td>
                    <td className="py-3 pr-4">до −50 °C</td>
                    <td className="py-3">Каркас, ответственные узлы</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">10ХСНД</td>
                    <td className="py-3 pr-4">до −60 °C</td>
                    <td className="py-3">Особо ответственные конструкции</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Оцинковка 350 ХЛ</td>
                    <td className="py-3 pr-4">до −55 °C</td>
                    <td className="py-3">ЛСТК-профили (холоднолом. вариант)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Крепёж и болты — класс прочности 8.8 с хладостойким покрытием. Обычные саморезы при −50 °C лопаются.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Утепление: расчёт для северных условий
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Для отапливаемого ангара в Якутске (ГСОП = 10 000 °C·сут) требуемые значения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Стены: R = 5,0–5,5 м²·°C/Вт → минвата 200–250 мм</li>
              <li>Кровля: R = 6,0–6,5 м²·°C/Вт → минвата 250–300 мм</li>
              <li>Пол: R = 4,0–4,5 м²·°C/Вт → пенополистирол 150–200 мм</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Сэндвич-панели толщиной 200–250 мм с PIR-утеплителем (λ = 0,022) дают R = 9–11 м²·°C/Вт — с запасом для любого региона. Стоимость выше минваты на 30–40 %, но монтаж быстрее и нет мостиков холода.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Логистика и сборка
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Доставка на Крайний Север — отдельная задача:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Автотранспорт по зимникам:</strong> декабрь–март, ограничение по массе 20–25 т</li>
              <li><strong>Водный транспорт:</strong> навигация июнь–сентябрь, доставка по рекам</li>
              <li><strong>Ж/д до ближайшей станции + перевалка:</strong> Лабытнанги, Нижневартовск, Якутск</li>
              <li><strong>Авиация:</strong> для срочных грузов (крепёж, пены, герметики)</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК оптимален для северной логистики: лёгкий (40–60 кг/м²), компактный (профили укладываются в пачки), не требует тяжёлых кранов — достаточно автокрана 16–25 т.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Особенности монтажа при морозах
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Болтовые соединения вместо сварки — сварка при −30 °C требует подогрева металла</li>
              <li>Монтаж панелей — герметик должен быть морозостойким (силиконовый, не акриловый)</li>
              <li>Укороченная смена — при −40 °C разрешённое рабочее время 4–5 часов с перерывами на обогрев</li>
              <li>Предварительная сборка укрупнённых блоков в тёплом цехе (если есть)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость строительства на севере
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Удорожание относительно ЦФО:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Логистика: +30–80 % к стоимости материалов</li>
              <li>Фундаменты (сваи): +50–100 % к типовым решениям</li>
              <li>Хладостойкая сталь: +10–15 %</li>
              <li>Усиленное утепление: +15–25 %</li>
              <li>Итого: стоимость ангара на севере — в 1,5–2,5 раза выше, чем в Белгороде</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Строительство ангара на севере — это проектирование под конкретную площадку: геология, климат, логистика. ЛСТК сокращает сроки монтажа в 2–3 раза по сравнению с железобетоном и не требует мокрых процессов, что критично при отрицательных температурах. Ключевые решения — свайный фундамент с проветриваемым подпольем, хладостойкая сталь и утепление 200+ мм.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем и строим объекты для северных регионов. Опыт работы в ЯНАО, ХМАО, Якутии. Полный цикл: от изысканий до сдачи.
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
                <Link href="/articles/vahtovye-poselki-iz-lstk/" className="text-accent-blue hover:underline">
                  Вахтовые посёлки из ЛСТК — быстрое строительство жилья для рабочих
                </Link>
              </li>
              <li>
                <Link href="/articles/marki-stali-dlya-lstk/" className="text-accent-blue hover:underline">
                  Марки стали для ЛСТК — оцинковка, профили и выбор металла
                </Link>
              </li>
              <li>
                <Link href="/articles/energoeffektivnyj-angar/" className="text-accent-blue hover:underline">
                  Энергоэффективные ангары — как снизить затраты на отопление
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
