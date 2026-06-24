import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Зернохранилище из металлоконструкций под ключ | МАКСТИЛ",
  description: "Строительство зернохранилищ из ЛСКТ. Проектирование, вентиляция, герметичность. Цены от 4 500 ₽/м².",
  keywords: ["зернохранилище", "зернохранилище металлоконструкции", "строительство зернохранилища"],
  openGraph: {
    title: "Зернохранилище из металлоконструкций",
    description: "Проектирование и строительство зернохранилищ.",
    url: "https://lstkmk.ru/knowledge/zernohranilishche/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/zernohranilishche/",
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
            Зернохранилище из металлоконструкций
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-6">
              Зернохранилище из ЛСТК — быстровозводимое решение для хранения зерна. Строится за 30-45 дней, служит от 50 лет.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Особенности конструкции</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота от 6 до 12 м для размещения силосов</li>
              <li>Шаг колонн 6-12 м — под любое оборудование</li>
              <li>Пролёты до 36 м без промежуточных опор</li>
              <li>Герметичные ограждающие конструкции</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Вентиляция и микроклимат</h2>
            <p className="text-muted leading-relaxed mb-4">
              Обязательна активная вентиляция зерна. Вентиляционные каналы в полу, система рециркуляции воздуха.
              Температура хранения не выше +10°C.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Цены и сроки</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-muted">
                <li>Холодный каркас: <strong>от 4 500 ₽/м²</strong></li>
                <li>С утеплением (вентилируемый фасад): <strong>от 7 000 ₽/м²</strong></li>
                <li>Срок строительства: <strong>30-45 дней</strong></li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Проектируем зернохранилища от 500 до 50 000 тонн. Звоните: <a href="tel:+79606322061" className="text-accent-blue font-medium">+7 (960) 632-20-61</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
