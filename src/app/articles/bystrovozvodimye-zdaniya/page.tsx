import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Быстровозводимые здания: что это и как строятся | МАКСТИЛ",
  description:
    "Что такое быстровозводимые здания из металлоконструкций: технологии ЛСТК, арочные ангары, модульные конструкции. Сроки, цены, плюсы и минусы. Полный обзор 2026.",
  keywords: [
    "быстровозводимые здания",
    "бвз что это",
    "быстровозводимые здания из металлоконструкций",
    "быстровозводимый ангар",
    "быстрое строительство склада",
    "металлокаркасное здание",
  ],
  openGraph: {
    title: "Быстровозводимые здания: технологии и цены",
    description: "Полный обзор технологий быстровозводимых зданий: ЛСТК, арочные ангары, модули.",
    url: "https://lstkmk.ru/articles/bystrovozvodimye-zdaniya/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/bystrovozvodimye-zdaniya/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Технологии</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Быстровозводимые здания: что это и как строятся
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Быстровозводимые здания (БВЗ) — постройки, основная часть элементов которых изготавливается на заводе и монтируется на площадке за минимальное время. Срок строительства — от 2 до 8 недель против 6–18 месяцев при традиционных технологиях.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Основные технологии БВЗ</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">1. ЛСТК — лёгкие стальные тонкостенные конструкции</h3>
            <p className="text-muted leading-relaxed mb-4">
              Каркас из оцинкованных гнутых профилей. Самая распространённая технология в России для зданий пролётом до 36 м и высотой до 12 м. Вес конструкций в 5–8 раз меньше бетона.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted mb-6">
              <li>Пролёт: до 36 м без промежуточных опор</li>
              <li>Высота: 3–12 м</li>
              <li>Срок монтажа каркаса 800 м²: 7–14 дней</li>
              <li>Цена каркаса: 1 500–3 500 ₽/м²</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">2. Арочные ангары из гофрированного листа</h3>
            <p className="text-muted leading-relaxed mb-4">
              Бескаркасные здания из оцинкованного профиля. Арка — одновременно и несущая конструкция, и ограждение. Подходят для склада, стоянки техники, хранения зерна.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted mb-6">
              <li>Ширина: 6–30 м</li>
              <li>Длина: любая (секционно)</li>
              <li>Монтаж 500 м²: 3–5 дней бригадой 4 человека</li>
              <li>Цена: 2 500–4 500 ₽/м²</li>
              <li>Минус: ограниченная высота боковых стен (1,5–2 м)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">3. Модульные здания (контейнерного типа)</h3>
            <p className="text-muted leading-relaxed mb-4">
              Готовые объёмные блоки завода → доставка на площадку → соединение. Для бытовок, временных офисов, небольших производств.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted mb-6">
              <li>Монтаж: 1–3 дня</li>
              <li>Цена: 18 000–40 000 ₽/м²</li>
              <li>Минус: дорого на большой площади</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сравнение технологий БВЗ</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Критерий</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">ЛСТК</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Арочный</th>
                    <th className="text-left py-3 font-semibold text-foreground">Модуль</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Скорость", "★★★★", "★★★★★", "★★★★★"],
                    ["Цена", "★★★★★", "★★★★", "★★"],
                    ["Универсальность", "★★★★★", "★★★", "★★"],
                    ["Пролёт", "до 36 м", "до 30 м", "до 12 м"],
                    ["Срок службы", "50 лет", "30–40 лет", "25–30 лет"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{a}</td>
                      <td className="py-3 pr-4">{b}</td>
                      <td className="py-3">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Почему БВЗ быстрее традиционного строительства</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Все элементы изготавливаются на заводе одновременно с подготовкой фундамента</li>
              <li>Монтаж не требует «мокрых» процессов и времени на высыхание</li>
              <li>Бригада из 4–6 человек монтирует 500 м² каркаса за 7–10 дней</li>
              <li>Можно строить круглый год — нет зависимости от температуры</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Для большинства задач бизнеса — склада, производства, сельхозобъекта — ЛСТК является оптимальным выбором среди БВЗ: лучшее соотношение цены, пролётов, долговечности и возможности утепления. Срок строительства под ключ — 35–60 дней.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим быстровозводимое здание под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство ЛСТК и монтаж в Белгороде. Собственный завод, полный цикл.</p>
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
