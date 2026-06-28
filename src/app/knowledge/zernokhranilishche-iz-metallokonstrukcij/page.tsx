import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Зернохранилище из металлоконструкций: виды, проекты, стоимость | МАКСТИЛ",
  description: "Строительство зернохранилищ из металлоконструкций под ключ. Ангары, хранилища с активным вентилированием. Цены от 4 200 ₽/м². Проект за 5 дней.",
  keywords: ["зернохранилище из металлоконструкций", "строительство зернохранилища", "зернохранилище под ключ", "ангар для зерна", "зерновой склад ЛСТК цена"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Зернохранилище из металлоконструкций: виды, проекты, стоимость",
    "description": "Строительство зернохранилищ из металлоконструкций под ключ. Цены от 4 200 ₽/м².",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Зернохранилище из металлоконструкций: виды, проекты, стоимость</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Хранилища
          </div>

<p className="mb-4">Зернохранилище из металлоконструкций — наиболее экономичный способ организовать хранение зерна, семян и кормов. МАКСТИЛ строит зерновые склады и ангары под ключ с системой активного вентилирования и влагозащитой.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Виды зернохранилищ из металлоконструкций</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Плоскостные склады</strong> — прямоугольные здания с полом и закромами. Ёмкость — до 10 000 тонн. Простая конструкция, удобная механизация;</li>
<li><strong>Арочные ангары</strong> — бесфермные конструкции, быстрый монтаж, низкая стоимость;</li>
<li><strong>Шатровые хранилища</strong> — круглые металлические ёмкости ⌀ 6–30 м на 100–5 000 тонн;</li>
<li><strong>Силосные башни</strong> — вертикальные ёмкости для зерна, шрота, подсолнечника.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Требования к зернохранилищу</h2>
<p className="mb-4">Качество хранения зерна зависит от параметров здания:</p>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Влажность зерна при закладке — не более 14%;</li>
<li>Температура хранения — 5–10 °C для длительного хранения;</li>
<li>Активное вентилирование — 15–25 м³/т·ч для охлаждения;</li>
<li>Полы — бетонные с гидроизоляцией, уклон 0,5–1% к выгрузным лоткам;</li>
<li>Стены — профлист или сэндвич-панели с пароизоляцией.</li>
</ul>

<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Тип зернохранилища</th><th className="border border-slate-300 px-4 py-2 text-left">Ёмкость</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Плоскостной склад без утепления</td><td className="border border-slate-300 px-4 py-2">500–5 000 т</td><td className="border border-slate-300 px-4 py-2">от 4 200 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Утеплённый склад с вентилированием</td><td className="border border-slate-300 px-4 py-2">1 000–10 000 т</td><td className="border border-slate-300 px-4 py-2">от 5 000 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">Арочный ангар для зерна</td><td className="border border-slate-300 px-4 py-2">200–3 000 т</td><td className="border border-slate-300 px-4 py-2">от 3 800 ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Что входит в комплектацию</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Металлокаркас ЛСТК или ЛМК;</li>
<li>Фундамент — ленточный или столбчатый;</li>
<li>Кровля — профлист или сэндвич-панели;</li>
<li>Стены — профлист с пароизоляцией;</li>
<li>Полы — бетонная стяжка с гидроизоляцией;</li>
<li>Система активного вентилирования;</li>
<li>Ворота секционные или распашные;</li>
<li>Электроосвещение.</li>
</ul>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать зернохранилище</h3>
<p className="text-muted mb-4">Укажите необходимую ёмкость в тоннах — подготовим проект и смету за 2 дня.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
