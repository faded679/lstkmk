import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Производственное здание под ключ: проектирование, цены, сроки | МАКСТИЛ",
  description: "Строительство производственных зданий под ключ из металлоконструкций. Цены, сроки, этапы, требования к фундаменту, кранам и инженерии.",
  keywords: [
    "производственное здание под ключ",
    "строительство производственного здания",
    "цех под ключ",
    "производственное здание из металлоконструкций",
    "производственное здание цена",
    "производственный цех под ключ",
  ],
  openGraph: {
    title: "Производственное здание под ключ: проектирование, цены, сроки",
    description: "Строительство производственных зданий под ключ из металлоконструкций. Цены, сроки, этапы.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Производственное здание под ключ: проектирование, цены, сроки",
    "description": "Строительство производственных зданий под ключ из металлоконструкций. Цены, сроки, этапы.",
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
            Производственное здание под ключ: проектирование и строительство
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Промздания</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Цены</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Производственное здание требует индивидуального подхода: нужно учитывать нагрузки от оборудования, краны, вентиляцию, электроснабжение и технологические процессы. Строительство под ключ из металлоконструкций позволяет ввести объект в эксплуатацию быстрее и дешевле капитального здания.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Особенности проектирования</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Расчёт нагрузок от оборудования, кранов и технологических рельсов</li>
            <li>Выбор пролёта и высоты под технологию производства</li>
            <li>Расчёт вентиляции и воздухообмена</li>
            <li>Электроснабжение и мощность</li>
            <li>Требования пожарной и промышленной безопасности</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость производственного здания</h2>
          <p className="mb-4">
            Цена строительства производственного здания из ЛСТК под ключ — от <strong>5 600 ₽/м²</strong>. Для зданий с кранами и повышенными нагрузками — от <strong>4 800 ₽/м²</strong>.
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
                <tr><td className="border border-slate-300 px-4 py-2">Цех ЛСТК без крана</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Цех с кран-балкой 5 т</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Цех с мостовым краном 10+ т</td><td className="border border-slate-300 px-4 py-2">от 4 800 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тяжёлый металлокаркас</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Этапы строительства под ключ</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li>Техническое задание и проектирование — 15–30 дней</li>
            <li>Изготовление металлоконструкций — 20–45 дней</li>
            <li>Фундамент и подкрановые балки — 20–30 дней</li>
            <li>Монтаж каркаса — 20–40 дней</li>
            <li>Кровля, стены, инженерия — 20–40 дней</li>
            <li>Сдача и оформление документов — 10–15 дней</li>
          </ol>
          <p className="mb-4">Итого: <strong>90–180 дней</strong>.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Требования к фундаменту</h2>
          <p className="mb-4">
            Производственные здания часто требуют ленточного или плитного фундамента. При наличии крана — усиленный ростверк с подкрановыми балками. Для сложных грунтов используются сваи.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Строительство производственного здания</h3>
            <p className="text-muted mb-4">Проектируем и строим цеха под ключ с учётом всего технологического оборудования.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать цех
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
