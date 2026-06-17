import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Минимальный уклон кровли из сэндвич-панелей | Нормы СП",
  description: "Минимальный уклон кровли из сэндвич-панелей: 5° для панелей и 8° для профлиста. Нормы, рекомендации и последствия нарушений.",
  keywords: ["уклон кровли сэндвич-панели", "минимальный уклон крыши ангара", "уклон кровли из профлиста", "нормы уклона кровли"],
};

const faqData = [
  {
    question: "Можно ли сделать плоскую кровлю из сэндвич-панелей?",
    answer: "Нет. Минимальный уклон — 5° (около 8%). При меньшем уклоне на стыках панелей скапливается вода, что приводит к протечкам и коррозии."
  },
  {
    question: "Какой уклон оптимален для снеговых регионов?",
    answer: "Для III-V снеговых районов рекомендуется уклон 10-15°. Снег сходит самостоятельно, нагрузка на кровлю минимальна."
  },
  {
    question: "Зависит ли уклон от длины ската?",
    answer: "Да. При длине ската более 12 м рекомендуется увеличить уклон на 1-2° для надёжного водоотвода."
  }
];

export default function UklonKrovliPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Минимальный уклон кровли из сэндвич-панелей
          </h1>

          <p className="text-muted mb-6">
            Минимальный допустимый уклон кровли для сэндвич-панелей — <strong>5°</strong> (около 8%). 
            Для профлиста без герметизации стыков — <strong>8°</strong>. Нарушение этих норм 
            приводит к застою воды, протечкам и ускоренной коррозии.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Тип покрытия</th>
                  <th className="text-left py-3 font-semibold">Мин. уклон</th>
                  <th className="text-left py-3 font-semibold">Рекомендуемый</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Сэндвич-панель кровельная</td>
                  <td className="py-3 font-medium">5° (8%)</td>
                  <td className="py-3 text-muted">7-10°</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Профлист с герметиком</td>
                  <td className="py-3 font-medium">5° (8%)</td>
                  <td className="py-3 text-muted">8-12°</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Профлист без герметика</td>
                  <td className="py-3 font-medium">8° (14%)</td>
                  <td className="py-3 text-muted">10-15°</td>
                </tr>
                <tr>
                  <td className="py-3">Мембранная кровля</td>
                  <td className="py-3 font-medium">1,5° (2,5%)</td>
                  <td className="py-3 text-muted">3-5°</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>По СП 17.13330:</strong> Уклон кровли из металлических листов без герметизации 
              продольных нахлёстов должен быть не менее 8%. С герметизацией — не менее 5%.
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

          <Link href="/knowledge/vetrovaya-nagruzka/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Ветровая нагрузка на здание
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
