import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Выбор сечения ферм и колонн для ангара: пролёты 18–24–30 м | Справочник ЛСТК",
  description: "Как выбрать сечение ферм и колонн ЛСТК для ангара. Пролёты 18, 24 и 30 м, расчёт нагрузок, материал, типы профилей.",
  keywords: ["сечение ферм", "сечение колонн", "пролёт ангара 24 м", "фермы ЛСТК", "расчёт ферм"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Выбор сечения ферм и колонн для ангара: пролёты 18–24–30 м",
    "description": "Как выбрать сечение ферм и колонн ЛСТК для ангара. Пролёты 18, 24 и 30 м, расчёт нагрузок, материал, типы профилей.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Выбор сечения ферм и колонн для ангара: пролёты 18–24–30 м</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Конструкции
          </div>
          <>
<p>Сечение ферм и колонн — ключевой параметр, от которого зависит прочность и экономичность ангара. МАКСТИЛ выполняет расчёт конструкций по СП 16.13330 и СП 20.13330 с учётом снеговой, ветровой и эксплуатационной нагрузки.</p>

<h2>Сечение колонн</h2>
<p>Для типовых ангаров с пролётом 12–18 м используют колонны из С-образного или Σ-образного профиля ЛСТК сечением 140–200 мм. При пролёте 24 м применяют двухветвевые колонны или ферменные стойки. Высота колонны — 2,5–6 м в зависимости от типа здания.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Пролёт 12–18 м: колонна 140×50×14 — 200×70×20;</li>
<li>Пролёт 24 м: двухветвевая колонна 200×70×20+;</li>
<li>Пролёт 30 м: ферменные стойки или металлокаркас;</li>
<li>Толщина стали — 1,5–2,5 мм, оцинкование Z275–Z350.</li>
</ul>

<h2>Сечение ферм</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Пролёт</th><th className="border border-slate-300 px-4 py-2 text-left">Высота фермы</th><th className="border border-slate-300 px-4 py-2 text-left">Сечение поясов</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">18 м</td><td className="border border-slate-300 px-4 py-2">1,1–1,3 м</td><td className="border border-slate-300 px-4 py-2">140×50×14 — 200×70×20</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">24 м</td><td className="border border-slate-300 px-4 py-2">1,5–1,8 м</td><td className="border border-slate-300 px-4 py-2">200×70×20 — 250×70×20</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">30 м</td><td className="border border-slate-300 px-4 py-2">2,0–2,4 м</td><td className="border border-slate-300 px-4 py-2">двутавр или ферменная система</td></tr>
</tbody>
</table>
</div>

<h2>Что учитываем в расчёте</h2>
<p>Программа расчёта проверяет прочность, устойчивость, прогибы, местное сжатие и раскачку. Каждая ферма и колонна оптимизируются под нагрузки региона — снег, ветер, вес кровли и оборудования.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Расчёт конструкций</h3>
<p className="text-muted mb-4">Закажите проект КМ/КМД — инженеры МАКСТИЛ подберут сечение ферм и колонн.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать ангар</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
