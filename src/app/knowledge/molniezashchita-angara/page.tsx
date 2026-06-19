import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Молниезащита ангара: расчёт и монтаж | СО 153-34.21.122",
  description: "Молниезащита ангара из металлоконструкций: категории, расчёт зоны защиты, заземление, цены на монтаж.",
  keywords: ["молниезащита ангара", "громоотвод ангар", "заземление металлоконструкций", "СО 153-34.21.122"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/molniezashchita-angara/" },
};

const faqData = [
  {
    question: "Нужна ли молниезащита металлическому ангару?",
    answer: "Да. Сам каркас не заменяет молниезащиту — нужна полноценная система с молниеприёмником, токоотводом и заземлителем."
  },
  {
    question: "Какое сопротивление заземления допустимо?",
    answer: "Не более 10 Ом для I-II категории и не более 50 Ом для III категории молниезащиты."
  },
  {
    question: "Сколько стоит молниезащита для ангара 1000 м²?",
    answer: "От 80 000 до 250 000 ₽ в зависимости от категории, высоты здания и удельного сопротивления грунта."
  }
];

export default function MolniezashchitaPage() {
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
            Молниезащита ангара
          </h1>

          <p className="text-muted mb-6">
            Молниезащита обязательна для зданий выше 10 м и сооружений с категорией пожароопасности.
            Регламент — <strong>СО 153-34.21.122-2003</strong> и <strong>РД 34.21.122-87</strong>.
            Система состоит из молниеприёмника, токоотвода и заземляющего контура.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Категория</th>
                  <th className="text-left py-3 font-semibold">Объект</th>
                  <th className="text-left py-3 font-semibold">Надёжность</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">I</td>
                  <td className="py-3">Взрывоопасные производства, склады ГСМ</td>
                  <td className="py-3 text-muted">0,99</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">II</td>
                  <td className="py-3">Производственные цеха, элеваторы</td>
                  <td className="py-3 text-muted">0,95</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">III</td>
                  <td className="py-3">Обычные ангары, склады, фермы</td>
                  <td className="py-3 text-muted">0,90</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Состав системы</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Молниеприёмник: стержень, трос или сетка по кровле</li>
            <li>Токоотводы: круглая сталь Ø8 мм, минимум 2 шт по углам</li>
            <li>Заземлитель: контур из стальной полосы 40×4 мм на глубине 0,5 м</li>
            <li>Соединения сваркой или болтами М10</li>
            <li>Уравнивание потенциалов металлических частей здания</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Совет:</strong> при проектировании ангара заранее закладывают арматурные выпуски
              из фундамента под молниезащиту. Это вдвое дешевле, чем монтаж постфактум.
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

          <Link href="/knowledge/ognestojkost-metallokonstrukcij/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Огнестойкость металлоконструкций
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
