import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Свинарник из ЛСТК: проектирование и строительство | МАКСТИЛ",
  description:
    "Свинарники из лёгких металлоконструкций ЛСТК: вентиляция, навозоудаление, утепление полов, зонирование. Типовые размеры, цены и сроки строительства под ключ 2026.",
  keywords: [
    "свинарник из металлоконструкций",
    "свинарник лстк",
    "строительство свинарника",
    "свинарник под ключ цена",
    "свинарник проект",
    "металлический свинарник",
  ],
  openGraph: {
    title: "Свинарник из ЛСТК: проект и строительство под ключ",
    description: "Строительство свинарников из металлоконструкций ЛСТК. Цены, размеры, требования 2026.",
    url: "https://lstkmk.ru/articles/svinarnik-iz-lstk/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/svinarnik-iz-lstk/" },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Сельхозздания</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Свинарник из ЛСТК: проектирование и строительство
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлокаркасные свинарники из ЛСТК — современная альтернатива кирпичу и дереву. Быстрый монтаж, долговечность, точная геометрия под технологическое оборудование и простота санитарной обработки делают эту технологию востребованной в промышленном свиноводстве.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры свинарников</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Поголовье</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Небольшая ферма", "12×48 м", "200–400 голов"],
                    ["Средний свинарник", "18×72 м", "800–1200 голов"],
                    ["Промышленный комплекс", "18×120 м", "2000–3000 голов"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Ключевые требования к зданию</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Утепление</strong> — сэндвич-панели 100–150 мм. Оптимальная температура в свинарнике: +18...+22°C для откорма, +25...+28°C для поросят</li>
              <li><strong>Высота</strong> — 2,4–3,0 м в свету (достаточно для большинства систем содержания)</li>
              <li><strong>Пол</strong> — бетонная плита с уклоном 2–3% к навозосборникам, щелевые секции</li>
              <li><strong>Вентиляция</strong> — обязательная приточно-вытяжная с автоматикой. Норма: 30–60 м³/ч на одну свинью</li>
              <li><strong>Освещение</strong> — 50–100 лк рабочая зона, программируемый режим</li>
              <li><strong>Коррозиестойкость</strong> — среда в свинарнике агрессивная (аммиак), все элементы с усиленной антикоррозийной защитой</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Навозоудаление: выбор системы</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Самотёчная</strong> — щелевой пол + каналы + лагуна. Простейший вариант для небольших ферм</li>
              <li><strong>Скребковый транспортёр</strong> — механическая уборка. Надёжно, не зависит от напора воды</li>
              <li><strong>Гидросмыв</strong> — водопроводная сеть для промывки. Требует большого расхода воды</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Зонирование свинарника</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Секции откорма — основная площадь</li>
              <li>Маточник — для супоросных и подсосных маток</li>
              <li>Поросятник — температурный режим выше на 3–5°C</li>
              <li>Карантинное отделение — изоляция новых животных</li>
              <li>Санпропускник на входе — обязательно</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства свинарника</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Объект</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость здания</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Свинарник 12×48", "576 м²", "3,5–5 млн ₽"],
                    ["Свинарник 18×72", "1296 м²", "7–11 млн ₽"],
                    ["Свинарник 18×120", "2160 м²", "11–18 млн ₽"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 font-medium text-foreground">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              В стоимость здания входит: каркас ЛСТК, сэндвич-панели, кровля, ворота, двери. Система вентиляции, пол с канализацией и технологическое оборудование — дополнительно.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Свинарник из ЛСТК строится в 3–4 раза быстрее кирпичного, не требует тяжёлого фундамента и легко расширяется. Главные требования — правильная вентиляция, агрессивностойкое покрытие и грамотно спроектированная система навозоудаления.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим свинарник под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — опыт строительства сельхозобъектов в Белгородской области. Проект с учётом ветеринарных и технологических требований.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Получить консультацию</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
