import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Энергоэффективные ангары — как снизить затраты на отопление | МАКСТИЛ",
  description:
    "Энергоэффективный ангар: утепление, воздушные завесы, инфракрасное отопление, рекуперация. Как снизить расходы на отопление склада на 40–60 %.",
  keywords: [
    "энергоэффективный ангар",
    "экономия отопления ангара",
    "снижение затрат на отопление склада",
    "утепление ангара",
    "рекуперация в ангаре",
  ],
  openGraph: {
    title: "Энергоэффективные ангары — как снизить затраты на отопление",
    description:
      "Методы снижения теплопотерь и расходов на отопление ангаров из ЛСТК.",
    url: "https://lstkmk.ru/articles/energoeffektivnyj-angar/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/energoeffektivnyj-angar/",
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
              Эксплуатация
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Энергоэффективные ангары — как снизить затраты на отопление
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Отопление ангара площадью 1000 м² обходится в 200–800 тыс. ₽ за сезон. При этом до 40 % тепла уходит через ворота, стыки панелей и кровлю. Разбираем инженерные решения, которые снижают затраты на 40–60 % без ущерба для комфорта.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Где теряется тепло в ангаре
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Основные каналы теплопотерь в утеплённом ангаре:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Источник потерь</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Доля</th>
                    <th className="text-left py-3 font-semibold text-foreground">Причина</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ворота (открытие/закрытие)</td>
                    <td className="py-3 pr-4">25–35 %</td>
                    <td className="py-3">Инфильтрация холодного воздуха</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Кровля</td>
                    <td className="py-3 pr-4">20–30 %</td>
                    <td className="py-3">Конвекция тёплого воздуха вверх</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стены</td>
                    <td className="py-3 pr-4">15–25 %</td>
                    <td className="py-3">Теплопроводность ограждений</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Пол</td>
                    <td className="py-3 pr-4">10–15 %</td>
                    <td className="py-3">Теплоотдача в грунт</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Стыки и мостики холода</td>
                    <td className="py-3 pr-4">5–10 %</td>
                    <td className="py-3">Металлический каркас, примыкания</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Утепление: правильный выбор толщины
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Минимальная толщина ограждений зависит от климатического района и назначения здания:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Склад (+5…+12 °C):</strong> стены 80–100 мм, кровля 100–120 мм (сэндвич-панели)</li>
              <li><strong>Производство (+16…+20 °C):</strong> стены 120–150 мм, кровля 150–200 мм</li>
              <li><strong>Северные регионы:</strong> стены 150–200 мм, кровля 200–250 мм</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Увеличение толщины утеплителя с 100 до 150 мм обходится в +300–500 ₽/м², но экономит 15–20 % тепла ежегодно. Окупаемость — 2–3 отопительных сезона.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Воздушные завесы на воротах
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При каждом открытии ворот 4×4 м ангар теряет 50–100 кВт тепла за минуту. Решения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Тепловые завесы:</strong> струя тёплого воздуха отсекает холод. Снижают потери на 70–80 %</li>
              <li><strong>Скоростные ворота:</strong> открываются за 1–2 секунды vs 15–20 сек у обычных секционных</li>
              <li><strong>Шлюзовая камера:</strong> двойные ворота с тамбуром — потери стремятся к нулю</li>
              <li><strong>ПВХ-завесы (ленточные шторы):</strong> бюджетное решение, снижают потери на 50–60 %</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инфракрасное отопление
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вместо нагрева всего объёма воздуха (конвекция) ИК-обогреватели греют пол и предметы. Преимущества:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Экономия 30–50 % по сравнению с воздушным отоплением</li>
              <li>Нет перегрева верхней зоны (под кровлей часто +30 °C при конвекции)</li>
              <li>Зональный нагрев — обогревается только рабочая зона, а не весь объём</li>
              <li>Мгновенный выход на рабочий режим (5–10 минут)</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для ангара высотой 8–12 м оптимальны газовые ИК-излучатели «светлого» типа мощностью 20–40 кВт, подвешенные на высоте 4–6 м от пола.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Рекуперация тепла
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Приточно-вытяжная вентиляция с рекуператором возвращает 60–85 % тепла уходящего воздуха обратно в помещение:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Пластинчатый рекуператор:</strong> КПД 50–65 %, бюджетный, без подвижных частей</li>
              <li><strong>Роторный рекуператор:</strong> КПД 70–85 %, подходит для больших объёмов воздуха</li>
              <li><strong>Экономия:</strong> для ангара 1000 м² с кратностью 2 об/час — до 150 тыс. ₽/сезон</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Потолочные вентиляторы (дестратификация)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В ангаре высотой 10 м разница температур между полом и кровлей достигает 8–15 °C. Низкооборотные потолочные вентиляторы диаметром 3–7 м перемешивают воздух, снижая температуру подкровельного слоя и возвращая тепло в рабочую зону. Экономия — 15–25 % на отоплении при стоимости установки 150–300 тыс. ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Устранение мостиков холода
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Термопрофиль вместо обычного — снижает теплопроводность стойки в 3–4 раза</li>
              <li>Терморазрывы в узлах примыкания стен к фундаменту</li>
              <li>Герметизация стыков сэндвич-панелей монтажной пеной и нащельниками</li>
              <li>Уплотнители по периметру ворот и дверей</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнение затрат: обычный vs энергоэффективный ангар
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Обычный</th>
                    <th className="text-left py-3 font-semibold text-foreground">Энергоэффективный</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стоимость строительства (1000 м²)</td>
                    <td className="py-3 pr-4">14 млн ₽</td>
                    <td className="py-3">16,5 млн ₽ (+18 %)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Затраты на отопление/год</td>
                    <td className="py-3 pr-4">600 тыс. ₽</td>
                    <td className="py-3">250 тыс. ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Экономия/год</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3">350 тыс. ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Окупаемость доп. вложений</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3">7 лет</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Энергоэффективный ангар стоит на 15–20 % дороже обычного, но окупает разницу за 5–7 лет эксплуатации. Ключевые решения: усиленное утепление, воздушные завесы, ИК-отопление вместо конвекционного и рекуперация. Каждое из них работает самостоятельно, но максимальный эффект даёт комплексный подход.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем энергоэффективные ангары с расчётом теплопотерь и подбором оборудования. Строим под ключ — каркас, утепление, инженерия.
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
                <Link href="/articles/solnechnye-paneli-na-kryshe-angara/" className="text-accent-blue hover:underline">
                  Солнечные панели на крыше ангара — выгодно или нет
                </Link>
              </li>
              <li>
                <Link href="/articles/obsluzhivanie-angara/" className="text-accent-blue hover:underline">
                  Текущее обслуживание ангара — график осмотров и ремонтов
                </Link>
              </li>
              <li>
                <Link href="/articles/holodnyj-ili-tyoplyj-angar/" className="text-accent-blue hover:underline">
                  Холодный или тёплый ангар — что выбрать
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
