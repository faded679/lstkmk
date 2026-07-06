import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Умный ангар — автоматизация ворот, климата и освещения | МАКСТИЛ",
  description:
    "Умный ангар: автоматизация ворот, управление климатом и освещением, датчики безопасности. Какие системы внедрить и сколько это стоит в 2026 году.",
  keywords: [
    "умный ангар",
    "автоматизация ангара",
    "автоматические ворота",
    "умный склад",
    "автоматизация склада",
  ],
  openGraph: {
    title: "Умный ангар — автоматизация ворот, климата и освещения",
    description:
      "Системы автоматизации для ангаров и складов: от ворот до климат-контроля.",
    url: "https://lstkmk.ru/articles/umnyj-angar/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/umnyj-angar/",
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
              Умный ангар — автоматизация ворот, климата и освещения
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Автоматизация ангара — это не футуризм, а конкретная экономия: снижение расходов на электроэнергию на 20–40 %, сокращение штата обслуживающего персонала и мгновенная реакция на аварии. Разбираем, какие системы внедряются в 2026 году и сколько это стоит.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что автоматизируют в ангарах
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Система</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Что даёт</th>
                    <th className="text-left py-3 font-semibold text-foreground">Экономия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Освещение</td>
                    <td className="py-3 pr-4">Зональное включение по датчикам присутствия</td>
                    <td className="py-3">30–50 % электроэнергии</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Ворота</td>
                    <td className="py-3 pr-4">Автооткрытие при подъезде транспорта</td>
                    <td className="py-3">15–25 % теплопотерь</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Климат</td>
                    <td className="py-3 pr-4">Поддержание заданной температуры/влажности</td>
                    <td className="py-3">20–35 % на отоплении</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Безопасность</td>
                    <td className="py-3 pr-4">Видеонаблюдение, контроль доступа, пожарная</td>
                    <td className="py-3">Снижение потерь от краж</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Мониторинг конструкций</td>
                    <td className="py-3 pr-4">Датчики деформаций, снеговой нагрузки</td>
                    <td className="py-3">Предотвращение аварий</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Автоматизация освещения
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Типовой ангар потребляет 20–50 кВт на освещение. При автоматизации:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Датчики присутствия:</strong> свет включается только в зонах, где есть люди или техника</li>
              <li><strong>Датчики освещённости:</strong> днём мощность снижается при естественном свете через светопрозрачные вставки</li>
              <li><strong>Зонирование:</strong> ангар делится на 4–8 зон с независимым управлением</li>
              <li><strong>Диммирование:</strong> плавная регулировка мощности LED-светильников</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стоимость системы для ангара 1000 м²: 200–400 тыс. ₽. Окупаемость: 1,5–2,5 года.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Автоматические ворота
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Варианты автоматизации:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Индукционные петли:</strong> определяют подъезжающий транспорт за 5–10 м</li>
              <li><strong>Радарные датчики:</strong> работают в любую погоду, реагируют на движение</li>
              <li><strong>RFID-метки:</strong> ворота открываются только для авторизованного транспорта</li>
              <li><strong>Скоростные ворота:</strong> открытие за 1–2 сек, минимизация теплопотерь</li>
              <li><strong>Синхронизация с тепловой завесой:</strong> завеса включается до открытия ворот</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Управление климатом
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Система климат-контроля объединяет:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Датчики температуры (внутри, снаружи, в разных зонах)</li>
              <li>Датчики влажности — критично для складов пищевой продукции</li>
              <li>Контроллер отопления — модулирует мощность котла/обогревателей</li>
              <li>Управление вентиляцией — частотные преобразователи на вентиляторах</li>
              <li>Потолочные вентиляторы — включаются при перепаде температур верх/низ &gt; 5 °C</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Стоимость: 300–700 тыс. ₽ для ангара 1000 м². Экономия: 150–300 тыс. ₽/год на отоплении.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Мониторинг конструкций
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Инновационное направление для ответственных объектов:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Тензодатчики на фермах:</strong> фиксируют напряжения в критических узлах</li>
              <li><strong>Датчики снеговой нагрузки:</strong> весовые ячейки на кровле — оповещение при превышении 80 % расчётной нагрузки</li>
              <li><strong>Инклинометры:</strong> контролируют наклон колонн (допустимо ≤ 1/500 высоты)</li>
              <li><strong>Температурные датчики на металле:</strong> раннее обнаружение пожара</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Единая система управления (BMS)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Building Management System объединяет все подсистемы в одном интерфейсе:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Визуализация параметров на экране или в мобильном приложении</li>
              <li>Автоматические сценарии: «ночной режим», «выходной», «аварийный»</li>
              <li>SMS/push-уведомления при отклонениях от нормы</li>
              <li>Журналирование данных — для анализа энергопотребления</li>
              <li>Удалённое управление — можно управлять объектом из любой точки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Стоимость комплексной автоматизации
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Уровень</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Что входит</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена (1000 м²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Базовый</td>
                    <td className="py-3 pr-4">Автоосвещение + авторота</td>
                    <td className="py-3">400–700 тыс. ₽</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Стандарт</td>
                    <td className="py-3 pr-4">+ климат-контроль + видеонаблюдение</td>
                    <td className="py-3">800–1 500 тыс. ₽</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Продвинутый</td>
                    <td className="py-3 pr-4">+ BMS + мониторинг конструкций</td>
                    <td className="py-3">1 500–3 000 тыс. ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Автоматизация ангара окупается за 2–4 года за счёт экономии на электричестве, отоплении и персонале. Начать можно с освещения и ворот (минимальные вложения, быстрый эффект), а затем масштабировать до полноценной BMS.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем ангары с закладными под автоматизацию: кабельные трассы, ниши для щитов, крепления датчиков. Это дешевле, чем добавлять потом.
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
                <Link href="/articles/energoeffektivnyj-angar/" className="text-accent-blue hover:underline">
                  Энергоэффективные ангары — как снизить затраты на отопление
                </Link>
              </li>
              <li>
                <Link href="/articles/data-centr-iz-metallokonstrukcij/" className="text-accent-blue hover:underline">
                  Дата-центр из металлоконструкций — ЦОД под ключ
                </Link>
              </li>
              <li>
                <Link href="/articles/trendy-lstk-2026/" className="text-accent-blue hover:underline">
                  Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
