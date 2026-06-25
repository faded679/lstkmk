import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар под автомойку из металлоконструкций: проект, цена | МАКСТИЛ",
  description:
    "Строительство ангара под автомойку из металлоконструкций. Размеры на 2–6 постов, требования к вентиляции, отоплению и канализации. Цены под ключ 2026.",
  keywords: [
    "ангар под автомойку",
    "автомойка из металлоконструкций",
    "здание автомойки под ключ",
    "автомойка металлокаркас цена",
    "строительство автомойки ангар",
    "автомойка ЛСТК проект",
  ],
  openGraph: {
    title: "Ангар под автомойку из металлоконструкций",
    description: "Строительство автомоек из металлоконструкций. Размеры, вентиляция, цены под ключ.",
    url: "https://lstkmk.ru/articles/angar-pod-avtomojku/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/angar-pod-avtomojku/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Объекты</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Ангар под автомойку из металлоконструкций: проект и цена
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлокаркасный ангар — наиболее распространённый формат здания для автомойки. Строится за 45–75 дней, стоимость — от 2,5 млн ₽ на 2 поста. Главная особенность: здание работает в условиях постоянной влажности, поэтому к вентиляции, отоплению и герметичности предъявляются повышенные требования.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры ангара под автомойку</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Количество постов</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размер здания</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Высота</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2 поста (легковые)", "12×12 м", "4,5 м", "от 2,5 млн ₽"],
                    ["3 поста", "18×12 м", "4,5 м", "от 3,5 млн ₽"],
                    ["4 поста", "24×12 м", "5,0 м", "от 5 млн ₽"],
                    ["6 постов", "36×12 м", "5,0 м", "от 7 млн ₽"],
                    ["2 поста грузовых", "18×15 м", "6,0 м", "от 4,5 млн ₽"],
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
            <p className="text-muted leading-relaxed mb-6">
              Ширина поста на легковой автомобиль — не менее 4,0 м, длина — не менее 7,0 м. Для SUV и минивэнов — 4,5×7,5 м. Между постами — разделительная стена или зазор минимум 0,8 м для оборудования.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Ключевые требования к зданию автомойки</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Вентиляция</h3>
            <p className="text-muted leading-relaxed mb-4">
              Автомойка — объект с постоянным испарением воды. Кратность воздухообмена по нормам — не менее 10 раз/час. Вентиляция приточно-вытяжная с подогревом приточного воздуха (калорифер). Рекуператор тепла на вытяжке — окупается за 1–2 года отопительного сезона. Воздуховоды — нержавеющая сталь или ПВХ (устойчивы к влаге и автохимии).
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Отопление</h3>
            <p className="text-muted leading-relaxed mb-4">
              Температура воздуха в мойке — не ниже +5 °С (по нормам СанПиН — не менее +10 °С на рабочих местах). Варианты:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Газовые тепловентиляторы — быстро прогревают объём, удобно управлять мощностью</li>
              <li>Водяное отопление с радиаторами — равномерный прогрев, совместимо с котлом на газе или пеллетах</li>
              <li>Тёплый пол в зоне ожидания — комфорт клиентов</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Полы и канализация</h3>
            <p className="text-muted leading-relaxed mb-4">
              Полы — бетонная стяжка марки B25, уклон 1,5–2% к точечным трапам. Покрытие — кислотоупорная плитка или наливной полимер. Площадка у въезда — бетон с антиобледенительным кабелем. Локальные очистные сооружения (ЛОС) — обязательны по закону об охране водных объектов: мойка производственных сточных вод в канализацию без очистки запрещена.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Ограждающие конструкции</h3>
            <p className="text-muted leading-relaxed mb-4">
              Стены — сэндвич-панели 120 мм (минвата) или газобетон с облицовкой плиткой. Важно: швы между панелями герметизировать водостойким силиконом — автохимия разрушает обычный герметик. Секционные ворота — утеплённые, с электроприводом, оснащены тепловой завесой.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Документация для открытия автомойки</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Разрешение на строительство (или уведомление — зависит от площади)</li>
              <li>Проект ЛОС с согласованием в Росприроднадзоре</li>
              <li>Санитарно-эпидемиологическое заключение Роспотребнадзора</li>
              <li>Разрешение на ввод в эксплуатацию</li>
              <li>Договор на вывоз шламов и отработанного масла</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар под автомойку из металлоконструкций на 3 поста строится за 60–75 дней и обходится в 3,5–5 млн ₽ с оборудованием под ключ. Срок окупаемости при загрузке 50–60 автомобилей в день — 3–5 лет. Экономить на вентиляции и ЛОС нельзя — штрафы Росприроднадзора могут превысить стоимость экономии.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим ангар под автомойку под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство зданий автомоек из металлоконструкций. Белгородская область и ЦФО.</p>
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
