import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Огнестойкость металлоконструкций | Классы R15–R120",
  description: "Огнестойкость стальных конструкций: классы R15, R30, R45, R60, R90. Методы огнезащиты — краска, штукатурка, облицовка. Требования МЧС.",
  keywords: ["огнестойкость металлоконструкций", "огнезащита стали", "класс огнестойкости ангара", "R15 R30 R45"],
};

const faqData = [
  {
    question: "Сталь горит?",
    answer: "Нет, но при 500°C теряет 50% несущей способности. Без защиты стальная колонна выдерживает пожар 15 минут (R15)."
  },
  {
    question: "Какой класс огнестойкости нужен для склада?",
    answer: "Для складов категории В (обычные товары) — минимум R30. Для категории А/Б (горючие вещества) — R45 или R60."
  },
  {
    question: "Что дешевле — огнезащитная краска или штукатурка?",
    answer: "Краска дешевле в нанесении, но дороже по материалу. Штукатурка экономичнее для больших площадей, но увеличивает сечение конструкции."
  }
];

export default function OgnestojkostPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Огнестойкость металлоконструкций
          </h1>

          <p className="text-muted mb-6">
            Предел огнестойкости — время, в течение которого конструкция сохраняет несущую способность 
            при пожаре. Обозначается буквой <strong>R</strong> и числом минут: R15, R30, R45, R60, R90, R120.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Класс</th>
                  <th className="text-left py-3 font-semibold">Метод защиты</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">R15</td>
                  <td className="py-3">Без защиты (голая сталь)</td>
                  <td className="py-3 text-muted">Неотапливаемые склады, навесы</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">R30</td>
                  <td className="py-3">Тонкослойная огнезащитная краска</td>
                  <td className="py-3 text-muted">Производственные здания кат. В</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">R45</td>
                  <td className="py-3">Вспучивающаяся краска 1-2 мм</td>
                  <td className="py-3 text-muted">Торговые центры, общественные здания</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">R60</td>
                  <td className="py-3">Огнезащитная штукатурка 20-30 мм</td>
                  <td className="py-3 text-muted">Многоэтажные здания</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">R90–R120</td>
                  <td className="py-3">Облицовка ГКЛ / бетонирование</td>
                  <td className="py-3 text-muted">Высотные здания, убежища</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>По 123-ФЗ:</strong> Класс огнестойкости определяется функциональным назначением 
              здания, его этажностью и площадью пожарного отсека.
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

          <Link href="/knowledge/vorota-dlya-angara/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Ворота для ангара
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
