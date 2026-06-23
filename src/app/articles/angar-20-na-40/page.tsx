import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар 20×40 м: проект, стоимость, сроки | МАКСТИЛ",
  description:
    "Типовой проект ангара 20×40 м: площадь 800 м², каркас ЛСТК. Стоимость под ключ в 2026 году, выбор фундамента, сроки монтажа. Реальные цены.",
  keywords: [
    "ангар 20 на 40",
    "ангар 20x40 цена",
    "проект ангара 20х40",
    "ангар 800 м² под ключ",
    "металлический ангар 20 40",
    "построить ангар 20 40",
  ],
  openGraph: {
    title: "Ангар 20×40 м под ключ: цена и проект",
    description: "Стоимость, сроки и комплектация ангара 20×40 м в 2026 году.",
    url: "https://lstkmk.ru/articles/angar-20-na-40/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/angar-20-na-40/",
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
              Объекты
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Ангар 20×40 м: проект, стоимость, сроки
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Ангар 20×40 м — один из самых востребованных типоразмеров для малого и среднего бизнеса. Площадь 800 м² достаточна для небольшого склада, производственного цеха, сельхозхранилища или технического центра. Разбираем проект, стоимость и сроки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Технические характеристики</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 font-semibold text-foreground">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ширина", "20 м"],
                    ["Длина", "40 м"],
                    ["Площадь", "800 м²"],
                    ["Высота стены (типовая)", "5–7 м"],
                    ["Тип каркаса", "ЛСТК (гнутые профили)"],
                    ["Шаг рам", "5 или 6 м"],
                    ["Кровля", "двускатная, уклон 1:10"],
                    ["Ограждение", "профнастил или сэндвич"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость ангара 20×40 под ключ</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Итого</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Холодный (профнастил)", "5 500–6 500 ₽", "4,4–5,2 млн ₽"],
                    ["Тёплый (сэндвич 80 мм)", "7 000–8 500 ₽", "5,6–6,8 млн ₽"],
                    ["Тёплый (сэндвич 120 мм)", "8 000–9 500 ₽", "6,4–7,6 млн ₽"],
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
              Цены актуальны на июнь 2026 года. В стоимость входят: каркас, кровля, стены, одни ворота 4×4 м, одна дверь. Фундамент, отопление и доп. ворота — отдельно.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Фундамент под ангар 20×40</h2>
            <p className="text-muted leading-relaxed mb-4">
              Выбор фундамента зависит от грунта и назначения здания:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Винтовые сваи</strong> — самый быстрый и экономичный вариант. Подходит для большинства грунтов. Стоимость ~350–500 тыс ₽</li>
              <li><strong>Забивные сваи</strong> — для слабых и пучинистых грунтов, болотистых участков. ~500–700 тыс ₽</li>
              <li><strong>Ленточный мелкозаглублённый</strong> — для плотных грунтов, удобен при устройстве бетонного пола. ~600–900 тыс ₽</li>
              <li><strong>Монолитная плита</strong> — при высоких нагрузках от техники. ~1,2–1,8 млн ₽</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Для чего подходит ангар 800 м²</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Склад готовой продукции или сырья</li>
              <li>Производственный цех лёгкой промышленности</li>
              <li>Автосервис на 4–6 постов</li>
              <li>Сельхозхранилище (зерно, корнеплоды, техника)</li>
              <li>Шиномонтаж, мойка, автопарк</li>
              <li>Торговый павильон, оптовая база</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сроки строительства</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Проектирование и расчёт — 5–7 рабочих дней</li>
              <li>Производство каркаса — 14–21 день</li>
              <li>Устройство фундамента — 7–14 дней</li>
              <li>Монтаж каркаса — 5–7 дней</li>
              <li>Кровля и ограждение — 7–10 дней</li>
              <li>Ворота, доводка — 3–5 дней</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Итого под ключ: 40–55 дней</strong> с момента подписания договора при параллельном ведении работ.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что влияет на стоимость</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота стен — каждый метр выше 5 м увеличивает цену на 3–5%</li>
              <li>Тип и количество ворот — секционные дороже распашных на 30–60%</li>
              <li>Утепление — переход с профнастила на сэндвич 80 мм +25–35%</li>
              <li>Снеговой район — в зонах с нагрузкой выше III усиливается каркас</li>
              <li>Кран-балка — добавляет 15–30% к стоимости каркаса</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар 20×40 м — универсальное здание для бизнеса. Стоимость холодного варианта под ключ — от 4,4 млн ₽, тёплого — от 5,6 млн ₽. Срок строительства — 40–55 дней. При грамотном проекте и качественном монтаже служит 50+ лет. Рассчитать стоимость под ваш размер в Белгородской области можно в разделе <Link href="/stroitelstvo-angarov-belgorod/" className="text-accent-blue hover:underline">строительство ангаров в Белгороде</Link>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Рассчитайте стоимость своего ангара</h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит ангары любых размеров в Белгородской области и соседних регионах. Проект, производство, монтаж под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">
                Рассчитать стоимость
              </a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">
                Получить консультацию
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
