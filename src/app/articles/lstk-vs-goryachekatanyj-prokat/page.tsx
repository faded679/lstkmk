import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "ЛСТК или горячекатаный прокат: что выбрать для склада | МАКСТИЛ",
  description:
    "Сравнение ЛСТК и горячекатаного проката для строительства складов. Преимущества лёгких стальных конструкций: скорость, экономия, надёжность. Подробный анализ от МАКСТИЛ.",
  keywords: [
    "ЛСТК vs горячекатаный прокат",
    "лёгкие стальные конструкции склад",
    "ЛСТК преимущества",
    "строительство склада ЛСТК",
    "сравнение технологий строительства",
    "быстровозводимые склады",
  ],
  openGraph: {
    title: "ЛСТК или горячекатаный прокат: что выбрать для склада?",
    description: "Подробное сравнение технологий строительства складов от МАКСТИЛ",
    url: "https://lstkmk.ru/articles/lstk-vs-goryachekatanyj-prokat/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/lstk-vs-goryachekatanyj-prokat/",
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
              ЛСТК или горячекатаный прокат: что выбрать для склада?
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>28 мая 2026</span>
              <span>•</span>
              <span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Выбор между лёгкими стальными тонкостенными конструкциями (ЛСТК) и традиционным горячекатаным прокатом — ключевое решение при проектировании складских помещений. Разбираем плюсы и минусы каждой технологии на практике.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что такое ЛСТК?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>ЛСТК (лёгкие стальные тонкостенные конструкции)</strong> — это оцинкованный стальной профиль толщиной 1,5–3 мм, изготовленный методом холодного проката. Основное преимущество — высокая прочность при минимальном весе: удельная масса конструкций в 3–4 раза меньше, чем у традиционного металлопроката.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнение по ключевым параметрам
            </h2>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">1. Вес конструкций</h3>
              <p className="text-muted mb-4">
                <strong>ЛСТК:</strong> Каркас ангара 500 м² весит ~12–15 тонн. Это позволяет использовать облегчённые фундаменты (свайно-ростверковые или ленточные мелкозаглубленные).
              </p>
              <p className="text-muted">
                <strong>Горячекатаный прокат:</strong> Аналогичный каркас — 40–50 тонн. Требуется мощный монолитный фундамент с углублёнными опорами, что увеличивает сроки и стоимость работ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">2. Скорость строительства</h3>
              <p className="text-muted mb-4">
                <strong>ЛСТК:</strong> Производство и монтаж занимают 2–4 недели. Конструкции поставляются в разобранном виде с завода, элементы соединяются болтами — не требуется сварка на площадке.
              </p>
              <p className="text-muted">
                <strong>Горячекатаный прокат:</strong> Сроки 2–3 месяца. Необходима сварка, требующая подготовки поверхностей и контроля качества швов. Монтаж тяжёлых элементов требует крупнотоннажных кранов.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">3. Стоимость материалов</h3>
              <p className="text-muted mb-4">
                <strong>ЛСТК:</strong> Металл расходуется экономичнее за счёт тонких стенок и эффективной формы профиля. Меньший вес снижает транспортные расходы.
              </p>
              <p className="text-muted">
                <strong>Горячекатаный прокат:</strong> Больший расход стали, высокие затраты на доставку тяжёлых элементов, необходимость мощной сварочной бригады на площадке.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда выбирать ЛСТК?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Склады и ангары до 30 метров пролётом</li>
              <li>Здания без крановой нагрузки или с лёгкими кран-балками</li>
              <li>Сельхозобъекты (коровники, птичники, овощехранилища)</li>
              <li>Торговые павильоны и выставочные залы</li>
              <li>При ограниченных сроках строительства</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда нужен горячекатаный прокат?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Цеха с тяжёлым оборудованием и кранами грузоподъёмностью более 5 тонн</li>
              <li>Многоэтажные производственные здания</li>
              <li>Объекты с повышенными требованиями к пожарной безопасности (категории А, Б)</li>
              <li>Строения с пролётами более 30 метров без промежуточных колонн</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Коррозионная стойкость
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Профили ЛСТК изготавливаются из оцинкованной стали (покрытие 140–275 г/м²), что обеспечивает защиту от коррозии на 50+ лет в умеренном климате. Горячекатаный прокат требует дополнительной антикоррозийной обработки — грунтовки и покраски с регулярным обновлением.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Выводы
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для стандартных складов, ангаров и сельхозобъектов <strong>ЛСТК — оптимальный выбор</strong>: быстрее, легче, дешевле. Горячекатаный прокат оправдан при тяжёлых нагрузках и специфических требованиях к пролётам.
            </p>
            <p className="text-muted leading-relaxed">
              Компания МАКСТИЛ специализируется на проектировании и строительстве из ЛСТК. Получите бесплатную консультацию по выбору оптимальной технологии для вашего объекта.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Нужна консультация по выбору технологии?
            </h3>
            <p className="text-muted mb-6">
              Наши инженеры проанализируют ваши требования и подберут оптимальное решение — ЛСТК или традиционный каркас.
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
