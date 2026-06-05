import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Пожарная безопасность металлических зданий: требования и решения — МАКСТИЛ",
  description:
    "Огнезащитная обработка металлоконструкций, классы огнестойкости, требования МЧС. Что нужно предусмотреть на этапе проектирования ангара или склада.",
  keywords: ["пожарная безопасность металлоконструкций", "огнезащита стали", "класс огнестойкости здания", "огнезащитная краска", "требования МЧС ангар"],
  alternates: { canonical: "https://lstkmk.ru/articles/pozharnaya-bezopasnost-metallicheskih-zdanij/" },
};

export default function ArticlePage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-24">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} weight="bold" />
            Все статьи
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
              Безопасность
            </span>
            <span className="text-xs text-muted">5 июня 2026 · 6 мин</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-snug">
            Пожарная безопасность металлических зданий: требования и решения
          </h1>

          <img
            src="/articles/pozharnaya-bezopasnost-metallicheskih-zdanij.jpg"
            alt="Пожарная безопасность металлических зданий"
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-10"
          />

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-foreground space-y-6">

            <p className="text-muted">
              Сталь сама по себе не горит, но при нагреве до 500–600°C теряет несущую способность. Именно поэтому пожарная безопасность металлических зданий — отдельная тема при проектировании. Разбираем требования нормативов и практические решения.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Почему металл нуждается в огнезащите</h2>
            <p className="text-muted">
              При температуре пожара (600–900°C) стальная колонна или балка теряет прочность и деформируется за 10–15 минут без защиты. Обрушение конструкции опасно для людей и затрудняет тушение. Задача огнезащиты — дать необходимый предел огнестойкости, то есть время, в течение которого конструкция сохраняет несущие функции.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Классы огнестойкости зданий</h2>
            <p className="text-muted">
              По СП 2.13130.2020 здания делятся на степени огнестойкости I–V. Для большинства промышленных и складских зданий из металлоконструкций применяются степени II–III:
            </p>

            <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Степень</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Предел огнестойкости несущих конструкций</th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">Типичные здания</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="px-4 py-3">I</td>
                  <td className="px-4 py-3">R 120 (2 часа)</td>
                  <td className="px-4 py-3">Многоэтажные производственные</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">II</td>
                  <td className="px-4 py-3">R 90 (1,5 часа)</td>
                  <td className="px-4 py-3">Склады категории А, Б</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">III</td>
                  <td className="px-4 py-3">R 45 (45 минут)</td>
                  <td className="px-4 py-3">Склады В1–В4, цеха</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">IV–V</td>
                  <td className="px-4 py-3">R 15 или не нормируется</td>
                  <td className="px-4 py-3">Временные, холодные склады Г, Д</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-bold text-foreground mt-8">Методы огнезащиты металлоконструкций</h2>

            <h3 className="text-base font-semibold text-foreground">Огнезащитные краски и составы</h3>
            <p className="text-muted">
              Самый распространённый метод. При нагреве вспучивающийся состав увеличивается в объёме в 10–50 раз и образует теплоизолирующий слой. Толщина покрытия — от 1 до 6 мм в зависимости от требуемого предела. Применяется для конструкций с пределом R 15–R 90. Наносится кистью, валиком или напылением после монтажа. Срок службы — 10–25 лет.
            </p>

            <h3 className="text-base font-semibold text-foreground">Огнезащитные штукатурки</h3>
            <p className="text-muted">
              Наносится на металл слоем 20–50 мм. Обеспечивает предел R 60–R 150. Дешевле вспучивающихся красок при высоких требованиях к огнестойкости, но тяжелее и требует армирующей сетки. Применяется в основном для колонн и несущих балок в крупных промышленных объектах.
            </p>

            <h3 className="text-base font-semibold text-foreground">Огнезащитные плиты и кожухи</h3>
            <p className="text-muted">
              Плиты из вермикулита, силикатно-кальциевых материалов монтируются вокруг конструкций. Дают предел до R 240. Используются там, где нужна максимальная огнестойкость — технические этажи, эвакуационные лестницы.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Категории помещений по пожарной опасности</h2>
            <p className="text-muted">
              Категория помещения (А, Б, В, Г, Д) по НПБ 105-03 определяет требования к огнестойкости здания, разделению противопожарными преградами и системам пожаротушения:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li><strong>А и Б</strong> — взрывопожароопасные (ЛВЖ, горючие газы). Требуется степень I–II, автоматическое пожаротушение.</li>
              <li><strong>В1–В4</strong> — пожароопасные (горючие материалы, дерево, ткани). Степень II–III, часто спринклеры.</li>
              <li><strong>Г и Д</strong> — негорючие материалы в горячем состоянии или негорючие в холодном. Минимальные требования.</li>
            </ul>
            <p className="text-muted">
              Большинство складов относится к категории В — это означает степень огнестойкости III и необходимость огнезащиты несущих конструкций до R 45.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Что предусмотреть на этапе проектирования</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Определить категорию помещений и требуемую степень огнестойкости здания ещё до выбора конструктивной схемы.</li>
              <li>Заложить в смету стоимость огнезащитной обработки — она может составлять 5–15% от стоимости металлоконструкций.</li>
              <li>Предусмотреть противопожарные отсеки при площади здания более 2 500 м² (для категории В).</li>
              <li>Запроектировать эвакуационные выходы с расстоянием не более 50 м до ближайшего.</li>
              <li>Согласовать проект с органами государственного пожарного надзора при площади более 1 500 м².</li>
            </ul>

            <div className="mt-10 p-6 bg-accent-blue/5 border border-accent-blue/20 rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-2">Проектируем с учётом требований МЧС</p>
              <p className="text-sm text-muted">
                В наших проектах огнезащита несущих конструкций закладывается по умолчанию. Сопровождаем согласование с пожарным надзором и предоставляем все необходимые сертификаты на применяемые материалы.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
