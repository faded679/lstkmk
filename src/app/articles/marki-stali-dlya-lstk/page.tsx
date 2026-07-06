import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Марки стали для ЛСТК — оцинковка, профили и выбор металла | МАКСТИЛ",
  description:
    "Какие марки стали используются в ЛСТК: оцинкованная сталь, толщины, классы покрытий. Как выбрать металл для каркаса ангара и жилого здания.",
  keywords: [
    "марки стали ЛСТК",
    "оцинкованная сталь для ангара",
    "профиль ЛСТК",
    "выбор металла для каркаса",
    "толщина стали ЛСТК",
  ],
  openGraph: {
    title: "Марки стали для ЛСТК — оцинковка, профили и выбор металла",
    description:
      "Обзор марок стали для ЛСТК-конструкций: классы прочности, оцинковка, профили.",
    url: "https://lstkmk.ru/articles/marki-stali-dlya-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/marki-stali-dlya-lstk/",
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
              Материалы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Марки стали для ЛСТК — оцинковка, профили и выбор металла
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Качество стали определяет срок службы здания, несущую способность и стоимость. Для ЛСТК используется не любой оцинкованный лист — есть требования к прочности, толщине покрытия и пластичности. Разбираем марки, стандарты и критерии выбора.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какая сталь применяется в ЛСТК
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Основной материал — тонколистовая оцинкованная сталь по ГОСТ 14918 или прокат с полимерным покрытием по ГОСТ 34180. Характеристики:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Толщина: 0,7–3,0 мм (для несущих элементов — 1,2–2,5 мм)</li>
              <li>Предел текучести: 230–350 МПа</li>
              <li>Цинковое покрытие: 140–350 г/м² (1-й класс — 275 г/м²)</li>
              <li>Пластичность: относительное удлинение ≥ 18 % (для профилирования)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Марки стали по ГОСТ
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Марка</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Предел текучести</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Область применения</th>
                    <th className="text-left py-3 font-semibold text-foreground">ГОСТ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">08пс</td>
                    <td className="py-3 pr-4">230 МПа</td>
                    <td className="py-3 pr-4">Ненесущие элементы, отделка</td>
                    <td className="py-3">ГОСТ 14918</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ст3сп</td>
                    <td className="py-3 pr-4">245 МПа</td>
                    <td className="py-3 pr-4">Стойки, ригели малоэтажных зданий</td>
                    <td className="py-3">ГОСТ 14918</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">S350GD (350 ХЛ)</td>
                    <td className="py-3 pr-4">350 МПа</td>
                    <td className="py-3 pr-4">Несущий каркас, фермы, балки</td>
                    <td className="py-3">ГОСТ 34180 / EN 10346</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">S550GD</td>
                    <td className="py-3 pr-4">550 МПа</td>
                    <td className="py-3 pr-4">Высоконагруженные элементы</td>
                    <td className="py-3">EN 10346</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">09Г2С</td>
                    <td className="py-3 pr-4">345 МПа</td>
                    <td className="py-3 pr-4">Тяжёлые элементы (балки, колонны)</td>
                    <td className="py-3">ГОСТ 19281</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Классы цинкового покрытия
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Толщина оцинковки напрямую влияет на срок службы конструкции:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Класс</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Масса покрытия, г/м²</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Толщина, мкм</th>
                    <th className="text-left py-3 font-semibold text-foreground">Срок защиты</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">2-й класс</td>
                    <td className="py-3 pr-4">140–180</td>
                    <td className="py-3 pr-4">10–13</td>
                    <td className="py-3">15–20 лет</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">1-й класс</td>
                    <td className="py-3 pr-4">275</td>
                    <td className="py-3 pr-4">19</td>
                    <td className="py-3">25–35 лет</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Повышенный (П)</td>
                    <td className="py-3 pr-4">350–450</td>
                    <td className="py-3 pr-4">25–32</td>
                    <td className="py-3">40–50+ лет</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Для несущего каркаса рекомендуется 1-й класс (275 г/м²) — это стандарт для ответственных ЛСТК-конструкций. 2-й класс допустим для ненесущих перегородок и временных сооружений.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы профилей ЛСТК
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>С-профиль (ПС):</strong> стойки стен и перегородок, стропила. Высота 89–305 мм</li>
              <li><strong>U-профиль (ПН):</strong> направляющие (верхняя и нижняя обвязка). Высота соответствует С-профилю</li>
              <li><strong>Z-профиль:</strong> прогоны кровли и стен. Высота 150–350 мм</li>
              <li><strong>Σ-профиль (сигма):</strong> повышенная жёсткость, используется как стойка или ригель</li>
              <li><strong>Термопрофиль:</strong> перфорированный профиль для снижения мостиков холода</li>
              <li><strong>Шляпный профиль:</strong> обрешётка стен и кровли под обшивку</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как выбрать толщину стали
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Толщина определяется расчётом и зависит от нагрузок:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Элемент</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Типовая толщина</th>
                    <th className="text-left py-3 font-semibold text-foreground">Когда увеличивают</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стойки стен (1 этаж)</td>
                    <td className="py-3 pr-4">1,2–1,5 мм</td>
                    <td className="py-3">2–3 этажа, большой шаг стоек</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стропила / фермы</td>
                    <td className="py-3 pr-4">1,5–2,5 мм</td>
                    <td className="py-3">Пролёт &gt; 12 м, высокая снеговая</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Прогоны кровли</td>
                    <td className="py-3 pr-4">1,2–2,0 мм</td>
                    <td className="py-3">Шаг рам &gt; 4 м</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Перегородки</td>
                    <td className="py-3 pr-4">0,7–1,0 мм</td>
                    <td className="py-3">Высота &gt; 4 м</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Распространённые ошибки при выборе стали
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Экономия на оцинковке:</strong> 2-й класс вместо 1-го — экономия 5–8 %, но срок службы сокращается на 10–15 лет</li>
              <li><strong>Неуказание марки в проекте:</strong> подрядчик может поставить дешёвую 08пс вместо расчётной S350GD</li>
              <li><strong>Китайский прокат без сертификата:</strong> реальная толщина может быть на 0,1–0,2 мм меньше номинала</li>
              <li><strong>Несовместимость покрытий:</strong> полимерное покрытие + сварка = разрушение защитного слоя</li>
              <li><strong>Не учтена агрессивность среды:</strong> для животноводческих объектов нужна повышенная оцинковка (350+ г/м²)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как проверить качество стали
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Запросить сертификат качества (сертификат 3.1 по EN 10204)</li>
              <li>Проверить толщину микрометром в нескольких точках</li>
              <li>Измерить толщину оцинковки магнитным толщиномером</li>
              <li>Убедиться в маркировке рулона (завод, марка, класс покрытия)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для несущего каркаса ЛСТК оптимальна сталь S350GD с оцинковкой 1-го класса (275 г/м²) и толщиной 1,2–2,5 мм. Это обеспечивает 30–50 лет службы без перекраски. Экономия на марке или классе покрытия — ложная: потеря несущей способности или ранняя коррозия обойдутся дороже.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Производим ЛСТК-профили из сертифицированной стали российских заводов. Проектируем каркасы с подбором оптимальных марок и толщин под конкретные нагрузки.
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
                <Link href="/articles/prodlenie-sroka-sluzhby-angara/" className="text-accent-blue hover:underline">
                  Продление срока службы ангара — антикоррозийная защита и ремонт
                </Link>
              </li>
              <li>
                <Link href="/articles/stroitelstvo-angara-na-severe/" className="text-accent-blue hover:underline">
                  Строительство ангара в северных районах — вечная мерзлота и морозы
                </Link>
              </li>
              <li>
                <Link href="/articles/ekologichnost-lstk/" className="text-accent-blue hover:underline">
                  Экологичность ЛСТК — углеродный след и переработка металла
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
