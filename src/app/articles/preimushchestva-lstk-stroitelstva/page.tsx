import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "5 причин выбрать ЛСТК для промышленного строительства | МАКСТИЛ",
  description:
    "Почему лёгкие стальные тонкостенные конструкции выигрывают у традиционных материалов: скорость, экономия, надёжность и экологичность. Подробный разбор от МАКСТИЛ.",
  keywords: [
    "преимущества ЛСТК",
    "лёгкие стальные конструкции плюсы",
    "быстровозводимые здания преимущества",
    "ЛСТК экономия времени",
    "строительство из металлоконструкций выгоды",
    "промышленное строительство ЛСТК",
  ],
  openGraph: {
    title: "5 причин выбрать ЛСТК для промышленного строительства",
    description: "Почему ЛСТК — лучший выбор для вашего объекта",
    url: "https://lstkmk.ru/articles/preimushchestva-lstk-stroitelstva/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/preimushchestva-lstk-stroitelstva/",
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
              5 причин выбрать ЛСТК для промышленного строительства
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>5 апреля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Лёгкие стальные тонкостенные конструкции (ЛСТК) становятся стандартом промышленного строительства. Разбираем, почему всё больше заказчиков отказываются от кирпича и бетона в пользу металла.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Причина 1: Скорость строительства в 3–5 раз быстрее
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Каркас ЛСТК площадью 1000 м² изготавливается на заводе за 2–3 недели и монтируется на площадке за 5–7 дней. Для сравнения: монолитный железобетонный каркас требует 2–3 месяца только на возведение.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Почему так быстро:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Все элементы готовы с завода — резка и сварка не требуются на площадке</li>
              <li>Соединение болтами без сварки — монтаж при температуре до -20°C</li>
              <li>Лёгкость элементов — монтаж без крупнотоннажных кранов</li>
              <li>Параллельные работы — фундамент и каркас делаются одновременно</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Причина 2: Экономия на фундаменте до 40%
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Вес ЛСТК-каркаса в 3–4 раза меньше железобетонного. Это позволяет использовать облегчённые фундаменты:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Свайно-ростверковый вместо монолитной плиты</li>
              <li>Ленточный мелкозаглубленный вместо ленточного глубокого</li>
              <li>УШП (утеплённая шведская плита) для тёплых зданий</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Пример:</strong> Склад 1000 м² на ЛСТК — фундамент ~450 000 ₽. Аналог на ЖБК — ~1 200 000 ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Причина 3: Гибкость планировок и масштабирование
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК позволяет строить пролёты до 30 метров без промежуточных колонн — свободное пространство для размещения оборудования, стеллажей, техники.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Легко расширить здание:</strong> Каркас разбирается болтами, элементы можно добавить сбоку или в длину без разрушения существующих конструкций. Кирпичное или монолитное здание так не модернизируешь.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Причина 4: Долговечность и минимальное обслуживание
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Оцинкованный стальной профиль ЛСТК имеет гарантированный срок службы 50+ лет в умеренном климате. Покрытие 275 г/м² цинка защищает от коррозии без дополнительной окраски.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Сравнение с деревом:</strong> Деревянный каркас требует обработки антисептиками каждые 5–7 лет. <strong>Сравнение с кирпичом:</strong> Кладка требует ремонта швов и гидроизоляции через 15–20 лет.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Причина 5: Экологичность и энергоэффективность
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Сталь — 100% перерабатываемый материал. При демонтаже ЛСТК-здания металл сдаётся на лом и используется повторно. Это соответствует требованиям зелёного строительства и ESG-стандартам крупных компаний.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Теплоэффективность:</strong> Тонкие стенки ЛСТК + сэндвич-панели = минимальные теплопотери. Здание отапливается быстрее и дешевле в эксплуатации.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда ЛСТК не подходит?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Честно о ограничениях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Пролёты более 30 метров без колонн — нужен горячекатаный прокат</li>
              <li>Крановые нагрузки свыше 10 тонн — требуется усиленный каркас</li>
              <li>Пожарные категории А и Б с особыми требованиями</li>
              <li>Многоэтажные здания выше 2 этажей</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для большинства складов, ангаров, цехов, СТО и сельхоззданий эти ограничения неактуальны.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Вывод
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК — это не «дешёвая альтернатива», а современная технология, которая при правильном проектировании превосходит традиционные материалы по совокупности параметров: скорость, стоимость, гибкость, долговечность. Актуальные цены на быстровозводимые здания из ЛСТК — на странице <Link href="/bystrovozvodimye-zdaniya-cena/" className="text-accent-blue hover:underline">быстровозводимые здания цена</Link>.
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
