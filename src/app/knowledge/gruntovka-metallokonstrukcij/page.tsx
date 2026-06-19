import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Грунтовка металлоконструкций: виды и расход | МАКСТИЛ",
  description: "Грунт для металла перед монтажом ангара: ГФ-021, эпоксидные, цинконаполненные. Расход, срок службы, цены.",
  keywords: ["грунтовка металлоконструкций", "грунт по металлу", "ГФ-021", "цинконаполненный грунт"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/gruntovka-metallokonstrukcij/" },
};

const faqData = [
  {
    question: "Можно ли красить металл без грунтовки?",
    answer: "Нет. Краска без грунта отслаивается через 1-2 года, ржавчина появляется под слоем. Грунт даёт адгезию и защищает от коррозии."
  },
  {
    question: "Сколько грунта уходит на 1 тонну металлоконструкций?",
    answer: "В среднем 8-12 кг на тонну при двух слоях. Зависит от толщины профиля и сложности геометрии."
  },
  {
    question: "Какой срок службы у заводской грунтовки?",
    answer: "ГФ-021 — до 5 лет на улице. Эпоксидный грунт — 10-15 лет. Цинконаполненный — до 20 лет в умеренных условиях."
  }
];

export default function GruntovkaPage() {
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
            Грунтовка металлоконструкций
          </h1>

          <p className="text-muted mb-6">
            Грунт — обязательный слой защиты стального каркаса перед монтажом и финишной окраской.
            Без грунтовки металлоконструкции ржавеют за один сезон. Выбор грунта зависит от условий
            эксплуатации, требуемого срока службы и бюджета.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Грунт</th>
                  <th className="text-left py-3 font-semibold">Срок защиты</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">ГФ-021</td>
                  <td className="py-3">3-5 лет</td>
                  <td className="py-3 text-muted">Бюджетный, для отапливаемых зданий</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">ПФ-115</td>
                  <td className="py-3">5-7 лет</td>
                  <td className="py-3 text-muted">Универсальный, наружные работы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Эпоксидный</td>
                  <td className="py-3">10-15 лет</td>
                  <td className="py-3 text-muted">Промышленные здания, агрессивная среда</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Цинконаполненный</td>
                  <td className="py-3">15-20 лет</td>
                  <td className="py-3 text-muted">Мосты, порты, химзаводы</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Этапы нанесения</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Пескоструйная очистка до степени Sa 2,5 (ISO 8501-1)</li>
            <li>Обезжиривание поверхности</li>
            <li>Нанесение грунта в 1-2 слоя, толщина 60-80 мкм каждый</li>
            <li>Сушка 24 часа между слоями</li>
            <li>Финишная окраска или транспортировка на объект</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>ГОСТ 9.402-2004:</strong> регламентирует подготовку металлических поверхностей
              перед окрашиванием. Несоблюдение требований ведёт к отслоению покрытия.
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

          <Link href="/knowledge/antikorrozijnaya-obrabotka/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Антикоррозийная обработка профиля
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
