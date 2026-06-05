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
  ];
}
