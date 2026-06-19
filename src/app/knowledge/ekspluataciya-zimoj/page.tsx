import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Эксплуатация ангара зимой: подготовка и обслуживание | МАКСТИЛ",
  description: "Эксплуатация ангара в зимний период: уборка снега, отопление, профилактика конструкций, типичные проблемы.",
  keywords: ["эксплуатация ангара зимой", "снег на кровле ангара", "уборка снега с ангара", "обслуживание ангара зимой"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/ekspluataciya-zimoj/" },
};

const faqData = [
  {
    question: "При какой толщине снега нужно чистить кровлю?",
    answer: "Когда нагрузка превышает 70% расчётной. Для I снегового района — при 25 см мокрого или 50 см сухого снега."
  },
  {
    question: "Чем чистить снег с сэндвич-кровли?",
    answer: "Пластиковая лопата или щётка. Металлический инструмент повреждает покрытие, а вибрация лома деформирует панели."
  },
  {
    question: "Нужно ли проверять каркас весной?",
    answer: "Да. После таяния осматривают узлы, болтовые соединения и крепления панелей. Зимние нагрузки могут ослабить соединения."
  }
];

export default function EkspluataciyaZimojPage() {
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
            Эксплуатация ангара зимой
          </h1>

          <p className="text-muted mb-6">
            Зимняя эксплуатация — главное испытание для металлоконструкций. Снеговая нагрузка,
            перепады температур и обледенение требуют контроля состояния каркаса и ограждений.
            Регулярное обслуживание продлевает срок службы здания на 30-40%.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Работа</th>
                  <th className="text-left py-3 font-semibold">Периодичность</th>
                  <th className="text-left py-3 font-semibold">Зачем</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Уборка снега</td>
                  <td className="py-3">При нагрузке &gt;70%</td>
                  <td className="py-3 text-muted">Защита от обрушения</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Очистка водостоков</td>
                  <td className="py-3">Перед зимой и весной</td>
                  <td className="py-3 text-muted">Предотвращение ледяных пробок</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">Проверка ворот</td>
                  <td className="py-3">Раз в месяц</td>
                  <td className="py-3 text-muted">Замерзают уплотнители</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Осмотр узлов</td>
                  <td className="py-3">Весной и осенью</td>
                  <td className="py-3 text-muted">Контроль деформаций</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Типичные зимние проблемы</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Снежные мешки в местах примыкания к парапетам</li>
            <li>Образование наледи на свесах и в водосточных воронках</li>
            <li>Промерзание сэндвич-панелей в зоне крепежа</li>
            <li>Конденсат на внутренней поверхности в неутеплённых ангарах</li>
            <li>Заклинивание секционных ворот при -30°C</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Безопасность:</strong> работы на кровле в одиночку запрещены. Минимум два
              человека, страховочная привязь, противоскользящая обувь. При обледенении — только специалисты.
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

          <Link href="/knowledge/snegovoj-rajon/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Снеговой район
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
