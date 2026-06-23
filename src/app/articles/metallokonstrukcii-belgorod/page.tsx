import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Металлоконструкции в Белгороде: от заказа до сдачи объекта — МАКСТИЛ",
  description:
    "Полный разбор процесса строительства из металлоконструкций в Белгородской области. Этапы, реальные сроки, типичные проблемы и лайфхаки от практикующих инженеров.",
  keywords: [
    "металлоконструкции Белгород",
    "строительство из металлоконструкций Белгород",
    "ЛСТК Белгород",
    "ангар Белгород",
    "быстровозводимые здания Белгород",
    "металлокаркас Белгород",
  ],
  alternates: { canonical: "https://lstkmk.ru/articles/metallokonstrukcii-belgorod/" },
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
              Строительство
            </span>
            <span className="text-xs text-muted">5 июня 2026 · 12 мин</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-snug">
            Металлоконструкции в Белгороде: от заказа до сдачи объекта
          </h1>

          <p className="text-base text-muted leading-relaxed mb-8">
            Рассказываем изнутри — как реально устроен процесс строительства из металлоконструкций в Белгородской области. Без маркетинга: этапы, подводные камни, лайфхаки от инженеров с 14-летним опытом.
          </p>

          <img
            src="/articles/metallokonstrukcii-belgorod.jpg"
            alt="Строительство металлоконструкций в Белгороде"
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-12"
          />

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-foreground space-y-8">

            {/* ЭТАП 1 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Этап 1. Техническое задание — где закладывается 80% стоимости</h2>
              <p className="text-muted mt-3">
                Большинство заказчиков думают, что стоимость определяется на этапе сметы. На самом деле — при формировании технического задания. Именно здесь решается, будет здание холодным или тёплым, какая высота в коньке, нужны ли мостовые краны, ворота для фуры или легковых машин.
              </p>
              <p className="text-muted mt-3">
                <strong>Реальный пример:</strong> заказчик из Старооскольского района заказал склад 30×60 м. В ТЗ не указал высоту ворот. Когда в процессе монтажа выяснилось, что нужен проезд для погрузчика с поднятыми вилами (4,2 м), пришлось переделывать стойки портала и добавлять ригель. Доплата — 180 000 ₽ и 8 дней потери времени.
              </p>

              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-900 mb-2">⚡ Лайфхак</p>
                <p className="text-sm text-amber-800">
                  Перед согласованием ТЗ составьте список всей техники, которая будет заезжать в здание. Измерьте её габариты с поднятым оборудованием. Это избавит от 90% переделок в процессе.
                </p>
              </div>

              <p className="text-muted mt-4">Что обязательно должно быть в грамотном ТЗ:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted mt-2">
                <li>Назначение здания и категория пожарной опасности</li>
                <li>Пролёт, длина, высота до низа несущих конструкций</li>
                <li>Снеговой и ветровой район (для Белгорода — III снеговой, II ветровой)</li>
                <li>Наличие кранового оборудования и его грузоподъёмность</li>
                <li>Тип и количество ворот, их размеры</li>
                <li>Наличие отопления, вентиляции, освещения</li>
                <li>Тип фундамента (если уже известен)</li>
              </ul>
            </div>

            {/* ЭТАП 2 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Этап 2. Геология и фундамент — самая недооценённая статья расходов</h2>
              <p className="text-muted mt-3">
                В Белгородской области грунты неоднородны. В районе Белгорода и Старого Оскола часто встречаются просадочные грунты (лёссовидные суглинки), которые при замачивании теряют несущую способность. В Губкинском и Валуйском районах — меловые породы близко к поверхности.
              </p>
              <p className="text-muted mt-3">
                Без геологических изысканий проектировщик не может правильно рассчитать фундамент. Экономия на геологии (стоит 30 000–80 000 ₽) регулярно оборачивается переделкой фундамента на сумму 500 000–2 000 000 ₽.
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Тип фундамента</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Когда применяется</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Стоимость (здание 500 м²)</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Срок</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Буронабивные сваи</td>
                      <td className="px-4 py-3">Слабые, просадочные грунты</td>
                      <td className="px-4 py-3">от 600 000 ₽</td>
                      <td className="px-4 py-3">10–14 дней</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Ленточный мелкого заложения</td>
                      <td className="px-4 py-3">Плотные суглинки, скала</td>
                      <td className="px-4 py-3">от 350 000 ₽</td>
                      <td className="px-4 py-3">7–10 дней</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Монолитная плита</td>
                      <td className="px-4 py-3">Неоднородный грунт, высокий УГВ</td>
                      <td className="px-4 py-3">от 900 000 ₽</td>
                      <td className="px-4 py-3">14–21 день</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Стаканный (отдельные столбы)</td>
                      <td className="px-4 py-3">Холодные здания, лёгкий каркас</td>
                      <td className="px-4 py-3">от 250 000 ₽</td>
                      <td className="px-4 py-3">5–7 дней</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-900 mb-2">⚡ Лайфхак</p>
                <p className="text-sm text-amber-800">
                  Если на соседнем участке уже стоит здание — узнайте у его владельца, какой тип фундамента применялся и были ли проблемы. Это бесплатная предварительная геология.
                </p>
              </div>
            </div>

            {/* ЭТАП 3 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Этап 3. Проектирование КМ и КМД — в чём разница и зачем оба</h2>
              <p className="text-muted mt-3">
                Многие заказчики путают два документа. <strong>КМ (конструкции металлические)</strong> — это расчётная документация: нагрузки, сечения профилей, узлы. Её делает инженер-конструктор. <strong>КМД (конструкции металлические деталировочные)</strong> — это чертежи для производства: каждый элемент с точными размерами, отверстиями, маркировкой.
              </p>
              <p className="text-muted mt-3">
                Без КМ нельзя получить разрешение на строительство (для объектов, требующих его). Без КМД нельзя запустить производство на заводе. Иногда подрядчики предлагают сделать только КМД «по аналогии» — это риск: расчёт может не соответствовать реальным нагрузкам.
              </p>

              <img
                src="/articles/metallokonstrukcii-belgorod-proekt.jpg"
                alt="Чертежи металлоконструкций"
                className="w-full h-52 object-cover rounded-xl mt-5"
              />
              <p className="text-xs text-muted mt-2 text-center">Рабочие чертежи КМД — основа для производства каждого элемента каркаса</p>

              <p className="text-muted mt-4">
                <strong>Типичная ошибка:</strong> заказать проектирование отдельно от производства. Когда проект делает одна организация, а изготавливает другая — часто возникают несоответствия в узлах. Мы в МАКСТИЛ делаем КМ, КМД и производство в одном цикле — это исключает переделки и ускоряет процесс на 1–2 недели.
              </p>
            </div>

            {/* ЭТАП 4 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Этап 4. Производство металлоконструкций — что происходит на заводе</h2>
              <p className="text-muted mt-3">
                На нашем производстве в с. Репное Белгородского района весь процесс разбит на технологические участки.
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-semibold text-foreground">Резка профиля</p>
                    <p className="text-muted text-sm mt-1">Рулонная сталь толщиной 1,5–2,5 мм проходит через профилегибочный стан — получается С- и Z-образный профиль ЛСТК. Для тяжёлых конструкций применяется горячекатаный двутавр и швеллер. Резка — по КМД-чертежам с точностью ±1 мм.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-semibold text-foreground">Сверловка и штамповка</p>
                    <p className="text-muted text-sm mt-1">Отверстия под болтовые соединения сверлятся на ЧПУ-станках. Ручная разметка не применяется — исключает ошибки при монтаже.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-semibold text-foreground">Антикоррозийная обработка</p>
                    <p className="text-muted text-sm mt-1">ЛСТК-профиль — из оцинкованной стали (цинк 275 г/м²). Горячекатаные элементы грунтуются двумя слоями эпоксидного грунта ГФ-021 или цинконаполненным составом. Покраска — по RAL по желанию заказчика.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-semibold text-foreground">Маркировка и комплектация</p>
                    <p className="text-muted text-sm mt-1">Каждый элемент маркируется по КМД: номер оси, позиция, марка стали. Комплект упаковывается по секциям здания — монтажники на площадке не теряют время на поиск деталей.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-900 mb-2">⚡ Лайфхак</p>
                <p className="text-sm text-amber-800">
                  Попросите подрядчика предоставить сертификаты на сталь до начала производства. Добросовестный завод работает только с металлом, имеющим сертификат качества (ГОСТ 27772 для фасонного, ГОСТ 19904 для листового). Это страхует от использования «вторчермета» с непредсказуемыми характеристиками.
                </p>
              </div>
            </div>

            {/* ЭТАП 5 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Этап 5. Монтаж — где теряется больше всего времени</h2>
              <p className="text-muted mt-3">
                Монтаж металлоконструкций — самый непредсказуемый этап. Вот реальные причины задержек, которые мы фиксируем на объектах в Белгородской области:
              </p>

              <div className="mt-4 space-y-3">
                {[
                  { problem: "Фундамент не набрал проектную прочность", solution: "Бетон набирает 70% прочности за 7 дней, 100% — за 28 дней. Монтаж каркаса можно начинать при 70%. Планируйте заливку фундамента за 10–14 дней до монтажа." },
                  { problem: "Несоответствие разбивочных осей", solution: "Оси фундамента должны совпадать с КМД с точностью ±5 мм. Проверяйте геодезической съёмкой до приёмки фундамента — переделать анкера дешевле, чем подгонять колонны." },
                  { problem: "Погодные условия", solution: "Сварочные работы при температуре ниже −10°C требуют подогрева. В Белгородской области это редкость, но дождь и ветер >10 м/с останавливают высотные работы." },
                  { problem: "Недоукомплектованность партии", solution: "Требуйте, чтобы вся партия металла была на площадке до начала монтажа. Ожидание одного недостающего элемента может остановить бригаду на 2–3 дня." },
                ].map(({ problem, solution }) => (
                  <div key={problem} className="border border-border rounded-xl overflow-hidden">
                    <div className="bg-red-50 px-4 py-3 border-b border-border">
                      <p className="text-sm font-semibold text-red-800">⚠ {problem}</p>
                    </div>
                    <div className="bg-green-50 px-4 py-3">
                      <p className="text-sm text-green-800">✓ {solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* КЛИМАТ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Белгородская специфика: климат, нагрузки, местные нормы</h2>
              <p className="text-muted mt-3">
                Строительство в Белгородской области имеет свои особенности, которые напрямую влияют на конструктив здания.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted mt-3">
                <li><strong>Снеговой район III (S₀ = 1,8 кПа).</strong> Кровля должна выдерживать 180 кг/м² снеговой нагрузки. Для пролётов более 24 м это существенно влияет на сечение стропильных ферм.</li>
                <li><strong>Ветровой район II (w₀ = 0,30 кПа).</strong> Умеренная ветровая нагрузка — не критична для стандартных зданий высотой до 10 м.</li>
                <li><strong>Сейсмичность — 5 баллов.</strong> Минимальный уровень, дополнительных требований к конструкциям не предъявляется.</li>
                <li><strong>Глубина промерзания — 0,9–1,1 м.</strong> Фундаменты закладываются ниже отметки −1,2 м. Для отапливаемых зданий возможно мелкое заложение с утеплением отмостки.</li>
                <li><strong>Просадочные грунты II типа</strong> встречаются в ряде районов. При проектировании необходимо учитывать требования СП 22.13330 и предусматривать водозащитные мероприятия.</li>
              </ul>
            </div>

            {/* СРОКИ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Реальные сроки строительства: наш опыт на объектах Белгородской области</h2>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Объект</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Площадь</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Проект</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Производство</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Монтаж</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-border">Итого</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Коровник</td>
                      <td className="px-4 py-3">1 876 м²</td>
                      <td className="px-4 py-3">14 дней</td>
                      <td className="px-4 py-3">21 день</td>
                      <td className="px-4 py-3">28 дней</td>
                      <td className="px-4 py-3 font-semibold text-foreground">63 дня</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Склад холодильник</td>
                      <td className="px-4 py-3">2 400 м²</td>
                      <td className="px-4 py-3">10 дней</td>
                      <td className="px-4 py-3">25 дней</td>
                      <td className="px-4 py-3">35 дней</td>
                      <td className="px-4 py-3 font-semibold text-foreground">70 дней</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Автомойка</td>
                      <td className="px-4 py-3">216 м²</td>
                      <td className="px-4 py-3">7 дней</td>
                      <td className="px-4 py-3">10 дней</td>
                      <td className="px-4 py-3">14 дней</td>
                      <td className="px-4 py-3 font-semibold text-foreground">31 день</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Яйцесклад</td>
                      <td className="px-4 py-3">1 056 м²</td>
                      <td className="px-4 py-3">10 дней</td>
                      <td className="px-4 py-3">18 дней</td>
                      <td className="px-4 py-3">21 день</td>
                      <td className="px-4 py-3 font-semibold text-foreground">49 дней</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted mt-2">* Сроки указаны без учёта фундамента и внутренней отделки</p>
            </div>

            {/* ИТОГ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Почему местный производитель выгоднее</h2>
              <p className="text-muted mt-3">
                Заказывая металлоконструкции у белгородского производителя, вы экономите на логистике (доставка из Москвы или Екатеринбурга добавляет 8–15% к стоимости), получаете оперативный выезд инженера на площадку и не зависите от транспортных задержек. При необходимости внесения изменений в проект — это решается за 1–2 дня, а не за неделю переписки с удалённым подрядчиком. Узнать актуальную стоимость можно на странице <Link href="/metallokonstrukcii-belgorod-cena/" className="text-accent-blue hover:underline">металлоконструкции в Белгороде цена за тонну</Link>.
              </p>
              <p className="text-muted mt-3">
                Мы базируемся в Белгородском районе и работаем по всей Белгородской области — Старый Оскол, Губкин, Шебекино, Алексеевка, Валуйки. Выезд геодезиста и инженера на площадку — бесплатно в радиусе 150 км. Подробнее о строительстве ангаров в регионе — на странице <Link href="/stroitelstvo-angarov-belgorod/" className="text-accent-blue hover:underline">строительство ангаров в Белгороде под ключ</Link>.
              </p>
            </div>

            <div className="mt-10 p-6 bg-accent-blue/5 border border-accent-blue/20 rounded-xl">
              <p className="text-base font-semibold text-foreground mb-2">Получите расчёт под ваш объект</p>
              <p className="text-sm text-muted mb-4">
                Опишите задачу — площадь, назначение, район строительства. Инженер перезвонит в течение 30 минут и предварительно рассчитает стоимость и сроки.
              </p>
              <a
                href="/#contacts"
                className="inline-flex h-11 items-center px-6 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Оставить заявку
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
