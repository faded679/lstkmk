import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Быстровозводимые здания: что это такое и сколько стоит | МАКСТИЛ",
  description:
    "Что такое быстровозводимые здания из металлоконструкций? Виды, технологии, сроки и стоимость. Сравнение с традиционным строительством. Всё что нужно знать перед заказом.",
  keywords: [
    "быстровозводимые здания",
    "быстровозводимые здания из металлоконструкций",
    "быстровозводимое здание цена",
    "бстз что это",
    "быстровозводимые здания виды",
    "металлокаркасные здания",
    "быстровозводимые сооружения",
  ],
  openGraph: {
    title: "Быстровозводимые здания: что это такое и сколько стоит",
    description:
      "Полный обзор быстровозводимых зданий из металлоконструкций: технологии, виды, сроки строительства и цены.",
    url: "https://lstkmk.ru/articles/bystrovozvodimye-zdaniya-chto-eto/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/bystrovozvodimye-zdaniya-chto-eto/",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Все статьи
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">Технологии</span>
            <span className="text-xs text-muted">9 июня 2026</span>
            <span className="text-xs text-muted">8 мин</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Быстровозводимые здания: что это такое и сколько стоит
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Термин «быстровозводимое здание» встречается в каждом третьем тендере на строительство склада или производственного объекта. Но что именно за этим стоит, какие технологии применяются и насколько оправдано название «быстрое»?
          </p>
        </header>

        <div className="prose prose-slate max-w-none">

          <h2>Что такое быстровозводимые здания</h2>
          <p>
            Быстровозводимые здания (БВЗ) — это сооружения, возводимые из готовых заводских конструкций с минимальным объёмом монолитных работ на строительной площадке. Основу составляет металлический каркас, на который навешиваются ограждающие конструкции.
          </p>
          <p>
            Ключевое отличие от традиционного строительства — большая часть работ выполняется на заводе в контролируемых условиях, а на объекте происходит лишь сборка. Это и даёт выигрыш во времени.
          </p>

          <h2>Основные технологии</h2>

          <h3>ЛСТК — лёгкие стальные тонкостенные конструкции</h3>
          <p>
            Наиболее современная технология для зданий пролётом до 24–30 м. Используется холодногнутый оцинкованный профиль толщиной 1,5–3 мм. Конструкции лёгкие, не требуют тяжёлой техники при монтаже, имеют высокую точность изготовления.
          </p>
          <p>
            <strong>Плюсы:</strong> малый вес, низкая нагрузка на фундамент, точность до миллиметра, заводская оцинковка.<br />
            <strong>Ограничения:</strong> пролёты свыше 30 м требуют более тяжёлых конструктивных решений.
          </p>

          <h3>Горячекатаный прокат (традиционный металлокаркас)</h3>
          <p>
            Балки, колонны и фермы из горячекатаных двутавров и швеллеров. Применяется для больших пролётов (30–80 м), высоких нагрузок, многоэтажных зданий.
          </p>
          <p>
            <strong>Плюсы:</strong> возможность перекрытия больших пролётов, высокая несущая способность.<br />
            <strong>Ограничения:</strong> тяжелее ЛСТК, дороже, требует более мощного фундамента.
          </p>

          <h3>Сборные сэндвич-панели</h3>
          <p>
            Не технология каркаса, а технология ограждения. Трёхслойные панели (металл–утеплитель–металл) навешиваются на каркас и одновременно выполняют функции стены/кровли и утепления.
          </p>

          <h2>Виды быстровозводимых зданий</h2>
          <ul>
            <li><strong>Склады и логистические комплексы</strong> — наиболее массовый сегмент. Высота 6–12 м, пролёт 18–36 м.</li>
            <li><strong>Производственные цеха</strong> — с кранами, антресолями, усиленными полами.</li>
            <li><strong>Ангары сельскохозяйственного назначения</strong> — зернохранилища, коровники, машинные дворы.</li>
            <li><strong>Торговые павильоны и ТЦ</strong> — с фасадными системами, большими витражами.</li>
            <li><strong>Автосервисы и СТО</strong> — с воротами, смотровыми ямами, вентиляцией.</li>
            <li><strong>Спортивные сооружения</strong> — крытые корты, манежи, бассейны.</li>
          </ul>

          <h2>Сравнение с традиционным строительством</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold">Параметр</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">БВЗ из металла</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Кирпич / монолит</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200">Срок строительства 600 м²</td>
                  <td className="p-3 border border-slate-200 text-green-700 font-medium">3–4 месяца</td>
                  <td className="p-3 border border-slate-200">8–14 месяцев</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Стоимость м²</td>
                  <td className="p-3 border border-slate-200 text-green-700 font-medium">5 000–9 000 ₽</td>
                  <td className="p-3 border border-slate-200">9 000–18 000 ₽</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Нагрузка на фундамент</td>
                  <td className="p-3 border border-slate-200 text-green-700 font-medium">Низкая</td>
                  <td className="p-3 border border-slate-200">Высокая</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Возможность расширения</td>
                  <td className="p-3 border border-slate-200 text-green-700 font-medium">Да, легко</td>
                  <td className="p-3 border border-slate-200">Сложно</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Сезонность строительства</td>
                  <td className="p-3 border border-slate-200 text-green-700 font-medium">Круглогодично</td>
                  <td className="p-3 border border-slate-200">Ограничена морозами</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Долговечность</td>
                  <td className="p-3 border border-slate-200">50+ лет при обслуживании</td>
                  <td className="p-3 border border-slate-200">100+ лет</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Сколько стоит быстровозводимое здание</h2>
          <p>
            Стоимость зависит от назначения, размера, типа утепления и региона. Ориентиры на 2025 год:
          </p>
          <ul>
            <li><strong>Холодный склад / ангар</strong> — от 4 500 до 6 500 ₽/м²</li>
            <li><strong>Утеплённый склад (сэндвич 100 мм)</strong> — от 6 500 до 9 000 ₽/м²</li>
            <li><strong>Производственный цех</strong> — от 8 000 до 13 000 ₽/м²</li>
            <li><strong>Торговый объект с отделкой</strong> — от 12 000 до 20 000 ₽/м²</li>
          </ul>
          <p>
            Чем больше площадь объекта, тем ниже удельная стоимость. Объект 2 000 м² всегда обходится дешевле за метр, чем объект 300 м².
          </p>

          <h2>Этапы строительства быстровозводимого здания</h2>
          <ol>
            <li><strong>Техническое задание и геология</strong> — 1–2 недели. Определяются нагрузки, тип фундамента, компоновка.</li>
            <li><strong>Проектирование</strong> — 2–4 недели. Разрабатываются КМ и КМД, согласовываются с заказчиком.</li>
            <li><strong>Производство металлоконструкций</strong> — 3–6 недель. Параллельно с фундаментными работами.</li>
            <li><strong>Устройство фундамента</strong> — 2–4 недели. Тип зависит от грунта: лента, сваи, плита.</li>
            <li><strong>Монтаж каркаса</strong> — 1–3 недели в зависимости от размера.</li>
            <li><strong>Монтаж кровли и стен</strong> — 1–2 недели.</li>
            <li><strong>Инженерные сети и финишные работы</strong> — 2–4 недели.</li>
          </ol>

          <h2>На что обратить внимание при выборе подрядчика</h2>
          <ul>
            <li>Наличие собственного производства (не перекупщик)</li>
            <li>Расчётная документация по нагрузкам, а не «типовые проекты»</li>
            <li>Гарантия на металлоконструкции и кровлю</li>
            <li>Опыт в вашем типе объектов (склад ≠ коровник ≠ автосервис)</li>
            <li>Реальные объекты в портфолио с возможностью осмотра</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Узнайте стоимость вашего объекта</h3>
            <p className="text-muted text-sm mb-4">
              Опишите задачу — рассчитаем смету и подберём оптимальное конструктивное решение. Ответим в течение рабочего дня.
            </p>
            <a
              href="/#contacts"
              className="inline-flex h-10 items-center px-6 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Получить расчёт
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
