import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Склад под ключ: стоимость строительства в 2025 году | МАКСТИЛ",
  description:
    "Сколько стоит построить склад под ключ из металлоконструкций? Цены на склады 300, 600, 1200 м². Из чего складывается смета, типы складов и как выбрать оптимальное решение.",
  keywords: [
    "склад под ключ стоимость",
    "строительство склада цена",
    "склад из металлоконструкций цена",
    "построить склад под ключ",
    "склад металлокаркас стоимость",
    "склад лстк цена за метр",
    "сколько стоит построить склад",
  ],
  openGraph: {
    title: "Склад под ключ: стоимость строительства в 2025 году",
    description:
      "Реальные цены на строительство складов из ЛСТК под ключ. Из чего складывается смета и как не переплатить.",
    url: "https://lstkmk.ru/articles/sklad-pod-klyuch-stoimost/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/sklad-pod-klyuch-stoimost/",
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
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">Цены и стоимость</span>
            <span className="text-xs text-muted">9 июня 2026</span>
            <span className="text-xs text-muted">9 мин</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Склад под ключ: стоимость строительства в 2025 году
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Строительство склада — одна из самых востребованных задач в сегменте коммерческой недвижимости. Разбираем, сколько реально стоит склад из металлоконструкций, что влияет на цену и как получить максимум за свой бюджет.
          </p>
        </header>

        <div className="prose prose-slate max-w-none">

          <h2>Типы складов и их стоимость</h2>
          <p>
            Прежде чем говорить о цифрах, важно понять: «склад» — понятие широкое. Стоимость сильно зависит от типа и назначения объекта.
          </p>

          <h3>Холодный склад</h3>
          <p>
            Простое неотапливаемое хранилище с металлокаркасом и профлистом. Подходит для хранения непищевых грузов, техники, стройматериалов. Самый доступный вариант — от 4 500 ₽/м².
          </p>

          <h3>Утеплённый склад</h3>
          <p>
            Каркас с сэндвич-панелями, защита от промерзания. Для товаров, чувствительных к температурным перепадам. Стоимость — от 6 500 ₽/м².
          </p>

          <h3>Склад с офисным блоком</h3>
          <p>
            Комбинированное здание: складская зона и административные помещения. Пользуется спросом у логистических компаний и дистрибьюторов. Цена — от 7 500 ₽/м² в зависимости от доли офисной части.
          </p>

          <h3>Склад-холодильник / фреш-хранилище</h3>
          <p>
            Требует усиленного утепления (PIR-панели от 150 мм), специального холодильного оборудования. Стоимость строительной части — от 11 000 ₽/м², плюс отдельно оборудование.
          </p>

          <h2>Таблица цен на склады под ключ (2025)</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold">Площадь</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Холодный</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Утеплённый</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">С офисным блоком</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200">300 м²</td>
                  <td className="p-3 border border-slate-200">1 400 000 – 1 900 000 ₽</td>
                  <td className="p-3 border border-slate-200">2 000 000 – 2 700 000 ₽</td>
                  <td className="p-3 border border-slate-200">2 400 000 – 3 200 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">600 м²</td>
                  <td className="p-3 border border-slate-200">2 700 000 – 3 600 000 ₽</td>
                  <td className="p-3 border border-slate-200">4 000 000 – 5 200 000 ₽</td>
                  <td className="p-3 border border-slate-200">4 800 000 – 6 200 000 ₽</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">1 200 м²</td>
                  <td className="p-3 border border-slate-200">5 400 000 – 7 000 000 ₽</td>
                  <td className="p-3 border border-slate-200">7 800 000 – 10 000 000 ₽</td>
                  <td className="p-3 border border-slate-200">9 500 000 – 12 500 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">2 400 м²</td>
                  <td className="p-3 border border-slate-200">10 500 000 – 13 500 000 ₽</td>
                  <td className="p-3 border border-slate-200">15 000 000 – 19 000 000 ₽</td>
                  <td className="p-3 border border-slate-200">18 000 000 – 23 000 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted italic">
            * Включает: каркас, кровлю, стены, монтаж, простой фундамент. Не включает: ворота, полы, электрику, отопление (если не указано).
          </p>

          <h2>Что входит в понятие «под ключ»</h2>
          <p>
            Фраза «под ключ» у разных подрядчиков означает разное. При запросе коммерческого предложения обязательно уточните, что именно входит в стоимость:
          </p>
          <ul>
            <li>✓ Проектная документация (КМ, КМД)</li>
            <li>✓ Металлокаркас с антикоррозийной обработкой</li>
            <li>✓ Кровельные и стеновые панели или профлист</li>
            <li>✓ Фундамент (тип уточняется по геологии)</li>
            <li>✓ Монтаж и все крепёжные элементы</li>
            <li>? Ворота и двери (часто отдельно)</li>
            <li>? Промышленный пол (часто отдельно)</li>
            <li>? Электрика и освещение (часто отдельно)</li>
            <li>? Отопление (для утеплённых складов)</li>
          </ul>

          <h2>Из чего складывается смета: разбивка по статьям</h2>
          <p>
            На примере утеплённого склада 600 м² (20×30 м, высота 6 м, сэндвич-панели 100 мм):
          </p>
          <ul>
            <li><strong>Металлокаркас ЛСТК</strong> — 1 100 000 ₽ (25%)</li>
            <li><strong>Сэндвич-панели кровля + стены</strong> — 1 350 000 ₽ (31%)</li>
            <li><strong>Фундамент ленточный</strong> — 620 000 ₽ (14%)</li>
            <li><strong>Монтаж</strong> — 580 000 ₽ (13%)</li>
            <li><strong>Ворота, двери, окна</strong> — 280 000 ₽ (6%)</li>
            <li><strong>Проектирование</strong> — 210 000 ₽ (5%)</li>
            <li><strong>Прочие расходы</strong> — 260 000 ₽ (6%)</li>
            <li><strong>Итого:</strong> ~4 400 000 ₽ (~7 300 ₽/м²)</li>
          </ul>

          <h2>Сроки строительства склада</h2>
          <p>
            Металлокаркасный склад строится в 3–5 раз быстрее кирпичного аналога. Типичный график:
          </p>
          <ul>
            <li><strong>Неделя 1–2:</strong> Геология, проектирование технического задания</li>
            <li><strong>Неделя 2–5:</strong> Разработка проекта и рабочей документации</li>
            <li><strong>Неделя 3–8:</strong> Изготовление металлоконструкций (параллельно с проектом)</li>
            <li><strong>Неделя 5–8:</strong> Устройство фундамента</li>
            <li><strong>Неделя 9–12:</strong> Монтаж каркаса и обшивки</li>
            <li><strong>Неделя 12–14:</strong> Ворота, полы, инженерия</li>
          </ul>
          <p>
            Таким образом, склад площадью 600 м² реально построить за <strong>3–4 месяца</strong> от заключения договора.
          </p>

          <h2>Ключевые вопросы перед выбором подрядчика</h2>
          <ol>
            <li>Есть ли у компании собственное производство металлоконструкций или они посредники?</li>
            <li>Какая гарантия на конструктив и кровлю?</li>
            <li>Входит ли проектирование в стоимость или оплачивается отдельно?</li>
            <li>Есть ли портфолио готовых объектов, которые можно осмотреть?</li>
            <li>Как прописана ответственность за сроки в договоре?</li>
          </ol>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Рассчитайте стоимость вашего склада</h3>
            <p className="text-muted text-sm mb-4">
              Укажите площадь, назначение и тип утепления — подготовим предварительную смету за 1 рабочий день.
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
