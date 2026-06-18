import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сроки строительства ангара из ЛСТК | МАКСТИЛ",
  description: "Сколько строится ангар из металлоконструкций. Этапы: проектирование 10-15 дней, производство 15-30 дней, монтаж 14-45 дней.",
  keywords: ["сроки строительства ангара", "сколько строится ангар", "время строительства ЛСТК"],
  openGraph: {
    title: "Сроки строительства ангара из ЛСТК",
    description: "Реальные сроки от проекта до сдачи.",
    url: "https://lstkmk.ru/knowledge/sroki-stroitelstva/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/sroki-stroitelstva/",
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
            Сроки строительства ангара
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Ангар из ЛСТК строится в 3 раза быстрее кирпичного. Вот реальные сроки на примере ангара 30×20 м (600 м²):
            </p>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Поэтапные сроки</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex justify-between"><span>Проектирование (КМ, КМД):</span> <strong>10-15 дней</strong></li>
                <li className="flex justify-between"><span>Производство металлоконструкций:</span> <strong>15-30 дней</strong></li>
                <li className="flex justify-between"><span>Фундамент (если нужен):</span> <strong>7-14 дней</strong></li>
                <li className="flex justify-between"><span>Монтаж каркаса:</span> <strong>5-10 дней</strong></li>
                <li className="flex justify-between"><span>Монтаж сэндвич-панелей:</span> <strong>7-14 дней</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Итого под ключ</h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>45-60 дней</strong> — от проекта до сдачи ангара 600 м².<br/>
              Без фундамента (свайный) — можно уложиться в <strong>35-45 дней</strong>.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Что ускоряет строительство</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Готовый типовой проект — экономия 5-7 дней</li>
              <li>Свайный фундамент — не нужно ждать набора прочности бетона</li>
              <li>Болтовое соединение — монтаж без сварки</li>
              <li>Готовность завода — 15 000 м²/месяц</li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
