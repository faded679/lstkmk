import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Аренда или строительство ангара — что выгоднее для бизнеса | МАКСТИЛ",
  description:
    "Аренда склада vs строительство ангара: сравнение затрат на 5, 10, 15 лет. Когда выгоднее строить, а когда арендовать. Расчёт окупаемости.",
  keywords: [
    "аренда ангара или строительство",
    "аренда склада vs строительство",
    "что выгоднее ангар или аренда",
    "окупаемость строительства ангара",
    "стоимость аренды склада",
  ],
  openGraph: {
    title: "Аренда или строительство ангара — что выгоднее для бизнеса",
    description:
      "Финансовое сравнение аренды склада и строительства собственного ангара.",
    url: "https://lstkmk.ru/articles/arenda-ili-stroitelstvo-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/arenda-ili-stroitelstvo-angara/",
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
              Аренда или строительство ангара — что выгоднее для бизнеса
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Бизнесу нужен склад или производственное помещение. Арендовать быстро, но деньги уходят безвозвратно. Строить — капиталоёмко, зато актив остаётся в собственности. Считаем на конкретных цифрах 2026 года, когда каждый вариант выгоднее.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Исходные данные для расчёта
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовой объект: утеплённый склад 1000 м², регион — ЦФО.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Аренда</th>
                    <th className="text-left py-3 font-semibold text-foreground">Строительство</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Площадь</td>
                    <td className="py-3 pr-4">1000 м²</td>
                    <td className="py-3">1000 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Начальные затраты</td>
                    <td className="py-3 pr-4">Депозит 1–2 мес.</td>
                    <td className="py-3">15 млн ₽ (под ключ)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ежемесячные расходы</td>
                    <td className="py-3 pr-4">500–700 ₽/м² = 500–700 тыс. ₽</td>
                    <td className="py-3">Обслуживание ~25 тыс. ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Рост ставки/год</td>
                    <td className="py-3 pr-4">5–10 %</td>
                    <td className="py-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт затрат на горизонте 5, 10, 15 лет
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ставка аренды: 600 ₽/м² (средняя по ЦФО для утеплённых складов), индексация 7 %/год.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Горизонт</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Аренда (накопл.)</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Строительство (затраты)</th>
                    <th className="text-left py-3 font-semibold text-foreground">Разница</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">5 лет</td>
                    <td className="py-3 pr-4">41,5 млн ₽</td>
                    <td className="py-3 pr-4">16,5 млн ₽</td>
                    <td className="py-3 text-green-600 font-medium">Экономия 25 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">10 лет</td>
                    <td className="py-3 pr-4">101 млн ₽</td>
                    <td className="py-3 pr-4">18 млн ₽</td>
                    <td className="py-3 text-green-600 font-medium">Экономия 83 млн ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">15 лет</td>
                    <td className="py-3 pr-4">185 млн ₽</td>
                    <td className="py-3 pr-4">19,5 млн ₽</td>
                    <td className="py-3 text-green-600 font-medium">Экономия 165 млн ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              При строительстве в кредит (ставка 16 %, 7 лет) общие затраты вырастут до ~22 млн ₽ — всё равно в 2 раза дешевле аренды за тот же период.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда строительство выгоднее
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Горизонт планирования 3+ лет:</strong> за 2,5–3 года аренда «съедает» стоимость нового ангара</li>
              <li><strong>Стабильный бизнес:</strong> не планируете переезд или закрытие</li>
              <li><strong>Есть земля:</strong> участок в собственности или долгосрочной аренде</li>
              <li><strong>Нужна специфическая планировка:</strong> нестандартная высота, кран-балка, температурный режим</li>
              <li><strong>Объект как актив:</strong> можно заложить, сдать часть в субаренду, продать</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда аренда оправдана
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Стартап / тестирование рынка:</strong> не уверены в объёмах — лучше не вкладывать в стройку</li>
              <li><strong>Сезонный бизнес:</strong> нужен склад только 3–4 месяца в году</li>
              <li><strong>Нет свободных средств и не хотите кредит:</strong> аренда не требует крупных вложений</li>
              <li><strong>Потребность в локации:</strong> нужен склад именно в этом районе города, а земли нет</li>
              <li><strong>Быстрый старт:</strong> арендовать можно за неделю, построить — за 3–6 месяцев</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Скрытые расходы аренды
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Реальная стоимость аренды всегда выше ставки:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Коммунальные платежи: +100–200 ₽/м²/мес.</li>
              <li>Охрана и эксплуатация: +50–100 ₽/м²/мес.</li>
              <li>Ремонт и адаптация под свои нужды (за свой счёт)</li>
              <li>Ежегодная индексация 5–10 % (за 10 лет ставка удваивается)</li>
              <li>Риск расторжения — арендодатель может не продлить договор</li>
              <li>Невозможность модернизации без согласия собственника</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Скрытые расходы строительства
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Подключение к сетям (электричество, газ, вода): 0,5–3 млн ₽</li>
              <li>Благоустройство территории, подъезды: 0,3–1 млн ₽</li>
              <li>Проектная документация: 300–800 тыс. ₽</li>
              <li>Налог на имущество и землю: 50–200 тыс. ₽/год</li>
              <li>Обслуживание здания: 100–300 тыс. ₽/год</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Комбинированные варианты
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Build-to-suit:</strong> инвестор строит под ваши требования, вы арендуете на 10–15 лет по фиксированной ставке</li>
              <li><strong>Аренда с правом выкупа:</strong> часть арендных платежей идёт в счёт стоимости</li>
              <li><strong>Строительство + субаренда:</strong> построить больше, чем нужно, и сдать часть площадей</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Чек-лист для принятия решения
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Определите горизонт — сколько лет нужен склад?</li>
              <li>Посчитайте аренду за этот срок с индексацией</li>
              <li>Получите смету на строительство (запросите у 2–3 подрядчиков)</li>
              <li>Добавьте к стоимости строительства: сети, проект, благоустройство</li>
              <li>Сравните. Если строительство &lt; аренды за тот же срок — стройте</li>
              <li>Учтите нематериальные факторы: контроль, модернизация, актив</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              При горизонте 3+ лет строительство ангара практически всегда дешевле аренды — особенно с учётом индексации и скрытых расходов. Ангар из ЛСТК строится за 2–4 месяца и окупается за 2–3 года относительно арендных платежей. Аренда оправдана только для краткосрочных задач или при отсутствии земельного участка.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Рассчитаем стоимость строительства ангара под ваши задачи. Сравним с арендой в вашем регионе — покажем цифры.
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
                <Link href="/articles/nalog-na-angar/" className="text-accent-blue hover:underline">
                  Налог на ангар и производственное здание — что платить в 2026
                </Link>
              </li>
              <li>
                <Link href="/articles/oformlenie-angara-v-sobstvennost/" className="text-accent-blue hover:underline">
                  Оформление ангара в собственность — кадастровый учёт и регистрация
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
