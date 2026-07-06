import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Продление срока службы ангара — антикоррозийная защита и ремонт | МАКСТИЛ",
  description:
    "Как продлить срок службы ангара из металлоконструкций: антикоррозийная обработка, ремонт кровли, усиление каркаса. Практические рекомендации.",
  keywords: [
    "продление срока службы ангара",
    "защита металлоконструкций от коррозии",
    "ремонт ангара",
    "антикоррозийная обработка каркаса",
    "реконструкция ангара",
  ],
  openGraph: {
    title: "Продление срока службы ангара — антикоррозийная защита и ремонт",
    description:
      "Методы продления эксплуатации ангара: от антикоррозии до капитального ремонта.",
    url: "https://lstkmk.ru/articles/prodlenie-sroka-sluzhby-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/prodlenie-sroka-sluzhby-angara/",
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
              Эксплуатация
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Продление срока службы ангара — антикоррозийная защита и ремонт
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Проектный срок службы ангара из ЛСТК — 30–50 лет. Но без обслуживания коррозия съедает незащищённую сталь за 10–15 лет. Разбираем, как защитить каркас и ограждения, чтобы здание отработало весь расчётный период без капитального ремонта.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему ангары корродируют
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Основные факторы, ускоряющие коррозию металлоконструкций:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Конденсат:</strong> перепад температур «улица — помещение» образует влагу на холодных элементах</li>
              <li><strong>Агрессивная среда:</strong> удобрения, соль, кислоты, щёлочи (сельхозобъекты, химпроизводства)</li>
              <li><strong>Механические повреждения:</strong> удары техники, царапины при монтаже разрушают оцинковку</li>
              <li><strong>Стоячая вода:</strong> забитые водостоки, лужи на кровле — ускоренная коррозия в 5–10 раз</li>
              <li><strong>Контакт разнородных металлов:</strong> гальваническая пара (алюминий + сталь, медь + оцинковка)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Системы антикоррозийной защиты
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Горячее цинкование
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Слой цинка 40–80 мкм, нанесённый заводским способом. Защита — 25–50 лет в неагрессивной среде. Оптимально для несущих конструкций. Стоимость: +15–25 % к цене металла.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Холодное цинкование (цинконаполненные грунты)
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Нанесение цинксодержащего состава (содержание цинка 92–96 %) кистью или распылителем. Используется для ремонта повреждённых участков и мест сварки. Защита — 15–25 лет. Стоимость обработки: 400–800 ₽/м².
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Лакокрасочные покрытия
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Система «грунт + промежуточный слой + финиш»:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Эпоксидный грунт:</strong> основа системы, адгезия к металлу</li>
              <li><strong>Полиуретановая эмаль:</strong> финишное покрытие, стойкость к УФ и осадкам</li>
              <li><strong>Суммарная толщина:</strong> 160–240 мкм</li>
              <li><strong>Срок защиты:</strong> 10–20 лет (зависит от среды)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              4. Полимерное покрытие профнастила
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Заводское покрытие кровельного и стенового профнастила: полиэстер (10–15 лет), пурал (20–30 лет), PVDF (30–40 лет). При выборе ограждений всегда указывайте тип покрытия и гарантию производителя.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              График защитных мероприятий
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Мероприятие</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Периодичность</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость (1000 м²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Осмотр и фиксация дефектов</td>
                    <td className="py-3 pr-4">2 раза в год</td>
                    <td className="py-3">30–50 тыс. ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Локальный ремонт (подкраска)</td>
                    <td className="py-3 pr-4">Ежегодно</td>
                    <td className="py-3">50–150 тыс. ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Полная перекраска каркаса</td>
                    <td className="py-3 pr-4">Раз в 12–15 лет</td>
                    <td className="py-3">500–1 200 тыс. ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Замена кровельных листов</td>
                    <td className="py-3 pr-4">Раз в 20–30 лет</td>
                    <td className="py-3">800–1 500 тыс. ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Ремонт кровли
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Кровля — самый уязвимый элемент ангара. Типичные проблемы и решения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Протечки в стыках:</strong> замена уплотнительных лент + герметик (500–1000 ₽/п.м.)</li>
              <li><strong>Сквозная коррозия листов:</strong> замена отдельных листов профнастила</li>
              <li><strong>Разрушение крепежа:</strong> замена саморезов с новыми ЭПДМ-шайбами</li>
              <li><strong>Прогиб прогонов:</strong> усиление дополнительными элементами или замена</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Усиление каркаса
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Требуется при изменении нагрузок (новое оборудование, кран-балка) или обнаруженных деформациях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Установка дополнительных связей жёсткости</li>
              <li>Усиление колонн обоймами или накладками</li>
              <li>Подведение дополнительных стоек под прогоны</li>
              <li>Замена повреждённых элементов на новые (аналогичного или большего сечения)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда ремонт дешевле нового строительства
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Правило: если стоимость ремонта превышает 50–60 % стоимости нового ангара — выгоднее построить заново. Ремонт оправдан, если:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Каркас в хорошем состоянии (потеря сечения менее 10 %)</li>
              <li>Фундамент не имеет критических дефектов</li>
              <li>Требуется замена только ограждений (кровля, стены)</li>
              <li>Нет необходимости менять габариты и нагрузки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Срок службы ангара на 80 % определяется качеством антикоррозийной защиты и регулярностью обслуживания. Оцинкованный каркас + полимерное покрытие ограждений + ежегодный осмотр = 50 лет без капремонта. Экономия на защите приводит к расходам в 5–10 раз больше через 10–15 лет.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары с заводской антикоррозийной защитой. Проводим обследование существующих зданий и разрабатываем рекомендации по ремонту.
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
                <Link href="/articles/obsluzhivanie-angara/" className="text-accent-blue hover:underline">
                  Текущее обслуживание ангара — график осмотров и ремонтов
                </Link>
              </li>
              <li>
                <Link href="/articles/marki-stali-dlya-lstk/" className="text-accent-blue hover:underline">
                  Марки стали для ЛСТК — оцинковка, профили и выбор металла
                </Link>
              </li>
              <li>
                <Link href="/articles/strahovanie-angara/" className="text-accent-blue hover:underline">
                  Страхование ангара и склада — риски и стоимость
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
