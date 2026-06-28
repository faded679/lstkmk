import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство автомойки из металлоконструкций под ключ | МАКСТИЛ",
  description: "Строительство автомоек из металлоконструкций под ключ. Проект, канализация, вентиляция, отопление. Цены от 4 500 ₽/м². Срок строительства 45 дней.",
  keywords: ["строительство автомойки из металлоконструкций", "автомойка под ключ цена", "автомойка из ЛСТК проект", "строительство автомойки цена", "металлокаркас автомойка"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство автомойки из металлоконструкций под ключ",
    "description": "Строительство автомоек из металлоконструкций. Цены от 4 500 ₽/м². Срок 45 дней.",
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Строительство автомойки из металлоконструкций под ключ</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Автоздания
          </div>

<p className="mb-4">Автомойка из металлоконструкций — быстрый и экономичный способ открыть бизнес по мойке автомобилей. МАКСТИЛ строит автомойки под ключ: от проекта до подключения оборудования. Минимальный срок — 45 дней.</p>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Типы автомоек</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li><strong>Ручная мойка</strong> — 1–6 постов, площадь 60–400 м². Минимальные вложения в оборудование;</li>
<li><strong>Автоматическая портальная</strong> — 1–2 поста на 18–24 машины в час;</li>
<li><strong>Туннельная мойка</strong> — непрерывный поток, от 50 машин в час, длина туннеля 15–40 м;</li>
<li><strong>Грузовая мойка</strong> — посты шириной от 5 м, высота ворот от 4,5 м.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Требования к зданию автомойки</h2>
<ul className="list-disc list-inside space-y-2 text-muted mb-6">
<li>Уклон пола — 2% к центральному лотку или в сторону ям;</li>
<li>Гидроизоляция пола — обязательна (полимерное или эпоксидное покрытие);</li>
<li>Дренаж — лотки, пескожироуловитель, нефтеотделитель;</li>
<li>Вентиляция — приточная и вытяжная, 10–15 кратный воздухообмен;</li>
<li>Отопление — водяное или воздушное от 18 °C на постах;</li>
<li>Водоснабжение — горячая и холодная вода, давление 4–6 бар;</li>
<li>Высота ворот — от 3,2 м для легковых, от 4,5 м для грузовых.</li>
</ul>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Стоимость автомойки из металлоконструкций</h2>
<div className="overflow-x-auto my-6">
<table className="w-full border border-slate-300 border-collapse text-sm">
<thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th><th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th></tr></thead>
<tbody>
<tr><td className="border border-slate-300 px-4 py-2">Металлокаркас + кровля + стены</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">+ пол с гидроизоляцией и дренажом</td><td className="border border-slate-300 px-4 py-2">от 5 200 ₽</td></tr>
<tr><td className="border border-slate-300 px-4 py-2">+ вентиляция и отопление</td><td className="border border-slate-300 px-4 py-2">от 6 000 ₽</td></tr>
<tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Полная комплектация под ключ</td><td className="border border-slate-300 px-4 py-2">от 6 500 ₽</td></tr>
</tbody>
</table>
</div>

<h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Разрешительная документация</h2>
<p className="mb-4">Для автомойки необходимо: разрешение на строительство, согласование с Роспотребнадзором, заключение пожарной инспекции, договор на водоснабжение и водоотведение. МАКСТИЛ помогает с подготовкой документов.</p>

<div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
<h3 className="text-lg font-semibold text-foreground mb-3">Рассчитать автомойку</h3>
<p className="text-muted mb-4">Укажите количество постов и тип автомобилей — подготовим КП за 1 день.</p>
<a href="/#calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
</div>
        </article>
      </main>
    </div>
  );
}
