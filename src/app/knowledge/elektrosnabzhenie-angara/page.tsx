import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Электроснабжение ангара: мощность, ввод, щитовая | Справочник ЛСТК",
  description: "Как подключить электричество к ангару. Сколько кВт нужно для склада, цеха, автосервиса. Стоимость технологического присоединения.",
  keywords: ["электроснабжение ангара", "подключение электричества склад", "мощность электросети ангар", "технологическое присоединение"],
};

const faqData = [
  {
    question: "Сколько кВт нужно для ангара 500 м²?",
    answer: "Для холодного склада — 15–25 кВт (освещение + ворота + розетки). Для тёплого склада с отоплением — 40–80 кВт. Для производства — от 100 кВт. Уточняйте по фактической нагрузке оборудования."
  },
  {
    question: "Сколько стоит технологическое присоединение?",
    answer: "По льготному тарифу до 150 кВт — фиксированная ставка около 550 ₽ за кВт (зависит от региона). Сверх 150 кВт — по индивидуальным ТУ, стоимость 50 000–500 000 ₽ и выше."
  },
  {
    question: "Нужен ли трёхфазный ввод?",
    answer: "Если есть оборудование мощностью более 3 кВт (станки, компрессоры, сварка, ворота с приводом) — да, 380В необходим. Для чисто складской функции с освещением достаточно 220В/25А."
  }
];

export default function ElektrosnabzhenieAngaraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Электроснабжение ангара",
    "description": "Мощность, ввод и стоимость электроснабжения производственных зданий.",
    "author": { "@type": "Organization", "name": "МАКСТИЛ" }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
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
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
            Инженерия
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Электроснабжение ангара
          </h1>

          <p className="text-muted mb-6">
            Правильно рассчитанная мощность с запасом 20–30% избавит от дорогостоящего увеличения ввода в будущем.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Потребляемая мощность по типам объектов</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип объекта</th>
                  <th className="text-left py-3 font-semibold">Площадь</th>
                  <th className="text-left py-3 font-semibold">Рекомендуемая мощность</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Холодный склад</td>
                  <td className="py-3 text-muted">до 500 м²</td>
                  <td className="py-3 font-medium">15 кВт</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Тёплый склад (эл. отопление)</td>
                  <td className="py-3 text-muted">500 м²</td>
                  <td className="py-3 font-medium">60–80 кВт</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Автосервис 3–4 поста</td>
                  <td className="py-3 text-muted">300–500 м²</td>
                  <td className="py-3 font-medium">40–60 кВт</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Производство (лёгкое)</td>
                  <td className="py-3 text-muted">1 000 м²</td>
                  <td className="py-3 font-medium">100–200 кВт</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Производство (тяжёлое)</td>
                  <td className="py-3 text-muted">1 000 м²</td>
                  <td className="py-3 font-medium">300–500 кВт</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Этапы подключения</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li><strong>Заявка на ТП</strong> — подаётся в сетевую компанию, срок рассмотрения 15 рабочих дней</li>
            <li><strong>Получение ТУ</strong> — технические условия с точкой подключения и мощностью</li>
            <li><strong>Проект электроснабжения</strong> — однолинейная схема, разделы ЭМ и ЭО</li>
            <li><strong>Монтаж ВРУ и кабельной трассы</strong> — ввод в здание, щитовая</li>
            <li><strong>Допуск в эксплуатацию</strong> — акт Ростехнадзора для мощностей от 100 кВт</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Сроки:</strong> от подачи заявки до фактического подключения — 3–6 месяцев для мощностей до 150 кВт. При мощности выше 150 кВт — 6–12 месяцев. Начинайте процесс параллельно с проектированием здания.
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
        </article>
      </main>
    </div>
  );
}
