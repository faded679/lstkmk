import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Коровник на 50 голов из ЛСТК под ключ | Цена и проект | МАКСТИЛ",
  description:
    "Проекты и строительство коровников на 50 голов из ЛСТК. Быстровозводимые фермы под ключ: цена, сроки, технологии. Звоните для расчета!",
  keywords: [
    "коровник на 50 голов",
    "коровник 50 голов цена",
    "строительство коровника 50 голов",
    "быстровозводимый коровник 50 голов",
    "коровник из ЛСТК 50 голов",
    "проект коровника 50 голов",
    "ферма КРС 50 голов",
    "коровник металлоконструкции",
  ],
  openGraph: {
    title: "Коровник на 50 голов из ЛСТК под ключ",
    description:
      "Проектирование и строительство коровников на 50 голов. Рассчитайте стоимость онлайн!",
    url: "https://lstkmk.ru/articles/korovnik-na-50-golov/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/korovnik-na-50-golov/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Коровник на 50 голов из ЛСТК: проект, цена, строительство под ключ",
  description: "Полное руководство по строительству коровника на 50 голов из металлоконструкций ЛСТК",
  author: {
    "@type": "Organization",
    name: "МАКСТИЛ",
  },
  publisher: {
    "@type": "Organization",
    name: "МАКСТИЛ",
    logo: {
      "@type": "ImageObject",
      url: "https://lstkmk.ru/logo-makstil-new.png",
    },
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
      name: "Сколько стоит коровник на 50 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость коровника на 50 голов из ЛСТК — от 2,5 до 4,5 млн рублей под ключ. Цена зависит от утепления, вентиляции и региона строительства.",
      },
    },
    {
      "@type": "Question",
      name: "Какая площадь нужна для коровника на 50 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Минимальная площадь для коровника на 50 голов — 300–350 м². Рекомендуемая — 400–450 м² с учетом доярни, кормохранилища и помещения для телят.",
      },
    },
    {
      "@type": "Question",
      name: "Сроки строительства коровника на 50 голов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Строительство коровника на 50 голов из ЛСТК занимает 30–45 дней. Монтаж каркаса — 7–10 дней, утепление и инженерия — 15–20 дней.",
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
              Коровник на 50 голов из ЛСТК под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>16 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <img
            src="/knowledge/cow-farm-2.png"
            alt="Коровник из металлоконструкций — вид сверху"
            className="w-full rounded-lg mb-10"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Коровник на 50 голов — оптимальный вариант для семейной фермы или небольшого сельхозпредприятия. Строительство из ЛСТК позволяет возвести современное помещение за 30–45 дней при экономии до 40% по сравнению с капитальным строительством.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Проект коровника на 50 голов: ключевые параметры
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              При проектировании коровника на 50 голов КРС учитываем нормы содержания, требования ветеринарного надзора и удобство обслуживания. Стандартный проект включает зону содержания, молочный блок, помещение для телят и кормораздаточную.
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
                    <td className="py-3 pr-4">1 565 м² (32,6×48 м)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Размеры (ширина × длина)</td>
                    <td className="py-3 pr-4">32,6×48 м (фиксированная ширина)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Высота в коньке</td>
                    <td className="py-3 pr-4">4 м</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Норма площади на голову</td>
                    <td className="py-3 pr-4">6–7 м²</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Тип привязи</td>
                    <td className="py-3 pr-4">Беспривязное или троссовое</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Вентиляция</td>
                    <td className="py-3 pr-4">Приточно-вытяжная с рекуперацией</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Составляющие проекта коровника
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Современный коровник на 50 голов включает следующие функциональные зоны:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Секция содержания коров</strong> — 250–300 м², боксы или глубокая подстилка</li>
              <li><strong>Доярня/молочный блок</strong> — 30–40 м², доильный зал или аппараты</li>
              <li><strong>Помещение для телят</strong> — 40–50 м², индивидуальные боксы или групповое содержание</li>
              <li><strong>Кормораздаточная</strong> — 20–30 м², зона хранения и подготовки кормов</li>
              <li><strong>Санпропускник</strong> — 10–15 м², обязательное требование ветнадзора</li>
              <li><strong>Технические помещения</strong> — 20 м², насосная, электрощитовая</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость коровника на 50 голов
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цена строительства коровника на 50 голов зависит от комплектации, утепления и региона. Предлагаем три варианта комплектации:
            </p>

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
                    <td className="py-3 pr-4 font-medium">Эконом</td>
                    <td className="py-3 pr-4">Каркас ЛСТК, профнастил, минимальное утепление</td>
                    <td className="py-3 text-green-600 font-semibold">от 2,5 млн ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">Стандарт</td>
                    <td className="py-3 pr-4">Каркас ЛСТК, сэндвич-панели 100 мм, вентиляция</td>
                    <td className="py-3 text-green-600 font-semibold">от 3,5 млн ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Премиум</td>
                    <td className="py-3 pr-4">Каркас ЛСТК, сэндвич-панели 150 мм, климат-контроль, автоматизация</td>
                    <td className="py-3 text-green-600 font-semibold">от 4,5 млн ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              В стоимость входит: проектирование, изготовление металлоконструкций, фундамент, монтаж, утепление, кровля, вентиляция, электрика, отопление.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Преимущества коровника из ЛСТК
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Быстрое строительство</strong> — 30–45 дней вместо 6–12 месяцев для капитального здания</li>
              <li><strong>Экономия на фундаменте</strong> — легкий каркас не требует мощного основания</li>
              <li><strong>Легкая модернизация</strong> — можно пристроить дополнительную секцию или надстроить второй этаж</li>
              <li><strong>Низкая теплопроводность</strong> — сэндвич-панели сохраняют тепло зимой и прохладу летом</li>
              <li><strong>Долговечность</strong> — оцинкованный каркас служит 50+ лет без коррозии</li>
              <li><strong>Соответствие нормам</strong> — проекты согласованы с ветеринарными требованиями</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Вентиляция и микроклимат
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Правильная вентиляция — ключ к здоровью стада и производительности. Для коровника на 50 голов проектируем приточно-вытяжную систему с расходом воздуха 150–200 м³/ч на каждую голову. Летом работают воздушные клапаны и вентиляторы, зимой — рекуператоры для экономии тепла.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Этапы строительства коровника
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted mb-6">
              <li><strong>Проектирование (5–7 дней)</strong> — разработка ТЭП, согласование с ветнадзором</li>
              <li><strong>Подготовка площадки (3–5 дней)</strong> — расчистка, разметка, геодезия</li>
              <li><strong>Фундамент (7–10 дней)</strong> — ленточный мелкозаглубленный или свайно-ростверковый</li>
              <li><strong>Монтаж каркаса (7–10 дней)</strong> — сборка ЛСТК-конструкций болтами</li>
              <li><strong>Утепление и обшивка (10–15 дней)</strong> — монтаж сэндвич-панелей, кровля</li>
              <li><strong>Инженерные системы (5–7 дней)</strong> — вентиляция, электрика, отопление, водоснабжение</li>
              <li><strong>Отделка и пусконаладка (3–5 дней)</strong> — укладка полов, установка оборудования</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Документация и разрешения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Коровник на 50 голов относится к объектам, не требующим разрешения на строительство — достаточно уведомления о начале строительства (с 2021 года). Но для ввода в эксплуатацию нужно получить:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Заключение ветеринарной экспертизы проекта</li>
              <li>Акт ветеринарно-санитарной экспертизы помещений</li>
              <li>Разрешение на ввод в эксплуатацию (при необходимости)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4 mb-8">
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Сколько стоит коровник на 50 голов?</h3>
                <p className="text-muted">Стоимость коровника на 50 голов из ЛСТК — от 2,5 до 4,5 млн рублей под ключ. Цена зависит от утепления, вентиляции и региона строительства.</p>
              </div>
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Какая площадь нужна для коровника на 50 голов?</h3>
                <p className="text-muted">Минимальная площадь для коровника на 50 голов — 300–350 м². Рекомендуемая — 400–450 м² с учетом доярни, кормохранилища и помещения для телят.</p>
              </div>
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Сроки строительства коровника на 50 голов?</h3>
                <p className="text-muted">Строительство коровника на 50 голов из ЛСТК занимает 30–45 дней. Монтаж каркаса — 7–10 дней, утепление и инженерия — 15–20 дней.</p>
              </div>
              <div className="border-b border-border/50 pb-4">
                <h3 className="font-semibold text-foreground mb-2">Нужно ли разрешение на строительство?</h3>
                <p className="text-muted">Нет, коровник на 50 голов не требует разрешения — достаточно уведомления. Но для ввода в эксплуатацию нужна ветеринарная экспертиза.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Похожие проекты
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Link href="/articles/korovnik-na-100-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 100 голов</h3>
                <p className="text-sm text-muted">Проект и строительство под ключ</p>
              </Link>
              <Link href="/articles/korovnik-na-200-golov/" className="block p-4 border border-border rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Коровник на 200 голов</h3>
                <p className="text-sm text-muted">Коммерческая ферма КРС</p>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border bg-slate-50 -mx-6 lg:-mx-10 px-6 lg:px-10 py-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Рассчитать стоимость коровника на 50 голов
            </h3>
            <p className="text-muted mb-6">
              Оставьте заявку — наш инженер рассчитает точную стоимость с учетом вашего региона, типа почвы и требований к микроклимату. Бесплатный выезд на участок в радиусе 300 км от Белгорода.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="tel:+79606322061"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-white transition-colors"
              >
                Позвонить: +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
