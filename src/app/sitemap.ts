import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

const BASE = "https://lstkmk.ru";

// Read all subdirectories under src/app/<section> that contain a page.tsx
function discoverSlugs(section: string): string[] {
  const dir = join(process.cwd(), "src", "app", section);
  try {
    return readdirSync(dir)
      .filter((name) => {
        const full = join(dir, name);
        try {
          if (!statSync(full).isDirectory()) return false;
          // page.tsx must exist in the slug folder
          statSync(join(full, "page.tsx"));
          return true;
        } catch {
          return false;
        }
      })
      .sort();
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/configurator/`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/articles/`,    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/knowledge/`,   lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/vacancies/`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy/`,     lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE}/stroitelstvo-angarov-belgorod/`,           lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/angar-pod-klyuch-cena/`,                   lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/metallokonstrukcii-belgorod-cena/`,        lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/stroitelstvo-skladov-iz-metallokonstrukcij/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bystrovozvodimye-zdaniya-cena/`,           lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/stroitelstvo-cehov-lstk/`,                 lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bystrovozvodimye-angary/`,                 lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/garazh-iz-lstk-cena/`,                      lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/chertezhi-km/`,                              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/chertezhi-kmd/`,                             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/stroitelstvo-zavoda-pod-klyuch/`,             lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/uzly-sendvich-panelej/`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/vetrovoj-rajon/`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/snegovye-rajony-rossii/`,                                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/vetrovye-rajony-rossii/`,                                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tablicza-snegovyh-i-vetrovyh-rajonov-rossii/`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/angar-iz-sendvich-panelej-cena/`,             lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/sklad-pod-klyuch-cena/`,                      lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/stroitelstvo-torgovogo-centra/`,              lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/sportivnyj-kompleks-iz-metallokonstrukcij/`,  lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kalkulyator-angara/`,                          lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const articleEntries: MetadataRoute.Sitemap = discoverSlugs("articles").map((slug) => ({
    url: `${BASE}/articles/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const knowledgeEntries: MetadataRoute.Sitemap = discoverSlugs("knowledge").map((slug) => ({
    url: `${BASE}/knowledge/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries, ...knowledgeEntries];
}
