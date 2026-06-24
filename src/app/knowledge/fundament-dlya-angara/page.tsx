import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Фундамент для ангара: виды и цены | МАКСТИЛ",
  description: "Какой фундамент выбрать для ангара. Свайный, ленточный, плитный — сравнение по цене и срокам. Расчёт под ЛСТК.",
  keywords: ["фундамент для ангара", "свайный фундамент ангар", "фундамент под металлоконструкции"],
  openGraph: {
    title: "Фундамент для ангара: виды и цены",
    description: "Какой фундамент выбрать для ангара из ЛСТК.",
    url: "https://lstkmk.ru/knowledge/fundament-dlya-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/fundament-dlya-angara/",
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
            Фундамент для ангара: виды и цены
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Правильный фундамент — залог долговечности ангара. Для ЛСТК подходят три типа оснований.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Свайный фундамент (рекомендуем)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Буронабивные сваи Ø 300-400 мм</li>
              <li>Забивные железобетонные сваи</li>
              <li>Глубина от 1.5 м до 6 м (зависит от грунта)</li>
              <li>Срок: 3-7 дней</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 1 500 ₽/м² ангара</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Ленточный мелкозаглубленный</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Глубина 0.5-0.7 м</li>
              <li>Ширина 0.3-0.4 м</li>
              <li>Подходит для лёгких грунтов</li>
              <li>Срок: 7-14 дней (с учётом набора прочности)</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 2 000 ₽/м²</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Плитный фундамент</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Монолитная плита толщиной 200-300 мм</li>
              <li>Максимальная устойчивость</li>
              <li>Для тяжёлых грунтов и больших нагрузок</li>
              <li>Срок: 14-21 день</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 3 500 ₽/м²</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Выбор по грунту</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-muted">
                <li><strong>Песок, супесь</strong> — свайный или ленточный</li>
                <li><strong>Глина, пучинистые грунты</strong> — только свайный</li>
                <li><strong>Скальные грунты</strong> — плитный или анкерное крепление</li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Геологию и расчёт фундамента делаем бесплатно. Звоните: <a href="tel:+79606322061" className="text-accent-blue font-medium">+7 (960) 632-20-61</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
