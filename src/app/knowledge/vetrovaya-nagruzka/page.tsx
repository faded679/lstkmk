import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ветровая нагрузка на здание из металлоконструкций | Расчёт по СП",
  description: "Расчёт ветровой нагрузки на ангар и склад по СП 20.13330. Ветровые районы России, коэффициенты и влияние формы здания.",
  keywords: ["ветровая нагрузка на ангар", "расчёт ветровой нагрузки", "ветровые районы России", "СП 20.13330 ветер"],
};

const faqData = [
  {
    question: "Как узнать свой ветровой район?",
    answer: "По карте районирования в СП 20.13330 (Приложение Ж) или по таблице городов. Например, Москва — I район, Новороссийск — V район."
  },
  {
    question: "Влияет ли высота здания на ветровую нагрузку?",
    answer: "Да. Чем выше здание, тем больше коэффициент k(z). Для здания 10 м он может быть в 1,5 раза больше, чем для здания 5 м."
  },
  {
    question: "Что опаснее для ангара — давление или отсос ветра?",
    answer: "Отсос (разрежение). На подветренной стороне и на кровле возникает отрицательное давление, которое «сдирает» ограждающие конструкции."
  }
];

export default function VetrovayaNagruzkaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ветровая нагрузка на здание из металлоконструкций
          </h1>

          <p className="text-muted mb-6">
            Ветровая нагрузка — один из ключевых факторов при проектировании каркаса. 
            Расчёт ведётся по <strong>СП 20.13330.2016</strong> с учётом района строительства, 
            высоты здания и типа местности.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Ветровой район</th>
                  <th className="text-left py-3 font-semibold">Давление, кПа</th>
                  <th className="text-left py-3 font-semibold">Примеры городов</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">I</td>
                  <td className="py-3 font-medium">0,17</td>
                  <td className="py-3 text-muted">Москва, Казань, Самара</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">II</td>
                  <td className="py-3 font-medium">0,23</td>
                  <td className="py-3 text-muted">Санкт-Петербург, Нижний Новгород</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">III</td>
                  <td className="py-3 font-medium">0,30</td>
                  <td className="py-3 text-muted">Краснодар, Ростов-на-Дону</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">IV</td>
                  <td className="py-3 font-medium">0,38</td>
                  <td className="py-3 text-muted">Астрахань, Махачкала</td>
                </tr>
                <tr>
                  <td className="py-3">V</td>
                  <td className="py-3 font-medium">0,48</td>
                  <td className="py-3 text-muted">Новороссийск, Владивосток</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Формула:</strong> W = W₀ × k(z) × c, где W₀ — нормативное давление ветра, 
              k(z) — коэффициент высоты, c — аэродинамический коэффициент формы здания.
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

          <Link href="/knowledge/prolet-bez-kolonn/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Максимальный пролёт без колонн
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
