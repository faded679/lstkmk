import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Офис из металлоконструкций: быстровозводимое здание под ключ | МАКСТИЛ",
  description:
    "Строительство офисных зданий из металлоконструкций и ЛСТК. Административные корпуса, бизнес-центры, офисы на производстве. Цены, сроки, проекты 2026.",
  keywords: [
    "офис из металлоконструкций",
    "административное здание ЛСТК",
    "быстровозводимый офис под ключ",
    "офисное здание металлокаркас цена",
    "бизнес-центр из металлоконструкций",
    "административный корпус ЛСТК строительство",
  ],
  openGraph: {
    title: "Офис из металлоконструкций: строительство под ключ",
    description: "Административные здания и офисы из ЛСТК. Сроки 60–90 дней, цены 2026.",
    url: "https://lstkmk.ru/articles/ofis-iz-metallokonstrukcij/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/ofis-iz-metallokonstrukcij/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Объекты</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Офис из металлоконструкций: быстровозводимое административное здание
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>8 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Административное здание из металлоконструкций или ЛСТК строится за 60–90 дней и обходится на 20–30% дешевле кирпичного аналога. Технология подходит для офисов на производстве, административных корпусов промышленных предприятий, отдельностоящих бизнес-центров высотой до 4 этажей.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Когда выбирают металлокаркас для офиса</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Срочный ввод в эксплуатацию</strong> — металлокаркас монтируется за 2–4 недели, сразу переходят к отделке</li>
              <li><strong>Ограниченный бюджет</strong> — стоимость «под чистовую отделку» на 25–35% ниже монолита</li>
              <li><strong>Нестандартные пролёты</strong> — без промежуточных колонн до 18–24 м для open space</li>
              <li><strong>Расширение производства</strong> — административный корпус рядом с цехом строится быстро, не мешая работе предприятия</li>
              <li><strong>Удалённые площадки</strong> — металлокаркас доставляется в любую точку, монтируется без тяжёлой техники (ЛСТК)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые проекты офисных зданий из металлоконструкций</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Объект</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Этажность</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Прорабская / офис на стройке", "50–100 м²", "1 этаж", "от 1,5–2,5 млн ₽"],
                    ["Административный корпус завода", "200–500 м²", "1–2 этажа", "от 5–12 млн ₽"],
                    ["Офисный центр", "500–1500 м²", "2–3 этажа", "от 12–35 млн ₽"],
                    ["Бизнес-центр", "1500–5000 м²", "3–4 этажа", "от 35–120 млн ₽"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3 font-medium text-foreground">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Конструктивные решения</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Каркас</h3>
            <p className="text-muted leading-relaxed mb-4">
              Для зданий до 2 этажей — ЛСТК из термопрофиля: лёгкий, точный, без мостиков холода. Для 3–4 этажей — горячекатаный стальной каркас: колонны HEB/HEA, балки IPE, перекрытия по профнастилу с монолитной плитой или на деревянных балках.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Наружные стены</h3>
            <p className="text-muted leading-relaxed mb-4">
              Варианты ограждения (снаружи внутрь):
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Вентилируемый фасад</strong> — облицовка металлокассетами, HPL, керамогранитом. Современный вид, долговечность 40+ лет</li>
              <li><strong>Штукатурный фасад по утеплителю (СФТК)</strong> — дешевле, но требует периодической окраски через 10–15 лет</li>
              <li><strong>Сэндвич-панели</strong> — быстро, экономично, но ограниченная архитектурная выразительность</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Кровля</h3>
            <p className="text-muted leading-relaxed mb-4">
              Для административных зданий чаще применяется плоская кровля с уклоном 1,5–3% и мягкой кровельной мембраной (ТПО, ПВХ). Для небольших корпусов — скатная металлочерепица или металлокассета. Плоская кровля открывает возможность оборудования террасы.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Инженерные системы</h2>
            <p className="text-muted leading-relaxed mb-4">Для офисного здания обязательны:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Отопление — радиаторное или тёплый пол, подключение к центральным сетям или котельная</li>
              <li>Вентиляция и кондиционирование — приточно-вытяжная с рекуперацией, сплит-системы на каждый офис или центральный VRF-чиллер</li>
              <li>Электроснабжение — вводной щит, силовые и слаботочные сети, ИБП для серверной</li>
              <li>Водоснабжение и канализация — санузлы минимум 1 на 30 сотрудников на каждом этаже</li>
              <li>Пожарная сигнализация и СОУЭ — обязательны для зданий площадью &gt;300 м²</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Нормы для административных зданий</h2>
            <p className="text-muted leading-relaxed mb-4">Ключевые требования СП 44.13330 «Административные здания»:</p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Высота потолков в рабочих помещениях — не менее 2,5 м в свету</li>
              <li>Норма площади на 1 сотрудника — 4,5 м² (без учёта коридоров и подсобных помещений)</li>
              <li>Ширина коридоров — не менее 1,2 м (основные), 1,0 м (вспомогательные)</li>
              <li>Эвакуационные выходы — не менее 2 при площади этажа &gt;300 м²</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Офисное здание из металлоконструкций — рациональное решение, когда важны скорость и стоимость. Административный корпус 500 м² из ЛСТК строится за 75–90 дней и обходится в 8–12 млн ₽ под чистовую отделку. При современном фасаде и качественной отделке визуально не отличается от монолитного здания.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Построим офисное здание под ключ</h3>
            <p className="text-muted mb-6">МАКСТИЛ — проектирование и строительство административных зданий из металлоконструкций в Белгородской области и ЦФО.</p>
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
