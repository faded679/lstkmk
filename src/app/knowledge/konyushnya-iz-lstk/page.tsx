import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Конюшня из ЛСТК: нормы содержания лошадей и цены | Справочник ЛСТК",
  description: "Строительство конюшен из ЛСТК под ключ. Нормы площади, вентиляция, полы, цены от 5 600 ₽/м². Срок от 45 дней.",
  keywords: ["конюшня из ЛСТК", "строительство конюшни", "конюшня цена", "конюшня под ключ", "ЛСТК конюшня"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Конюшня из ЛСТК: нормы содержания лошадей и цены",
    "description": "Строительство конюшен из ЛСТК под ключ. Нормы площади, вентиляция, полы, цены от 5 600 ₽/м². Срок от 45 дней.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Конюшня из ЛСТК: нормы содержания лошадей и цены</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Сельхозздания
          </div>
          <>
<p>Конюшня из ЛСТК — это современное решение для частных конных клубов, ферм и конноспортивных комплексов. МАКСТИЛ строит конюшни с учётом ветеринарных норм, микроклимата и удобства ухода за лошадьми.</p>

<h2>Нормы содержания лошадей</h2>
<p>По ветеринарным требованиям на одну лошадь в деннике нужно не менее 12–16 м², высота в коньке — от 3,5 м. Проходы между рядами — 2,5–3 м, чтобы была возможность разворота и ухода.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Денник — 12–16 м² на одну лошадь;</li>
<li>Высота в коньке — от 3,5 м;</li>
<li>Норма воздухообмена — 60–80 м³/ч на голову;</li>
<li>Напольное покрытие — резиновая крошка, асфальт, плотная глина.</li>
</ul>

<h2>Цены и комплектация</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный навес для коней</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Утеплённая конюшня с вентиляцией</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">С денниками, седельной, душевой</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Что входит в проект</h2>
<p>Каркас ЛСТК, фундамент, кровля и стены, вентиляция, освещение, ворота, внутренние перегородки под денники, проходы, системы водоснабжения и навозоудаления. Возможна отделка деревом или влагостойкими материалами.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать конюшню</h3>
<p className="text-muted mb-4">Расскажите количество лошадей — подготовим планировку и смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
