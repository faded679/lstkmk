import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Бытовка из металлоконструкций: размеры, цены, доставка 2026 | МАКСТИЛ",
  description:
    "Металлические бытовки для строительных площадок, дач и производства. Размеры, цены, утепление. Бытовка под ключ за 5–10 дней. Блок-контейнеры из металла от производителя.",
  keywords: [
    "бытовка из металлоконструкций",
    "металлическая бытовка цена",
    "бытовка блок-контейнер купить",
    "бытовка для строителей металл",
    "утеплённая бытовка металл",
    "бытовка на стройку заказать",
  ],
  openGraph: {
    title: "Бытовка из металлоконструкций: цены и размеры",
    description: "Металлические бытовки и блок-контейнеры. Доставка, монтаж, цены 2026.",
    url: "https://lstkmk.ru/articles/bytovka-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/bytovka-iz-metallokonstrukcij/" },
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
              Бытовка из металлоконструкций: размеры, цены, доставка
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>6 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Металлическая бытовка — быстрое и надёжное решение для организации временного рабочего места, раздевалки, офиса или склада на строительной площадке. Изготавливается за 5–10 дней, доставляется на любой объект, не требует фундамента. Стоимость — от 85 000 ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры металлических бытовок</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размер (Д×Ш×В)</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Вместимость</th>
                    <th className="text-left py-3 font-semibold text-foreground">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["3,0×2,4×2,5 м", "7,2 м²", "2–3 чел.", "от 85 000 ₽"],
                    ["6,0×2,4×2,5 м", "14,4 м²", "4–6 чел.", "от 120 000 ₽"],
                    ["6,0×3,0×2,5 м", "18 м²", "6–8 чел.", "от 145 000 ₽"],
                    ["9,0×3,0×2,5 м", "27 м²", "8–12 чел.", "от 195 000 ₽"],
                    ["12,0×3,0×2,5 м", "36 м²", "12–16 чел.", "от 250 000 ₽"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктив металлической бытовки</h2>
            <p className="text-muted leading-relaxed mb-4">
              Каркас сварной из профильной трубы 60×60×3 мм или 80×80×4 мм. Обшивка снаружи — профнастил С8 или С10, оцинкованный или с полимерным покрытием. Утепление — минеральная вата 50–100 мм или пенополистирол. Внутренняя обшивка — вагонка, ОСП или фанера.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Полы — доска 40 мм на металлических лагах или ОСП 18 мм, покрытие — линолеум. Кровля — профнастил С8 с уклоном 5–7°.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Варианты комплектации</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Базовая (без утепления)</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Каркас + обшивка профнастилом</li>
                  <li>• Дверь металлическая</li>
                  <li>• 1–2 окна</li>
                  <li>• Без электрики</li>
                  <li><strong className="text-foreground">от 85 000 ₽</strong></li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Утеплённая</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Утеплитель 50–100 мм</li>
                  <li>• Внутренняя обшивка</li>
                  <li>• Электропроводка</li>
                  <li>• Розетки, освещение</li>
                  <li><strong className="text-foreground">от 120 000 ₽</strong></li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Жилая (под ключ)</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Всё из «утеплённой»</li>
                  <li>• Водоснабжение и канализация</li>
                  <li>• Электрообогрев или конвектор</li>
                  <li>• Покраска или отделка ДВП</li>
                  <li><strong className="text-foreground">от 180 000 ₽</strong></li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Офисная / прорабская</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Утепление 100 мм</li>
                  <li>• Пластиковые окна</li>
                  <li>• Ламинат на полу</li>
                  <li>• Кондиционер</li>
                  <li><strong className="text-foreground">от 220 000 ₽</strong></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Блок-контейнеры: когда нужно больше площади</h2>
            <p className="text-muted leading-relaxed mb-6">
              Несколько бытовок можно соединить в «городок» — блок-контейнерный комплекс. Контейнеры устанавливаются рядом горизонтально или в 2 этажа на металлическую рамную конструкцию. Городок на 50 рабочих: 10–12 бытовок + отдельная санитарная секция + прорабская. Стоимость — 1,5–2,5 млн ₽.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Доставка и установка</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Стандартная бытовка 6×2,4 м транспортируется манипулятором или на длинной платформе</li>
              <li>Установка — кран или манипулятор, занимает 1–2 часа</li>
              <li>Основание — бетонные блоки, бордюрный камень или ж/б плиты</li>
              <li>Подключение электрики — от ближайшего распределительного щита</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Металлическая бытовка 6×3 м под ключ обходится в 145 000–180 000 ₽ — это дешевле аренды аналогичного помещения за 1 сезон в большинстве регионов. Срок изготовления — 7–10 дней. При правильном хранении (крытый навес зимой) каркас служит 15–20 лет.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Изготовим бытовку или блок-контейнер под ваш заказ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство металлических бытовок и модульных зданий. Белгородская область и ЦФО.</p>
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
