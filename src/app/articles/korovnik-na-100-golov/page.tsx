import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Коровник на 100 голов из ЛСТК под ключ | Цена и проект | МАКСТИЛ",
  description:
    "Проектирование и строительство коровников на 100 голов КРС из ЛСТК. Коммерческие фермы под ключ: цены, сроки, вентиляция. Рассчитайте стоимость!",
  keywords: [
    "коровник на 100 голов",
    "коровник 100 голов цена",
    "строительство коровника 100 голов",
    "коммерческий коровник ЛСТК",
    "коровник из ЛСТК 100 голов",
    "проект коровника 100 голов",
    "ферма КРС 100 голов",
    "молочная ферма 100 голов",
  ],
  openGraph: {
    title: "Коровник на 100 голов из ЛСТК под ключ",
    description:
      "Коммерческий проект коровника на 100 голов. Быстровозводимые фермы с полным комплексом инженерии.",
    url: "https://lstkmk.ru/articles/korovnik-na-100-golov/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/korovnik-na-100-golov/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Коровник на 100 голов из ЛСТК: проектирование и строительство под ключ",
  description: "Коммерческий проект коровника на 100 голов КРС с вентиляцией и автоматизацией",
  author: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  publisher: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит коровник на 100 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость коровника на 100 голов из ЛСТК — от 4,5 до 8 млн рублей под ключ. Цена включает вентиляцию, доильный зал и систему навозоудаления.",
      },
    },
    {
      "@type": "Question",
      name: "Какая площадь нужна для коровника на 100 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для коровника на 100 голов требуется 650–800 м². Это включает секцию содержания, доильный зал, помещение для телят и кормораздаточную.",
      },
    },
    {
      "@type": "Question",
      name: "Какая вентиляция нужна для коровника на 100 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для коровника на 100 голов проектируют приточно-вытяжную вентиляцию с расходом 15 000–20 000 м³/ч. Рекомендуется рекуперация тепла и автоматический климат-контроль.",
      },
    },
  ],
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
              Сельхозздания
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Коровник на 100 голов из ЛСТК под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>16 июня 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Коровник на 100 голов — это уже коммерческий объект, требующий продуманной инженерии и автоматизации. Строительство из ЛСТК позволяет создать современную ферму с полным комплексом систем: вентиляция, навозоудаление, автоматическое доение.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Проект коровника на 100 голов
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для коммерческого стада в 100 голов проектируем здание с учетом продуктивности животных и автоматизации процессов. Стандартный проект включает беспривязное содержание, навесную доильную систему или доильный зал, а также полный комплекс инженерного обеспечения.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Площадь здания</td>
                    <td className="py-3 pr-4">720–840 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Размеры (ширина × длина)</td>
                    <td className="py-3 pr-4">24×30 м или 30×24 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Высота в коньке</td>
                    <td className="py-3 pr-4">4–5 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Норма площади на голову</td>
                    <td className="py-3 pr-4">6–7 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Система доения</td>
                    <td className="py-3 pr-4">Навесной аппарат или доильный зал</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Навозоудаление</td>
                    <td className="py-3 pr-4">Скребковый транспортер или канал</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Состав проекта
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Секция содержания</strong> — 500–600 м², боксовое или беспривязное содержание</li>
              <li><strong>Доильный зал</strong> — 40–60 м², на 6–12 мест, тандем или елочка</li>
              <li><strong>Молочный блок</strong> — 30–40 м², холодильное оборудование, промывка</li>
              <li><strong>Помещение для телят</strong> — 80–100 м², групповое или индивидуальное</li>
              <li><strong>Кормораздаточная</strong> — 40–50 м², хранение кормов, смесители</li>
              <li><strong>Санпропускник</strong> — 15–20 м², душевая, дезбарьер</li>
              <li><strong>Технические помещения</strong> — 30 м², насосная, щитовая, компрессорная</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Инженерные системы
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для коровника на 100 голов критически важны инженерные системы. Рассчитываем каждую под конкретный проект:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Вентиляция и микроклимат</h3>
            <p className="text-muted leading-relaxed mb-4">
              Проектируем приточно-вытяжную систему с расходом 15 000–20 000 м³/ч. Летом работают воздушные клапаны и вытяжные вентиляторы, зимой — рекуператоры воздуха с подогревом. Температура в помещении поддерживается +8...+12°C зимой, не выше +20°C летом.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Навозоудаление</h3>
            <p className="text-muted leading-relaxed mb-4">
              Для стада в 100 голов ежедневно образуется 2–3 тонны навоза. Проектируем скребковые транспортеры или канальную систему удаления с накопителем. Можно организовать переработку в биогаз или компост.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Отопление и водоснабжение</h3>
            <p className="text-muted leading-relaxed mb-4">
              Отопление — водяное с теплогенератором или электрическое. Горячая вода для промывки доильного оборудования — бойлер на 500–1000 л. Автопоилки на 100 голов — минимум 6 точек, лучше 8.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость коровника на 100 голов
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Комплектация</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Состав</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена под ключ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Базовая</td>
                    <td className="py-3 pr-4">Каркас, панели 100 мм, вентиляция, навесное доение</td>
                    <td className="py-3 text-green-600 font-semibold">от 4,5 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Стандарт</td>
                    <td className="py-3 pr-4">+ Доильный зал на 6 мест, панели 150 мм, автопоилки</td>
                    <td className="py-3 text-green-600 font-semibold">от 6 млн ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Премиум</td>
                    <td className="py-3 pr-4">+ Климат-контроль, скребковый транспортер, молочный блок</td>
                    <td className="py-3 text-green-600 font-semibold">от 8 млн ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сроки строительства
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted mb-6">
              <li><strong>Проектирование (10–15 дней)</strong> — ТЭП, ветэкспертиза, согласования</li>
              <li><strong>Подготовка площадки (5–7 дней)</strong> — расчистка, геодезия, разметка</li>
              <li><strong>Фундамент (10–15 дней)</strong> — ленточный мелкозаглубленный или свайно-ростверковый</li>
              <li><strong>Монтаж каркаса (10–12 дней)</strong> — сборка ЛСТК, установка ферм</li>
              <li><strong>Утепление и кровля (15–20 дней)</strong> — сэндвич-панели, гидроизоляция</li>
              <li><strong>Инженерия (15–20 дней)</strong> — вентиляция, отопление, электрика, доильное оборудование</li>
              <li><strong>Запуск (5–7 дней)</strong> — наладка, пусконаладка, обучение персонала</li>
            </ol>
            <p className="text-muted leading-relaxed mb-6">
              <strong>Итого:</strong> 60–90 дней от проекта до запуска стада.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Лицензии и разрешения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для коровника на 100 голов потребуется:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Ветеринарное заключение на проект</li>
              <li>Уведомление о начале строительства (вместо разрешения)</li>
              <li>Акт ветеринарно-санитарной экспертизы помещений</li>
              <li>Декларация соответствия техническому регламенту ТР ТС 029/2012</li>
              <li>Разрешение на ввод в эксплуатацию (при необходимости)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4 mb-8">
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Сколько стоит коровник на 100 голов?</h3>
                <p className="text-muted">Стоимость коровника на 100 голов из ЛСТК — от 4,5 до 8 млн рублей под ключ. Цена включает вентиляцию, доильный зал и систему навозоудаления.</p>
              </div>
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Какая площадь нужна для коровника на 100 голов?</h3>
                <p className="text-muted">Для коровника на 100 голов требуется 650–800 м². Это включает секцию содержания, доильный зал, помещение для телят и кормораздаточную.</p>
              </div>
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Какая вентиляция нужна для коровника на 100 голов?</h3>
                <p className="text-muted">Для коровника на 100 голов проектируют приточно-вытяжную вентиляцию с расходом 15 000–20 000 м³/ч. Рекомендуется рекуперация тепла и автоматический климат-контроль.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Похожие проекты
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Link href="/articles/korovnik-na-50-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 50 голов</h3>
                <p className="text-sm text-muted">Для семейной фермы и небольшого стада</p>
              </Link>
              <Link href="/articles/korovnik-na-200-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 200 голов</h3>
                <p className="text-sm text-muted">Крупная коммерческая молочная ферма</p>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border bg-slate-50 -mx-6 lg:-mx-10 px-6 lg:px-10 py-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Построить коровник на 100 голов
            </h3>
            <p className="text-muted mb-6">
              Разработаем проект под ваш бюджет и требования. Бесплатный выезд инженера для замеров и консультации. Опыт строительства ферм от 50 до 500 голов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="tel:+79803211542"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-white transition-colors"
              >
                Позвонить: +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
