import { headers } from "next/headers";
import breadcrumbs from "@/data/breadcrumbs.json";

const allBreadcrumbs = breadcrumbs as Record<string, string>;

export default async function BreadcrumbSchema() {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || headersList.get("x-matched-path") || "/";

  if (pathname === "/") return null;

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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
