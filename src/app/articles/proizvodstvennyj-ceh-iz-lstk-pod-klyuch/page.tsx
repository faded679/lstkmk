import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Производственный цех из ЛСТК под ключ: проект, сроки, цена | МАКСТИЛ",
  description:
    "Строительство производственного цеха из ЛСТК под ключ: проектирование, выбор оборудования, краны, инженерия. Реальные сроки и стоимость м² цеха в 2026 году.",
  keywords: [
    "производственный цех под ключ",
    "цех из ЛСТК",
    "строительство производственного здания",
    "цех из металлоконструкций",
    "производственный корпус",
    "цех под ключ цена",
    "промышленное здание ЛСТК",
  ],
  openGraph: {
    title: "Производственный цех из ЛСТК под ключ",
    description:
      "Полный цикл строительства цеха: от проекта до запуска производства.",
    url: "https://lstkmk.ru/articles/proizvodstvennyj-ceh-iz-lstk-pod-klyuch/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/proizvodstvennyj-ceh-iz-lstk-pod-klyuch/",
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
              Производственный цех из ЛСТК под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>16 июня 2026</span>
              <span>•</span>
              <span>11 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Цех — это не просто «коробка» с крышей. Под технологический процесс закладываются нагрузки от станков, мостовых кранов, инженерные коммуникации и зоны обслуживания. Разбираем, как правильно спроектировать и построить производственный цех из ЛСТК под ключ.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Чем цех отличается от склада
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Производственный цех — это здание с повышенными требованиями к каркасу и инженерии:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Несущие нагрузки от технологического оборудования</li>
              <li>Возможные крановые пути и подкрановые балки</li>
              <li>Усиленные полы (стяжка 200 мм и больше)</li>
              <li>Развитая электрика (силовая сеть 380 В)</li>
              <li>Местная вентиляция над станками</li>
              <li>Бытовые зоны для персонала</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Поэтому стоимость м² цеха выше, чем склада на 25–40%, а проектирование сложнее: каждая единица оборудования влияет на расчёт каркаса.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этапы строительства цеха под ключ
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li><strong>Техническое задание</strong> — описание производства, оборудования, нагрузок</li>
              <li><strong>Геология и геодезия</strong> — изыскания на участке (2–3 недели)</li>
              <li><strong>Архитектурный проект</strong> — планировка, зонирование (3–4 недели)</li>
              <li><strong>Конструктивный проект КМ/КМД</strong> — расчёт каркаса (4–6 недель)</li>
              <li><strong>Производство металлоконструкций</strong> — изготовление на заводе (4–8 недель)</li>
              <li><strong>Фундамент</strong> — параллельно с производством (3–6 недель)</li>
              <li><strong>Монтаж каркаса и ограждения</strong> — 4–8 недель</li>
              <li><strong>Инженерные сети</strong> — отопление, вентиляция, электрика (4–8 недель)</li>
              <li><strong>Полы и отделка</strong> — 2–4 недели</li>
              <li><strong>Пусконаладка и сдача</strong> — 1–2 недели</li>
            </ol>
            <p className="text-muted leading-relaxed mb-6">
              Общий срок «под ключ» — от 5 до 10 месяцев в зависимости от площади и сложности оборудования. Часть этапов идёт параллельно, что и экономит время.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт каркаса под оборудование
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Самая важная информация для конструктора — это схема расстановки оборудования с указанием масс, точек крепления и динамических нагрузок. Без этих данных проектируют по минимальным нормативам, а потом оказывается, что под пресс нужна отдельная балка, а под мостовой кран — усиленные колонны.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Если установить оборудование позже на цех, рассчитанный «впритык», переделка обойдётся в 10–20% от стоимости каркаса. Поэтому опытные подрядчики просят технологическую схему ещё до старта проектирования.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Мостовые краны и кран-балки
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство цехов требуют грузоподъёмного оборудования. Под него закладываются:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Подкрановые балки</strong> на колоннах — выдерживают нагрузку крана + груз</li>
              <li><strong>Усиленные колонны</strong> с консолями под опору крановых путей</li>
              <li><strong>Связи жёсткости</strong> в плоскости ригелей</li>
              <li><strong>Запас высоты</strong> — от низа крана до пола должно быть достаточно для груза</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Грузоподъёмность кран-балок в типовых цехах — 1, 3, 5 тонн. Мостовые краны — 5–32 тонны и выше. Учёт крана задним числом почти невозможен — он переопределяет весь каркас.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит цех под ключ
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип цеха</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Срок</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сборочный (без станков)</td>
                    <td className="py-3 pr-4 font-medium">28 000 – 35 000</td>
                    <td className="py-3">5–6 мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Механический (с кран-балкой)</td>
                    <td className="py-3 pr-4 font-medium">35 000 – 45 000</td>
                    <td className="py-3">6–8 мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Литейный / тяжёлое произв-во</td>
                    <td className="py-3 pr-4 font-medium">45 000 – 60 000</td>
                    <td className="py-3">8–10 мес</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Пищевое производство</td>
                    <td className="py-3 pr-4 font-medium">38 000 – 55 000</td>
                    <td className="py-3">7–9 мес</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что включить в договор «под ключ»
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Полный комплект проектной документации (КМ, КМД, АР, ИОС)</li>
              <li>Согласование с экспертизой и подключение к сетям</li>
              <li>Поставка металлоконструкций и доставка на площадку</li>
              <li>Фундаментные работы и нулевой цикл</li>
              <li>Монтаж каркаса, кровли, стен, ворот, окон</li>
              <li>Инженерные сети: отопление, вентиляция, электрика, освещение</li>
              <li>Полы, стяжка, окраска</li>
              <li>Исполнительная документация, гарантийные обязательства</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цех — это инженерное здание, спроектированное под технологию. От качества ТЗ напрямую зависит, насколько эффективно вы будете работать в нём следующие 30–50 лет. Не экономьте на этапе проектирования: грамотный КМ-проект стоит 1–2% от сметы, но определяет 100% работоспособности готового объекта.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Построим цех под вашу технологию
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ проектирует и строит производственные цеха под ключ — с кран-балками, мостовыми кранами и сложной инженерией. Возьмём весь цикл от ТЗ до пусконаладки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость цеха
              </a>
              <a
                href="/#contacts"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
