import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Общежития и хостелы из ЛСТК — строительство под ключ | МАКСТИЛ",
  description:
    "Общежития из ЛСТК: проектирование, планировки, инженерные системы. Строительство хостелов и общежитий из металлоконструкций под ключ за 2–4 месяца.",
  keywords: [
    "общежитие из ЛСТК",
    "хостел из металлоконструкций",
    "строительство общежитий под ключ",
    "быстровозводимое общежитие",
    "модульное общежитие",
  ],
  openGraph: {
    title: "Общежития и хостелы из ЛСТК — строительство под ключ",
    description:
      "Быстрое строительство общежитий из ЛСТК: планировки, нормы, стоимость.",
    url: "https://lstkmk.ru/articles/obshezhitiya-iz-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/obshezhitiya-iz-lstk/",
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
              Общежития и хостелы из ЛСТК — строительство под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Дефицит недорогого жилья для рабочих, студентов и путешественников стимулирует рынок быстровозводимых общежитий. ЛСТК позволяет построить здание на 50–200 мест за 2–4 месяца, уложившись в бюджет 30–50 тыс. ₽/м² под ключ.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Где востребованы общежития из ЛСТК
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Предприятия</strong> — размещение иногородних сотрудников рядом с производством</li>
              <li><strong>Стройплощадки</strong> — временное жильё на период строительства крупных объектов</li>
              <li><strong>Учебные заведения</strong> — кампусные общежития при колледжах и вузах</li>
              <li><strong>Гостиничный бизнес</strong> — хостелы эконом-класса в туристических зонах</li>
              <li><strong>Социальное жильё</strong> — маневренный фонд муниципалитетов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Планировочные решения
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Коридорный тип
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Классическая схема: центральный коридор шириной 1,8–2,4 м, комнаты по обеим сторонам. Санузлы — блочные, на этаж. Экономично по площади, подходит для рабочих общежитий.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Блочный тип
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Две комнаты объединяются общим тамбуром и санузлом — «блок». Комфортнее коридорного, подходит для студенческих общежитий и хостелов.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Квартирный тип
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Каждая секция — мини-квартира с кухней и санузлом. Максимальный комфорт, но и максимальная стоимость. Используется для семейных общежитий.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструктив здания
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Общежития из ЛСТК проектируются до 3 этажей без перехода на тяжёлый металлокаркас. Конструктивная схема:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Несущие стены из С-профиля 150–200 мм, шаг стоек 600 мм</li>
              <li>Перекрытия — ЛСТК-балки с настилом из ЦСП или профнастила + бетонная стяжка</li>
              <li>Кровля — плоская или двускатная, утеплённая 200–300 мм минваты</li>
              <li>Наружная отделка — фасадные панели, штукатурка по утеплителю или сайдинг</li>
              <li>Межкомнатные перегородки — ЛСТК-профиль 75–100 мм с двойным ГКЛ для звукоизоляции</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Звукоизоляция — ключевой параметр
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В общежитиях нормируемый индекс изоляции воздушного шума Rw между комнатами — не менее 50 дБ (СП 51.13330). Для ЛСТК это достигается:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Двойной каркас перегородки с воздушным зазором 20 мм</li>
              <li>Заполнение минватой плотностью 40–60 кг/м³</li>
              <li>Два слоя ГКЛ (или ГВЛ) с каждой стороны — суммарно 4 листа</li>
              <li>Упругие прокладки под направляющие профили</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Перекрытия дополнительно звукоизолируются «плавающей» стяжкой на упругом слое — это гасит ударный шум (индекс Lnw ≤ 60 дБ).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пожарная безопасность
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Общежития относятся к классу Ф1.2 по функциональной пожарной опасности. Требования:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Предел огнестойкости несущих конструкций — R45 (для зданий до 3 этажей, III степень)</li>
              <li>Обшивка из ГКЛ/ГВЛ обеспечивает класс К0 (непожароопасные конструкции)</li>
              <li>Автоматическая пожарная сигнализация во всех помещениях</li>
              <li>Системы оповещения и управления эвакуацией (СОУЭ 2-го типа)</li>
              <li>Два эвакуационных выхода на этаж при длине коридора более 12 м</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инженерные системы
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Для общежитий характерен повышенный расход воды и электроэнергии на 1 м²:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Система</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Норма на 1 чел.</th>
                    <th className="text-left py-3 font-semibold text-foreground">Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодная вода</td>
                    <td className="py-3 pr-4">90 л/сут</td>
                    <td className="py-3">С учётом душевых</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Горячая вода</td>
                    <td className="py-3 pr-4">60 л/сут</td>
                    <td className="py-3">Бойлер или ЦТП</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Электроэнергия</td>
                    <td className="py-3 pr-4">1,5–2 кВт</td>
                    <td className="py-3">Пиковая мощность</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Вентиляция</td>
                    <td className="py-3 pr-4">30 м³/ч</td>
                    <td className="py-3">Приток на 1 проживающего</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость строительства
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Средняя цена общежития из ЛСТК в 2026 году:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этажность</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Срок строительства</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">1 этаж (до 500 м²)</td>
                    <td className="py-3 pr-4 font-medium">30 000 – 40 000</td>
                    <td className="py-3">6–10 недель</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">2 этажа (600–1200 м²)</td>
                    <td className="py-3 pr-4 font-medium">35 000 – 48 000</td>
                    <td className="py-3">10–14 недель</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3 этажа (900–1800 м²)</td>
                    <td className="py-3 pr-4 font-medium">40 000 – 55 000</td>
                    <td className="py-3">14–18 недель</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Общежитие из ЛСТК — компромисс между скоростью контейнерных решений и капитальностью кирпичных зданий. При грамотном проектировании звуко- и теплоизоляции здание по комфорту не уступает традиционным, а строится в 3–4 раза быстрее.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем и строим общежития из ЛСТК по всей России. Полный цикл: архитектура, конструктив, инженерные сети, отделка. Рассчитаем стоимость под вашу задачу.
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
                <Link href="/articles/modulnoe-zdanie-iz-lstk/" className="text-accent-blue hover:underline">
                  Модульное здание из ЛСТК
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
