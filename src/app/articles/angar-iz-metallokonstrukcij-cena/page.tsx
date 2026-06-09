import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар из металлоконструкций: цена под ключ в 2025 году | МАКСТИЛ",
  description:
    "Сколько стоит ангар из металлоконструкций под ключ? Цены на ангары 10×20, 15×30, 20×40, 24×60 м. Из чего складывается стоимость, как сэкономить без потери качества.",
  keywords: [
    "ангар из металлоконструкций цена",
    "ангар под ключ стоимость",
    "купить ангар из металлоконструкций",
    "ангар цена за квадратный метр",
    "строительство ангара под ключ цена",
    "металлический ангар стоимость",
    "ангар лстк цена",
  ],
  openGraph: {
    title: "Ангар из металлоконструкций: цена под ключ в 2025 году",
    description:
      "Реальные цены на ангары из ЛСТК разных размеров. Из чего складывается стоимость и как не переплатить.",
    url: "https://lstkmk.ru/articles/angar-iz-metallokonstrukcij-cena/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/angar-iz-metallokonstrukcij-cena/",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Все статьи
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">Цены и стоимость</span>
            <span className="text-xs text-muted">9 июня 2026</span>
            <span className="text-xs text-muted">10 мин</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Ангар из металлоконструкций: цена под ключ в 2025 году
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Самый частый вопрос, с которого начинается любой проект: «Сколько стоит ангар?». Разберём, из чего складывается цена, какие размеры популярны и почему одинаковые на вид здания могут отличаться в цене вдвое.
          </p>
        </header>

        <div className="prose prose-slate max-w-none">

          <h2>Из чего складывается цена ангара</h2>
          <p>
            Стоимость ангара из металлоконструкций — это не одна цифра, а сумма нескольких составляющих. Понимая каждую из них, можно обоснованно сравнивать предложения разных подрядчиков и избегать неприятных сюрпризов в смете.
          </p>

          <h3>1. Металлокаркас (30–40% стоимости)</h3>
          <p>
            Несущая конструкция — рамы, прогоны, связи. Вес и сложность каркаса зависят от пролёта, высоты, снеговой и ветровой нагрузки региона. Ангары из ЛСТК (лёгких стальных тонкостенных конструкций) в среднем на 20–30% легче аналогов из горячекатаного проката, что напрямую снижает стоимость.
          </p>

          <h3>2. Ограждающие конструкции (25–35%)</h3>
          <p>
            Кровля и стены — профлист, сэндвич-панели или PIR-панели. Разница в цене между холодным профлистом и утеплёнными сэндвич-панелями — около 800–1 200 ₽/м². На объекте 20×40 м это 640 000–960 000 ₽ разницы только на обшивке.
          </p>

          <h3>3. Фундамент (15–25%)</h3>
          <p>
            Тип фундамента зависит от грунта и нагрузок. Для лёгких ангаров из ЛСТК чаще применяют ленточный или свайно-ростверковый фундамент — он дешевле монолитной плиты, которую нередко требуют традиционные конструкции.
          </p>

          <h3>4. Монтаж (10–15%)</h3>
          <p>
            Стоимость монтажа зависит от удалённости объекта, сложности конструкции и сроков. Подъёмная техника, проживание бригады, транспорт — всё это входит в монтажную часть сметы.
          </p>

          <h3>5. Инженерные сети и внутренняя отделка (0–20%)</h3>
          <p>
            Электрика, освещение, ворота, пол, отопление — для «холодного» склада это минимум, для производственного цеха может составить значительную часть бюджета.
          </p>

          <h2>Цены на ангары популярных размеров в 2025 году</h2>
          <p>
            Ниже — ориентировочные цены «под ключ» для средней полосы России, включая каркас, профлист, монтаж и простой ленточный фундамент. Без НДС.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold">Размер</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Площадь</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Холодный (профлист)</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Утеплённый (сэндвич)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200">12×24 м</td>
                  <td className="p-3 border border-slate-200">288 м²</td>
                  <td className="p-3 border border-slate-200">1 400 000 – 1 800 000 ₽</td>
                  <td className="p-3 border border-slate-200">2 100 000 – 2 600 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">18×36 м</td>
                  <td className="p-3 border border-slate-200">648 м²</td>
                  <td className="p-3 border border-slate-200">2 800 000 – 3 500 000 ₽</td>
                  <td className="p-3 border border-slate-200">4 200 000 – 5 200 000 ₽</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">24×48 м</td>
                  <td className="p-3 border border-slate-200">1 152 м²</td>
                  <td className="p-3 border border-slate-200">4 500 000 – 5 800 000 ₽</td>
                  <td className="p-3 border border-slate-200">6 800 000 – 8 500 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">30×60 м</td>
                  <td className="p-3 border border-slate-200">1 800 м²</td>
                  <td className="p-3 border border-slate-200">7 200 000 – 9 000 000 ₽</td>
                  <td className="p-3 border border-slate-200">10 500 000 – 13 000 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted italic">
            * Цены ориентировочные, зависят от региона, геологии и комплектации. Для точного расчёта нужен проект.
          </p>

          <h2>Цена за квадратный метр: реальные цифры</h2>
          <p>
            Многие заказчики ориентируются на стоимость м². Вот актуальный диапазон для ангаров из ЛСТК:
          </p>
          <ul>
            <li><strong>Холодный ангар (профлист)</strong> — 4 500–6 500 ₽/м²</li>
            <li><strong>Утеплённый ангар (сэндвич 100 мм)</strong> — 6 500–9 000 ₽/м²</li>
            <li><strong>Производственный цех (PIR, инженерия)</strong> — 9 000–14 000 ₽/м²</li>
          </ul>
          <p>
            Чем больше объект — тем ниже удельная стоимость. Ангар 300 м² обходится заметно дороже за м², чем ангар 1 200 м², даже при той же технологии.
          </p>

          <h2>Почему цены отличаются у разных подрядчиков</h2>
          <p>
            Получив несколько коммерческих предложений, заказчики нередко видят разброс в 30–50%. Причины:
          </p>
          <ul>
            <li><strong>Разная комплектация.</strong> Один подрядчик включает ворота и отмостку, другой — только «коробку».</li>
            <li><strong>Разная толщина металла.</strong> Занижение сечений профилей снижает цену, но и запас прочности.</li>
            <li><strong>Наличие проектной документации.</strong> Без проекта дешевле на бумаге, но дороже при согласованиях и возможных переделках.</li>
            <li><strong>Репутация и гарантии.</strong> Компании с опытом и портфолио обоснованно берут дороже.</li>
          </ul>

          <h2>Как сэкономить без потери качества</h2>
          <ul>
            <li><strong>Выбирайте стандартные пролёты.</strong> Ангары с пролётами 12, 18, 24 м производятся серийно — нестандарт обходится дороже.</li>
            <li><strong>Планируйте заранее.</strong> Заказ в не сезон (осень–зима) даёт скидку 5–10%.</li>
            <li><strong>Не экономьте на проекте.</strong> Грамотный расчёт позволяет оптимизировать расход металла без ущерба для прочности.</li>
            <li><strong>Уточняйте, что входит в смету.</strong> Запросите полный перечень работ и материалов, чтобы сравнивать одинаковое.</li>
          </ul>

          <h2>Сроки строительства</h2>
          <p>
            Ангар из металлоконструкций строится значительно быстрее кирпичного или монолитного здания:
          </p>
          <ul>
            <li>Проектирование — 2–4 недели</li>
            <li>Производство каркаса — 3–6 недель</li>
            <li>Фундамент — 2–3 недели (параллельно с производством)</li>
            <li>Монтаж — 1–3 недели в зависимости от размера</li>
          </ul>
          <p>
            Итого от договора до готового здания — <strong>2–3 месяца</strong> для стандартных объектов.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Получите точный расчёт стоимости</h3>
            <p className="text-muted text-sm mb-4">
              Укажите размеры и назначение ангара — рассчитаем смету в течение рабочего дня. Без скрытых платежей.
            </p>
            <a
              href="/#contacts"
              className="inline-flex h-10 items-center px-6 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Рассчитать стоимость
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
