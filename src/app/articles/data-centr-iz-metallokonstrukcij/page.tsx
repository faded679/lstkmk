import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Дата-центр из металлоконструкций — ЦОД под ключ | МАКСТИЛ",
  description:
    "Строительство дата-центра из металлоконструкций: требования к ЦОД, климат, электроснабжение, безопасность. Проектирование серверной под ключ.",
  keywords: [
    "дата-центр из металлоконструкций",
    "ЦОД строительство",
    "серверная под ключ",
    "модульный дата-центр",
    "строительство ЦОД",
  ],
  openGraph: {
    title: "Дата-центр из металлоконструкций — ЦОД под ключ",
    description:
      "Как построить дата-центр из ЛСТК: инженерные системы, надёжность, стоимость.",
    url: "https://lstkmk.ru/articles/data-centr-iz-metallokonstrukcij/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/data-centr-iz-metallokonstrukcij/",
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
              Дата-центр из металлоконструкций — ЦОД под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Рынок ЦОД в России растёт на 15–20 % ежегодно. Строительство классического дата-центра из железобетона занимает 18–24 месяца. Модульный ЦОД из металлоконструкций вводится в эксплуатацию за 6–12 месяцев и масштабируется по мере роста нагрузки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Зачем строить ЦОД из металлоконструкций
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Скорость:</strong> ввод первой очереди за 6–9 месяцев</li>
              <li><strong>Модульность:</strong> наращивание мощности блоками по 200–500 кВт</li>
              <li><strong>Масштабируемость:</strong> добавление серверных залов без остановки работающих</li>
              <li><strong>Стоимость:</strong> на 20–30 % дешевле монолитного здания при том же уровне надёжности</li>
              <li><strong>Перенос:</strong> модульные блоки можно демонтировать и переместить</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Классификация ЦОД по уровню надёжности (Tier)
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Уровень</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Доступность</th>
                    <th className="text-left py-3 font-semibold text-foreground">Резервирование</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Tier I</td>
                    <td className="py-3 pr-4">99,671 %</td>
                    <td className="py-3">Без резервирования</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Tier II</td>
                    <td className="py-3 pr-4">99,749 %</td>
                    <td className="py-3">N+1 по критичным системам</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Tier III</td>
                    <td className="py-3 pr-4">99,982 %</td>
                    <td className="py-3">2N по всем системам, обслуживание без остановки</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Tier IV</td>
                    <td className="py-3 pr-4">99,995 %</td>
                    <td className="py-3">2(N+1), отказоустойчивость к любой аварии</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Для коммерческих ЦОД стандарт — Tier III. Модульный ЦОД из металлоконструкций может соответствовать Tier III при правильном проектировании инженерных систем.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструктив здания
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Каркас:</strong> металлические рамы из двутавра или ЛСТК (для малых ЦОД до 500 м²)</li>
              <li><strong>Ограждения:</strong> сэндвич-панели 100–150 мм с негорючим наполнителем (минвата)</li>
              <li><strong>Полы:</strong> фальшпол высотой 600–1000 мм для прокладки кабелей и подачи холодного воздуха</li>
              <li><strong>Кровля:</strong> утеплённая, с организованным водоотводом, без протечек</li>
              <li><strong>Нагрузка на пол:</strong> 1000–1500 кг/м² (серверные стойки 500–1000 кг каждая)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Системы охлаждения
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Охлаждение — главная статья расходов ЦОД (40–50 % энергопотребления). Варианты:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Прецизионные кондиционеры:</strong> точность ±1 °C, подача через фальшпол (cold aisle)</li>
              <li><strong>Чиллеры + фанкойлы:</strong> для крупных залов, мощность 100+ кВт</li>
              <li><strong>Фрикулинг (free cooling):</strong> использование наружного воздуха при t &lt; +15 °C — экономия 40–60 % энергии</li>
              <li><strong>Жидкостное охлаждение:</strong> для высокоплотных стоек (20+ кВт/стойка)</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              PUE (Power Usage Effectiveness) современного модульного ЦОД с фрикулингом: 1,2–1,4 (vs 1,6–2,0 у старых объектов).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Электроснабжение
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Два независимых ввода</strong> от разных подстанций (Tier III)</li>
              <li><strong>ИБП:</strong> батарейные модули на 10–15 минут автономной работы</li>
              <li><strong>ДГУ:</strong> дизель-генераторы с автозапуском за 10–15 секунд, запас топлива на 24–72 часа</li>
              <li><strong>АВР (автоматический ввод резерва):</strong> переключение без перерыва питания</li>
              <li><strong>Распределение:</strong> PDU (Power Distribution Unit) с мониторингом нагрузки по стойкам</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пожарная безопасность
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Газовое пожаротушение (Novec 1230 или FM-200) — не повреждает оборудование</li>
              <li>Система раннего обнаружения (VESDA) — реагирует на дым на стадии тления</li>
              <li>Огнестойкость стен и перекрытий — REI 60</li>
              <li>Негорючие материалы отделки (сэндвич-панели с минватой — НГ)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Физическая безопасность
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Периметральное ограждение с видеонаблюдением</li>
              <li>СКУД (контроль доступа): биометрия + карта + PIN</li>
              <li>Видеонаблюдение с хранением записей 90+ дней</li>
              <li>Защита от несанкционированного проникновения (усиленные стены, отсутствие окон)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость строительства ЦОД
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Компонент</th>
                    <th className="text-left py-3 font-semibold text-foreground">Доля в бюджете</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Здание (каркас + ограждения + полы)</td>
                    <td className="py-3">20–25 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Система охлаждения</td>
                    <td className="py-3">25–30 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Электроснабжение (ИБП, ДГУ, распределение)</td>
                    <td className="py-3">30–35 %</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Безопасность, мониторинг, кабельная инфраструктура</td>
                    <td className="py-3">10–15 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Ориентировочная стоимость ЦОД Tier III на 100 стоек: 150–300 млн ₽. Из них здание — 30–60 млн ₽, остальное — инженерия.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Дата-центр из металлоконструкций — это быстрый ввод, модульное масштабирование и сниженная стоимость «коробки». Здание — лишь 20–25 % бюджета ЦОД, но от его качества зависит герметичность, пожарная безопасность и возможность расширения. ЛСТК/металлокаркас позволяет запустить первую очередь за 6–9 месяцев и наращивать мощность без остановки.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем здания для ЦОД с учётом специфических нагрузок, фальшполов и систем охлаждения. Строим каркас и ограждения — инженерию монтируют профильные подрядчики.
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
                <Link href="/articles/farmacevticheskij-sklad-iz-lstk/" className="text-accent-blue hover:underline">
                  Фармацевтический склад из ЛСТК — чистые помещения и стандарты GMP
                </Link>
              </li>
              <li>
                <Link href="/articles/umnyj-angar/" className="text-accent-blue hover:underline">
                  Умный ангар — автоматизация ворот, климата и освещения
                </Link>
              </li>
              <li>
                <Link href="/articles/trendy-lstk-2026/" className="text-accent-blue hover:underline">
                  Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
