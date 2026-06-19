import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Стеллажи для склада: типы и расчёт | МАКСТИЛ",
  description: "Стеллажи для склада ЛСТК: фронтальные, набивные, консольные, мезонинные. Выбор по нагрузке и SKU.",
  keywords: ["стеллажи для склада", "фронтальные стеллажи", "набивные стеллажи", "консольные стеллажи"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/stellazhi-dlya-sklada/" },
};

const faqData = [
  {
    question: "Какие стеллажи дешевле всех?",
    answer: "Полочные для лёгкой коробочной продукции — от 4 000 ₽/м². Самые дорогие — автоматизированные шаттл-системы."
  },
  {
    question: "Какая высота яруса оптимальна?",
    answer: "Для паллет 1,8-2,0 м с учётом поддона и просвета. Для коробок — 0,5-0,8 м под рост комплектовщика."
  },
  {
    question: "Нужны ли отдельные проекты под стеллажи?",
    answer: "Да, при высоте более 5 м или нагрузке от 500 кг/ярус. Проект учитывает сейсмику и анкеровку к полу."
  }
];

export default function StellazhiPage() {
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
            Стеллажи для склада
          </h1>

          <p className="text-muted mb-6">
            Стеллажная система — половина эффективности склада. Правильный выбор увеличивает
            полезный объём в 2-4 раза по сравнению с напольным хранением и ускоряет комплектацию заказов.
            Выбор зависит от типа товара, оборачиваемости и высоты ангара.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                  <th className="text-left py-3 font-semibold">Принцип</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Фронтальные</td>
                  <td className="py-3">Универсальные, быстрый доступ к паллете</td>
                  <td className="py-3 text-muted">FIFO/LIFO</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Набивные</td>
                  <td className="py-3">Однородный товар большими партиями</td>
                  <td className="py-3 text-muted">LIFO</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Гравитационные</td>
                  <td className="py-3">Скоропортящиеся, точный FIFO</td>
                  <td className="py-3 text-muted">FIFO</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Консольные</td>
                  <td className="py-3">Длинномер: трубы, профиль, доска</td>
                  <td className="py-3 text-muted">—</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Мезонинные</td>
                  <td className="py-3">Мелкий товар, удвоение площади</td>
                  <td className="py-3 text-muted">Ручная комплектация</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Правило ширины проходов:</strong> для штабелёра — 1,8 м, для ричтрака — 2,4 м,
              для классического погрузчика — 3,5-4 м. От этого зависит сколько стеллажей встанет в ангар.
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

          <Link href="/knowledge/poly-v-promyshlennom-zdanii/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Полы в промышленном здании
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
