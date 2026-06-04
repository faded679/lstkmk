import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Фундамент под быстровозводимое здание из металлоконструкций | МАКСТИЛ",
  description:
    "Какой фундамент нужен под быстровозводимое здание из ЛСТК: типы, выбор по грунту, глубина заложения, типичные ошибки и как их избежать.",
  keywords: [
    "фундамент под быстровозводимое здание",
    "фундамент под металлоконструкции",
    "фундамент под ангар",
    "фундамент ЛСТК",
    "свайный фундамент под склад",
    "ленточный фундамент металлокаркас",
  ],
  openGraph: {
    title: "Фундамент под быстровозводимое здание из металлоконструкций",
    description:
      "Типы фундаментов, выбор по грунту и типичные ошибки при строительстве из ЛСТК.",
    url: "https://lstkmk.ru/articles/fundament-pod-bystrovozvodimoe-zdanie/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/fundament-pod-bystrovozvodimoe-zdanie/",
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
              Фундамент под быстровозводимое здание: как выбрать и не ошибиться
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>4 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Фундамент — единственная часть здания, которую нельзя переделать без разборки всего строения. Ошибка здесь обходится дороже всего. Разбираем, какой тип фундамента подходит под металлокаркас и от чего зависит выбор.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему для ЛСТК нужен другой подход
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлокаркас весит в 3–4 раза меньше кирпичного или железобетонного здания той же площади. Это меняет нагрузку на фундамент: давление на грунт ниже, можно применять облегчённые конструкции. Но есть нюанс — лёгкие здания сильнее подвержены ветровому опрокидыванию, поэтому анкеровка колонн к фундаменту критически важна.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы фундаментов и когда что применять
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              1. Свайно-ростверковый фундамент
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Когда применяется:</strong> слабые, пучинистые или водонасыщенные грунты; неоднородный грунт по пятну застройки; здания с нагрузкой на колонну от 30 тонн.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Буронабивные или забивные сваи длиной 3–8 м заглубляются ниже уровня промерзания</li>
              <li>Ростверк (монолитная балка) объединяет сваи и служит основанием для колонн</li>
              <li>Минимальный срок выполнения — 10–14 дней</li>
              <li>Подходит для большинства грунтов Центральной России</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              2. Ленточный монолитный фундамент
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Когда применяется:</strong> однородные несущие грунты (суглинок, супесь, плотный песок); небольшие здания до 500 м²; когда нужен цокольный этаж или смотровая яма.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Глубина заложения — ниже уровня промерзания грунта в регионе</li>
              <li>Для Белгородской области — не менее 1,0–1,2 м</li>
              <li>Обязательное утепление и гидроизоляция при наличии отапливаемого здания</li>
              <li>Срок выполнения — 2–3 недели с учётом набора прочности бетона</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              3. Монолитная плита (УШП)
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Когда применяется:</strong> высокий уровень грунтовых вод; торфянистые, просадочные грунты; когда нужен тёплый пол по всей площади.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Утеплённая шведская плита (УШП) — плита с интегрированным утеплением снизу</li>
              <li>Равномерно распределяет нагрузку по всей площади</li>
              <li>Дороже ленточного в 1,5–2 раза, но исключает риск неравномерной осадки</li>
              <li>Оптимально для животноводческих комплексов и отапливаемых производств</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              4. Винтовые сваи
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Когда применяется:</strong> небольшие здания до 200 м²; ограниченные сроки; сложный рельеф или удалённые объекты без техники.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Монтаж за 1–2 дня без земляных работ</li>
              <li>Не требует бетонирования и набора прочности</li>
              <li>Ограниченная несущая способность — не подходит для тяжёлых нагрузок</li>
              <li>Срок службы 30–50 лет в зависимости от качества металла и покрытия</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что влияет на выбор фундамента
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Тип грунта</strong> — определяется геологическими изысканиями или ручным бурением</li>
              <li><strong>Уровень грунтовых вод</strong> — влияет на глубину заложения и гидроизоляцию</li>
              <li><strong>Нагрузки</strong> — вес здания, снеговая нагрузка, технологическое оборудование</li>
              <li><strong>Наличие подвала или ямы</strong> — диктует тип конструкции</li>
              <li><strong>Сроки</strong> — монолитный фундамент требует 28 дней на набор прочности</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типичные ошибки при устройстве фундамента
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Экономия на геологии.</strong> Самая распространённая ошибка — строить «как у соседа» без геологических изысканий. Грунт на участке может кардинально отличаться даже в пределах 50 метров. Геология стоит 15 000–40 000 ₽, переделка фундамента — в десятки раз дороже.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Недостаточная анкеровка.</strong> Лёгкие металлические здания в регионах с сильными ветрами требуют надёжного крепления колонн. Анкерные болты должны быть рассчитаны на вырывающие нагрузки, а не только на сжатие.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Заливка при морозе без прогрева.</strong> Бетон при температуре ниже +5°C без специальных добавок и прогрева теряет до 30% прочности. Экономия на зимнем бетонировании оборачивается трещинами и просадками.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Игнорирование отмостки.</strong> Без отмостки вода уходит под фундамент, размывает грунт и провоцирует морозное пучение. Отмостка шириной 1 м с уклоном от здания — обязательный элемент.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Порядок работ
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Геологические изыскания — бурение и анализ грунта</li>
              <li>Проектирование фундамента с расчётом нагрузок</li>
              <li>Разбивка осей и земляные работы</li>
              <li>Устройство подушки (песок, щебень)</li>
              <li>Монтаж опалубки и арматурного каркаса</li>
              <li>Установка анкерных болтов под колонны по проекту</li>
              <li>Бетонирование и уход за бетоном</li>
              <li>Гидроизоляция и обратная засыпка</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Вывод
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Правильный фундамент — это результат геологии, грамотного проекта и соблюдения технологии. Для большинства ЛСТК-зданий в Центральной России оптимален свайно-ростверковый или ленточный фундамент. Не экономьте на изысканиях: это единственный способ получить надёжное основание без сюрпризов.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Нужен расчёт фундамента под ваш объект?
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ выполняет полный цикл работ — от геологии и проекта до монтажа здания под ключ. 14 лет опыта в Белгородской области и регионах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость проекта
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
