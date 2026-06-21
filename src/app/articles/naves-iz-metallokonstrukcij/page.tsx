import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Навес из металлоконструкций: виды, цены, монтаж | МАКСТИЛ",
  description:
    "Навесы из металлоконструкций для парковки, техники, производства и торговли. Односкатные, двускатные, арочные, консольные. Стоимость м² и сроки установки 2026.",
  keywords: [
    "навес из металлоконструкций",
    "металлический навес цена",
    "навес для автомобилей металлический",
    "навес для техники",
    "навес под ключ",
    "навес для парковки металл",
  ],
  openGraph: {
    title: "Навес из металлоконструкций: виды и цены",
    description: "Металлические навесы для парковки, техники, производства. Цены и сроки монтажа.",
    url: "https://lstkmk.ru/articles/naves-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/naves-iz-metallokonstrukcij/" },
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
              Навес из металлоконструкций: виды, цены, монтаж
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Навес из металлоконструкций — самое доступное и быстрое решение для защиты техники, автомобилей, товаров и рабочих зон от осадков. Монтируется за 1–5 дней, не требует фундамента капитального строительства и обходится в 2–4 раза дешевле закрытого ангара.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Виды навесов из металлоконструкций</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Односкатный навес</h3>
            <p className="text-muted leading-relaxed mb-4">
              Самый простой тип. Кровля наклонена в одну сторону. Применяется для пристройки к зданию, навеса над погрузочной зоной, открытого склада стройматериалов.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Двускатный навес</h3>
            <p className="text-muted leading-relaxed mb-4">
              Классическая форма кровли с коньком. Лучше отводит снег, подходит для парковки нескольких машин, хранения техники, временных рабочих зон.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Арочный навес</h3>
            <p className="text-muted leading-relaxed mb-4">
              Бескаркасная или каркасная арка. Популярен для автостоянок, сельхозтехники, зон загрузки. Хорошо переносит снеговую нагрузку.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Консольный навес</h3>
            <p className="text-muted leading-relaxed mb-4">
              Опоры только с одной стороны, кровля «вылетает» консолью. Используется у зданий, торговых рядов, автозаправок — когда нельзя поставить стойку посередине.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры и применение</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Применение</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Высота</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Парковка 1–2 авто", "5×6 м", "2,5–3,0 м"],
                    ["Парковка 4–6 авто", "10×6 м", "2,5–3,0 м"],
                    ["Грузовые авто", "12×20 м", "4,5–5,0 м"],
                    ["Сельхозтехника (комбайны)", "12×30 м", "5,0–6,0 м"],
                    ["Торговый ряд", "6×36 м", "3,5 м"],
                    ["Погрузочная зона склада", "6×12 м", "4,0 м"],
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость навеса из металлоконструкций</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Вариант</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Навес 10×20 м</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас + профнастил кровля", "2 500–4 000 ₽", "500–800 тыс ₽"],
                    ["С боковым ограждением профнастил", "3 500–5 000 ₽", "700–1 000 тыс ₽"],
                    ["С поликарбонатной кровлей", "4 500–7 000 ₽", "900–1 400 тыс ₽"],
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
              В стоимость входит: каркас, кровля, монтаж, крепёж. Фундамент (винтовые сваи или буронабивные столбы) — дополнительно 50–150 тыс ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Нужно ли разрешение на навес</h2>
            <p className="text-muted leading-relaxed mb-6">
              Навес без закрытых стен на земельном участке в большинстве случаев не требует разрешения на строительство — он не является объектом капитального строительства. Однако в СНТ, ИЖС и коммерческих зонах правила отличаются — уточняйте в местной администрации. Навес с тремя и более стенами юридически становится зданием.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сроки монтажа</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Небольшой навес 5×6 м — 1–2 дня</li>
              <li>Парковочный навес 10×20 м — 3–5 дней</li>
              <li>Навес для техники 12×30 м — 5–8 дней</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлический навес — быстро, дёшево, долго. Стоимость парковочного навеса на 4–6 машин — от 500 тыс ₽. Монтаж — 3–5 дней. При правильной антикоррозийной обработке каркаса срок службы — 30–40 лет.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Изготовим и установим навес под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство металлических навесов любых размеров в Белгородской области. Быстро, с гарантией.</p>
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
