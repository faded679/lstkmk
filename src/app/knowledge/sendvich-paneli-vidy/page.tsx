import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сэндвич-панели: виды, характеристики, цены | МАКСТИЛ",
  description: "Стеновые и кровельные сэндвич-панели. Толщина, наполнители, замки. Как выбрать и сколько стоит.",
  keywords: ["сэндвич-панели виды", "наполнитель сэндвич-панелей", "сэндвич-панели цена"],
  openGraph: {
    title: "Сэндвич-панели: виды и характеристики",
    description: "Всё о сэндвич-панелях для строительства.",
    url: "https://lstkmk.ru/knowledge/sendvich-paneli-vidy/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/sendvich-paneli-vidy/",
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
            Сэндвич-панели: виды и характеристики
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Сэндвич-панели — основа современных быстровозводимых зданий. Выбираем по назначению, толщине и наполнителю.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">По назначению</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-muted">
                <li><strong>Стеновые</strong> — внешние и внутренние стены. Видимая фактура металла.</li>
                <li><strong>Кровельные</strong> — покрытие крыши. Усиленный замок, уклон минимум 5°.</li>
                <li><strong>Холодильные</strong> — с утеплителем ПИР для морозильных камер.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">По наполнителю</h2>
            <table className="w-full text-left border-collapse mb-6">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 font-semibold">Наполнитель</th>
                  <th className="py-3 font-semibold">Теплоизоляция</th>
                  <th className="py-3 font-semibold">Цена</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-slate-100">
                  <td className="py-3">Минеральная вата</td>
                  <td className="py-3">Отличная</td>
                  <td className="py-3">Средняя</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3">Пенополистирол (ППС)</td>
                  <td className="py-3">Хорошая</td>
                  <td className="py-3">Низкая</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3">ПИР (полиизоцианурат)</td>
                  <td className="py-3">Отличная</td>
                  <td className="py-3">Высокая</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Толщина панелей</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>80-100 мм</strong> — холодные склады, летние помещения</li>
              <li><strong>120-150 мм</strong> — производства, цеха, офисы</li>
              <li><strong>200 мм</strong> — морозильные камеры, климат-контроль</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Цены 2025</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-muted">
                <li>Стеновая 100 мм (минвата): <strong>от 1 800 ₽/м²</strong></li>
                <li>Кровельная 150 мм (минвата): <strong>от 2 200 ₽/м²</strong></li>
                <li>Монтаж: <strong>от 800 ₽/м²</strong></li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Поможем выбрать оптимальные панели под ваш проект. Звоните: <a href="tel:+79606322061" className="text-accent-blue font-medium">+7 (960) 632-20-61</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
