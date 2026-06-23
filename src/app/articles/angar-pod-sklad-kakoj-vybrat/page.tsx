import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар под склад: какой выбрать и сколько стоит в 2026 | МАКСТИЛ",
  description:
    "Как выбрать ангар под склад: размеры, высота, утепление, ворота. Сравнение типов складских ангаров, стоимость м², требования к проекту. Практическое руководство для бизнеса.",
  keywords: [
    "ангар под склад",
    "складской ангар",
    "склад из металлоконструкций",
    "ангар склад цена",
    "складское помещение под ключ",
    "ангар для хранения",
    "склад ЛСТК",
  ],
  openGraph: {
    title: "Ангар под склад: какой выбрать и сколько стоит",
    description:
      "Полное руководство по выбору складского ангара: размеры, утепление, ворота, цены.",
    url: "https://lstkmk.ru/articles/angar-pod-sklad-kakoj-vybrat/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/angar-pod-sklad-kakoj-vybrat/",
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
              Ангар под склад: какой выбрать и сколько стоит
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>15 июня 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Складской ангар — самый востребованный тип быстровозводимого здания. Разбираем, как подобрать оптимальные габариты, нужно ли утепление, какие ворота заказать и какой бюджет закладывать в 2026 году.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какие типы складов строят из металлоконструкций
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              По температурному режиму склады делят на четыре класса:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Холодный (сухой) склад</strong> — без отопления, для непортящихся грузов. Стены — профнастил с ветрозащитой</li>
              <li><strong>Тёплый сухой склад</strong> — поддерживается +5…+10 °C, для большинства непищевых товаров</li>
              <li><strong>Отапливаемый склад</strong> — комфортная температура +15…+20 °C, для работы персонала</li>
              <li><strong>Холодильный / морозильный</strong> — особый класс с панелями 150–200 мм и системой холода</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для каждого класса проект отличается: толщиной утеплителя, типом ворот, наличием тамбур-шлюзов и инженерных систем.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как подобрать размеры склада
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При расчёте площади ориентируйтесь не только на товар, но и на технологию хранения:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип хранения</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Высота до низа фермы</th>
                    <th className="text-left py-3 font-semibold text-foreground">Особенности</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Напольное</td>
                    <td className="py-3 pr-4">4–5 м</td>
                    <td className="py-3">Простой и дешёвый вариант</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">3-ярусный стеллаж</td>
                    <td className="py-3 pr-4">6–7 м</td>
                    <td className="py-3">Поддоны 1×1,2 м, штабелёр</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">5-ярусный стеллаж</td>
                    <td className="py-3 pr-4">9–10 м</td>
                    <td className="py-3">Высотный погрузчик</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Мезонин / антресоль</td>
                    <td className="py-3 pr-4">8–12 м</td>
                    <td className="py-3">Требует усиленного каркаса</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пролёты и шаг колонн
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для складов оптимальны пролёты 18–24 м без промежуточных колонн — этого достаточно для стандартной стеллажной системы. Шаг колонн чаще всего 6 м: он экономичен и совместим с типовыми воротами и окнами.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Пролёт 30 м и больше нужен только для крупных распредцентров, где техника требует свободного маневра. Каждые +6 м к пролёту увеличивают расход металла на 12–18%.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Ворота: какие нужны на складе
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Секционные подъёмные</strong> — стандарт для тёплых складов. Размер 3×3 или 4×4 м</li>
              <li><strong>Скоростные рулонные</strong> — для высокоинтенсивной логистики (фарма, food)</li>
              <li><strong>Промышленные распашные</strong> — экономичный вариант для холодных складов</li>
              <li><strong>Док-левеллеры</strong> — для прямой разгрузки фур, обязательны на DC</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Количество ворот = 1 ворота на каждые 700–1000 м² при умеренной интенсивности и 1 на 300–500 м² при высокой.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит ангар-склад в 2026 году
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип склада</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Срок</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодный 500–2000 м²</td>
                    <td className="py-3 pr-4 font-medium">14 000 – 18 000</td>
                    <td className="py-3">2–3 мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Тёплый 500–2000 м²</td>
                    <td className="py-3 pr-4 font-medium">22 000 – 28 000</td>
                    <td className="py-3">3–4 мес</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Распредцентр от 5000 м²</td>
                    <td className="py-3 pr-4 font-medium">28 000 – 38 000</td>
                    <td className="py-3">5–8 мес</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Подводные камни при заказе склада
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Заниженная нагрузка от стеллажей в проекте — каркас не выдержит загрузку</li>
              <li>Экономия на полу — стяжка трескается под колесами штабелёра</li>
              <li>Недостаток ворот — узкое место всей логистики</li>
              <li>Отсутствие предусмотренного расширения — пристройка обходится в 1,5 раза дороже</li>
              <li>Слабая вентиляция — образование конденсата под кровлей</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Складской ангар — это не «коробка», а инженерное решение под конкретный товарооборот. Перед заказом определите: что и как храните, какая техника работает внутри, нужно ли отопление и какой грузопоток на пиках. Это сэкономит до 25% бюджета и предотвратит ошибки, которые исправить уже после монтажа невозможно. Полный цикл строительства складов из металлоконструкций — проектирование, производство, монтаж — описан на странице <Link href="/stroitelstvo-skladov-iz-metallokonstrukcij/" className="text-accent-blue hover:underline">строительство складов из металлоконструкций под ключ</Link>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Спроектируем склад под ваш товаропоток
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ строит склады от 500 до 20 000 м² по всей ЦФО. Подберём размеры, утепление и ворота под вашу технологию — рассчитываем стоимость за 1–2 дня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость склада
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
