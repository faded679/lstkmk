import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Страхование ангара и склада — риски и стоимость | МАКСТИЛ",
  description:
    "Страхование ангара из металлоконструкций: какие риски покрывает полис, сколько стоит страховка склада, как выбрать программу. Обзор условий 2026.",
  keywords: [
    "страхование ангара",
    "страховка склада",
    "страхование металлоконструкций",
    "страхование коммерческой недвижимости",
    "риски ангара",
  ],
  openGraph: {
    title: "Страхование ангара и склада — риски и стоимость",
    description:
      "Какие риски покрывает страховка ангара и сколько стоит полис в 2026 году.",
    url: "https://lstkmk.ru/articles/strahovanie-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/strahovanie-angara/",
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
              Эксплуатация
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Страхование ангара и склада — риски и стоимость
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Ангар стоимостью 10–30 млн ₽ может быть повреждён пожаром, ураганом, снеговой нагрузкой или затоплением. Страховой полис обходится в 0,1–0,5 % от стоимости здания в год, но покрывает убытки, способные обанкротить бизнес. Разбираем, что и как страховать.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что можно застраховать
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Страхование коммерческой недвижимости охватывает несколько объектов:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Конструктив здания</strong> — каркас, ограждающие конструкции, кровля, фундамент</li>
              <li><strong>Инженерные системы</strong> — электрика, вентиляция, отопление, ворота</li>
              <li><strong>Содержимое</strong> — товары, оборудование, сырьё внутри ангара</li>
              <li><strong>Гражданская ответственность</strong> — ущерб третьим лицам (падение кровли на чужое имущество)</li>
              <li><strong>Упущенная выгода</strong> — потери дохода на период восстановления</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Какие риски покрывает полис
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Риск</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Типичный ущерб</th>
                    <th className="text-left py-3 font-semibold text-foreground">Покрытие</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Пожар, взрыв</td>
                    <td className="py-3 pr-4">Полное уничтожение</td>
                    <td className="py-3">Базовый пакет</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ураган, смерч (ветер &gt; 20 м/с)</td>
                    <td className="py-3 pr-4">Срыв кровли, деформация каркаса</td>
                    <td className="py-3">Базовый пакет</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Снеговая нагрузка сверх нормы</td>
                    <td className="py-3 pr-4">Прогиб/обрушение кровли</td>
                    <td className="py-3">Расширенный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Затопление</td>
                    <td className="py-3 pr-4">Повреждение содержимого и полов</td>
                    <td className="py-3">Расширенный</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Противоправные действия третьих лиц</td>
                    <td className="py-3 pr-4">Вандализм, кража элементов</td>
                    <td className="py-3">Расширенный</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Наезд транспорта</td>
                    <td className="py-3 pr-4">Повреждение стен, ворот</td>
                    <td className="py-3">Расширенный</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сколько стоит страхование ангара
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Тариф зависит от конструктива, региона, противопожарных мер и набора рисков:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 font-semibold text-foreground">Влияние на тариф</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Материал (металл vs дерево)</td>
                    <td className="py-3">Металл — тариф ниже на 30–50 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Наличие пожарной сигнализации</td>
                    <td className="py-3">Скидка 10–20 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Системы пожаротушения</td>
                    <td className="py-3">Скидка 15–30 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Охрана / видеонаблюдение</td>
                    <td className="py-3">Скидка 5–15 %</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Регион (сейсмика, ветровой район)</td>
                    <td className="py-3">Надбавка 10–50 % для рисковых зон</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Ориентировочно: страхование ангара из металлоконструкций стоимостью 15 млн ₽ обойдётся в 20–60 тыс. ₽/год при базовом пакете рисков. Расширенный полис с содержимым — 80–150 тыс. ₽/год.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как определить страховую сумму
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Страховая сумма — максимальная выплата при полной гибели. Варианты оценки:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>По восстановительной стоимости</strong> — сколько стоит построить заново. Оптимальный вариант</li>
              <li><strong>По балансовой стоимости</strong> — дешевле полис, но выплата может не покрыть реальный ущерб</li>
              <li><strong>По рыночной стоимости</strong> — с учётом износа. Подходит для старых зданий</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда страхование обязательно
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Залоговое имущество:</strong> банк требует страховку объекта, взятого в кредит</li>
              <li><strong>Лизинг:</strong> лизингодатель страхует оборудование за счёт лизингополучателя</li>
              <li><strong>Арендованное помещение:</strong> арендодатель может требовать страхование ответственности арендатора</li>
              <li><strong>Хранение товаров третьих лиц:</strong> ответственность хранителя по ГК РФ</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как выбрать страховую компанию
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Рейтинг не ниже A (RAEX / Эксперт РА)</li>
              <li>Опыт работы с коммерческой/промышленной недвижимостью</li>
              <li>Наличие представителя в вашем регионе (ускоряет урегулирование)</li>
              <li>Прозрачные правила страхования — проверяйте исключения</li>
              <li>Размер франшизы — безусловная франшиза 0,5–1 % снижает тариф, но мелкие убытки не возместят</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что делать при страховом случае
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Вызвать экстренные службы (пожарные, полицию) — получить акт/справку</li>
              <li>Уведомить страховую в течение 24–72 часов (по условиям полиса)</li>
              <li>Не начинать восстановительные работы до осмотра экспертом страховой</li>
              <li>Зафиксировать ущерб фото/видео</li>
              <li>Подготовить документы: полис, акт экспертизы, смета восстановления</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Страхование ангара — это 0,1–0,5 % от его стоимости в год. При ежегодных расходах 30–100 тыс. ₽ вы защищаете актив стоимостью 10–30 млн ₽. Металлоконструкции страхуются дешевле деревянных и кирпичных зданий благодаря негорючести и предсказуемости конструктива.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Строим ангары и склады с полным комплектом документации — она упрощает оформление страховки. Проектируем системы пожаротушения, снижающие тариф.
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
                <Link href="/articles/oformlenie-angara-v-sobstvennost/" className="text-accent-blue hover:underline">
                  Оформление ангара в собственность — кадастровый учёт и регистрация
                </Link>
              </li>
              <li>
                <Link href="/articles/nalog-na-angar/" className="text-accent-blue hover:underline">
                  Налог на ангар и производственное здание — что платить в 2026
                </Link>
              </li>
              <li>
                <Link href="/articles/obsluzhivanie-angara/" className="text-accent-blue hover:underline">
                  Текущее обслуживание ангара — график осмотров и ремонтов
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
