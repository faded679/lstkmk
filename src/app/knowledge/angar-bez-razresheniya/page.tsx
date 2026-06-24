import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Строительство ангара без разрешения в 2025: разъяснения 152-ФЗ и ГрК | МАКСТИЛ",
  description: "Какие ангары можно строить без разрешения в 2025 году. Линейные объекты, садовые постройки, уведомительный порядок. Разъяснения по законодательству РФ.",
  keywords: [
    "ангар без разрешения",
    "строительство ангара без разрешения 2025",
    "ангар без разрешения на строительство",
    "без разрешительной документации ангар",
    "уведомление о строительстве ангара",
    "какой ангар можно строить без разрешения",
  ],
  openGraph: {
    title: "Строительство ангара без разрешения в 2025",
    description: "Какие ангары можно строить без разрешения в 2025 году. Линейные объекты, уведомительный порядок.",
    type: "article",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Строительство ангара без разрешения в 2025: разъяснения",
    "description": "Какие ангары можно строить без разрешения в 2025 году. Линейные объекты, садовые постройки, уведомительный порядок.",
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
            Строительство ангара без разрешения в 2025 году
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Законодательство</span>
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-muted">Документы</span>
          </div>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Многие заказчики задают вопрос: можно ли построить ангар без разрешения на строительство? Ответ зависит от площади, назначения и места расположения объекта. В 2025 году действует уведомительный порядок для ряда объектов, но есть важные нюансы.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Когда ангар можно строить без разрешения</h2>
          <p className="mb-4">
            Согласно Градостроительному кодексу РФ, разрешение на строительство не требуется для:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li><strong>Линейных объектов</strong> — заборы, дороги, трубопроводы, кабельные линии</li>
            <li><strong>Садовых и дачных построек</strong> — хозпостройки, гаражи, бани, теплицы</li>
            <li><strong>Временных построек</strong> — строительные бытовки, павильоны</li>
            <li><strong>Некапитальных объектов</strong> — навесы без фундамента, мобильные конструкции</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Уведомительный порядок для нежилых объектов</h2>
          <p className="mb-4">
            Для <strong>нежилых объектов площадью до 1 500 м²</strong> на землях населённых пунктов применяется уведомительный порядок. Это значит, что вместо разрешения на строительство нужно подать уведомление о начале строительства и уведомление о завершении строительства в местную администрацию.
          </p>
          <p className="mb-4">
            Таким образом, большинство ангаров и складов ЛСТК площадью до 1 500 м² можно построить по уведомительному порядку, без получения разрешения.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Когда всё же нужно разрешение</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Объект площадью более 1 500 м²</li>
            <li>Здание на землях, не относящихся к населённым пунктам (земли сельхозназначения, промназначения)</li>
            <li>Объекты с повышенной пожарной и взрывной опасностью</li>
            <li>Здания с кранами грузоподъёмностью более 5 т</li>
            <li>Многоэтажные сооружения и объекты повышенной ответственности</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Какие документы нужны в любом случае</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted">
            <li>Градостроительный план земельного участка (ГПЗУ)</li>
            <li>Технический план объекта (после строительства)</li>
            <li>Уведомление о начале строительства</li>
            <li>Уведомление о завершении строительства</li>
            <li>Проектная документация (для объектов от 1 500 м²)</li>
          </ol>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Ангар на сельхозземлях</h2>
          <p className="mb-4">
            Сельскохозяйственные постройки (коровники, зернохранилища, ангары для техники) в большинстве случаев не требуют разрешения на строительство, если они находятся на землях сельхозназначения и используются по целевому назначению. Достаточно уведомления.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Практические рекомендации</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted">
            <li>Перед строительством уточните статус земельного участка в ГПЗУ</li>
            <li>Для нежилых объектов до 1 500 м² используйте уведомительный порядок</li>
            <li>Заказывайте проектную документацию у лицензированных специалистов</li>
            <li>После строительства внесите объект в ЕГРН через технический план</li>
          </ul>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Помощь с документами на ангар</h3>
            <p className="text-muted mb-4">Наши инженеры подготовят проектную документацию и проконсультируют по вопросам оформления.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#contacts" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Phone size={18} />
                Получить консультацию
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
