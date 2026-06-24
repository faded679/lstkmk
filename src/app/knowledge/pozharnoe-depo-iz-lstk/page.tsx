import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Пожарное депо из ЛСТК: нормы проектирования и стоимость | Справочник ЛСТК",
  description: "Строительство пожарных депо и гаражей из ЛСТК. Нормы проектирования, высота, ворота, цены от 5 600 ₽/м².",
  keywords: ["пожарное депо из ЛСТК", "пожарный гараж", "строительство пожарного депо", "пожарное депо цена", "спецздание ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Пожарное депо из ЛСТК: нормы проектирования и стоимость",
    "description": "Строительство пожарных депо и гаражей из ЛСТК. Нормы проектирования, высота, ворота, цены от 5 600 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Пожарное депо из ЛСТК: нормы проектирования и стоимость</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Спецздания
          </div>
          <>
<p>Пожарное депо из ЛСТК — это специальное здание для размещения пожарной техники, дежурной смены и оборудования. МАКСТИЛ проектирует и строит пожарные депо с учётом требований МЧС и пожарной безопасности.</p>

<h2>Нормы проектирования</h2>
<p>Высота ворот — от 4,5 м для современной пожарной техники, ширина поста — от 4 м. Дежурная часть должна иметь быстрый выезд, раздевалки, душевые, комнату отдыха. Нормы пожарной безопасности регулируют материалы, отступы и внутреннюю планировку.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Высота ворот — от 4,5 м;</li>
<li>Ширина поста — от 4 м;</li>
<li>Конструкции — негорючие или огнезащищённые;</li>
<li>Быстрый выезд и освещение территории.</li>
</ul>

<h2>Цены на пожарное депо</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Гаражная часть (холодная)</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Депо с дежурной частью и утеплением</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С огнезащитой и инженерией</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Что входит в проект</h2>
<p>Каркас ЛСТК с огнезащитой, фундамент, кровля и стены, ворота, отопление, вентиляция, освещение, дежурная часть, душевые, раздевалки, система сигнализации. Все материалы соответствуют требованиям пожарной безопасности.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать пожарное депо</h3>
<p className="text-muted mb-4">Расскажите количество техники и требования — подготовим проект.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
