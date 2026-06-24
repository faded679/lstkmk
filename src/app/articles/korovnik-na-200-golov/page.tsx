import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Коровник на 200 голов из ЛСТК | Проект промышленной фермы | МАКСТИЛ",
  description:
    "Строительство крупных коровников на 200 голов КРС из ЛСТК. Промышленные молочные фермы под ключ: проектирование, вентиляция, автоматизация.",
  keywords: [
    "коровник на 200 голов",
    "коровник 200 голов цена",
    "промышленный коровник ЛСТК",
    "строительство фермы 200 голов",
    "крупная молочная ферма",
    "проект коровника 200 голов",
    "автоматизированный коровник",
    "ферма КРС 200 голов",
  ],
  openGraph: {
    title: "Коровник на 200 голов из ЛСТК — промышленная ферма под ключ",
    description:
      "Крупный проект молочной фермы на 200 голов. Полный комплекс инженерии и автоматизации.",
    url: "https://lstkmk.ru/articles/korovnik-na-200-golov/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/korovnik-na-200-golov/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Коровник на 200 голов из ЛСТК: проект промышленной молочной фермы",
  description: "Строительство крупного коровника на 200 голов КРС с полной автоматизацией",
  author: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  publisher: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/articles/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />

          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
              Сельхозздания
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Коровник на 200 голов из ЛСТК
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>16 июня 2026</span>
              <span>•</span>
              <span>10 мин чтения</span>
            </div>
          </header>

          <img
            src="/knowledge/cow-farm-1.jpg"
            alt="Коровник из металлоконструкций — вид изнутри"
            className="w-full rounded-lg mb-10"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Коровник на 200 голов — это полноценная промышленная молочная ферма, требующая профессионального подхода к проектированию. Строительство из ЛСТК позволяет создать современный комплекс с высокой производительностью при оптимальных инвестициях.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Параметры коровника на 200 голов
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Площадь здания</td>
                    <td className="py-3 pr-4">2 607 м² (32,6×80 м)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Размеры (ширина × длина)</td>
                    <td className="py-3 pr-4">32,6×80 м (шаг 4,8 м)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Высота в коньке</td>
                    <td className="py-3 pr-4">4 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Доильный зал</td>
                    <td className="py-3 pr-4">Елочка или параллель на 12–16 мест</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Система навозоудаления</td>
                    <td className="py-3 pr-4">Скребковая или канальная</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость строительства
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена под ключ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Базовая (каркас + панели 150 мм)</td>
                    <td className="py-3 text-green-600 font-semibold">от 9 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стандарт + доильный зал 16 мест</td>
                    <td className="py-3 text-green-600 font-semibold">от 12 млн ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Премиум + автоматизация + роботы</td>
                    <td className="py-3 text-green-600 font-semibold">от 18 млн ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Похожие проекты
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Link href="/articles/korovnik-na-50-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 50 голов</h3>
                <p className="text-sm text-muted">Семейная ферма</p>
              </Link>
              <Link href="/articles/korovnik-na-100-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 100 голов</h3>
                <p className="text-sm text-muted">Коммерческая ферма</p>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border bg-slate-50 -mx-6 lg:-mx-10 px-6 lg:px-10 py-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Рассчитать стоимость коровника на 200 голов
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-white transition-colors"
              >
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
