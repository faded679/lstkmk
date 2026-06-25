import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Склад-холодильник из металлоконструкций: строительство под ключ | МАКСТИЛ",
  description:
    "Строительство холодильных складов (рефрижераторных камер) из металлоконструкций. Теплоизоляция, холодильное оборудование, полы. Цены на склад-холодильник под ключ 2026.",
  keywords: [
    "склад холодильник строительство",
    "холодильный склад из металлоконструкций",
    "рефрижераторный склад под ключ",
    "строительство холодного склада",
    "холодильная камера металлокаркас",
    "склад заморозки под ключ цена",
  ],
  openGraph: {
    title: "Склад-холодильник из металлоконструкций",
    description: "Строительство холодильных складов из металлоконструкций. Теплоизоляция, оборудование, цены.",
    url: "https://lstkmk.ru/articles/sklad-holodilnik/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/sklad-holodilnik/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Склады</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Склад-холодильник из металлоконструкций: строительство под ключ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Холодильный склад из металлоконструкций — это утеплённый ангар с холодильным оборудованием, поддерживающим заданный температурный режим. Строится за 60–90 дней. Стоимость «под ключ» — от 15 000 ₽/м² для камер +4 °С и от 22 000 ₽/м² для морозильников −18 °С.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Температурные режимы и их применение</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Режим</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Температура</th>
                    <th className="text-left py-3 font-semibold text-foreground">Назначение</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Охлаждаемый", "+4…+10 °С", "Овощи, фрукты, напитки, молочка"],
                    ["Холодильный", "0…+4 °С", "Мясо, рыба, деликатесы"],
                    ["Заморозка I", "−12…−18 °С", "Мороженое, полуфабрикаты"],
                    ["Заморозка II", "−18…−25 °С", "Длительное хранение мяса и рыбы"],
                    ["Глубокая заморозка", "−25…−40 °С", "Тунец, трепанг, фармацевтика"],
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

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив холодильного склада</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Ограждающие конструкции</h3>
            <p className="text-muted leading-relaxed mb-4">
              Стены и кровля холодильного склада — сэндвич-панели с пенополиуретановым заполнителем (ПУ). ПУ применяется вместо минваты из-за более высокого термосопротивления: λ = 0,022 Вт/м·К против 0,036 Вт/м·К у минваты.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Режим хранения</th>
                    <th className="text-left py-3 font-semibold text-foreground">Толщина ПУ-панели</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["+4…+10 °С", "80–100 мм"],
                    ["0…+4 °С", "100–120 мм"],
                    ["−12…−18 °С", "150–200 мм"],
                    ["−25…−40 °С", "200–250 мм"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 font-medium text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Полы холодильного склада</h3>
            <p className="text-muted leading-relaxed mb-4">
              Полы — критически важный элемент, особенно для морозильников. При температуре ниже −15 °С под полом возникает промерзание грунта → пучение → разрушение конструкции. Решения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Вентилируемое подполье</strong> — продуваемый зазор 400–600 мм между утеплённым полом и грунтом. Самый надёжный вариант</li>
              <li><strong>Электрообогрев грунта</strong> — кабельная система под утеплителем пола. Дополнительные расходы на электроэнергию ~15 000–25 000 ₽/год на 100 м²</li>
              <li><strong>Свайный фундамент</strong> — склад поднимается над уровнем земли, пространство вентилируется</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Двери и тамбуры</h3>
            <p className="text-muted leading-relaxed mb-4">
              Въездные ворота — утеплённые, с тепловой завесой или воздушным шлюзом (тамбуром). Тамбур 3×4 м сокращает теплопотери при открытии ворот в 3–5 раз. Для морозильников — двойные двери с электроотоплением проёма (предотвращает примерзание полотна).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Холодильное оборудование</h2>
            <p className="text-muted leading-relaxed mb-4">
              Для склада-холодильника применяются холодильные машины на хладагентах R404A, R448A (экологичный аналог) или CO₂ (для глубокой заморозки). Схема: компрессорно-конденсаторный агрегат снаружи здания + потолочные воздухоохладители (испарители) внутри.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Примерная мощность холодильного оборудования: 1 кВт холода на каждые 10–15 м³ объёма камеры (+4 °С) и 1 кВт на 6–8 м³ (−18 °С). Стоимость оборудования — 30–50% от общей стоимости объекта.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Стоимость строительства</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип склада</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость под ключ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Охлаждаемый (+4…+10 °С)", "300–500 м²", "от 4,5–8 млн ₽"],
                    ["Холодильный (0…+4 °С)", "300–500 м²", "от 5,5–10 млн ₽"],
                    ["Морозильник (−18 °С)", "300–500 м²", "от 7–14 млн ₽"],
                    ["Морозильник (−25 °С)", "200–400 м²", "от 6,5–13 млн ₽"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 font-medium text-foreground">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Холодильный склад из металлоконструкций строится за 60–90 дней. Ключевые статьи затрат — ПУ-панели повышенной толщины, правильное решение по полам и холодильное оборудование. Нельзя экономить на толщине изоляции и защите пола от промерзания — эти ошибки приводят к аварийным ситуациям и потере продукции.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим холодильный склад под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство холодильных складов из металлоконструкций. Белгородская область и ЦФО.</p>
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
