import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Текущее обслуживание ангара — график осмотров и ремонтов | МАКСТИЛ",
  description:
    "Обслуживание ангара из металлоконструкций: график осмотров, сезонные работы, ремонт кровли и ограждений. Как продлить срок службы здания.",
  keywords: [
    "обслуживание ангара",
    "осмотр ангара",
    "ремонт ангара",
    "график осмотров металлоконструкций",
    "техобслуживание склада",
  ],
  openGraph: {
    title: "Текущее обслуживание ангара — график осмотров и ремонтов",
    description:
      "Регламент технического обслуживания ангара: что проверять и когда ремонтировать.",
    url: "https://lstkmk.ru/articles/obsluzhivanie-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/obsluzhivanie-angara/",
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
              Текущее обслуживание ангара — график осмотров и ремонтов
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлокаркас служит 50 лет, но только при регулярном обслуживании. Протечка кровли, ослабший болт, забитый водосток — мелкие проблемы, которые без внимания превращаются в дорогой капитальный ремонт. Разбираем регламент обслуживания по сезонам.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Виды осмотров
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип осмотра</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Периодичность</th>
                    <th className="text-left py-3 font-semibold text-foreground">Кто проводит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Текущий (визуальный)</td>
                    <td className="py-3 pr-4">Ежемесячно</td>
                    <td className="py-3">Эксплуатирующая служба</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сезонный</td>
                    <td className="py-3 pr-4">2 раза в год (весна/осень)</td>
                    <td className="py-3">Инженер + подрядчик</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Внеочередной</td>
                    <td className="py-3 pr-4">После ЧП (ураган, снегопад, пожар)</td>
                    <td className="py-3">Специализированная организация</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Весенний осмотр (март–апрель)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              После зимних нагрузок проверяется:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Кровля:</strong> наличие вмятин от снега, целостность крепежа, протечки в стыках панелей</li>
              <li><strong>Водосточная система:</strong> засоры, деформации желобов, целостность воронок</li>
              <li><strong>Фундамент:</strong> трещины в отмостке, просадки грунта, выход свай</li>
              <li><strong>Каркас:</strong> деформации, следы коррозии в местах повреждения оцинковки</li>
              <li><strong>Ворота:</strong> регулировка направляющих, замена уплотнителей</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Осенний осмотр (сентябрь–октябрь)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Подготовка к зиме:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Кровля:</strong> герметизация стыков, подтяжка саморезов, замена повреждённых листов</li>
              <li><strong>Водостоки:</strong> очистка от листвы, проверка уклонов</li>
              <li><strong>Утепление:</strong> проверка целостности пароизоляции, устранение мостиков холода</li>
              <li><strong>Отопление:</strong> пусконаладка котельной, проверка теплоносителя</li>
              <li><strong>Снегозадержатели:</strong> проверка крепления, установка дополнительных при необходимости</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Ежемесячный контроль
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Визуальный осмотр каркаса на предмет деформаций и коррозии</li>
              <li>Проверка работы ворот, дверей, замков</li>
              <li>Контроль освещения — замена ламп, проверка аварийного освещения</li>
              <li>Проверка пожарной сигнализации (тестовый запуск)</li>
              <li>Осмотр полов — трещины, сколы, ямы</li>
              <li>Контроль вентиляции — фильтры, решётки, работа вентиляторов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Зимние работы
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Уборка снега с кровли</strong> — при превышении расчётной нагрузки (для III снегового района — более 180 кг/м²)</li>
              <li><strong>Контроль сосулек</strong> — удаление наледи с карнизов</li>
              <li><strong>Очистка подъездных путей</strong> — для работы техники</li>
              <li><strong>Контроль температурного режима</strong> — не допускать промерзания коммуникаций</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типичные неисправности и их устранение
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Проблема</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Причина</th>
                    <th className="text-left py-3 font-semibold text-foreground">Решение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Протечка кровли</td>
                    <td className="py-3 pr-4">Разбухшие ЭПДМ-шайбы, сдвиг панелей</td>
                    <td className="py-3">Замена крепежа, герметик</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Конденсат на стенах</td>
                    <td className="py-3 pr-4">Нарушение пароизоляции</td>
                    <td className="py-3">Локальный ремонт плёнки</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Заедание ворот</td>
                    <td className="py-3 pr-4">Перекос направляющих, износ роликов</td>
                    <td className="py-3">Регулировка, замена роликов</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Локальная коррозия</td>
                    <td className="py-3 pr-4">Механическое повреждение оцинковки</td>
                    <td className="py-3">Зачистка + цинконаполненный грунт</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Вибрация кровли при ветре</td>
                    <td className="py-3 pr-4">Ослабший крепёж листов</td>
                    <td className="py-3">Подтяжка/замена саморезов</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость обслуживания
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Среднегодовые затраты на обслуживание ангара 1000 м²:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Плановые осмотры (2 раза/год): 30–50 тыс. ₽</li>
              <li>Текущий ремонт кровли: 20–80 тыс. ₽</li>
              <li>Обслуживание ворот: 15–30 тыс. ₽</li>
              <li>Уборка снега (при необходимости): 20–50 тыс. ₽</li>
              <li>Обслуживание инженерных систем: 50–100 тыс. ₽</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Итого: 135–310 тыс. ₽/год, или 1–2 % от стоимости здания. Это в 5–10 раз дешевле, чем устранение последствий аварий.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Регулярное обслуживание — это не расходы, а защита инвестиции. Два сезонных осмотра в год, ежемесячный визуальный контроль и своевременная уборка снега с кровли — минимум, который обеспечивает беспроблемную эксплуатацию ангара 30–50 лет.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары и предоставляем рекомендации по эксплуатации. Каждый объект сдаётся с паспортом здания и регламентом обслуживания.
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
                <Link href="/articles/strahovanie-angara/" className="text-accent-blue hover:underline">
                  Страхование ангара и склада — риски и стоимость
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
