import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Склад 1000 м² из металлоконструкций: цена и проект | МАКСТИЛ",
  description: "Сколько стоит построить склад 1000 м² из ЛСТК. Проектирование, комплектации, сроки, примеры. Холодный и тёплый вариант под ключ.",
  keywords: [
    "склад 1000 м2",
    "склад 1000 квадратных метров",
    "строительство склада 1000 м2",
    "склад из металлоконструкций 1000 м2",
    "склад ЛСТК 1000 м2",
    "склад 1000 м2 цена",
  ],
  openGraph: {
    title: "Склад 1000 м² из металлоконструкций: цена и проект",
    description: "Полный гид по строительству склада 1000 м² из ЛСТК. Цены, сроки, примеры.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Склад 1000 м² из металлоконструкций: цена и проект",
    "description": "Сколько стоит построить склад 1000 м² из ЛСТК. Проектирование, комплектации, сроки, примеры.",
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
            Склад 1000 м² из металлоконструкций: цена и проект
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Склады</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Проектирование</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Склад 1000 м² — это стандартный объект для логистики, производства и торговли. Строительство из ЛСТК позволяет получить большое пространство без внутренних колонн, сэкономить на фундаменте и ввести объект в эксплуатацию за 2–3 месяца.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Варианты планировки склада 1000 м²</h2>
          <p className="mb-4">
            Наиболее распространённые размеры: 20×50 м, 24×42 м, 30×33 м. Пролёт 20–30 м позволяет организовать ряды стеллажей и зону погрузки. Стандартная высота в коньке — 6–8 м.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Размеры</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Пролёт</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Площадь</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">20×50 м</td><td className="border border-slate-300 px-4 py-2">20 м</td><td className="border border-slate-300 px-4 py-2">1 000 м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">24×42 м</td><td className="border border-slate-300 px-4 py-2">24 м</td><td className="border border-slate-300 px-4 py-2">1 008 м²</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">30×33 м</td><td className="border border-slate-300 px-4 py-2">30 м</td><td className="border border-slate-300 px-4 py-2">990 м²</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сколько стоит склад 1000 м²</h2>
          <p className="mb-4">
            Стоимость склада 1000 м² из ЛСТК под ключ стартует от <strong>4 500 000 ₽</strong> за холодный вариант и от <strong>9 000 000 ₽</strong> за тёплый с сэндвич-панелями. Цена зависит от утепления, типа ворот, полов и инженерных систем. Подробнее о строительстве складов из металлоконструкций — на странице <Link href="/stroitelstvo-skladov-iz-metallokonstrukcij/" className="text-accent-blue hover:underline">строительство складов из металлоконструкций под ключ</Link>.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Комплектация</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Холодный склад</td><td className="border border-slate-300 px-4 py-2">от 4 500 000 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Тёплый склад</td><td className="border border-slate-300 px-4 py-2">от 9 000 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Склад с кран-балкой</td><td className="border border-slate-300 px-4 py-2">от 11 000 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки и этапы строительства</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li>Проектирование и расчёт — 10–15 дней</li>
            <li>Изготовление ЛСТК — 20–30 дней</li>
            <li>Фундамент — 14–21 день</li>
            <li>Монтаж каркаса и покрытия — 21–30 дней</li>
            <li>Инженерные системы и отделка — 10–20 дней</li>
          </ol>
          <p className="mb-4">Итого: <strong>60–90 дней</strong> от заявки до сдачи.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Что важно учесть при проектировании</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Тип груза и нагрузка на полы</li>
            <li>Необходимость утепления и отопления</li>
            <li>Количество и тип ворот</li>
            <li>Требования к пожарной безопасности</li>
            <li>Снеговая и ветровая нагрузка региона</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Проект склада 1000 м² под ключ</h3>
            <p className="text-muted mb-4">Подготовим проект, смету и сроки для вашего региона. Бесплатная консультация.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать склад
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
