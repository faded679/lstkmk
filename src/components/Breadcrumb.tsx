"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import breadcrumbTitles from "@/data/breadcrumbs.json";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const sectionNames: Record<string, string> = {
  articles: "Статьи",
  knowledge: "База знаний",
  vacancies: "Вакансии",
  privacy: "Политика конфиденциальности",
  configurator: "Калькулятор",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Не показываем на главной
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items: BreadcrumbItem[] = [
    { label: "Главная", href: "/" },
  ];

  let accumulatedPath = "";
  for (let i = 0; i < segments.length; i++) {
    accumulatedPath += "/" + segments[i];
    const isLast = i === segments.length - 1;
    const href = accumulatedPath + "/";

    let label: string;

    if (i === 0 && sectionNames[segments[i]]) {
      // Раздел первого уровня
      label = sectionNames[segments[i]];
      if (!isLast) {
        items.push({ label, href });
        continue;
      }
    } else if (i === 0) {
      label = sectionNames[segments[i]] ?? segments[i];
    } else {
      // Подстраница — ищем в JSON-маппинге
      const key = href as keyof typeof breadcrumbTitles;
      label = breadcrumbTitles[key] ?? segments[i].replace(/-/g, " ");
    }

    items.push({ label, href });
  }

  if (items.length <= 1) return null;

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://lstkmk.ru${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="breadcrumb" className="py-3 px-6 lg:px-10 bg-slate-50 border-b border-border">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted max-w-[1400px] mx-auto">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-300">/</span>}
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-accent-blue transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
