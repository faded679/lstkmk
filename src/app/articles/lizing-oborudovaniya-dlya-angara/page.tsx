import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Лизинг оборудования для ангара — краны, вентиляция, стеллажи | МАКСТИЛ",
  description:
    "Лизинг оборудования для ангара: кран-балки, вентиляция, стеллажи, ворота. Условия лизинга 2026, расчёт платежей, преимущества перед кредитом.",
  keywords: [
    "лизинг оборудования для ангара",
    "лизинг кран-балки",
    "лизинг стеллажей",
    "лизинг вентиляции",
    "оборудование ангара в лизинг",
  ],
  openGraph: {
    title: "Лизинг оборудования для ангара — краны, вентиляция, стеллажи",
    description:
      "Какое оборудование для ангара можно взять в лизинг и на каких условиях.",
    url: "https://lstkmk.ru/articles/lizing-oborudovaniya-dlya-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/lizing-oborudovaniya-dlya-angara/",
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
              Лизинг оборудования для ангара — краны, вентиляция, стеллажи
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Построить ангар — полдела. Оснастить его кран-балкой, стеллажами, приточно-вытяжной вентиляцией и промышленными воротами стоит ещё 20–40 % от стоимости здания. Лизинг позволяет распределить эти затраты на 2–5 лет, сохранив оборотный капитал.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что можно взять в лизинг
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В лизинг передаётся любое оборудование, которое можно идентифицировать и поставить на баланс:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Категория</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Примеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Подъёмное оборудование</td>
                    <td className="py-3 pr-4">Кран-балка 3–10 т, тельфер, мостовой кран</td>
                    <td className="py-3">0,8 – 5 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Складское оборудование</td>
                    <td className="py-3 pr-4">Палетные стеллажи, мезонины, конвейеры</td>
                    <td className="py-3">1 – 15 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Вентиляция и климат</td>
                    <td className="py-3 pr-4">Приточно-вытяжные установки, чиллеры</td>
                    <td className="py-3">0,5 – 8 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ворота и докшелтеры</td>
                    <td className="py-3 pr-4">Секционные ворота, перегрузочные системы</td>
                    <td className="py-3">0,3 – 2 млн ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Энергетика</td>
                    <td className="py-3 pr-4">ДГУ, трансформаторы, ИБП</td>
                    <td className="py-3">1 – 10 млн ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как работает лизинг оборудования
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Схема финансового лизинга:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Вы выбираете оборудование и поставщика</li>
              <li>Лизинговая компания выкупает оборудование у поставщика</li>
              <li>Оборудование передаётся вам в пользование</li>
              <li>Вы платите ежемесячные лизинговые платежи 2–5 лет</li>
              <li>По окончании договора — выкуп по остаточной стоимости (1–10 %)</li>
            </ol>
            <p className="text-muted leading-relaxed mb-6">
              Оборудование числится на балансе лизингодателя или лизингополучателя — по договорённости. В первом случае вы не платите налог на имущество.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Условия лизинга в 2026 году
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
                    <td className="py-3 pr-4">Минимальная сумма</td>
                    <td className="py-3">от 500 тыс. ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Аванс</td>
                    <td className="py-3">10–30 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Срок</td>
                    <td className="py-3">12–60 месяцев</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Удорожание в год</td>
                    <td className="py-3">5–12 % (зависит от аванса и срока)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Решение по заявке</td>
                    <td className="py-3">1–3 рабочих дня</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Преимущества лизинга перед кредитом
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Ускоренная амортизация:</strong> коэффициент до 3 — оборудование списывается в 3 раза быстрее, снижая налог на прибыль</li>
              <li><strong>НДС к вычету:</strong> весь НДС с лизинговых платежей принимается к вычету</li>
              <li><strong>Нет залога:</strong> залогом выступает само лизинговое имущество</li>
              <li><strong>Гибкий график:</strong> сезонные платежи, отсрочки на пусконаладку</li>
              <li><strong>Проще одобрение:</strong> лизинговые компании лояльнее банков к молодому бизнесу</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пример расчёта: кран-балка 5 т
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Стоимость кран-балки г/п 5 т, пролёт 18 м — 1,8 млн ₽ с монтажом. Условия лизинга: аванс 20 %, срок 36 мес., удорожание 8 % в год.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Аванс: 360 тыс. ₽</li>
              <li>Сумма финансирования: 1 440 тыс. ₽</li>
              <li>Ежемесячный платёж: ~49 тыс. ₽</li>
              <li>Общая переплата: ~330 тыс. ₽</li>
              <li>Экономия на налогах (ускоренная амортизация + вычет НДС): ~280 тыс. ₽</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Фактическая переплата с учётом налоговой экономии — около 50 тыс. ₽ за 3 года рассрочки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Лизинг с господдержкой
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Для субъектов МСП доступны программы субсидирования лизинга:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Программа Минпромторга</strong> — субсидия на отечественное оборудование до 15 % стоимости</li>
              <li><strong>Региональные программы</strong> — компенсация первого взноса до 50 % (Белгородская область — до 500 тыс. ₽)</li>
              <li><strong>Фонд развития промышленности</strong> — льготные займы на российское оборудование по ставке 3–5 %</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              На что обратить внимание в договоре
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Кто страхует оборудование и за чей счёт</li>
              <li>Условия досрочного выкупа — есть ли штраф</li>
              <li>Балансодержатель — от этого зависит налог на имущество</li>
              <li>Что происходит при поломке — гарантийный случай vs ответственность лизингополучателя</li>
              <li>Выкупная стоимость — фиксирована ли она в договоре</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Лизинг оборудования — эффективный способ оснастить ангар без крупных единовременных затрат. Ускоренная амортизация и вычет НДС компенсируют бо́льшую часть переплаты. Для производственных компаний и складов это часто выгоднее, чем покупка за собственные средства.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары и поможем подобрать оборудование. Подскажем проверенные лизинговые компании и подготовим спецификации для заявки.
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
                <Link href="/articles/gospodderzhka-stroitelstva-angarov/" className="text-accent-blue hover:underline">
                  Господдержка строительства ангаров — субсидии и гранты для фермеров
                </Link>
              </li>
              <li>
                <Link href="/articles/kran-balka-v-angare/" className="text-accent-blue hover:underline">
                  Кран-балка в ангаре
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
