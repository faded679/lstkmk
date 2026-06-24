import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Свайный фундамент под ангар: когда и почему выгоднее ленты | Справочник ЛСТК",
  description: "Свайный фундамент под ангар ЛСТК. Когда выгоднее ленточного, расчёт, виды свай, сроки, цены. Грунты, уклон, вода.",
  keywords: ["свайный фундамент", "сваи под ангар", "фундамент ЛСТК", "когда свайный фундамент", "цена свайного фундамента"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Свайный фундамент под ангар: когда и почему выгоднее ленты",
    "description": "Свайный фундамент под ангар ЛСТК. Когда выгоднее ленточного, расчёт, виды свай, сроки, цены. Грунты, уклон, вода.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" }
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Свайный фундамент под ангар: когда и почему выгоднее ленты</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Фундаменты
          </div>
          <>
<p>Свайный фундамент — часто лучший выбор под ангар из ЛСТК из-за малого веса каркаса и возможности работы на слабых грунтах. МАКСТИЛ проектирует свайные фундаменты для любых типов грунтов и нагрузок.</p>

<h2>Когда выбирать сваи</h2>
<p>Свайный фундамент выгоднее ленточного на торфах, супесях, пучинистых грунтах, в заболоченной местности, на уклонах и при высоких грунтовых водах. Также сваи ускоряют строительство — не нужен длительный монтаж опалубки и выдержка бетона.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Слабые, просадочные, пучинистые грунты;</li>
<li>Высокий уровень грунтовых вод;</li>
<li>Участок с уклоном;</li>
<li>Необходимость быстрого начала монтажа.</li>
</ul>

<h2>Виды свай и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип сваи</th><th className="border border-slate-300 px-4 py-2 text-left">Применение</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м² ангара</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Винтовые сваи</td><td className="border border-slate-300 px-4 py-2">Лёгкие грунты, быстрый монтаж</td><td className="border border-slate-300 px-4 py-2">1 500–2 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Буронабивные сваи</td><td className="border border-slate-300 px-4 py-2">Тяжёлые нагрузки, слабые грунты</td><td className="border border-slate-300 px-4 py-2">2 000–3 500 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Железобетонные забивные</td><td className="border border-slate-300 px-4 py-2">Промышленные объекты</td><td className="border border-slate-300 px-4 py-2">по смете</td></tr>
</tbody>
</table>
</div>

<h2>Сроки и преимущества</h2>
<p>Монтаж свай занимает 1–3 дня, после чего можно сразу начинать сборку каркаса. Не требуется выдержка бетона 28 дней, как у ленты. Сваи не подвержены морозному пучению и просадкам при правильном расчёте.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Подобрать фундамент</h3>
<p className="text-muted mb-4">Расскажите о грунтах на участке — инженер подберёт оптимальный тип фундамента.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
