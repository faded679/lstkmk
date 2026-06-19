import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Гараж на 2 машины из ЛСТК: размеры и цены | МАКСТИЛ",
  description: "Двухместный гараж из металлоконструкций: размеры 6×6, 7×7, 8×8 м, утепление, ворота, цены под ключ.",
  keywords: ["гараж на 2 машины", "гараж из ЛСТК", "двухместный гараж", "гараж металлоконструкции"],
  alternates: { canonical: "https://lstkmk.ru/knowledge/garazh-na-2-mashiny/" },
};

const faqData = [
  {
    question: "Какой минимальный размер для двух авто?",
    answer: "6×6 м — две легковушки впритык. Комфортный размер — 7×7 или 6×8 м: остаётся проход и место для шкафа."
  },
  {
    question: "Нужно ли разрешение на гараж?",
    answer: "На участке ИЖС или СНТ — нет, если гараж до 50 м² и не выше двух этажей. Регистрируется по уведомлению."
  },
  {
    question: "Сколько стоит гараж 6×6 м под ключ?",
    answer: "Холодный без утепления — от 270 000 ₽. Тёплый с сэндвич-панелями 100 мм — от 540 000 ₽."
  }
];

export default function GarazhPage() {
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
            Гараж на 2 машины из ЛСТК
          </h1>

          <p className="text-muted mb-6">
            Каркасный гараж из лёгких стальных конструкций — самый быстрый и дешёвый способ построить
            крытое место для двух автомобилей. Срок строительства от двух недель, фундамент облегчённый,
            не требует тяжёлой техники.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Размер</th>
                  <th className="text-left py-3 font-semibold">Площадь</th>
                  <th className="text-left py-3 font-semibold">Холодный</th>
                  <th className="text-left py-3 font-semibold">Тёплый</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">6×6</td>
                  <td className="py-3">36 м²</td>
                  <td className="py-3">от 270 000 ₽</td>
                  <td className="py-3">от 540 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">6×8</td>
                  <td className="py-3">48 м²</td>
                  <td className="py-3">от 360 000 ₽</td>
                  <td className="py-3">от 720 000 ₽</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">7×7</td>
                  <td className="py-3">49 м²</td>
                  <td className="py-3">от 370 000 ₽</td>
                  <td className="py-3">от 735 000 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">8×8</td>
                  <td className="py-3">64 м²</td>
                  <td className="py-3">от 480 000 ₽</td>
                  <td className="py-3">от 960 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Что входит в цену под ключ</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-6">
            <li>Проект и согласование размещения</li>
            <li>Свайно-винтовой или ленточный фундамент</li>
            <li>Каркас из ЛСТК с антикоррозийной защитой</li>
            <li>Кровля профлист или сэндвич-панель</li>
            <li>Секционные или откатные ворота 2,5×2,2 м</li>
            <li>Входная дверь и окно по необходимости</li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Совет:</strong> заложите запас по высоте — минимум 2,7 м под потолком.
              Внедорожники и кроссоверы с боксами на крыше не помещаются в стандартные 2,5 м.
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

          <Link href="/knowledge/angar-dlya-avto/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая: Ангар для авто
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
