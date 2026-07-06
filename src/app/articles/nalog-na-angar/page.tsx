import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Налог на ангар и производственное здание — что платить в 2026 | МАКСТИЛ",
  description:
    "Налог на ангар в 2026 году: налог на имущество, земельный налог, ставки, льготы. Как рассчитать налоговую нагрузку на производственное здание из ЛСТК.",
  keywords: [
    "налог на ангар",
    "налог на недвижимость ангар",
    "налог на производственное здание",
    "налог на имущество склад",
    "налоги на коммерческую недвижимость",
  ],
  openGraph: {
    title: "Налог на ангар и производственное здание — что платить в 2026",
    description:
      "Расчёт налогов на ангар: имущество, земля, льготы и оптимизация.",
    url: "https://lstkmk.ru/articles/nalog-na-angar/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/nalog-na-angar/",
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
              Документы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Налог на ангар и производственное здание — что платить в 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Владелец ангара платит от 1 до 3 налогов в зависимости от системы налогообложения и статуса объекта. Суммы могут составлять от 30 до 500 тыс. ₽ в год. Разбираем, какие налоги начисляются и как их законно оптимизировать.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какие налоги платит владелец ангара
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Налог</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">База</th>
                    <th className="text-left py-3 font-semibold text-foreground">Ставка</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Налог на имущество организаций</td>
                    <td className="py-3 pr-4">Среднегодовая или кадастровая стоимость</td>
                    <td className="py-3">до 2,2 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Налог на имущество физлиц</td>
                    <td className="py-3 pr-4">Кадастровая стоимость</td>
                    <td className="py-3">0,1–0,5 %</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Земельный налог</td>
                    <td className="py-3 pr-4">Кадастровая стоимость участка</td>
                    <td className="py-3">до 1,5 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Налог на имущество для организаций (ОСНО)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Юрлица на общей системе платят налог на имущество по среднегодовой остаточной стоимости объекта. Ставка устанавливается регионом — в Белгородской области это 2,2 %.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Пример: ангар построен за 12 млн ₽, амортизация линейная на 30 лет. Через 5 лет остаточная стоимость — 10 млн ₽. Налог: 10 000 000 × 2,2 % = 220 000 ₽/год.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              По мере амортизации налог снижается. Через 15 лет: 6 000 000 × 2,2 % = 132 000 ₽/год.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Налог при УСН и ЕСХН
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              На упрощёнке и ЕСХН налог на имущество не платится, за исключением объектов, облагаемых по кадастровой стоимости. К ним относятся:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Торговые центры и помещения в них</li>
              <li>Офисные здания (по региональному перечню)</li>
              <li>Объекты общественного питания</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Производственные ангары, склады и сельхозобъекты в этот перечень не входят. Поэтому на УСН и ЕСХН налог на имущество за ангар = 0 ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Земельный налог
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Платится вне зависимости от системы налогообложения. Ставка зависит от категории земли:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Категория</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Ставка</th>
                    <th className="text-left py-3 font-semibold text-foreground">Пример</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сельхозназначение</td>
                    <td className="py-3 pr-4">до 0,3 %</td>
                    <td className="py-3">1 га, КС 500 тыс. → 1 500 ₽/год</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Промышленность</td>
                    <td className="py-3 pr-4">до 1,5 %</td>
                    <td className="py-3">0,5 га, КС 2 млн → 30 000 ₽/год</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Населённые пункты (промзона)</td>
                    <td className="py-3 pr-4">до 1,5 %</td>
                    <td className="py-3">0,3 га, КС 5 млн → 75 000 ₽/год</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Кадастровая стоимость ангара
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Кадастровая стоимость определяется при массовой оценке и может отличаться от рыночной. Типичная кадастровая стоимость ангаров в ЦФО:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Холодный ангар: 8 000 – 15 000 ₽/м²</li>
              <li>Утеплённый склад: 15 000 – 25 000 ₽/м²</li>
              <li>Производственное здание: 20 000 – 35 000 ₽/м²</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Если кадастровая стоимость завышена, её можно оспорить через комиссию при Росреестре или через суд. Экономия на налогах может составить 30–50 %.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Льготы и оптимизация
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>УСН/ЕСХН:</strong> освобождение от налога на имущество для производственных объектов</li>
              <li><strong>Лизинг:</strong> если ангар на балансе лизингодателя — налог платит он</li>
              <li><strong>Ускоренная амортизация:</strong> при лизинге с коэффициентом 3 остаточная стоимость быстро снижается</li>
              <li><strong>ОЭЗ и ТОСЭР:</strong> резиденты освобождены от налога на имущество на 5–10 лет</li>
              <li><strong>Инвестиционный вычет:</strong> ст. 286.1 НК — уменьшение налога на прибыль на стоимость основных средств</li>
              <li><strong>Некапитальный объект:</strong> если ангар не зарегистрирован как недвижимость — налог на имущество не начисляется</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что будет, если не оформлять ангар
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Незарегистрированный ангар на капитальном фундаменте — это риски:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Повышенный земельный налог: в 2 раза больше за участок без зарегистрированного здания (п. 15 ст. 396 НК)</li>
              <li>Невозможность продажи и залога</li>
              <li>Признание самовольной постройкой и снос по решению суда</li>
              <li>Штраф за неуплату налога на имущество: 20–40 % от суммы + пени</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для бизнеса на УСН или ЕСХН ангар — минимальная налоговая нагрузка: только земельный налог (1 500–75 000 ₽/год). На ОСНО добавляется налог на имущество 2,2 % от остаточной стоимости. Оптимизировать можно через лизинг, оспаривание кадастровой стоимости или статус резидента ОЭЗ.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары под ключ с документами для постановки на кадастровый учёт. Поможем выбрать конструктивное решение с учётом налоговых последствий.
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
                <Link href="/articles/oformlenie-angara-v-sobstvennost/" className="text-accent-blue hover:underline">
                  Оформление ангара в собственность — кадастровый учёт и регистрация
                </Link>
              </li>
              <li>
                <Link href="/articles/strahovanie-angara/" className="text-accent-blue hover:underline">
                  Страхование ангара и склада — риски и стоимость
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
