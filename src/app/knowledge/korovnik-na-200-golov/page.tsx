import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Коровник на 200 голов: проект, размеры, цена | МАКСТИЛ",
  description: "Как построить коровник на 200 голов из ЛСТК. Размеры, площадь, вентиляция, утепление, стоимость. Проектирование и строительство под ключ.",
  keywords: [
    "коровник на 200 голов",
    "коровник на 200 голов цена",
    "проект коровника на 200 голов",
    "коровник из ЛСТК",
    "строительство коровника",
    "ферма на 200 голов",
  ],
  openGraph: {
    title: "Коровник на 200 голов: проект, размеры, цена",
    description: "Как построить коровник на 200 голов из ЛСТК. Размеры, площадь, вентиляция, утепление, стоимость.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Коровник на 200 голов: проект, размеры, цена",
    "description": "Как построить коровник на 200 голов из ЛСТК. Размеры, площадь, вентиляция, утепление, стоимость.",
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
            Коровник на 200 голов: проект, размеры и цена
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Коровники</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Сельхозздания</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Коровник на 200 голов — это средняя по мощности ферма, которая требует грамотного проектирования. Технология ЛСТК позволяет построить такой объект быстро, сэкономить на фундаменте и обеспечить долгий срок службы в агрессивной среде.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Размеры и площадь коровника</h2>
          <p className="mb-4">
            По нормам СП на одну дойную корову отводится 5–6 м². Для 200 голов минимальная площадь — <strong>1 000–1 200 м²</strong>. Популярные размеры: 20×60 м, 24×50 м, 30×40 м. Высота в коньке — 4–5 м.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Площадь</td><td className="border border-slate-300 px-4 py-2">1 000–1 200 м²</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Размеры</td><td className="border border-slate-300 px-4 py-2">20×60 м / 24×50 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Высота</td><td className="border border-slate-300 px-4 py-2">4–5 м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Площадь на голову</td><td className="border border-slate-300 px-4 py-2">5–6 м²</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость коровника на 200 голов</h2>
          <p className="mb-4">
            Коровник из ЛСТК под ключ стоит от <strong>8 000 ₽/м²</strong>. Для объекта 1 200 м² итоговая стоимость — от <strong>9 600 000 ₽</strong>. В стоимость входят фундамент, каркас, утепление, вентиляция, кровля и монтаж.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Обязательные системы</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Вентиляция</strong> — естественная и принудительная, нормы воздухообмена</li>
            <li><strong>Утепление</strong> — для поддержания температуры +5–12 °C</li>
            <li><strong>Освещение</strong> — нормы для животноводческих помещений</li>
            <li><strong>Навозоудаление</strong> — траншеи, скребки, системы хранения</li>
            <li><strong>Водоснабжение</strong> — поилки, мойка</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Сроки строительства</h2>
          <p className="mb-4">
            Проектирование — 15–20 дней, производство — 25–35 дней, фундамент — 14–21 день, монтаж — 30–45 дней. Общий цикл — <strong>90–120 дней</strong>.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Проект коровника на 200 голов</h3>
            <p className="text-muted mb-4">Проектирование с учётом СП, вентиляции, утепления и навозоудаления.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать коровник
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
