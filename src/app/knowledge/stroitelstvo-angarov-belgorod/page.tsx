import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство ангаров в Белгороде и области: цены, сроки | МАКСТИЛ",
  description: "Строительство ангаров в Белгороде и Белгородской области. Цены, сроки, производство ЛСТК, доставка, монтаж. Ангары, склады, цеха, сельхозздания.",
  keywords: [
    "строительство ангаров в Белгороде",
    "ангар Белгород",
    "ангары Белгородская область",
    "строительство ангаров Белгород",
    "склад Белгород",
    "ЛСТК Белгород",
  ],
  openGraph: {
    title: "Строительство ангаров в Белгороде и области: цены, сроки",
    description: "Строительство ангаров в Белгороде и Белгородской области. Цены, сроки, производство ЛСТК.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство ангаров в Белгороде и области: цены, сроки",
    "description": "Строительство ангаров в Белгороде и Белгородской области. Цены, сроки, производство ЛСТК, доставка, монтаж.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
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
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Строительство ангаров в Белгороде и Белгородской области
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Регион</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Белгородская область — один из ключевых рынков для МАКСТИЛ. Мы производим ЛСТК-профиль и металлоконструкции в регионе, строим ангары, склады, цеха и сельхозздания. Собственное производство и монтажные бригады позволяют держать низкие цены и сжатые сроки.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Актуальные цены в Белгороде</h2>
          <p className="mb-4">
            Цены на строительство ангаров в Белгородской области соответствуют среднероссийским ориентирам. Холодный ангар — от <strong>4 500 ₽/м²</strong>, тёплый — от <strong>5 600 ₽/м²</strong>, производственный цех — от <strong>5 600 ₽/м²</strong>.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Сроки</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный ангар</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td><td className="border border-slate-300 px-4 py-2">45–60 дней</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый склад</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td><td className="border border-slate-300 px-4 py-2">60–90 дней</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Производственный цех</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td><td className="border border-slate-300 px-4 py-2">90–120 дней</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Коровник</td><td className="border border-slate-300 px-4 py-2">от 8 000 ₽</td><td className="border border-slate-300 px-4 py-2">60–90 дней</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Почему выбирают МАКСТИЛ в Белгороде</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Собственное производство ЛСТК-профиля в Белгородской области</li>
            <li>Быстрая доставка на объект — от 1 дня</li>
            <li>Штатные монтажные бригады</li>
            <li>Работа по всему Черноземью и ДНР/ЛНР</li>
            <li>Гарантия 5 лет на конструкции, 3 года на монтаж</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Регионы работы</h2>
          <p className="mb-4">
            МАКСТИЛ строит ангары в Белгороде, Старом Осколе, Губкине, Валуйках, Шебекино, Алексеевке и других населённых пунктах области. Также работаем в Курской, Воронежской, Орловской и Липецкой областях, ДНР и ЛНР.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Климатические особенности</h2>
          <p className="mb-4">
            Белгородская область относится к III снеговому и II ветровому районам. Это влияет на расчёт каркаса и кровли. Для тёплых зданий рекомендуется утепление сэндвич-панелями толщиной 100–150 мм.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Строительство ангаров в Белгороде</h3>
            <p className="text-muted mb-4">Бесплатный выезд инженера на объект в Белгородской области и расчёт за 15 минут.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать ангар
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
