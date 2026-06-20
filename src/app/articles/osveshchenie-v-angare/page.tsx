import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Освещение в ангаре и на складе: нормы, расчёт, LED-светильники | МАКСТИЛ",
  description:
    "Освещение ангара и склада: нормы освещённости по СНиП, расчёт мощности, выбор LED-светильников. Естественное освещение, светопрозрачные вставки в кровле, цены.",
  keywords: [
    "освещение в ангаре",
    "освещение склада",
    "промышленные светильники",
    "освещённость лк нормы",
    "LED для склада",
    "светопрозрачные вставки",
    "освещение производства",
  ],
  openGraph: {
    title: "Освещение в ангаре и на складе",
    description:
      "Нормы освещённости, расчёт мощности, выбор светильников для промышленных зданий.",
    url: "https://lstkmk.ru/articles/osveshchenie-v-angare/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/osveshchenie-v-angare/",
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
              Инженерия
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Освещение в ангаре и на складе
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>20 июня 2026</span>
              <span>•</span>
              <span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Освещение в ангаре — это не «повесить лампочки». Это норматив СНиП, расчёт по площади и высоте, выбор типа светильника и обязательные требования по охране труда. Расскажем, как правильно осветить склад, цех или СТО без переплат и нарушений.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Нормы освещённости (СП 52.13330)
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип помещения</th>
                    <th className="text-left py-3 font-semibold text-foreground">Освещённость, лк</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный склад, навес</td>
                    <td className="py-3 font-medium">75</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Склад с ручной обработкой</td>
                    <td className="py-3 font-medium">150</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Склад со стеллажами</td>
                    <td className="py-3 font-medium">200</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Производственный цех</td>
                    <td className="py-3 font-medium">300</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Автосервис (общая зона)</td>
                    <td className="py-3 font-medium">300</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Автосервис (пост покраски)</td>
                    <td className="py-3 font-medium">500</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Точные работы, контроль</td>
                    <td className="py-3 font-medium">500–750</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы промышленных светильников
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Современные ангары освещают LED-светильниками четырёх форматов:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Колокол (Highbay)</strong> — для высоких потолков 6–15 м. Мощный направленный свет</li>
              <li><strong>Линейные светильники</strong> — для средних потолков 4–8 м, равномерная заливка</li>
              <li><strong>Панели Армстронг</strong> — для офисов и бытовых блоков</li>
              <li><strong>Прожекторы</strong> — для уличного освещения и зон погрузки</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Лампы накаливания, люминесцентные, ДРЛ — морально устарели. LED окупается за 1,5–2 года экономией электроэнергии и заменой обслуживающего персонала.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Быстрый расчёт мощности
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Примерная формула для LED-светильников с КПД 100 лм/Вт и средним складом:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Холодный склад (75 лк) — 1 Вт/м²</li>
              <li>Стеллажный склад (200 лк) — 3 Вт/м²</li>
              <li>Производство (300 лк) — 4,5 Вт/м²</li>
              <li>Точные работы (500 лк) — 7 Вт/м²</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для ангара 1000 м² под складирование на стеллажах — около 3 кВт LED-мощности. Это 30 светильников по 100 Вт или 15 по 200 Вт.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Высота установки и шаг светильников
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Высота потолка</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип светильника</th>
                    <th className="text-left py-3 font-semibold text-foreground">Шаг</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">3–5 м</td>
                    <td className="py-3 pr-4">Линейный 40–60 Вт</td>
                    <td className="py-3">4×4 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">5–8 м</td>
                    <td className="py-3 pr-4">Колокол 100–150 Вт</td>
                    <td className="py-3">6×6 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">8–12 м</td>
                    <td className="py-3 pr-4">Колокол 200 Вт</td>
                    <td className="py-3">7×7 м</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">12–15 м</td>
                    <td className="py-3 pr-4">Колокол 250–300 Вт</td>
                    <td className="py-3">8×8 м</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Естественное освещение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              По нормам общая площадь светопрозрачных конструкций должна составлять не менее 1/8 от площади пола. В ангарах это реализуют через:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Светопрозрачные вставки в кровле</strong> — поликарбонат 16 мм, полосами 1–2 м</li>
              <li><strong>Окна в стенах</strong> — на высоте 2,5–4 м от пола</li>
              <li><strong>Светотехнический фонарь</strong> — продольная надстройка на коньке</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Светопрозрачные вставки экономят 30–50% затрат на электроэнергию днём. Срок службы поликарбоната — 10–15 лет, после чего он мутнеет и требует замены.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Степень защиты светильников
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>IP20</strong> — только сухие отапливаемые помещения (офисы)</li>
              <li><strong>IP54</strong> — обычные склады, цеха</li>
              <li><strong>IP65</strong> — пыльные производства, мойки, холодные ангары</li>
              <li><strong>IP66/IP67</strong> — улица, навесы открытого хранения</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Аварийное освещение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              По требованиям пожарной безопасности в ангарах должно быть аварийное освещение эвакуационных путей — минимум 0,5 лк по основным проходам. Светильники с блоком автономного питания на 1–3 часа после отключения электричества. Их монтируют над эвакуационными выходами, на лестницах, на маршрутах эвакуации.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость освещения
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Конфигурация</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный склад (LED, без эл. сетей)</td>
                    <td className="py-3 font-medium">200–400</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Обычное производство под ключ</td>
                    <td className="py-3 font-medium">500–900</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Цех с высокой точностью</td>
                    <td className="py-3 font-medium">1 200–2 000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Хорошее освещение в ангаре — это норма по СНиП, LED-светильники с IP54+ и обязательно светопрозрачные вставки в кровле. Грамотный проект окупает себя за 2–3 года экономии на электроэнергии и за счёт повышенной производительности персонала на хорошо освещённом рабочем месте.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Спроектируем освещение по нормам
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ выполняет полный комплекс — от расчёта освещённости до монтажа сетей в составе строительства ангара под ключ.
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
