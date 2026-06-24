import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стоимость монтажа ангара: цены за м² в 2025 | МАКСТИЛ",
  description: "Сколько стоит монтаж ангара за м². Цены на сборку каркаса, кровли, сэндвич-панелей. Факторы стоимости и сроки монтажа ЛСТК.",
  keywords: [
    "стоимость монтажа ангара",
    "монтаж ангара цена",
    "монтаж ангара за м2",
    "сборка ангара цена",
    "монтаж ЛСТК цена",
    "сколько стоит собрать ангар",
  ],
  openGraph: {
    title: "Стоимость монтажа ангара: цены за м² в 2025",
    description: "Сколько стоит монтаж ангара за м². Цены на сборку каркаса, кровли, сэндвич-панелей.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Стоимость монтажа ангара: цены за м² в 2025",
    "description": "Сколько стоит монтаж ангара за м². Цены на сборку каркаса, кровли, сэндвич-панелей.",
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
            Стоимость монтажа ангара: цены за м² в 2025
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Монтаж</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Цены</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Монтаж — одна из ключевых статей расходов при строительстве ангара. Стоимость зависит от сложности конструкции, региона, сезона и объёма работ. Разберём, сколько стоит сборка каркаса, кровли и стеновых панелей.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Цены на монтаж ангара за м²</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Вид работ</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена, ₽/м²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Монтаж каркаса ЛСТК</td><td className="border border-slate-300 px-4 py-2">1 000–1 500</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Монтаж кровли из профлиста</td><td className="border border-slate-300 px-4 py-2">600–1 000</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Монтаж сэндвич-панелей стен</td><td className="border border-slate-300 px-4 py-2">800–1 200</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Монтаж сэндвич-панелей кровли</td><td className="border border-slate-300 px-4 py-2">1 000–1 500</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Монтаж ворот</td><td className="border border-slate-300 px-4 py-2">от 15 000 ₽ за шт.</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Монтаж металлокаркаса</td><td className="border border-slate-300 px-4 py-2">1 500–2 500</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что влияет на стоимость монтажа</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Площадь и высота здания</li>
            <li>Регион и удалённость объекта</li>
            <li>Сезон (зимний монтаж дороже)</li>
            <li>Тип кровли и стенового покрытия</li>
            <li>Необходимость автокрана и подъёмника</li>
            <li>Наличие крана, антресолей, перегородок</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки монтажа</h2>
          <p className="mb-4">
            Монтаж каркаса ангара 500 м² занимает <strong>14–21 день</strong>. Сэндвич-панели стен и кровли добавляют 7–14 дней. Для объектов 1 000 м² сроки увеличиваются до 30–45 дней.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сколько стоит собрать ангар 15×24 м</h2>
          <p className="mb-4">
            Для ангара 360 м² только монтаж каркаса и покрытия обойдётся примерно в <strong>400 000–600 000 ₽</strong>. С монтажом сэндвич-панелей — <strong>700 000–900 000 ₽</strong>.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Узнать стоимость монтажа вашего ангара</h3>
            <p className="text-muted mb-4">Рассчитаем монтаж с учётом размеров, региона и комплектации.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать
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
