import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Отопление склада: расчёт мощности, системы, стоимость | МАКСТИЛ",
  description: "Как выбрать отопление для склада. Расчёт мощности котла, типы систем, стоимость монтажа. Газовое, электрическое и воздушное отопление склада.",
  keywords: [
    "отопление склада",
    "отопление склада расчёт",
    "система отопления склада",
    "газовое отопление склада",
    "воздушное отопление склада",
    "сколько стоит отопление склада",
  ],
  openGraph: {
    title: "Отопление склада: расчёт мощности, системы, стоимость",
    description: "Как выбрать отопление для склада. Расчёт мощности, типы систем, стоимость.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Отопление склада: расчёт мощности, системы, стоимость",
    "description": "Как выбрать отопление для склада. Расчёт мощности котла, типы систем, стоимость монтажа.",
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
            Отопление склада: расчёт мощности и выбор системы
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Склады</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Инженерия</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Тёплый склад нужен для хранения товаров, чувствительных к температуре, и для комфортной работы персонала. Правильный расчёт мощности отопления позволяет избежать переохлаждения и перерасхода энергии. Рассмотрим основные типы систем и их применение.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Как рассчитать мощность отопления склада</h2>
          <p className="mb-4">
            Упрощённая формула: <strong>1 кВт тепловой мощности на 30 м²</strong> для утеплённого склада с высотой потолков до 6 м и нормальной теплоизоляцией. Для складов в суровых климатических условиях и с высокими потолками применяется коэффициент 1,2–1,5.
          </p>
          <p className="mb-4">
            Пример: склад 500 м² × 6 м = 3 000 м³. При удельной мощности 40 Вт/м³ получаем 120 кВт. С учётом запаса и теплопотерь — 150 кВт.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Типы систем отопления для склада</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Газовое отопление</h3>
          <p className="mb-4">
            Самый экономичный вариант при наличии газа. Используются напольные или настенные котлы, радиаторы или воздухонагреватели. Стоимость монтажа — от 1 500 ₽/м².
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Воздушное отопление</h3>
          <p className="mb-4">
            Тепловентиляторы и воздухонагреватели быстро прогревают большие объёмы. Подходит для складов с высокими потолками и большой интенсивностью открывания ворот.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Электрическое отопление</h3>
          <p className="mb-4">
            Электрокотлы, инфракрасные обогреватели, конвекторы. Простой монтаж, но высокая стоимость электроэнергии. Рекомендуется для небольших складов или резервного отопления.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Водяное отопление с радиаторами</h3>
          <p className="mb-4">
            Классическая система для складов, где требуется стабильная температура. Эффективно при высоких теплопотерях и низких температурах.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Система</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Монтаж, ₽/м²</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Эксплуатация</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Газовое</td><td className="border border-slate-300 px-4 py-2">от 1 500</td><td className="border border-slate-300 px-4 py-2">Низкая</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Воздушное</td><td className="border border-slate-300 px-4 py-2">от 1 200</td><td className="border border-slate-300 px-4 py-2">Средняя</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Электрическое</td><td className="border border-slate-300 px-4 py-2">от 1 000</td><td className="border border-slate-300 px-4 py-2">Высокая</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Водяное</td><td className="border border-slate-300 px-4 py-2">от 1 800</td><td className="border border-slate-300 px-4 py-2">Низкая</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что учитывать при выборе</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Наличие газа и мощности электросетей</li>
            <li>Требуемая температура внутри склада</li>
            <li>Интенсивность открывания ворот</li>
            <li>Высота потолков и теплоизоляция</li>
            <li>Тип хранимого товара</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Проект отопления склада</h3>
            <p className="text-muted mb-4">Подберём систему отопления под ваш склад, рассчитаем мощность и стоимость.</p>
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
