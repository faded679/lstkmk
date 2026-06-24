import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар 10×20 м: цена, размеры, применение | Строительство ЛСТК | МАКСТИЛ",
  description: "Сколько стоит построить ангар 10×20 м из ЛСТК. Площадь 200 м², варианты холодного и тёплого исполнения, сроки, применение. Рассчитаем цену под ключ.",
  keywords: [
    "ангар 10х20",
    "ангар 10 на 20 цена",
    "строительство ангара 10х20",
    "ангар 200 м2",
    "ЛСТК ангар 10х20",
    "сколько стоит ангар 10х20",
    "ангар 10 на 20 под ключ",
  ],
  openGraph: {
    title: "Ангар 10×20 м: цена, размеры, применение",
    description: "Полный гид по строительству ангара 10×20 м из ЛСТК. Цены, сроки, комплектации.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар 10×20 м: цена, размеры, применение",
    "description": "Сколько стоит построить ангар 10×20 м из ЛСТК. Площадь 200 м², варианты холодного и тёплого исполнения, сроки, применение.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ангар 10×20 м: цена, размеры и применение
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Цены</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Ангар 10×20 м — один из самых популярных размеров для малого и среднего бизнеса. Площадь 200 м² позволяет разместить склад, мастерскую, автосервис или технику. Технология ЛСТК делает такое здание быстрым в монтаже и экономичным по стоимости.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Технические характеристики ангара 10×20 м</h2>
          <p className="mb-4">
            Классическая конфигурация ангара 10×20 м включает: площадь 200 м², пролёт 10 м без промежуточных колонн, высота в коньке 4–6 м. Каркас выполняется из оцинкованного ЛСТК-профиля, что обеспечивает срок службы 50+ лет.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Площадь</td><td className="border border-slate-300 px-4 py-2">200 м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Пролёт</td><td className="border border-slate-300 px-4 py-2">10 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Длина</td><td className="border border-slate-300 px-4 py-2">20 м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Высота</td><td className="border border-slate-300 px-4 py-2">4–6 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Шаг колонн</td><td className="border border-slate-300 px-4 py-2">5–6 м</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сколько стоит ангар 10×20 м</h2>
          <p className="mb-4">
            Цена зависит от комплектации: холодный ангар 10×20 м стоит от <strong>900 000 ₽</strong>, тёплый вариант с сэндвич-панелями — от <strong>1 800 000 ₽</strong>. В стоимость под ключ обычно входят фундамент, каркас, кровля, стены, ворота и монтаж.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за объект</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный ангар</td><td className="border border-slate-300 px-4 py-2">от 900 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый ангар</td><td className="border border-slate-300 px-4 py-2">от 1 800 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Ангар с кран-балкой</td><td className="border border-slate-300 px-4 py-2">от 2 200 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Где используют ангар 10×20 м</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Склад</strong> — хранение товаров, материалов, паллет</li>
            <li><strong>Автосервис / СТО</strong> — 2–3 поста, яма, запчасти</li>
            <li><strong>Мастерская</strong> — производство мебели, металлоизделий</li>
            <li><strong>Гараж для техники</strong> — 2–4 легковых авто или мини-грузовики</li>
            <li><strong>Магазин / торговый павильон</strong> — открытое торговое пространство</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки строительства</h2>
          <p className="mb-4">
            Проектирование — 10–15 дней, производство ЛСТК — 15–20 дней, фундамент — 7–14 дней, монтаж каркаса и покрытия — 14–21 день. Полный цикл от заявки до сдачи — <strong>45–60 дней</strong>.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Рассчитайте ангар 10×20 м под ключ</h3>
            <p className="text-muted mb-4">Наши инженеры подготовят расчёт с учётом вашего региона, нагрузок и комплектации за 15 минут.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79606322061" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
