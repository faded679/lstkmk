import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "ЛСТК vs металлокаркас: что выбрать для ангара и склада | МАКСТИЛ",
  description: "Сравнение ЛСТК и металлокаркаса. Цена, сроки, пролёты, нагрузки, применение. Когда выгоднее ЛСТК, а когда классический металлокаркас.",
  keywords: [
    "ЛСТК vs металлокаркас",
    "ЛСТК или металлокаркас",
    "что лучше ЛСТК или металлокаркас",
    "сравнение ЛСТК и металлокаркаса",
    "ЛСТК против металлокаркаса",
    "металлокаркас или ЛСТК",
  ],
  openGraph: {
    title: "ЛСТК vs металлокаркас: что выбрать для ангара и склада",
    description: "Сравнение ЛСТК и металлокаркаса. Цена, сроки, пролёты, нагрузки, применение.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ЛСТК vs металлокаркас: что выбрать для ангара и склада",
    "description": "Сравнение ЛСТК и металлокаркаса. Цена, сроки, пролёты, нагрузки, применение.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ЛСТК vs металлокаркас: что выбрать для ангара и склада
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Сравнения</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Технологии</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Выбор между ЛСТК и классическим металлокаркасом — ключевой вопрос при проектировании быстровозводимого здания. От технологии зависят цена, сроки, возможные пролёты и нагрузки. Разберёмся, когда выгоднее каждый вариант.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Основные отличия</h2>
          <p className="mb-4">
            <strong>ЛСТК</strong> — лёгкий оцинкованный профиль, собирается на болтах без сварки. <strong>Металлокаркас</strong> — тяжёлые стальные балки и колонны, требует сварки и крупной техники.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">ЛСТК</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Металлокаркас</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Пролёт</td><td className="border border-slate-300 px-4 py-2">до 24 м</td><td className="border border-slate-300 px-4 py-2">30–60+ м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Вес 1 м²</td><td className="border border-slate-300 px-4 py-2">15–25 кг</td><td className="border border-slate-300 px-4 py-2">50–80 кг</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Цена за м²</td><td className="border border-slate-300 px-4 py-2">от 4 500 ₽</td><td className="border border-slate-300 px-4 py-2">от 18 000 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Сроки</td><td className="border border-slate-300 px-4 py-2">45–60 дней</td><td className="border border-slate-300 px-4 py-2">90–180 дней</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Сварка</td><td className="border border-slate-300 px-4 py-2">Не нужна</td><td className="border border-slate-300 px-4 py-2">Обязательна</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Срок службы</td><td className="border border-slate-300 px-4 py-2">50+ лет</td><td className="border border-slate-300 px-4 py-2">30–50 лет</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Когда выбирать ЛСТК</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Ангар, склад, автосервис, магазин площадью до 1 500 м²</li>
            <li>Пролёт до 24 м</li>
            <li>Бюджет ограничен, нужна экономия</li>
            <li>Сроки сжатые</li>
            <li>Нет тяжёлых кранов и оборудования</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Когда выбирать металлокаркас</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Пролёт более 30 м</li>
            <li>Мостовой кран 10+ т</li>
            <li>Многоэтажное здание</li>
            <li>Повышенные снеговые и ветровые нагрузки</li>
            <li>Спортивные и выставочные здания</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Вывод</h2>
          <p className="mb-4">
            Для большинства типовых задач — ангаров, складов, автосервисов, сельхоззданий — <strong>ЛСТК выгоднее и быстрее</strong>. Металлокаркас оправдан только при больших пролётах и серьёзных нагрузках.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Подберём технологию под ваш объект</h3>
            <p className="text-muted mb-4">Инженеры МАКСТИЛ рассчитают оба варианта и порекомендуют оптимальный.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать
              </a>
              <a href="tel:+79803211542" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
