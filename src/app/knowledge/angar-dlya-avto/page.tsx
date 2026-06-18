import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар для авто: гараж, СТО, автопарк | МАКСТИЛ",
  description: "Строительство ангаров для автомобилей. Личный гараж, СТО, автосервис, автопарк. Цены и проекты.",
  keywords: ["ангар для авто", "гараж металлоконструкции", "СТО ангар", "автосервис под ключ"],
  openGraph: {
    title: "Ангар для авто: гараж и СТО",
    description: "Ангары для автомобилей под любые задачи.",
    url: "https://lstkmk.ru/knowledge/angar-dlya-avto/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/angar-dlya-avto/",
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
            Ангар для авто: гараж и СТО
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Ангар из ЛСТК — универсальное решение для хранения и обслуживания автомобилей. Строим от личного гаража до крупных автопарков.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Типы автозданий</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Личный гараж</h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Размер: 6×6 м, 6×8 м (1-2 авто)</li>
              <li>Высота: от 3.5 м</li>
              <li>Утепление опционально</li>
              <li>Цена: от 200 000 ₽</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">СТО / автосервис</h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Размер: от 12×24 м (4-6 постов)</li>
              <li>Необходимо утепление и вентиляция</li>
              <li>Яма или подъёмники</li>
              <li>Цена: от 1.5 млн ₽</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Автопарк / автобаза</h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Размер: от 15×30 м</li>
              <li>Несколько въездов</li>
              <li>Огнезащита категории А</li>
              <li>Цена: от 3 млн ₽</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Особенности проектирования</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-muted">
                <li>Ворота минимум 3×3 м (для джипов 4×3 м)</li>
                <li>Напольная яма или подъёмники — усиление фундамента</li>
                <li>Освещение: 200-300 люкс для СТО</li>
                <li>Вентиляция: 2-3 кратный воздухообмен</li>
                <li>Пожаротушение для коммерческих СТО</li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Проектируем СТО с учётом техрегламента. Звоните: <a href="tel:+79803211542" className="text-accent-blue font-medium">+7 (980) 321-15-42</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
