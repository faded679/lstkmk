import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Тип местности для строительства ангара и фермы | Справочник ЛСТК",
  description: "Категории местности А, Б, В, Г, Д по СП 131. Расчёт ветровой и снеговой нагрузки в зависимости от типа местности.",
  keywords: ["тип местности строительство", "категория местности А Б В Г Д", "ветровая нагрузка тип местности"],
};

const faqData = [
  {
    question: "Какой тип местности выбрать для строительства ангара?",
    answer: "Для ангара в сельской местности или на окраине города — чаще всего тип Б. Если объект стоит на открытом поле, у воды или на побережье — тип А с максимальной ветровой нагрузкой. Для коровника в селе подходит тип Б."
  },
  {
    question: "Какой тип местности выбрать для коровника?",
    answer: "Для большинства районов России подходит тип Б — открытая местность с небольшими препятствиями. В горных районах — тип В или Г."
  },
  {
    question: "Влияет ли тип местности на цену строительства?",
    answer: "Да, чем выше ветровая нагрузка (тип А), тем мощнее требуется каркас, что увеличивает стоимость на 5–15%."
  }
];

export default function TipMestnostiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Тип местности для строительства",
    "description": "Категории местности А, Б, В, Г, Д и их влияние на проектирование",
    "author": {
      "@type": "Organization",
      "name": "ЛСТК-МК"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Тип местности строительства по СП 20.13330
          </h1>
          
          <p className="text-muted mb-6">
            Тип местности определяет ветровую нагрузку на здание по СП 131.13330.2020. 
            От этого зависит расчёт несущих конструкций каркаса.
          </p>

          <h2 className="text-lg font-semibold mb-3">Типы местности A, B, C по СП 20.13330.2016</h2>
          <div className="space-y-4 mb-6">
            <div className="border border-border rounded-lg p-4 bg-slate-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-foreground w-8 flex-shrink-0">А</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Открытые пространства</p>
                  <p className="text-sm text-muted mb-2">Открытое поле, степь, лесотундра, тундра, пустыня, берег моря, озёр и водохранилищ. Максимальное ветровое давление (k = 1,0).</p>
                  <p className="text-xs text-muted"><strong>Примеры для ангара:</strong> строительство ангара в чистом поле, у воды, на побережье — самые жёсткие требования к каркасу.</p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-slate-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-foreground w-8 flex-shrink-0">Б</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Местность с препятствиями до 10 м</p>
                  <p className="text-sm text-muted mb-2">Равнинная и холмистая местность с препятствиями высотой 10 м и более — лесные массивы, сельхозугодья, посадки. Наиболее распространённый тип (k = 0,65).</p>
                  <p className="text-xs text-muted"><strong>Примеры:</strong> окраина города, промзона, деревня, вахтовые посёлки, лесополосы. Типичный тип для большинства сельских ангаров и складов.</p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-slate-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-foreground w-8 flex-shrink-0">В</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Плотная городская застройка</p>
                  <p className="text-sm text-muted mb-2">Городские территории с плотной застройкой высотой свыше 25 м. Ветровое давление снижается за счёт экранирования зданиями (k = 0,4).</p>
                  <p className="text-xs text-muted"><strong>Примеры:</strong> центр крупного города, промышленная зона в городе с многоэтажными зданиями, застройка между высотками.</p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-slate-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-foreground w-8 flex-shrink-0">Г/Д</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Горные районы</p>
                  <p className="text-sm text-muted">Г — горные районы до 1500 м (предгорья, плато). Д — высокогорье свыше 1500 м. Расчёт производится индивидуально.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Коэффициенты ветровой нагрузки:</strong> А = 1,0; Б = 0,65; В = 0,4; Г и Д рассчитываются индивидуально.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            {faqData.map((item, i) => (
              <div key={i} className="border-l-2 border-accent-blue pl-4">
                <p className="font-medium text-foreground mb-1">{item.question}</p>
                <p className="text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/knowledge/snegovoj-rajon/" 
              className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline"
            >
              Следующая статья: Снеговой район
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
