import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Закон о строительстве ангаров 2024 | Справочник ЛСТК",
  description: "Профессиональное руководство по закон о строительстве ангаров 2024. Цены, сроки, технологии ЛСТК.",
  keywords: ["zakon stroitelstvo"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Закон о строительстве ангаров 2024",
    "description": "Руководство по закон о строительстве ангаров 2024",
    "author": { "@type": "Organization", "name": "ЛСТК-МК" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Закон о строительстве ангаров 2024
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            Законодательство
          </div>

          <h1 itemProp="headline">Закон о строительстве ангаров 2024: что изменилось для заказчиков ЛСТК-объектов</h1>

<p>В 2024 году в законодательство о возведении некапитальных и капитальных строений внесены существенные поправки, которые напрямую затрагивают <strong>строительство ангаров</strong> из ЛСТК. Компания МАКСТИЛ подготовила обзор ключевых изменений, чтобы заказчики могли корректно оформить проект, рассчитать цену и спланировать сроки монтажа.</p>

<h2>Уведомительный порядок вместо разрешения</h2>
<p>С 2024 года ангары площадью до 1500 м² при отсутствии заглублённого фундамента признаются некапитальными объектами. Это означает, что вместо полного разрешения на строительство достаточно уведомления в местную администрацию. Срок согласования сократился с 30 до 7 рабочих дней. Для ЛСТК-ангаров МАКСТИЛ на винтовых сваях это упрощение особенно актуально — мы экономим клиенту до 3 недель.</p>

<h2>Сравнение порядка согласования: до и после 2024</h2>
<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Параметр</th>
        <th className="border border-slate-300 px-4 py-2 text-left">До 2024</th>
        <th className="border border-slate-300 px-4 py-2 text-left">С 2024</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Документ</td>
        <td className="border border-slate-300 px-4 py-2">Разрешение на строительство</td>
        <td className="border border-slate-300 px-4 py-2">Уведомление в администрацию</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Срок согласования</td>
        <td className="border border-slate-300 px-4 py-2">30 рабочих дней</td>
        <td className="border border-slate-300 px-4 py-2">7 рабочих дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Лимит площади</td>
        <td className="border border-slate-300 px-4 py-2">Без льгот</td>
        <td className="border border-slate-300 px-4 py-2">До 1500 м² (некапитальные)</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Экономия времени</td>
        <td className="border border-slate-300 px-4 py-2">—</td>
        <td className="border border-slate-300 px-4 py-2">До 3 недель</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Новые требования к огнестойкости и проекту</h2>
<p>Обновлённый СП 56.13330 ужесточил нормы по классу пожарной опасности. Конструкции ЛСТК с цинковым покрытием 275 г/м² теперь обязательны для объектов выше 6 метров. В проект включаются расчёты ветровой и снеговой нагрузки по новой карте районирования. МАКСТИЛ выполняет расчёт каркаса в ПК SCAD с запасом прочности 1,4.</p>

<h2>Изменения в кадастровом учёте</h2>
<p>Ангары на ленточном фундаменте теперь автоматически признаются капитальными объектами и подлежат регистрации в Росреестре в течение 90 дней. За нарушение — штраф до 200 000 ₽. Наши специалисты сопровождают оформление под ключ.</p>

<h2>Влияние на цену и сроки строительства</h2>
<p>Несмотря на усиление требований, цена ангара ЛСТК осталась в диапазоне <strong>от 8 500 ₽/м²</strong>. Срок монтажа ангара 600 м² — 21–28 дней. Применение заводских комплектов с маркировкой позволяет ускорить сборку и пройти проверки без замечаний.</p>

<h2>Ключевые показатели ЛСТК-ангаров МАКСТИЛ 2024</h2>
<div className="overflow-x-auto my-6">
  <table className="min-w-full border border-slate-300">
    <thead className="bg-slate-100">
      <tr>
        <th className="border border-slate-300 px-4 py-2 text-left">Показатель</th>
        <th className="border border-slate-300 px-4 py-2 text-left">Значение</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Цена за м²</td>
        <td className="border border-slate-300 px-4 py-2">от 8 500 ₽</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Срок монтажа (600 м²)</td>
        <td className="border border-slate-300 px-4 py-2">21–28 дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Цинковое покрытие</td>
        <td className="border border-slate-300 px-4 py-2">275 г/м²</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Запас прочности (SCAD)</td>
        <td className="border border-slate-300 px-4 py-2">1,4</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Срок регистрации в Росреестре</td>
        <td className="border border-slate-300 px-4 py-2">до 90 дней</td>
      </tr>
      <tr>
        <td className="border border-slate-300 px-4 py-2">Штраф за нарушение</td>
        <td className="border border-slate-300 px-4 py-2">до 200 000 ₽</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Часто задаваемые вопросы</h2>

<h3>Нужно ли получать разрешение на строительство ангара ЛСТК площадью 1000 м²?</h3>
<p>Нет, при отсутствии заглублённого фундамента такой ангар относится к некапитальным объектам. Достаточно подать уведомление в местную администрацию, срок рассмотрения — 7 рабочих дней.</p>

<h3>Какой штраф грозит за отсутствие регистрации ангара в Росреестре?</h3>
<p>Если ангар возведён на ленточном фундаменте (капитальный объект) и не зарегистрирован в течение 90 дней, штраф может достигать 200 000 ₽. МАКСТИЛ сопровождает оформление под ключ.</p>

<h3>Соответствуют ли конструкции МАКСТИЛ новым требованиям СП 56.13330?</h3>
<p>Да. Мы применяем ЛСТК с цинковым покрытием 275 г/м², что обязательно для объектов выше 6 метров. Расчёт каркаса выполняется в ПК SCAD с запасом прочности 1,4 и учётом новой карты районирования по ветровой и снеговой нагрузке.</p>

<h3>Как изменилась цена ангара ЛСТК после ужесточения требований в 2024 году?</h3>
<p>Несмотря на новые нормы, цена осталась в диапазоне от 8 500 ₽/м². Это достигается за счёт заводского изготовления комплектов и оптимизации логистики.</p>

<h3>Сколько занимает строительство ангара 600 м² с учётом согласований?</h3>
<p>Согласование по уведомительному порядку — 7 рабочих дней, монтаж — 21–28 дней. В сумме объект готов к эксплуатации примерно за 5–6 недель.</p>

          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Нужна консультация?</h3>
            <p className="text-muted mb-4">Наши инженеры бесплатно рассчитают стоимость вашего проекта за 15 минут.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/configurator" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a href="tel:+79606322061" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={18} />
                +7 (960) 632-20-61
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
