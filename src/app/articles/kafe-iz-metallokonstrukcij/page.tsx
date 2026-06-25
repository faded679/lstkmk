import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Кафе из металлоконструкций: быстровозводимое здание под ключ | МАКСТИЛ",
  description:
    "Строительство кафе, ресторана, фастфуда из металлоконструкций и ЛСТК. Быстровозводимые здания общепита: сроки, проекты, цены 2026. Под ключ за 60–90 дней.",
  keywords: [
    "кафе из металлоконструкций",
    "быстровозводимое кафе под ключ",
    "строительство кафе ЛСТК",
    "здание ресторана из металла",
    "фастфуд из металлоконструкций цена",
    "кафе каркасное здание",
  ],
  openGraph: {
    title: "Кафе из металлоконструкций: строительство под ключ",
    description: "Быстровозводимые здания кафе из металлоконструкций. Сроки 60–90 дней, цены 2026.",
    url: "https://lstkmk.ru/articles/kafe-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/kafe-iz-metallokonstrukcij/" },
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
              Кафе из металлоконструкций: быстровозводимое здание под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Здание кафе из металлоконструкций строится за 60–90 дней и обходится на 25–35% дешевле кирпичного аналога. Технология позволяет реализовать любую архитектуру — от стеклянного павильона до классического ресторана с панорамными окнами. Стоимость — от 22 000 ₽/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Почему металлокаркас подходит для общепита</h2>
            <p className="text-muted leading-relaxed mb-6">
              Главная ценность металлокаркаса для кафе — свобода планировки. Пролёт без промежуточных колонн до 24 м позволяет разместить зал на 100–150 посадочных мест единым пространством. Кирпич или монолит такого же пролёта потребует балок большого сечения и увеличит стоимость перекрытий в 2–3 раза.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Второй плюс — скорость. Бизнес открывается раньше, срок окупаемости инвестиций сокращается. Каркас кафе 200–300 м² монтируется за 2–3 недели.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые проекты кафе из металлоконструкций</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Формат</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Посадочных мест</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Фастфуд / кофейня", "80–150 м²", "40–60", "от 2,2–4 млн ₽"],
                    ["Кафе среднего формата", "150–300 м²", "60–120", "от 4–8 млн ₽"],
                    ["Ресторан", "300–600 м²", "120–250", "от 8–18 млн ₽"],
                    ["Банкетный зал", "400–800 м²", "200–400", "от 10–22 млн ₽"],
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Особенности проектирования</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Вентиляция и вытяжка кухни</h3>
            <p className="text-muted leading-relaxed mb-4">
              Для кафе обязательна приточно-вытяжная вентиляция с рекуперацией тепла. Вытяжка над кухонным оборудованием — отдельная система с жироуловителями. Воздуховоды закладываются в межбалочное пространство металлокаркаса — это упрощает монтаж и не снижает высоту потолков в зале.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Остекление</h3>
            <p className="text-muted leading-relaxed mb-4">
              Металлокаркас позволяет делать панорамное остекление до 80% фасада. Рекомендуется двухкамерный стеклопакет с энергосберегающим покрытием (теплопотери — не более 1,1 Вт/м²·К). Большая площадь остекления требует усиленного отопления в зоне окон — нагревательные конвекторы под подоконниками.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Полы</h3>
            <p className="text-muted leading-relaxed mb-4">
              В зале — плитка, ламинат или паркет на бетонной стяжке. В кухне — нескользящая керамогранитная плитка с уклоном 1% к трапу. Под кухонным оборудованием — усиленная стяжка с армированием, выдерживающая до 500 кг/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Требования СанПиН для зданий общепита</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота потолков в производственных помещениях — не менее 3,0 м</li>
              <li>Зал и кухня — изолированы, отдельные входы для персонала и гостей</li>
              <li>Туалеты: минимум 1 на 50 посадочных мест, отдельно для мужчин и женщин</li>
              <li>Температура в зале: +16–+18 °С зимой, не выше +28 °С летом</li>
              <li>Уровень шума — не более 60 дБА в зале</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Фасадные решения</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлокаркас не накладывает ограничений на внешний вид. Популярные варианты: вентилируемый фасад из металлокассет (стиль «лофт»), штукатурный фасад с утеплением, комбинация остекления и панелей HPL. Навес над входом — обязателен, рекомендуется козырёк на металлическом кронштейне шириной 1,5–2,0 м.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Кафе из металлоконструкций — быстро, экономично и архитектурно гибко. Срок строительства «под ключ» — 60–90 дней против 6–12 месяцев для кирпичного здания. При правильном проектировании вентиляции, шумоизоляции и остекления гости не заметят разницы между металлокаркасом и монолитом.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим кафе или ресторан под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство зданий общепита из металлоконструкций. Белгородская область и ЦФО.</p>
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
