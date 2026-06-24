import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ремонт и усиление старого ангара из металлоконструкций | Справочник ЛСТК",
  description: "Ремонт и усиление старых ангаров из металлоконструкций. Замена прогонов, ферм, утепления, кровли. Оценка и сроки.",
  keywords: ["ремонт ангара", "усиление ангара", "замена прогонов", "ремонт металлоконструкций", "реконструкция ангара"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ремонт и усиление старого ангара из металлоконструкций",
    "description": "Ремонт и усиление старых ангаров из металлоконструкций. Замена прогонов, ферм, утепления, кровли. Оценка и сроки.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ремонт и усиление старого ангара из металлоконструкций</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Ремонт
          </div>
          <>
<p>Старые ангара из металлоконструкций со временем могут терять прочность из-за коррозии, перегрузки, повреждения кровли или неправильного монтажа. МАКСТИЛ проводит диагностику, ремонт и усиление каркасов, чтобы продлить срок службы здания.</p>

<h2>Когда нужен ремонт</h2>
<p>Основные признаки: коррозия элементов, прогиб ферм, течи в кровле, разболтанные узлы, трещины в сварных швах, повреждение ограждения после ветровой или снеговой нагрузки.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Коррозия более 10% сечения элемента;</li>
<li>Прогиб ферм больше нормы по СП;</li>
<li>Течи и разрушение кровельного покрытия;</li>
<li>Разболтанные или отсутствующие метизы.</li>
</ul>

<h2>Виды работ и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Вид работ</th><th className="border border-slate-300 px-4 py-2 text-left">Стоимость</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Диагностика и обследование</td><td className="border border-slate-300 px-4 py-2">от 15 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Замена прогонов и связей</td><td className="border border-slate-300 px-4 py-2">от 500 ₽/м²</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Усиление ферм и колонн</td><td className="border border-slate-300 px-4 py-2">по смете</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Замена кровли</td><td className="border border-slate-300 px-4 py-2">от 1 200 ₽/м²</td></tr>
</tbody>
</table>
</div>

<h2>Технология усиления</h2>
<p>Усиление выполняется накладками, дополнительными стойками, распорками, заменой прогибших элементов. Все новые узлы рассчитываем и грунтуем. После ремонта выдаём заключение о возможности дальнейшей эксплуатации.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Обследование ангара</h3>
<p className="text-muted mb-4">Закажите диагностику — инженер выедет на объект и подготовит смету ремонта.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
