import type { Metadata } from "next";

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

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
