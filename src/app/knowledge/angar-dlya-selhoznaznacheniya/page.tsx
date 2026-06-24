import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар сельхозназначения: проекты, цены, размеры | МАКСТИЛ",
  description: "Строительство ангаров сельхозназначения из ЛСТК. Проекты для зерна, техники, удобрений. Размеры, цены, фундамент, особенности.",
  keywords: [
    "ангар сельхозназначения",
    "сельхоз ангар",
    "ангар для зерна",
    "ангар для удобрений",
    "строительство сельхоз ангара",
    "ангар для сельхозтехники",
  ],
  openGraph: {
    title: "Ангар сельхозназначения: проекты, цены, размеры",
    description: "Строительство ангаров сельхозназначения из ЛСТК. Проекты для зерна, техники, удобрений.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар сельхозназначения: проекты, цены, размеры",
    "description": "Строительство ангаров сельхозназначения из ЛСТК. Проекты для зерна, техники, удобрений.",
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
            Ангар сельхозназначения: проекты, цены и размеры
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Сельхозздания</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Ангары сельхозназначения используются для хранения зерна, удобрений, сельхозтехники, кормов и семян. Технология ЛСТК позволяет быстро и недорого построить надёжное укрытие, адаптированное под агробизнес.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Типы сельхоз ангаров</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Зернохранилище</strong> — герметичность, вентиляция, защита от грызунов</li>
            <li><strong>Ангар для техники</strong> — большие ворота, высокий конёк</li>
            <li><strong>Ангар для удобрений</strong> — устойчивость к агрессивной среде</li>
            <li><strong>Кормовой ангар</strong> — вентиляция, удобная погрузка</li>
            <li><strong>Семенной склад</strong> — контроль температуры и влажности</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Популярные размеры и цены</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Назначение</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Размеры</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Для трактора</td><td className="border border-slate-300 px-4 py-2">12×18 м</td><td className="border border-slate-300 px-4 py-2">от 1 000 000 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Для комбайна</td><td className="border border-slate-300 px-4 py-2">15×24 м</td><td className="border border-slate-300 px-4 py-2">от 1 600 000 ₽</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">Зернохранилище</td><td className="border border-slate-300 px-4 py-2">20×40 м</td><td className="border border-slate-300 px-4 py-2">от 3 600 000 ₽</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Универсальный ангар</td><td className="border border-slate-300 px-4 py-2">18×30 м</td><td className="border border-slate-300 px-4 py-2">от 2 400 000 ₽</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Особенности фундамента и полов</h2>
          <p className="mb-4">
            Для сельхоз ангаров часто используют ленточный или свайный фундамент. Полы делают бетонными с топпингом для защиты от истирания. В зернохранилищах устраивают вентилируемые полы.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Нужно ли разрешение</h2>
          <p className="mb-4">
            На сельхозземлях ангары сельхозназначения обычно не требуют разрешения на строительство — достаточно уведомления в местную администрацию. Для объектов площадью более 1 500 м² может потребоваться проектная документация.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Преимущества ЛСТК для сельхоза</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Быстрый монтаж — сезон не пропускается</li>
            <li>Низкая цена по сравнению с кирпичом и железобетоном</li>
            <li>Оцинкованный профиль не боится влаги и агрессивных сред</li>
            <li>Легко расширить или добавить пристройку</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Построим сельхоз ангар под ключ</h3>
            <p className="text-muted mb-4">Подберём проект под вашу технику, зерно или удобрения.</p>
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
