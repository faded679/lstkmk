import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ворота для склада: типы и размеры | МАКСТИЛ",
  description: "Какие ворота выбрать для склада. Откатные, подъёмные, секционные ворота. Размеры, цены, монтаж.",
  keywords: ["ворота для склада", "откатные ворота склад", "промышленные ворота цена"],
  openGraph: {
    title: "Ворота для склада: типы и размеры",
    description: "Выбор промышленных ворот для склада.",
    url: "https://lstkmk.ru/knowledge/vorota-dlya-sklada/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/vorota-dlya-sklada/",
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
            Ворота для склада: какие выбрать
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Промышленные ворота — важный элемент склада. От них зависят логистика, безопасность и энергоэффективность.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Откатные ворота (самые популярные)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Открывание в сторону по рельсам</li>
              <li>Ширина: 3-8 м, высота: 3-6 м</li>
              <li>Ручное или автоматическое управление</li>
              <li>Утепление: сэндвич-панель 40-100 мм</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 80 000 ₽ (4×4 м с автоматикой)</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Подъёмно-секционные ворота</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Поднимаются вверх под потолок</li>
              <li>Экономят пространство перед складом</li>
              <li>Отличная теплоизоляция</li>
              <li>Для склада с частым открыванием</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 120 000 ₽ (4×4 м)</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Распашные ворота</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Классический вариант</li>
              <li>Требуют места для распахивания</li>
              <li>Низкая цена, простой монтаж</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 50 000 ₽ (4×4 м)</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Рулонные (роллетные) ворота</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Компактны, быстро открываются</li>
              <li>Для мелких складов и павильонов</li>
              <li>Ограниченная шумоизоляция</li>
            </ul>
            <p className="text-muted mb-6"><strong>Цена:</strong> от 60 000 ₽</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Рекомендация</h2>
            <p className="text-muted leading-relaxed">
              Для крупного склада с интенсивным движением — <strong>откатные утеплённые с автоматикой</strong>. 
              Для небольшого холодного склада — <strong>распашные</strong>.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
