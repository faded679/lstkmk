import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Зернохранилище из ЛСТК: типы, проектирование, стоимость | МАКСТИЛ",
  description:
    "Зернохранилище из ЛСТК: напольные и силосные склады зерна, плоские полы, вентиляция, теплоизоляция. Проектирование с учётом нагрузок зерна, цены м² зернохранилищ в 2026.",
  keywords: [
    "зернохранилище из ЛСТК",
    "склад зерна",
    "напольное зернохранилище",
    "ангар для зерна",
    "хранилище зерна цена",
    "проект зернохранилища",
    "сельхозсклад",
  ],
  openGraph: {
    title: "Зернохранилище из ЛСТК: типы и проектирование",
    description:
      "Как построить зернохранилище: типы, нагрузки, вентиляция, стоимость.",
    url: "https://lstkmk.ru/articles/zernohranilishche-iz-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/zernohranilishche-iz-lstk/",
  },
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
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
              Строительство
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Зернохранилище из ЛСТК
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>18 июня 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Хранение зерна требует особого подхода: распорные нагрузки от насыпи, активная вентиляция, защита от грызунов и влаги. Разбираем, как спроектировать зернохранилище из ЛСТК, чтобы оно отработало 30 лет без капитальных переделок.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Типы зернохранилищ
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              По способу хранения зерно делят на три большие группы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Напольные склады</strong> — зерно насыпью на полу, высота 4–6 м. Универсальные, под любые культуры</li>
              <li><strong>Бункерные / силосные</strong> — вертикальные ёмкости 1000–5000 тонн. Высокая автоматизация</li>
              <li><strong>С плоскодонными ангарами</strong> — компромисс: ангар + металлические распорные ограждения внутри</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для большинства фермерских хозяйств с урожаем 1000–10 000 тонн оптимально напольное зернохранилище в ангаре из ЛСТК. Силосы экономически оправданы при объёмах от 20 000 тонн.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт нагрузки от зерна
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Зерно — сыпучий материал, давящий и на пол, и на стены. Удельный вес типовых культур:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Культура</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Плотность, т/м³</th>
                    <th className="text-left py-3 font-semibold text-foreground">Угол откоса</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Пшеница</td>
                    <td className="py-3 pr-4">0,75</td>
                    <td className="py-3">28°</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ячмень</td>
                    <td className="py-3 pr-4">0,67</td>
                    <td className="py-3">28°</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Кукуруза</td>
                    <td className="py-3 pr-4">0,75</td>
                    <td className="py-3">30°</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Подсолнечник</td>
                    <td className="py-3 pr-4">0,42</td>
                    <td className="py-3">31°</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Соя</td>
                    <td className="py-3 pr-4">0,78</td>
                    <td className="py-3">28°</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              При высоте насыпи 5 м давление на пол достигает 3,5–4 тс/м². Бетонные полы под зерно армируются по серии 1.020.1 и рассчитываются с запасом 1,3.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Распор на стены
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Зерно давит на стены ангара горизонтально, и эта нагрузка часто недооценивается. Без специальных мер обычный ангар «выпучивает» по нижней зоне через 1–2 сезона хранения.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Варианты решения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Подпорные стенки из ж/б высотой 2–3 м по периметру</li>
              <li>Усиленный профнастил с дополнительными прогонами</li>
              <li>Внутренние перегородки-распоры на расстоянии 6 м</li>
              <li>Засыпка с отступом от стен 1–1,5 м</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Активная вентиляция
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Главная угроза зерна — самонагрев и плесень. Поэтому в зернохранилищах закладывают систему активной вентиляции: каналы в полу с вентиляторами, продувающими насыпь снизу вверх.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Подпольные каналы шириной 300–500 мм с решётками</li>
              <li>Подача воздуха 100–200 м³/час на тонну зерна</li>
              <li>Термодатчики в насыпи для контроля</li>
              <li>Вытяжная вентиляция в коньке кровли</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Без активной вентиляции зерно безопасно хранится 1–2 месяца. С вентиляцией — целый сезон до следующего урожая.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Кровля и защита от конденсата
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Холодный однослойный профнастил образует конденсат при перепадах температур — капли падают на зерно и портят его. Решения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Антиконденсатное покрытие профнастила (войлок снизу)</li>
              <li>Кровельные сэндвич-панели 50–100 мм</li>
              <li>Естественная вентиляция подкровельного пространства</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит зернохранилище под ключ
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип хранилища</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Тоннаж</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Простой ангар без оборудования</td>
                    <td className="py-3 pr-4 font-medium">14 000 – 18 000</td>
                    <td className="py-3">0,5–0,8 т/м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">С активной вентиляцией</td>
                    <td className="py-3 pr-4 font-medium">22 000 – 28 000</td>
                    <td className="py-3">2,5–3,5 т/м²</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Зерноочистка + сушка + хранение</td>
                    <td className="py-3 pr-4 font-medium">35 000 – 50 000</td>
                    <td className="py-3">2,5–3,5 т/м²</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что важно учесть на этапе ТЗ
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Какие культуры хранятся и максимальный объём</li>
              <li>Высота насыпи и угол откоса конкретной культуры</li>
              <li>Сроки хранения (от сбора до отгрузки)</li>
              <li>Способ загрузки и выгрузки (нория, погрузчик, шнек)</li>
              <li>Расстояние до тока и сушилки</li>
              <li>Требования к огне- и грызуны-защите</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Зернохранилище — это не «ангар, куда сыплют зерно». Это инженерное сооружение с расчётными нагрузками, активной вентиляцией и защитой урожая от плесени и конденсата. ЛСТК отлично подходит для напольных хранилищ до 10 000 тонн — быстро, экономично и с возможностью масштабирования.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Спроектируем зернохранилище под ваш урожай
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит сельхозобъекты под ключ: от простых навесов до зернокомплексов с сушкой и очисткой. Расчёт под конкретные культуры и объёмы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="/#contacts"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
