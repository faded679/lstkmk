import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Монтаж металлоконструкций: ошибки при монтаже и контроль качества | МАКСТИЛ",
  description:
    "Технология монтажа металлоконструкций: 10 типичных ошибок при монтаже колонн и ферм, контроль качества, приёмка металлоконструкций. Практические советы по монтажу металлического каркаса здания и ангаров.",
  keywords: [
    "монтаж металлоконструкций",
    "ошибки при монтаже металлоконструкций",
    "технология монтажа металлоконструкций",
    "контроль качества монтажа металлоконструкций",
    "монтаж колонн и ферм",
    "монтаж металлического каркаса здания",
    "монтаж ангаров из металлоконструкций",
    "приёмка металлоконструкций",
    "сборка металлокаркаса",
    "сварка металлоконструкций",
    "монтаж ЛСТК",
  ],
  openGraph: {
    title: "Монтаж металлоконструкций: ошибки при монтаже и контроль качества",
    description: "Технология монтажа металлоконструкций, контроль качества и приёмка от инженеров МАКСТИЛ",
    url: "https://lstkmk.ru/articles/montazh-metallokonstrukcij-oshibki/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/montazh-metallokonstrukcij-oshibki/",
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
              Монтаж металлоконструкций: 10 типичных ошибок и способы их избежать
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>5 июня 2026</span>
              <span>•</span>
              <span>10 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              <strong>Монтаж металлоконструкций</strong> — ключевой этап строительства быстровозводимых зданий. За 14 лет мы собрали сотни ангаров и промышленных объектов, наступив на все возможные грабли. В этой статье разбираем технологию монтажа металлического каркаса, типичные ошибки при монтаже колонн и ферм, способы контроля качества без дорогого оборудования и лайфхаки для приёмки металлоконструкций.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Подготовка к монтажу металлоконструкций: чек-лист
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              70% проблем при монтаже металлоконструкций возникает из-за пропущенных этапов подготовки. Правильная технология монтажа начинается ещё до приезда бригады. Вот наш рабочий чек-лист, который используем на каждом объекте:
            </p>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">1. Разбивка осей — проверяем дважды</h3>
              <p className="text-muted mb-4">
                Классическая ошибка: привязка к ближайшему забору или дереву, которое «не двигалось 20 лет». Мы видели случаи, когда ангар построили с перекосом 15 см относительно участка, потому что ориентировались на соседнюю постройку, оказавшуюся незаконной пристройкой.
              </p>
              <p className="text-muted">
                <strong>Лайфхак:</strong> Забейте два геодезических репера за пределы строительной площадки минимум на 20 метров. Используйте их для контроля на протяжении всего монтажа — фундамент «плавает» при усадке первые 2–3 недели.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">2. Ревизия комплектации — экономьте часы, не минуты</h3>
              <p className="text-muted mb-4">
                Приезжает бригада, поднимает первую ферму — а болты М16 привезли вместо М20. Машина уехала, работа встала. Мелочь? Нет, типичный сценарий, когда ревизию «сделаем потом».
              </p>
              <p className="text-muted">
                <strong>Правило:</strong> Перед выгрузкой проверяем 100% марок. На объекте должно быть 2–3% запаса крепежа — заводы округляют в меньшую сторону, а потери на площадке неизбежны.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типичные ошибки при монтаже металлоконструкций
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Даже опытные бригады допускают ошибки при монтаже металлического каркаса здания. Разбираем самые частые проблемы и способы их предотвращения.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Ошибка №1: «Сначала соберём всё, потом выставим»
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Классика жанра. Бригада монтирует колонны, не проверяя вертикаль, «потом подтянем штангами». Результат: фермы не сходятся, болты не лезут, начинается «дожимание» с гидравлическим инструментом — и деформация элементов.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Решение:</strong> Каждая колонна проверяется отвесом или нивелиром сразу после установки. Допуск — не более 5 мм на 3 метра высоты. Лучше потратить 10 минут сейчас, чем 4 часа на переделку.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Ошибка №2: Игнорирование температурных зазоров
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Собирали ангар летом при +30°C, не оставили зазоры в болтовых соединениях. Зимой при -20°C металл дал усадку — и пошли трещины в обвязке. Ремонт стоил 180 000 ₽.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Технология:</strong> При монтаже в теплый период оставляем в соединениях дополнительный зазор 2–3 мм на каждые 6 метров пролёта. Для зимнего монтажа — минимальный зазор, зазоры расширяются при нагреве.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Ошибка №3: Сварка «как получится»
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Сварка требует контроля: ток, скорость, подготовка кромок. Плохая сварка — не просто косметический дефект, это точка концентрации напряжений и потенциальная трещина при нагрузке.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <p className="text-muted text-sm">
                <strong>Контрольный вопрос для заказчика:</strong> Покажите протоколы УЗК или РК сварных швов. Если их нет — сварка не проверялась. Это нормально для неответственных конструкций, но критично для несущих элементов.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Контроль качества монтажа металлоконструкций без дорогого оборудования
            </h2>

            <p className="text-muted leading-relaxed mb-6">
              Не на каждом объекте есть тахеометр. Но точность можно получить и с базовыми инструментами:
            </p>

            <div className="grid gap-4 my-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">Диагонали пролёта</h4>
                <p className="text-muted text-sm">
                  Измеряем диагонали прямоугольного участка — разница не должна превышать 10 мм на 20 метров. Если больше — пролёт ромбовидный, фермы сядут криво.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">Шнур по верху колонн</h4>
                <p className="text-muted text-sm">
                  Натягиваем стальной шнур по верхним пластинам колонн — видны все перекосы. Простой метод, работает без приборов. Отклонение шнура от пластины = ошибка установки.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">Водяной уровень для балок</h4>
                <p className="text-muted text-sm">
                  Шланговый уровень (гидроуровень) дешёв и точен. Используем для выверки обвязки и ростверков — точность до миллиметра на десятки метров.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Работа с дефектами заводского производства
            </h2>

            <p className="text-muted leading-relaxed mb-6">
              Даже у хороших заводов бывает брак: отверстия не совпадают, длина отличается на 5–10 мм, отсутствует отверстие под заземление. Главное правило — не «допилим на месте» без согласования.
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li>
                <strong>Несовпадение отверстий:</strong> Проверяем соединяемые элементы — часто ошибка в выборе детали, а не брак. Если действительно не сходится — связываемся с заводом, получаем решение.
              </li>
              <li>
                <strong>Отсутствующие отверстия:</strong> Сверлить можно, но сначала уточняем схему — возможно, изменилась конструкция, и отверстие теперь не нужно.
              </li>
              <li>
                <strong>Деформация элементов при транспорте:</strong> Лёгкие профили ЛСТК гнутся. Мелкие деформации правим на месте, серьёзные — замена элемента. Не пытайтесь «втянуть» в проект сильно погнутую ферму.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Скрытые моменты: то, что не видно сразу
            </h2>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Усадка фундамента первые 3 месяца</h3>
              <p className="text-muted">
                Даже правильно залитый фундамент даёт усадку 3–5 мм в первые месяцы. Мы оставляем регулировочные прокладки под колоннами толщиной 10–15 мм и подтягиваем крепление через месяц после монтажа. Иначе появляются зазоры, где не должно быть.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Гидроизоляция — до монтажа стен</h3>
              <p className="text-muted">
                Пока нет стеновых панелей, кровля должна быть защищена. Ждёте поставку сэндвичей 2 недели, а идут дожди? Каркас промокает, потом ржавеет изнутри. Используем временную гидроизоляцию из плёнки — дёшево и надёжно.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Приёмка металлоконструкций: чеклист для заказчика
            </h2>

            <p className="text-muted leading-relaxed mb-6">
              Контроль качества монтажа — задача не только подрядчика, но и заказчика. Приёмка металлоконструкций проводится поэтапно. Вот что можно проверить без инженерного образования:
            </p>

            <div className="grid gap-3 my-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-medium">1</span>
                <p className="text-muted text-sm">Визуальная проверка всех болтов — нет ли пустых отверстий, не торчат ли болты «наполовину»</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-medium">2</span>
                <p className="text-muted text-sm">Проверка шварами — зазоры между балками и колоннами не должны превышать 2 мм</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-medium">3</span>
                <p className="text-muted text-sm">Водяной уровень на нескольких фермах — проверка отсутствия прогибов</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-medium">4</span>
                <p className="text-muted text-sm">Визуальная оценка сварки — швы ровные, без пор и подрезов, вся сварка окрашена грунтом</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-medium">5</span>
                <p className="text-muted text-sm">Проверка документации — наличие исполнительной схемы с фактическими размерами</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              FAQ: частые вопросы о монтаже металлоконструкций
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Какие допуски допустимы при монтаже металлоконструкций?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  По СП 70.13330 допуск на вертикаль колонн — не более 5 мм на 3 метра высоты. Отклонение по диагонали пролёта — до 10 мм на 20 метров. Для <strong>монтажа ангаров из металлоконструкций</strong> критична точность установки первых двух колонн — от них «пляшет» весь каркас.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Можно ли сверлить дополнительные отверстия в металлоконструкциях?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Можно, но только после согласования с проектировщиком. ЛСТК-профили имеют тонкие стенки (1,5–3 мм), сверление ослабляет сечение. Для <strong>монтажа металлического каркаса здания</strong> иногда требуется сверление под коммуникации — используйте специальные проходные узлы, предусмотренные в проекте.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Как проверить качество монтажа металлоконструкций?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Визуально: все болты затянуты, сварные швы окрашены, нет зазоров между элементами. Инструментально: отвесом проверяем вертикаль колонн, шнуром — прямолинейность ряда, диагонали — геометрию пролёта. Обязательна проверка документации: исполнительная схема, протоколы УЗК сварных швов.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Когда подтягивать анкерные болты после монтажа?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Первый раз — через 7–10 дней после <strong>монтажа колонн и ферм</strong>, когда фундамент даст первичную усадку. Второй раз — через месяц, когда усадка стабилизируется. Важно не перетянуть: усилие затяжки должно соответствовать проекту (обычно 200–400 Н·м для М16–М24).
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Сколько времени занимает монтаж металлоконструкций?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Монтаж металлокаркаса ангара 500 м² бригадой из 4 человек занимает 3–5 дней. Сложные многоферменные конструкции, высотные здания или объекты с крановой нагрузкой требуют до 2–3 недель. Погода критична: при ветре свыше 15 м/с и дожде работы останавливаются.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Нужен ли допуск СРО для монтажа металлоконструкций?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Для большинства объектов из ЛСТК (склады, ангары до 2 этажей) допуск СРО не требуется. Для ответственных конструкций (цеха с кранами, многоэтажные здания, объекты с повышенной ответственностью) подрядчик должен иметь соответствующий допуск.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Выводы
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Качественный <strong>монтаж металлоконструкций</strong> — это системный процесс с контролем на каждом этапе. Дорогие ошибки при монтаже колонн и ферм случаются не от сложности конструкции, а от пропущенных базовых проверок. Соблюдение технологии, контроль качества и правильная приёмка металлоконструкций гарантируют долговечность и безопасность здания.
            </p>
            <p className="text-muted leading-relaxed">
              МАКСТИЛ специализируется на <strong>монтаже ангаров из металлоконструкций</strong> и промышленных зданий в Белгородской области. Все бригады проходят внутреннее обучение, работаем по технологическим картам с чек-листами контроля качества.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Планируете строительство?
            </h3>
            <p className="text-muted mb-6">
              Наши инженеры проконсультируют по технологии монтажа и рассчитают стоимость работ под ваш объект.
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
