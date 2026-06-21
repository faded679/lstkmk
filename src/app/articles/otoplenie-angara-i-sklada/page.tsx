import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Отопление ангара и склада: способы и стоимость | МАКСТИЛ",
  description:
    "Газовое, дизельное, электрическое отопление ангара и склада: тепловые пушки, инфракрасные обогреватели, водяной контур. Что выгоднее, расчёт мощности, стоимость монтажа 2026.",
  keywords: [
    "отопление ангара",
    "отопление склада",
    "чем отопить ангар",
    "тепловая пушка для ангара",
    "газовое отопление ангара",
    "инфракрасное отопление склад",
    "сколько стоит отопление ангара",
  ],
  openGraph: {
    title: "Отопление ангара и склада: что выбрать",
    description: "Сравнение способов отопления ангара: газ, электричество, дизель. Расчёт мощности и стоимость.",
    url: "https://lstkmk.ru/articles/otoplenie-angara-i-sklada/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/otoplenie-angara-i-sklada/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Инженерия</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Отопление ангара и склада: способы и стоимость
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Правильное отопление ангара — это не только комфорт, но и сохранность товаров, техники, работоспособность персонала. Разбираем все доступные способы, считаем затраты и объясняем, когда что выгоднее.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Расчёт мощности: с чего начать</h2>
            <p className="text-muted leading-relaxed mb-4">
              Упрощённая формула: <strong>1 кВт тепловой мощности на 10–15 м³ объёма</strong> при Δt = 40°C (разница между желаемой температурой в помещении и минимальной уличной).
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Пример: ангар 20×40×6 м = 4 800 м³. При утеплении сэндвичем 80 мм нужно ~80–100 кВт тепловой мощности. При профнастиле — 150–180 кВт.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сравнение способов отопления</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Способ</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Монтаж</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Топливо/год</th>
                    <th className="text-left py-3 font-semibold text-foreground">Плюсы</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Газовые воздухонагреватели", "300–700 тыс", "Дёшево", "Быстрый нагрев, автоматика"],
                    ["ИК-обогреватели (газ)", "200–500 тыс", "Дёшево", "Греют предметы, не воздух"],
                    ["Электрические пушки", "50–150 тыс", "Дорого", "Простой монтаж"],
                    ["Дизельные пушки", "50–120 тыс", "Средне", "Мобильность, нет подключения"],
                    ["Водяной контур от котла", "500–1 500 тыс", "Дёшево", "Равномерный прогрев"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v} ₽</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Газовые воздухонагреватели</h2>
            <p className="text-muted leading-relaxed mb-6">
              Оптимальный выбор для большинства ангаров при наличии газа. Агрегаты мощностью 30–150 кВт подвешиваются под кровлю. КПД 90–92%. Срок окупаемости относительно электрического отопления — 2–3 года. Брендов много: Ballu, Reznor, Pakole.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Инфракрасные обогреватели</h2>
            <p className="text-muted leading-relaxed mb-6">
              ИК-обогреватели (тёмные или светлые) греют не воздух, а предметы и пол. Эффективны в высоких ангарах (6+ м), где горячий воздух уходит под кровлю. Потребление газа на 20–30% меньше, чем у воздухонагревателей. Особенно хороши для производственных цехов с открывающимися воротами.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Электрическое отопление</h2>
            <p className="text-muted leading-relaxed mb-6">
              Простой монтаж, но дорогая эксплуатация. Оправдано только при небольших ангарах (до 300 м²) или как резервный источник тепла. Тепловые завесы у ворот — обязательный элемент для любого типа отопления.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Дизельные пушки</h2>
            <p className="text-muted leading-relaxed mb-6">
              Временное решение: стройка, сезонный склад, аварийный обогрев. Не подходят для постоянного использования — шум, выхлоп, запах, высокая стоимость топлива при постоянной работе.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Рекомендации по выбору</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Есть газ → газовые воздухонагреватели или ИК-обогреватели</li>
              <li>Нет газа, ангар до 500 м² → электрические пушки или тепловые насосы</li>
              <li>Нет газа, ангар 500+ м² → дизельный котёл + водяной контур</li>
              <li>Высота 8+ м → только ИК, воздушное тепло уйдёт под кровлю</li>
              <li>Частые открытия ворот → тепловые завесы обязательны</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Лучший выбор для большинства ангаров — газовые воздухонагреватели при наличии газа, ИК-обогреватели в высоких помещениях. Электричество — только для небольших объектов или резерва. Утепление ангара сэндвич-панелями сокращает расходы на отопление в 2–3 раза по сравнению с профнастилом.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим тёплый ангар под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ строит утеплённые ангары с инженерными сетями. Проектируем отопление под ваши задачи.</p>
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
