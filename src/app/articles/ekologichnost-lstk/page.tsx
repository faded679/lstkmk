import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Экологичность ЛСТК — углеродный след и переработка металла | МАКСТИЛ",
  description:
    "Экологичность ЛСТК-строительства: углеродный след, вторичная переработка стали, сравнение с бетоном и деревом. Зелёное строительство из металлоконструкций.",
  keywords: [
    "экологичность ЛСТК",
    "зелёное строительство",
    "углеродный след ангара",
    "переработка металлоконструкций",
    "устойчивое строительство",
  ],
  openGraph: {
    title: "Экологичность ЛСТК — углеродный след и переработка металла",
    description:
      "Насколько экологично строительство из ЛСТК: факты, цифры, сравнения.",
    url: "https://lstkmk.ru/articles/ekologichnost-lstk/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/ekologichnost-lstk/",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/articles/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          Все статьи
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">
              Технологии
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Экологичность ЛСТК — углеродный след и переработка металла
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>Опубликовано: 6 июля 2026</span>
              <span>•</span>
              <span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Строительная отрасль отвечает за 37 % глобальных выбросов CO₂. На этом фоне ЛСТК выглядит одним из наиболее экологичных методов: сталь перерабатывается на 100 %, отходы на стройплощадке минимальны, а лёгкий каркас снижает расход бетона на фундамент. Разбираем факты без маркетинговой зелёной краски.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Углеродный след: ЛСТК vs другие материалы
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Материал</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">CO₂ при производстве, кг/т</th>
                    <th className="text-left py-3 font-semibold text-foreground">Перерабатываемость</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сталь (из руды)</td>
                    <td className="py-3 pr-4">1800–2200</td>
                    <td className="py-3">100 % без потери свойств</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Сталь (из лома — EAF)</td>
                    <td className="py-3 pr-4">400–600</td>
                    <td className="py-3">100 %</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Бетон (цемент)</td>
                    <td className="py-3 pr-4">600–900 (на тонну цемента)</td>
                    <td className="py-3">Ограниченная (дробление)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Кирпич</td>
                    <td className="py-3 pr-4">200–400</td>
                    <td className="py-3">Минимальная</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Древесина (CLT)</td>
                    <td className="py-3 pr-4">−500 (поглощает CO₂)</td>
                    <td className="py-3">Органическое разложение</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              На первый взгляд сталь проигрывает дереву. Но ключевое преимущество — бесконечная переработка. Около 85 % стали в мире перерабатывается, и каждый цикл снижает углеродный след до 400–600 кг CO₂/т. Бетон и кирпич утилизируются в щебень низкого качества.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Почему ЛСТК экологичнее тяжёлого металлокаркаса
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Меньше металла:</strong> ЛСТК-каркас весит 20–40 кг/м² vs 60–100 кг/м² у тяжёлого — пропорционально ниже выбросы</li>
              <li><strong>Меньше бетона:</strong> лёгкий каркас = облегчённый фундамент (на 40–60 % меньше бетона)</li>
              <li><strong>Нет сварки на площадке:</strong> болтовые соединения — нет отходов электродов и выбросов</li>
              <li><strong>Точный раскрой:</strong> ЧПУ-станки режут с допуском ±1 мм — отходы менее 2 %</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Отходы строительства
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Сравнение объёма строительных отходов на 100 м² здания:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Технология</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Отходы, кг/100 м²</th>
                    <th className="text-left py-3 font-semibold text-foreground">Утилизация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">ЛСТК</td>
                    <td className="py-3 pr-4">50–150</td>
                    <td className="py-3">95 % сдаётся в металлолом</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Кирпичная кладка</td>
                    <td className="py-3 pr-4">1500–3000</td>
                    <td className="py-3">На свалку (бой, раствор)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Монолитный ж/б</td>
                    <td className="py-3 pr-4">800–2000</td>
                    <td className="py-3">Частично — дробление в щебень</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Переработка в конце жизненного цикла
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Когда здание из ЛСТК выработает свой ресурс через 30–50 лет:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Каркас разбирается (болтовые соединения) и сдаётся в лом — цена 25–35 тыс. ₽/т</li>
              <li>Профнастил и сэндвич-панели — металлическая часть переплавляется</li>
              <li>Минвата — на утилизацию (инертный материал, не токсичен)</li>
              <li>Общая «ликвидационная стоимость» здания — 5–15 % от первоначальной</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Для сравнения: снос кирпичного здания — это расходы на демонтаж и вывоз мусора, без компенсации.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Энергоэффективность эксплуатации
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Углеродный след здания складывается из двух частей:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Воплощённый углерод (embodied carbon):</strong> выбросы при производстве и строительстве — 20–30 % за жизненный цикл</li>
              <li><strong>Операционный углерод:</strong> выбросы при эксплуатации (отопление, электричество) — 70–80 %</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК позволяет снизить операционную часть за счёт качественного утепления (термопрофиль, непрерывный контур) и герметичности (меньше инфильтрации, чем в кирпичной кладке). Результат: расход на отопление ЛСТК-здания на 15–25 % ниже кирпичного аналога.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Сертификация «зелёных» зданий
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Здания из ЛСТК могут получить экологические сертификаты:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>LEED:</strong> баллы за перерабатываемые материалы, снижение отходов, энергоэффективность</li>
              <li><strong>BREEAM:</strong> оценка жизненного цикла материалов, в т.ч. вторичное использование</li>
              <li><strong>«Зелёный стандарт» (Россия):</strong> ГОСТ Р 54964 — национальная система сертификации</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Что делает ЛСТК «зелёным»
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>100 % перерабатываемость каркаса без потери свойств</li>
              <li>Минимальные отходы при производстве (ЧПУ-раскрой)</li>
              <li>Сухой монтаж — нет воды, нет мокрых процессов, нет пыли</li>
              <li>Лёгкость — меньше транспортных выбросов на доставку</li>
              <li>Долговечность — меньше циклов реконструкции за 100 лет</li>
              <li>Возможность разборки и повторного использования</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Итог
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ЛСТК — не самый «зелёный» материал при производстве (уступает дереву), но лидирует по совокупному жизненному циклу: бесконечная переработка, минимум отходов, энергоэффективная эксплуатация и ликвидационная стоимость вместо расходов на снос. Для коммерческих и промышленных зданий это наиболее сбалансированный выбор между экологией и экономикой.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Обсудить проект — МАКСТИЛ
            </h3>
            <p className="text-muted mb-6">
              Проектируем и строим здания из ЛСТК с минимальным экологическим воздействием. Используем сертифицированную сталь российского производства.
            </p>
            <p className="text-muted mb-6">
              Телефон: <a href="tel:+74722400854" className="text-accent-blue hover:underline">+7 (4722) 40-08-54</a> · Email: <a href="mailto:info@lstkmk.ru" className="text-accent-blue hover:underline">info@lstkmk.ru</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#calculator"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="/#contacts"
                className="inline-flex h-12 items-center justify-center px-8 text-base font-medium text-foreground border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                Получить консультацию
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Читайте также
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/marki-stali-dlya-lstk/" className="text-accent-blue hover:underline">
                  Марки стали для ЛСТК — оцинковка, профили и выбор металла
                </Link>
              </li>
              <li>
                <Link href="/articles/solnechnye-paneli-na-kryshe-angara/" className="text-accent-blue hover:underline">
                  Солнечные панели на крыше ангара — выгодно или нет
                </Link>
              </li>
              <li>
                <Link href="/articles/trendy-lstk-2026/" className="text-accent-blue hover:underline">
                  Тренды ЛСТК-строительства в 2026 году — новые технологии и материалы
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
