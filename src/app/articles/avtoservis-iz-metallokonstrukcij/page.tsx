import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Автосервис из металлоконструкций: проект и стоимость СТО | МАКСТИЛ",
  description:
    "Строительство автосервиса из металлоконструкций: проект СТО, выбор размеров, подъёмники, ворота, инженерия. Стоимость м² автосервиса и сроки строительства в 2026 году.",
  keywords: [
    "автосервис из металлоконструкций",
    "СТО под ключ",
    "проект автосервиса",
    "автосервис ЛСТК",
    "здание автосервиса",
    "строительство СТО",
    "автосервис цена",
  ],
  openGraph: {
    title: "Автосервис из металлоконструкций: проект и стоимость СТО",
    description:
      "Как построить автосервис из ЛСТК: размеры, подъёмники, ворота, бюджет.",
    url: "https://lstkmk.ru/articles/avtoservis-iz-metallokonstrukcij/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/avtoservis-iz-metallokonstrukcij/",
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
              Автосервис из металлоконструкций: проект и стоимость СТО
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>17 июня 2026</span>
              <span>•</span>
              <span>10 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Автосервис — один из самых частых заказов на быстровозводимое здание. Разбираем, как спроектировать СТО, выбрать размеры боксов, рассчитать ворота и подъёмники, и сколько стоит автосервис под ключ в 2026 году.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Размеры боксов: главный параметр СТО
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Размеры бокса напрямую зависят от типа обслуживаемого транспорта:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип СТО</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Бокс, м</th>
                    <th className="text-left py-3 font-semibold text-foreground">Высота</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Легковые авто</td>
                    <td className="py-3 pr-4">6 × 4</td>
                    <td className="py-3">4,5 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Внедорожники, минивэны</td>
                    <td className="py-3 pr-4">7 × 4,5</td>
                    <td className="py-3">5 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Микроавтобусы</td>
                    <td className="py-3 pr-4">8 × 5</td>
                    <td className="py-3">5,5 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Грузовики</td>
                    <td className="py-3 pr-4">12 × 6</td>
                    <td className="py-3">6,5 м</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Фуры, спецтехника</td>
                    <td className="py-3 pr-4">18 × 7</td>
                    <td className="py-3">8 м</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Высота указана до низа фермы — с учётом подъёмника и пространства над поднятой машиной. Стандартный 2-стоечный подъёмник для легковых требует 4–4,5 м чистой высоты.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Зонирование автосервиса
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовой автосервис делится на функциональные зоны:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Рабочая зона</strong> — боксы с подъёмниками (60–70% площади)</li>
              <li><strong>Зона диагностики</strong> — стенды развал-схождения, диагностика</li>
              <li><strong>Склад запчастей</strong> — отдельное закрытое помещение</li>
              <li><strong>Клиентская зона</strong> — стойка приёмки, ожидание, санузел</li>
              <li><strong>Бытовка персонала</strong> — раздевалка, душ, столовая</li>
              <li><strong>Технические помещения</strong> — компрессорная, котельная</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для СТО площадью 300 м² минимум 70% занимают боксы, оставшееся — клиент и подсобка. Для 1000 м² пропорция меняется: больше склада и сервисных зон.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Ворота: какие выбрать
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Секционные подъёмные</strong> — золотой стандарт, 3×3 или 4×4 м</li>
              <li><strong>С автоматикой</strong> — для интенсивного въезда/выезда</li>
              <li><strong>Со встроенной калиткой</strong> — для входа без открытия всех ворот</li>
              <li><strong>Утеплённые панели</strong> — обязательно для тёплого СТО</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              На каждый бокс — одни ворота. Двусторонний проезд (въезд–выезд через противоположные ворота) удорожает каркас на 10–15%, но удваивает пропускную способность.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Полы: главное на чём не экономят
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Полы в СТО эксплуатируются жёстко: вес автомобилей, точечная нагрузка от подъёмников, разлив масел и реагентов. Минимальные требования:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Бетонная стяжка не менее 200 мм с армированием</li>
              <li>Топпинговое или эпоксидное упрочнение поверхности</li>
              <li>Уклон 1–2% к водоотводу</li>
              <li>Усиленные участки под подъёмники (закладные)</li>
              <li>Маслобензостойкое покрытие в зоне диагностики</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Экономия на полу — самая частая ошибка. Тонкая стяжка трескается под подъёмником за 1–2 года и требует полной переделки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инженерные системы СТО
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Отопление</strong> — газовые ИК-излучатели или воздушные пушки</li>
              <li><strong>Вентиляция</strong> — приточно-вытяжная с местными отсосами над боксами</li>
              <li><strong>Электрика</strong> — силовая 380 В для подъёмников, компрессора, сварки</li>
              <li><strong>Освещение</strong> — не менее 500 лк рабочей зоны, светильники над каждым боксом</li>
              <li><strong>Сжатый воздух</strong> — разводка от компрессорной по всем боксам</li>
              <li><strong>Канализация</strong> — с маслобензоуловителем</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит автосервис под ключ
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип СТО</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Срок</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">СТО 200–400 м² (2–4 бокса)</td>
                    <td className="py-3 pr-4 font-medium">28 000 – 35 000</td>
                    <td className="py-3">3–5 мес</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Средний СТО 500–800 м²</td>
                    <td className="py-3 pr-4 font-medium">32 000 – 40 000</td>
                    <td className="py-3">4–6 мес</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Грузовой СТО / автокомплекс</td>
                    <td className="py-3 pr-4 font-medium">38 000 – 50 000</td>
                    <td className="py-3">6–8 мес</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что предусмотреть на этапе проекта
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Расположение подъёмников и закладных в полу</li>
              <li>Маршруты подачи воздуха и слива отработанных жидкостей</li>
              <li>Запас по высоте для будущих подъёмников</li>
              <li>Возможность пристройки нового бокса в будущем</li>
              <li>Удобный подъезд клиентов и парковка</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Автосервис из ЛСТК — рабочий вариант для бизнеса, который хочет быстро выйти на самоокупаемость. Главное — не строить «коробку», а сразу проектировать под технологию работы: где подъёмники, где разводка воздуха, как клиент въезжает и выезжает. Грамотный проект окупается за счёт пропускной способности и удобства бригады.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Построим автосервис под ваш формат
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ проектирует и строит СТО любых размеров — от 2-боксовых пунктов диагностики до грузовых автокомплексов. С учётом подъёмников, ворот и инженерии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость СТО
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
