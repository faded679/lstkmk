import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Холодный или тёплый ангар: что выбрать и в чём разница | МАКСТИЛ",
  description:
    "Чем холодный ангар отличается от тёплого. Стоимость, особенности конструкции, расход на отопление, для какого бизнеса какой вариант подходит. Сравнительная таблица и рекомендации.",
  keywords: [
    "холодный или тёплый ангар",
    "разница холодный тёплый ангар",
    "тёплый ангар",
    "холодный ангар",
    "ангар с отоплением",
    "неотапливаемый ангар",
    "ангар утеплённый цена",
  ],
  openGraph: {
    title: "Холодный или тёплый ангар: что выбрать",
    description:
      "Сравнение холодного и тёплого ангара по стоимости, эксплуатации и сферам применения.",
    url: "https://lstkmk.ru/articles/holodnyj-ili-tyoplyj-angar/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/holodnyj-ili-tyoplyj-angar/",
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
              Советы заказчику
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Холодный или тёплый ангар: что выбрать
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>16 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              «Брать с утеплением или без?» — вопрос, который определяет 30–40% сметы и формирует расходы на эксплуатацию на годы вперёд. Разбираем, в чём принципиальная разница и какой ангар выбрать под ваши задачи.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              В чём принципиальная разница
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Холодный ангар</strong> — здание без теплоизоляции. Температура внутри отличается от уличной на 2–5 °C летом и совпадает с ней зимой. Стены и кровля — однослойные: профнастил, реже плёночные мембраны.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Тёплый ангар</strong> — здание с утеплённым ограждением, в котором поддерживается стабильный температурный режим круглый год. Стены и кровля — сэндвич-панели или многослойные системы с минватой/PIR.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнение по ключевым параметрам
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Холодный</th>
                    <th className="text-left py-3 font-semibold text-foreground">Тёплый</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стоимость м²</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">от 14 000 ₽</td>
                    <td className="py-3">от 22 000 ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Срок строительства</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">2–3 мес</td>
                    <td className="py-3">3–4 мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Расход на отопление</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3">от 150 ₽/м²/мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Конденсат на каркасе</td>
                    <td className="py-3 pr-4">Возможен</td>
                    <td className="py-3 text-green-600 font-medium">Нет</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Работа персонала зимой</td>
                    <td className="py-3 pr-4">Ограничена</td>
                    <td className="py-3 text-green-600 font-medium">Возможна</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Хранение чувствительных грузов</td>
                    <td className="py-3 pr-4">Невозможно</td>
                    <td className="py-3 text-green-600 font-medium">Возможно</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда выбирать холодный ангар
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Хранение стройматериалов, металла, шин, техники</li>
              <li>Навес для сельхозтехники, ангары для зерна сезонного хранения</li>
              <li>Транзитные склады, где нет постоянной работы людей</li>
              <li>Гаражи для большегрузной техники</li>
              <li>Закрытые площадки для производства, не требующего тепла</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Главное преимущество — стоимость м² ниже на 35–45%, а срок строительства короче. Главный минус — конденсат на холодном металле в межсезонье, что требует продуманной вентиляции.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда нужен тёплый ангар
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Постоянная работа персонала внутри (производство, СТО, торговля)</li>
              <li>Хранение продуктов, фармы, химии, электроники</li>
              <li>Цеха с точным оборудованием</li>
              <li>Распределительные центры с круглосуточной отгрузкой</li>
              <li>Спортивные залы, фитнес-центры</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Утеплённое здание удорожает смету, но снижает риски: товар не портится от перепадов влажности, оборудование служит дольше, а персонал может работать в любую погоду.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит отапливать ангар
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для тёплого ангара 1000 м² в средней полосе России отопительный сезон обходится в 1,5–2,5 млн ₽ при газе и 3–5 млн ₽ при электричестве. Расход зависит от высоты помещения, толщины утеплителя, кратности воздухообмена и герметичности ворот.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Сэндвич-панели 150 мм вместо 100 мм увеличивают смету на 7–10%, но экономят 20–25% на отоплении ежегодно. Окупаемость утолщения утеплителя — 4–6 лет.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Промежуточный вариант: «полутёплый» ангар
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Если бюджет на отопление полноценного тёплого ангара слишком велик, существует промежуточный вариант — здание с тонкой теплоизоляцией (50–80 мм) и поддержанием +5…+10 °C. Это вариант для складов, где важно избежать промерзания, но не нужны комфортные условия для работы.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как выбрать без ошибки
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Запомните три вопроса: будут ли люди постоянно работать внутри? чувствителен ли товар к температуре и влажности? планируется ли мокрая зачистка или мойка? Если хотя бы один ответ «да» — стройте тёплый. Если все «нет» — холодного достаточно.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Подберём оптимальный вариант под задачу
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит и холодные, и тёплые ангары. Рассчитаем оба варианта с детализацией по эксплуатационным расходам — выберете осознанно.
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
