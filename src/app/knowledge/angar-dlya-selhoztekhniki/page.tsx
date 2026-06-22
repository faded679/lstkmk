import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ангар для хранения сельхозтехники: размеры и цены | Справочник ЛСТК",
  description: "Ангар для тракторов, комбайнов и сельхозтехники: минимальные размеры, высота ворот, пол, утепление. Стоимость от 4 500 ₽/м².",
  keywords: ["ангар для сельхозтехники", "хранение тракторов", "ангар для комбайна", "машинный двор"],
};

const faqData = [
  {
    question: "Нужно ли утеплять ангар для техники?",
    answer: "Для хранения в зимний период — нет. Достаточно холодного ангара из профлиста. Утепление нужно только если в ангаре будет ремонтная зона или обслуживание в мороз."
  },
  {
    question: "Какой пол сделать под технику?",
    answer: "Бетонная плита толщиной минимум 150 мм с армированием. Под комбайны и тяжёлые тракторы (25+ т) — 200 мм с усиленным армированием. Стоимость 800–1 200 ₽/м²."
  },
  {
    question: "Какая высота ворот нужна для комбайна?",
    answer: "Для современных зерноуборочных комбайнов (Acros, Torum) — ворота высотой минимум 5 метров. С жаткой в транспортном положении — ширина не менее 5 м. Рекомендуется 5×5,5 м."
  }
];

export default function AngarDlyaSelhoztekhnikPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ангар для хранения сельхозтехники",
    "description": "Требования к размерам и конструкции ангара для тракторов и комбайнов.",
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
            Сельхозздания
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ангар для хранения сельхозтехники
          </h1>

          <p className="text-muted mb-6">
            Хранение под открытым небом сокращает ресурс техники на 30–40%. Правильный ангар защищает от коррозии, ультрафиолета и промерзания гидравлики.
          </p>

          <h2 className="text-lg font-semibold text-foreground mb-3">Минимальные размеры под технику</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Техника</th>
                  <th className="text-left py-3 font-semibold">Мин. ширина ворот</th>
                  <th className="text-left py-3 font-semibold">Мин. высота ворот</th>
                  <th className="text-left py-3 font-semibold">Рек. шаг колонн</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Трактор МТЗ</td>
                  <td className="py-3 text-muted">3,5 м</td>
                  <td className="py-3 text-muted">3,8 м</td>
                  <td className="py-3 text-muted">6 м</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Трактор Кировец К-7</td>
                  <td className="py-3 text-muted">4,5 м</td>
                  <td className="py-3 text-muted">4,5 м</td>
                  <td className="py-3 text-muted">9–12 м</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Комбайн Acros/Vector</td>
                  <td className="py-3 text-muted">5,0 м</td>
                  <td className="py-3 text-muted">5,0 м</td>
                  <td className="py-3 text-muted">12 м</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Комбайн Torum</td>
                  <td className="py-3 text-muted">5,5 м</td>
                  <td className="py-3 text-muted">5,5 м</td>
                  <td className="py-3 text-muted">12–18 м</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Опрыскиватель прицепной</td>
                  <td className="py-3 text-muted">4,0 м</td>
                  <td className="py-3 text-muted">4,0 м</td>
                  <td className="py-3 text-muted">9 м</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Стоимость ангара для техники</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Размер</th>
                  <th className="text-left py-3 font-semibold">Вместимость</th>
                  <th className="text-left py-3 font-semibold">Каркас ЛСТК</th>
                  <th className="text-left py-3 font-semibold">Под ключ (холодный)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">12×24 м</td>
                  <td className="py-3 text-muted">2–3 трактора</td>
                  <td className="py-3 font-medium">~1 570 000 ₽</td>
                  <td className="py-3 font-medium">~2 200 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">18×40 м</td>
                  <td className="py-3 text-muted">4–6 единиц</td>
                  <td className="py-3 font-medium">~3 100 000 ₽</td>
                  <td className="py-3 font-medium">~4 500 000 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">24×60 м</td>
                  <td className="py-3 text-muted">Машинный двор</td>
                  <td className="py-3 font-medium">~6 700 000 ₽</td>
                  <td className="py-3 font-medium">~9 500 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Совет:</strong> для хранения без отопления используйте профлист вместо сэндвич-панелей — экономия 30–40% на стенах и кровле. Достаточно С20 для стен и МП-20 для кровли с уклоном от 8°.
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
