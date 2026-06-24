"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowLeft, X, Briefcase, Clock, CurrencyRub, GraduationCap } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

type Vacancy = {
  salary: string;
  schedule: string;
  education: string;
  experience: string;
  duties: string[];
  conditions: string[];
};

const vacancyDetails: Record<string, Vacancy> = {
  "Менеджер по продажам": {
    salary: "от 60 000 ₽ + % от сделок",
    schedule: "5/2, 09:00–18:00",
    education: "Высшее образование (экономика, строительство, технические специальности) или 7 лет опыта в продажах",
    experience: "Опыт в продажах B2B от 2 лет",
    duties: [
      "Работа с входящими заявками и холодный поиск клиентов",
      "Консультирование по металлоконструкциям и ангарам",
      "Подготовка коммерческих предложений",
      "Ведение сделок до подписания договора",
    ],
    conditions: [
      "Официальное трудоустройство по ТК РФ",
      "Оклад + % от закрытых сделок без потолка",
      "CRM-система, все инструменты предоставляем",
      "Карьерный рост до руководителя отдела",
    ],
  },
  "Инженер-конструктор": {
    salary: "от 80 000 ₽",
    schedule: "5/2, 09:00–18:00",
    education: "Высшее техническое образование (строительство, металлоконструкции, машиностроение) или 7 лет опыта",
    experience: "Опыт проектирования металлоконструкций от 3 лет",
    duties: [
      "Разработка КМ и КМД для ангаров и производственных зданий",
      "Расчёт нагрузок, подбор сечений профилей",
      "Работа в Tekla Structures / AutoCAD",
      "Согласование с производством и монтажом",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Современное ПО, лицензии предоставляем",
      "Интересные крупные проекты",
      "Возможность профессионального роста",
    ],
  },
  "Кладовщик": {
    salary: "от 40 000 ₽",
    schedule: "5/2 или 2/2",
    education: "Среднее специальное или высшее; опыт на складе от 1 года",
    experience: "Опыт работы на складе металлопроката приветствуется",
    duties: [
      "Приёмка и отгрузка металлопроката и готовых конструкций",
      "Ведение складского учёта в 1С",
      "Контроль остатков, инвентаризация",
      "Работа с погрузчиком (удостоверение — плюс)",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Стабильная зарплата без задержек",
      "Спецодежда за счёт компании",
      "Дружный коллектив",
    ],
  },
  "Сварщики": {
    salary: "от 70 000 ₽ (сдельно — выше)",
    schedule: "5/2 или вахта на объектах",
    education: "Среднее специальное; удостоверение сварщика обязательно",
    experience: "Опыт сварки МИГ/МАГ, ручная дуговая; металлоконструкции — плюс",
    duties: [
      "Сварка металлоконструкций на производстве",
      "Работа по чертежам КМД",
      "Контроль качества сварных швов",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Сдельная оплата — зарабатывай больше при высокой выработке",
      "Спецодежда и СИЗ за счёт компании",
      "Возможность выезда на монтаж с доп. оплатой",
    ],
  },
  "Токарь-фрезеровщик": {
    salary: "от 65 000 ₽",
    schedule: "5/2, 08:00–17:00",
    education: "Среднее специальное (токарное/фрезерное дело)",
    experience: "Опыт на токарном и фрезерном станке от 2 лет",
    duties: [
      "Токарная и фрезерная обработка деталей по чертежам",
      "Контроль точности обработки",
      "Обслуживание станков",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Современное оборудование",
      "Стабильная загрузка",
      "Спецодежда за счёт компании",
    ],
  },
  "Сборщики металлоконструкций": {
    salary: "от 60 000 ₽",
    schedule: "5/2 или вахта",
    education: "Среднее специальное; опыт сборки МК от 1 года",
    experience: "Умение читать чертежи, работа с болтовыми соединениями",
    duties: [
      "Сборка каркасов зданий из ЛСТК по чертежам",
      "Болтовые и сварные соединения",
      "Работа в бригаде на производстве и выезды на монтаж",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Доп. оплата за монтажные выезды",
      "Спецодежда и страховка",
    ],
  },
  "Слесарь": {
    salary: "от 55 000 ₽",
    schedule: "5/2, 08:00–17:00",
    education: "Среднее специальное (слесарное дело)",
    experience: "Слесарные работы по металлу от 1 года",
    duties: [
      "Слесарная обработка и подгонка деталей",
      "Работа с металлопрокатом",
      "Сборка узлов и конструкций",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Стабильная зарплата",
      "Спецодежда и СИЗ",
    ],
  },
  "Оператор станка ЧПУ": {
    salary: "от 70 000 ₽",
    schedule: "5/2 или сменный",
    education: "Среднее специальное (ЧПУ, мехобработка) или 7 лет опыта на ЧПУ",
    experience: "Опыт работы на станках с ЧПУ от 2 лет, знание G-кода",
    duties: [
      "Настройка и управление станком ЧПУ",
      "Загрузка управляющих программ",
      "Контроль качества деталей",
      "Техническое обслуживание станка",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Современные станки",
      "Обучение при необходимости",
      "Стабильный заказ",
    ],
  },
  "Механик по ремонту станков": {
    salary: "от 65 000 ₽",
    schedule: "5/2, 08:00–17:00",
    education: "Среднее специальное или высшее техническое (механика, ремонт оборудования) или 7 лет опыта",
    experience: "Ремонт и обслуживание металлообрабатывающего оборудования от 3 лет",
    duties: [
      "ТО и ремонт токарных, фрезерных, сварочных станков",
      "Диагностика неисправностей",
      "Ведение ремонтного журнала",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Оснащённая инструментальная база",
      "Стабильная нагрузка",
    ],
  },
  "Бригадир монтажников": {
    salary: "от 90 000 ₽ + вахтовые",
    schedule: "Вахта / выезды на объекты",
    education: "Среднее специальное или высшее строительное или 7 лет опыта в монтаже МК",
    experience: "Опыт монтажа металлоконструкций от 5 лет, опыт руководства бригадой",
    duties: [
      "Организация и контроль работы монтажной бригады",
      "Монтаж каркасов зданий из ЛСТК",
      "Приёмка материала на объекте",
      "Ведение исполнительной документации",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Вахтовые надбавки + компенсация проезда",
      "Питание и проживание на объекте",
      "Высокий доход при стабильной загрузке",
    ],
  },
  "Монтажники металлоконструкций": {
    salary: "от 65 000 ₽ + вахтовые",
    schedule: "Вахта / выезды на объекты",
    education: "Среднее общее; удостоверение верхолаза / монтажника приветствуется",
    experience: "Монтаж металлоконструкций или строительных конструкций от 1 года",
    duties: [
      "Монтаж несущего каркаса зданий",
      "Укладка кровли и обшивки сэндвич-панелями",
      "Работа с болтовыми соединениями на высоте",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Вахтовые надбавки",
      "Питание и проживание за счёт компании",
      "СИЗ и страховка",
    ],
  },
  "Бетонщики": {
    salary: "от 55 000 ₽ + вахтовые",
    schedule: "Вахта / выезды",
    education: "Среднее общее; опыт бетонных работ от 1 года",
    experience: "Опыт работы с бетоном: заливка, виброуплотнение",
    duties: [
      "Заливка фундаментов и полов",
      "Работа с опалубкой",
      "Виброуплотнение бетонной смеси",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Вахтовые надбавки",
      "Проживание и питание на объекте",
    ],
  },
  "Инженер-строитель": {
    salary: "от 80 000 ₽",
    schedule: "5/2 + выезды на объекты",
    education: "Высшее строительное образование или 7 лет опыта в строительстве промышленных зданий",
    experience: "Опыт строительства производственных / промышленных зданий от 3 лет",
    duties: [
      "Технический надзор за монтажом на объектах",
      "Проверка соответствия работ проекту",
      "Ведение исполнительной документации",
      "Взаимодействие с заказчиком и субподрядчиками",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Компенсация ГСМ / командировочные",
      "Интересные объекты по всей России",
      "Карьерный рост",
    ],
  },
  "Электрик": {
    salary: "от 65 000 ₽",
    schedule: "5/2 + выезды",
    education: "Среднее специальное (электрика); удостоверение группы допуска не ниже III",
    experience: "Монтаж электрики в промышленных объектах от 2 лет",
    duties: [
      "Монтаж электропроводки в производственных зданиях",
      "Подключение щитового оборудования",
      "Монтаж освещения",
      "Сдача объектов в эксплуатацию",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Командировочные при выездах",
      "Инструмент и СИЗ предоставляем",
    ],
  },
  "Водитель манипулятора": {
    salary: "от 70 000 ₽",
    schedule: "5/2 + выезды на объекты",
    education: "Водительское удостоверение категории C + удостоверение оператора КМУ",
    experience: "Опыт работы на манипуляторе от 2 лет",
    duties: [
      "Перевозка и погрузо-разгрузочные работы с металлоконструкциями",
      "Работа на объектах строительства",
      "Техническое обслуживание ТС",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Топливо за счёт компании",
      "Командировочные при выездах",
      "Новая техника",
    ],
  },
  "Разнорабочий": {
    salary: "от 40 000 ₽",
    schedule: "5/2 или 2/2",
    education: "Среднее общее; опыт не обязателен",
    experience: "Физическая выносливость, ответственность",
    duties: [
      "Вспомогательные работы на производстве и стройке",
      "Погрузка и разгрузка материалов",
      "Уборка и поддержание порядка на территории",
    ],
    conditions: [
      "Официальное трудоустройство",
      "Стабильная зарплата без задержек",
      "Спецодежда",
      "Обучение на месте",
    ],
  },
};

type Group = { title: string; emoji: string; color: string; vacancies: string[] };

const groups: Group[] = [
  {
    title: "Офис и управление",
    emoji: "📋",
    color: "bg-accent-blue/10 text-accent-blue",
    vacancies: ["Менеджер по продажам", "Инженер-конструктор", "Кладовщик"],
  },
  {
    title: "Производство",
    emoji: "🏭",
    color: "bg-accent-orange/10 text-accent-orange",
    vacancies: ["Сварщики", "Токарь-фрезеровщик", "Сборщики металлоконструкций", "Слесарь", "Оператор станка ЧПУ", "Механик по ремонту станков"],
  },
  {
    title: "Монтаж и строительство",
    emoji: "🚧",
    color: "bg-green-100 text-green-600",
    vacancies: ["Бригадир монтажников", "Монтажники металлоконструкций", "Бетонщики", "Инженер-строитель", "Электрик", "Водитель манипулятора"],
  },
  {
    title: "Общие вакансии",
    emoji: "🔧",
    color: "bg-slate-100 text-slate-600",
    vacancies: ["Разнорабочий"],
  },
];

type ResumeForm = {
  name: string;
  phone: string;
  city: string;
  experience: string;
  comment: string;
};

export default function VacanciesPage() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const vacancy = selected ? vacancyDetails[selected] : null;
  const [showResume, setShowResume] = useState(false);
  const [resumeForm, setResumeForm] = useState<ResumeForm>({ name: "", phone: "", city: "", experience: "", comment: "" });
  const [resumeSending, setResumeSending] = useState(false);
  const [resumeSent, setResumeSent] = useState(false);
  const [resumeAgreed, setResumeAgreed] = useState(false);

  function closeModal() {
    setSelected(null);
    setShowResume(false);
    setResumeSent(false);
    setResumeForm({ name: "", phone: "", city: "", experience: "", comment: "" });
    setResumeAgreed(false);
  }

  async function submitResume(e: React.FormEvent) {
    e.preventDefault();
    setResumeSending(true);
    try {
      await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vacancy: selected, ...resumeForm }),
      });
      setResumeSent(true);
    } catch {
      // silent
    } finally {
      setResumeSending(false);
    }
  }

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

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 space-y-10"
        >
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${group.color}`}>
                  {group.emoji}
                </span>
                {group.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.vacancies.map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelected(name)}
                    className="text-left p-5 rounded-lg border border-border bg-white hover:shadow-md hover:border-accent-blue/40 transition-all duration-200 group"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-accent-blue transition-colors">{name}</h3>
                    <span className="mt-3 inline-block text-xs text-accent-blue font-medium">Условия и требования →</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 p-6 rounded-lg bg-slate-50 border border-border">
          <p className="text-base font-medium text-foreground mb-2">
            Связаться по вакансиям
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Телефон:{" "}
            <a href="tel:+79606322061" className="text-accent-blue font-medium hover:underline">
              +7 (960) 632-20-61
            </a>
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Email:{" "}
            <a href="mailto:maxsteel31@bk.ru?subject=Резюме" className="text-accent-blue font-medium hover:underline">
              maxsteel31@bk.ru
            </a>
          </p>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selected && vacancy && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto">
                <div className="flex items-start justify-between p-6 border-b border-border">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{selected}</h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors shrink-0 ml-4"
                  >
                    <X size={16} weight="bold" />
                  </button>
                </div>

                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="text-muted mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted">График работы</p>
                        <p className="text-sm font-medium text-foreground">{vacancy.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CurrencyRub size={16} className="text-muted mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted">Заработная плата</p>
                        <p className="text-sm font-medium text-foreground">{vacancy.salary}</p>
                        <p className="text-[11px] text-muted mt-0.5">обсуждается на собеседовании</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                    <GraduationCap size={16} className="text-accent-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted mb-0.5">Образование / опыт</p>
                      <p className="text-sm text-foreground">{vacancy.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Briefcase size={16} className="text-muted mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted mb-0.5">Требуемый опыт</p>
                      <p className="text-sm text-foreground">{vacancy.experience}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Обязанности</p>
                    <ul className="space-y-1.5">
                      {vacancy.duties.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Условия</p>
                    <ul className="space-y-1.5">
                      {vacancy.conditions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:+79606322061"
                      className="flex-1 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium text-center hover:bg-accent-blue/90 transition-colors"
                    >
                      Позвонить
                    </a>
                    <button
                      onClick={() => setShowResume(true)}
                      className="flex-1 py-2.5 rounded-lg border border-border text-sm font-medium text-center text-foreground hover:border-accent-blue/40 transition-colors"
                    >
                      Отправить резюме
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Resume modal */}
      <AnimatePresence>
        {showResume && (
          <>
            <motion.div
              key="resume-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              onClick={() => { setShowResume(false); setResumeSent(false); }}
            />
            <motion.div
              key="resume-modal"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <div>
                    <p className="text-xs text-muted">Вакансия</p>
                    <h3 className="text-base font-bold text-foreground">{selected}</h3>
                  </div>
                  <button
                    onClick={() => { setShowResume(false); setResumeSent(false); }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors shrink-0"
                  >
                    <X size={16} weight="bold" />
                  </button>
                </div>

                <div className="p-5">
                  {resumeSent ? (
                    <div className="py-8 text-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 text-xl">✓</span>
                      </div>
                      <p className="font-semibold text-foreground mb-1">Резюме отправлено!</p>
                      <p className="text-sm text-muted">Мы свяжемся с вами в ближайшее время.</p>
                      <button
                        onClick={() => { setShowResume(false); setResumeSent(false); }}
                        className="mt-5 px-6 py-2 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors"
                      >
                        Закрыть
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={submitResume} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-muted mb-1 block">ФИО *</label>
                          <input
                            required
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            value={resumeForm.name}
                            onChange={e => setResumeForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted mb-1 block">Телефон *</label>
                          <input
                            required
                            type="tel"
                            placeholder="+7 (900) 000-00-00"
                            value={resumeForm.phone}
                            onChange={e => setResumeForm(f => ({ ...f, phone: e.target.value }))}
                            className="w-full h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted mb-1 block">Город проживания</label>
                          <input
                            type="text"
                            placeholder="Белгород"
                            value={resumeForm.city}
                            onChange={e => setResumeForm(f => ({ ...f, city: e.target.value }))}
                            className="w-full h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted mb-1 block">Опыт работы</label>
                          <input
                            type="text"
                            placeholder="3 года, ООО Стройгруп"
                            value={resumeForm.experience}
                            onChange={e => setResumeForm(f => ({ ...f, experience: e.target.value }))}
                            className="w-full h-9 px-3 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted mb-1 block">Дополнительно</label>
                        <textarea
                          rows={2}
                          placeholder="Любая дополнительная информация о себе..."
                          value={resumeForm.comment}
                          onChange={e => setResumeForm(f => ({ ...f, comment: e.target.value }))}
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors resize-none"
                        />
                      </div>
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={resumeAgreed}
                          onChange={(e) => setResumeAgreed(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-border accent-accent-blue flex-shrink-0 cursor-pointer"
                        />
                        <span className="text-[11px] text-muted leading-relaxed">
                          Я согласен(а) с{" "}
                          <a href="/privacy" target="_blank" className="text-accent-blue hover:underline">политикой обработки персональных данных</a>
                          {" "}и даю согласие на обработку моих персональных данных в соответствии с Федеральным законом № 152-ФЗ
                        </span>
                      </label>
                      <button
                        type="submit"
                        disabled={resumeSending || !resumeAgreed}
                        className="w-full py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
                      >
                        {resumeSending ? "Отправляем..." : "Отправить резюме"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
