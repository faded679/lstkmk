import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Склад для опасных грузов из металлоконструкций: требования, цены | МАКСТИЛ",
  description:
    "Строительство складов для хранения опасных грузов (ЛВЖ, ГЖ, химикаты) из металлоконструкций. Требования СП, взрывозащита, вентиляция, стоимость под ключ 2026.",
  keywords: [
    "склад для опасных грузов",
    "склад хранения ЛВЖ",
    "склад горюче-смазочных материалов",
    "взрывопожароопасный склад металлоконструкции",
    "склад химикатов под ключ",
    "пожаробезопасный склад строительство",
  ],
  openGraph: {
    title: "Склад для опасных грузов из металлоконструкций",
    description: "Строительство складов для ЛВЖ, ГСМ и химикатов. Взрывозащита, вентиляция, нормы СП.",
    url: "https://lstkmk.ru/articles/sklad-dlya-opasnykh-gruzov/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/sklad-dlya-opasnykh-gruzov/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Склады</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Склад для опасных грузов из металлоконструкций: требования и цены
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Склад для опасных грузов — объект повышенной категории пожарной опасности. Строительство из металлоконструкций возможно, но требует строгого соблюдения норм: взрывозащищённое электрооборудование, принудительная вентиляция, поддоны для сбора разлитий, противопожарные отсеки. Стоимость — от 35 000 ₽/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Классификация опасных грузов и категории склада</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип груза</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Категория по СП 12</th>
                    <th className="text-left py-3 font-semibold text-foreground">Класс пожарной опасности</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ЛВЖ (бензин, ацетон, спирт)", "А", "Ф5.2"],
                    ["ГЖ (масла, дизтопливо)", "Б", "Ф5.2"],
                    ["Кислоты, щёлочи", "В1–В4", "Ф5.2"],
                    ["Удобрения (аммиачная селитра)", "А или Б", "Ф5.1"],
                    ["Сжатые газы (баллоны)", "А", "Ф5.2"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4 font-medium text-foreground">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Обязательные требования к конструкции</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Несущий каркас</h3>
            <p className="text-muted leading-relaxed mb-4">
              Металлоконструкции для склада категорий А и Б должны иметь предел огнестойкости не менее R45 (для одноэтажных) или R90 (для многоэтажных). Это достигается огнезащитной обработкой: вспучивающаяся краска или напыление на основе вермикулита.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Полы</h3>
            <p className="text-muted leading-relaxed mb-4">
              Полы — бетонные с антистатическим покрытием, уклон 1–2% к приямкам. По периметру — бортики высотой не менее 150 мм для удержания разлитых жидкостей. Объём поддона — не менее объёма наибольшей ёмкости + 10%.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Вентиляция</h3>
            <p className="text-muted leading-relaxed mb-4">
              Принудительная вентиляция — обязательна. Кратность воздухообмена для категории А — не менее 8 раз/час, для категории Б — не менее 6 раз/час. Вентиляторы — взрывозащищённого исполнения (маркировка Ex). Приточный воздух подаётся снизу, вытяжка — из верхней зоны.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Электрооборудование</h3>
            <p className="text-muted leading-relaxed mb-4">
              Всё электрооборудование — в исполнении не ниже Ex d IIB или Ex e II. Прокладка кабелей — в стальных трубах. Светильники — взрывозащищённые, степень защиты IP65 минимум. Заземление и молниезащита — обязательны.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Противопожарные мероприятия</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>АПС (автоматическая пожарная сигнализация) — обязательна при площади &gt;300 м²</li>
              <li>АУПТ (автоматическое пожаротушение) — при категории А от 200 м², Б от 400 м²</li>
              <li>Пожарные отсеки площадью не более 5 200 м² (категория А) или 7 800 м² (Б)</li>
              <li>Противопожарные стены или спринклерные завесы между отсеками</li>
              <li>Эвакуационные выходы — не менее двух, расстояние между ними по периметру ≤ 25 м</li>
              <li>Первичные средства пожаротушения — огнетушители ОП-10 из расчёта 1 на 150 м²</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Объект</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Склад ГСМ (дизтопливо, масла)", "200–500 м²", "от 7–18 млн ₽"],
                    ["Склад ЛВЖ (бензин, растворители)", "100–300 м²", "от 5–12 млн ₽"],
                    ["Склад агрохимии", "300–1000 м²", "от 10–35 млн ₽"],
                    ["Склад сжатых газов (баллоны)", "50–150 м²", "от 3–7 млн ₽"],
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Документация и разрешения</h2>
            <p className="text-muted leading-relaxed mb-4">
              Для складов категорий А и Б обязательна экспертиза проекта в государственном органе. Потребуются:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Разрешение на строительство (раздел 7 ГрК РФ)</li>
              <li>Положительное заключение государственной экспертизы</li>
              <li>Декларация пожарной безопасности (зарегистрировать в МЧС)</li>
              <li>Лицензия Ростехнадзора (если объект относится к ОПО)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлокаркасный склад для опасных грузов строится быстрее кирпичного, но требует тщательного проектирования и применения взрывозащищённого оборудования. Экономия на этапе строительства неприемлема — нарушения выявляются при проверке МЧС и Ростехнадзора и влекут приостановку деятельности.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим склад для опасных грузов под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство специализированных складов с выполнением всех требований пожарной безопасности.</p>
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
