import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сэндвич-панели: обзор материалов и толщин | МАКСТИЛ",
  description:
    "Сравнение наполнителей сэндвич-панелей: минвата, ПИР, пенополистирол. Рекомендуемые толщины для разных климатических зон. Советы по выбору от МАКСТИЛ.",
  keywords: [
    "сэндвич-панели утепление",
    "минеральная вата панели",
    "ПИР панели преимущества",
    "толщина сэндвич-панелей",
    "утепление ангара панели",
    "выбор сэндвич-панелей",
  ],
  openGraph: {
    title: "Сэндвич-панели: обзор материалов и толщин",
    description: "Как выбрать сэндвич-панели для быстровозводимого здания",
    url: "https://lstkmk.ru/articles/sendvich-paneli-obzor/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/sendvich-paneli-obzor/",
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
              Материалы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Сэндвич-панели: обзор материалов и толщин
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>2 мая 2026</span>
              <span>•</span>
              <span>6 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Сэндвич-панели — стандарт утепления быстровозводимых зданий. Разбираем типы наполнителей, толщины и применение для разных климатических зон.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Строение сэндвич-панели
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Трёхслойная конструкция: два листа оцинкованной стали толщиной 0,4–0,7 мм с полимерным покрытием (полиэстер, пурал, пластизол) и утеплитель между ними. Панели соединяются замком «шип-паз», обеспечивающим герметичность и несущую способность.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы утеплителей: сравнение
            </h2>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Минеральная вата (базальтовая)</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Плотность: 100–140 кг/м³</li>
                <li>Теплопроводность: 0,038–0,045 Вт/(м·К)</li>
                <li>Пожарная безопасность: НГ (негорючий)</li>
                <li>Температурный режим: -60…+700°C</li>
              </ul>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> производственных цехов, складов с повышенной пожарной безопасностью, зданий с высокими требованиями к звукоизоляции.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Пенополиизоцианурат (ПИР)</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Плотность: 35–45 кг/м³</li>
                <li>Теплопроводность: 0,021–0,024 Вт/(м·К) — лучший показатель</li>
                <li>Пожарная безопасность: Г1 (слабогорючий)</li>
                <li>Температурный режим: -100…+120°C</li>
              </ul>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> холодильных камер, овощехранилищ, энергоэффективных зданий. Минимальная толщина при максимальном утеплении.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Пенополистирол (ППС/ППУ)</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Плотность: 15–25 кг/м³</li>
                <li>Теплопроводность: 0,036–0,041 Вт/(м·К)</li>
                <li>Пожарная безопасность: Г3 (горючий, с трудом)</li>
                <li>Температурный режим: -50…+80°C</li>
              </ul>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> торговых павильонов, временных сооружений, зданий с невысокими требованиями к пожарной безопасности. Самый бюджетный вариант.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Рекомендуемые толщины по регионам
            </h2>

            <table className="w-full text-left border-collapse mb-8">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-semibold text-foreground">Регион</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Склад/ангар</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Производство</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Холодильник</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Юг (Краснодар, Ростов)</td>
                  <td className="py-3 px-4">80–100 мм</td>
                  <td className="py-3 px-4">100–120 мм</td>
                  <td className="py-3 px-4">120–150 мм ПИР</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Центр (Москва, Воронеж)</td>
                  <td className="py-3 px-4">100–120 мм</td>
                  <td className="py-3 px-4">120–150 мм</td>
                  <td className="py-3 px-4">150–200 мм ПИР</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Север (СПб, Архангельск)</td>
                  <td className="py-3 px-4">120–150 мм</td>
                  <td className="py-3 px-4">150–200 мм</td>
                  <td className="py-3 px-4">200–250 мм ПИР</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Сибирь/Урал</td>
                  <td className="py-3 px-4">150–200 мм</td>
                  <td className="py-3 px-4">150–200 мм</td>
                  <td className="py-3 px-4">200–300 мм ПИР</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Покрытия металла: что выбрать?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Полиэстер (25 мкм):</strong> Стандартное покрытие, 10–15 лет службы, бюджетный вариант.</li>
              <li><strong>Пурал (50 мкм):</strong> Устойчивость к агрессивным средам, 20–30 лет службы, для промышленности.</li>
              <li><strong>Пластизол (200 мкм):</strong> Максимальная защита, текстурная поверхность, 30–40 лет службы, премиум-сегмент.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Монтаж: важные нюансы
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Сэндвич-панели монтируются на готовый каркас (ЛСТК или горячекатаный). Крепление — саморезы по металлу с пресс-шайбой через каждые 40–50 см. Обязательно использование <strong>уплотнительной ленты</strong> в замках для герметичности.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Оконные и дверные проёмы обрамляются доборными элементами — откосами, отливами, козырьками из того же материала, что и панели.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Вывод
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для большинства промышленных зданий в центральной России оптимальны <strong>минеральные панели 100–150 мм</strong> с покрытием полиэстер или пурал. Для холодильных камер — <strong>ПИР 150–200 мм</strong>. Бюджетные объекты можно строить из ППС, но с ограничениями по пожарной безопасности.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Подберём оптимальные панели для вашего объекта
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ работает с ведущими производителями сэндвич-панелей. Поможем выбрать материал под ваш бюджет и требования.
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
        </article>
      </main>
    </div>
  );
}
