import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Овощехранилище под ключ: проект, строительство, цена | МАКСТИЛ",
  description: "Строительство овощехранилищ из металлоконструкций под ключ. Холодильные камеры, активная вентиляция, регулируемая атмосфера. Цена от 5 500 ₽/м².",
  keywords: ["овощехранилище под ключ", "строительство овощехранилища", "овощехранилище из металлоконструкций", "картофелехранилище цена", "хранилище для овощей ЛСТК"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Овощехранилище под ключ: проект, строительство, цена",
    "description": "Строительство овощехранилищ из металлоконструкций под ключ. Цена от 5 500 ₽/м².",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
    "publisher": { "@type": "Organization", "name": "МАКСТИЛ", "url": "https://lstkmk.ru" }
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Овощехранилище под ключ: проект, строительство, цена</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Хранилища
          </div>

<p className="mb-4">Овощехранилище из металлоконструкций — это специализированное здание с системой поддержания температуры, влажности и газового состава воздуха. МАКСТИЛ строит хранилища для картофеля, моркови, свёклы, лука и капусты под ключ.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Типы овощехранилищ</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Навальное хранение</strong> — насыпью высотой до 4 м, активное вентилирование снизу;</li>
<li><strong>В контейнерах</strong> — деревянные или пластиковые ящики, штабелируются до 6 м;</li>
<li><strong>В холодильных камерах</strong> — поддержание 0–8 °C для длительного хранения;</li>
<li><strong>Регулируемая атмосфера (РА)</strong> — снижение O₂ до 3%, повышение CO₂ до 5% для длительного хранения.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Режимы хранения овощей</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Культура</th><th className="border border-slate-300 px-4 py-2 text-left">Температура</th><th className="border border-slate-300 px-4 py-2 text-left">Влажность</th><th className="border border-slate-300 px-4 py-2 text-left">Срок хранения</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Картофель</td><td className="border border-slate-300 px-4 py-2">2–4 °C</td><td className="border border-slate-300 px-4 py-2">90–95%</td><td className="border border-slate-300 px-4 py-2">до 8 мес.</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Морковь</td><td className="border border-slate-300 px-4 py-2">0–1 °C</td><td className="border border-slate-300 px-4 py-2">95–98%</td><td className="border border-slate-300 px-4 py-2">до 8 мес.</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Лук</td><td className="border border-slate-300 px-4 py-2">–2–0 °C</td><td className="border border-slate-300 px-4 py-2">70–75%</td><td className="border border-slate-300 px-4 py-2">до 8 мес.</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Капуста</td><td className="border border-slate-300 px-4 py-2">0–1 °C</td><td className="border border-slate-300 px-4 py-2">90–95%</td><td className="border border-slate-300 px-4 py-2">до 6 мес.</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Конструктив здания</h2>
<p className="mb-4">Металлокаркас ЛСТК, утеплённые стены из сэндвич-панелей толщиной 150–200 мм, пол с гидроизоляцией и системой вентилирования, кровля с пароизоляцией. Ширина здания — 18–24 м, длина — от 48 м. Высота насыпи — 3,5–4,5 м.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стоимость овощехранилища</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Простое хранилище без охлаждения — от 5 500 ₽/м²;</li>
<li>Хранилище с активным вентилированием — от 6 500 ₽/м²;</li>
<li>Холодильное хранилище — от 8 000 ₽/м²;</li>
<li>Хранилище с РА-камерами — от 12 000 ₽/м².</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать овощехранилище</h3>
<p className="text-muted mb-4">Укажите культуру, объём и регион — подготовим проект и смету за 3 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
