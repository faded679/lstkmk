import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Господдержка строительства ангаров — субсидии и гранты для фермеров | МАКСТИЛ",
  description:
    "Субсидии и гранты на строительство ангаров в 2026: программы Минсельхоза, региональные меры, условия получения. Как фермеру получить до 5 млн ₽.",
  keywords: [
    "субсидия на ангар",
    "господдержка фермеров строительство",
    "грант на ангар 2026",
    "субсидия на строительство склада",
    "грант начинающему фермеру",
  ],
  openGraph: {
    title: "Господдержка строительства ангаров — субсидии и гранты для фермеров",
    description:
      "Обзор программ государственной поддержки строительства сельхозобъектов в 2026.",
    url: "https://lstkmk.ru/articles/gospodderzhka-stroitelstva-angarov/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/gospodderzhka-stroitelstva-angarov/",
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
              Финансы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Господдержка строительства ангаров — субсидии и гранты для фермеров
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Государство компенсирует до 60 % затрат на строительство сельскохозяйственных объектов. Гранты, субсидии, льготные кредиты — разбираем все действующие программы 2026 года, условия участия и пошаговый порядок получения средств.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Основные программы господдержки
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Грант «Агростартап»
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Для начинающих фермеров, зарегистрированных как КФХ не более 24 месяцев назад.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Сумма: до 7 млн ₽ (животноводство) или до 5 млн ₽ (растениеводство)</li>
              <li>Софинансирование: не менее 10 % собственных средств</li>
              <li>Можно направить на строительство ангаров, зернохранилищ, коровников</li>
              <li>Обязательство: создать рабочие места (1 на каждые 2 млн ₽ гранта)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Грант на развитие семейной фермы
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Для действующих КФХ, работающих 12+ месяцев.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Сумма: до 30 млн ₽</li>
              <li>Софинансирование: не менее 40 % (из них до 20 % — заёмные)</li>
              <li>Строительство производственных зданий — приоритетное направление</li>
              <li>Срок освоения: 24 месяца</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Субсидия на возмещение капитальных затрат (CAPEX)
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Возмещение части затрат на строительство, введённых в эксплуатацию объектов АПК.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Компенсация: 20–50 % фактических затрат</li>
              <li>Распространяется на: молочные фермы, зернохранилища, картофелехранилища, теплицы</li>
              <li>Условие: объект должен быть построен и введён в эксплуатацию</li>
              <li>Подача: через региональный Минсельхоз</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              4. Льготный кредит Минсельхоза
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Кредит по ставке до 5 % годовых для сельхозтоваропроизводителей. Разницу между рыночной и льготной ставкой банку компенсирует государство. Суммы — до 600 млн ₽, срок — до 15 лет на строительство.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Региональные программы Белгородской области
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Субсидия на возмещение части затрат на строительство объектов АПК — до 30 % от стоимости</li>
              <li>Гарантии Фонда содействия МСП — поручительство до 70 % суммы кредита</li>
              <li>Микрозаймы на развитие — до 5 млн ₽ по ставке 3–5 % годовых</li>
              <li>Компенсация затрат на ПСД — до 500 тыс. ₽ на проектирование</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Кто может получить поддержку
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Требования отличаются по программам, но общие критерии:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Регистрация как сельхозтоваропроизводитель (КФХ, ИП, ООО с ОКВЭД 01.хх)</li>
              <li>Отсутствие задолженности по налогам и кредитам</li>
              <li>Наличие земельного участка (собственность или аренда на 5+ лет)</li>
              <li>Бизнес-план с обоснованием инвестиций</li>
              <li>Регистрация в РСХН (для ветеринарных объектов)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Порядок получения гранта — пошагово
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li><strong>Мониторинг:</strong> следить за объявлениями регионального Минсельхоза (сроки приёма — обычно февраль-апрель)</li>
              <li><strong>Подготовка документов:</strong> бизнес-план, проектно-сметная документация, правоустанавливающие документы на землю</li>
              <li><strong>Подача заявки:</strong> через портал «Госуслуги» или региональное министерство</li>
              <li><strong>Конкурсная комиссия:</strong> защита бизнес-плана перед экспертами (очно или онлайн)</li>
              <li><strong>Получение средств:</strong> на спецсчёт в течение 30 дней после одобрения</li>
              <li><strong>Освоение:</strong> строительство в срок 12–24 мес., отчётность ежеквартально</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Частые ошибки при подаче
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Некорректный ОКВЭД — для строительства ангара под зерно нужен 01.11, а не 41.20</li>
              <li>Завышенная смета — комиссия сравнивает с рыночными ценами, явное завышение = отказ</li>
              <li>Нет собственных средств на софинансирование — их нужно подтвердить выпиской</li>
              <li>Бизнес-план без расчёта окупаемости — формальные планы не проходят защиту</li>
              <li>Пропуск сроков подачи — приём длится 2–4 недели, опоздавших не рассматривают</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какой ангар можно построить на грант
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Грантовые средства разрешено направлять на:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Зернохранилища и овощехранилища</li>
              <li>Животноводческие фермы (коровники, птичники, свинарники)</li>
              <li>Склады для хранения техники и кормов</li>
              <li>Молочные блоки с доильным оборудованием</li>
              <li>Тепличные комплексы</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Господдержка реально снижает затраты на строительство ангара на 20–60 %. Главное — начать подготовку за 3–6 месяцев до конкурса: оформить документы на землю, получить проектно-сметную документацию и написать обоснованный бизнес-план. Программы обновляются ежегодно — актуальные условия уточняйте в региональном Минсельхозе.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Подготовим проектно-сметную документацию для заявки на грант. Строим сельхозобъекты по всей России — зернохранилища, коровники, склады.
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
                <Link href="/articles/kredit-na-stroitelstvo-angara/" className="text-accent-blue hover:underline">
                  Строительство ангара в кредит — программы и условия 2026
                </Link>
              </li>
              <li>
                <Link href="/articles/lizing-oborudovaniya-dlya-angara/" className="text-accent-blue hover:underline">
                  Лизинг оборудования для ангара — краны, вентиляция, стеллажи
                </Link>
              </li>
              <li>
                <Link href="/articles/zernohranilishche-iz-lstk/" className="text-accent-blue hover:underline">
                  Зернохранилище из ЛСТК: типы, проектирование, стоимость
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
