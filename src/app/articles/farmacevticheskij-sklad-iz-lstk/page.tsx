import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Фармацевтический склад из ЛСТК — чистые помещения и стандарты GMP | МАКСТИЛ",
  description:
    "Фармацевтический склад из ЛСТК: требования GMP, чистые зоны, климат-контроль, зонирование. Проектирование и строительство склада для лекарств.",
  keywords: [
    "фармацевтический склад",
    "чистые помещения GMP",
    "склад для лекарств ЛСТК",
    "фармсклад строительство",
    "склад GDP",
  ],
  openGraph: {
    title: "Фармацевтический склад из ЛСТК — чистые помещения и стандарты GMP",
    description:
      "Как построить фармацевтический склад из ЛСТК с соблюдением стандартов GMP/GDP.",
    url: "https://lstkmk.ru/articles/farmacevticheskij-sklad-iz-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/farmacevticheskij-sklad-iz-lstk/",
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
              Фармацевтический склад из ЛСТК — чистые помещения и стандарты GMP
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Фармацевтический склад — это не просто помещение с кондиционером. Здесь нормируются температура (±0,5 °C), влажность, чистота воздуха, а нарушение условий хранения ведёт к отзыву лицензии. ЛСТК позволяет построить такой объект за 4–6 месяцев с полным соблюдением стандартов GDP/GMP.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Нормативные требования
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Хранение лекарств регулируется:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Приказ Минздрава №706н</strong> — правила хранения лекарственных средств</li>
              <li><strong>GDP (Good Distribution Practice)</strong> — надлежащая дистрибьюторская практика</li>
              <li><strong>GMP (Good Manufacturing Practice)</strong> — для производственных складов</li>
              <li><strong>ОФС.1.1.0010.18</strong> — требования к условиям хранения (Фармакопея)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Температурные зоны
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Зона</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Температура</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что хранится</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Общая</td>
                    <td className="py-3 pr-4">+15…+25 °C</td>
                    <td className="py-3">Большинство лекарств, БАД</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Прохладная</td>
                    <td className="py-3 pr-4">+8…+15 °C</td>
                    <td className="py-3">Суппозитории, мази, некоторые р-ры</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Холодная</td>
                    <td className="py-3 pr-4">+2…+8 °C</td>
                    <td className="py-3">Вакцины, инсулин, биопрепараты</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Морозильная</td>
                    <td className="py-3 pr-4">−18…−20 °C</td>
                    <td className="py-3">Отдельные биопрепараты</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Каждая зона — отдельное изолированное помещение со своей климатической установкой и системой мониторинга.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Конструктивные решения
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Каркас и ограждения
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>ЛСТК-каркас с сэндвич-панелями 100–150 мм (основная зона)</li>
              <li>Холодильные камеры — панели PIR 120–200 мм с замковым соединением</li>
              <li>Внутренние перегородки — сэндвич-панели с гладкой моющейся поверхностью</li>
              <li>Полы — эпоксидное или полиуретановое покрытие (беспыльное, моющееся)</li>
              <li>Потолки — подвесные панели с гладкой поверхностью или оштукатуренные</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Климат-контроль
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Прецизионные кондиционеры — точность ±0,5 °C</li>
              <li>Резервирование: N+1 (при выходе одного блока — автопереключение)</li>
              <li>Увлажнение/осушение воздуха — поддержание влажности 30–60 %</li>
              <li>Фильтрация воздуха: F7–F9 (для чистых зон — H13/H14 HEPA)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Система мониторинга температуры
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Обязательное требование GDP — непрерывный мониторинг с архивированием данных:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Датчики температуры и влажности во всех зонах (шаг 1 датчик на 50–100 м²)</li>
              <li>Запись данных каждые 5–15 минут</li>
              <li>SMS/email-оповещение при отклонении от нормы</li>
              <li>Резервный источник питания для системы мониторинга (ИБП на 24+ часов)</li>
              <li>Валидация системы — термокартирование склада (3 сезона: зима, лето, межсезонье)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Зонирование склада
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Зона приёмки:</strong> входной контроль, шлюз с перегрузкой на складскую тару</li>
              <li><strong>Зона хранения:</strong> стеллажи с адресным хранением, разделение по температурам</li>
              <li><strong>Зона карантина:</strong> изолированная, для препаратов до проверки качества</li>
              <li><strong>Зона отгрузки:</strong> докшелтеры с тепловыми завесами</li>
              <li><strong>Зона брака:</strong> отдельное запираемое помещение</li>
              <li><strong>Сильнодействующие/наркотические:</strong> сейфовая комната с двойным контролем доступа</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость строительства
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена, ₽/м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Что входит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Каркас + ограждения</td>
                    <td className="py-3 pr-4 font-medium">18 000 – 25 000</td>
                    <td className="py-3">Здание без инженерии</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">+ климат и мониторинг</td>
                    <td className="py-3 pr-4 font-medium">35 000 – 50 000</td>
                    <td className="py-3">Прецизионная климатика, датчики</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Под ключ (GDP-ready)</td>
                    <td className="py-3 pr-4 font-medium">55 000 – 80 000</td>
                    <td className="py-3">+ валидация, полы, стеллажи, СКУД</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему ЛСТК подходит для фармскладов
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Герметичность:</strong> сэндвич-панели с замковым соединением — минимальная инфильтрация</li>
              <li><strong>Чистота:</strong> нет мокрых процессов при строительстве — меньше пыли на этапе ввода</li>
              <li><strong>Скорость:</strong> 4–6 месяцев vs 12–18 для капитального здания</li>
              <li><strong>Гибкость:</strong> можно добавить холодильные камеры без реконструкции каркаса</li>
              <li><strong>Гладкие поверхности:</strong> панели не требуют штукатурки — сразу готовы к мойке</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Фармацевтический склад из ЛСТК — это сочетание скорости строительства и соответствия жёстким нормативам GDP/GMP. Ключевые вложения — климатическое оборудование и система мониторинга (50–60 % бюджета). Каркас ЛСТК обеспечивает герметичность и чистоту, необходимые для прохождения лицензирования.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем и строим специализированные склады с климат-контролем. Опыт работы с фармацевтическими и пищевыми объектами.
            </p>
            <p className="text-muted mb-6">
              Телефон: <a href="tel:+74722400854" className="text-accent-blue hover:underline">+7 (4722) 40-08-54</a> · Email: <a href="mailto:info@lstkmk.ru" className="text-accent-blue hover:underline">info@lstkmk.ru</a>
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

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Читайте также
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/data-centr-iz-metallokonstrukcij/" className="text-accent-blue hover:underline">
                  Дата-центр из металлоконструкций — ЦОД под ключ
                </Link>
              </li>
              <li>
                <Link href="/articles/umnyj-angar/" className="text-accent-blue hover:underline">
                  Умный ангар — автоматизация ворот, климата и освещения
                </Link>
              </li>
              <li>
                <Link href="/articles/energoeffektivnyj-angar/" className="text-accent-blue hover:underline">
                  Энергоэффективные ангары — как снизить затраты на отопление
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
