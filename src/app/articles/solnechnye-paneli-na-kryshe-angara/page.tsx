import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Солнечные панели на крыше ангара — выгодно или нет | МАКСТИЛ",
  description:
    "Солнечные панели на ангаре: расчёт окупаемости, мощность, монтаж на кровлю из профнастила. Стоит ли устанавливать СЭС на складе в 2026 году.",
  keywords: [
    "солнечные панели на ангаре",
    "солнечная электростанция на складе",
    "энергия для ангара",
    "солнечные батареи на крыше склада",
    "СЭС для бизнеса",
  ],
  openGraph: {
    title: "Солнечные панели на крыше ангара — выгодно или нет",
    description:
      "Расчёт окупаемости солнечных панелей на крыше ангара в условиях России.",
    url: "https://lstkmk.ru/articles/solnechnye-paneli-na-kryshe-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/solnechnye-paneli-na-kryshe-angara/",
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
              Солнечные панели на крыше ангара — выгодно или нет
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Крыша ангара — готовая площадка для солнечных панелей: большая площадь, отсутствие затенения, прочная металлическая основа. Но окупаемость зависит от региона, тарифа на электричество и мощности потребления. Считаем на конкретных цифрах.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему крыша ангара подходит для СЭС
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Площадь:</strong> ангар 24×60 м даёт ~1400 м² кровли — хватит для СЭС 150–200 кВт</li>
              <li><strong>Уклон:</strong> двускатная кровля 10–15° — оптимальный угол для панелей без дополнительных креплений</li>
              <li><strong>Несущая способность:</strong> панели весят 12–15 кг/м² — для металлокаркаса это незначительная нагрузка</li>
              <li><strong>Отсутствие затенения:</strong> ангары обычно стоят на открытых площадках</li>
              <li><strong>Потребитель рядом:</strong> выработка идёт напрямую в сеть ангара — нет потерь на транспортировку</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инсоляция по регионам России
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Регион</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Инсоляция, кВт·ч/м²/год</th>
                    <th className="text-left py-3 font-semibold text-foreground">Выработка 1 кВт панелей</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Краснодар, Ростов</td>
                    <td className="py-3 pr-4">1300–1450</td>
                    <td className="py-3">1200–1350 кВт·ч/год</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Белгород, Воронеж</td>
                    <td className="py-3 pr-4">1100–1250</td>
                    <td className="py-3">1000–1150 кВт·ч/год</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Москва, Тула</td>
                    <td className="py-3 pr-4">950–1100</td>
                    <td className="py-3">850–1000 кВт·ч/год</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Санкт-Петербург</td>
                    <td className="py-3 pr-4">850–950</td>
                    <td className="py-3">750–900 кВт·ч/год</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт окупаемости: пример для Белгорода
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Исходные данные: ангар 24×60 м, тариф для юрлиц — 8,5 ₽/кВт·ч, потребление — 30 000 кВт·ч/мес.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Мощность СЭС: 100 кВт (южный скат)</li>
              <li>Стоимость «под ключ»: 7,5 млн ₽ (75 000 ₽/кВт)</li>
              <li>Годовая выработка: 100 × 1100 = 110 000 кВт·ч</li>
              <li>Экономия: 110 000 × 8,5 = 935 000 ₽/год</li>
              <li>Простая окупаемость: 7,5 / 0,935 = 8 лет</li>
              <li>Срок службы панелей: 25–30 лет</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              С учётом ежегодного роста тарифов (5–8 %) реальная окупаемость — 6–7 лет. После этого электричество по сути бесплатное.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда СЭС выгодна
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Тариф на электричество от 7 ₽/кВт·ч (промышленные потребители в большинстве регионов)</li>
              <li>Высокое дневное потребление — склад, производство, рефрижераторы</li>
              <li>Южный регион (инсоляция 1100+ кВт·ч/м²/год)</li>
              <li>Нет лимита мощности от сетей — СЭС позволяет обойти ограничение</li>
              <li>Планируемый срок владения объектом — 10+ лет</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда СЭС не оправдана
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Северные регионы с инсоляцией ниже 900 кВт·ч/м²/год</li>
              <li>Низкий тариф (менее 5 ₽/кВт·ч) — например, у предприятий на оптовом рынке</li>
              <li>Ночное потребление — без накопителей СЭС не работает в тёмное время</li>
              <li>Арендованный ангар — инвестиция останется арендодателю</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Монтаж на кровлю из профнастила
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Технические нюансы крепления:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Крепление к прогонам кровли через специальные L-кронштейны (не к самому профнастилу)</li>
              <li>Герметизация мест крепления ЭПДМ-прокладками</li>
              <li>Расчёт ветровой и снеговой нагрузки: панели + крепёж добавляют 15–20 кг/м²</li>
              <li>Вентиляционный зазор 100–150 мм между панелями и кровлей — для охлаждения</li>
              <li>Кабельные трассы — по кровле в гофре или внутри здания</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Продажа излишков в сеть
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              С 2019 года в России действует закон о микрогенерации (ФЗ-35, ст. 3). Объекты мощностью до 15 кВт могут продавать излишки в сеть по оптовой цене. Для промышленных СЭС от 15 кВт продажа пока не регулируется — излишки уходят в сеть бесплатно. Поэтому мощность СЭС подбирается под собственное дневное потребление, чтобы минимизировать перетоки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Гибридная система: СЭС + ДГУ
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для удалённых объектов без сетевого подключения оптимально сочетание солнечных панелей и дизель-генератора. Днём работает СЭС, ночью и в пасмурные дни — ДГУ. Расход дизеля снижается на 40–60 %, а ресурс генератора увеличивается в 2 раза за счёт меньшей нагрузки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Солнечные панели на крыше ангара окупаются за 6–8 лет при тарифе от 7 ₽/кВт·ч и инсоляции от 1000 кВт·ч/м²/год. Для Белгородской области и южнее — экономически обоснованное решение. Для северных регионов стоит считать индивидуально.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем ангары с учётом будущей установки СЭС: усиленные прогоны, кабельные вводы, расчёт нагрузок. Строим под ключ по всей России.
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
                <Link href="/articles/energoeffektivnyj-angar/" className="text-accent-blue hover:underline">
                  Энергоэффективные ангары — как снизить затраты на отопление
                </Link>
              </li>
              <li>
                <Link href="/articles/ekologichnost-lstk/" className="text-accent-blue hover:underline">
                  Экологичность ЛСТК — углеродный след и переработка металла
                </Link>
              </li>
              <li>
                <Link href="/articles/umnyj-angar/" className="text-accent-blue hover:underline">
                  Умный ангар — автоматизация ворот, климата и освещения
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
