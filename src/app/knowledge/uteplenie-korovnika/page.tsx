import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Утепление коровника | Теплозащита фермы по СП 50",
  description: "Требования к утеплению коровника. Теплозащита стен и кровли, выбор утеплителя, сопротивление теплопередаче по СП 50.",
  keywords: ["утепление коровник", "теплозащита фермы", "утеплитель коровник", "сопротивление теплопередаче"],
};

export default function UteplenieKorovnikaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Утепление коровника
          </h1>
          
          <p className="text-muted mb-6">
            Теплозащита коровника обеспечивает поддержание температуры 8-12°C при минимальных затратах на отопление. 
            Основа — сэндвич-панели с минеральной ватой.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Конструкция</th>
                  <th className="text-left py-3 font-semibold">Толщина</th>
                  <th className="text-left py-3 font-semibold">R₀, м²·°С/Вт</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Стены ⭐</td>
                  <td className="py-3 font-medium">150 мм</td>
                  <td className="py-3">3,5</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Кровля ⭐</td>
                  <td className="py-3 font-medium">200 мм</td>
                  <td className="py-3">4,5</td>
                </tr>
                <tr>
                  <td className="py-3">Пол</td>
                  <td className="py-3 font-medium">100 мм</td>
                  <td className="py-3">2,5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              ⭐ <strong>Рекомендуем</strong> — сэндвич-панели с минеральной ватой: негорючие, паропроницаемые, 
              выдерживают дезинфекцию. Пенополиуретан (ППУ) дешевле, но пожароопасен.
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Нужно ли утеплять коровник полностью?</p>
              <p className="text-sm text-muted">Да, особенно в северных регионах. Но важен баланс — при слишком хорошем утеплении возрастает влажность, требуется усиленная вентиляция.</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Можно ли утеплить уже построенный коровник?</p>
              <p className="text-sm text-muted">Да, методом навески сэндвич-панелей или натяжки утеплителя с пароизоляцией. Но это дороже, чем сразу при строительстве.</p>
            </div>
          </div>

          <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Вернуться в базу знаний
            <ArrowLeft size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
