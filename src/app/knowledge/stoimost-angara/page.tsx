import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Стоимость ангара из металлоконструкций 2025 | МАКСТИЛ",
  description: "Сколько стоит построить ангар под ключ в 2025 году. Цены от 4 500 ₽/м² за холодный ангар, от 9 000 ₽/м² утепленный. Расчёт сметы.",
  keywords: ["стоимость ангара", "цена ангара", "сколько стоит ангар", "ангар под ключ цена"],
  openGraph: {
    title: "Стоимость ангара из металлоконструкций 2025",
    description: "Актуальные цены на строительство ангаров под ключ.",
    url: "https://lstkmk.ru/knowledge/stoimost-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/stoimost-angara/",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          База знаний
        </Link>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Стоимость ангара: цены 2025
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Цена ангара зависит от типа конструкции, площади и утепления. Вот актуальные цены от МАКСТИЛ:
            </p>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Цены за м² под ключ</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex justify-between"><span>Холодный ангар (профнастил):</span> <strong>от 4 500 ₽/м²</strong></li>
                <li className="flex justify-between"><span>Утепленный склад (минвата 100мм):</span> <strong>от 9 000 ₽/м²</strong></li>
                <li className="flex justify-between"><span>Производственный цех (ПИР 150мм):</span> <strong>от 11 000 ₽/м²</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Что входит в цену</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Проектирование (КМ, КМД)</li>
              <li>Производство металлоконструкций</li>
              <li>Доставка на объект</li>
              <li>Монтаж каркаса и ограждений</li>
              <li>Гарантия 5 лет на конструкции</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Примерный расчёт</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ангар 30×20 м (600 м²) холодный: <strong>≈ 2.7 млн ₽</strong><br/>
              Ангар 30×20 м утепленный: <strong>≈ 5.4 млн ₽</strong>
            </p>

            <p className="text-muted leading-relaxed">
              Для точной сметы нужен проект. Позвоните нам: <a href="tel:+79803211542" className="text-accent-blue font-medium">+7 (980) 321-15-42</a> — рассчитаем бесплатно.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
