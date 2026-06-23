import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Холодный vs тёплый склад: что выбрать | МАКСТИЛ",
  description: "Сравнение холодного и тёплого склада: стоимость строительства, эксплуатация, отопление, применение.",
  keywords: ["холодный склад", "тёплый склад", "склад без отопления", "утеплённый ангар"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/holodnyj-vs-teplyj-sklad/" },
};

const faqData = [
  {
    question: "Когда нужен только холодный склад?",
    answer: "Для строительных материалов, металла, шин, техники, дров — товаров, не боящихся минусовых температур и влажности."
  },
  {
    question: "Сколько стоит отапливать тёплый склад зимой?",
    answer: "Газ — 60-90 ₽/м²/мес. Электрика — 150-250 ₽/м²/мес. Инфракрасные обогреватели — 80-120 ₽/м²/мес."
  },
  {
    question: "Можно ли потом утеплить холодный склад?",
    answer: "Да, заменой ограждающих конструкций на сэндвич-панели или внутренним утеплением. Стоит на 30-40% дороже изначального строительства тёплого склада."
  }
];

export default function HolodnyjVsTeplyjPage() {
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
            Холодный vs тёплый склад
          </h1>

          <p className="text-muted mb-6">
            Выбор между холодным и тёплым складом — главный вопрос экономики проекта. Холодный
            обходится в полтора-два раза дешевле, но не подходит для товаров с температурным
            режимом. Решение определяется характером груза и сценарием работы персонала. Подробнее о проектировании и строительстве складских зданий — на странице <a href="/stroitelstvo-skladov-iz-metallokonstrukcij/" className="text-accent-blue hover:underline">строительство складов из металлоконструкций</a>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Параметр</th>
                  <th className="text-left py-3 font-semibold">Холодный</th>
                  <th className="text-left py-3 font-semibold">Тёплый</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Цена за м²</td>
                  <td className="py-3">от 4 500 ₽</td>
                  <td className="py-3">от 9 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Ограждения</td>
                  <td className="py-3">Профлист</td>
                  <td className="py-3">Сэндвич-панели 100-200 мм</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Отопление</td>
                  <td className="py-3">Нет</td>
                  <td className="py-3">Газ, электрика, ИК</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Сроки</td>
                  <td className="py-3">от 3 недель</td>
                  <td className="py-3">от 6 недель</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Эксплуатация</td>
                  <td className="py-3">Минимум</td>
                  <td className="py-3">Отопление + вентиляция</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Промежуточный вариант:</strong> склад с тёплой бытовкой для персонала и
              холодной основной зоной. Экономит 50% на отоплении при комфорте сотрудников.
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

          <Link href="/knowledge/uteplenie-angara/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Утепление ангара
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
