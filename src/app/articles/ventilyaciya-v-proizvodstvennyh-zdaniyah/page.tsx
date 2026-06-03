import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Вентиляция в производственных зданиях из металлоконструкций | МАКСТИЛ",
  description:
    "Как правильно организовать воздухообмен в цехах и складах из металлоконструкций. Нормы СНиП, типы систем вентиляции, практические решения от МАКСТИЛ.",
  keywords: [
    "вентиляция цеха склад",
    "воздухообмен производственное здание",
    "вытяжная вентиляция ангар",
    "приточно вытяжная вентиляция ЛСТК",
    "нормы СНиП вентиляция",
    "вентиляция металлоконструкции",
  ],
  openGraph: {
    title: "Вентиляция в производственных зданиях из металлоконструкций",
    description: "Полное руководство по организации вентиляции в быстровозводимых зданиях",
    url: "https://lstkmk.ru/articles/ventilyaciya-v-proizvodstvennyh-zdaniyah/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/ventilyaciya-v-proizvodstvennyh-zdaniyah/",
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
              Вентиляция в производственных зданиях из металлоконструкций
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>18 апреля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Правильная вентиляция — здоровье персонала и сохранность продукции. Разбираем нормы, типы систем и особенности монтажа в быстровозводимых зданиях.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему вентиляция критична?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В производственных зданиях без вентиляции концентрация вредных веществ, влажность и температура достигают опасных значений. Это влияет на:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Здоровье работников — профзаболевания, снижение производительности</li>
              <li>Качество продукции — коррозия, порча материалов</li>
              <li>Безопасность — накопление горючих паров, пыли</li>
              <li>Оборудование — перегрев, отказ техники</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Нормативные требования СНиП
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Основной документ — <strong>СНиП 41-01-2003 «Отопление, вентиляция и кондиционирование»</strong>. Ключевые параметры:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Кратность воздухообмена: от 1 до 10 обменов в час в зависимости от производства</li>
              <li>Скорость воздуха в рабочей зоне: 0,2–0,5 м/с</li>
              <li>Температура внутри: +18…+22°C для лёгкой работы, +14…+18°C для средней</li>
              <li>Относительная влажность: 30–60%</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы систем вентиляции
            </h2>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Приточно-вытяжная (общая)</h3>
              <p className="text-muted mb-3">
                Подача свежего воздуха и удаление отработанного через систему воздуховодов. Подходит для большинства складов и цехов с умеренным выделением вредностей.
              </p>
              <p className="text-sm text-muted">
                <strong>Производительность:</strong> 1000–50000 м³/ч. <strong>Стоимость:</strong> от 150 000 ₽.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Аварийная вытяжная</h3>
              <p className="text-muted mb-3">
                Локализованная система для удаления вредных веществ прямо из зоны образования. Обязательна при сварке, окраске, работе с растворителями.
              </p>
              <p className="text-sm text-muted">
                <strong>Оборудование:</strong> вытяжные зонты, шкафы, сварочные посты с локальным отсосом.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Струйная вентиляция</h3>
              <p className="text-muted mb-3">
                Воздух подаётся струями с высокой скоростью, создавая интенсивное перемешивание. Эффективна для больших пролётов высотой более 8 метров.
              </p>
              <p className="text-sm text-muted">
                <strong>Преимущество:</strong> экономия энергии за счёт направленных струй без нагрева всего объёма.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Естественная (аэродинамическая)</h3>
              <p className="text-muted mb-3">
                Работает за счёт разности температур и ветра — фонари на крыше, жалюзи, продухи. Не требует электроэнергии, но зависит от погоды.
              </p>
              <p className="text-sm text-muted">
                <strong>Применение:</strong> склады без постоянного присутствия людей, сельхозздания.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Особенности монтажа в ЛСТК-зданиях
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлический каркас и сэндвич-панели создают особенности для прокладки воздуховодов:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Крепление к профилям.</strong> Воздуховоды подвешиваются к балкам перекрытия через подвесы с демпферами — это снижает вибрацию и шум.</li>
              <li><strong>Проход через сэндвич-панели.</strong> Отверстия режутся на заводе или аккуратно на площадке с уплотнением гильзой.</li>
              <li><strong>Теплоизоляция.</strong> Воздуховоды в неотапливаемых зонах требуют изоляции — иначе конденсат разрушает металл.</li>
              <li><strong>Герметичность.</strong> ЛСТК-здания «дышат» меньше кирпичных — важна принудительная приточная вентиляция, иначе создаётся разрежение.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт системы: пример
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цех площадью 1000 м², высота 6 м (объём 6000 м³), сварочные работы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Кратность воздухообмена по СНиП: 4 обмена в час</li>
              <li>Необходимая производительность: 6000 × 4 = 24000 м³/ч</li>
              <li>Приточная установка: 12000 м³/ч с фильтрацией и калорифером</li>
              <li>Вытяжная установка: 12000 м³/ч + локальные вытяжные зонты над сварочными постами</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Ошибки при проектировании
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Недостаточная производительность.</strong> Экономия на мощности приводит к превышению ПДК вредных веществ.</li>
              <li><strong>Отсутствие регулирования.</strong> Одна скорость вентилятора зимой создаёт сквозняки и переохлаждение.</li>
              <li><strong>Игнорирование шума.</strong> Мощные вентиляторы без шумоглушителей делают работу невозможной.</li>
              <li><strong>Неправильный подбор воздуховодов.</strong> Малые сечения вызывают высокое сопротивление и перегрузку двигателей.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Вентиляция в ЛСТК-зданиях требует проектирования ещё на стадии расчёта каркаса — нужно предусмотреть крепления, проёмы, нагрузки. Инвестиции в качественную систему окупаются здоровьем сотрудников и долговечностью оборудования.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Нужна вентиляция для вашего объекта?
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ проектирует вентиляцию совместно с каркасом здания. Это оптимизирует затраты и исключает конфликты инженерных систем.
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
                Консультация инженера
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
