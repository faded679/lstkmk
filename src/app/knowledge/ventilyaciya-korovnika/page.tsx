import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Вентиляция в коровнике | Нормы воздухообмена по СП 56",
  description: "Вентиляция в коровнике: нормы воздухообмена, типы систем, естественная и принудительная вентиляция по СП 56-102-95.",
  keywords: ["вентиляция коровник", "нормы воздухообмена крс", "вентиляция фермы", "система вентиляции коровник"],
};

export default function VentilyaciyaKorovnikaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Вентиляция в коровнике
          </h1>
          
          <p className="text-muted mb-6">
            По СП 56-102-95 норма воздухообмена в коровнике — 17-20 м³/ч на 1 голову. 
            Это обеспечивает удаление влаги, аммиака и поддержание температуры.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Параметр</th>
                  <th className="text-left py-3 font-semibold">Норма</th>
                  <th className="text-left py-3 font-semibold">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Воздухообмен</td>
                  <td className="py-3 font-medium">17-20 м³/ч на голову</td>
                  <td className="py-3 text-muted">Обязательно по СП 56</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Температура</td>
                  <td className="py-3 font-medium">8-12°C</td>
                  <td className="py-3 text-muted">Оптимум для КРС</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Влажность</td>
                  <td className="py-3 font-medium">70-85%</td>
                  <td className="py-3 text-muted">Не выше 90%</td>
                </tr>
                <tr>
                  <td className="py-3">CO₂</td>
                  <td className="py-3 font-medium">≤ 0,25%</td>
                  <td className="py-3 text-muted">0,15% — норма</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Типы вентиляции:</strong> Естественная (через дефлекторы) — дёшево, но зависит от погоды. 
              Принудительная (вентиляторы) — дороже, но контролируемая.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Что будет при плохой вентиляции?</p>
              <p className="text-sm text-muted">Накопление аммиака ведёт к заболеваниям дыхательных путей у коров, снижению продуктивности и увеличению влажности.</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Можно ли обойтись без принудительной вентиляции?</p>
              <p className="text-sm text-muted">В небольших коровниках (до 50 голов) при правильной планировке возможна естественная вентиляция. Для больших — нужна принудительная.</p>
            </div>
          </div>

          <Link href="/knowledge/uteplenie-korovnika/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Утепление коровника
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
