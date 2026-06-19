import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Замена кровли ангара: технология и цены | МАКСТИЛ",
  description: "Реконструкция кровли ангара: демонтаж старого покрытия, проверка ферм, замена на профлист или сэндвич-панели.",
  keywords: ["замена кровли ангара", "реконструкция кровли", "ремонт кровли ангара", "перекрытие ангара"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/zamena-krovli-angara/" },
};

const faqData = [
  {
    question: "Можно ли менять кровлю без остановки работы склада?",
    answer: "Да, посекционно — захватками по 100-200 м². Над рабочей зоной ставят временный навес или работают в выходные."
  },
  {
    question: "Сколько стоит замена 1 м² кровли?",
    answer: "Демонтаж + новый профлист — от 1 200 ₽/м². Замена на сэндвич-панели — от 3 500 ₽/м² с учётом утеплителя."
  },
  {
    question: "Нужно ли менять прогоны?",
    answer: "Если прогоны без коррозии и геометрия в норме — оставляют. Точечную замену делают только повреждённых участков."
  }
];

export default function ZamenaKrovliPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Замена кровли ангара
          </h1>

          <p className="text-muted mb-6">
            Кровля ангара служит 15-25 лет в зависимости от материала и условий. Признаки износа:
            протечки, коррозия креплений, отслоение защитного покрытия, деформация листов.
            Реконструкция дешевле сноса и нового строительства на 60-70%.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Этап</th>
                  <th className="text-left py-3 font-semibold">Работы</th>
                  <th className="text-left py-3 font-semibold">Сроки</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Обследование</td>
                  <td className="py-3">Проверка ферм, прогонов, расчёт нагрузки</td>
                  <td className="py-3 text-muted">3-5 дней</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Демонтаж</td>
                  <td className="py-3">Снятие старого покрытия и крепежа</td>
                  <td className="py-3 text-muted">5-10 дней</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Ремонт каркаса</td>
                  <td className="py-3">Усиление, замена прогонов, антикоррозия</td>
                  <td className="py-3 text-muted">5-15 дней</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Новая кровля</td>
                  <td className="py-3">Монтаж профлиста или сэндвич-панелей</td>
                  <td className="py-3 text-muted">10-20 дней</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Когда дешевле новое строительство:</strong> износ каркаса более 40%,
              осевшие фундаменты, несоответствие старого ангара современным снеговым нагрузкам.
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

          <Link href="/knowledge/minimalnyj-uklon-krovli/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Минимальный уклон кровли
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
