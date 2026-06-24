import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Автосервис из ЛСТК: проект, цена, сроки | Строительство СТО | МАКСТИЛ",
  description: "Строительство автосервиса и СТО из ЛСТК. Проектирование, размеры, ворота, яма, подкрановые балки. Цены за м² и сроки под ключ.",
  keywords: [
    "автосервис из ЛСТК",
    "СТО из металлоконструкций",
    "строительство автосервиса",
    "автосервис под ключ",
    "ангар для автосервиса",
    "цех СТО",
  ],
  openGraph: {
    title: "Автосервис из ЛСТК: проект, цена, сроки",
    description: "Строительство автосервиса и СТО из ЛСТК. Проектирование, размеры, ворота, яма, цены.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Автосервис из ЛСТК: проект, цена, сроки",
    "description": "Строительство автосервиса и СТО из ЛСТК. Проектирование, размеры, ворота, яма, подкрановые балки.",
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
            Автосервис из ЛСТК: проект, цена и сроки
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Автоздания</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">ЛСТК</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Автосервис из ЛСТК — быстрое и экономичное решение для СТО, шиномонтажа, мойки и кузовного цеха. Большой пролёт без колонн позволяет свободно разместить посты, подъёмники и оборудование.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Популярные размеры автосервиса</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Количество постов</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Размеры</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Площадь</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">2 поста</td><td className="border border-slate-300 px-4 py-2">15×18 м</td><td className="border border-slate-300 px-4 py-2">270 м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">3–4 поста</td><td className="border border-slate-300 px-4 py-2">15×24 м</td><td className="border border-slate-300 px-4 py-2">360 м²</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">6+ постов</td><td className="border border-slate-300 px-4 py-2">18×36 м</td><td className="border border-slate-300 px-4 py-2">648 м²</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость автосервиса из ЛСТК</h2>
          <p className="mb-4">
            Автосервис из ЛСТК под ключ стоит от <strong>4 800 ₽/м²</strong> за тёплый вариант и от <strong>4 800 ₽/м²</strong> с кран-балкой для шиномонтажа. В стоимость входят фундамент, каркас, утепление, кровля, ворота и монтаж.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что учесть в проекте</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Высота ворот — минимум 4,5 м для грузовых авто</li>
            <li>Яма или подъёмники — закладываются на этапе фундамента</li>
            <li>Вентиляция — обязательна для удаления выхлопных газов</li>
            <li>Электроснабжение — расчёт мощности под оборудование</li>
            <li>Полы — бетон с топпингом для стойкости к маслам</li>
            <li>Зона ожидания и мойка — можно встроить в ангар</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки строительства</h2>
          <p className="mb-4">
            Автосервис 360 м² возводится за <strong>60–90 дней</strong> под ключ. Проектирование — 10–15 дней, производство — 15–25 дней, фундамент — 14–21 день, монтаж — 21–30 дней.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Построим автосервис под ключ</h3>
            <p className="text-muted mb-4">Проект с учётом постов, ямы, вентиляции и электрики.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать СТО
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
