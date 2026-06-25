import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Промышленное здание из ЛСТК: цеха, производства, склады | МАКСТИЛ",
  description:
    "Строительство промышленных зданий из ЛСТК: производственные цеха, склады, мастерские. Пролёты 12–36 м, высота до 12 м, кран-балка. Цены и сроки 2026.",
  keywords: [
    "промышленное здание ЛСТК",
    "производственный цех из ЛСТК",
    "промышленное здание металлоконструкции",
    "цех из металла под ключ цена",
    "строительство промышленного здания",
    "производственный корпус ЛСТК",
  ],
  openGraph: {
    title: "Промышленное здание из ЛСТК: цены и сроки",
    description: "Производственные цеха и промышленные здания из ЛСТК. Пролёты до 36 м, кран-балка, цены 2026.",
    url: "https://lstkmk.ru/articles/promyshlennoe-zdanie-lstk/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/promyshlennoe-zdanie-lstk/" },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Промышленные объекты</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Промышленное здание из металлоконструкций: цехи, склады, производства
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Промышленное здание из металлоконструкций — стандарт отрасли для производственных цехов, складских комплексов и технических сооружений. Пролёты без промежуточных опор — до 36 м, высота — до 12 м, нагрузка на кровлю — под кран-балку грузоподъёмностью до 32 т. Стоимость от 8 000 ₽/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Классификация промышленных зданий</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Пролёт</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Высота до низа ферм</th>
                    <th className="text-left py-3 font-semibold text-foreground">Применение</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Лёгкие (без кран-балки)", "12–24 м", "5–8 м", "Склады, сборка, упаковка"],
                    ["Средние (к/б до 10 т)", "18–30 м", "8–10 м", "Механообработка, сварка"],
                    ["Тяжёлые (к/б 10–32 т)", "24–36 м", "10–12 м", "Тяжёлое машиностроение"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктивные схемы</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Рамно-стержневая схема</h3>
            <p className="text-muted leading-relaxed mb-4">
              Несущий каркас — поперечные рамы (колонны + ригели или фермы), объединённые продольными прогонами и связями. Наиболее распространённая схема для зданий пролётом 12–36 м. Рамы изготавливаются из горячекатаного двутавра: колонны HEB, ригели IPE или сварные двутавры переменного сечения.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Фермерная конструкция</h3>
            <p className="text-muted leading-relaxed mb-4">
              При пролётах более 24 м и требовании к высоте профиля применяются плоские или пространственные фермы. Фермы снижают расход металла на 20–30% по сравнению со сплошным ригелем, но сложнее в производстве и монтаже.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Кран-балка в промышленном здании</h2>
            <p className="text-muted leading-relaxed mb-4">
              Кран-балка — мостовой или однобалочный кран, передвигающийся по рельсам на консолях колонн. Конструктивные требования при наличии кран-балки:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Колонны — усиленного сечения, консоли под крановые рельсы</li>
              <li>Жёсткий диск кровли — горизонтальные связи, предотвращающие поперечные нагрузки от торможения крана</li>
              <li>Крановые рельсы — КР70 или КР80, крепление к подкрановым балкам через упругие прокладки</li>
              <li>Предельные горизонтальные деформации колонн: H/500 (без крана), H/400 (с краном до 10 т)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Ограждающие конструкции</h2>
            <p className="text-muted leading-relaxed mb-4">Варианты для производственного здания:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Сэндвич-панели 80–150 мм</strong> — быстро, хорошая теплоизоляция, не требует отделки</li>
              <li><strong>Профнастил с минватой</strong> — дешевле, но монтаж сложнее, стыки требуют тщательной герметизации</li>
              <li><strong>Газобетонные блоки + каркас</strong> — дороже, зато высокая огнестойкость</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас + кровля профнастил (холодный)", "от 5 500"],
                    ["Каркас + сэндвич-панели 80 мм (тёплый)", "от 8 000"],
                    ["С кран-балкой 5 т", "+ 1 500–2 500 к/м² пролёта"],
                    ["Полы (бетон В25 + топпинг)", "от 1 200 ₽/м² пола"],
                    ["Инженерные сети (базовые)", "от 1 500–2 000 ₽/м²"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Срок строительства</h2>
            <p className="text-muted leading-relaxed mb-6">
              Производственный цех 1 000 м² из металлоконструкций строится за 90–120 дней: проектирование — 3–4 недели, изготовление — 4–6 недель, монтаж — 3–4 недели. Для сравнения — кирпичное здание аналогичной площади строится 8–12 месяцев.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлокаркасное промышленное здание — оптимальный выбор для производственных предприятий, которым важны скорость ввода в эксплуатацию и возможность монтажа подъёмного оборудования. Инвестиции в цех 1 500 м² с кран-балкой 5 т — 15–20 млн ₽ под ключ.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим промышленное здание под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство производственных цехов и промышленных зданий из металлоконструкций. Белгородская область и ЦФО.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Получить консультацию</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
