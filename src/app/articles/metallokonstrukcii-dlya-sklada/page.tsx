import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Металлоконструкции для склада: как рассчитать и заказать | МАКСТИЛ",
  description:
    "Как рассчитать металлоконструкции для склада: нагрузки, шаг рам, высота. Что входит в комплект КМД, как читать чертежи и на что смотреть при приёмке. Руководство 2026.",
  keywords: [
    "металлоконструкции для склада",
    "заказать металлоконструкции для склада",
    "расчёт металлоконструкций склада",
    "км кмд склад",
    "металлокаркас для склада цена",
    "каркас склада под ключ",
  ],
  openGraph: {
    title: "Металлоконструкции для склада: расчёт и заказ",
    description: "Полное руководство по заказу металлоконструкций для склада: от расчёта до приёмки.",
    url: "https://lstkmk.ru/articles/metallokonstrukcii-dlya-sklada/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/metallokonstrukcii-dlya-sklada/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Советы заказчику</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Металлоконструкции для склада: как рассчитать и заказать
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>10 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Заказ металлоконструкций для склада — не покупка товара с полки. Это индивидуальный проект, где ошибка на этапе задания оборачивается либо переплатой, либо непригодным зданием. Объясняем, как сформулировать задание и что проверить при получении.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что нужно знать до обращения к производителю</h2>
            <p className="text-muted leading-relaxed mb-4">Для расчёта каркаса склада подрядчику необходимо предоставить:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Размеры</strong> — ширина, длина, высота стен (от пола до карниза)</li>
              <li><strong>Назначение</strong> — склад, производство, СТО — влияет на нагрузки</li>
              <li><strong>Нагрузки</strong> — навесное оборудование (кран-балка), стеллажи, снеговой район</li>
              <li><strong>Ограждение</strong> — профнастил или сэндвич, толщина</li>
              <li><strong>Количество ворот</strong> — тип, размеры</li>
              <li><strong>Регион строительства</strong> — снег, ветер по СП 20/СП 20.13330</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что входит в комплект металлоконструкций</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Колонны</strong> — несущие вертикальные элементы, сечение зависит от высоты и нагрузки</li>
              <li><strong>Стропильные фермы или рамы</strong> — перекрывают пролёт, несут кровлю</li>
              <li><strong>Прогоны</strong> — горизонтальные элементы кровли между фермами</li>
              <li><strong>Ветровые связи</strong> — жёсткость здания в продольном направлении</li>
              <li><strong>Фахверки</strong> — торцевые рамы, несущие стеновое ограждение</li>
              <li><strong>Закладные детали</strong> — для крепления к фундаменту</li>
              <li><strong>Болты и метизы</strong> — крепёж всех соединений</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">КМ и КМД: в чём разница</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>КМ (конструкции металлические)</strong> — принципиальный расчётный проект. Содержит схемы, сечения, нагрузки. Разрабатывается проектной организацией.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>КМД (конструкции металлические деталировочные)</strong> — заводские чертежи каждого элемента. По ним производится металл. Важно: КМД должен соответствовать КМ.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">На что обратить внимание при заказе</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Толщина металла профилей — не менее 2 мм для несущих элементов</li>
              <li>Марка стали — С245 или С255 для основных конструкций</li>
              <li>Антикоррозийное покрытие — грунт минимум 2 слоя, 80 мкм</li>
              <li>Комплект документации — КМД + спецификация + сертификаты на металл</li>
              <li>Монтажные метки — маркировка каждого элемента по схеме сборки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Приёмка металлоконструкций на объекте</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Сверьте количество элементов со спецификацией</li>
              <li>Проверьте маркировку — каждый элемент должен иметь метку</li>
              <li>Осмотрите качество сварных швов — без непроваров, кратеров, трещин</li>
              <li>Проверьте отклонения геометрии — допуск по длине ±3 мм</li>
              <li>Состояние грунтовки — без отслоений, пузырей, мест без покрытия</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Цена металлоконструкций для склада</h2>
            <p className="text-muted leading-relaxed mb-4">
              Если склад проектируется в Белгородской области, стоит ориентироваться на местного производителя. Актуальные цены на металлоконструкции в регионе — в разделе <Link href="/metallokonstrukcii-belgorod-cena/" className="text-accent-blue hover:underline">металлоконструкции Белгород цена</Link>.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Позиция</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас без ограждения (только металл)", "1 800–3 500 ₽/м²"],
                    ["Ограждение профнастилом", "+700–1 200 ₽/м²"],
                    ["Ограждение сэндвич-панелями 80 мм", "+1 500–2 500 ₽/м²"],
                    ["Монтаж каркаса", "+600–1 200 ₽/м²"],
                    ["Проектирование КМ+КМД", "50–150 тыс ₽"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Правильный заказ металлоконструкций начинается с чёткого технического задания. Не соглашайтесь на расчёт «по фото» или «как у соседа» — каждое здание индивидуально. Требуйте КМД, сертификаты на металл и гарантию на конструкцию.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Рассчитаем и изготовим каркас склада</h3>
            <p className="text-muted mb-6">МАКСТИЛ — полный цикл: проект, производство, доставка, монтаж. Работаем с проектной документацией КМ и КМД.</p>
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
