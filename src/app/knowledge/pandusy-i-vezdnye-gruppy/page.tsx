import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Устройство пандусов и въездных групп для склада | Справочник ЛСТК",
  description: "Пандусы, въездные группы, доковые ворота для склада. Уклон, ширина, нагрузка, гидроизоляция. Проект и цены.",
  keywords: ["пандус для склада", "въездная группа", "доковые ворота", "пандус ангар", "въезд в склад"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Устройство пандусов и въездных групп для склада",
    "description": "Пандусы, въездные группы, доковые ворота для склада. Уклон, ширина, нагрузка, гидроизоляция. Проект и цены.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Устройство пандусов и въездных групп для склада</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Инженерия
          </div>
          <>
<p>Въездные группы и пандусы — критичные элементы склада, от которых зависит удобство и безопасность эксплуатации. МАКСТИЛ проектирует пандусы, доковые ворота, откатные и секционные ворота, учитывая нагрузку от техники и грузопоток.</p>

<h2>Требования к пандусам</h2>
<p>Уклон пандуса для погрузчиков — не более 10%, для фур с доковой платформой — 6–8%. Ширина — не менее 3,5 м для двустороннего движения, 2,5 м для одностороннего. Покрытие — бетон с топпингом или асфальт, выдерживающее нагрузку от фуры.</p>

<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Уклон — 6–10% в зависимости от техники;</li>
<li>Ширина — от 2,5 м;</li>
<li>Бетонная плита — 200–300 мм;</li>
<li>Ливневый лоток и дренаж у въезда.</li>
</ul>

<h2>Въездные группы и цены</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Элемент</th><th className="border border-slate-300 px-4 py-2 text-left">Цена</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Пандус бетонный 1 м²</td><td className="border border-slate-300 px-4 py-2">3 500–5 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Доковая платформа с герметизатором</td><td className="border border-slate-300 px-4 py-2">150 000–300 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Секционные ворота для дока</td><td className="border border-slate-300 px-4 py-2">80 000–150 000 ₽</td></tr>
</tbody>
</table>
</div>

<h2>Интеграция со складом</h2>
<p>Пандусы и доки проектируются вместе с планировкой склада, зонами разворота, стеллажами. Важно предусмотреть снеготаяние, подогрев въезда и ливневую канализацию.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Спроектировать въездную группу</h3>
<p className="text-muted mb-4">Расскажите о технике и грузопотоке — подготовим проект пандусов и доков.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
</>
        </article>
      </main>
    </div>
  );
}
