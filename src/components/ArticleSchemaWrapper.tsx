"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleSchema from "./ArticleSchema";

interface ArticleSchemaWrapperProps {
  basePath: string;
  baseTitle: string;
  breadcrumbs: Record<string, string>;
}

export default function ArticleSchemaWrapper({
  basePath,
  baseTitle,
  breadcrumbs,
}: ArticleSchemaWrapperProps) {
  const pathname = usePathname();
  const [schemaProps, setSchemaProps] = useState<{
    title: string;
    description: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    if (!pathname || pathname === basePath || !pathname.startsWith(basePath + "/")) {
      setSchemaProps(null);
      return;
    }

    const title = breadcrumbs[pathname] || baseTitle;
    const description = `Полезный материал на тему: ${title}. Проектирование, производство и строительство быстровозводимых зданий из ЛСТК.`;
    const url = `https://lstkmk.ru${pathname}`;

    setSchemaProps({ title, description, url });
  }, [pathname, basePath, baseTitle, breadcrumbs]);

  if (!schemaProps) return null;

  return <ArticleSchema {...schemaProps} />;
}
