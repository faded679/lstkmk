import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар для комбайна и трактора: размеры, ворота, цена | МАКСТИЛ",
  description: "Как построить ангар для комбайна, трактора и сельхозтехники. Размеры ворот, высота, длина, стоимость. Проектирование и строительство под ключ.",
  keywords: [
    "ангар для комбайна",
    "ангар для трактора",
    "ангар для сельхозтехники",
    "размеры ангара для комбайна",
    "ворота для комбайна",
    "стоимость ангара для техники",
  ],
  openGraph: {
    title: "Ангар для комбайна и трактора: размеры, ворота, цена",
    description: "Как построить ангар для комбайна, трактора и сельхозтехники. Размеры, ворота, цена.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар для комбайна и трактора: размеры, ворота, цена",
    "description": "Как построить ангар для комбайна, трактора и сельхозтехники. Размеры ворот, высота, длина, стоимость.",
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
            Ангар для комбайна и трактора: размеры, ворота, цена
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Сельхозздания</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Ангары</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Сельхозтехника требует надёжного укрытия от осадков, ветра и перепадов температур. Ангар для комбайна и трактора отличается от обычного склада большими воротами, высоким коньком и удобной планировкой для маневра.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Какие размеры нужны для сельхозтехники</h2>
          <p className="mb-4">
            Габариты ангара зависят от количества и типа техники. Для одного комбайна или крупного трактора достаточно ангара 12×18 или 15×20 м. Для нескольких единиц — от 18×30 м.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border border-slate-300 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left">Техника</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Размеры ангара</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Высота ворот</th>
                  <th className="border border-slate-300 px-4 py-2 text-left">Ширина ворот</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 px-4 py-2">Трактор</td><td className="border border-slate-300 px-4 py-2">12×18 м</td><td className="border border-slate-300 px-4 py-2">4,5 м</td><td className="border border-slate-300 px-4 py-2">4–5 м</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">Комбайн</td><td className="border border-slate-300 px-4 py-2">15×24 м</td><td className="border border-slate-300 px-4 py-2">5,5 м</td><td className="border border-slate-300 px-4 py-2">5–6 м</td></tr>
                <tr><td className="border border-slate-300 px-4 py-2">2–3 единицы</td><td className="border border-slate-300 px-4 py-2">18×30 м</td><td className="border border-slate-300 px-4 py-2">6 м</td><td className="border border-slate-300 px-4 py-2">6–8 м</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Типы ворот для сельхозтехники</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Откатные ворота</strong> — самый популярный вариант, не требуют места перед ангаром</li>
            <li><strong>Подъёмные секционные</strong> — удобны, но дороже и требуют точных размеров</li>
            <li><strong>Распашные</strong> — простые и дешёвые, но требуют свободного пространства</li>
            <li><strong>Шторные ПВХ</strong> — для тёплых и частых проездов</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Стоимость ангара для техники</h2>
          <p className="mb-4">
            Холодный ангар 15×24 м для комбайна — от <strong>1 620 000 ₽</strong>. Тёплый вариант для круглогодичного хранения — от <strong>3 240 000 ₽</strong>. В стоимость входит фундамент, каркас, кровля, ворота и монтаж.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Нужно ли утепление</h2>
          <p className="mb-4">
            Для кратковременного хранения техники весной–осенью холодный ангар подходит. Для зимнего хранения и защиты от конденсата лучше выбрать тёплый ангар с минимальным утеплением стен и кровли.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Особенности фундамента</h2>
          <p className="mb-4">
            Для сельхозангаров часто используют ленточный или свайный фундамент. Важно учитывать нагрузку от техники и состояние грунтов. Въездную площадку делают из бетона или щебня с упрочнением.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Рассчитайте ангар для вашей техники</h3>
            <p className="text-muted mb-4">Подберём размеры, ворота и комплектацию под вашу технику.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#calculator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
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
