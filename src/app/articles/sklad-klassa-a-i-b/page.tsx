import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Склад класса А и Б: требования к зданию | МАКСТИЛ",
  description:
    "Что такое склад класса А, А+, Б, В: высота потолков, полы, ворота, доки, пожарная безопасность. Как построить склад нужного класса из металлоконструкций в 2026.",
  keywords: [
    "склад класса а",
    "склад класса б",
    "требования к складу класса а",
    "высота потолков склад класса а",
    "построить склад класса а",
    "склад а б в отличие",
    "классификация складов",
  ],
  openGraph: {
    title: "Склад класса А и Б: требования к зданию",
    description: "Классификация складов А, Б, В: требования, отличия, стоимость строительства.",
    url: "https://lstkmk.ru/articles/sklad-klassa-a-i-b/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/sklad-klassa-a-i-b/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Объекты</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Склад класса А и Б: требования к зданию
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>21 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Класс склада определяет арендную ставку, пригодность для логистики и соответствие требованиям крупных арендаторов. Разбираем, что конкретно нужно обеспечить при строительстве склада каждого класса.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Классификация складов: сравнительная таблица</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Требование</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Класс А</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Класс Б</th>
                    <th className="text-left py-3 font-semibold text-foreground">Класс В</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Высота потолков", "от 10 м", "от 6 м", "от 4 м"],
                    ["Пол", "Бетон, нагр. 5+ т/м²", "Бетон, 3–5 т/м²", "Бетон/асфальт"],
                    ["Шаг колонн", "12×24 м и шире", "9×12 м", "Не регламент."],
                    ["Ворота (доки)", "1 на 500–700 м²", "1 на 800–1000 м²", "Нет дока"],
                    ["Температурный режим", "+10...+18°C", "+8...+15°C", "Не всегда"],
                    ["Охранный периметр", "Обязательно", "Желательно", "Нет"],
                    ["Система пожаротушения", "Спринклерная", "Спринклерная", "Не всегда"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4 text-green-700">{a}</td>
                      <td className="py-3 pr-4">{b}</td>
                      <td className="py-3 text-slate-400">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Склад класса А: что это значит на практике</h2>
            <p className="text-muted leading-relaxed mb-4">
              Класс А — высший стандарт. Главные требования для металлокаркасного здания:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота в свету не менее 10 м — для стеллажей высотой 8–9 м</li>
              <li>Широкий шаг колонн — 12×24 м или 18×24 м без внутренних опор в зоне хранения</li>
              <li>Отапливаемое помещение с поддержанием температуры</li>
              <li>Доковые ворота с гидравлическим уравнителем и герметичной манжетой</li>
              <li>Спринклерная система пожаротушения</li>
              <li>Асфальтированная территория с разметкой</li>
              <li>КПП, видеонаблюдение</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Склад класса Б</h2>
            <p className="text-muted leading-relaxed mb-6">
              Наиболее востребованный класс для регионального бизнеса. Высота 6–8 м, оборудованные въезды, отопление — этого достаточно для большинства логистических и производственных задач. Строится дешевле класса А на 25–40%.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства склада разных классов</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Класс</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Цена строительства м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Аренда м²/год</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["А и А+", "от 12 000 ₽", "4 000–8 000 ₽"],
                    ["Б", "от 8 000 ₽", "2 500–4 500 ₽"],
                    ["В", "от 5 000 ₽", "1 200–2 500 ₽"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Какой класс выбрать</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Класс А</strong> — для сдачи в аренду крупным логистам, e-commerce, фармацевтике</li>
              <li><strong>Класс Б</strong> — для собственного использования, оптовой торговли, производства</li>
              <li><strong>Класс В</strong> — для хранения сырья, сельхозпродукции, стройматериалов</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Выбор класса склада определяет архитектуру здания на десятилетия. Строить «с запасом» по высоте и шагу колонн дороже на 15–25%, но перестроить готовый склад под более высокий класс почти невозможно без сноса.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим склад нужного класса</h3>
            <p className="text-muted mb-6">МАКСТИЛ проектирует и строит склады классов Б и В из металлоконструкций под ключ в Белгороде и области.</p>
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
