"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Ruler, Calendar } from "@phosphor-icons/react";

const projects = [
  {
    title: "Коровник на 200 голов без привязного содержания",
    location: "Солнцевский р-н, Белгородская обл.",
    area: "1 876 м²",
    duration: "2021 год",
    description:
      "Коровник 32,6×57,6 м с трёхпролётной системой и аэрационным коньком. Проектирование с учётом технологии содержания КРС.",
    image: "/projects/korovnik.jpg",
  },
  {
    title: "Яйцесклад 36×27 м",
    location: "Шебекинский р-н, Белгородская обл.",
    area: "1 056 м²",
    duration: "45 дней",
    description:
      "Складское помещение для хранения яйца с галереей 12×7 м. Возможность адаптации под офисы, ангары, производства.",
    image: "/projects/eggs.jpg",
  },
  {
    title: "Картофелехранилище 18×90 м",
    location: "Белгородская область",
    area: "1 620 м²",
    duration: "38 дней",
    description:
      "Хранилище для картофеля на базе быстровозводимого каркаса ЛСТК. Промышленное сельхозсооружение.",
    image: "/projects/kartofel.jpg",
  },
  {
    title: "Склад холодильник",
    location: "Белгородский р-н",
    area: "2 400 м²",
    duration: "35 дней",
    description:
      "Холодильный склад для хранения продукции с температурным режимом. Обшивка сэндвич-панелями с утеплителем.",
    image: "/projects/sklad holodinik.jpg",
  },
  {
    title: "Автомойка и СТО",
    location: "Белгородская область",
    area: "200 м²",
    duration: "21 день",
    description:
      "Здание автосервиса и автомойки, обшитое PIR-панелями. Посты для мойки и технического обслуживания.",
    image: "/projects/avtomoika.jpg",
  },
  {
    title: "Складское помещение",
    location: "г. Белгород",
    area: "1 800 м²",
    duration: "42 дня",
    description:
      "Тёплый склад для хранения товарно-материальных ценностей. Ворота для заезда фуры, естественное освещение.",
    image: "/projects/sklad.jpg",
  },
];

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
