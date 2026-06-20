import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Полы в ангаре: бетон, армирование, упрочнители | МАКСТИЛ",
  description:
    "Полы в ангаре и на складе: толщина бетона, армирование, топпинг и эпоксидные покрытия. Расчёт нагрузок от стеллажей и техники, стоимость м² промышленного пола в 2026.",
  keywords: [
    "полы в ангаре",
    "промышленные полы",
    "бетонный пол склада",
    "топпинг для пола",
    "эпоксидный пол ангара",
    "армирование пола",
    "толщина бетонного пола",
  ],
  openGraph: {
    title: "Полы в ангаре: бетон, армирование, упрочнители",
    description:
      "Как правильно сделать промышленный пол: толщина, армирование, упрочнение.",
    url: "https://lstkmk.ru/articles/poly-v-angare/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/poly-v-angare/",
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
              Полы в ангаре: бетон, армирование, упрочнители
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>20 июня 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Пол в ангаре — самая нагруженная конструкция здания. Он принимает вес стеллажей, ударные нагрузки от паллет, истирание от колёс погрузчиков. Ошибки в проектировании пола приводят к трещинам, выкрашиванию и затратной переделке. Разбираем, как сделать долговечный промышленный пол.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструкция промышленного пола
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовая «пирога» пола в ангаре, снизу вверх:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li><strong>Грунт основания</strong> — выровненный и уплотнённый</li>
              <li><strong>Подушка</strong> — щебень 100–150 мм с уплотнением</li>
              <li><strong>Песчаная прослойка</strong> — 50 мм для выравнивания</li>
              <li><strong>Гидроизоляция</strong> — плёнка ПВД 200 мкм</li>
              <li><strong>Утеплитель</strong> (для тёплых зданий) — XPS 50–100 мм</li>
              <li><strong>Армирование</strong> — сетка или фиброволокно</li>
              <li><strong>Бетонная плита</strong> — 150–250 мм</li>
              <li><strong>Упрочняющий слой</strong> — топпинг или эпоксид</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Расчёт толщины бетона
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип эксплуатации</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Толщина</th>
                    <th className="text-left py-3 font-semibold text-foreground">Класс бетона</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Лёгкая (склад, навес)</td>
                    <td className="py-3 pr-4">120–150 мм</td>
                    <td className="py-3">B22.5</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Средняя (стеллажи, погрузчики)</td>
                    <td className="py-3 pr-4">150–200 мм</td>
                    <td className="py-3">B25</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Тяжёлая (цеха, СТО)</td>
                    <td className="py-3 pr-4">200–250 мм</td>
                    <td className="py-3">B30</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Особо тяжёлая (литейка, сварка)</td>
                    <td className="py-3 pr-4">250–350 мм</td>
                    <td className="py-3">B35–B40</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Армирование: сетка или фибра
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Армирование принимает на себя растягивающие нагрузки и предотвращает трещины. Есть три основных способа:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Арматурная сетка</strong> — традиционный вариант, ⌀5–8 мм, ячейка 100×100 или 150×150 мм</li>
              <li><strong>Стальная фибра</strong> — добавляется в бетонную смесь, расход 25–40 кг/м³</li>
              <li><strong>Полипропиленовая фибра</strong> — для лёгких полов, не ржавеет</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Современная практика — комбинировать сетку + стальную фибру для тяжёлых полов. Сетка работает против больших трещин, фибра — против мелких усадочных.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Топпинг: упрочнение поверхности
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Топпинг — сухая смесь из цемента и упрочняющих наполнителей, втираемая в свежий бетон вертолётом. Образует поверхностный слой 2–4 мм с твёрдостью в 2–4 раза выше обычного бетона.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Кварцевый</strong> — самый дешёвый, для средних нагрузок (4–5 кг/м²)</li>
              <li><strong>Корундовый</strong> — для тяжёлых складов, СТО (6–8 кг/м²)</li>
              <li><strong>Металлизированный</strong> — для экстремальных нагрузок (8–12 кг/м²)</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стоимость топпинга — 200–500 ₽/м². За эти деньги пол получает срок службы в 15–20 лет вместо 3–5 у обычного бетона.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Эпоксидные и полиуретановые покрытия
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для помещений с требованиями к чистоте, химической стойкости или эстетике применяют наливные полимерные покрытия:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Эпоксид тонкий слой (0,3–0,5 мм)</strong> — пыленепроницаемость, лёгкие нагрузки</li>
              <li><strong>Эпоксид наливной (2–4 мм)</strong> — средние нагрузки, химстойкость</li>
              <li><strong>Полиуретан</strong> — ударостойкий, для пищёвки</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стоимость — от 600 до 3000 ₽/м² в зависимости от толщины и состава.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Деформационные швы
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Без швов бетонный пол неизбежно трескается из-за усадки и температурных деформаций. Технологические швы нарезаются на свежем бетоне на глубину 1/3 толщины плиты с шагом:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>6×6 м — для полов до 200 мм</li>
              <li>8×8 м — для полов 200–300 мм</li>
              <li>10×10 м — для полов больше 300 мм</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Швы закрывают герметиком или полиуретановым шнуром. Без герметизации в шов попадает вода и грязь, бетон по краям разрушается.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость промышленных полов
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип пола</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Бетонный 150 мм без упрочнения</td>
                    <td className="py-3 font-medium">1 200 – 1 800</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Бетонный 200 мм + топпинг кварц</td>
                    <td className="py-3 font-medium">1 800 – 2 500</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Бетонный 250 мм + топпинг корунд</td>
                    <td className="py-3 font-medium">2 500 – 3 500</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">С эпоксидным наливным покрытием</td>
                    <td className="py-3 font-medium">3 200 – 5 000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Главные ошибки при устройстве полов
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Заливка по неуплотнённой подушке — даёт неравномерную осадку</li>
              <li>Экономия на толщине — пол трескается под стеллажами</li>
              <li>Отказ от деформационных швов — масштабное растрескивание</li>
              <li>Преждевременная эксплуатация — погрузчики на бетон возрастом меньше 28 дней</li>
              <li>Отсутствие упрочнения — поверхность выкрашивается за 1–2 года</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Хороший промышленный пол — это не «залить бетон побольше», а грамотно подобранная конструкция: подушка, армирование, толщина, упрочнение и швы. Экономия на полу даёт самые дорогие проблемы — переделка пола под действующим складом обходится в 2–3 раза дороже изначального устройства.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Сделаем пол под ваши нагрузки
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ устраивает промышленные полы в составе строительства ангаров под ключ. Расчёт толщины и упрочнения — под конкретное оборудование и тип эксплуатации.
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
