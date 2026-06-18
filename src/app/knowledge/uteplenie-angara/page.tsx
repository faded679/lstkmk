import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Утепление ангара: способы и цены 2025 | МАКСТИЛ",
  description: "Как утеплить ангар из металлоконструкций. Сэндвич-панели, минвата, пеноплекс. Цены и сравнение материалов.",
  keywords: ["утепление ангара", "утеплить ангар", "сэндвич-панели ангар", "утепление металлоконструкций"],
  openGraph: {
    title: "Утепление ангара: способы и цены",
    description: "Варианты утепления ангаров из ЛСТК.",
    url: "https://lstkmk.ru/knowledge/uteplenie-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/uteplenie-angara/",
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
            Утепление ангара: способы и цены
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Для хранения товаров и работы в холодное время ангар нужно утеплять. Три основных способа:
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Сэндвич-панели (лучший вариант)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Наполнитель: минвата, пенополистирол, ПИР</li>
              <li>Толщина: 80-200 мм</li>
              <li>Готовая теплоизоляция + гидроизоляция</li>
              <li>Монтаж за 1-2 недели</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 9 000 ₽/м² под ключ</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Утеплитель + профнастил</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Базальтовая вата или пеноплекс</li>
              <li>Паро- и гидроизоляция обязательны</li>
              <li>Монтаж сложнее, больше стыков</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 7 500 ₽/м²</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Напыляемый пенополиуретан (ППУ)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Бесшовное покрытие</li>
              <li>Толщина 50-100 мм</li>
              <li>Быстрый монтаж, но дороже</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 12 000 ₽/м²</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Рекомендация</h2>
            <p className="text-muted leading-relaxed">
              Для складов и цехов — <strong>сэндвич-панели с минватой</strong>: лучшее соотношение цены, теплоизоляции и долговечности.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
