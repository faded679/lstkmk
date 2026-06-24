import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Типичные ошибки при заказе ангара: чек-лист для заказчика | Справочник ЛСТК",
  description: "Чек-лист ошибок при заказе ангара. Как сравнивать сметы, что проверять в договоре, как избежать переплат и проблем с монтажом.",
  keywords: ["ошибки при заказе ангара", "чек-лист ангар", "как заказать ангар", "переплата ангар", "смета ангар"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Типичные ошибки при заказе ангара: чек-лист для заказчика",
    "description": "Чек-лист ошибок при заказе ангара. Как сравнивать сметы, что проверять в договоре, как избежать переплат и проблем с монтажом.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Типичные ошибки при заказе ангара: чек-лист для заказчика</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Советы
          </div>
          <>
<p>Заказ ангара — сложный процесс, где легко допустить ошибку. Неправильный расчёт, неполная смета или дешёвый подрядчик могут привести к переплатам и проблемам. МАКСТИЛ подготовил чек-лист для заказчика.</p>

<h2>Частые ошибки</h2>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Сравнивать только итоговую цену, не вникая в комплектацию;</li>
<li>Не проверять, включён ли фундамент, ворота, монтаж;</li>
<li>Выбирать подрядчика только по низкой цене;</li>
<li>Игнорировать снеговую и ветровую нагрузку региона;</li>
<li>Не фиксировать сроки и гарантию в договоре.</li>
</ul>

<h2>Чек-лист по смете</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Пункт</th><th className="border border-slate-300 px-4 py-2 text-left">Что проверить</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Проект</td><td className="border border-slate-300 px-4 py-2">КМ, КМД, АР, включён ли?</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Фундамент</td><td className="border border-slate-300 px-4 py-2">Тип, глубина, армирование</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Каркас</td><td className="border border-slate-300 px-4 py-2">Сечение, оцинкование, марка стали</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Кровля/стены</td><td className="border border-slate-300 px-4 py-2">Толщина, утеплитель, ворота</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Монтаж</td><td className="border border-slate-300 px-4 py-2">Сроки, бригада, гарантия</td></tr>
</tbody>
</table>
</div>

<h2>Как выбрать подрядчика</h2>
<p>Проверяйте опыт, отзывы, собственное производство, наличие проектного отдела и гарантию. МАКСТИЛ работает с 2012 года, имеет собственный завод и даёт 5 лет гарантии на конструкции.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Получить чек-лист</h3>
<p className="text-muted mb-4">Оставьте заявку — мы бесплатно проконсультируем и проверим смету.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
