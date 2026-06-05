import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Утепление быстровозводимого здания: нормы и практика — МАКСТИЛ",
  description:
    "Расчёт толщины утеплителя по СП 50 для отапливаемых складов, цехов и СТО. Типичные ошибки монтажа сэндвич-панелей и как избежать теплопотерь.",
  keywords: ["утепление ангара", "толщина сэндвич-панелей", "утепление склада", "теплоизоляция металлоконструкций", "СП 50 теплозащита"],
  alternates: { canonical: "https://lstkmk.ru/articles/uteplenie-bystrovozvodimogo-zdaniya/" },
};

export default function ArticlePage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} weight="bold" />
            Все статьи
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
              Материалы
            </span>
            <span className="text-xs text-muted">5 июня 2026 · 8 мин</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-snug">
            Утепление быстровозводимого здания: нормы и практика
          </h1>

          <img
            src="/articles/uteplenie-bystrovozvodimogo-zdaniya.jpg"
            alt="Утепление быстровозводимого здания"
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-10"
          />

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-foreground space-y-6">

            <p className="text-muted">
              Один из самых частых вопросов при проектировании отапливаемого здания — какой толщины должны быть панели? Ответ зависит от климатической зоны, назначения здания и нормативных требований СП 50.13330. Разберём по порядку.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Нормативная основа: СП 50.13330</h2>
            <p className="text-muted">
              СП 50.13330.2012 «Тепловая защита зданий» — основной документ, регулирующий теплозащитные характеристики ограждающих конструкций. Он задаёт нормируемое значение приведённого сопротивления теплопередаче R₀ в зависимости от градусо-суток отопительного периода (ГСОП) региона строительства.
            </p>
            <p className="text-muted">
              Для Белгорода ГСОП ≈ 3 800, для Москвы ≈ 4 700, для Новосибирска ≈ 6 700. Чем севернее — тем толще нужен утеплитель.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Рекомендуемые толщины сэндвич-панелей</h2>

            <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Регион</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Стены (минвата)</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Кровля (минвата)</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Стены (ПИР)</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Юг России (Белгород)</td>
                  <td className="px-4 py-3">100 мм</td>
                  <td className="px-4 py-3">150 мм</td>
                  <td className="px-4 py-3">80 мм</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Центр (Москва)</td>
                  <td className="px-4 py-3">150 мм</td>
                  <td className="px-4 py-3">200 мм</td>
                  <td className="px-4 py-3">120 мм</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Урал (Екатеринбург)</td>
                  <td className="px-4 py-3">200 мм</td>
                  <td className="px-4 py-3">250 мм</td>
                  <td className="px-4 py-3">150 мм</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Сибирь (Новосибирск)</td>
                  <td className="px-4 py-3">250 мм</td>
                  <td className="px-4 py-3">300 мм</td>
                  <td className="px-4 py-3">200 мм</td>
                </tr>
              </tbody>
            </table>

            <p className="text-muted text-xs">* Приведённые значения ориентировочны. Точный расчёт выполняется по энергетическому паспорту здания.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Виды утеплителей и их характеристики</h2>

            <h3 className="text-base font-semibold text-foreground">Минеральная вата</h3>
            <p className="text-muted">
              Самый распространённый наполнитель. Коэффициент теплопроводности λ = 0,036–0,042 Вт/(м·К). Главные плюсы — негорючесть (класс А1 по ГОСТ 30244), паропроницаемость, звукоизоляция. Минус — при намокании теряет до 50% теплозащитных свойств, поэтому важна герметичность стыков панелей.
            </p>

            <h3 className="text-base font-semibold text-foreground">ПИР (полиизоцианурат)</h3>
            <p className="text-muted">
              Более эффективный утеплитель: λ = 0,022–0,026 Вт/(м·К) — вдвое лучше минваты. Позволяет применять панели меньшей толщины при той же теплозащите. Класс горючести — Г1 (слабогорючий). Идеален для холодильных складов и объектов с ограниченной высотой.
            </p>

            <h3 className="text-base font-semibold text-foreground">Пенополистирол (EPS)</h3>
            <p className="text-muted">
              Бюджетный вариант: λ = 0,038–0,045 Вт/(м·К). Не подходит для производственных зданий с открытым огнём — класс горючести Г3–Г4. Применяется в холодных складах, гаражах, торговых зданиях без постоянного пребывания людей.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Типичные ошибки при монтаже</h2>

            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li><strong>Незаполненные стыки панелей.</strong> Щели в замковых соединениях — главный источник теплопотерь. Стыки должны промазываться герметиком на всю глубину замка.</li>
              <li><strong>Неправильная ориентация панелей.</strong> Кровельные панели укладываются рёбрами вдоль ската, не поперёк — иначе вода затекает под замок.</li>
              <li><strong>Мостики холода на опорных элементах.</strong> Металлические прогоны и ригели без термоизоляционных прокладок создают мостики холода. Решение — использовать полиамидные разрывы или накладные обрамления.</li>
              <li><strong>Нарушение пароизоляции.</strong> В отапливаемых зданиях пар движется изнутри наружу. Если пароизоляция повреждена, конденсат скапливается в утеплителе и разрушает его.</li>
              <li><strong>Неверный монтаж оконных и дверных проёмов.</strong> Примыкания к проёмам — зона риска. Нужны доборные элементы и полная герметизация по периметру.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">Холодное или тёплое здание: когда что выбрать</h2>
            <p className="text-muted">
              Если здание не отапливается (навес, стоянка техники, временный склад) — достаточно профнастила или тонких панелей 40–60 мм для защиты от ветра и осадков. Если планируется отопление до +5°C и выше — нужен полноценный расчёт теплозащиты. Экономия на толщине панелей оборачивается повышенными счетами за тепло в течение всего срока эксплуатации.
            </p>

            <div className="mt-10 p-6 bg-accent-blue/5 border border-accent-blue/20 rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-2">Нужен расчёт теплозащиты?</p>
              <p className="text-sm text-muted">
                Наши инженеры подберут оптимальную толщину сэндвич-панелей с учётом климата вашего региона и назначения здания. Расчёт — бесплатно при заказе проекта.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
