import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Как подготовить площадку под быстровозводимое здание | МАКСТИЛ",
  description:
    "Пошаговая инструкция по подготовке строительной площадки: геологические изыскания, разметка, земляные работы, фундамент. Советы от профессионалов МАКСТИЛ.",
  keywords: [
    "подготовка площадки под строительство",
    "геологические изыскания фундамент",
    "земляные работы ангар",
    "фундамент для ЛСТК",
    "строительство под ключ подготовка",
    "разметка строительной площадки",
  ],
  openGraph: {
    title: "Как подготовить площадку под быстровозводимое здание",
    description: "Полное руководство по подготовке площадки от МАКСТИЛ",
    url: "https://lstkmk.ru/articles/podgotovka-ploshchadki/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/podgotovka-ploshchadki/",
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
              Как подготовить площадку под быстровозводимое здание
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>15 мая 2026</span>
              <span>•</span>
              <span>5 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Качественная подготовка площадки — залог долговечности быстровозводимого здания. Пошаговое руководство от геологии до готового фундамента.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 1: Геологические изыскания
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Перед проектированием необходимо изучить грунты на участке. Бурение скважин (3–6 точек на 500 м²) позволяет определить:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Несущую способность грунта — расчётное сопротивление R должно быть не менее 150 кПа</li>
              <li>Уровень грунтовых вод — критично для выбора типа фундамента</li>
              <li>Глубину промерзания — влияет на заглубление основания</li>
              <li>Наличие слабых просадочных или торфяных слоёв</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Сроки:</strong> 5–10 рабочих дней. <strong>Стоимость:</strong> от 15 000 ₽ за участок до 1000 м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 2: Планировка территории
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Сносятся старые постройки, убирается мусор, выкорчёвываются пни. Площадка расчищается на 3–5 метров шире габаритов будущего здания — для удобства монтажа и обслуживания.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Важно обеспечить подъезд для грузового транспорта (самосвалы, краны, фуры с металлоконструкциями). Радиус разворота должен быть не менее 12 метров.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 3: Выемка грунта и подготовка основания
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Снимается плодородный слой (чернозём) толщиной 20–30 см — он непригоден для основания и может использоваться для озеленения территории после строительства.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Поверхность выравнивается с уклоном 2–3% для отвода дождевой воды. При необходимости проводится <strong>замена грунта</strong>: слабые грунты вывозятся, ввозятся песок и щебень с послойным уплотнением виброплитой.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 4: Геодезическая разметка
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Геодезисты наносят на площадку ось будущего здания с точностью ±10 мм. Используются:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Электронные тахеометры для разбивки осей</li>
              <li>Нивелиры для контроля отметок высот</li>
              <li>Железные колышки с закладными шайбами под колонны</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этап 5: Устройство фундамента
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для ЛСТК-зданий оптимальны три типа фундаментов:
            </p>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Свайно-ростверковый</h3>
              <p className="text-muted mb-2">
                Буронабивные сваи диаметром 250–400 мм на глубину 1,5–2,5 м. Надёжный вариант для сложных грунтов.
              </p>
              <p className="text-sm text-muted">Срок: 7–10 дней</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ленточный мелкозаглубленный</h3>
              <p className="text-muted mb-2">
                Ленты шириной 400–600 мм, заглубление 0,5–0,7 м. Экономичный вариант для нормальных грунтов.
              </p>
              <p className="text-sm text-muted">Срок: 5–7 дней</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Плитный (УШП)</h3>
              <p className="text-muted mb-2">
                Монолитная плита толщиной 200–300 мм с утеплением. Идеален для складов с высокими половыми нагрузками.
              </p>
              <p className="text-sm text-muted">Срок: 14–21 день</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Частые ошибки заказчиков
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Экономия на геологии.</strong> Строительство «вслепую» часто приводит к просадкам и трещинам в стенах.</li>
              <li><strong>Неправильная разметка.</strong> Отклонение осей всего на 5 см делает невозможным монтаж заводских элементов.</li>
              <li><strong>Отсутствие дренажа.</strong> Вода под фундаментом размывает основание — здание «плывёт».</li>
              <li><strong>Самодельный фундамент.</strong> Бетонирование без арматурных каркасов и виброуплотнения снижает прочность в 2–3 раза.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итого
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Подготовка площадки для ЛСТК-здания занимает 2–4 недели и включает геологию, земляные работы и фундамент. Это инвестиция в долговечность: правильное основание служит 50+ лет без проблем.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Нужна помощь с подготовкой площадки?
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ выполняет полный цикл работ: геология, фундамент, монтаж. Оставьте заявку — вышлем инженера на бесплатный замер.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость фундамента
              </a>
              <a
                href="/#contacts"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                Вызвать инженера
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
