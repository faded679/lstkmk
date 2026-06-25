import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Фасад из сэндвич-панелей: монтаж, цены, виды облицовки 2026 | МАКСТИЛ",
  description:
    "Фасад из сэндвич-панелей для промышленных, складских и торговых зданий. Виды панелей, способы монтажа, цены за м². Сравнение с вентилируемым фасадом и штукатуркой.",
  keywords: [
    "фасад из сэндвич-панелей",
    "сэндвич-панели для фасада цена",
    "фасадные сэндвич-панели монтаж",
    "облицовка здания сэндвич-панелями",
    "фасадные панели для склада",
    "сэндвич-панель горизонтальная вертикальная",
  ],
  openGraph: {
    title: "Фасад из сэндвич-панелей: монтаж и цены",
    description: "Фасадные сэндвич-панели для промышленных зданий. Виды, монтаж, цены 2026.",
    url: "https://lstkmk.ru/articles/fasad-iz-sendvich-panelej/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/fasad-iz-sendvich-panelej/" },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Материалы</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Фасад из сэндвич-панелей: монтаж, цены, виды облицовки
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Фасад из сэндвич-панелей — наиболее экономичное и быстрое решение для промышленных, складских и торговых зданий. Стоимость монтажа — от 1 800 ₽/м², панели обеспечивают одновременно теплоизоляцию и финишную отделку. Срок монтажа фасада 1 000 м² — 5–7 дней.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Виды сэндвич-панелей для фасада</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">По типу утеплителя</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Утеплитель</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Горючесть</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Толщина для R≥3</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена, ₽/м²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Минеральная вата", "НГ", "150 мм", "1 200–1 800"],
                    ["Пенополиуретан (ПУ)", "Г1–Г2", "100 мм", "900–1 400"],
                    ["Пенополистирол (ПС)", "Г3–Г4", "120 мм", "700–1 100"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3 font-medium text-foreground">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Для зданий категорий А, Б, В1 по пожарной опасности — только минераловатный утеплитель (класс НГ). Пенополиуретан допускается для зданий В2–Д при условии огнезащитной облицовки.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">По профилю облицовки</h3>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Гладкая панель</strong> — строгий современный вид, популярна для торговых центров и офисов</li>
              <li><strong>Микрорифлёная</strong> — небольшой рельеф скрывает мелкие дефекты монтажа, универсальна</li>
              <li><strong>Волна / трапеция</strong> — высокая жёсткость, применяется на крупных промышленных объектах</li>
              <li><strong>Под дерево / камень</strong> — декоративная текстура для торговых и административных зданий</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Горизонтальный или вертикальный монтаж</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Горизонтальный</th>
                    <th className="text-left py-3 font-semibold text-foreground">Вертикальный</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Отток воды", "Хуже (горизонтальные стыки)", "Лучше"],
                    ["Монтаж", "Проще, без лесов на малой высоте", "Требует подъёмника"],
                    ["Длина панелей", "Ограничена шириной здания", "Ограничена высотой здания"],
                    ["Внешний вид", "Классический промышленный", "Более современный"],
                    ["Применение", "Склады, ангары", "Торговые центры, офисы"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Технология монтажа фасадных панелей</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted mb-6">
              <li>Монтаж направляющих (ригелей или цокольного профиля) на каркас здания</li>
              <li>Установка первой (нижней/крайней) панели строго по уровню — отклонение не более 2 мм/м</li>
              <li>Стыковка последующих панелей замком «шип-паз» с уплотнением силиконовым герметиком</li>
              <li>Крепление к каркасу саморезами или заклёпками через каждые 600–900 мм</li>
              <li>Закрытие оконных и дверных проёмов откосными элементами</li>
              <li>Устройство кровельного примыкания через специальный конёк или парапетный профиль</li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Важно:</strong> Все стыки панелей и примыкания к проёмам должны заполняться паронепроницаемым герметиком со стороны улицы и пароизоляционной лентой изнутри. Незаделанные стыки — главная причина продувания и образования конденсата.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость фасада из сэндвич-панелей</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Статья</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Панели (ПУ-утеплитель 100 мм)", "900–1 400 ₽/м²"],
                    ["Панели (минвата 150 мм)", "1 200–1 800 ₽/м²"],
                    ["Монтаж (материалы + работа)", "600–900 ₽/м²"],
                    ["Итого стена под ключ", "от 1 800–2 700 ₽/м²"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Фасад из сэндвич-панелей — самое экономичное решение для промышленных и коммерческих объектов. При правильном монтаже стыков обеспечивает нормируемое сопротивление теплопередаче, не требует дополнительной отделки и служит 25–30 лет без существенного обслуживания.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Смонтируем фасад из сэндвич-панелей под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — поставка и монтаж фасадных сэндвич-панелей для промышленных и коммерческих объектов в Белгородской области и ЦФО.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Получить консультацию</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
