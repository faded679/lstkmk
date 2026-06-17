import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Полы в промышленном здании | Бетонные, топпинговые, полимерные",
  description: "Типы полов для промышленных зданий: бетонные с топпингом, полимерные наливные, асфальтобетонные. Выбор по нагрузке, назначению и бюджету.",
  keywords: ["промышленные полы", "бетонный пол в ангаре", "топпинговый пол", "полимерный пол склад"],
};

const faqData = [
  {
    question: "Какой пол выдержит погрузчик 5 тонн?",
    answer: "Бетонный пол толщиной 150-200 мм с армированием сеткой и топпинговым упрочнением. Марка бетона — не ниже М300."
  },
  {
    question: "Нужны ли деформационные швы?",
    answer: "Да. Нарезаются через 6×6 м (или по осям колонн). Без швов бетон трескается при усадке. Швы заполняются эластичным герметиком."
  },
  {
    question: "Полимерный или топпинговый пол — что лучше?",
    answer: "Топпинг — дешевле, выдерживает тяжёлую технику. Полимер — дороже, но беспыльный, химстойкий, подходит для пищевых производств."
  }
];

export default function PolyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Полы в промышленном здании
          </h1>

          <p className="text-muted mb-6">
            Пол — один из самых нагруженных элементов промышленного здания. 
            Выбор зависит от нагрузки (техника, стеллажи), назначения помещения 
            и требований к чистоте (пищевое производство, фармацевтика).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип пола</th>
                  <th className="text-left py-3 font-semibold">Нагрузка</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Бетонный с топпингом</td>
                  <td className="py-3 font-medium">до 10 т/м²</td>
                  <td className="py-3 text-muted">Склады, логистика, производство</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Полимерный наливной</td>
                  <td className="py-3 font-medium">до 5 т/м²</td>
                  <td className="py-3 text-muted">Пищевые, фарма, чистые помещения</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Асфальтобетонный</td>
                  <td className="py-3 font-medium">до 15 т/м²</td>
                  <td className="py-3 text-muted">Автосервисы, тяжёлая техника</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Бетонный с упрочнителем</td>
                  <td className="py-3 font-medium">до 8 т/м²</td>
                  <td className="py-3 text-muted">Универсальные цеха, мастерские</td>
                </tr>
                <tr>
                  <td className="py-3">Грунтовый (уплотнённый)</td>
                  <td className="py-3 font-medium">до 3 т/м²</td>
                  <td className="py-3 text-muted">Неотапливаемые ангары, навесы</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Рекомендация:</strong> Для складов с вилочными погрузчиками оптимален бетонный 
              пол М300 толщиной 180 мм с кварцевым топпингом 5 кг/м² и деформационными швами через 6 м.
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

          <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            <ArrowLeft size={16} />
            Вернуться в базу знаний
          </Link>
        </article>
      </main>
    </div>
  );
}
