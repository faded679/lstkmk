import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Производственный цех из ЛСТК под ключ | МАКСТИЛ",
  description: "Строительство производственных цехов и мастерских из металлоконструкций. Цены, сроки, проектирование.",
  keywords: ["производственный цех", "цех металлоконструкции", "строительство цеха под ключ"],
  openGraph: {
    title: "Производственный цех из ЛСТК",
    description: "Цех из металлоконструкций под ключ.",
    url: "https://lstkmk.ru/knowledge/proizvodstvennyj-ceh/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/proizvodstvennyj-ceh/",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          База знаний
        </Link>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Производственный цех из ЛСТК
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Цех из ЛСТК — быстрое и экономичное решение для производства. Проектируем с учётом технологических процессов.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Типовые параметры</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-muted">
                <li><strong>Площадь:</strong> от 300 м² до 10 000 м²</li>
                <li><strong>Высота:</strong> от 6 м (под кран-балку от 8 м)</li>
                <li><strong>Пролёт:</strong> 12-36 м (без колонн до 60 м)</li>
                <li><strong>Нагрузка:</strong> до 20 тонн на колонну</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Обязательные системы</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Утепление</strong> — сэндвич-панели 100-150 мм с минватой</li>
              <li><strong>Отопление</strong> — водяное или воздушное</li>
              <li><strong>Освещение</strong> — 200-500 люкс по зонам</li>
              <li><strong>Вентиляция</strong> — приточно-вытяжная с фильтрацией</li>
              <li><strong>Электроснабжение</strong> — до 1 МВт мощности</li>
              <li><strong>Огнезащита</strong> — R30-R90 по нормам</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Цены под ключ 2025</h2>
            <table className="w-full text-left border-collapse mb-6">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 font-semibold">Комплектация</th>
                  <th className="py-3 font-semibold">Цена за м²</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-slate-100">
                  <td className="py-3">Каркас + профнастил (холодный)</td>
                  <td className="py-3 font-medium">от 6 000 ₽</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3">С утеплением и отоплением</td>
                  <td className="py-3 font-medium">от 11 000 ₽</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3">С инженерией (под чистовую)</td>
                  <td className="py-3 font-medium">от 15 000 ₽</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Сроки строительства</h2>
            <p className="text-muted leading-relaxed mb-6">
              Цех 1 000 м²: <strong>60-90 дней</strong> под ключ.<br/>
              Проектирование: 15 дней, производство: 30 дней, монтаж: 30-45 дней.
            </p>

            <p className="text-muted leading-relaxed">
              Проектируем цеха с учётом технологических карт. Звоните: <a href="tel:+79606322061" className="text-accent-blue font-medium">+7 (960) 632-20-61</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
