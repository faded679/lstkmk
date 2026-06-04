import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Как выбрать подрядчика для строительства из металлоконструкций | МАКСТИЛ",
  description:
    "На что смотреть при выборе подрядчика для строительства ангара или склада из металлоконструкций: опыт, документы, договор, red flags и правильные вопросы.",
  keywords: [
    "как выбрать подрядчика строительство металлоконструкций",
    "подрядчик для строительства ангара",
    "выбор строительной компании ЛСТК",
    "как проверить строительную компанию",
    "строительство склада подрядчик",
    "критерии выбора подрядчика",
  ],
  openGraph: {
    title: "Как выбрать подрядчика для строительства из металлоконструкций",
    description:
      "Опыт, документы, договор, red flags — полный чеклист для выбора надёжной строительной компании.",
    url: "https://lstkmk.ru/articles/kak-vybrat-podryadchika-metallokonstrukcii/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/kak-vybrat-podryadchika-metallokonstrukcii/",
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
              Советы заказчику
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Как выбрать подрядчика для строительства из металлоконструкций
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>4 июня 2026</span>
              <span>•</span>
              <span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Рынок строительства металлоконструкций переполнен предложениями. Часть из них — надёжные компании с собственным производством и опытом. Часть — посредники или однодневки, которые исчезнут после аванса. Разбираем, как отличить одних от других.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Шаг 1: Проверьте юридическое лицо
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Прежде чем тратить время на переговоры, проверьте компанию по открытым источникам:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>ФНС (egrul.nalog.ru)</strong> — убедитесь, что юрлицо действующее, не в стадии ликвидации</li>
              <li><strong>Картотека арбитражных дел (kad.arbitr.ru)</strong> — много судебных дел по неисполнению договоров — тревожный сигнал</li>
              <li><strong>ФССП (fssp.gov.ru)</strong> — наличие исполнительных производств говорит о долгах</li>
              <li><strong>Дата регистрации</strong> — компания, зарегистрированная месяц назад, не имеет подтверждённого опыта</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Всё это занимает 15 минут и бесплатно. Пропустить этот шаг — значит рисковать авансом.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Шаг 2: Оцените реальный опыт
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Опыт — не цифра на сайте, а конкретные объекты. Попросите:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Портфолио с адресами реализованных объектов (не рендеры, а фото готовых зданий)</li>
              <li>Контакты 2–3 заказчиков из портфолио — позвоните и спросите напрямую</li>
              <li>Примеры объектов, близких к вашему по площади и назначению</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Компания, которая строила только жилые дома, не имеет компетенций в промышленном строительстве — это разные нагрузки, нормативы и технологии.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Шаг 3: Уточните, есть ли собственное производство
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Компании делятся на два типа: те, кто производит конструкции сам, и те, кто закупает у третьих лиц. Оба варианта могут быть рабочими, но разница существенная:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Критерий</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Собственное производство</th>
                    <th className="text-left py-3 font-semibold text-foreground">Закупка у третьих</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Контроль качества</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Полный</td>
                    <td className="py-3">Ограниченный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сроки изготовления</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Гибкие</td>
                    <td className="py-3">Зависят от поставщика</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ответственность за качество</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Единая</td>
                    <td className="py-3">Размытая</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Возможность доработки</td>
                    <td className="py-3 pr-4 text-green-600 font-medium">Быстрая</td>
                    <td className="py-3">Медленная</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Попросите показать производство — лично или по видеосвязи. Реальный завод скрывать незачем.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Шаг 4: Изучите договор
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Договор — главный документ. Обратите внимание на:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Техническое задание</strong> — должно быть приложением к договору с точными габаритами, материалами, нагрузками</li>
              <li><strong>График платежей</strong> — нормальный аванс 30–40%, не более. Требование 100% предоплаты — красный флаг</li>
              <li><strong>Сроки с привязкой к этапам</strong> — не «ориентировочно 3 месяца», а конкретные даты с штрафными санкциями</li>
              <li><strong>Гарантийные обязательства</strong> — минимум 2–3 года на конструкции, 1 год на монтажные работы</li>
              <li><strong>Порядок приёмки</strong> — как фиксируются дефекты и в какие сроки устраняются</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Шаг 5: Задайте правильные вопросы
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вопросы, которые сразу покажут уровень компании:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>По каким нормам рассчитываются конструкции? (правильный ответ: СП 260.1325800, ГОСТ 27751)</li>
              <li>Кто проектирует — штатные инженеры или подрядчики?</li>
              <li>Какая толщина оцинкования профиля? (должно быть минимум 275 г/м²)</li>
              <li>Есть ли допуск СРО на строительные работы?</li>
              <li>Как организован контроль качества сварных соединений?</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Уклончивые ответы или агрессия в ответ на вопросы — плохой знак.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Red flags: когда стоит уйти
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Называют цену без обмеров и проекта — значит, занизят и потом будут допы</li>
              <li>Нет реального портфолио с адресами объектов</li>
              <li>Требуют более 50% аванса до начала работ</li>
              <li>Не могут объяснить из каких профилей будет сделан каркас</li>
              <li>Торопят с подписанием договора, не давая времени на изучение</li>
              <li>Договор составлен на 1–2 страницы без технического задания</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог: чеклист для выбора
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Проверить юрлицо в ФНС, ФССП, картотеке арбитража</li>
              <li>Запросить портфолио с адресами и связаться с заказчиками</li>
              <li>Уточнить наличие собственного производства</li>
              <li>Попросить проект договора и изучить его заранее</li>
              <li>Запросить допуск СРО на строительные работы</li>
              <li>Задать технические вопросы по нормативам и материалам</li>
              <li>Сравнить 2–3 предложения — не только по цене, но и по составу работ</li>
            </ol>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              МАКСТИЛ — прозрачно и под ключ
            </h3>
            <p className="text-muted mb-6">
              14 лет работы, собственное производство в Белгородской области, портфолио реализованных объектов с адресами. Готовы ответить на любые вопросы — до подписания договора.
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
