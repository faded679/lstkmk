import type { Metadata } from "next";
import { headers } from "next/headers";
import ArticleSchema from "@/components/ArticleSchema";
import breadcrumbs from "@/data/breadcrumbs.json";

export const metadata: Metadata = {
  title: "База знаний по ЛСТК и металлоконструкциям | МАКСТИЛ",
  description:
    "Полезные материалы, справочники и ответы на вопросы по строительству быстровозводимых зданий из ЛСТК. Технические нюансы, расчёты, рекомендации.",
  keywords: [
    "база знаний ЛСТК",
    "металлоконструкции справочник",
    "строительство ангаров",
    "сэндвич-панели",
    "ЛСТК технологии",
  ],
  openGraph: {
    title: "База знаний по ЛСТК и металлоконструкциям",
    description: "Справочные материалы и ответы на вопросы по строительству из ЛСТК",
    url: "https://lstkmk.ru/knowledge/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/knowledge/",
  },
};

export default async function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || headersList.get("x-matched-path") || "/knowledge/";

  const isKnowledgePage = pathname !== "/knowledge/" && pathname.startsWith("/knowledge/");
  const title = (breadcrumbs as Record<string, string>)[pathname] || "Справочный материал по ЛСТК";
  const description = `Справочный материал на тему: ${title}. Проектирование, производство и строительство быстровозводимых зданий из ЛСТК.`;
  const url = `https://lstkmk.ru${pathname}`;

  return (
    <>
      {isKnowledgePage && <ArticleSchema title={title} description={description} url={url} />}
      {children}
    </>
  );
}
