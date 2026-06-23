import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар 15×24 м: проект, цена, сроки | Строительство ЛСТК | МАКСТИЛ",
  description: "Сколько стоит построить ангар 15×24 м из ЛСТК. Площадь 360 м², проект, комплектации, сроки. Холодный и тёплый вариант под ключ.",
  keywords: [
    "ангар 15х24",
    "ангар 15 на 24 цена",
    "проект ангара 15х24",
    "строительство ангара 15х24",
    "ангар 360 м2",
    "ЛСТК ангар 15х24",
  ],
  openGraph: {
    title: "Ангар 15×24 м: проект, цена, сроки",
    description: "Полный гид по строительству ангара 15×24 м из ЛСТК. Проект, цена, сроки.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар 15×24 м: проект, цена, сроки",
    "description": "Сколько стоит построить ангар 15×24 м из ЛСТК. Площадь 360 м², проект, комплектации, сроки.",
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
            Ангар 15×24 м: проект, цена и сроки
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Проектирование</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Ангар 15×24 м — универсальный объект площадью 360 м². Подходит для склада, производства, автосервиса, сельхозтехники. Проектировщики часто выбирают именно эти габариты из-за оптимального соотношения цены и полезной площади.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Характеристики ангара 15×24 м</h2>
          <p className="mb-4">
            Площадь 360 м², пролёт 15 м, длина 24 м. Высота в коньке 4–6 м. Шаг колонн 6 м. Такая конфигурация позволяет разместить 3–4 поста автосервиса, средний склад или небольшой цех.
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
                <tr><td className="border border-slate-300 px-4 py-2">Площадь</td><td className="border border-slate-300 px-4 py-2">360 м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Пролёт</td><td className="border border-slate-300 px-4 py-2">15 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Длина</td><td className="border border-slate-300 px-4 py-2">24 м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Высота</td><td className="border border-slate-300 px-4 py-2">4–6 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Шаг колонн</td><td className="border border-slate-300 px-4 py-2">6 м</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость ангара 15×24 м</h2>
          <p className="mb-4">
            Холодный ангар 15×24 м стоит от <strong>1 620 000 ₽</strong>, тёплый — от <strong>3 240 000 ₽</strong>. Цена зависит от утепления, ворот, фундамента и региона.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный</td><td className="border border-slate-300 px-4 py-2">от 1 620 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый</td><td className="border border-slate-300 px-4 py-2">от 3 240 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">С кран-балкой</td><td className="border border-slate-300 px-4 py-2">от 3 960 000 ₽</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки строительства</h2>
          <p className="mb-4">
            Проектирование — 10–15 дней, изготовление — 15–25 дней, фундамент — 10–14 дней, монтаж — 14–21 день. Общий цикл — <strong>45–60 дней</strong>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Применение ангара 15×24 м</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Склад для товаров и материалов</li>
            <li>Автосервис на 3–4 поста</li>
            <li>Малое производство, мастерская</li>
            <li>Ангар для сельхозтехники</li>
            <li>Торговый павильон</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Проект ангара 15×24 м под ключ</h3>
            <p className="text-muted mb-4">Получите расчёт проекта с фундаментом, каркасом и покрытием для вашего региона.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
