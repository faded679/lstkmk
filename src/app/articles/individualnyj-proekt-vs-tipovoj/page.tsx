import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Индивидуальный проект vs типовой: чем отличаются и что выбрать | МАКСТИЛ",
  description:
    "В чём разница между индивидуальным и типовым проектом ангара или склада? Когда типовой проект подходит, а когда нужен индивидуальный расчёт — разбираем плюсы, минусы и риски.",
  keywords: [
    "индивидуальный проект ангара",
    "типовой проект склада",
    "проект металлического здания",
    "чем отличается типовой проект",
    "индивидуальное проектирование или типовое",
    "проектирование ангара под заказ",
  ],
  openGraph: {
    title: "Индивидуальный проект vs типовой: чем отличаются и что выбрать",
    description:
      "Когда достаточно типового проекта ангара, а когда нужен индивидуальный расчёт. Плюсы, минусы и риски каждого подхода.",
    url: "https://lstkmk.ru/articles/individualnyj-proekt-vs-tipovoj/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/individualnyj-proekt-vs-tipovoj/",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Все статьи
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">Этапы строительства</span>
            <span className="text-xs text-muted">9 июня 2026</span>
            <span className="text-xs text-muted">8 мин</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Индивидуальный проект vs типовой: чем отличаются и что выбрать
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Многие подрядчики предлагают «готовые типовые проекты» как более дешёвую и быструю альтернативу индивидуальному проектированию. Разбираемся, в чём реальная разница и когда каждый вариант оправдан.
          </p>
        </header>

        <div className="prose prose-slate max-w-none">

          <h2>Что такое типовой проект</h2>
          <p>
            Типовой проект — это готовая проектная документация на здание стандартных параметров, разработанная заранее и применяемая повторно. Обычно это ангары или склады популярных размеров: 12×24, 18×36, 24×48 м.
          </p>
          <p>
            Типовой проект рассчитан на «среднестатистические» условия: нормативные снеговые и ветровые нагрузки для определённого климатического района, стандартный тип фундамента, определённый набор конструктивных решений.
          </p>

          <h2>Что такое индивидуальный проект</h2>
          <p>
            Индивидуальный проект разрабатывается с нуля под конкретный объект с учётом:
          </p>
          <ul>
            <li>Реальных размеров и планировки</li>
            <li>Фактических нагрузок (снег, ветер, оборудование, мостовые краны)</li>
            <li>Геологии конкретного участка</li>
            <li>Технологических требований заказчика</li>
            <li>Архитектурных пожеланий</li>
          </ul>

          <h2>Сравнение: типовой vs индивидуальный</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold">Параметр</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Типовой проект</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold">Индивидуальный проект</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200">Срок разработки</td>
                  <td className="p-3 border border-slate-200 text-green-700">1–3 дня (адаптация)</td>
                  <td className="p-3 border border-slate-200">2–6 недель</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Учёт геологии</td>
                  <td className="p-3 border border-slate-200 text-red-600">Нет</td>
                  <td className="p-3 border border-slate-200 text-green-700">Да</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Оптимизация расхода металла</td>
                  <td className="p-3 border border-slate-200 text-red-600">Нет (запас прочности «с запасом»)</td>
                  <td className="p-3 border border-slate-200 text-green-700">Да</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Нестандартные размеры</td>
                  <td className="p-3 border border-slate-200 text-red-600">Невозможно</td>
                  <td className="p-3 border border-slate-200 text-green-700">Любые</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200">Мостовые краны, антресоли</td>
                  <td className="p-3 border border-slate-200 text-red-600">Не предусмотрены</td>
                  <td className="p-3 border border-slate-200 text-green-700">Учитываются</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200">Применимость для экспертизы</td>
                  <td className="p-3 border border-slate-200 text-amber-600">Требует адаптации</td>
                  <td className="p-3 border border-slate-200 text-green-700">Да</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Когда типовой проект подходит</h2>
          <p>
            Типовой проект — разумное решение в следующих случаях:
          </p>
          <ul>
            <li>Стандартные размеры объекта (12, 18, 24 м в пролёте)</li>
            <li>Нормативные климатические нагрузки для региона</li>
            <li>Простое назначение — холодный склад без технологического оборудования</li>
            <li>Нет специальных требований к планировке</li>
            <li>Участок с хорошим несущим грунтом (данные известны)</li>
          </ul>
          <p>
            В этом случае адаптированный типовой проект позволяет существенно сократить срок подготовки документации и начать строительство раньше.
          </p>

          <h2>Когда нужен индивидуальный проект</h2>
          <p>
            Без индивидуального проекта не обойтись, если:
          </p>
          <ul>
            <li>Нестандартные размеры или конфигурация здания</li>
            <li>Планируется установка мостового крана</li>
            <li>Требуется антресоль или второй уровень</li>
            <li>Повышенные снеговые или ветровые нагрузки (горные районы, побережье)</li>
            <li>Слабые или неоднородные грунты</li>
            <li>Объект подпадает под государственную экспертизу</li>
            <li>Нужна технологическая привязка оборудования</li>
          </ul>

          <h2>Распространённая ошибка: «типовой проект» как инструмент экономии</h2>
          <p>
            Некоторые недобросовестные подрядчики предлагают «типовой проект» как способ сэкономить, но на деле изготавливают конструкции без расчётов вообще — на глаз или по устаревшим нормам. Это создаёт скрытый риск для эксплуатации здания.
          </p>
          <p>
            Признаки того, что перед вами не настоящий типовой проект, а «бумага для успокоения»:
          </p>
          <ul>
            <li>Нет расчётной части (пояснительной записки с нагрузками)</li>
            <li>Не указан климатический район или снеговой район России</li>
            <li>Сечения профилей не обоснованы расчётом</li>
            <li>Нет подписи ответственного проектировщика</li>
          </ul>

          <h2>Что в итоге</h2>
          <p>
            Выбор между типовым и индивидуальным проектом зависит от конкретного объекта. Типовой — быстро и приемлемо для простых стандартных зданий. Индивидуальный — необходим всегда, когда есть хоть одно отклонение от «стандарта».
          </p>
          <p>
            Главное правило: любой проект — типовой или индивидуальный — должен содержать полноценный конструктивный расчёт, учитывать реальные нагрузки и быть подписан ответственным инженером-проектировщиком.
          </p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Разработаем проект под ваш объект</h3>
            <p className="text-muted text-sm mb-4">
              Наши инженеры оценят задачу и предложат оптимальный подход — адаптацию готового решения или индивидуальный расчёт с нуля.
            </p>
            <a
              href="/#contacts"
              className="inline-flex h-10 items-center px-6 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Обсудить проект
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
