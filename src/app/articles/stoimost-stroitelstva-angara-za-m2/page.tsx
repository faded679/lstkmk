import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Стоимость строительства ангара за м² в 2026 году: цены и расчёт | МАКСТИЛ",
  description:
    "Сколько стоит построить ангар за м² в 2026 году. Цены на холодный и тёплый ангар, склад, цех под ключ. Из чего складывается стоимость и как сэкономить без потери качества.",
  keywords: [
    "стоимость строительства ангара за м2",
    "цена ангара за квадратный метр",
    "сколько стоит построить ангар",
    "ангар под ключ цена",
    "стоимость металлоконструкций за м2",
    "цена склада из ЛСТК",
    "расчёт стоимости ангара",
  ],
  openGraph: {
    title: "Стоимость строительства ангара за м² в 2026 году",
    description:
      "Реальные цены на ангары и склады под ключ. Как формируется стоимость м² и где можно сэкономить.",
    url: "https://lstkmk.ru/articles/stoimost-stroitelstva-angara-za-m2/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/stoimost-stroitelstva-angara-za-m2/",
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
              Стоимость
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Стоимость строительства ангара за м² в 2026 году
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>15 июня 2026</span>
              <span>•</span>
              <span>10 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Главный вопрос заказчика — сколько будет стоить ангар. Разбираем актуальные цены за квадратный метр в 2026 году, из чего складывается стоимость, какие статьи можно оптимизировать, а где экономия обернётся проблемами при эксплуатации.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит ангар за м² — диапазон цен 2026
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цена квадратного метра ангара под ключ напрямую зависит от назначения здания и уровня утепления. Ниже — диапазоны, на которые стоит ориентироваться при первичной оценке бюджета.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип здания</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена за м², ₽</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что входит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный ангар (профнастил)</td>
                    <td className="py-3 pr-4 font-medium">от 14 000</td>
                    <td className="py-3">Каркас, ограждение, кровля</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Тёплый склад (сэндвич 100 мм)</td>
                    <td className="py-3 pr-4 font-medium">от 22 000</td>
                    <td className="py-3">Каркас, утепление, ворота</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Производственный цех</td>
                    <td className="py-3 pr-4 font-medium">от 28 000</td>
                    <td className="py-3">Усиленный каркас, краны, инженерия</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Автосервис, СТО</td>
                    <td className="py-3 pr-4 font-medium">от 26 000</td>
                    <td className="py-3">Тёплый контур, ворота, полы</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Сельхозангар</td>
                    <td className="py-3 pr-4 font-medium">от 12 000</td>
                    <td className="py-3">Каркас, кровля, ограждение</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Цены указаны без учёта фундамента, инженерных сетей и НДС. Финальная стоимость рассчитывается после геологии участка и согласования архитектурных решений.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Из чего складывается стоимость м²
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Разложим средний ангар площадью 1000 м² по статьям затрат:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Металлокаркас</strong> — 35–45% бюджета</li>
              <li><strong>Ограждающие конструкции</strong> (сэндвич, профнастил) — 20–30%</li>
              <li><strong>Фундамент</strong> — 10–18%</li>
              <li><strong>Монтаж</strong> — 12–18%</li>
              <li><strong>Проектирование и согласование</strong> — 3–7%</li>
              <li><strong>Доставка и логистика</strong> — 2–5%</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              На стоимость каркаса сильнее всего влияют пролёт, высота до низа фермы и снеговой район. Здание с пролётом 30 м обойдётся на 20–30% дороже, чем с пролётом 18 м той же площади.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что увеличивает стоимость
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Большие пролёты без промежуточных колонн (от 24 м)</li>
              <li>Высокий снеговой район (V–VII по СП 20.13330)</li>
              <li>Кран-балки и мостовые краны</li>
              <li>Слабые грунты и необходимость свайного фундамента</li>
              <li>Огнезащитные покрытия выше R45</li>
              <li>Утеплитель толщиной 150–200 мм для отопления</li>
              <li>Сложная архитектура: углы, выступы, мансардные участки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Где можно сэкономить без потери качества
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Не вся экономия одинаково безопасна. Условно безопасные пути снижения сметы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Выбрать типовой шаг колонн 6 м вместо 9–12 м</li>
              <li>Заказать одноэтапный монтаж в сезон (апрель–октябрь)</li>
              <li>Использовать сэндвич-панели меньшей толщины для неотапливаемых помещений</li>
              <li>Применить ленточный фундамент мелкого заложения вместо плиты</li>
              <li>Сразу заложить очередь расширения — потом достроить дешевле, чем переделать</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              А вот опасная экономия — снижение класса стали, отказ от антикоррозийной обработки, упрощение фундамента вопреки геологии. Такие решения сократят смету на 5–10%, но через 3–5 лет потребуют ремонта стоимостью в треть от изначального бюджета.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как формируется коммерческое предложение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Корректное КП должно разделять стоимость по разделам: каркас, ограждение, кровля, фундамент, монтаж, проектирование. Если подрядчик присылает одну строку «ангар под ключ — Х рублей», это повод задавать вопросы. В сметах без детализации часто прячут наценки 15–25%.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Для расчёта точной стоимости нужны: габариты (длина × ширина × высота), регион строительства, тип эксплуатации (отапливаемое или нет), наличие крановых нагрузок и характер грунтов на участке.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда цены отличаются в 2 раза
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Если два подрядчика дают цены, отличающиеся вдвое — это не «удача», а разница в комплектации. Дешёвое предложение почти всегда не включает: фундамент, ворота, кровельный пирог нужной толщины, проект КМ/КМД, монтаж. Сравнивайте сметы построчно, а не итоговые цифры.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В 2026 году стартовая цена холодного ангара начинается от 4 500 ₽/м², тёплого склада / производственного цеха — от 5 600 ₽/м². Реальная стоимость определяется проектом и геологией. Лучший способ получить точную цифру — заказать предварительный расчёт по техническому заданию: это бесплатно и занимает 1–2 рабочих дня. Актуальные расценки на полный цикл строительства собраны на странице <Link href="/angar-pod-klyuch-cena/" className="text-accent-blue hover:underline">ангар под ключ цена за м²</Link>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Узнайте точную стоимость вашего ангара
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ предоставляет детализированный расчёт по разделам сметы. 14 лет опыта в строительстве из ЛСТК — поможем найти оптимальный баланс цена/качество.
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
