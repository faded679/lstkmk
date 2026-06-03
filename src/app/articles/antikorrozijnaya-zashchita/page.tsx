import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Антикоррозийная защита металлоконструкций: методы и сроки | МАКСТИЛ",
  description:
    "Горячее цинкование, порошковая окраска, грунт-эмали — сравниваем стоимость, долговечность и применимость для разных условий эксплуатации. Рекомендации от МАКСТИЛ.",
  keywords: [
    "антикоррозийная защита металлоконструкций",
    "горячее цинкование стоимость",
    "порошковая окраска плюсы",
    "грунтовка металла сроки",
    "оцинкованный профиль служба",
    "защита от коррозии ангар",
  ],
  openGraph: {
    title: "Антикоррозийная защита металлоконструкций: методы и сроки",
    description: "Как защитить металлоконструкции от коррозии на десятилетия",
    url: "https://lstkmk.ru/articles/antikorrozijnaya-zashchita/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/antikorrozijnaya-zashchita/",
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
              Технологии
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Антикоррозийная защита металлоконструкций: методы и сроки
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>20 марта 2026</span>
              <span>•</span>
              <span>6 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Коррозия — главный враг металлоконструкций. Правильная защита увеличивает срок службы здания с 10–15 до 50+ лет. Разбираем методы, сроки и экономику.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему металл ржавеет?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Коррозия — электрохимическая реакция железа с кислородом и водой. Скорость разрушения зависит от:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Влажности воздуха — выше 60% процесс ускоряется в 2–3 раза</li>
              <li>Наличия агрессивных сред — соли, кислоты, щёлочи</li>
              <li>Температурных перепадов — конденсация влаги</li>
              <li>Механических повреждений — царапины нарушают защитный слой</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Метод 1: Горячее цинкование (ГЦ)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Погружение деталей в ванну расплавленного цинка при 450–460°C. Образуется сплав цинка с железом толщиной 50–150 мкм.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Характеристики</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Толщина покрытия: 50–150 мкм (класс 600–1400 г/м²)</li>
                <li>Срок службы: 30–70 лет в умеренном климате</li>
                <li>Самовосстановление: цинк «заплывает» мелкие царапины</li>
                <li>Температурный диапазон: -60…+400°C</li>
              </ul>
              <p className="text-muted text-sm mb-2">
                <strong>Стоимость:</strong> 35 000–55 000 ₽/тонна металла
              </p>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> ЛСТК-зданий, мачт, опор ЛЭП, конструкций в открытом воздухе
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Метод 2: Порошковая окраска
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Нанесение полимерного порошка электростатическим методом с последующей полимеризацией при 180–200°C.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Характеристики</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Толщина покрытия: 60–120 мкм</li>
                <li>Срок службы: 15–25 лет</li>
                <li>Большой выбор цветов по RAL</li>
                <li>Высокая ударная прочность</li>
              </ul>
              <p className="text-muted text-sm mb-2">
                <strong>Стоимость:</strong> 150–300 ₽/м² площади
              </p>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> Фасадов, ограждений, элементов требующих цветового решения
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Метод 3: Грунт-эмальные покрытия
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Многослойная система: грунтовка (антикоррозийная) + эмаль (защитно-декоративная). Наносится кистью, валиком или распылением.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Характеристики</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Толщина покрытия: 80–200 мкм (3–5 слоёв)</li>
                <li>Срок службы: 5–12 лет (требует обновления)</li>
                <li>Ремонтопригодность — легко подкрасить</li>
                <li>Можно наносить на площадке</li>
              </ul>
              <p className="text-muted text-sm mb-2">
                <strong>Стоимость:</strong> 80–150 ₽/м² материалы + работы
              </p>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> Монтажных соединений, труднодоступных мест, временных решений
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Метод 4: Металлизация (напыление цинка)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Нанесение расплавленного цинка или алюминия газопламенным напылением. Альтернатива горячему цинкованию для крупных конструкций, которые не помещаются в ванну.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Характеристики</h3>
              <ul className="list-disc list-inside space-y-1 text-muted mb-3">
                <li>Толщина покрытия: 100–300 мкм</li>
                <li>Срок службы: 20–40 лет</li>
                <li>Можно наносить на площадке</li>
                <li>Высокая стоимость оборудования</li>
              </ul>
              <p className="text-muted text-sm mb-2">
                <strong>Стоимость:</strong> 400–600 ₽/м²
              </p>
              <p className="text-muted text-sm">
                <strong>Идеально для:</strong> Крупногабаритных конструкций, мостов, резервуаров
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнительная таблица методов
            </h2>

            <table className="w-full text-left border-collapse mb-8">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-semibold text-foreground">Метод</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Срок службы</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Стоимость</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Применение</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Горячее цинкование</td>
                  <td className="py-3 px-4">30–70 лет</td>
                  <td className="py-3 px-4">Высокая</td>
                  <td className="py-3 px-4">Несущие конструкции</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Порошковая окраска</td>
                  <td className="py-3 px-4">15–25 лет</td>
                  <td className="py-3 px-4">Средняя</td>
                  <td className="py-3 px-4">Фасады, ограждения</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Грунт-эмали</td>
                  <td className="py-3 px-4">5–12 лет</td>
                  <td className="py-3 px-4">Низкая</td>
                  <td className="py-3 px-4">Монтаж, ремонт</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Металлизация</td>
                  <td className="py-3 px-4">20–40 лет</td>
                  <td className="py-3 px-4">Высокая</td>
                  <td className="py-3 px-4">Крупные объекты</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Рекомендации по выбору
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Для ЛСТК-зданий:</strong> Горячее цинкование профилей на заводе — золотой стандарт. Никаких дополнительных работ на площадке.</li>
              <li><strong>Для фасадов:</strong> Оцинкование + порошковая окраска для цвета и дополнительной защиты.</li>
              <li><strong>Для монтажных соединений:</strong> Грунт-эмали после сборки — защита срезов и открытых участков.</li>
              <li><strong>Для агрессивных сред:</strong> Горячее цинкование + полимерное покрытие (дуплекс-система) — срок до 80 лет.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Частые ошибки
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted mb-6">
              <li><strong>Экономия на цинковании.</strong> Нецинкованный профиль в условиях России ржавеет за 3–5 лет.</li>
              <li><strong>Игнорирование срезов.</strong> Места резки профиля остаются без защиты — источник коррозии.</li>
              <li><strong>Покраска по ржавчине.</strong> Эмаль над неровной ржавчиной отслаивается через год.</li>
              <li><strong>Отсутствие контроля.</strong> Покрытие требует проверки толщиномером — не «на глаз».</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Долговечность металлоконструкций — это инвестиция. Горячее цинкование стоит дороже, но окупается многократно за счёт отсутствия ремонтов и замены элементов. Для ЛСТК-зданий это обязательный стандарт, а не опция.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Строим из оцинкованных конструкций
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ использует только горячеоцинкованный профиль (покрытие не менее 140 г/м²) для всех несущих элементов. Гарантия на каркас — 50 лет.
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
                Узнать подробности
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
