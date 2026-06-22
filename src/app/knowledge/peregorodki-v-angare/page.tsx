import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Перегородки внутри ангара: виды и цены | Справочник ЛСТК",
  description: "Какие перегородки можно сделать внутри ангара: сэндвич, профлист, каркасно-панельные. Стоимость за м², нормы пожарной безопасности.",
  keywords: ["перегородки в ангаре", "внутренние перегородки склад", "перегородка цех", "зонирование ангара"],
};

const faqData = [
  {
    question: "Нужно ли разрешение на перегородки внутри ангара?",
    answer: "Если перегородки не несущие и не меняют назначение помещений — разрешение не нужно. При разделении ангара на пожарные отсеки требуется проект с согласованием."
  },
  {
    question: "Какая перегородка самая бюджетная?",
    answer: "Профлист по металлическому каркасу — от 1 200 ₽/м². Но она холодная и не обеспечивает звукоизоляцию. Для отапливаемых зон лучше сэндвич-панель 50–80 мм."
  },
  {
    question: "Можно ли сделать перегородку из сэндвич-панелей самому?",
    answer: "Технически да, панели соединяются замком. Но для огнестойкой перегородки (противопожарная) нужна правильная заделка стыков и проёмов — лучше доверить монтажникам."
  }
];

export default function PeregorodkiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Перегородки внутри ангара: виды и цены",
    "description": "Варианты внутренних перегородок для ангаров и складов.",
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
            Конструкции
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Перегородки внутри ангара
          </h1>

          <p className="text-muted mb-6">
            Зонирование ангара позволяет создать отдельные помещения: офис, бытовку, холодильный отсек, склад. Разбираем варианты по цене и назначению.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип перегородки</th>
                  <th className="text-left py-3 font-semibold">Толщина</th>
                  <th className="text-left py-3 font-semibold">Цена, ₽/м²</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Профлист по каркасу</td>
                  <td className="py-3 text-muted">0,5 мм</td>
                  <td className="py-3 font-medium">1 100–1 500</td>
                  <td className="py-3 text-muted">Холодные зоны, разделение пролётов</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сэндвич-панель 50 мм</td>
                  <td className="py-3 text-muted">50 мм</td>
                  <td className="py-3 font-medium">2 800–3 500</td>
                  <td className="py-3 text-muted">Офис, бытовка, тёплый отсек</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сэндвич-панель 80 мм</td>
                  <td className="py-3 text-muted">80 мм</td>
                  <td className="py-3 font-medium">3 300–4 200</td>
                  <td className="py-3 text-muted">Холодильный склад, морозильная камера</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Противопожарная EI60</td>
                  <td className="py-3 text-muted">100 мм+</td>
                  <td className="py-3 font-medium">5 500–8 000</td>
                  <td className="py-3 text-muted">Разделение пожарных отсеков</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Стеклянная (алюм. профиль)</td>
                  <td className="py-3 text-muted">6–8 мм</td>
                  <td className="py-3 font-medium">6 000–12 000</td>
                  <td className="py-3 text-muted">Шоурум, переговорная, пост охраны</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3">Противопожарные требования</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Площадь пожарного отсека в складе — не более 5 200 м² (СП 2.13130)</li>
            <li>При разделении отсеков — перегородка минимум EI 45</li>
            <li>Двери в противопожарной перегородке — огнестойкие EI 30</li>
            <li>Кабельные проходки и вентиляция — с противопожарными муфтами</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Практика:</strong> для офиса и бытовки в тёплом ангаре достаточно сэндвич-панели 50 мм на ЛСТК-каркасе — стоимость комнаты 20 м² под ключ составит около 80 000–120 000 ₽.
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
