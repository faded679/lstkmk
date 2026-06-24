import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Логистический комплекс из металлоконструкций: цена и сроки | Справочник ЛСТК",
  description: "Строительство логистических комплексов из ЛСТК. Площади от 1 000 м², цены от 4 500 ₽/м², срок от 45 дней. Складские зоны, доки, ворота.",
  keywords: ["логистический комплекс", "логистический центр из ЛСТК", "складской комплекс", "строительство логистического комплекса", "цена логистический комплекс"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Логистический комплекс из металлоконструкций: цена и сроки",
    "description": "Строительство логистических комплексов из ЛСТК. Площади от 1 000 м², цены от 4 500 ₽/м², срок от 45 дней. Складские зоны, доки, ворота.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Логистический комплекс из металлоконструкций: цена и сроки</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Промздания
          </div>
          <>
<p>Логистический комплекс из металлоконструкций ЛСТК позволяет быстро возвести современный складской объект с большими пролётами и минимальным количеством колонн. МАКСТИЛ проектирует и строит комплексы площадью от 1 000 м² под ключ.</p>

<h2>Преимущества ЛСТК для логистики</h2>
<p>Быстровозводимые здания из ЛСТК дают свободный пролёт до 24 м, высокую скорость монтажа и низкую стоимость фундамента. Каркас в 3 раза легче металлокаркаса, что снижает нагрузку на грунт.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Свободные пролёты до 24 м без промежуточных колонн;</li>
<li>Возможность установки доковых ворот, пандусов, стеллажей;</li>
<li>Срок строительства — от 45 дней.</li>
</ul>

<h2>Цены и комплектация</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Холодный склад</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый склад с утеплением</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Сортировочный/дистрибуционный центр</td><td className="border border-slate-300 px-4 py-2">от 5 600 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Что входит в проект</h2>
<p>Проектирование КМ/КМД, фундамент, каркас ЛСТК, кровля и стеновое покрытие, ворота, доки, пандусы, освещение, отопление и вентиляция. Возможно строительство поэтапно — отдельные зоны под склад, офис и сортировку.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Расчёт логистического комплекса</h3>
<p className="text-muted mb-4">Расскажите площадь и назначение — подготовим детальную смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
