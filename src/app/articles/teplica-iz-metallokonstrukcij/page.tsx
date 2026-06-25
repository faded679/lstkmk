import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Теплица из металлоконструкций: промышленная, для фермера, цены | МАКСТИЛ",
  description:
    "Промышленные теплицы из металлоконструкций под поликарбонат и стекло. Размеры, конструктив, отопление. Теплица для фермера под ключ от 350 000 ₽. Сроки и цены 2026.",
  keywords: [
    "теплица из металлоконструкций",
    "промышленная теплица металл",
    "теплица металлокаркас цена",
    "теплица из профильной трубы под ключ",
    "тепличный комплекс строительство",
    "теплица поликарбонат металл",
  ],
  openGraph: {
    title: "Теплица из металлоконструкций: промышленная и фермерская",
    description: "Металлические теплицы под поликарбонат и стекло. Размеры, отопление, цены 2026.",
    url: "https://lstkmk.ru/articles/teplica-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/teplica-iz-metallokonstrukcij/" },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Сельхозздания</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Теплица из металлоконструкций: промышленная, фермерская, цены
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлический каркас — основа для любой промышленной теплицы. Срок службы каркаса из оцинкованного профиля — 30–50 лет. Стоимость теплицы под поликарбонат 12×36 м — от 600 000 ₽, под стекло — от 1,5 млн ₽. Строительство — 15–30 дней.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Виды теплиц по типу покрытия</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Теплица под поликарбонат</h3>
            <p className="text-muted leading-relaxed mb-4">
              Сотовый поликарбонат 8–16 мм — оптимальное покрытие для промышленных теплиц в климате средней полосы. Светопропускание — 80–85%, теплосопротивление 16 мм поликарбоната — R ≈ 0,4 м²·°С/Вт. Срок службы поликарбоната — 10–15 лет. Монтируется в алюминиевые профили или на резиновые уплотнители.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Теплица под стекло</h3>
            <p className="text-muted leading-relaxed mb-4">
              Стекло 4–6 мм даёт максимальное светопропускание (90–92%) и долговечность 40+ лет. Тяжелее поликарбоната — требует более мощного каркаса. Применяется в высокотехнологичных тепличных комплексах, где важен максимум солнечного света для досвечивания.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Плёночная теплица</h3>
            <p className="text-muted leading-relaxed mb-4">
              Дешевле в 3–5 раз, но плёнка служит 3–5 лет. Применяется для сезонного выращивания или как временное решение при запуске бизнеса. Металлический каркас для плёночной теплицы — оцинкованная дуга или ферменная конструкция.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры и цены</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размер</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Покрытие</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["6×12 м", "Поликарбонат 8 мм", "72 м²", "от 180 000 ₽"],
                    ["9×24 м", "Поликарбонат 10 мм", "216 м²", "от 350 000 ₽"],
                    ["12×36 м", "Поликарбонат 16 мм", "432 м²", "от 600 000 ₽"],
                    ["18×60 м", "Поликарбонат 16 мм", "1080 м²", "от 1,5 млн ₽"],
                    ["12×36 м", "Стекло 4 мм", "432 м²", "от 1,2 млн ₽"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3 font-medium text-foreground">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Отопление теплицы</h2>
            <p className="text-muted leading-relaxed mb-4">Выбор системы отопления зависит от выращиваемой культуры и климатической зоны:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Водяное отопление с котлом</strong> — оптимально для площади от 500 м². Трубы прокладываются под стеллажами и вдоль периметра. КПД — 90–95%</li>
              <li><strong>Газовые генераторы тепла</strong> — удобно для небольших теплиц. CO₂ от горения дополнительно питает растения</li>
              <li><strong>Тепловые насосы</strong> — высокие инвестиции, низкие операционные расходы. Окупаемость 5–7 лет</li>
              <li><strong>Инфракрасное отопление</strong> — нагревает растения и почву напрямую, экономит до 30% vs конвекционное</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Вентиляция и затенение</h2>
            <p className="text-muted leading-relaxed mb-6">
              В промышленных теплицах применяются фрамужные форточки с автоматическим открытием при температуре выше +25–28 °С. На площади от 1 000 м² — принудительная вентиляция вентиляторами. Затенение в жаркий сезон — экранирующие сетки с коэффициентом 50–70% или известковая побелка покрытия.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Фундамент</h2>
            <p className="text-muted leading-relaxed mb-6">
              Лёгкий металлический каркас теплицы не требует мощного фундамента. Варианты: забивные стойки (Т-образные) на глубину 0,6–1,0 м ниже глубины промерзания, ленточный фундамент из бетонных блоков по периметру, или винтовые сваи. Для регионов с суровыми зимами — лента заглублённая 1,2–1,5 м.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлическая теплица под поликарбонат — оптимальное соотношение цены и функциональности для фермера и небольшого тепличного предприятия. Срок строительства — 2–3 недели. Инвестиции на 1 000 м² — 1,5–3 млн ₽ в зависимости от комплектации. Срок окупаемости на томатах — 3–4 года.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим теплицу из металлоконструкций под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство и монтаж металлических теплиц для фермерских хозяйств и тепличных предприятий. Белгородская область и ЦФО.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Получить консультацию</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
