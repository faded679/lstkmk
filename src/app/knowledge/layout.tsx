import type { Metadata } from "next";
import ArticleSchemaWrapper from "@/components/ArticleSchemaWrapper";
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

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleSchemaWrapper
        basePath="/knowledge"
        baseTitle="Справочный материал по ЛСТК"
        breadcrumbs={breadcrumbs as Record<string, string>}
      />
      {children}
    </>
  );
}
