"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Ruler, Calendar, X, Buildings, Stack, Rows } from "@phosphor-icons/react";

interface Project {
  title: string;
  location: string;
  area: string;
  duration: string;
  description: string;
  image: string;
  size?: string;
  type?: string;
  frame?: string;
  floors?: string;
  fullDescription?: string;
}

const projects: Project[] = [
  {
    title: "Коровник на 200 голов без привязного содержания",
    location: "Солнцевский р-н, Белгородская обл.",
    area: "1 876 м²",
    duration: "2021 год",
    description:
      "Коровник 32,6×57,6 м с трёхпролётной системой и аэрационным коньком. Проектирование с учётом технологии содержания КРС.",
    image: "/projects/korovnik.jpg",
    size: "32,6 × 57,6 м",
    type: "Коровник",
    frame: "ЛСТК",
    floors: "1",
  },
  {
    title: "Яйцесклад 36×27 м",
    location: "Шебекинский р-н, Белгородская обл.",
    area: "1 056 м²",
    duration: "45 дней",
    description:
      "Складское помещение для хранения яйца с галереей 12×7 м. Возможность адаптации под офисы, ангары, производства.",
    image: "/projects/eggs.jpg",
    size: "36 × 27 м",
    type: "Склад",
    frame: "ЛСТК",
    floors: "1",
  },
  {
    title: "Картофелехранилище 18×90 м",
    location: "Белгородская область",
    area: "1 620 м²",
    duration: "38 дней",
    description:
      "Хранилище для картофеля на базе быстровозводимого каркаса ЛСТК. Промышленное сельхозсооружение.",
    image: "/kartofel.png",
    size: "18 × 90 м",
    type: "Сельхозхранилище",
    frame: "ЛСТК",
    floors: "1",
  },
  {
    title: "Склад холодильник",
    location: "Белгородский р-н",
    area: "2 400 м²",
    duration: "35 дней",
    description:
      "Холодильный склад для хранения продукции с температурным режимом. Обшивка сэндвич-панелями с утеплителем.",
    image: "/projects/sklad holodinik.jpg",
    size: "40 × 60 м",
    type: "Холодильный склад",
    frame: "ЛСТК",
    floors: "1",
  },
  {
    title: "Автомойка 9×24 м",
    location: "Старый Оскол, Белгородская обл.",
    area: "216 м²",
    duration: "21 день",
    description:
      "Многоместная автомойка шириной 9 м, длиной 24 м. Металлокаркас из высококачественной стали с антикоррозийным покрытием.",
    image: "/moyka.png",
    size: "9 × 24 м",
    type: "Автомойка",
    frame: "ЛСТК",
    floors: "1",
    fullDescription:
      "Строительство автомойки шириной 9 метров, длиной 24 метров с общей площадью 216 квадратных метров.\n\nНаша компания уже много лет успешно реализует комплекс услуг по созданию самых разнообразных быстровозводимых сооружений, включая высококачественные металлокаркасы для автомоек.\n\nВ соответствии с заданием клиента была спроектирована и изготовлена многоместная мойка размером 9 на 24 метра. Главными критериями были:\n\n• Вместительность — мойка вмещает одновременно несколько автомобилей\n• Доступность — обеспечен удобный подъезд со всех сторон\n• Оперативность — построена в кратчайшие сроки\n\nМеталлокаркас мойки изготовлен из высококачественной стали и обработан специальными антикоррозийными покрытиями, что обеспечивает долгий срок службы и надёжность.",
  },
  {
    title: "Складское помещение",
    location: "г. Белгород",
    area: "1 800 м²",
    duration: "42 дня",
    description:
      "Тёплый склад для хранения товарно-материальных ценностей. Ворота для заезда фуры, естественное освещение.",
    image: "/sklad-pomeshenie.png",
    size: "30 × 60 м",
    type: "Склад",
    frame: "ЛСТК",
    floors: "1",
  },
];

export default function Projects() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
                Реализованные проекты
              </h2>
              <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
                Каждый объект спроектирован и построен с учётом индивидуальных
                требований заказчика.
              </p>
            </div>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors whitespace-nowrap"
            >
              Обсудить проект
              <ArrowRight size={16} weight="bold" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.title}
                onClick={() => setSelected(project)}
                className="group rounded-xl border border-border bg-white md:hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-medium text-white/90">
                      Подробнее →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} weight="bold" className="text-accent-orange" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Ruler size={13} weight="bold" className="text-accent-blue" />
                      {project.area}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} weight="bold" className="text-accent-blue" />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 flex-shrink-0">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                >
                  <X size={18} weight="bold" />
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {selected.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-white/80 mt-1">
                    <MapPin size={12} weight="bold" />
                    {selected.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1 p-5 md:p-6">
                {/* Specs grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                  {[
                    { icon: Ruler, label: "Площадь", value: selected.area },
                    { icon: Stack, label: "Размеры", value: selected.size },
                    { icon: Buildings, label: "Тип здания", value: selected.type },
                    { icon: Calendar, label: "Срок", value: selected.duration },
                    { icon: Rows, label: "Тип каркаса", value: selected.frame },
                    { icon: Stack, label: "Этажность", value: selected.floors ? `${selected.floors} этаж` : undefined },
                  ]
                    .filter((s) => s.value)
                    .map(({ icon: Icon, label, value }) => (
                      <div key={label} className="bg-slate-50 rounded-lg p-3 border border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted mb-1">
                          <Icon size={12} weight="bold" className="text-accent-blue" />
                          {label}
                        </div>
                        <div className="text-sm font-semibold text-foreground">{value}</div>
                      </div>
                    ))}
                </div>

                {/* Description */}
                <div className="text-sm text-muted leading-relaxed whitespace-pre-line">
                  {selected.fullDescription || selected.description}
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <a
                    href="#contacts"
                    onClick={() => setSelected(null)}
                    className="inline-flex h-11 items-center justify-center w-full px-6 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                  >
                    Обсудить похожий проект
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
