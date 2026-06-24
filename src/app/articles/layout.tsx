import type { Metadata } from "next";
import { headers } from "next/headers";
import ArticleSchema from "@/components/ArticleSchema";
import breadcrumbs from "@/data/breadcrumbs.json";

export const metadata: Metadata = {
  title: "Статьи и руководства по металлоконструкциям | МАКСТИЛ",
  description:
    "Полезные материалы о строительстве быстровозводимых зданий из ЛСТК. Сравнение технологий, расчёт стоимости, советы по эксплуатации. Читайте экспертные статьи МАКСТИЛ.",
  keywords: [
    "статьи о металлоконструкциях",
    "ЛСТК технологии",
    "строительство ангаров",
    "сэндвич-панели",
    "ангар своими руками",
    "стоимость металлоконструкций",
    "быстровозводимые здания руководство",
  ],
  openGraph: {
    title: "Статьи и руководства по металлоконструкциям",
    description: "Экспертные материалы о строительстве из ЛСТК от МАКСТИЛ",
    url: "https://lstkmk.ru/articles/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/articles/",
  },
};

export default async function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || headersList.get("x-matched-path") || "/articles/";

  const isArticlePage = pathname !== "/articles/" && pathname.startsWith("/articles/");
  const title = (breadcrumbs as Record<string, string>)[pathname] || "Статья о металлоконструкциях";
  const description = `Полезная статья на тему: ${title}. Проектирование, производство и строительство быстровозводимых зданий из ЛСТК.`;
  const url = `https://lstkmk.ru${pathname}`;

  return (
    <>
      {isArticlePage && <ArticleSchema title={title} description={description} url={url} />}
      {children}
    </>
  );
}
