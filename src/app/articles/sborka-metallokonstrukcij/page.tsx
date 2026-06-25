import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Сборка металлоконструкций: технология, этапы, ошибки монтажа | МАКСТИЛ",
  description:
    "Технология сборки и монтажа металлоконструкций для ангаров и промышленных зданий. Этапы монтажа, типовые ошибки, контроль качества. Сборка металлокаркаса под ключ.",
  keywords: [
    "сборка металлоконструкций",
    "монтаж металлоконструкций технология",
    "сборка металлокаркаса ангара",
    "монтаж стальных конструкций",
    "сборка металлического каркаса здания",
    "монтаж металлоконструкций под ключ",
  ],
  openGraph: {
    title: "Сборка металлоконструкций: технология и этапы",
    description: "Технология монтажа металлоконструкций для ангаров и промзданий. Этапы, ошибки, контроль.",
    url: "https://lstkmk.ru/articles/sborka-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/sborka-metallokonstrukcij/" },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8">
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Строительство</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Сборка металлоконструкций: технология, этапы, типичные ошибки
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>9 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Сборка металлоконструкций — последовательный процесс, в котором каждый этап влияет на геометрическую точность и несущую способность всего здания. Ошибка в установке первой рамы «расходится» по всей длине здания и приводит к перекосу ворот, протечкам кровли и сложностям с монтажом обшивки.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Подготовка к монтажу</h2>
            <p className="text-muted leading-relaxed mb-4">До начала сборки необходимо:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Принять фундамент: проверить соответствие осей разбивке проекта (допуск ±5 мм), горизонтальность опорных поверхностей (±3 мм/м), правильность расположения анкерных болтов</li>
              <li>Разгрузить и рассортировать металлоконструкции по маркировке КМД</li>
              <li>Проверить антикоррозийное покрытие — повреждения при транспортировке восстановить до монтажа</li>
              <li>Подготовить монтажный инструмент: теодолит, нивелир, торцевые гаечные ключи, контрольные метки</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Этапы монтажа металлокаркаса</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этап</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Операция</th>
                    <th className="text-left py-3 font-semibold text-foreground">Допуски</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1. Установка колонн", "Монтаж на анкерные болты, выверка по вертикали", "±3 мм по вертикали на 1 м"],
                    ["2. Первая рама", "Сборка стропильной фермы или балки, подъём краном", "Диагонали рамы — ±5 мм"],
                    ["3. Расчалки первой рамы", "Временные тросовые расчалки до установки второй рамы", "Рама устойчива самостоятельно"],
                    ["4. Прогоны и связи", "Монтаж горизонтальных прогонов между рамами, крестовые связи", "Шаг прогонов ±10 мм"],
                    ["5. Последующие рамы", "Повтор по всей длине здания", "Шаг рам ±5 мм от проекта"],
                    ["6. Торцевые рамы", "Фронтоны, стойки, ригели", "Вертикальность ±5 мм/этаж"],
                    ["7. Затяжка болтов", "Финальная затяжка всех болтов моментным ключом", "По требованиям проекта КМ"],
                  ].map(([k, v, t]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 text-xs">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Методы соединения элементов</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Болтовые соединения</h3>
            <p className="text-muted leading-relaxed mb-4">
              Основной метод для монтажных стыков. Высокопрочные болты класса 8.8 и 10.9 применяются в узлах, воспринимающих значительные нагрузки. Момент затяжки — по таблицам ГОСТ или проекту. Обязателен контрольный осмотр через 1–2 недели после монтажа — болты дотягиваются после осадки конструкции.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Сварные соединения на монтаже</h3>
            <p className="text-muted leading-relaxed mb-4">
              Применяются для узлов, недоступных болтовым соединением, или при заводском дефекте. Требуют квалифицированного сварщика (удостоверение НАКС), контроля качества швов: визуальный осмотр + ультразвуковая дефектоскопия для ответственных конструкций.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Монтаж обшивки</h2>
            <p className="text-muted leading-relaxed mb-4">После завершения монтажа каркаса и проверки геометрии монтируется обшивка:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Профнастил</strong> — монтируется снизу вверх с нахлёстом 1 волна по горизонтали и 150–200 мм по вертикали. Крепление — кровельными саморезами с резиновой шайбой через каждый прогон</li>
              <li><strong>Сэндвич-панели</strong> — устанавливаются начиная от угла здания, стыкуются замком «шип-паз». Каждый стык герметизируется</li>
              <li>Конёк, ендовы, торцевые и угловые планки — монтируются в последнюю очередь</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типичные ошибки при сборке</h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  error: "Монтаж без выверки первой рамы",
                  consequence: "Накопленный перекос по всей длине здания — ворота не закрываются, кровля провисает",
                },
                {
                  error: "Отсутствие временных расчалок",
                  consequence: "Опрокидывание рамы при порыве ветра до установки горизонтальных связей",
                },
                {
                  error: "Замена болтов класса 8.8 на 5.8",
                  consequence: "Срез болтов в нагруженных узлах при снеговой или ветровой нагрузке",
                },
                {
                  error: "Нарушение антикоррозийного покрытия без восстановления",
                  consequence: "Очаговая коррозия уже в первый сезон, особенно в местах сварки на монтаже",
                },
                {
                  error: "Герметизация кровли профнастилом без нахлёста",
                  consequence: "Протечки в швах при первом дожде",
                },
              ].map(({ error, consequence }) => (
                <div key={error} className="border-l-2 border-red-300 pl-4">
                  <p className="font-medium text-foreground mb-1">{error}</p>
                  <p className="text-sm text-muted">{consequence}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Контроль качества монтажа</h2>
            <p className="text-muted leading-relaxed mb-4">По завершении монтажа проводится приёмочный контроль:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Геодезическая съёмка каркаса — проверка вертикальности колонн и уклонов кровли</li>
              <li>Проверка затяжки болтов контрольным моментным ключом (выборочно 10%)</li>
              <li>Осмотр сварных швов визуально + при необходимости УЗК</li>
              <li>Проверка состояния антикоррозийного покрытия — ремонт всех повреждений</li>
              <li>Составление исполнительной документации (акты скрытых работ, схемы расположения конструкций)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Сборка металлоконструкций — технологичный процесс, требующий квалифицированной бригады и надлежащего контроля качества. Для ангара 1 000 м² бригада из 6–8 человек монтирует каркас за 7–10 рабочих дней. Сэкономить на контроле геометрии нельзя — исправление перекосов обходится дороже, чем правильный монтаж с первого раза.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Смонтируем металлоконструкции под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство и монтаж металлоконструкций для ангаров и промышленных зданий. Гарантия качества, исполнительная документация.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#calculator" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors">Рассчитать стоимость</a>
              <a href="/#contacts" className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors">Получить консультацию</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
