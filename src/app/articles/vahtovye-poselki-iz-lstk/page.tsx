import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Вахтовые посёлки из ЛСТК — быстрое строительство жилья для рабочих | МАКСТИЛ",
  description:
    "Вахтовые посёлки из ЛСТК: модульное жильё для рабочих, сроки строительства от 30 дней, утеплённые блоки с коммуникациями. Проекты и стоимость.",
  keywords: [
    "вахтовый посёлок ЛСТК",
    "быстровозводимое жильё для рабочих",
    "строительство вахтовых посёлков",
    "модульный вахтовый городок",
    "жильё для вахтовиков",
  ],
  openGraph: {
    title: "Вахтовые посёлки из ЛСТК — быстрое строительство жилья для рабочих",
    description:
      "Как построить вахтовый посёлок из ЛСТК: модули, планировки, инженерия, сроки.",
    url: "https://lstkmk.ru/articles/vahtovye-poselki-iz-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/vahtovye-poselki-iz-lstk/",
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
              Вахтовые посёлки из ЛСТК — быстрое строительство жилья для рабочих
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Нефтяные месторождения, газопроводы, горнодобывающие карьеры, крупные стройки — везде, где люди работают вахтовым методом, нужно временное жильё. ЛСТК позволяет собрать посёлок на 50–500 человек за 30–90 дней без мокрых процессов и тяжёлой техники.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему ЛСТК подходит для вахтовых посёлков
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Классические вагончики и контейнеры дешевы, но имеют короткий срок службы, плохую теплоизоляцию и минимальный комфорт. Капитальные здания строятся годами. ЛСТК занимает промежуточную нишу:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Скорость:</strong> заводская готовность модулей 80–90 %, на площадке только сборка</li>
              <li><strong>Транспортабельность:</strong> элементы каркаса перевозятся обычными фурами</li>
              <li><strong>Всесезонность:</strong> сухой монтаж без бетона — строительство зимой при −30 °C</li>
              <li><strong>Долговечность:</strong> оцинкованный каркас рассчитан на 30–50 лет</li>
              <li><strong>Повторное использование:</strong> посёлок можно разобрать и перенести на новый объект</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Состав вахтового посёлка
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовой проект включает несколько функциональных зон:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Жилые блоки</strong> — комнаты на 2–4 человека с санузлами</li>
              <li><strong>Столовая</strong> — пищеблок полного цикла на 50–200 посадочных мест</li>
              <li><strong>Административный корпус</strong> — офисы, переговорные, серверная</li>
              <li><strong>Медпункт</strong> — кабинет врача, изолятор</li>
              <li><strong>Прачечная и сушилка</strong></li>
              <li><strong>Спортзал / комната отдыха</strong></li>
              <li><strong>Котельная и дизель-генератор</strong></li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструктивные решения
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Каркас и модули
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Жилые блоки проектируются модульно: типовая секция 3×6 м или 3×9 м. Каркас из термопрофиля толщиной 1,5–2 мм с перфорацией для снижения мостиков холода. Модули стыкуются по длине, образуя коридорные блоки.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Утепление
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Для северных регионов стены утепляются минватой 200–250 мм, кровля — 300 мм. Приведённое сопротивление теплопередаче стены достигает 4,5–5,0 м²·°C/Вт, что соответствует нормам для I–II климатических районов.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Фундамент
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              При вечной мерзлоте используются винтовые сваи с продухами. В умеренном климате достаточно бетонных блоков ФБС или мелкозаглублённой ленты. Лёгкость ЛСТК-конструкции (40–60 кг/м²) позволяет использовать облегчённые фундаменты.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инженерные системы
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вахтовый посёлок — это автономный мини-город. Набор инженерии зависит от удалённости от сетей:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Система</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Автономный вариант</th>
                    <th className="text-left py-3 font-semibold text-foreground">Сетевой вариант</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Электричество</td>
                    <td className="py-3 pr-4">Дизель-генератор 100–500 кВт</td>
                    <td className="py-3">Подключение к ЛЭП</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Отопление</td>
                    <td className="py-3 pr-4">Блочная котельная (газ/дизель)</td>
                    <td className="py-3">Теплотрасса</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Водоснабжение</td>
                    <td className="py-3 pr-4">Скважина + станция очистки</td>
                    <td className="py-3">Водопровод</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Канализация</td>
                    <td className="py-3 pr-4">Локальные очистные (КОС)</td>
                    <td className="py-3">Центральная канализация</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сроки и этапы строительства
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ориентировочный график для посёлка на 100 человек:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li><strong>Проектирование и согласование</strong> — 2–4 недели</li>
              <li><strong>Производство модулей на заводе</strong> — 3–4 недели (параллельно с фундаментами)</li>
              <li><strong>Устройство фундаментов и площадки</strong> — 2–3 недели</li>
              <li><strong>Монтаж каркасов и ограждений</strong> — 3–4 недели</li>
              <li><strong>Инженерные системы и отделка</strong> — 2–3 недели</li>
              <li><strong>Пусконаладка и ввод</strong> — 1 неделя</li>
            </ol>
            <p className="text-muted leading-relaxed mb-6">
              Итого: 10–14 недель от подписания договора до заселения. Для сравнения — капитальное общежитие строится 12–18 месяцев.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость вахтового посёлка из ЛСТК
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Цена зависит от комплектации, региона и удалённости площадки:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что входит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Базовая</td>
                    <td className="py-3 pr-4 font-medium">28 000 – 35 000</td>
                    <td className="py-3">Каркас, утепление, отделка, электрика</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стандарт</td>
                    <td className="py-3 pr-4 font-medium">35 000 – 45 000</td>
                    <td className="py-3">+ сантехника, мебель, котельная</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Премиум (север)</td>
                    <td className="py-3 pr-4 font-medium">50 000 – 65 000</td>
                    <td className="py-3">+ усиленное утепление, ДГУ, КОС</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Нормативные требования
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вахтовые посёлки проектируются по СП 44.13330 «Административные и бытовые здания». Основные нормы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Жилая площадь на 1 человека — не менее 6 м² (для комнат на 2 чел.) или 4,5 м² (на 4 чел.)</li>
              <li>Санузел: 1 умывальник на 5 чел., 1 душевая на 7 чел.</li>
              <li>Столовая: 1 посадочное место на 4 проживающих</li>
              <li>Расстояние между зданиями — по нормам пожарной безопасности (6–15 м)</li>
              <li>Эвакуационные выходы — не менее 2 на блок</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Преимущества перед контейнерами и вагончиками
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              ЛСТК-посёлок стоит на 20–40 % дороже блок-контейнеров, но выигрывает по совокупной стоимости владения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Срок эксплуатации 30+ лет vs 7–10 лет у контейнера</li>
              <li>Расход на отопление ниже в 2–3 раза за счёт утепления</li>
              <li>Свободная планировка — комнаты любого размера</li>
              <li>Капитальный вид — можно оформить как некапитальное строение</li>
              <li>Возможность надстройки 2-го этажа без усиления фундамента</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Вахтовый посёлок из ЛСТК — это инвестиция с возвратом: здания служат десятилетиями, переносятся на другие объекты и обеспечивают комфорт, который снижает текучку кадров. При правильном проектировании сроки строительства не превышают 3 месяцев даже для отдалённых площадок.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем и строим вахтовые посёлки из ЛСТК по всей России. Полный цикл: от планировки до ввода в эксплуатацию. Звоните или пишите — рассчитаем стоимость под ваш объект.
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
                <Link href="/articles/obshezhitiya-iz-lstk/" className="text-accent-blue hover:underline">
                  Общежития и хостелы из ЛСТК — строительство под ключ
                </Link>
              </li>
              <li>
                <Link href="/articles/modulnoe-zdanie-iz-lstk/" className="text-accent-blue hover:underline">
                  Модульное здание из ЛСТК
                </Link>
              </li>
              <li>
                <Link href="/articles/stroitelstvo-angara-na-severe/" className="text-accent-blue hover:underline">
                  Строительство ангара в северных районах — вечная мерзлота и морозы
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
