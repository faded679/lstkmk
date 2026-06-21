import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Птичник из металлоконструкций: требования и проектирование | МАКСТИЛ",
  description:
    "Строительство птичников из ЛСТК для кур, бройлеров, индеек. Вентиляция, освещение, утепление, нормы посадки. Типовые размеры и стоимость птичника под ключ 2026.",
  keywords: [
    "птичник из металлоконструкций",
    "птичник лстк",
    "строительство птичника",
    "птичник под ключ цена",
    "бройлерник лстк",
    "птицеводческий цех строительство",
  ],
  openGraph: {
    title: "Птичник из металлоконструкций ЛСТК под ключ",
    description: "Проектирование и строительство птичников из ЛСТК: размеры, вентиляция, цены 2026.",
    url: "https://lstkmk.ru/articles/ptichnik-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/ptichnik-iz-metallokonstrukcij/" },
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
              Птичник из металлоконструкций: требования и проектирование
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлокаркасные птичники из ЛСТК вытесняют кирпич и дерево в промышленном птицеводстве. Быстрый монтаж, точная геометрия для размещения клеточных батарей, возможность встроить любую вентиляцию — главные причины выбора этой технологии.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры птичников</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Поголовье</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Бройлерник (напольный)", "18×96 м", "25 000–30 000 бройлеров"],
                    ["Несушка (клеточный)", "12×72 м", "50 000–60 000 кур"],
                    ["Индюшатник", "18×72 м", "8 000–12 000 индеек"],
                    ["Малый птичник (фермер)", "12×36 м", "3 000–5 000 кур"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Требования к конструкции птичника</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Утепление</strong> — сэндвич-панели 100–150 мм. Важно исключить промерзание и конденсат</li>
              <li><strong>Высота</strong> — 3,0–3,5 м для напольного, 4,5–5,0 м для клеточного содержания</li>
              <li><strong>Пол</strong> — бетонная плита 100 мм с гидроизоляцией, уклон 1–2% для стока</li>
              <li><strong>Вентиляция</strong> — приточно-вытяжная с автоматикой: датчики CO₂, NH₃, температуры</li>
              <li><strong>Освещение</strong> — LED с регулировкой интенсивности по суточной программе</li>
              <li><strong>Дезбарьер</strong> — ванна на въезде, отдельный санпропускник</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Вентиляция в птичнике: ключевой узел</h2>
            <p className="text-muted leading-relaxed mb-4">
              Вентиляция — самая ответственная инженерная система птичника. Недостаточный воздухообмен приводит к болезням, падежу, снижению продуктивности.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Норма воздухообмена: 5–8 м³/час на 1 кг живой массы птицы</li>
              <li>Туннельная вентиляция (входные клапаны — торцовые вентиляторы) — для длинных птичников 60+ м</li>
              <li>Поперечная вентиляция — для коротких зданий до 40 м</li>
              <li>Автоматика по датчикам — обязательно для промышленных объектов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость птичника из ЛСТК</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Объект</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость здания</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Малый птичник 12×36", "432 м²", "2,5–3,5 млн ₽"],
                    ["Бройлерник 18×96", "1 728 м²", "8–12 млн ₽"],
                    ["Птичник-несушка 12×72", "864 м²", "4,5–7 млн ₽"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 font-medium text-foreground">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              В стоимость здания входит: каркас, кровля, сэндвич-стены, окна-клапаны. Оборудование, вентиляция, поилки, кормушки — дополнительно.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Преимущества ЛСТК перед кирпичом для птичников</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Строительство в 3–4 раза быстрее</li>
              <li>Точная геометрия — нет перекосов для клеточных батарей</li>
              <li>Нет щелей и мест для гнездования вредителей</li>
              <li>Лёгкий демонтаж и расширение при росте поголовья</li>
              <li>Дезинфекция влажным способом — металл не впитывает</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Птичник из ЛСТК — оптимальное решение для промышленного и фермерского птицеводства. Стоимость здания 18×96 м под ключ — 8–12 млн ₽, срок монтажа — 45–60 дней. Главное — заложить правильную вентиляцию ещё на этапе проекта.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим птичник под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ проектирует и строит сельхозздания из ЛСТК любого размера. Опыт в птицеводческих объектах Белгородской области.</p>
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
