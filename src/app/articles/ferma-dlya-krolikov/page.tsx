import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ферма для кроликов из металлоконструкций: строительство под ключ | МАКСТИЛ",
  description:
    "Строительство кролиководческих ферм из металлоконструкций и ЛСТК. Размеры, планировка, вентиляция, цены 2026. Промышленная кролиководческая ферма на 200–2000 самок.",
  keywords: [
    "ферма для кроликов металлоконструкции",
    "кролиководческая ферма под ключ",
    "кроликоферма из ЛСТК цена",
    "строительство кролиководческой фермы",
    "промышленная кролиководческая ферма",
    "здание для кроликов металл",
  ],
  openGraph: {
    title: "Ферма для кроликов из металлоконструкций",
    description: "Кролиководческие фермы из ЛСТК: размеры, вентиляция, цены под ключ.",
    url: "https://lstkmk.ru/articles/ferma-dlya-krolikov/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/ferma-dlya-krolikov/" },
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
              Ферма для кроликов из металлоконструкций: строительство под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Промышленная кролиководческая ферма из металлоконструкций строится за 45–60 дней и обходится от 3,5 млн ₽. Металлокаркас с утеплёнными сэндвич-панелями — оптимальный выбор: лёгкий монтаж, долговечность, простая дезинфекция. Правильный микроклимат и вентиляция определяют продуктивность стада.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Размеры и планировка кроликофермы</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Поголовье самок</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь здания</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["200 самок", "300–400 м²", "12×30 м", "от 3,5 млн ₽"],
                    ["500 самок", "600–800 м²", "18×42 м", "от 6 млн ₽"],
                    ["1000 самок", "1 200–1 500 м²", "18×72 м", "от 11 млн ₽"],
                    ["2000 самок", "2 400–3 000 м²", "2 здания 18×72 м", "от 20 млн ₽"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Стандартная планировка — два ряда клеток по длине здания с центральным проходом 1,2–1,5 м. При 4-ярусной клеточной батарее высота здания — 3,0–3,5 м.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Требования к микроклимату</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 font-semibold text-foreground">Норма</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Температура воздуха", "+14…+18 °С"],
                    ["Относительная влажность", "60–75%"],
                    ["Скорость воздуха", "0,2–0,4 м/с"],
                    ["CO₂", "не более 0,2%"],
                    ["Аммиак NH₃", "не более 10 мг/м³"],
                    ["Освещённость", "50–100 лк, 16 ч/сутки"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Вентиляция кроликофермы</h2>
            <p className="text-muted leading-relaxed mb-4">
              Кролики чувствительны к аммиаку и сырости — плохая вентиляция ведёт к респираторным заболеваниям и падежу. Кратность воздухообмена — 3–5 раз/час зимой, 6–10 раз/час летом.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Схема вентиляции: приточные клапаны (регулируемые) в нижней зоне стен, вытяжные вентиляторы под коньком кровли. Вентиляторы с плавным регулированием мощности — для летнего режима интенсивного проветривания. Зимой обязателен подогрев приточного воздуха до +5…+8 °С.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив здания</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Каркас и ограждение</h3>
            <p className="text-muted leading-relaxed mb-4">
              Оптимальный вариант — каркас из ЛСТК или горячекатаного профиля, стены и кровля — сэндвич-панели 100 мм (минвата). Сэндвич-панели легко моются и дезинфицируются. Полы — бетонная стяжка с уклоном к навозным канавам, покрытие — плитка или полимочевина.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Навозоудаление</h3>
            <p className="text-muted leading-relaxed mb-4">
              Под клеточными батареями — навозные ленты или скребковый транспортёр, удаляющий навоз в навозохранилище за пределами здания. Ширина навозного лотка — 600–800 мм, уклон 2–3%.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Кролиководческая ферма на 500 самок площадью 700 м² из металлоконструкций строится за 45–60 дней и обходится в 5–7 млн ₽. Срок окупаемости при продаже мяса — 3–5 лет, меха и субпродуктов — ещё быстрее. Главное — правильная вентиляция и соблюдение температурного режима.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим кролиководческую ферму под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — строительство сельхоззданий из металлоконструкций в Белгородской области и регионах ЦФО.</p>
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
