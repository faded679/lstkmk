import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Шаг колонн в коровнике | Оптимальное расстояние по СП",
  description: "Оптимальный шаг несущих колонн для быстровозводимых ферм ЛСТК. Стандартные шаги 3м, 4м, 6м, 12м.",
  keywords: ["шаг колонн коровник", "расстояние между колоннами", "шаг несущих колонн", "каркас фермы шаг"],
};

export default function ShagKollonPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Шаг колонн в коровнике
          </h1>
          
          <p className="text-muted mb-6">
            Шаг колонн определяет экономику строительства и удобство планировки. 
            Для сельхоззданий из ЛСТК стандартный шаг — 4,8 м или 6 м.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Шаг</th>
                  <th className="text-left py-3 font-semibold">Применение</th>
                  <th className="text-left py-3 font-semibold">Особенности</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">3,0 м</td>
                  <td className="py-3">Мелкие постройки</td>
                  <td className="py-3 text-muted">Дорогой вариант, много колонн</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">4,8 м ⭐</td>
                  <td className="py-3">Сельхозздания</td>
                  <td className="py-3 text-muted">Оптимум для ферм</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 font-medium">6,0 м</td>
                  <td className="py-3">Ангары, склады</td>
                  <td className="py-3 text-muted">Универсальный шаг</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">12,0 м</td>
                  <td className="py-3">Большие пролёты</td>
                  <td className="py-3 text-muted">Требует усиленных ферм</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              ⭐ <strong>Рекомендуем 4,8 м</strong> — это шаг унифицированных прогонов для сельхоззданий 
              с шириной 32,6 м (7 пролётов по 4,8 м).
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Можно ли изменить шаг при строительстве?</p>
              <p className="text-sm text-muted">Нет, шаг закладывается в проекте и влияет на расчёт каркаса. Изменение требует перепроектирования.</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="font-medium text-foreground mb-1">Как шаг влияет на стоимость?</p>
              <p className="text-sm text-muted">Меньше шаг = больше колонн = дороже. Но при этом меньше сечение балок. Оптимум находится при 4,8-6 м.</p>
            </div>
          </div>

          <Link href="/knowledge/fundament-korovnika/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
            Следующая статья: Фундамент коровника
            <ArrowRight size={16} />
          </Link>
        </article>
      </main>
    </div>
  );
}
