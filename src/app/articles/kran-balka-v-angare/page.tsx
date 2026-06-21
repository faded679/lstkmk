import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Кран-балка в ангаре: установка, расчёт, стоимость | МАКСТИЛ",
  description:
    "Как установить кран-балку в металлокаркасном ангаре: подкрановые балки, грузоподъёмность 1–10 т, высота подъёма, расчёт нагрузок. Цены на монтаж кран-балки в 2026.",
  keywords: [
    "кран-балка в ангаре",
    "установка кран-балки",
    "подкрановая балка металлокаркас",
    "кран-балка цена",
    "опорный кран балочный",
    "монтаж кран балки склад",
  ],
  openGraph: {
    title: "Кран-балка в ангаре: расчёт и установка",
    description: "Как правильно встроить кран-балку в ангар из металлоконструкций.",
    url: "https://lstkmk.ru/articles/kran-balka-v-angare/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/kran-balka-v-angare/" },
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
              Кран-балка в ангаре: установка, расчёт, стоимость
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Кран-балка — обязательное оборудование для производственных цехов, складов с тяжёлыми грузами и ремонтных предприятий. Встроить её в металлокаркасный ангар можно как при строительстве, так и в готовое здание — но проектировать лучше заранее.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типы кран-балок для ангаров</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Опорная кран-балка</strong> — катится по рельсам, уложенным на подкрановые балки. Грузоподъёмность до 32 т. Требует усиленных колонн и подкрановых балок</li>
              <li><strong>Подвесная кран-балка (таль)</strong> — крепится к нижнему поясу стропильных ферм или специальным балкам. Грузоподъёмность до 5 т. Проще и дешевле</li>
              <li><strong>Консольный кран</strong> — поворотный, на одной колонне. До 1–2 т, зона обслуживания до 8 м</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Как кран влияет на проект ангара</h2>
            <p className="text-muted leading-relaxed mb-4">
              Если кран-балку не заложить при проектировании — усиление обойдётся дороже самой балки. Вот что меняется в проекте:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Высота стен</strong> — для крана 1–5 т с высотой подъёма 4 м нужна стена минимум 6,5–7 м</li>
              <li><strong>Колонны</strong> — сечение и толщина металла увеличиваются на 20–40%</li>
              <li><strong>Подкрановые балки</strong> — двутавр №30–45 по длине пролёта</li>
              <li><strong>Фундамент</strong> — расчётная нагрузка вырастает, нужен более мощный</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Параметры подбора кран-балки</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что учесть</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Грузоподъёмность", "По максимальной массе перемещаемого груза + 25% запас"],
                    ["Пролёт", "Расстояние между рельсами или ездовыми балками"],
                    ["Высота подъёма", "Расстояние от пола до крюка в верхнем положении"],
                    ["Режим работы", "Лёгкий (А1–А3), средний (А4–А5), тяжёлый (А6–А8)"],
                    ["Скорость подъёма", "0,1–0,5 м/с для большинства задач"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость кран-балки и монтажа</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип и грузоподъёмность</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Оборудование</th>
                    <th className="text-left py-3 font-semibold text-foreground">Монтаж</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Подвесная 1 т, пролёт 12 м", "180–280 тыс ₽", "50–80 тыс ₽"],
                    ["Подвесная 3,2 т, пролёт 18 м", "350–550 тыс ₽", "80–120 тыс ₽"],
                    ["Опорная 5 т, пролёт 20 м", "700–1 200 тыс ₽", "150–250 тыс ₽"],
                    ["Опорная 10 т, пролёт 24 м", "1 500–2 500 тыс ₽", "300–500 тыс ₽"],
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
            <p className="text-muted leading-relaxed mb-6">
              Стоимость подкрановых балок и усиления колонн — отдельная статья расходов: 200–800 тыс ₽ в зависимости от конструкции.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Установка кран-балки в готовый ангар</h2>
            <p className="text-muted leading-relaxed mb-6">
              Если ангар уже построен без расчёта на кран-балку — усиление возможно, но сложнее: нужно проверить несущую способность существующих колонн, при необходимости усилить их накладками или заменить, добавить подкрановые балки. Стоимость усиления может превышать стоимость самой кран-балки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Кран-балку нужно закладывать в проект ангара с самого начала. Это увеличит смету на 15–30%, но даст правильную конструкцию без риска перегрузки. Подвесная таль 1–3 т — от 300 тыс ₽ с монтажом. Опорный кран 5–10 т — от 1 млн ₽.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Спроектируем ангар с кран-балкой</h3>
            <p className="text-muted mb-6">МАКСТИЛ рассчитывает конструкции с учётом крановых нагрузок. Собственное производство, монтаж под ключ.</p>
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
