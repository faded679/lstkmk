import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Оформление ангара в собственность — кадастровый учёт и регистрация | МАКСТИЛ",
  description:
    "Как оформить ангар в собственность: постановка на кадастровый учёт, регистрация в Росреестре, документы. Пошаговая инструкция для капитальных и некапитальных объектов.",
  keywords: [
    "оформление ангара в собственность",
    "регистрация ангара",
    "кадастровый учёт ангара",
    "регистрация права на ангар",
    "технический план ангара",
  ],
  openGraph: {
    title: "Оформление ангара в собственность — кадастровый учёт и регистрация",
    description:
      "Пошаговая инструкция по регистрации ангара в собственность в 2026 году.",
    url: "https://lstkmk.ru/articles/oformlenie-angara-v-sobstvennost/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/oformlenie-angara-v-sobstvennost/",
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
              Документы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Оформление ангара в собственность — кадастровый учёт и регистрация
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Построенный ангар — это ещё не ваша собственность в юридическом смысле. Без регистрации в ЕГРН здание нельзя продать, сдать в аренду официально или использовать как залог. Разбираем процедуру от получения разрешения до выписки из Росреестра.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Капитальный ангар или некапитальный — в чём разница
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              От классификации зависит весь процесс оформления:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Критерий</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Капитальный</th>
                    <th className="text-left py-3 font-semibold text-foreground">Некапитальный</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Фундамент</td>
                    <td className="py-3 pr-4">Монолитный / ленточный / свайный</td>
                    <td className="py-3">Бетонные блоки, без заглубления</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Возможность переноса</td>
                    <td className="py-3 pr-4">Невозможен без разрушения</td>
                    <td className="py-3">Разборка и перенос реальны</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Регистрация</td>
                    <td className="py-3 pr-4">Обязательна в ЕГРН</td>
                    <td className="py-3">Не подлежит регистрации</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Разрешение на строительство</td>
                    <td className="py-3 pr-4">Требуется (или уведомление)</td>
                    <td className="py-3">Не требуется</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Большинство ангаров из ЛСТК на фундаменте — капитальные объекты. Их нужно ставить на кадастровый учёт и регистрировать право собственности.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Пошаговый порядок оформления
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 1. Разрешение на строительство (до начала работ)
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Для объектов площадью свыше 1500 м² или более 2 этажей получают разрешение на строительство через местную администрацию. Для объектов меньше — достаточно уведомления о начале строительства (ст. 51.1 ГрК РФ).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 2. Строительство и исполнительная документация
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              В процессе строительства подрядчик формирует:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Акты скрытых работ (фундаменты, закладные)</li>
              <li>Исполнительные схемы</li>
              <li>Сертификаты на материалы</li>
              <li>Акт приёмки законченного строительством объекта</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 3. Уведомление о завершении строительства
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Подаётся в администрацию в течение 30 дней после окончания работ. К уведомлению прикладывается технический план здания. Администрация проверяет соответствие параметрам и выдаёт уведомление о соответствии.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 4. Технический план
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Заказывается у кадастрового инженера. Стоимость — 15–40 тыс. ₽ в зависимости от площади. Инженер выезжает на объект, проводит обмеры и формирует XML-файл для Росреестра.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 5. Постановка на кадастровый учёт
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Заявление подаётся через МФЦ или портал Росреестра. Срок рассмотрения — 5–12 рабочих дней. Результат — присвоение кадастрового номера.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Шаг 6. Регистрация права собственности
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Подаётся одновременно с кадастровым учётом или отдельно. Госпошлина: 2000 ₽ для физлиц, 22 000 ₽ для юрлиц. Результат — выписка из ЕГРН с указанием собственника.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Необходимые документы
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Правоустанавливающий документ на земельный участок</li>
              <li>Уведомление о соответствии (или разрешение на ввод в эксплуатацию)</li>
              <li>Технический план здания (на диске)</li>
              <li>Заявление о кадастровом учёте и регистрации права</li>
              <li>Квитанция об оплате госпошлины</li>
              <li>Доверенность (если подаёт представитель)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сроки и стоимость оформления
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этап</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Срок</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Технический план</td>
                    <td className="py-3 pr-4">5–10 дней</td>
                    <td className="py-3">15 000 – 40 000 ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Кадастровый учёт</td>
                    <td className="py-3 pr-4">5–12 рабочих дней</td>
                    <td className="py-3">Бесплатно</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Регистрация права</td>
                    <td className="py-3 pr-4">7–9 рабочих дней</td>
                    <td className="py-3">22 000 ₽ (юрлицо)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Итого</td>
                    <td className="py-3 pr-4 font-medium">3–5 недель</td>
                    <td className="py-3 font-medium">37 000 – 62 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Частые проблемы
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Несоответствие ВРИ земли:</strong> если участок «для ИЖС», а построен промышленный ангар — откажут. Нужно изменить ВРИ до строительства</li>
              <li><strong>Самовольная постройка:</strong> если строили без уведомления — оформление только через суд</li>
              <li><strong>Выход за границы участка:</strong> ангар должен соответствовать отступам от границ (3 м и более)</li>
              <li><strong>Отсутствие межевания:</strong> без установленных координат участка кадастровый инженер не привяжет здание</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Оформление ангара в собственность — процедура на 3–5 недель и 40–60 тыс. ₽. Главное — позаботиться о документах на этапе строительства: уведомление, исполнительная документация, технический план. Тогда регистрация проходит без проблем.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары с полным комплектом документов для постановки на учёт. Поможем с уведомлениями и взаимодействием с администрацией.
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
                <Link href="/articles/nalog-na-angar/" className="text-accent-blue hover:underline">
                  Налог на ангар и производственное здание — что платить в 2026
                </Link>
              </li>
              <li>
                <Link href="/articles/strahovanie-angara/" className="text-accent-blue hover:underline">
                  Страхование ангара и склада — риски и стоимость
                </Link>
              </li>
              <li>
                <Link href="/articles/kredit-na-stroitelstvo-angara/" className="text-accent-blue hover:underline">
                  Строительство ангара в кредит — программы и условия 2026
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
