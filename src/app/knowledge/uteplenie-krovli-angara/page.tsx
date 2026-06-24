import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Утепление кровли ангара: материалы, цены, технологии | МАКСТИЛ",
  description: "Как утеплить кровлю ангара. Сэндвич-панели, минвата, пеноплекс, напыляемый пенополиуретан. Цены за м², сроки службы, монтаж.",
  keywords: [
    "утепление кровли ангара",
    "кровля ангара утепление",
    "утеплитель для кровли ангара",
    "сэндвич-панели кровля ангара",
    "минвата кровля ангара",
    "стоимость утепления кровли ангара",
  ],
  openGraph: {
    title: "Утепление кровли ангара: материалы, цены, технологии",
    description: "Как утеплить кровлю ангара. Сэндвич-панели, минвата, пеноплекс, пенополиуретан.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Утепление кровли ангара: материалы, цены, технологии",
    "description": "Как утеплить кровлю ангара. Сэндвич-панели, минвата, пеноплекс, напыляемый пенополиуретан.",
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
            Утепление кровли ангара: материалы и цены
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Утепление</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Кровля</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Кровля — основной источник теплопотерь в ангаре. Правильное утепление кровли снижает расходы на отопление, предотвращает конденсат и продлевает срок службы конструкций. Рассмотрим популярные материалы и технологии.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Основные способы утепления кровли</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Сэндвич-панели</h3>
          <p className="mb-4">
            Самый современный вариант. Панели с наполнителем из минваты или пенополистирола одновременно служат кровельным покрытием и утеплителем. Толщина от 80 до 200 мм. Срок службы — 25–50 лет.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Минеральная вата</h3>
          <p className="mb-4">
            Укладывается между фермами под кровельное покрытие. Хорошая паропроницаемость и огнестойкость. Требует гидро- и пароизоляции.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Пеноплекс / экструдер</h3>
          <p className="mb-4">
            Жёсткие плиты с низкой теплопроводностью. Подходят для плоских кровель. Не впитывают влагу, но горючи — требуется огнезащита.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Напыляемый пенополиуретан (ППУ)</h3>
          <p className="mb-4">
            Бесшовное утепление, заполняет все щели. Высокая адгезия к металлу. Применяется для сложных кровель и реконструкции.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Материал</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Толщина</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена монтажа, ₽/м²</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Срок службы</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Сэндвич-панель</td><td className="border border-slate-300 px-4 py-2">100–200 мм</td><td className="border border-slate-300 px-4 py-2">1 500–2 500</td><td className="border border-slate-300 px-4 py-2">25–50 лет</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Минвата</td><td className="border border-slate-300 px-4 py-2">150–200 мм</td><td className="border border-slate-300 px-4 py-2">1 000–1 800</td><td className="border border-slate-300 px-4 py-2">20–30 лет</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Пеноплекс</td><td className="border border-slate-300 px-4 py-2">100–150 мм</td><td className="border border-slate-300 px-4 py-2">1 200–2 000</td><td className="border border-slate-300 px-4 py-2">20–30 лет</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">ППУ напыление</td><td className="border border-slate-300 px-4 py-2">50–100 мм</td><td className="border border-slate-300 px-4 py-2">2 000–3 500</td><td className="border border-slate-300 px-4 py-2">25–35 лет</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Какой утеплитель выбрать</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Для нового ангара</strong> — сэндвич-панели (быстрый монтаж, герметичность)</li>
            <li><strong>Для тёплого склада</strong> — минвата с пароизоляцией</li>
            <li><strong>Для реконструкции</strong> — напыляемый ППУ</li>
            <li><strong>Для бюджетного варианта</strong> — пеноплекс с огнезащитой</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Важные правила монтажа</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Не оставляйте зазоры между утеплителем и металлом — иначе появится конденсат</li>
            <li>Используйте пароизоляцию со стороны помещения</li>
            <li>Обеспечьте вентиляцию подкровельного пространства для мягких кровель</li>
            <li>Гидроизоляция обязательна для всех типов утепления</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Утеплите кровлю ангара</h3>
            <p className="text-muted mb-4">Подберём материал и рассчитаем стоимость утепления для вашего ангара.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать
              </a>
              <a href="tel:+79606322061" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
