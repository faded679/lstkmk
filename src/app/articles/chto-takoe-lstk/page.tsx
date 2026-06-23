import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Что такое ЛСТК: лёгкие стальные тонкостенные конструкции | МАКСТИЛ",
  description:
    "Что такое ЛСТК — простым языком о технологии лёгких стальных тонкостенных конструкций: из чего состоит, как строится, где применяется и чем отличается от других материалов.",
  keywords: [
    "что такое ЛСТК",
    "лёгкие стальные тонкостенные конструкции",
    "ЛСТК технология",
    "ЛСТК строительство",
    "металлоконструкции ЛСТК",
    "быстровозводимые здания из ЛСТК",
  ],
  openGraph: {
    title: "Что такое ЛСТК: лёгкие стальные тонкостенные конструкции",
    description:
      "Простым языком о технологии ЛСТК: состав, применение, отличия от других материалов.",
    url: "https://lstkmk.ru/articles/chto-takoe-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/chto-takoe-lstk/",
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
              Что такое ЛСТК: полный разбор технологии
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>4 июня 2026</span>
              <span>•</span>
              <span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              ЛСТК — аббревиатура, которую всё чаще встречают те, кто планирует строить склад, ангар или производственное здание. Разбираем, что за ней стоит, как работает технология и почему она вытесняет кирпич и бетон.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расшифровка и суть
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>ЛСТК</strong> — лёгкие стальные тонкостенные конструкции. Это несущий каркас здания, собранный из оцинкованных стальных профилей толщиной 1,5–4 мм. Профили производятся на заводе методом холодного проката, нарезаются в размер по проекту и доставляются на стройплощадку готовыми к сборке.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Принцип похож на конструктор: каждый элемент пронумерован, монтаж ведётся болтовым соединением без сварки. Бригада из 4–6 человек собирает каркас здания площадью 500–1000 м² за 5–10 рабочих дней.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Из чего состоит ЛСТК-здание
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовое здание из ЛСТК включает несколько систем:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Несущий каркас</strong> — колонны, ригели, фермы покрытия из С- и Z-образных профилей</li>
              <li><strong>Ограждающие конструкции</strong> — сэндвич-панели или профнастил с утеплителем</li>
              <li><strong>Кровля</strong> — металлочерепица, профнастил или сэндвич-панели кровельные</li>
              <li><strong>Фундамент</strong> — как правило свайный или ленточный мелкозаглубленный</li>
              <li><strong>Инженерные системы</strong> — отопление, вентиляция, электрика монтируются внутри каркаса</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Где применяется ЛСТК
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Технология подходит для широкого класса объектов:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Складские комплексы и логистические терминалы</li>
              <li>Производственные цеха и мастерские</li>
              <li>Ангары для сельхозтехники и зернохранилища</li>
              <li>Автосервисы, автомойки, СТО</li>
              <li>Торговые павильоны и коммерческие здания</li>
              <li>Спортивные залы и крытые площадки</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Оптимальный пролёт — до 24–30 метров без промежуточных колонн. Для больших пролётов применяется горячекатаный прокат в сочетании с ЛСТК.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Чем ЛСТК отличается от других технологий
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">ЛСТК</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Кирпич / блоки</th>
                    <th className="text-left py-3 font-semibold text-foreground">ЖБК</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Скорость монтажа</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">1–2 месяца</td>
                    <td className="py-3 pr-4">4–8 месяцев</td>
                    <td className="py-3">3–6 месяцев</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Вес конструкций</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Лёгкий</td>
                    <td className="py-3 pr-4">Тяжёлый</td>
                    <td className="py-3">Очень тяжёлый</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Фундамент</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Облегчённый</td>
                    <td className="py-3 pr-4">Усиленный</td>
                    <td className="py-3">Массивный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Демонтаж / переезд</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Возможен</td>
                    <td className="py-3 pr-4">Невозможен</td>
                    <td className="py-3">Невозможен</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Срок службы</td>
                    <td className="py-3 pr-4">50+ лет</td>
                    <td className="py-3 pr-4">50+ лет</td>
                    <td className="py-3">50+ лет</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как производятся ЛСТК-профили
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Профили изготавливаются методом <strong>холодного профилирования</strong>: стальная оцинкованная лента толщиной 1,5–4 мм прокатывается через систему валков и принимает нужное сечение — С-, Z- или U-образное. Затем профили нарезаются в точный размер по проектной документации и маркируются.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Оцинкование происходит до профилирования: слой цинка 275 г/м² надёжно защищает металл от коррозии в течение всего срока службы здания, в том числе в местах резки и отверстий.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Главные мифы о ЛСТК
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>«ЛСТК — это холодно».</strong> Неверно. Тепловые характеристики зависят от ограждающих конструкций, а не от материала каркаса. Сэндвич-панели толщиной 150–200 мм обеспечивают теплопотери ниже, чем у кирпичной стены в полтора кирпича.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>«ЛСТК ненадёжно».</strong> Неверно. Несущая способность рассчитывается по СП 260.1325800 и ГОСТ 27751. Здания проектируются на снеговые, ветровые и сейсмические нагрузки региона.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>«ЛСТК быстро ржавеет».</strong> Неверно. Оцинкованный профиль с покрытием 275 г/м² при нормальной эксплуатации не требует дополнительной антикоррозийной обработки 50+ лет.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК — это зрелая, хорошо изученная технология с 30-летней историей применения в России и 50-летней — в мире. Она подходит для большинства промышленных, коммерческих и сельскохозяйственных объектов, где важны скорость строительства, контролируемая стоимость и возможность расширения в будущем. Рассчитать стоимость быстровозводимого здания из ЛСТК можно на странице <Link href="/bystrovozvodimye-zdaniya-cena/" className="text-accent-blue hover:underline">быстровозводимые здания цена за м²</Link>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Хотите построить из ЛСТК?
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ — 14 лет опыта в проектировании и монтаже ЛСТК-зданий. Поможем подобрать оптимальное решение под ваши задачи и бюджет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость проекта
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
