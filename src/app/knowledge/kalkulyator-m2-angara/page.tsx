import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Калькулятор стоимости ангара за м² | Расчёт цены ЛСТК | МАКСТИЛ",
  description: "Как рассчитать стоимость ангара за м². Формулы, калькулятор, факторы цены. Холодный от 4 500 ₽, тёплый / производственный цех от 5 600 ₽, сельхоз / автосервис от 4 600–4 800 ₽/м².",
  keywords: [
    "калькулятор ангара",
    "калькулятор стоимости ангара",
    "сколько стоит ангар за м2",
    "расчёт стоимости ангара",
    "цена ангара за квадратный метр",
    "стоимость ангара ЛСТК",
  ],
  openGraph: {
    title: "Калькулятор стоимости ангара за м²",
    description: "Как рассчитать стоимость ангара за м². Формулы, калькулятор, факторы цены.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Калькулятор стоимости ангара за м²",
    "description": "Как рассчитать стоимость ангара за м². Формулы, калькулятор, факторы цены.",
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
            Калькулятор стоимости ангара за м²
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Калькулятор</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Цены</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Ориентировочный расчёт стоимости ангара помогает быстро оценить бюджет до детального проекта. Ниже — формулы, типовые цены за м² и факторы, которые влияют на итоговую сумму.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Базовые цены за 1 м² в 2025 году</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Тип здания</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена за м²</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Входит в стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный ангар ЛСТК</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td><td className="border border-slate-300 px-4 py-2">Каркас, кровля, ворота</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый ангар / склад</td><td className="border border-slate-300 px-4 py-2">от 9 000 ₽</td><td className="border border-slate-300 px-4 py-2">+ утепление, сэндвич-панели</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Производственный цех</td><td className="border border-slate-300 px-4 py-2">от 11 000 ₽</td><td className="border border-slate-300 px-4 py-2">+ кран-балка, усиленный каркас</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Классический металлокаркас</td><td className="border border-slate-300 px-4 py-2">от 18 000 ₽</td><td className="border border-slate-300 px-4 py-2">Пролёты 30+ м, тяжёлые нагрузки</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Формула расчёта</h2>
          <p className="mb-4">
            <strong>Общая стоимость = Площадь × Цена за м² + Фундамент + Ворота + Дополнительные работы</strong>
          </p>
          <p className="mb-4">
            Для холодного ангара: <strong>Стоимость = S × 4 500 ₽</strong>.<br />
            Для тёплого: <strong>Стоимость = S × 9 000 ₽</strong>.<br />
            Для цеха с краном: <strong>Стоимость = S × 11 000 ₽</strong>.
          </p>
          <p className="mb-4">
            Пример: ангар 15×24 м = 360 м². Холодный вариант: 360 × 4 500 = <strong>1 620 000 ₽</strong>. Тёплый: 360 × 9 000 = <strong>3 240 000 ₽</strong>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что влияет на цену</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Площадь и пролёт здания</li>
            <li>Регион (снеговая и ветровая нагрузка)</li>
            <li>Тип фундамента</li>
            <li>Комплектация (утепление, ворота, окна)</li>
            <li>Наличие крана, антресоли, перегородок</li>
            <li>Доставка и монтаж</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Онлайн-калькулятор на сайте</h2>
          <p className="mb-4">
            Для точного расчёта используйте наш калькулятор на главной странице. Укажите тип здания, размеры, утепление и регион — система рассчитает стоимость за 30 секунд.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Рассчитайте ангар прямо сейчас</h3>
            <p className="text-muted mb-4">Калькулятор учитывает размеры, регион и комплектацию.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Открыть калькулятор
              </a>
              <a href="tel:+79606322061" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
