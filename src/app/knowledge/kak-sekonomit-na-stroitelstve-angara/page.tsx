import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Как сэкономить на строительстве ангара: 7 реальных способов | Справочник ЛСТК",
  description: "7 способов сэкономить на строительстве ангара из ЛСТК без потери качества. Площадь, комплектация, фундамент, утепление, планировка.",
  keywords: ["как сэкономить на строительстве ангара", "экономия на ангаре", "дешевый ангар", "способы сэкономить ЛСТК", "цена ангара"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Как сэкономить на строительстве ангара: 7 реальных способов",
    "description": "7 способов сэкономить на строительстве ангара из ЛСТК без потери качества. Площадь, комплектация, фундамент, утепление, планировка.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Как сэкономить на строительстве ангара: 7 реальных способов</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Советы
          </div>
          <>
<p>Строительство ангара — серьёзная инвестиция. Правильный подход позволяет сократить бюджет на 15–25% без ущерба для качества и сроков. МАКСТИЛ делится проверенными способами экономии.</p>

<h2>7 способов сэкономить</h2>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Увеличить площадь</strong> — удельная цена м² падает при росте площади;</li>
<li><strong>Выбрать холодный ангар</strong> — от 4 500 ₽/м² без утепления;</li>
<li><strong>Оптимизировать пролёт</strong> — стандартные 12, 18, 24 м дешевле нестандартных;</li>
<li><strong>Использовать свайный фундамент</strong> — быстрее и дешевле на слабых грунтах;</li>
<li><strong>Отказаться от лишних опций</strong> — кран-балка, антресоли, сложная отделка;</li>
<li><strong>Заказать зимой</strong> — сезонные скидки на производство и монтаж;</li>
<li><strong>Строить под ключ</strong> — один подрядчик дешевле, чем несколько.</li>
</ul>

<h2>Что нельзя экономить</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Позиция</th><th className="border border-slate-300 px-4 py-2 text-left">Почему важна</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Толщина оцинковки</td><td className="border border-slate-300 px-4 py-2">Отвечает за срок службы</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Расчёт нагрузок</td><td className="border border-slate-300 px-4 py-2">Безопасность здания</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Качество монтажа</td><td className="border border-slate-300 px-4 py-2">Герметичность и прочность</td></tr>
</tbody>
</table>
</div>

<h2>Консультация</h2>
<p>Инженер МАКСТИЛ поможет найти баланс между ценой и качеством, подобрав оптимальную комплектацию под ваш бюджет.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Сэкономить на ангаре</h3>
<p className="text-muted mb-4">Оставьте заявку — подберём оптимальную комплектацию.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
