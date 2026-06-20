import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Профнастил или сэндвич-панели для ангара: что выбрать | МАКСТИЛ",
  description:
    "Сравнение профнастила и сэндвич-панелей для ангара: цена, теплоизоляция, монтаж, срок службы. Когда выбрать профнастил, а когда сэндвич. Реальные цифры и рекомендации.",
  keywords: [
    "профнастил или сэндвич-панели",
    "сэндвич-панели для ангара",
    "профнастил для ангара",
    "ограждающие конструкции ангара",
    "что выбрать для ангара",
    "сэндвич панель цена",
    "профлист на ангар",
  ],
  openGraph: {
    title: "Профнастил или сэндвич-панели для ангара",
    description:
      "Сравнение материалов ограждения: цена, теплоизоляция, монтаж, срок службы.",
    url: "https://lstkmk.ru/articles/profnastil-ili-sendvich-paneli-dlya-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/profnastil-ili-sendvich-paneli-dlya-angara/",
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
              Профнастил или сэндвич-панели для ангара
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>19 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Один из главных выборов при проектировании ангара — материал ограждающих конструкций. Профнастил дешевле в 1,8–2,5 раза, но это не значит, что он всегда лучше. Разбираем, где какой материал оправдан и как принять правильное решение.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что такое профнастил и сэндвич-панели
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Профнастил</strong> — однослойный стальной лист с защитным полимерным покрытием. Толщина 0,5–0,8 мм. Не имеет теплоизоляции — это просто «обшивка» каркаса от ветра и осадков.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Сэндвич-панель</strong> — трёхслойная конструкция: два металлических листа с утеплителем между ними. Толщина — 50, 80, 100, 120, 150, 200 мм. Утеплитель — минеральная вата или PIR. Готовое стеновое или кровельное решение с теплоизоляцией.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнение по ключевым параметрам
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Профнастил</th>
                    <th className="text-left py-3 font-semibold text-foreground">Сэндвич-панель</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Цена м² материала</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">400–700 ₽</td>
                    <td className="py-3">1 400–2 800 ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Теплоизоляция</td>
                    <td className="py-3 pr-4">Нет</td>
                    <td className="py-3 text-green-600 font-medium">Да</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Скорость монтажа</td>
                    <td className="py-3 pr-4">Средняя</td>
                    <td className="py-3 text-green-600 font-medium">Высокая</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Шумоизоляция</td>
                    <td className="py-3 pr-4">Низкая</td>
                    <td className="py-3 text-green-600 font-medium">Хорошая</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Огнестойкость</td>
                    <td className="py-3 pr-4">Несгораемый</td>
                    <td className="py-3">Зависит от утеплителя</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Конденсат внутри</td>
                    <td className="py-3 pr-4">Возможен</td>
                    <td className="py-3 text-green-600 font-medium">Нет</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Срок службы</td>
                    <td className="py-3 pr-4">20–30 лет</td>
                    <td className="py-3">25–50 лет</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда выбирать профнастил
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Холодные склады без работы персонала</li>
              <li>Сезонные навесы и хранилища</li>
              <li>Сельхозпостройки (зерно, техника, корма)</li>
              <li>Гаражи для грузовиков и спецтехники</li>
              <li>Производственные навесы без отопления</li>
              <li>Жёстко ограниченный бюджет</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Профнастил — рабочее решение для 40% всех ангаров в России. Главное — заложить хорошую вентиляцию, чтобы избежать конденсата на внутренней стороне в межсезонье.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда нужны сэндвич-панели
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Тёплые склады, цеха, автосервисы</li>
              <li>Здания с постоянной работой людей внутри</li>
              <li>Хранение чувствительных грузов</li>
              <li>Торговые комплексы, выставочные залы</li>
              <li>Спортивные сооружения</li>
              <li>Производства с требованиями к чистоте воздуха</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Утеплитель сэндвич-панелей: вата или PIR
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Минвата</th>
                    <th className="text-left py-3 font-semibold text-foreground">PIR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Теплопроводность, Вт/м·К</td>
                    <td className="py-3 pr-4">0,040–0,045</td>
                    <td className="py-3 text-green-600 font-medium">0,022–0,024</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Огнестойкость</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">НГ (негорючий)</td>
                    <td className="py-3">Г1 (слабо горючий)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Влагостойкость</td>
                    <td className="py-3 pr-4">Низкая</td>
                    <td className="py-3 text-green-600 font-medium">Высокая</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Цена</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Дешевле</td>
                    <td className="py-3">+25–40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Минвата выбирается для большинства объектов из-за огнестойкости и цены. PIR — для холодильных складов, помещений с высокой влажностью и там, где важна тонкая толщина при максимальной теплоизоляции.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Толщина сэндвич-панели
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Толщина</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Назначение</th>
                    <th className="text-left py-3 font-semibold text-foreground">Климат</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">50 мм</td>
                    <td className="py-3 pr-4">Тёплое лето / прохладная зима</td>
                    <td className="py-3">Юг России</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">80–100 мм</td>
                    <td className="py-3 pr-4">Обычные склады, СТО, цеха</td>
                    <td className="py-3">Средняя полоса</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">120–150 мм</td>
                    <td className="py-3 pr-4">Энергоэффективные здания</td>
                    <td className="py-3">Сибирь, Север</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">200 мм</td>
                    <td className="py-3 pr-4">Морозильные склады</td>
                    <td className="py-3">Любой</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Комбинированные решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Иногда оптимальный вариант — комбинировать материалы. Например: основной объём из профнастила (холодное хранение), а пристроенный бытовой блок — из сэндвича 100 мм (тёплая зона для персонала). Это сэкономит 20–30% бюджета без потери функциональности.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Выбор «профнастил или сэндвич» — это в первую очередь решение о температурном режиме здания. Не пытайтесь экономить на сэндвиче там, где он нужен по технологии — отопление неутеплённого здания обойдётся в 2–3 раза дороже разницы в стоимости материалов уже за один сезон.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Поможем выбрать материал ограждения
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ подберёт оптимальный материал для вашего ангара. Рассчитаем варианты с профнастилом и сэндвичем — сравните цифры по эксплуатации и капзатратам.
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
        </article>
      </main>
    </div>
  );
}
