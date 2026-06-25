import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар для птицеводства: птичник из металлоконструкций под ключ | МАКСТИЛ",
  description:
    "Строительство птичников из металлоконструкций и ЛСТК под ключ. Бройлеры, несушки, индейка: размеры, вентиляция, освещение, цены 2026. Птицеводческие ангары от производителя.",
  keywords: [
    "ангар для птицеводства",
    "птичник из металлоконструкций",
    "птичник под ключ цена",
    "бройлерник строительство",
    "птицеводческий ангар ЛСТК",
    "курятник промышленный из металла",
  ],
  openGraph: {
    title: "Ангар для птицеводства: птичник из металлоконструкций",
    description: "Промышленные птичники из ЛСТК и металлоконструкций. Размеры, вентиляция, цены.",
    url: "https://lstkmk.ru/articles/angar-dlya-pticevodstva/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/angar-dlya-pticevodstva/" },
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
              Ангар для птицеводства: птичник из металлоконструкций под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Промышленный птичник из металлоконструкций — оптимальный выбор для птицеводческих предприятий с поголовьем от 10 000 голов. Строительство занимает 60–90 дней, стоимость — от 4 500 ₽/м². Ключевые требования к конструкции: надёжная вентиляция, тепловой режим, герметичность.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры птичников</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Назначение</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Поголовье</th>
                    <th className="text-left py-3 font-semibold text-foreground">Высота</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Бройлеры (напольное)", "18×72 м", "до 18 000 гол.", "2,5–3,0 м"],
                    ["Бройлеры (крупное)", "18×96 м", "до 25 000 гол.", "3,0 м"],
                    ["Несушки (клеточное)", "12×72 м", "до 40 000 гол.", "3,5–4,0 м"],
                    ["Индейка", "18×96 м", "до 8 000 гол.", "3,5 м"],
                    ["Утки, гуси", "12×60 м", "до 10 000 гол.", "2,5 м"],
                  ].map(([k, v, t, h]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив птичника из металлоконструкций</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Каркас</h3>
            <p className="text-muted leading-relaxed mb-4">
              Несущий каркас — горячекатаный профиль или ЛСТК. Для птичников шириной до 18 м оптимален ЛСТК: меньше вес, выше точность, нет коррозии. Для ширины 21–24 м применяют горячекатаные фермы с шагом рам 6 м.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Ограждающие конструкции</h3>
            <p className="text-muted leading-relaxed mb-4">
              Стены и кровля — сэндвич-панели толщиной 100–150 мм с минеральной ватой. Важно: стыки панелей заполняются монтажной пеной и закрываются нащельниками — птичник должен быть герметичным (защита от грызунов, диких птиц). Полы — бетонная стяжка с уклоном 1%, подстилка (опилки, солома).
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Вентиляция — критически важна</h3>
            <p className="text-muted leading-relaxed mb-4">
              Система вентиляции — ключевой элемент птичника. Минимальный воздухообмен — 0,7 м³/ч на 1 кг живой массы. Схемы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Тоннельная вентиляция</strong> — приточные клапаны в торце, вытяжные вентиляторы в другом торце. Скорость воздуха 2–3 м/с охлаждает птицу летом</li>
              <li><strong>Поперечная вентиляция</strong> — вентиляторы в стенах по всей длине. Применяется для умеренного климата</li>
              <li><strong>Комбинированная</strong> — тоннельная летом, поперечная зимой</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              На 1 000 м² площади птичника нужно вентиляторов суммарной производительностью не менее 80 000–120 000 м³/ч.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Отопление</h3>
            <p className="text-muted leading-relaxed mb-4">
              Для бройлеров в первые 2 недели жизни нужна температура +30–32 °С. Варианты:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Газовые брудеры — локальный обогрев зон выращивания молодняка</li>
              <li>Водяное отопление с радиаторами под потолком — равномерный прогрев</li>
              <li>Тепловые завесы на воротах — предотвращают потери тепла при погрузке</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Освещение</h2>
            <p className="text-muted leading-relaxed mb-6">
              Освещённость в птичнике регулируется программой и влияет на продуктивность. Для бройлеров применяются светодиодные светильники с диммером: яркость снижается в ночное время. Норма — 20–40 лк на уровне кормушек. Все светильники — IP65, влагозащищённые.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость птичника из металлоконструкций</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас + ограждение (тёплый контур)", "от 4 500"],
                    ["С вентиляцией и отоплением", "от 7 000"],
                    ["Под ключ (без технологического оборудования)", "от 9 000"],
                    ["Под ключ с клеточным оборудованием", "от 18 000"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Птичник из металлоконструкций строится в 2–3 раза быстрее кирпичного и при грамотном проектировании ничем не уступает ему по тепловому режиму. Вентиляция — главная статья расходов на эксплуатацию: экономить на ней нельзя. Срок окупаемости птичника на 18 000 бройлеров при 6 оборотах в год — 5–7 лет.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим птичник под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — строительство промышленных птичников из металлоконструкций в Белгородской области и ЦФО.</p>
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
