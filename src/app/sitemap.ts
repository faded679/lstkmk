import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lstkmk.ru",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://lstkmk.ru/articles/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: "https://lstkmk.ru/articles/lstk-vs-goryachekatanyj-prokat/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/podgotovka-ploshchadki/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/sendvich-paneli-obzor/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/ventilyaciya-v-proizvodstvennyh-zdaniyah/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/preimushchestva-lstk-stroitelstva/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/antikorrozijnaya-zashchita/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/chto-takoe-lstk/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/fundament-pod-bystrovozvodimoe-zdanie/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/sroki-stroitelstva-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/kak-vybrat-podryadchika-metallokonstrukcii/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/angar-dlya-selskogo-hozyajstva/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/uteplenie-bystrovozvodimogo-zdaniya/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/articles/pozharnaya-bezopasnost-metallicheskih-zdanij/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    {
      url: "https://lstkmk.ru/vacancies/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://lstkmk.ru/privacy/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    // База знаний (главная)
    {
      url: "https://lstkmk.ru/knowledge/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Микростатьи базы знаний (первые 20 существующих)
    { url: "https://lstkmk.ru/knowledge/tip-mestnosti/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/snegovoj-rajon/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/sejsmichnost/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/tolshina-sendvich-panelej/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/vysota-korovnika/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/ploshchad-na-golovu-krs/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/shag-kollon/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/fundament-korovnika/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/ventilyaciya-korovnika/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/uteplenie-korovnika/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/srok-sluzhby-lstk/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/minimalnyj-uklon-krovli/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/vetrovaya-nagruzka/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/prolet-bez-kolonn/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/ognestojkost-metallokonstrukcij/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/vorota-dlya-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/osveshenie-proizvodstvennogo-zdaniya/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/vodostochnaya-sistema-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/antikorrozijnaya-obrabotka/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lstkmk.ru/knowledge/poly-v-promyshlennom-zdanii/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // Новые SEO-статьи (добавленные сегодня)
    { url: "https://lstkmk.ru/knowledge/stoimost-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/sroki-stroitelstva/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/zernohranilishche/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/angar-lstk-vs-kirpich/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/uteplenie-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/fundament-dlya-angara/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/vorota-dlya-sklada/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/angar-dlya-avto/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/sendvich-paneli-vidy/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://lstkmk.ru/knowledge/proizvodstvennyj-ceh/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
