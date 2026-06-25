import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Разборный ангар из металлоконструкций: цены, размеры, монтаж | МАКСТИЛ",
  description:
    "Разборные ангары из металлоконструкций — временные и мобильные укрытия для техники, стройматериалов и производства. Цены, размеры, монтаж за 3–7 дней. Купить разборный ангар.",
  keywords: [
    "разборный ангар",
    "разборный ангар из металлоконструкций",
    "мобильный ангар купить",
    "временный ангар металлический",
    "сборно-разборный ангар цена",
    "разборный ангар под технику",
  ],
  openGraph: {
    title: "Разборный ангар: цены, размеры, монтаж",
    description: "Сборно-разборные ангары из металлоконструкций. Монтаж за 3–7 дней, цены 2026.",
    url: "https://lstkmk.ru/articles/angar-razbornyj/",
  },
  alternates: { canonical: "https://lstkmk.ru/articles/angar-razbornyj/" },
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
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue mb-4 inline-block">Ангары</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Разборный ангар из металлоконструкций: цены, размеры, монтаж
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>25 июня 2026</span><span>•</span><span>7 мин чтения</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              Разборный ангар — это металлическая конструкция, которую можно собрать, разобрать и перевезти на новое место. Монтируется за 3–7 дней без фундамента капитального строительства. Применяется как временное укрытие, сезонный склад, мобильная мастерская или строительный городок.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Где применяются разборные ангары</h2>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li>Временное хранение техники и стройматериалов на строительной площадке</li>
              <li>Сезонное хранение зерна и сельхозпродукции</li>
              <li>Организация склада при переезде предприятия</li>
              <li>Военно-полевые мастерские и укрытия для техники</li>
              <li>Антикризисный вариант при срочной потребности в площадях</li>
              <li>Хранение на арендованной территории без права капитального строительства</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Виды разборных ангаров</h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Арочный (бескаркасный) ангар</h3>
            <p className="text-muted leading-relaxed mb-4">
              Стеновые и кровельные панели выполнены из оцинкованного профнастила, согнутого в арку. Монтируется без несущих ферм. Ширина — 6–30 м, длина — любая (кратная 2 м). Плюс: быстрая сборка, нет внутренних опор. Минус: нельзя перестроить изнутри, ограниченная высота.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Каркасный разборный ангар</h3>
            <p className="text-muted leading-relaxed mb-4">
              Несущий каркас из металлических рам на болтовых соединениях, обшивка профнастилом или сэндвич-панелями. Ширина — 9–36 м, высота — до 9 м. Полностью демонтируется и переставляется. Рамы соединяются болтами без сварки — бригада 4–6 человек за 5–7 дней.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Тентовый ангар</h3>
            <p className="text-muted leading-relaxed mb-4">
              Металлический каркас, покрытый ПВХ-тентом или плотной тканью. Самый лёгкий и дешёвый вариант. Срок службы покрытия — 7–12 лет. Применяется для временного хранения при минимальных требованиях к теплоизоляции.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Типовые размеры и цены</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Размер</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Тип</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Площадь</th>
                    <th className="text-left py-3 font-semibold text-foreground">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["10×20 м", "Каркасный, профнастил", "200 м²", "от 700 тыс ₽"],
                    ["15×30 м", "Каркасный, профнастил", "450 м²", "от 1,5 млн ₽"],
                    ["18×36 м", "Каркасный, профнастил", "648 м²", "от 2,2 млн ₽"],
                    ["12×24 м", "Арочный, оцинковка", "288 м²", "от 900 тыс ₽"],
                    ["12×30 м", "Каркасный, сэндвич 80 мм", "360 м²", "от 2,5 млн ₽"],
                  ].map(([k, v, t, p]) => (
                    <tr key={k} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                      <td className="py-3 pr-4">{v}</td>
                      <td className="py-3 pr-4">{t}</td>
                      <td className="py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Нужен ли фундамент</h2>
            <p className="text-muted leading-relaxed mb-4">
              Для временного ангара на срок до 3–5 лет фундамент в классическом смысле не нужен. Варианты опирания:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted mb-6">
              <li><strong>Бетонные блоки</strong> — дешево, быстро, легко переставить</li>
              <li><strong>Винтовые сваи</strong> — для нестабильных грунтов, также демонтируются</li>
              <li><strong>Асфальтовое или бетонное основание</strong> — если площадка уже подготовлена</li>
              <li><strong>Анкеры в грунт</strong> — для тентовых ангаров на плотных грунтах</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Разборный ангар — это капитальное строение?</h2>
            <p className="text-muted leading-relaxed mb-6">
              Разборный ангар без фундамента (или на блоках) юридически не является объектом капитального строительства — при условии, что он не имеет заглублённого фундамента и подключения к капитальным коммуникациям. Разрешение на строительство не требуется. Однако согласование с арендодателем или собственником земли — обязательно.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Итог</h2>
            <p className="text-muted leading-relaxed mb-6">
              Разборный ангар — оптимальное решение, когда нужно площади «здесь и сейчас» без многомесячного строительства. Стоимость металлокаркасного ангара 15×30 м — от 1,5 млн ₽, срок монтажа — 5–7 дней, срок службы каркаса — 20–25 лет. При необходимости переезд на новое место занимает 2–3 дня.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Изготовим разборный ангар под ваши задачи</h3>
            <p className="text-muted mb-6">МАКСТИЛ — производство и монтаж разборных ангаров из металлоконструкций. Белгородская область и ЦФО.</p>
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
