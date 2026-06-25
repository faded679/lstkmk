import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Снеговой район для строительства | Карта снеговых районов России",
  description: "Снеговые районы I-VIII. Расчёт снеговой нагрузки на кровлю ангара и коровника по СП 131. Таблица снеговых районов по городам: Москва, Белгород, Краснодар, Новосибирск и другие.",
  keywords: ["снеговой район", "снеговая нагрузка", "карта снеговых районов", "расчёт снега на кровле", "снеговая нагрузка омск", "снеговой район москва", "снеговая нагрузка тюмень", "челябинск снеговой район", "пермь снеговой район"],
};

const snegData = [
  { rajon: "I", nagruzka: "0,5 кПа", regiony: "Краснодар, Ростов, Астрахань" },
  { rajon: "II", nagruzka: "0,7 кПа", regiony: "Воронеж, Белгород, Волгоград" },
  { rajon: "III", nagruzka: "1,0 кПа", regiony: "Москва, Тула, Рязань" },
  { rajon: "IV", nagruzka: "1,5 кПа", regiony: "Нижний Новгород, Казань" },
  { rajon: "V", nagruzka: "2,0 кПа", regiony: "Самара, Уфа, Пермь" },
  { rajon: "VI", nagruzka: "2,5 кПа", regiony: "Екатеринбург, Челябинск" },
  { rajon: "VII", nagruzka: "3,0 кПа", regiony: "Тюмень, Омск" },
  { rajon: "VIII", nagruzka: "3,5+ кПа", regiony: "Север, Крайний Север" },
];

const citiesData = [
  { city: "Абакан", district: "III", load: "150 кг/м²" },
  { city: "Архангельск", district: "IV", load: "200 кг/м²" },
  { city: "Астрахань", district: "I", load: "50 кг/м²" },
  { city: "Барнаул", district: "III", load: "150 кг/м²" },
  { city: "Белгород", district: "II", load: "100 кг/м²" },
  { city: "Братск", district: "III", load: "150 кг/м²" },
  { city: "Великий Новгород", district: "II", load: "100 кг/м²" },
  { city: "Владивосток", district: "III", load: "150 кг/м²" },
  { city: "Волгоград", district: "II", load: "100 кг/м²" },
  { city: "Воронеж", district: "II", load: "100 кг/м²" },
  { city: "Екатеринбург", district: "III", load: "150 кг/м²" },
  { city: "Иркутск", district: "III", load: "150 кг/м²" },
  { city: "Казань", district: "III", load: "150 кг/м²" },
  { city: "Калининград", district: "II", load: "100 кг/м²" },
  { city: "Калуга", district: "II", load: "100 кг/м²" },
  { city: "Кемерово", district: "III", load: "150 кг/м²" },
  { city: "Киров", district: "III", load: "150 кг/м²" },
  { city: "Комсомольск-на-Амуре", district: "III", load: "150 кг/м²" },
  { city: "Краснодар", district: "I", load: "50 кг/м²" },
  { city: "Красноярск", district: "III", load: "150 кг/м²" },
  { city: "Курган", district: "III", load: "150 кг/м²" },
  { city: "Курск", district: "II", load: "100 кг/м²" },
  { city: "Липецк", district: "II", load: "100 кг/м²" },
  { city: "Луганск", district: "II", load: "100 кг/м²" },
  { city: "Москва", district: "II", load: "100 кг/м²" },
  { city: "Мурманск", district: "V", load: "250 кг/м²" },
  { city: "Нижний Новгород", district: "II", load: "100 кг/м²" },
  { city: "Новосибирск", district: "III", load: "150 кг/м²" },
  { city: "Омск", district: "III", load: "150 кг/м²" },
  { city: "Орёл", district: "II", load: "100 кг/м²" },
  { city: "Оренбург", district: "III", load: "150 кг/м²" },
  { city: "Пенза", district: "II", load: "100 кг/м²" },
  { city: "Пермь", district: "III", load: "150 кг/м²" },
  { city: "Петрозаводск", district: "V", load: "250 кг/м²" },
  { city: "Псков", district: "II", load: "100 кг/м²" },
  { city: "Ростов-на-Дону", district: "I", load: "50 кг/м²" },
  { city: "Рязань", district: "II", load: "100 кг/м²" },
  { city: "Самара", district: "II", load: "100 кг/м²" },
  { city: "Санкт-Петербург", district: "II", load: "100 кг/м²" },
  { city: "Саратов", district: "II", load: "100 кг/м²" },
  { city: "Смоленск", district: "II", load: "100 кг/м²" },
  { city: "Тамбов", district: "II", load: "100 кг/м²" },
  { city: "Тверь", district: "II", load: "100 кг/м²" },
  { city: "Томск", district: "III", load: "150 кг/м²" },
  { city: "Тула", district: "II", load: "100 кг/м²" },
  { city: "Тюмень", district: "III", load: "150 кг/м²" },
  { city: "Ульяновск", district: "II", load: "100 кг/м²" },
  { city: "Уфа", district: "III", load: "150 кг/м²" },
  { city: "Хабаровск", district: "III", load: "150 кг/м²" },
  { city: "Чебоксары", district: "II", load: "100 кг/м²" },
  { city: "Челябинск", district: "III", load: "150 кг/м²" },
  { city: "Южно-Сахалинск", district: "IV", load: "200 кг/м²" },
  { city: "Ярославль", district: "II", load: "100 кг/м²" },
];

const faqData = [
  {
    question: "Какой снеговой район в Москве, Белгороде, Краснодаре?",
    answer: "Москва — II район (100 кг/м²). Белгород — II район (100 кг/м²). Краснодар — I район (50 кг/м²). Смотрите полную таблицу городов ниже."
  },
  {
    question: "Какой снеговой район в Белгородской области?",
    answer: "Белгородская область находится во II снеговом районе (100 кг/м²). Это умеренная снеговая нагрузка."
  },
  {
    question: "Влияет ли снеговой район на толщину панелей?",
    answer: "Нет, толщина панелей зависит от теплоизоляции. Снеговая нагрузка влияет на шаг несущих балок и толщину стали каркаса."
  }
];

export default function SnegovojRajonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Снеговой район для строительства",
    "description": "Карта снеговых районов России и расчёт нагрузки на кровлю",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Снеговой район
          </h1>
          
          <p className="text-muted mb-6">
            Снеговой район определяет нормативную снеговую нагрузку на кровлю по СП 131.13330.2020. 
            От этого зависит расчёт стропильной системы.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Район</th>
                  <th className="text-left py-3 font-semibold">Нагрузка</th>
                  <th className="text-left py-3 font-semibold">Примеры регионов</th>
                </tr>
              </thead>
              <tbody>
                {snegData.map((item, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{item.rajon}</td>
                    <td className="py-3 text-muted">{item.nagruzka}</td>
                    <td className="py-3 text-muted">{item.regiony}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted">
              <strong>Формула расчёта:</strong> S = S₀ × μ, где S₀ — нормативная нагрузка, μ — коэффициент перехода (зависит от уклона кровли).
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mb-3">Снеговые районы по городам России</h2>
          <p className="text-sm text-muted mb-4">
            Ниже — снеговой район и нормативная нагрузка для 50 крупнейших городов России. Полный перечень всех регионов — на странице{" "}
            <Link href="/snegovye-rajony-rossii/" className="text-accent-blue hover:underline">Снеговые районы России</Link>.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold">Город</th>
                  <th className="text-left py-2 font-semibold">Район</th>
                  <th className="text-left py-2 font-semibold">Нагрузка</th>
                </tr>
              </thead>
              <tbody>
                {citiesData.map((item, i) => (
                  <tr key={i} className="border-b border-border/40 last:border-0">
                    <td className="py-2 font-medium">{item.city}</td>
                    <td className="py-2 text-muted">{item.district}</td>
                    <td className="py-2 text-muted">{item.load}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-3">Частые вопросы</h2>
          <div className="space-y-4 mb-8">
            {faqData.map((item, i) => (
              <div key={i} className="border-l-2 border-accent-blue pl-4">
                <p className="font-medium text-foreground mb-1">{item.question}</p>
                <p className="text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-border rounded-lg p-4 mb-4">
            <p className="text-sm text-muted">
              Нужна полная таблица с разбивкой по всем регионам РФ?{" "}
              <Link href="/snegovye-rajony-rossii/" className="text-accent-blue hover:underline font-medium">
                Все снеговые районы по регионам РФ →
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/knowledge/sejsmichnost/" className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline">
              Следующая статья: Сейсмичность
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
