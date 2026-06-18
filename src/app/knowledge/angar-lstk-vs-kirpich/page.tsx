import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ангар ЛСТК vs кирпич: что лучше | МАКСТИЛ",
  description: "Сравнение ангаров из ЛСТК и кирпича. Цена, сроки, теплоизоляция, сейсмостойкость. Что выгоднее для бизнеса.",
  keywords: ["ангар ЛСТК vs кирпич", "ангар из металлоконструкций или кирпич", "сравнение ЛСТК и кирпич"],
  openGraph: {
    title: "Ангар ЛСТК vs кирпич: сравнение",
    description: "Что выгоднее и быстрее построить.",
    url: "https://lstkmk.ru/knowledge/angar-lstk-vs-kirpich/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/angar-lstk-vs-kirpich/",
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
            Ангар ЛСТК vs кирпич: сравнение
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Выбор между быстровозводимым ангаром и капитальным кирпичным зданием. Сравниваем по ключевым параметрам.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mb-6">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-3 font-semibold">Параметр</th>
                    <th className="py-3 font-semibold text-accent-blue">ЛСТК</th>
                    <th className="py-3 font-semibold">Кирпич</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Срок строительства</td>
                    <td className="py-3 font-medium">45-60 дней</td>
                    <td className="py-3">6-12 месяцев</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Цена за м²</td>
                    <td className="py-3 font-medium">от 4 500 ₽</td>
                    <td className="py-3">от 25 000 ₽</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Сейсмостойкость</td>
                    <td className="py-3 font-medium">до 9 баллов</td>
                    <td className="py-3">до 7 баллов</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Максимальный пролёт</td>
                    <td className="py-3 font-medium">до 60 м</td>
                    <td className="py-3">до 12 м</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Перепланировка</td>
                    <td className="py-3 font-medium">Возможна</td>
                    <td className="py-3">Невозможна</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Вывод</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>ЛСТК выигрывает</strong> по цене (в 5-6 раз дешевле), скорости (в 5-10 раз быстрее) и гибкости.
              Кирпич подходит только если нужен престижный фасад для офиса.
            </p>
            <p className="text-muted leading-relaxed">
              Для складов, производств и сельхоззданий — <strong>ЛСТК однозначно выгоднее</strong>.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
