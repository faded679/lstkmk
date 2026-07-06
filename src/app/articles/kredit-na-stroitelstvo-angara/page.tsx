import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Строительство ангара в кредит — программы и условия 2026 | МАКСТИЛ",
  description:
    "Кредит на строительство ангара в 2026: банковские программы, условия, ставки, залог. Как получить финансирование на быстровозводимое здание из ЛСТК.",
  keywords: [
    "кредит на строительство ангара",
    "ангар в кредит",
    "финансирование строительства ангара",
    "кредит на склад",
    "кредит для бизнеса строительство",
  ],
  openGraph: {
    title: "Строительство ангара в кредит — программы и условия 2026",
    description:
      "Обзор кредитных программ для строительства ангаров и складов в 2026 году.",
    url: "https://lstkmk.ru/articles/kredit-na-stroitelstvo-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/kredit-na-stroitelstvo-angara/",
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
              Строительство ангара в кредит — программы и условия 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Ангар стоимостью 5–30 млн ₽ — серьёзная инвестиция для малого и среднего бизнеса. Далеко не всегда есть свободные оборотные средства. Разбираем, какие кредитные программы доступны в 2026 году, как подготовить документы и на что обратить внимание при выборе банка.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какие банки кредитуют строительство ангаров
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Не каждый банк работает с коммерческой недвижимостью. Основные игроки в сегменте:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Сбербанк</strong> — программа «Коммерческая недвижимость» для ИП и юрлиц</li>
              <li><strong>Россельхозбанк</strong> — специализированные продукты для АПК, сниженная ставка</li>
              <li><strong>ВТБ</strong> — кредиты на инвестиционные цели для МСП</li>
              <li><strong>Альфа-Банк</strong> — экспресс-кредиты до 30 млн ₽ без залога имущества</li>
              <li><strong>МСП Банк</strong> — программы с гарантией Корпорации МСП</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типовые условия кредитования в 2026 году
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 font-semibold text-foreground">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сумма</td>
                    <td className="py-3">от 1 до 100 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Срок</td>
                    <td className="py-3">3–10 лет</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ставка</td>
                    <td className="py-3">от 14,5 % годовых (зависит от залога и истории)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Первоначальный взнос</td>
                    <td className="py-3">10–30 % от стоимости проекта</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Залог</td>
                    <td className="py-3">Строящийся объект, земля, оборудование</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Отсрочка платежа</td>
                    <td className="py-3">3–12 мес. на период строительства</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Программы с господдержкой
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В 2026 году действуют несколько механизмов снижения ставки:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Программа 1764</strong> — субсидирование ставки для МСП приоритетных отраслей (АПК, производство). Ставка снижается на 2–3 п.п.</li>
              <li><strong>Гарантия Корпорации МСП</strong> — покрывает до 70 % суммы кредита, позволяет обойтись без твёрдого залога</li>
              <li><strong>Программа Минсельхоза</strong> — льготные кредиты для сельхозтоваропроизводителей по ставке до 5 %</li>
              <li><strong>Региональные фонды</strong> — в Белгородской области действует Фонд поддержки МСП с поручительствами</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какие документы нужны
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Стандартный пакет для юрлица или ИП:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Учредительные документы (устав, ОГРН, ИНН)</li>
              <li>Финансовая отчётность за 2 последних года</li>
              <li>Бизнес-план или ТЭО проекта строительства</li>
              <li>Проектно-сметная документация на ангар</li>
              <li>Документы на земельный участок (собственность или аренда)</li>
              <li>Договор с подрядчиком (или коммерческое предложение)</li>
              <li>Справка об отсутствии задолженности по налогам</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как повысить шансы на одобрение
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Предоставить залог:</strong> земля под строительство или существующая недвижимость — самый весомый аргумент</li>
              <li><strong>Показать выручку:</strong> стабильный оборот за 12+ месяцев упрощает одобрение</li>
              <li><strong>Подготовить ПСД:</strong> наличие проекта и сметы от профильной компании демонстрирует серьёзность</li>
              <li><strong>Использовать поручительство фонда:</strong> снижает требования к собственному залогу</li>
              <li><strong>Внести аванс подрядчику:</strong> 10–20 % из собственных средств повышает доверие банка</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Особенности залога строящегося ангара
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Банки принимают в залог объект незавершённого строительства при соблюдении условий:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Земельный участок в собственности или долгосрочной аренде (5+ лет)</li>
              <li>Наличие разрешения на строительство (или уведомления для некапитальных объектов)</li>
              <li>Поэтапное финансирование: банк выделяет транши по мере готовности</li>
              <li>Страхование объекта на период строительства</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              После завершения строительства и постановки на кадастровый учёт объект переоформляется в полноценный залог недвижимости.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Альтернативы банковскому кредиту
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Лизинг:</strong> подходит для модульных и разборных ангаров — объект на балансе лизингодателя</li>
              <li><strong>Рассрочка от подрядчика:</strong> некоторые строительные компании предлагают оплату в 3–6 этапов</li>
              <li><strong>Факторинг:</strong> если ангар строится под конкретного арендатора — можно уступить будущие платежи</li>
              <li><strong>Грант:</strong> для сельхозпроизводителей — до 5 млн ₽ на возведение складов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пример расчёта кредита
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ангар 24×60 м, стоимость под ключ — 12 млн ₽. Условия: первоначальный взнос 20 %, ставка 16 %, срок 7 лет.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Сумма кредита: 9,6 млн ₽</li>
              <li>Ежемесячный платёж (аннуитет): ~178 тыс. ₽</li>
              <li>Переплата за 7 лет: ~5,3 млн ₽</li>
              <li>Итоговая стоимость с учётом кредита: ~17,3 млн ₽</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              При использовании льготной программы (ставка 10 %) платёж снижается до ~155 тыс. ₽, переплата — до 3,4 млн ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Кредит на строительство ангара — рабочий инструмент для бизнеса, который не хочет замораживать оборотный капитал. Ключевое — подготовить качественную проектно-сметную документацию и выбрать программу с минимальной ставкой. Для сельхозпроизводителей доступны ставки от 5 %, для остального бизнеса — от 14,5 % с возможностью субсидирования.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Подготовим проектно-сметную документацию для банка, поможем с подбором кредитной программы. Строим ангары и склады под ключ — от фундамента до ворот.
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
                <Link href="/articles/gospodderzhka-stroitelstva-angarov/" className="text-accent-blue hover:underline">
                  Господдержка строительства ангаров — субсидии и гранты для фермеров
                </Link>
              </li>
              <li>
                <Link href="/articles/lizing-oborudovaniya-dlya-angara/" className="text-accent-blue hover:underline">
                  Лизинг оборудования для ангара — краны, вентиляция, стеллажи
                </Link>
              </li>
              <li>
                <Link href="/articles/arenda-ili-stroitelstvo-angara/" className="text-accent-blue hover:underline">
                  Аренда или строительство ангара — что выгоднее для бизнеса
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
