import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сроки строительства ангара из металлоконструкций: от проекта до сдачи | МАКСТИЛ",
  description:
    "Сколько времени занимает строительство ангара из ЛСТК: этапы, реальные сроки каждого, что влияет на скорость и как ускорить процесс без потери качества.",
  keywords: [
    "сроки строительства ангара",
    "как долго строится ангар",
    "сроки монтажа металлоконструкций",
    "быстровозводимое здание сроки",
    "сколько строится склад из металлоконструкций",
    "этапы строительства ангара",
  ],
  openGraph: {
    title: "Сроки строительства ангара из металлоконструкций: от проекта до сдачи",
    description:
      "Реальные сроки каждого этапа строительства ангара из ЛСТК и что на них влияет.",
    url: "https://lstkmk.ru/articles/sroki-stroitelstva-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/sroki-stroitelstva-angara/",
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
              Строительство
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Сроки строительства ангара: реальные цифры по этапам
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>4 июня 2026</span>
              <span>•</span>
              <span>6 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              «Быстровозводимое» — не маркетинговый термин. Ангар из ЛСТК площадью 500 м² реально строится за 6–10 недель от договора до ключей. Разбираем, из чего складываются эти сроки и что может их сдвинуть.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сводная таблица этапов
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этап</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Срок</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что происходит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Проектирование</td>
                    <td className="py-3 pr-4 whitespace-nowrap">7–14 дней</td>
                    <td className="py-3">Разработка КМ, КМД, согласование с заказчиком</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Производство</td>
                    <td className="py-3 pr-4 whitespace-nowrap">14–21 день</td>
                    <td className="py-3">Изготовление профилей и конструкций на заводе</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Фундамент</td>
                    <td className="py-3 pr-4 whitespace-nowrap">14–28 дней</td>
                    <td className="py-3">Земляные работы, бетонирование, набор прочности</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Монтаж каркаса</td>
                    <td className="py-3 pr-4 whitespace-nowrap">5–10 дней</td>
                    <td className="py-3">Сборка колонн, ферм, прогонов, связей</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Кровля и стены</td>
                    <td className="py-3 pr-4 whitespace-nowrap">7–14 дней</td>
                    <td className="py-3">Монтаж сэндвич-панелей или профнастила</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Инженерия и отделка</td>
                    <td className="py-3 pr-4 whitespace-nowrap">7–21 день</td>
                    <td className="py-3">Электрика, ворота, водосток, освещение</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Итого для объекта 500 м²: 6–10 недель.</strong> Для 1000–2000 м² — 10–16 недель. Параллельное ведение этапов (фундамент + производство одновременно) сокращает общий срок на 2–3 недели.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 1: Проектирование — 7–14 дней
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              После подписания договора инженеры разрабатывают конструктивные чертежи КМ (конструкции металлические) и КМД (конструкции металлические деталировочные). На этом этапе рассчитываются все нагрузки, подбираются сечения профилей, проектируются узлы соединений.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Скорость зависит от сложности объекта и скорости согласования с заказчиком. Типовые прямоугольные здания без антресолей и кранового оборудования проектируются за 5–7 дней.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 2: Производство — 14–21 день
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Параллельно с проектированием фундамента завод запускает производство. Стальная лента профилируется, нарезается в размер, маркируется и комплектуется. Крупные узловые элементы (базы колонн, опорные плиты) изготавливаются из листового металла.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Важно:</strong> производство можно начать сразу после утверждения проекта, не дожидаясь готовности фундамента. Это ключевой способ сократить общий срок.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 3: Фундамент — 14–28 дней
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Самый непредсказуемый по срокам этап — из-за погоды и грунта. Бетон набирает 70% прочности за 7–10 дней при температуре +15°C и выше, полную прочность — за 28 дней. На практике монтаж каркаса начинают после достижения 70% прочности.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Зима:</strong> при правильном зимнем бетонировании с прогревом сроки увеличиваются на 3–5 дней, но строить фундамент зимой вполне реально.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 4: Монтаж каркаса — 5–10 дней
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Это самый быстрый этап и главное преимущество ЛСТК. Бригада из 4–6 монтажников собирает каркас здания 500 м² за неделю. Все соединения болтовые — сварка на площадке не применяется, что ускоряет работу и снижает требования к погоде.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Монтаж ведётся в строгой последовательности по монтажной схеме: сначала крайние рамы, затем промежуточные, прогоны, связи. Каждый элемент пронумерован и занимает своё место.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что замедляет строительство
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Долгое согласование проекта</strong> — каждый цикл правок добавляет 3–5 дней</li>
              <li><strong>Неподготовленная площадка</strong> — отсутствие подъездных путей, захламлённость</li>
              <li><strong>Изменения в процессе</strong> — добавление проёмов, ворот, изменение высоты стен</li>
              <li><strong>Сезон дождей и морозы</strong> — влияют на земляные работы и бетонирование</li>
              <li><strong>Задержка оплаты</strong> — останавливает производство и закупку материалов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как ускорить строительство
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Утвердить проект быстро и не менять габариты после запуска производства</li>
              <li>Запустить фундамент и производство параллельно сразу после подписания договора</li>
              <li>Подготовить площадку заранее: планировка, подъездные пути, электроснабжение</li>
              <li>Выбрать фундамент из винтовых свай, если позволяют нагрузки — монтаж за 1–2 дня</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Вывод
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар из ЛСТК строится в 2–4 раза быстрее кирпичного или монолитного здания аналогичной площади. Реальный срок от договора до ввода в эксплуатацию — 6–12 недель в зависимости от размера, типа фундамента и сезона. Ключ к скорости — параллельное ведение этапов и своевременное принятие решений на стороне заказчика.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Нужен ангар в сжатые сроки?
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит быстровозводимые здания под ключ. Скажите нам размеры и назначение — получите сроки и расчёт стоимости в течение дня.
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
