import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар под склад: проектирование, строительство, цена | МАКСТИЛ",
  description: "Как построить ангар под склад. Проектирование, размеры, типы ворот, утепление, стеллажи. Цены за м² и сроки строительства под ключ.",
  keywords: [
    "ангар под склад",
    "строительство ангара под склад",
    "ангар для склада",
    "складской ангар",
    "ангар под склад цена",
    "проект ангара под склад",
  ],
  openGraph: {
    title: "Ангар под склад: проектирование, строительство, цена",
    description: "Как построить ангар под склад. Проектирование, размеры, типы ворот, утепление, стеллажи.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар под склад: проектирование, строительство, цена",
    "description": "Как построить ангар под склад. Проектирование, размеры, типы ворот, утепление, стеллажи.",
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
            Ангар под склад: проектирование и строительство
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Склады</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Ангар под склад — оптимальное решение для логистики, торговли и производства. Быстровозводимые конструкции из ЛСТК позволяют получить большое бесколонное пространство, встроить зону погрузки и адаптировать планировку под стеллажи.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Основные требования к складскому ангару</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Большой пролёт без колонн для свободного размещения стеллажей</li>
            <li>Достаточная высота потолков для многоярусных стеллажей</li>
            <li>Удобная зона погрузки-разгрузки с доковыми или въездными воротами</li>
            <li>Прочные полы с учётом нагрузки от погрузчиков и паллет</li>
            <li>Эффективное освещение и вентиляция</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Популярные размеры складских ангаров</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Размеры</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Площадь</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">12×24 м</td><td className="border border-slate-300 px-4 py-2">288 м²</td><td className="border border-slate-300 px-4 py-2">Малый склад, магазин</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">15×30 м</td><td className="border border-slate-300 px-4 py-2">450 м²</td><td className="border border-slate-300 px-4 py-2">Средний склад</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">20×50 м</td><td className="border border-slate-300 px-4 py-2">1 000 м²</td><td className="border border-slate-300 px-4 py-2">Логистический центр</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">24×60 м</td><td className="border border-slate-300 px-4 py-2">1 440 м²</td><td className="border border-slate-300 px-4 py-2">Крупный склад</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость ангара под склад</h2>
          <p className="mb-4">
            Холодный складской ангар стоит от <strong>4 500 ₽/м²</strong>, тёплый — от <strong>5 600 ₽/м²</strong>. Для хранения товаров, не требующих температурного режима, часто достаточно холодного варианта.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный склад</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый склад</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Склад с кран-балкой</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Проектирование и планировка</h2>
          <p className="mb-4">
            При проектировании важно предусмотреть: зону разгрузки, проёды для погрузчиков, размещение стеллажей, санитарные узлы, место для офиса. Рекомендуемая ширина проезда между стеллажами — 3,5–4 м.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Ворота для складского ангара</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Откатные</strong> — для крупногабаритного транспорта</li>
            <li><strong>Секционные</strong> — для тёплых складов, герметичны</li>
            <li><strong>Доковые</strong> — для логистических центров с фур</li>
            <li><strong>Распашные</strong> — бюджетный вариант для небольших складов</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Проект складского ангара под ключ</h3>
            <p className="text-muted mb-4">Спроектируем и построим склад с учётом вашей логистики и нагрузок.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать склад
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
