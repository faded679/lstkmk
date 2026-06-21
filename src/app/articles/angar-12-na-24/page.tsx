import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар 12×24 м: цена под ключ и что в неё входит | МАКСТИЛ",
  description:
    "Ангар 12×24 м — популярный размер для мастерской, автосервиса, малого склада. Стоимость под ключ 2026, комплектация, фундамент, сроки. Реальные цены МАКСТИЛ.",
  keywords: [
    "ангар 12 на 24",
    "ангар 12x24 цена",
    "ангар 288 кв м",
    "металлический ангар 12 24",
    "построить ангар 12 24",
    "ангар для автосервиса цена",
  ],
  openGraph: {
    title: "Ангар 12×24 м: цена и комплектация",
    description: "Стоимость ангара 12×24 м под ключ в 2026 году. Всё что входит в цену.",
    url: "https://lstkmk.ru/articles/angar-12-na-24/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/angar-12-na-24/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Объекты</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Ангар 12×24 м: цена под ключ и что в неё входит
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Ангар 12×24 м — один из самых популярных размеров на рынке быстровозводимых зданий. 288 м² хватает для автосервиса на 3–4 поста, небольшого склада, мастерской или мойки. Разбираем, что реально входит в цену и каких сюрпризов ожидать.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Почему 12×24 — популярный размер</h2>
            <p className="text-muted leading-relaxed mb-6">
              Ширина 12 м даёт возможность разместить 3 полосы движения или 2 рабочих поста с проходом. Длина 24 м кратна стандартному шагу рам 6 м — минимальный расход металла. Площадь 288 м² — пороговое значение, ниже которого часто не требуется полноценное разрешение на строительство.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость ангара 12×24 в 2026 году</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Вариант</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Итого</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас без ограждения", "2 200–3 000 ₽", "630–860 тыс ₽"],
                    ["Холодный под ключ", "5 500–7 000 ₽", "1,6–2,0 млн ₽"],
                    ["Тёплый сэндвич 80 мм", "7 500–9 000 ₽", "2,2–2,6 млн ₽"],
                    ["Тёплый сэндвич 120 мм", "8 500–10 500 ₽", "2,4–3,0 млн ₽"],
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что входит в «под ключ»</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Проектирование и изготовление металлокаркаса</li>
              <li>Доставка на объект</li>
              <li>Монтаж несущего каркаса</li>
              <li>Кровельное покрытие (профнастил или сэндвич)</li>
              <li>Стеновое ограждение</li>
              <li>Одни секционные или распашные ворота</li>
              <li>Одна входная дверь</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Не входит в стандартную цену:</strong> фундамент, бетонный пол, отопление, освещение, дополнительные ворота и окна, вентиляция.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Фундамент: сколько добавить к бюджету</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Винтовые сваи (8–10 шт.) — 150–250 тыс ₽</li>
              <li>Мелкозаглублённая лента — 300–450 тыс ₽</li>
              <li>Бетонный пол 100 мм — 500–700 тыс ₽ (288 м²)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Для каких задач подходит</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Автосервис на 3–4 поста (высота стен 4–5 м)</li>
              <li>Мойка самообслуживания на 3 бокса</li>
              <li>Склад запчастей, строительных материалов</li>
              <li>Мастерская, столярный цех, сварочный участок</li>
              <li>Небольшое производство: упаковка, сборка</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сроки строительства</h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар 12×24 м строится в среднем за <strong>25–35 дней</strong>: проектирование — 5 дней, производство каркаса — 10–14 дней, монтаж с ограждением — 7–10 дней. При готовом фундаменте сроки сокращаются.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">На что обратить внимание при выборе подрядчика</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Есть ли собственное производство — или перепродажа чужого каркаса</li>
              <li>Включён ли фундамент в цену или это отдельная строка</li>
              <li>Какой профиль используется — толщина металла не менее 1,5 мм</li>
              <li>Есть ли гарантия на конструкцию — минимум 5 лет</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар 12×24 м — оптимальный старт для малого бизнеса. Холодный вариант с фундаментом обойдётся в 1,8–2,5 млн ₽, тёплый с полом — 3,0–4,0 млн ₽. Срок — 1 месяц.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим ангар 12×24 под ваши задачи</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство и монтаж металлокаркасных зданий в Белгородской области. Работаем без посредников.</p>
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
