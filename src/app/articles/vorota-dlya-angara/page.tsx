import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ворота для ангара: какие выбрать и сколько стоят | МАКСТИЛ",
  description:
    "Ворота для ангара: распашные, откатные, секционные, рулонные. Сравнение цен, размеров и сферы применения. Какие ворота выбрать для склада, цеха и СТО в 2026 году.",
  keywords: [
    "ворота для ангара",
    "секционные ворота",
    "промышленные ворота",
    "ворота для склада",
    "откатные ворота",
    "рулонные ворота",
    "ворота на ангар цена",
  ],
  openGraph: {
    title: "Ворота для ангара: какие выбрать",
    description:
      "Сравнение типов промышленных ворот: цены, размеры, применение.",
    url: "https://lstkmk.ru/articles/vorota-dlya-angara/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/vorota-dlya-angara/",
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
              Ворота для ангара: какие выбрать
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>20 июня 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Ворота — самая нагруженная и часто используемая часть ангара. От правильного выбора зависит удобство работы, скорость погрузки и теплопотери здания. Разбираем 4 основных типа ворот и помогаем выбрать оптимальный вариант под задачу.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Распашные ворота
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Классический и самый дешёвый вариант — две створки, открывающиеся наружу. Применяются на холодных складах, навесах, гаражах сельхозтехники. Стандартные размеры — от 3×3 до 6×4,5 м.
            </p>
            <p className="text-muted leading-relaxed mb-4"><strong>Плюсы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Самая низкая цена — от 18 000 ₽ за створку</li>
              <li>Простая установка и ремонт</li>
              <li>Работают без электричества</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4"><strong>Минусы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Требуют свободного пространства снаружи (1,5 ширины)</li>
              <li>Открываются вручную, продуваются ветром</li>
              <li>Плохая теплоизоляция</li>
              <li>В снег и наледь — заклинивают</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Откатные ворота
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Створка катится вдоль стены по верхней балке или нижнему рельсу. Применяются на больших проёмах от 4 до 12 м шириной — там, где распашные слишком тяжёлые, а секционные не подходят по высоте.
            </p>
            <p className="text-muted leading-relaxed mb-4"><strong>Плюсы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Большая ширина проёма</li>
              <li>Не зависят от снегопада</li>
              <li>Возможна автоматизация</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4"><strong>Минусы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Требуют свободной стены сбоку под створку</li>
              <li>Цена от 80 000 ₽ за ворота 4×4 м</li>
              <li>Снижают теплоизоляцию из-за зазоров</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Секционные подъёмные ворота
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Современный стандарт для отапливаемых ангаров, СТО, складов. Полотно состоит из утеплённых панелей, поднимается вверх по направляющим под потолок. Стандартные размеры — от 2,5×2,5 до 8×6 м.
            </p>
            <p className="text-muted leading-relaxed mb-4"><strong>Плюсы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Отличная теплоизоляция (панель 40–60 мм с PIR)</li>
              <li>Не занимают место снаружи и внутри</li>
              <li>Автоматизация и пульт</li>
              <li>Возможна встроенная калитка</li>
              <li>Окна для естественного освещения</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4"><strong>Минусы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Цена от 90 000 ₽ за ворота 3×3 м с автоматикой</li>
              <li>Требуют запас высоты над проёмом 30–60 см</li>
              <li>Ремонт сложнее</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Рулонные (рольставни)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Полотно из стальных или алюминиевых ламелей сворачивается в вал над проёмом. Применяются в торговых складах, паркингах, торговых ангарах — там, где нужна минимальная толщина и максимальная скорость работы.
            </p>
            <p className="text-muted leading-relaxed mb-4"><strong>Плюсы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li>Минимум места над проёмом (вал 30 см)</li>
              <li>Высокая скорость открытия (0,3–1 м/с)</li>
              <li>Лёгкая интеграция в фасад</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4"><strong>Минусы:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Слабая теплоизоляция</li>
              <li>Ламели гнутся при ударе</li>
              <li>Ширина проёма ограничена 6 м</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Скоростные рулонные ворота
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Отдельная категория — для логистических центров и пищевых производств. Полотно из армированного ПВХ, скорость подъёма 1,5–4 м/с. Открываются за 1–2 секунды по сигналу датчика. Применяются между зонами с разной температурой или там, где постоянный поток погрузчиков.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Цена — от 250 000 ₽ за проём 3×3 м. Окупаются за счёт экономии тепла и времени персонала.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сравнительная таблица
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена</th>
                    <th className="text-left py-3 font-semibold text-foreground">Применение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Распашные</td>
                    <td className="py-3 pr-4">от 18 тыс ₽</td>
                    <td className="py-3">Холодные склады</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Откатные</td>
                    <td className="py-3 pr-4">от 80 тыс ₽</td>
                    <td className="py-3">Большие проёмы</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Секционные</td>
                    <td className="py-3 pr-4">от 90 тыс ₽</td>
                    <td className="py-3">Тёплые ангары, СТО</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Рулонные</td>
                    <td className="py-3 pr-4">от 60 тыс ₽</td>
                    <td className="py-3">Торговля, фасады</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Скоростные</td>
                    <td className="py-3 pr-4">от 250 тыс ₽</td>
                    <td className="py-3">Логистика, пищёвка</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Как выбрать размер ворот
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Ширина: проезжающая техника + 1 м с каждой стороны</li>
              <li>Высота: высота техники + 50 см запаса</li>
              <li>Для фур — минимум 3,5 × 4 м</li>
              <li>Для грузовиков — 3 × 3 м</li>
              <li>Для легковых — 2,5 × 2,5 м</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что важно учесть при заказе
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Тип привода — ручной, цепной, электрический</li>
              <li>Класс ветровой нагрузки региона</li>
              <li>Цвет полотна по RAL — должен совпадать с фасадом</li>
              <li>Окна для освещения боксов</li>
              <li>Встроенная калитка для входа без открытия ворот</li>
              <li>Дополнительные опции — фотоэлементы, сигнальные лампы</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Для современного ангара секционные ворота — это золотой стандарт. Они дороже распашных, но экономят на отоплении, добавляют удобства и работают десятилетиями без капремонта. Распашные оправданы только для холодных складов и сезонных навесов. Скоростные ворота — для логистики и пищёвки.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Подберём ворота под ваш ангар
            </h3>
            <p className="text-muted mb-6">
              МАКСТИЛ устанавливает ворота всех типов в составе строительства ангаров или отдельно. Подберём решение под технику, проём и бюджет.
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
