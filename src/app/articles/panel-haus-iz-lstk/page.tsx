import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Панельный дом из ЛСТК: технология, цены, проекты 2026 | МАКСТИЛ",
  description:
    "Строительство панельных домов из ЛСТК: технология, теплопотери, стоимость м². Быстровозводимые жилые и административные здания из лёгких стальных конструкций под ключ.",
  keywords: [
    "панельный дом из ЛСТК",
    "дом из лёгких стальных конструкций",
    "быстровозводимый дом ЛСТК цена",
    "строительство дома из ЛСТК",
    "ЛСТК жилой дом проект",
    "каркасный дом из металла",
  ],
  openGraph: {
    title: "Панельный дом из ЛСТК: технология и цены",
    description: "Быстровозводимые дома из ЛСТК: технология, стоимость, проекты.",
    url: "https://lstkmk.ru/articles/panel-haus-iz-lstk/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/panel-haus-iz-lstk/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Технологии</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Панельный дом из ЛСТК: технология, цены, проекты
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Панельный дом из ЛСТК — это здание, каркас которого собирается из оцинкованных стальных профилей, а стеновые панели заполняются утеплителем и обшиваются. Срок строительства «под ключ» — 60–90 дней. Стоимость — от 18 000 ₽/м². Технология применяется для жилых, административных и социальных объектов.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Что такое ЛСТК и почему это не обычный металлокаркас</h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК — лёгкие стальные тонкостенные конструкции из оцинкованного профиля толщиной 0,8–2,0 мм. В отличие от горячекатаного металла, профили ЛСТК не нуждаются в антикоррозийной покраске — защиту обеспечивает цинковое покрытие 275 г/м². Вес квадратного метра несущего каркаса — 20–35 кг/м² против 60–80 кг/м² у тяжёлого каркаса.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Ключевое свойство — термопрофиль с перфорацией. Просечки снижают теплопроводность стойки в 4–6 раз, что решает главную проблему металлических конструкций — мостики холода.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив стеновой панели</h2>
            <p className="text-muted leading-relaxed mb-4">Типовой «пирог» стены панельного дома из ЛСТК (снаружи → внутрь):</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Фасадная облицовка: штукатурный фасад, металлокассеты, сайдинг или фиброцементные панели</li>
              <li>Вентилируемый зазор 20–40 мм</li>
              <li>Ветро-влагозащитная мембрана</li>
              <li>Минеральная вата 150–200 мм (между стойками + в термопрофиле)</li>
              <li>Пароизоляция</li>
              <li>Внутренняя обшивка: ГКЛ, ЦСП или OSB</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Суммарное сопротивление теплопередаче такой стены — R = 4,0–5,5 м²·°С/Вт, что соответствует требованиям СП 50.13330 для большинства климатических зон России.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Этапы строительства панельного дома из ЛСТК</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этап</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Срок</th>
                    <th className="text-left py-3 font-semibold text-foreground">Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Проектирование", "2–3 недели", "КМД + архитектурный раздел"],
                    ["Фундамент (плита/ростверк)", "2–3 недели", "Лёгкий каркас — малые нагрузки"],
                    ["Монтаж каркаса", "2–4 недели", "До 500 м² — бригада 4 человека"],
                    ["Кровля", "1–2 недели", "Металлочерепица или сэндвич"],
                    ["Фасад и окна", "2–3 недели", "Параллельно с внутренними работами"],
                    ["Инженерные сети", "2–4 недели", "Электрика, водоснабжение, отопление"],
                    ["Отделка", "3–6 недель", "Зависит от требований заказчика"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Каркас + кровля (тёплый контур)", "от 12 000"],
                    ["Под чистовую отделку", "от 18 000"],
                    ["Под ключ (жилое)", "от 28 000"],
                    ["Под ключ (административное)", "от 22 000"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Преимущества и ограничения</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-green-800 mb-2">Плюсы</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Вес в 3–4 раза меньше кирпича</li>
                  <li>• Лёгкий фундамент — экономия 30–40%</li>
                  <li>• Монтаж при −25 °С</li>
                  <li>• Не горит (негорючий каркас)</li>
                  <li>• Срок службы 50+ лет</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="font-semibold text-orange-800 mb-2">Ограничения</p>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Высота — до 4–5 этажей</li>
                  <li>• Требует точного проекта</li>
                  <li>• Акустика — нужна доп. звукоизоляция</li>
                  <li>• Нельзя сверлить каркас без проекта</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Где применяется</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Малоэтажное жильё — коттеджи, таунхаусы, апартаменты</li>
              <li>Административные здания — офисы, бизнес-центры до 4 этажей</li>
              <li>Социальные объекты — школы, детские сады, ФАП</li>
              <li>Гостиницы и мотели быстрого строительства</li>
              <li>Санатории и базы отдыха в труднодоступных районах</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Панельный дом из ЛСТК — альтернатива кирпичу и газобетону при ограниченном бюджете и сжатых сроках. При грамотном проекте теплопотери не уступают кирпичному дому, а срок возведения коробки — в 2–3 раза меньше. Стоимость «под ключ» — от 28 000 ₽/м² для жилых объектов.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим панельный дом из ЛСТК под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство и монтаж зданий из ЛСТК в Белгородской области и регионах ЦФО.</p>
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
