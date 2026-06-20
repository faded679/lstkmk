import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Гараж из металлоконструкций: проект, размеры, стоимость | МАКСТИЛ",
  description:
    "Гараж из металлоконструкций: на 1, 2, 4 машины и для грузовиков. Размеры, типовые проекты, материалы, утепление, цены под ключ в 2026 году.",
  keywords: [
    "гараж из металлоконструкций",
    "гараж на 2 машины",
    "металлический гараж под ключ",
    "гараж для грузовика",
    "гараж лстк цена",
    "сколько стоит гараж",
    "проект гаража",
  ],
  openGraph: {
    title: "Гараж из металлоконструкций под ключ",
    description:
      "Проекты гаражей: размеры, материалы, утепление, цены 2026.",
    url: "https://lstkmk.ru/articles/garazh-iz-metallokonstrukcij/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/garazh-iz-metallokonstrukcij/",
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
              Объекты
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Гараж из металлоконструкций
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>20 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Гараж из металлоконструкций — оптимальное решение для частных владельцев, автосервисов и автопарков. В 2–3 раза дешевле кирпичного, в 5 раз быстрее по срокам и не требует тяжёлого фундамента. Разбираем размеры, типы и стоимость.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Размеры гаража: от 1 до 20 машин
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Назначение</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размеры</th>
                    <th className="text-left py-3 font-semibold text-foreground">Площадь</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">1 легковой</td>
                    <td className="py-3 pr-4">4×6 м</td>
                    <td className="py-3">24 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">2 легковых</td>
                    <td className="py-3 pr-4">6×6 м</td>
                    <td className="py-3">36 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">2 + мастерская</td>
                    <td className="py-3 pr-4">7×8 м</td>
                    <td className="py-3">56 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">4 легковых</td>
                    <td className="py-3 pr-4">12×6 м</td>
                    <td className="py-3">72 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">1 грузовик / автобус</td>
                    <td className="py-3 pr-4">5×12 м, высота 4 м</td>
                    <td className="py-3">60 м²</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Автопарк 10 машин</td>
                    <td className="py-3 pr-4">18×24 м</td>
                    <td className="py-3">432 м²</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Минимальные размеры на 1 легковую машину — 3×6 м, но это «впритык». Рабочий минимум для комфортной парковки и небольшого хранения — 4×6 м с высотой 2,7 м.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Холодный или тёплый гараж
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Холодный гараж</strong> — стены и кровля из профнастила. Защищает от снега, дождя, ветра, но температура внутри равна уличной. Подходит для летнего хранения, автопарка с круглосуточным движением.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Тёплый гараж</strong> — сэндвич-панели 80–100 мм + отопление. Даёт +5...+15°C круглый год. Нужен для серьёзного ухода за автомобилем, работы зимой, СТО. Дороже холодного в 1,7–2,2 раза.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструкция гаража из ЛСТК
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Фундамент</strong> — винтовые сваи или мелкозаглубленная лента</li>
              <li><strong>Каркас</strong> — оцинкованные С-профили или гнутые швеллеры</li>
              <li><strong>Стены</strong> — профнастил С8/С10 или сэндвич-панели</li>
              <li><strong>Кровля</strong> — двускатная, односкатная или арочная</li>
              <li><strong>Ворота</strong> — секционные подъёмные или распашные</li>
              <li><strong>Пол</strong> — бетонная плита 100–150 мм с упрочнением</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит гараж под ключ
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Гараж 4×6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный без пола</td>
                    <td className="py-3 pr-4">9 000–13 000 ₽</td>
                    <td className="py-3">от 220 тыс ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный под ключ</td>
                    <td className="py-3 pr-4">14 000–18 000 ₽</td>
                    <td className="py-3">от 340 тыс ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Тёплый под ключ</td>
                    <td className="py-3 pr-4">22 000–32 000 ₽</td>
                    <td className="py-3">от 530 тыс ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Цены актуальны на июнь 2026 года. На стоимость влияют регион, тип фундамента, ворот, кровли, отделки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Гараж для грузовика: что учесть
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота не менее 4 м для грузовика, 4,5 м для фуры с прицепом</li>
              <li>Ширина проёма ворот — минимум 3,5 м</li>
              <li>Усиленный пол с топпингом — нагрузки от грузовика 5–25 тонн</li>
              <li>Усиленные подушки фундамента — нагрузка от ворот и техники</li>
              <li>Освещение со всех сторон — для ТО и осмотра</li>
              <li>Смотровая яма или подъёмник — по необходимости</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Нужно ли разрешение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              На землях ИЖС и ЛПХ при площади гаража до 50 м² и высоте до 5 м — разрешение не требуется. Достаточно уведомления в местную администрацию. Гараж большей площади или коммерческого назначения требует полноценного разрешения на строительство, как для ангара.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сроки строительства
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Проектирование — 5–7 дней</li>
              <li>Изготовление каркаса — 7–14 дней</li>
              <li>Фундамент — 3–7 дней</li>
              <li>Монтаж каркаса — 2–3 дня</li>
              <li>Ограждение и кровля — 3–5 дней</li>
              <li>Ворота, освещение, пол — 5–10 дней</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стандартный гараж 4×6 м под ключ — 25–35 дней с момента подписания договора.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Гараж против бокса в ГСК
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Свой гараж</th>
                    <th className="text-left py-3 font-semibold text-foreground">Бокс в ГСК</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Цена</td>
                    <td className="py-3 pr-4">от 350 тыс ₽</td>
                    <td className="py-3">от 800 тыс ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Местоположение</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">У дома</td>
                    <td className="py-3">Где есть ГСК</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Размер</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Любой</td>
                    <td className="py-3">Стандартный</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Право собственности</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Полное</td>
                    <td className="py-3">Пай в кооперативе</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Гараж из металлоконструкций — самое выгодное решение по соотношению цена/качество/срок. От 350 тыс ₽ за холодный гараж 4×6 м до 1,5 млн ₽ за тёплый гараж на 2 машины с мастерской. Срок строительства — 1 месяц. Срок службы — 50 лет при правильной антикоррозийной защите.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Построим гараж под ваши задачи
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит гаражи любых размеров — от частных на 1 машину до автопарков на 20+ единиц техники. Проект, материалы, монтаж под ключ.
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
