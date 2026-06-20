import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Снеговая нагрузка на кровлю ангара: расчёт по СП 20.13330 | МАКСТИЛ",
  description:
    "Как рассчитать снеговую нагрузку на кровлю ангара по СП 20.13330. Карты снеговых районов России, формулы, примеры расчёта. Почему недооценка снега приводит к обрушениям.",
  keywords: [
    "снеговая нагрузка на кровлю",
    "расчёт снеговой нагрузки",
    "снеговые районы",
    "СП 20.13330",
    "снеговая нагрузка ангара",
    "снеговая нагрузка кровли формула",
    "снеговой район расчёт",
  ],
  openGraph: {
    title: "Снеговая нагрузка на кровлю ангара: расчёт",
    description:
      "Расчёт снеговой нагрузки по СП 20.13330: карты районов, формулы, примеры.",
    url: "https://lstkmk.ru/articles/snegovaya-nagruzka-na-krovlyu-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/snegovaya-nagruzka-na-krovlyu-angara/",
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
              Технологии
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Снеговая нагрузка на кровлю ангара
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>17 июня 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Снеговая нагрузка — главная статическая нагрузка для большинства ангаров в России. Неправильный расчёт приводит к самой частой и трагичной аварии — обрушению кровли. Разбираем, как считать снег по СП 20.13330 и на что обратить внимание заказчику.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Зачем считать снеговую нагрузку
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Снег на кровле — постоянная сезонная нагрузка, которая по интенсивности может в разы превышать вес самой конструкции. Для V снегового района вес снега на крыше 1000 м² достигает 320 тонн — это сравнимо с массой полностью загруженного грузового состава.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Большинство аварий ангаров в России происходят именно из-за снеговой перегрузки: либо изначально недооценили район, либо не учли «снеговые мешки» в местах перепадов высот.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Снеговые районы России
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Территория России разделена на 8 снеговых районов. Расчётное значение веса снегового покрова на 1 м² горизонтальной поверхности (Sg):
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Район</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Sg, кг/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Примеры регионов</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">I</td>
                    <td className="py-3 pr-4 font-medium">80</td>
                    <td className="py-3">Юг России, Кавказ, Крым</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">II</td>
                    <td className="py-3 pr-4 font-medium">120</td>
                    <td className="py-3">Краснодар, Ростов, Белгород</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">III</td>
                    <td className="py-3 pr-4 font-medium">180</td>
                    <td className="py-3">Москва, Воронеж, Курск</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">IV</td>
                    <td className="py-3 pr-4 font-medium">240</td>
                    <td className="py-3">Питер, Казань, Нижний Новгород</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">V</td>
                    <td className="py-3 pr-4 font-medium">320</td>
                    <td className="py-3">Урал, Пермь, Сыктывкар</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">VI</td>
                    <td className="py-3 pr-4 font-medium">400</td>
                    <td className="py-3">Зап. Сибирь, Тюмень, ХМАО</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">VII</td>
                    <td className="py-3 pr-4 font-medium">480</td>
                    <td className="py-3">Камчатка, Сахалин</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">VIII</td>
                    <td className="py-3 pr-4 font-medium">560</td>
                    <td className="py-3">Отдельные районы Камчатки</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Точное значение для конкретного населённого пункта смотрят по карте СП 20.13330.2016. На переходе между районами всегда берут больший.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Формула расчёта
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Расчётное значение снеговой нагрузки на покрытие (S):
            </p>
            <p className="text-muted leading-relaxed mb-6 font-mono text-center bg-slate-50 rounded-lg py-4 px-4">
              S = Sg × μ × ce × ct
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Sg</strong> — вес снегового покрова в районе, кг/м²</li>
              <li><strong>μ</strong> — коэффициент перехода от покрова земли к покрытию (зависит от уклона кровли)</li>
              <li><strong>ce</strong> — коэффициент сноса снега ветром (0,7–1,0)</li>
              <li><strong>ct</strong> — термический коэффициент (1,0 для холодных кровель)</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              При уклоне кровли до 30° μ = 1,0; при 60° и выше — μ = 0; промежуточные значения по линейной интерполяции. Поэтому крутая кровля требует меньшей несущей способности — но дороже в монтаже.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пример расчёта
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ангар в Воронеже (III район, Sg = 180 кг/м²), кровля двускатная с уклоном 10° (μ = 1,0), открытый участок (ce = 0,85), холодная кровля (ct = 1,0):
            </p>
            <p className="text-muted leading-relaxed mb-6 font-mono text-center bg-slate-50 rounded-lg py-4 px-4">
              S = 180 × 1,0 × 0,85 × 1,0 = 153 кг/м²
            </p>
            <p className="text-muted leading-relaxed mb-6">
              На кровлю 1000 м² приходится 153 тонны снега. Эту нагрузку должны выдержать прогоны, фермы, колонны и фундамент.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Снеговые мешки — главная опасность
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              На стыках высот, у парапетов, фонарей и вентшахт ветер наметает в 2–4 раза больше снега, чем на ровных участках. Эти зоны называют «снеговыми мешками». Если их не учесть в расчёте — обрушение происходит локально в этих местах.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Особенно опасны примыкания нового ангара к существующему более высокому зданию. В такой схеме нагрузка на полосе шириной 2–3 м у стены может достигать 800–1200 кг/м².
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что должен сделать заказчик
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Указать в ТЗ точный адрес и снеговой район</li>
              <li>Запросить расчёт снеговой нагрузки в составе проекта КМ</li>
              <li>Проверить, что в расчёте учтены снеговые мешки</li>
              <li>Не допускать «упрощения» расчёта или взятия меньшего района</li>
              <li>Зимой обеспечивать своевременную очистку кровли</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Очистка кровли обязательна, если снег превысил расчётное значение. Особенно после оттепелей: мокрый снег весит в 2–3 раза больше сухого.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Снеговая нагрузка — это не «лишний запас», а реальная инженерная задача, от решения которой зависит жизнеспособность здания. Не позволяйте подрядчикам экономить на металле каркаса за счёт занижения снегового района — стоимость переделки кровли после обрушения превышает стоимость всего ангара в 1,5–2 раза.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Рассчитаем ангар под ваш регион
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ проектирует ангары с расчётом по фактическим снеговым нагрузкам региона. Показываем все расчёты в составе проекта КМ — без чёрных ящиков.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость проекта
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
