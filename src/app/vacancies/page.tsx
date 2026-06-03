"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, MapPin, Money, Clock } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import VacancyModal from "@/components/VacancyModal";

const vacancies = [
  {
    id: 1,
    title: "Инженер-конструктор (КМ/КМД)",
    department: "Проектный отдел",
    location: "Белгород / удалённо",
    salary: "от 90 000 ₽",
    schedule: "Полный день",
    description:
      "Разработка конструктивных решений металлокаркасов зданий, подготовка чертежей КМ и КМД в Tekla Structures или КОМПАС.",
    requirements: [
      "Опыт проектирования МК от 3 лет",
      "Знание Tekla Structures, AutoCAD, SCAD",
      "Высшее образование (ПГС, СК)",
      "Понимание СНиП/СП по стальным конструкциям",
    ],
  },
  {
    id: 2,
    title: "Монтажник металлоконструкций",
    department: "Монтажный участок",
    location: "Разъездной характер",
    salary: "от 80 000 ₽",
    schedule: "Вахта 30/30 или 45/15",
    description:
      "Монтаж стальных каркасов быстровозводимых зданий: колонны, фермы, прогоны, связи. Работа на высоте.",
    requirements: [
      "Опыт монтажа МК от 2 лет",
      "Удостоверение на высотные работы",
      "Навыки работы с газо- и электросваркой",
      "Умение читать чертежи КМД",
    ],
  },
  {
    id: 3,
    title: "Сварщик НАКС (РД, МП)",
    department: "Производство",
    location: "Белгородский р-н, с. Репное",
    salary: "от 100 000 ₽",
    schedule: "Сменный график 2/2",
    description:
      "Сварка металлоконструкций полуавтоматом и ручной дуговой сваркой на заводе. Работа по чертежам.",
    requirements: [
      "Аттестация НАКС (РД, МП)",
      "Опыт сварки МК от 3 лет",
      "Чтение чертежей КМД",
      "Ответственность, качество швов",
    ],
  },
  {
    id: 4,
    title: "Прораб (монтаж МК)",
    department: "Строительный отдел",
    location: "Разъездной / Белгород",
    salary: "от 120 000 ₽",
    schedule: "Полный день",
    description:
      "Организация и контроль монтажных работ на объектах. Управление бригадой 8-15 человек, контроль сроков и качества.",
    requirements: [
      "Опыт руководства монтажом МК от 5 лет",
      "Знание технологии монтажа каркасных зданий",
      "Умение работать с проектной документацией",
      "Водительское удостоверение кат. B",
    ],
  },
  {
    id: 5,
    title: "Менеджер по продажам (B2B)",
    department: "Коммерческий отдел",
    location: "Белгород / удалённо",
    salary: "от 70 000 ₽ + %",
    schedule: "Полный день",
    description:
      "Работа с входящими заявками и холодный поиск клиентов. Продажа строительства быстровозводимых зданий под ключ.",
    requirements: [
      "Опыт B2B продаж от 2 лет",
      "Понимание строительной сферы — преимущество",
      "Навыки ведения переговоров",
      "CRM, Excel, презентации",
    ],
  },
  {
    id: 6,
    title: "Водитель-экспедитор (кат. CE)",
    department: "Логистика",
    location: "Белгородский р-н, с. Репное",
    salary: "от 85 000 ₽",
    schedule: "5/2, командировки",
    description:
      "Доставка металлоконструкций на объекты заказчиков. Длинномерные негабаритные грузы.",
    requirements: [
      "Категория CE, опыт от 3 лет",
      "Опыт перевозки длинномеров",
      "Знание правил крепления грузов",
      "Без вредных привычек",
    ],
  },
];

export default function VacanciesPage() {
  const reduce = useReducedMotion();
  const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (title: string) => {
    setSelectedVacancy(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          На главную
        </Link>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Вакансии
          </h1>
          <p className="mt-4 text-base text-muted max-w-lg leading-relaxed">
            Мы растём и ищем профессионалов в команду. Хорошие условия,
            официальное оформление, стабильная загрузка.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {vacancies.map((vacancy, i) => (
            <motion.div
              key={vacancy.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-lg border border-border bg-white hover:border-accent-blue/30 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {vacancy.title}
                  </h2>
                  <p className="text-sm text-muted mt-0.5">
                    {vacancy.department}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {vacancy.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted mb-4">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} weight="bold" className="text-accent-blue" />
                  {vacancy.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Money size={13} weight="bold" className="text-accent-orange" />
                  {vacancy.salary}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={13} weight="bold" className="text-accent-blue" />
                  {vacancy.schedule}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-xs font-medium text-foreground mb-2">
                  Требования:
                </div>
                <ul className="space-y-1">
                  {vacancy.requirements.map((req) => (
                    <li
                      key={req}
                      className="text-xs text-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-orange mt-1.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleApply(vacancy.title)}
                className="inline-flex h-9 items-center px-5 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Откликнуться
              </button>
            </motion.div>
          ))}
        </div>

        <VacancyModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedVacancy(null);
          }}
          vacancyTitle={selectedVacancy || ""}
        />

        <div className="mt-12 p-6 rounded-lg bg-slate-50 border border-border">
          <p className="text-sm text-muted leading-relaxed">
            Не нашли подходящую вакансию? Отправьте резюме на{" "}
            <a
              href="mailto:maxsteel31@bk.ru?subject=Резюме"
              className="text-accent-blue font-medium hover:underline"
            >
              maxsteel31@bk.ru
            </a>{" "}
            — мы рассмотрим вашу кандидатуру при появлении новых позиций.
          </p>
        </div>
      </main>
    </div>
  );
}
