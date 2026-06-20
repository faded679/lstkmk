import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Реконструкция и расширение ангара: как пристроить без проблем | МАКСТИЛ",
  description:
    "Реконструкция и расширение ангара из ЛСТК: как пристроить новые секции, поднять кровлю, утеплить старый ангар. Проектирование, согласование, типовые решения и стоимость работ.",
  keywords: [
    "реконструкция ангара",
    "расширение ангара",
    "пристройка к ангару",
    "увеличить ангар",
    "реконструкция металлического здания",
    "достроить ангар",
    "поднять кровлю ангара",
  ],
  openGraph: {
    title: "Реконструкция и расширение ангара",
    description:
      "Как правильно пристроить или реконструировать существующий ангар.",
    url: "https://lstkmk.ru/articles/rekonstrukciya-i-rasshirenie-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/rekonstrukciya-i-rasshirenie-angara/",
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
              Реконструкция и расширение ангара
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>18 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Бизнес растёт быстрее, чем мы успеваем построить здание. И через 3–5 лет встаёт вопрос: пристроить к существующему ангару или строить новый? Разбираем, как грамотно расширить ангар, какие есть варианты и сколько это стоит.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда расширение оправдано
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Каркас существующего ангара в хорошем состоянии</li>
              <li>Свободная площадь у одной из стен (с запасом 3+ м)</li>
              <li>Назначение нового объёма совместимо со старым</li>
              <li>Грунты участка позволяют ставить новый фундамент рядом</li>
              <li>Нет ограничений по высоте и плотности застройки</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Если эти условия выполнены — расширение обойдётся на 20–30% дешевле строительства нового ангара аналогичной площади. Сэкономите на одной общей стене и инженерных сетях.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Способы расширения ангара
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Есть четыре основных схемы:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li><strong>Пристройка вдоль длинной стены</strong> — самый дешёвый и быстрый вариант. Новый ангар «приклеивается» к существующему</li>
              <li><strong>Пристройка к торцу</strong> — продолжение здания. Сложнее технически, требует разборки торцевой стены</li>
              <li><strong>Подъём кровли</strong> — увеличение высоты при том же контуре. Подходит для перехода на стеллажное хранение</li>
              <li><strong>Надстройка антресоли</strong> — встроенный мезонин внутри существующего объёма</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Главные опасности пристройки
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Снеговой мешок.</strong> Если новый ангар ниже старого, на крыше нового образуется зона повышенной снеговой нагрузки у стены. На 2–3 м от стены нагрузка может быть в 2–4 раза выше обычной. Это нужно учесть в расчёте каркаса пристройки.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Совместная осадка фундаментов.</strong> Старый и новый фундамент будут оседать с разной скоростью, особенно в первые годы. Чтобы не разорвало стены и кровлю, делают деформационный шов между объёмами.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Состояние старого каркаса.</strong> Если пристройка использует общую колонну со старым ангаром, нужна экспертиза — выдержит ли старая колонна дополнительную нагрузку.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этапы реконструкции
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Техническое обследование существующего ангара</li>
              <li>Геология участка пристройки</li>
              <li>Проект реконструкции (КМ, КМД)</li>
              <li>Согласование (если изменяется этажность, площадь, назначение)</li>
              <li>Фундамент пристройки</li>
              <li>Демонтаж стены примыкания</li>
              <li>Монтаж нового каркаса и ограждения</li>
              <li>Стыковка инженерных сетей</li>
              <li>Внутренние работы и сдача</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Поднять кровлю — реальный сценарий
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Подъём кровли существующего ангара технически возможен, если каркас в хорошем состоянии. Колонны наращивают вставками, кровлю поднимают целиком гидравлическими домкратами или собирают новую поверх. Стоимость работ — 40–60% от стоимости строительства такого же ангара с нуля.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Подъём оправдан при увеличении высоты на 2 м и больше — для перехода с напольного хранения на стеллажное это окупается за счёт удвоения вместимости.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Утепление старого ангара
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Превратить холодный ангар в тёплый — частый запрос. Технологически это монтаж сэндвич-панелей поверх существующего профнастила или замена ограждения целиком. Главные нюансы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Проверка несущей способности каркаса — добавляется вес панелей</li>
              <li>Контроль точки росы — между профнастилом и новыми панелями возможен конденсат</li>
              <li>Замена ворот и окон на тёплые</li>
              <li>Устройство отопления и герметизация швов</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стоимость утепления существующего ангара — 8 000–14 000 ₽/м² ограждения. Это 50–70% от стоимости строительства нового тёплого ангара.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда выгоднее новый ангар
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Реконструкция теряет смысл, если:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Каркас старого ангара корродирован больше 30%</li>
              <li>Фундамент имеет просадки или трещины</li>
              <li>Новый объём по технологии несовместим со старым</li>
              <li>Требуется кардинальная смена планировки</li>
              <li>Площадка не позволяет пристроить с нужной стороны</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Расширение ангара — выгодное решение, если каркас в хорошем состоянии и площадка позволяет. Главное — не делать пристройку «по аналогии», а заказать полноценный проект с учётом снеговых мешков, осадки и совместимости конструкций. Грамотная реконструкция экономит 20–40% бюджета по сравнению с новым строительством.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Оценим возможность реконструкции
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ обследует существующий ангар, готовит проект пристройки и согласовывает изменения. Расскажем, что выгоднее — расширять или строить новое.
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
