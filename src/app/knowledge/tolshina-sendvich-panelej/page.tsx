import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Толщина сэндвич-панелей 100, 120, 150, 200 мм | Выбор",
  description: "Как выбрать толщину сэндвич-панелей для ангара, склада, коровника. Сравнение 100, 120, 150, 200 мм.",
  keywords: ["толщина сэндвич-панелей", "панели 150 мм", "панели 200 мм", "выбор толщины панелей"],
};

const panelData = [
  { tolshina: "80 мм", primenenie: "Навесы, летние помещения", temp: "до -10°C", cena: "от 1 800 ₽" },
  { tolshina: "100 мм", primenenie: "Склады, неотапливаемые", temp: "до -20°C", cena: "от 2 100 ₽" },
  { tolshina: "120 мм", primenenie: "Производство, цеха", temp: "до -30°C", cena: "от 2 300 ₽" },
  { tolshina: "150 мм ⭐", primenenie: "Коровники, фермы", temp: "до -40°C", cena: "от 2 600 ₽" },
  { tolshina: "200 мм ⭐", primenenie: "Холодильники, север", temp: "до -50°C", cena: "от 3 100 ₽" },
];

const faqData = [
  {
    question: "Какая толщина нужна для коровника?",
    answer: "Для коровников рекомендуется 150 мм с минеральной ватой. Это обеспечивает необходимую теплоизоляцию при вентиляции."
  },
  {
    question: "Чем отличаются панели 150 и 200 мм?",
    answer: "200 мм используются в северных регионах или для холодильных камер. 150 мм достаточно для большинства сельхоззданий в средней полосе."
  }
];

export default function TolshinaPanelejPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Толщина сэндвич-панелей
          </h1>
          
          <p className="text-muted mb-6">
            Толщина панели определяет теплоизоляцию и несущую способность. 
            Мы производим панели 150 и 200 мм для сельхозстроительства.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Толщина</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                  <th className="text-left py-3 font-semibold">Температура</th>
                </tr>
              </thead>
              <tbody>
                {panelData.map((item, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{item.tolshina}</td>
                    <td className="py-3 text-muted">{item.primenenie}</td>
                    <td className="py-3 text-muted">{item.temp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              ⭐ <strong>В наличии у нас</strong> — производим панели 150 и 200 мм под заказ 7-14 дней.
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

          <Link href="/knowledge/vysota-korovnika/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Высота коровника
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
