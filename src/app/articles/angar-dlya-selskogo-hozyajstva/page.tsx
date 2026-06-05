import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Ангар для сельского хозяйства: виды, размеры, требования — МАКСТИЛ",
  description:
    "Зернохранилища, коровники, птичники, навесы — конструктивные решения для АПК. Чем сельхозангар отличается от промышленного и как правильно его запроектировать.",
  keywords: ["сельхозангар", "ангар для зерна", "коровник ЛСТК", "птичник металлокаркас", "быстровозводимые здания АПК"],
  alternates: { canonical: "https://lstkmk.ru/articles/angar-dlya-selskogo-hozyajstva/" },
};

export default function ArticlePage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} weight="bold" />
            Все статьи
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
              Строительство
            </span>
            <span className="text-xs text-muted">5 июня 2026 · 7 мин</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-snug">
            Ангар для сельского хозяйства: виды, размеры, требования
          </h1>

          <img
            src="/articles/angar-dlya-selskogo-hozyajstva.jpg"
            alt="Ангар для сельского хозяйства"
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-10"
          />

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-foreground space-y-6">

            <p className="text-muted">
              Сельскохозяйственные здания — особый сегмент быстровозводимого строительства. Требования к ним отличаются от промышленных: нагрузки от скота и зерна, влажность, агрессивные среды, специфические планировки. Разберём основные виды сельхозангаров и что учесть при проектировании.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Виды сельскохозяйственных зданий из металлоконструкций</h2>

            <h3 className="text-base font-semibold text-foreground">Зернохранилища и зерносклады</h3>
            <p className="text-muted">
              Самый распространённый тип сельхозангара. Ключевые требования — герметичность кровли и стен, отсутствие конденсата, возможность механизированной засыпки и выгрузки зерна. Стандартные размеры: ширина 18–24 м, длина от 36 м. Полы — бетонные с уклоном к технологическим лоткам. Для временного хранения допускаются холодные конструкции, для длительного — с пароизоляцией и вентиляцией.
            </p>

            <h3 className="text-base font-semibold text-foreground">Коровники и телятники</h3>
            <p className="text-muted">
              Здания для КРС проектируются с учётом норм технологического содержания животных. Ширина секции — от 21 м (для привязного) до 36 м (для беспривязного содержания). Обязательны аэрационный конёк для естественной вентиляции, ворота шириной не менее 3,5 м для прохода техники, канализационные лотки. Материал каркаса — горячеоцинкованный ЛСТК-профиль толщиной 2–2,5 мм.
            </p>

            <h3 className="text-base font-semibold text-foreground">Птичники и свинарники</h3>
            <p className="text-muted">
              Птицеводческие здания — одни из самых технологически сложных. Длина птичника обычно 96–120 м, ширина 18–24 м. Требования к герметичности максимальные: сквозняки недопустимы. Стены — сэндвич-панели с минватным наполнением 150–200 мм, принудительная вентиляция с автоматическим управлением. Для свинарников важна стойкость конструкций к аммиачной среде.
            </p>

            <h3 className="text-base font-semibold text-foreground">Навесы и склады техники</h3>
            <p className="text-muted">
              Открытые или частично закрытые навесы для хранения сельхозтехники — наиболее бюджетное решение. Пролёт 18–30 м, высота 5–7 м. Достаточно металлического каркаса с профнастильной кровлей. Стены не нужны или закрываются частично с подветренной стороны.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Отличия сельхозангара от промышленного</h2>

            <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Параметр</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Сельхозздание</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Промздание</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Влажность внутри</td>
                  <td className="px-4 py-3">60–85%</td>
                  <td className="px-4 py-3">40–60%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Агрессивность среды</td>
                  <td className="px-4 py-3">Высокая (аммиак, CO₂)</td>
                  <td className="px-4 py-3">Умеренная</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Требования к вентиляции</td>
                  <td className="px-4 py-3">Критичны</td>
                  <td className="px-4 py-3">По нормативу</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Нагрузка на полы</td>
                  <td className="px-4 py-3">Скот, техника, зерно</td>
                  <td className="px-4 py-3">Оборудование, склад</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-bold text-foreground mt-8">Нормативная база</h2>
            <p className="text-muted">
              Проектирование сельхоззданий регулируется рядом документов: СП 37.13330 (промышленный транспорт), НТП-АПК для конкретных видов животноводства, СП 19.13330 (склады). Для птицеводческих и животноводческих комплексов требуется согласование с ветеринарной службой.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Антикоррозийная защита в агрессивной среде</h2>
            <p className="text-muted">
              Для коровников и птичников рекомендуется горячеоцинкованный профиль с толщиной цинка не менее 275 г/м². Сварные узлы после монтажа обрабатываются цинк-наполненными грунтами. Крепёж — оцинкованный или из нержавеющей стали. Такой подход обеспечивает срок службы каркаса 30–40 лет без существенного обслуживания.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Сроки и стоимость</h2>
            <p className="text-muted">
              Сельхозздание из ЛСТК площадью 1 000 м² строится за 45–60 дней под ключ. Стоимость холодного зернохранилища — от 6 500 ₽/м², утеплённого коровника — от 12 000 ₽/м². Сроки значительно короче, чем у кирпичных или блочных зданий аналогичного назначения.
            </p>

            <div className="mt-10 p-6 bg-accent-blue/5 border border-accent-blue/20 rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-2">Строим сельхозздания под ключ</p>
              <p className="text-sm text-muted">
                Проектируем и возводим коровники, зернохранилища, птичники и навесы по всей России. Опыт — более 14 лет, гарантия на конструкции — 5 лет.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
