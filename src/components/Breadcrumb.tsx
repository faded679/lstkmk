"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/articles/": [{ label: "Главная", href: "/" }, { label: "Статьи", href: "/articles/" }],
  "/articles/lstk-vs-goryachekatanyj-prokat/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "ЛСТК или горячекатаный прокат", href: "/articles/lstk-vs-goryachekatanyj-prokat/" },
  ],
  "/articles/podgotovka-ploshchadki/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "Подготовка площадки", href: "/articles/podgotovka-ploshchadki/" },
  ],
  "/articles/sendvich-paneli-obzor/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "Сэндвич-панели", href: "/articles/sendvich-paneli-obzor/" },
  ],
  "/articles/ventilyaciya-v-proizvodstvennyh-zdaniyah/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "Вентиляция", href: "/articles/ventilyaciya-v-proizvodstvennyh-zdaniyah/" },
  ],
  "/articles/preimushchestva-lstk-stroitelstva/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "Преимущества ЛСТК", href: "/articles/preimushchestva-lstk-stroitelstva/" },
  ],
  "/articles/antikorrozijnaya-zashchita/": [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles/" },
    { label: "Антикоррозийная защита", href: "/articles/antikorrozijnaya-zashchita/" },
  ],
  "/vacancies/": [{ label: "Главная", href: "/" }, { label: "Вакансии", href: "/vacancies/" }],
  "/privacy/": [{ label: "Главная", href: "/" }, { label: "Политика конфиденциальности", href: "/privacy/" }],
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Не показываем на главной
  if (pathname === "/") return null;
  
  const items = breadcrumbMap[pathname];
  if (!items) return null;

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
      {/* Schema.org микроразметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Визуальная навигация */}
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
