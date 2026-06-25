import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FaqSchema from "@/components/FaqSchema";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SandwichCalculator from "./Calculator";

export const metadata: Metadata = {
  title: "Расчёт сэндвич-панелей онлайн | Калькулятор стоимости и количества",
  description:
    "Калькулятор сэндвич-панелей: расчёт количества, площади и стоимости стеновых и кровельных панелей. Утеплитель PIR/ППС/минвата. Толщина 50-200 мм. Онлайн-расчёт.",
  keywords: [
    "расчёт сэндвич панелей",
    "калькулятор сэндвич панелей",
    "расчет сэндвич панелей онлайн",
    "стоимость сэндвич панелей",
    "сэндвич панели цена за м2",
    "сколько нужно сэндвич панелей",
  ],
  openGraph: {
    title: "Калькулятор сэндвич-панелей онлайн",
    description: "Расчёт количества, площади и стоимости стеновых и кровельных сэндвич-панелей.",
    url: "https://lstkmk.ru/kalkulyator-sendvich-panelej/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/kalkulyator-sendvich-panelej/",
  },
};

const panelSpecs = [
  { type: "Стеновая", thickness: "50 мм",  insulation: "ППС",     price: "1 200–1 500 ₽", weight: "9–11 кг" },
  { type: "Стеновая", thickness: "100 мм", insulation: "ППС",     price: "1 500–1 800 ₽", weight: "11–13 кг" },
  { type: "Стеновая", thickness: "100 мм", insulation: "PIR",     price: "1 800–2 200 ₽", weight: "12–14 кг" },
  { type: "Стеновая", thickness: "150 мм", insulation: "Минвата", price: "1 900–2 400 ₽", weight: "16–20 кг" },
  { type: "Кровельная", thickness: "100 мм", insulation: "PIR",   price: "1 800–2 300 ₽", weight: "13–16 кг" },
  { type: "Кровельная", thickness: "150 мм", insulation: "PIR",   price: "2 200–2 800 ₽", weight: "16–19 кг" },
  { type: "Кровельная", thickness: "200 мм", insulation: "Минвата", price: "2 300–2 900 ₽", weight: "22–27 кг" },
];

const faqItems = [
  {
    q: "Как рассчитать количество сэндвич-панелей?",
    a: "Рассчитайте площадь поверхности: стены = (длина + ширина) × 2 × высота, кровля = длина × ширина × 1,07 (надбавка на нахлёст). Разделите на полезную ширину одной панели (0,96–1,19 м) и длину. Используйте калькулятор выше для автоматического расчёта.",
  },
  {
    q: "Какая цена сэндвич-панелей за м²?",
    a: "Стеновые панели ППС 100 мм — 1500–1800 ₽/м², PIR 100 мм — 1800–2200 ₽/м². Кровельные PIR 150 мм — 2200–2800 ₽/м². Цена зависит от производителя, объёма заказа и региона доставки. Актуальна на 2026 год.",
  },
  {
    q: "Какие панели лучше для ангара — стеновые или кровельные?",
    a: "Это разные изделия с разным профилем замка. Стеновые (Z-Lock) монтируются вертикально или горизонтально на стены. Кровельные (Roof-Lock) — на кровлю с уклоном от 5°. Для полного ограждения ангара нужны оба типа.",
  },
  {
    q: "Можно ли заказать панели нестандартной длины?",
    a: "Да. Большинство производителей изготавливают панели длиной от 1 до 14 м с шагом 50 мм. Нестандартные длины заказываются под конкретный проект и могут увеличить срок изготовления на 5–10 рабочих дней.",
  },
];

export default function KalkulyatorSendvichPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Калькулятор расчёта сэндвич-панелей онлайн",
    "description": "Калькулятор для расчёта количества, площади и стоимости сэндвич-панелей",
    "url": "https://lstkmk.ru/kalkulyator-sendvich-panelej/",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Калькулятор сэндвич-панелей",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "RUB" },
    "description": "Онлайн-расчёт количества, площади и стоимости стеновых и кровельных сэндвич-панелей",
    "provider": { "@type": "Organization", "name": "МАКСТИЛ", "url": "https://lstkmk.ru" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <FaqSchema items={faqItems} />

      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">

        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Расчёт сэндвич-панелей онлайн
          </h1>
          <p className="text-muted leading-relaxed">
            Калькулятор для расчёта количества, площади и стоимости стеновых и кровельных сэндвич-панелей. Введите размеры здания — получите результат мгновенно.
          </p>
        </section>

        {/* Калькулятор */}
        <SandwichCalculator />

        {/* Таблица характеристик */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Характеристики и цены сэндвич-панелей</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Толщина</th>
                  <th className="text-left py-3 font-semibold">Утеплитель</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">Цена за м²</th>
                  <th className="text-left py-3 font-semibold whitespace-nowrap">Вес кг/м²</th>
                </tr>
              </thead>
              <tbody>
                {panelSpecs.map((row, i) => (
                  <tr key={i} className="border-b border-border/40 last:border-0">
                    <td className="py-3 font-medium">{row.type}</td>
                    <td className="py-3 text-muted">{row.thickness}</td>
                    <td className="py-3 text-muted">{row.insulation}</td>
                    <td className="py-3 text-muted whitespace-nowrap">{row.price}</td>
                    <td className="py-3 text-muted">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">* Цены ориентировочные, актуальны на 2026 год. Зависят от объёма заказа и производителя.</p>
        </section>

        {/* Виды */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Виды сэндвич-панелей</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-border rounded-xl p-5">
              <p className="font-semibold text-foreground mb-2">Стеновые (Z-Lock)</p>
              <ul className="text-sm text-muted space-y-1">
                <li>Замок Z-Lock — герметичное соединение</li>
                <li>Ширина полезная: 1000–1190 мм</li>
                <li>Длина: до 12 м (нестандарт до 14 м)</li>
                <li>Монтаж: вертикально и горизонтально</li>
                <li>Толщина: 50–200 мм</li>
              </ul>
            </div>
            <div className="border border-border rounded-xl p-5">
              <p className="font-semibold text-foreground mb-2">Кровельные (Roof-Lock)</p>
              <ul className="text-sm text-muted space-y-1">
                <li>Замок Roof-Lock — скрытое крепление</li>
                <li>Ширина полезная: 1000 мм</li>
                <li>Длина: до 12 м</li>
                <li>Минимальный уклон: 5° (8%)</li>
                <li>Толщина: 100–250 мм</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/knowledge/sendvich-paneli-vidy/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Виды сэндвич-панелей <ArrowRight size={14} />
            </Link>
            <Link href="/articles/sendvich-paneli-obzor/" className="inline-flex items-center gap-1 text-accent-blue hover:underline">
              Полный обзор сэндвич-панелей <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Как выбрать утеплитель */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Как выбрать толщину и утеплитель</h2>
          <div className="space-y-3">
            {[
              {
                name: "ППС (пенополистирол)",
                tag: "Эконом",
                color: "border-slate-300 bg-slate-50",
                points: ["Самый доступный вариант", "Рабочая температура до +80°C", "Подходит для холодных складов, навесов", "Не горит, но плавится"],
              },
              {
                name: "PIR (пенополиизоцианурат)",
                tag: "Оптимально",
                color: "border-accent-blue/30 bg-accent-blue/5",
                points: ["Лучшая теплоизоляция при той же толщине", "Рабочая температура до +150°C", "Меньше вес при равной теплоизоляции", "Подходит для тёплых ангаров, производств"],
              },
              {
                name: "Минеральная вата",
                tag: "Пожаробезопасность",
                color: "border-orange-200 bg-orange-50",
                points: ["Негорючий материал (до +1000°C)", "Требуется по нормам пожарной безопасности", "Тяжелее PIR и ППС на 30–50%", "Обязательна для объектов с категорией пожарной опасности А и Б"],
              },
            ].map((item) => (
              <div key={item.name} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-border text-muted">{item.tag}</span>
                </div>
                <ul className="text-sm text-muted space-y-0.5">
                  {item.points.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/knowledge/tolshina-sendvich-panelej/" className="inline-flex items-center gap-1 text-sm text-accent-blue hover:underline">
              Как выбрать толщину сэндвич-панелей <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Частые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border-l-2 border-accent-blue pl-4">
                <p className="font-medium text-foreground mb-1">{item.q}</p>
                <p className="text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Перелинковка */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">По теме</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/knowledge/sendvich-paneli-vidy/", label: "Виды сэндвич-панелей", desc: "Классификация и применение" },
              { href: "/knowledge/tolshina-sendvich-panelej/", label: "Толщина сэндвич-панелей", desc: "Как выбрать под регион" },
              { href: "/knowledge/montazh-sendvich-panelej/", label: "Монтаж сэндвич-панелей", desc: "Технология и нюансы" },
              { href: "/articles/sendvich-paneli-obzor/", label: "Обзор сэндвич-панелей", desc: "Производители, цены, характеристики" },
              { href: "/configurator-3d", label: "3D-конфигуратор ангара", desc: "Подберите размеры и материалы" },
              { href: "/knowledge/minimalnyj-uklon-krovli/", label: "Уклон кровли для панелей", desc: "Нормы СП 17.13330" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-accent-blue/40 hover:bg-slate-50 transition-colors"
              >
                <ArrowRight size={16} className="text-accent-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{link.label}</p>
                  <p className="text-xs text-muted">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Заказать сэндвич-панели с доставкой</h2>
          <p className="text-slate-400 mb-6 text-sm">
            Производство и доставка сэндвич-панелей по всей России. Нестандартные размеры, монтаж под ключ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contacts"
              className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Получить расчёт
            </Link>
            <Link
              href="/#calculator"
              className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              Рассчитать ангар
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
