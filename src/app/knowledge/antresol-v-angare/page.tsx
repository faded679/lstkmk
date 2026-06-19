import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Антресоль в ангаре: расчёт и цены | МАКСТИЛ",
  description: "Антресольный этаж в ангаре ЛСТК: проектирование, нагрузки, материалы, цены за м². Удвоение полезной площади.",
  keywords: ["антресоль в ангаре", "второй этаж в ангаре", "антресольный этаж", "мезонин в складе"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/antresol-v-angare/" },
};

const faqData = [
  {
    question: "Зачем нужна антресоль?",
    answer: "Удваивает полезную площадь без увеличения пятна застройки. Внизу — техника и хранение, наверху — офис, бытовка или лёгкое хранение."
  },
  {
    question: "Какая высота нужна под антресоль?",
    answer: "Минимум 6 м в чистоте: 2,5 м нижний ярус, 0,3-0,5 м перекрытие, 2,5 м верхний ярус, 0,3 м запас."
  },
  {
    question: "Сколько стоит антресоль 100 м²?",
    answer: "От 6 500 ₽/м² за металлический каркас с настилом. С отделкой и лестницей — от 12 000 ₽/м²."
  }
];

export default function AntresolPage() {
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
            Антресоль в ангаре
          </h1>

          <p className="text-muted mb-6">
            Антресольный этаж — самый выгодный способ удвоить полезную площадь в высоком ангаре.
            Конструкция автономна от основного каркаса: собственные колонны, балки и настил.
            Не требует усиления здания, демонтируется при перепланировке.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Нагрузка</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                  <th className="text-left py-3 font-semibold">Конструкция</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">200 кг/м²</td>
                  <td className="py-3">Офис, бытовка, лёгкий архив</td>
                  <td className="py-3 text-muted">Профлист + цементно-стружечная плита</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">500 кг/м²</td>
                  <td className="py-3">Хранение коробок и тары</td>
                  <td className="py-3 text-muted">Профлист + бетонная стяжка 80 мм</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">1000 кг/м²</td>
                  <td className="py-3">Паллетное хранение, оборудование</td>
                  <td className="py-3 text-muted">Монолитная плита по профлисту</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Что входит в проект</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Колонны из квадратной трубы или двутавра</li>
            <li>Главные и второстепенные балки перекрытия</li>
            <li>Настил по расчётной нагрузке</li>
            <li>Лестница и ограждения по ГОСТ 25772</li>
            <li>Грузовой подъёмник по необходимости</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Пожарные требования:</strong> при площади антресоли более 40% от пола первого
              этажа она считается полноценным этажом — нужна эвакуационная лестница и автоматика пожаротушения.
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

          <Link href="/knowledge/stellazhi-dlya-sklada/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Стеллажи для склада
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
