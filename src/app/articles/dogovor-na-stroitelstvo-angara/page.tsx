import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Договор на строительство ангара: что должно быть в документе | МАКСТИЛ",
  description:
    "Договор на строительство ангара под ключ: обязательные пункты, гарантии, штрафы, приёмка работ. Чек-лист для проверки договора с подрядчиком и защиты заказчика.",
  keywords: [
    "договор на строительство ангара",
    "договор подряда ангар",
    "договор строительства под ключ",
    "что должно быть в договоре подряда",
    "защита заказчика договор",
    "гарантии в договоре",
    "приёмка строительных работ",
  ],
  openGraph: {
    title: "Договор на строительство ангара: что должно быть",
    description:
      "Чек-лист обязательных пунктов договора подряда для защиты заказчика.",
    url: "https://lstkmk.ru/articles/dogovor-na-stroitelstvo-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/dogovor-na-stroitelstvo-angara/",
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
              Договор на строительство ангара: что должно быть
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>19 июня 2026</span>
              <span>•</span>
              <span>10 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Договор — главный документ, который защищает заказчика на стройке. Большинство конфликтов между подрядчиком и клиентом возникают из-за того, что в договоре «забыли» прописать важные пункты. Разбираем, что обязательно должно быть в договоре на строительство ангара.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Тип договора
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Для строительства ангара используют три типа договора:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Подряд</strong> — подрядчик строит из своих материалов и своими силами. Самая распространённая форма</li>
              <li><strong>Поставка + монтаж</strong> — заводы продают комплект металлоконструкций, заказчик ставит сам</li>
              <li><strong>EPC-контракт (под ключ)</strong> — проектирование + строительство + пусконаладка в одном договоре</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Под ключ — самый удобный вариант для заказчика, особенно для непрофильных компаний. Подрядчик несёт ответственность за весь цикл.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Обязательные пункты договора
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Предмет договора
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Должно быть указано не «строительство ангара», а конкретные параметры:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Адрес объекта</li>
              <li>Габариты (длина, ширина, высота)</li>
              <li>Состав работ (фундамент, каркас, ограждение, инженерия)</li>
              <li>Ссылка на проект и спецификацию</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Цена и порядок расчётов
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Твёрдая или приблизительная цена (предпочтительнее твёрдая)</li>
              <li>График платежей с привязкой к этапам</li>
              <li>Условия изменения цены (только в исключительных случаях)</li>
              <li>Удержания и гарантийные платежи</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Идеальная схема: 30% аванс → 30% после монтажа каркаса → 30% после монтажа ограждения → 10% после сдачи и гарантийных испытаний.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Сроки выполнения работ
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Дата начала и дата окончания</li>
              <li>Промежуточные сроки по этапам (с штрафами за нарушение)</li>
              <li>Условия переноса сроков (форс-мажор, задержка заказчика)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              4. Качество работ
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Ссылки на ГОСТы и СНиПы</li>
              <li>Требования к материалам с указанием марки и производителя</li>
              <li>Перечень исполнительной документации</li>
              <li>Право заказчика на скрытые проверки</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              5. Гарантийные обязательства
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              По законодательству РФ минимальная гарантия на строительные работы — 5 лет. На что должна распространяться гарантия:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Несущие конструкции — 10 лет</li>
              <li>Кровля и герметичность — 5 лет</li>
              <li>Полимерное покрытие профнастила — по гарантии завода</li>
              <li>Инженерные системы — 2 года</li>
              <li>Срок устранения дефектов по гарантии — не более 30 дней</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              6. Штрафные санкции
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Пени за просрочку сдачи (обычно 0,1–0,3% в день от стоимости)</li>
              <li>Штраф за нарушение качества (с обязанностью переделки)</li>
              <li>Ответственность подрядчика за нарушение требований безопасности</li>
              <li>Зеркальные санкции для заказчика за просрочку оплаты</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              7. Приёмка работ
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Порядок промежуточной приёмки этапов (КС-2, КС-3)</li>
              <li>Срок устранения замечаний после приёмки</li>
              <li>Условия итоговой приёмки и подписания акта</li>
              <li>Право заказчика привлекать независимого эксперта</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что часто забывают прописать
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Ответственность за безопасность на стройплощадке</strong> — кто отвечает за травмы рабочих</li>
              <li><strong>Хранение материалов</strong> — за чей счёт охрана</li>
              <li><strong>Подключение к инженерным сетям</strong> — какой стороны зона ответственности</li>
              <li><strong>Уборка территории</strong> после окончания работ</li>
              <li><strong>Передача документов</strong> — состав и сроки</li>
              <li><strong>Подсудность споров</strong> — суд по месту нахождения заказчика</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Приложения к договору
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Договор без приложений — не договор. Обязательные приложения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Техническое задание</li>
              <li>Проектная документация (КМ, КМД, АР, ИОС)</li>
              <li>Локальный сметный расчёт</li>
              <li>График производства работ</li>
              <li>Спецификация материалов</li>
              <li>График платежей</li>
              <li>Форма акта приёмки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Красные флаги в договоре
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Расплывчатый предмет («строительство ангара» без размеров)</li>
              <li>Возможность одностороннего изменения цены</li>
              <li>Несимметричные штрафы (есть для заказчика, нет для подрядчика)</li>
              <li>Короткая гарантия (меньше 5 лет)</li>
              <li>Отсутствие графика работ</li>
              <li>Большой аванс (50% и больше)</li>
              <li>Подсудность по месту нахождения подрядчика в другом регионе</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Когда подключать юриста
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              При стоимости работ выше 5 млн ₽ — обязательно. Юрист проверит формулировки, риски и приведёт договор в баланс между сторонами. Это 30–50 тыс. ₽ экономии, которая способна спасти миллионы при возникновении спора.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Хороший договор не делает строительство дороже, но защищает от 90% типовых конфликтов. Подрядчик, который согласен на симметричные обязательства, прозрачные сроки и понятные гарантии — это и есть надёжный партнёр. Кто отказывается — повод задуматься, нужен ли он вам вообще.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Заключим прозрачный договор
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ работает по типовому договору со всеми необходимыми приложениями и гарантиями. Открыто обсуждаем условия и готовы к симметричной ответственности.
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
