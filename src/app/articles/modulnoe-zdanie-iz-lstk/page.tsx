import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Модульное здание из ЛСТК: быстровозводимые комплексы под ключ | МАКСТИЛ",
  description:
    "Модульные здания из ЛСТК: быстрое возведение жилых, административных и производственных комплексов из готовых модулей. Цены, размеры, сроки 2026.",
  keywords: [
    "модульное здание из ЛСТК",
    "модульное строительство ЛСТК цена",
    "быстровозводимое модульное здание",
    "модульный дом ЛСТК",
    "модульный офис под ключ",
    "здание из модулей металл",
  ],
  openGraph: {
    title: "Модульное здание из ЛСТК: комплексы под ключ",
    description: "Быстровозводимые модульные здания из ЛСТК. Жильё, офисы, производство. Цены 2026.",
    url: "https://lstkmk.ru/articles/modulnoe-zdanie-iz-lstk/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/modulnoe-zdanie-iz-lstk/" },
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
              Модульное здание из ЛСТК: быстровозводимые комплексы под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Модульное здание из ЛСТК — это комплекс из заводских модулей-блоков, которые доставляются на объект и собираются в единое здание за считанные дни. Метод применяется для жилых посёлков, вахтовых городков, медицинских пунктов, образовательных учреждений и офисных комплексов. Стоимость — от 20 000 ₽/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что такое модуль ЛСТК</h2>
            <p className="text-muted leading-relaxed mb-6">
              Строительный модуль — объёмная конструкция заводской сборки размером 3,0×6,0 м, 3,0×9,0 м или 3,6×12,0 м. Каркас — ЛСТК из оцинкованного термопрофиля, стены и перекрытия — сэндвич-панели с утеплителем. На заводе устанавливаются окна, двери, прокладывается электрика и сантехника. На объекте модули стыкуются в любой конфигурации.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типы модульных зданий</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип здания</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этажность</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Срок монтажа</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Вахтовый посёлок (50–200 чел.)", "1–2 этажа", "7–14 дней", "от 20 000 ₽/м²"],
                    ["Жилой дом", "1–3 этажа", "10–21 день", "от 22 000 ₽/м²"],
                    ["Офисный комплекс", "1–3 этажа", "7–14 дней", "от 20 000 ₽/м²"],
                    ["Медицинский пункт / ФАП", "1 этаж", "3–5 дней", "от 22 000 ₽/м²"],
                    ["Школа / детский сад", "1–2 этажа", "14–30 дней", "от 25 000 ₽/м²"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3 font-medium text-foreground">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Преимущества модульного строительства</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-blue-800 mb-2">Скорость</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Модули изготавливаются параллельно с подготовкой фундамента</li>
                  <li>• Монтаж на объекте — 3–14 дней</li>
                  <li>• В 3–5 раз быстрее традиционного строительства</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-green-800 mb-2">Мобильность</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Здание можно разобрать и перевезти</li>
                  <li>• Модули транспортируются автотранспортом</li>
                  <li>• Расширение — добавление новых модулей</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="font-semibold text-purple-800 mb-2">Качество</p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Заводская сборка под контролем ОТК</li>
                  <li>• Нет зависимости от погоды на строительстве</li>
                  <li>• Точность ±2 мм по всем размерам</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="font-semibold text-orange-800 mb-2">Экономия</p>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Меньший фундамент — нагрузки меньше</li>
                  <li>• Нет потерь на стройплощадке</li>
                  <li>• Быстрый ввод → ранние доходы</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив модуля ЛСТК</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Каркас</strong> — термопрофиль ЛСТК 0,8–1,2 мм, оцинкованный 275 г/м², гайковёртная сборка</li>
              <li><strong>Наружные стены</strong> — сэндвич-панели ПУ 100–150 мм или ЛСТК + вата 150 мм</li>
              <li><strong>Перекрытия</strong> — балки ЛСТК + OSB 18 мм + звукоизоляция 50 мм + финишное покрытие</li>
              <li><strong>Кровля</strong> — плоская (мембрана ТПО) или скатная (металлочерепица)</li>
              <li><strong>Окна</strong> — ПВХ двухкамерный стеклопакет, установка на заводе</li>
              <li><strong>Электрика</strong> — разводка в гофре внутри стен, щиток в каждом модуле</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Фундамент под модульное здание</h2>
            <p className="text-muted leading-relaxed mb-6">
              Лёгкий каркас ЛСТК позволяет применять малозаглублённые фундаменты. Для 1-этажного здания — буронабивные сваи диаметром 200 мм или ленточный фундамент высотой 300 мм. Для 2–3 этажей — свайный ростверк или плита толщиной 200–250 мм. Фундамент под модульный посёлок на 50 человек — 300–500 тыс. ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Модульное vs традиционное строительство</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Модульное ЛСТК</th>
                    <th className="text-left py-3 font-semibold text-foreground">Кирпич / монолит</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Срок строительства", "2–6 недель", "6–18 месяцев"],
                    ["Стоимость, ₽/м²", "от 20 000", "от 25 000"],
                    ["Мобильность", "Да (разборный)", "Нет"],
                    ["Этажность", "до 3 этажей", "без ограничений"],
                    ["Работа при морозе", "Да (завод)", "Ограничено"],
                    ["Кастомизация", "Умеренная", "Высокая"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4 text-green-700">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Модульное здание из ЛСТК — идеальный выбор для объектов с жёсткими сроками ввода, удалённых площадок с ограниченным подъездом техники, и задач, где нужна мобильность. Вахтовый посёлок на 100 мест разворачивается за 2 недели, медицинский пункт — за 3–5 дней. Стоимость сопоставима с традиционным строительством при несравнимо меньших сроках.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим модульное здание из ЛСТК под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство модульных зданий из ЛСТК для жилья, производства и социальных объектов.</p>
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
