"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import breadcrumbs from "@/data/breadcrumbs.json";

const allBreadcrumbs = breadcrumbs as Record<string, string>;

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const [schemaHtml, setSchemaHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === "/") {
      setSchemaHtml(null);
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    const itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      name: string;
      item: string;
    }> = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://lstkmk.ru/",
      },
    ];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const normalizedPath = currentPath.endsWith("/") ? currentPath : `${currentPath}/`;
      const name = allBreadcrumbs[normalizedPath] || segment;
      itemListElement.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: `https://lstkmk.ru${normalizedPath}`,
      });
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };

    setSchemaHtml(JSON.stringify(schema));
  }, [pathname]);

  if (!schemaHtml) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaHtml }}
    />
  );
}
