import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Узлы крепления ЛСТК: обзор типовых решений и метизов | Справочник ЛСТК",
  description: "Узлы крепления ЛСТК: болтовые, саморезные, уголки, пластины, анкеры. Как выбрать метизы и не допустить ошибок в монтаже.",
  keywords: ["узлы крепления ЛСТК", "метизы ЛСТК", "болты ЛСТК", "саморезы ЛСТК", "крепление ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Узлы крепления ЛСТК: обзор типовых решений и метизов",
    "description": "Узлы крепления ЛСТК: болтовые, саморезные, уголки, пластины, анкеры. Как выбрать метизы и не допустить ошибок в монтаже.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Узлы крепления ЛСТК: обзор типовых решений и метизов</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Конструкции
          </div>
          <>
<p>Узлы крепления — самые ответственные места в каркасе ЛСТК. От правильного подбора болтов, саморезов, уголков и пластин зависит прочность и долговечность всего здания. МАКСТИЛ использует сертифицированные метизы и стандартные решения.</p>

<h2>Типовые узлы</h2>
<p>Основные узлы: соединение колонн с фундаментом анкерными болтами, стыковка ферм с колоннами через болтовые или саморезные соединения, крепление прогонов и связей, узлы стыковки ферм по длине.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Анкерные болты М16–М24 для крепления к фундаменту;</li>
<li>Высокопрочные болты 8.8 для ферм и колонн;</li>
<li>Саморезы по металлу с буром для прогонов;</li>
<li>Уголки и пластины из оцинкованной стали 2–4 мм.</li>
</ul>

<h2>Как не допустить ошибок</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Ошибка</th><th className="border border-slate-300 px-4 py-2 text-left">Последствие</th><th className="border border-slate-300 px-4 py-2 text-left">Решение</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Саморезы вместо болтов на фермах</td><td className="border border-slate-300 px-4 py-2">Срез соединения под нагрузкой</td><td className="border border-slate-300 px-4 py-2">Болтовые соединения</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Недостаточная длина анкеров</td><td className="border border-slate-300 px-4 py-2">Вырыв колонны из фундамента</td><td className="border border-slate-300 px-4 py-2">Расчёт анкеров по срыву</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Неоцинкованные метизы</td><td className="border border-slate-300 px-4 py-2">Коррозия и ослабление узла</td><td className="border border-slate-300 px-4 py-2">Оцинкованные или нержавеющие</td></tr>
</tbody>
</table>
</div>

<h2>Контроль качества</h2>
<p>МАКСТИЛ проверяет затяжку всех болтов динамометрическим ключом, использует шайбы и гроверы для предотвращения самоотвинчивания, наносит грунтовку на срезы и сварные места.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Заказать проект КМД</h3>
<p className="text-muted mb-4">Получите детальные чертежи узлов крепления для вашего ангара.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
