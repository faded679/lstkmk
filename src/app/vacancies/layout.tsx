import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вакансии | МАКСТИЛ — Работа в производстве металлоконструкций",
  description:
    "Вакансии МАКСТИЛ: инженеры-конструкторы, монтажники, сварщики. Работа в Белгороде и на объектах по всей России. Конкурентная зарплата, стабильность, развитие.",
  keywords: [
    "вакансии металлоконструкции",
    "работа сварщик Белгород",
    "монтажник металлоконструкций вакансии",
    "инженер конструктор КМД",
    "работа в строительстве Белгород",
    "МАКСТИЛ карьера",
  ],
  openGraph: {
    title: "Вакансии МАКСТИЛ — Работа с металлоконструкциями",
    description: "Присоединяйтесь к команде профессионалов. Вакансии в Белгороде и на объектах по России.",
    url: "https://lstkmk.ru/vacancies/",
  },
  alternates: {
    canonical: "https://lstkmk.ru/vacancies/",
  },
};

export default function VacanciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
