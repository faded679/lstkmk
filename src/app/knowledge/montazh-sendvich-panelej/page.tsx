import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Монтаж сэндвич-панелей: технология и сроки | МАКСТИЛ",
  description: "Технология монтажа стеновых и кровельных сэндвич-панелей: крепёж, нахлёсты, герметизация, расценки.",
  keywords: ["монтаж сэндвич-панелей", "технология монтажа сэндвич", "крепление сэндвич-панелей", "сэндвич кровля монтаж"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/montazh-sendvich-panelej/" },
};

const faqData = [
  {
    question: "Сколько панелей монтируют за смену?",
    answer: "Бригада из 4 человек ставит 100-150 м² стеновых панелей за смену. Кровельных — 80-120 м² (сложнее из-за высоты)."
  },
  {
    question: "Какой шаг крепления панелей?",
    answer: "К прогонам/ригелям — в каждом ребре жёсткости, через 250-500 мм. На углах и торцах шаг уменьшают вдвое."
  },
  {
    question: "Чем герметизировать стыки?",
    answer: "Бутил-каучуковая лента в замке + силиконовый герметик снаружи. Для холодильников добавляют пенополиуретановый шов."
  }
];

export default function MontazhSendvichPage() {
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
            Монтаж сэндвич-панелей
          </h1>

          <p className="text-muted mb-6">
            От качества монтажа зависит срок службы ограждающих конструкций и теплоэффективность здания.
            Нарушение технологии ведёт к промерзанию, протечкам и деформации панелей. Работы регулируются
            <strong> СП 70.13330.2012</strong> и инструкциями производителя.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Этап</th>
                  <th className="text-left py-3 font-semibold">Что делают</th>
                  <th className="text-left py-3 font-semibold">Время</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Приёмка</td>
                  <td className="py-3">Проверка геометрии, замков, защитной плёнки</td>
                  <td className="py-3 text-muted">1 день</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Подготовка</td>
                  <td className="py-3">Контроль каркаса, цокольный нащельник</td>
                  <td className="py-3 text-muted">1-2 дня</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Стены</td>
                  <td className="py-3">Установка снизу вверх, крепление к ригелям</td>
                  <td className="py-3 text-muted">5-10 дней</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Кровля</td>
                  <td className="py-3">Монтаж от свеса к коньку с нахлёстом 200 мм</td>
                  <td className="py-3 text-muted">5-7 дней</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Доборы</td>
                  <td className="py-3">Углы, нащельники, парапеты, водоотлив</td>
                  <td className="py-3 text-muted">2-3 дня</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Запрет:</strong> монтаж при температуре ниже -15°C и при ветре более 10 м/с.
              Резка только электролобзиком или ножовкой — болгарка прожигает покрытие и разрушает замок.
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

          <Link href="/knowledge/sendvich-paneli-vidy/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Сэндвич-панели: виды и характеристики
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
