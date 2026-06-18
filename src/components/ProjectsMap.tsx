"use client";

import { useEffect, useRef, useState } from "react";
import { X, MapPin, Ruler, Calendar, Buildings } from "@phosphor-icons/react";
import Image from "next/image";

const YANDEX_API_KEY = "70a24b9b-d8f0-4dd8-81a8-6e12481c7eff";

interface MapProject {
  id: number;
  title: string;
  location: string;
  area: string;
  size: string;
  duration: string;
  type: string;
  description: string;
  image: string;
  coords: [number, number];
}

const mapProjects: MapProject[] = [
  {
    id: 1,
    title: "Коровник на 200 голов",
    location: "Солнцевский р-н, Белгородская обл.",
    area: "1 876 м²",
    size: "32,6 × 57,6 м",
    duration: "2021 год",
    type: "Коровник",
    description: "Коровник 32,6×57,6 м с трёхпролётной системой и аэрационным коньком.",
    image: "/korovnik.png",
    coords: [51.0193, 36.7269],
  },
  {
    id: 2,
    title: "Яйцесклад 36×27 м",
    location: "Шебекинский р-н, Белгородская обл.",
    area: "1 056 м²",
    size: "36 × 27 м",
    duration: "45 дней",
    type: "Склад",
    description: "Складское помещение для хранения яйца с галереей 12×7 м.",
    image: "/projects/eggs.jpg",
    coords: [50.4061, 36.9003],
  },
  {
    id: 3,
    title: "Картофелехранилище 18×90 м",
    location: "Белгородская область",
    area: "1 620 м²",
    size: "18 × 90 м",
    duration: "38 дней",
    type: "Сельхозхранилище",
    description: "Хранилище для картофеля на базе быстровозводимого каркаса ЛСТК.",
    image: "/kartofel.png",
    coords: [50.7481, 36.1833],
  },
  {
    id: 4,
    title: "Склад-холодильник 40×60 м",
    location: "Белгородский р-н",
    area: "2 400 м²",
    size: "40 × 60 м",
    duration: "35 дней",
    type: "Холодильный склад",
    description: "Холодильный склад с температурным режимом, обшивка сэндвич-панелями.",
    image: "/projects/sklad holodinik.jpg",
    coords: [50.6707, 36.4812],
  },
  {
    id: 5,
    title: "Автомойка 9×24 м",
    location: "Старый Оскол, Белгородская обл.",
    area: "216 м²",
    size: "9 × 24 м",
    duration: "21 день",
    type: "Автомойка",
    description: "Многоместная автомойка. Металлокаркас с антикоррозийным покрытием.",
    image: "/moyka.png",
    coords: [51.2963, 37.8422],
  },
  {
    id: 6,
    title: "Складское помещение 30×60 м",
    location: "г. Белгород",
    area: "1 800 м²",
    size: "30 × 60 м",
    duration: "42 дня",
    type: "Склад",
    description: "Тёплый склад для хранения товарно-материальных ценностей.",
    image: "/sklad-pomeshenie.png",
    coords: [50.5957, 36.5872],
  },
];

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function ProjectsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<MapProject | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load map when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || loaded) return;
    
    const existingScript = document.getElementById("ymaps-script");
    if (existingScript) {
      existingScript.addEventListener("load", initMap);
      return;
    }

    const script = document.createElement("script");
    script.id = "ymaps-script";
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`;
    script.async = true;
    script.defer = true; // Defer for better performance
    script.onload = initMap;
    document.head.appendChild(script);
    setLoaded(true);

    return () => {
      script.removeEventListener("load", initMap);
    };
  }, [isVisible, loaded]);

  function initMap() {
    window.ymaps.ready(() => {
      if (!mapRef.current) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center: [50.8, 37.0],
        zoom: 8,
        controls: ["zoomControl"],
      });

      map.behaviors.disable("scrollZoom");

      mapProjects.forEach((project) => {
        const placemark = new window.ymaps.Placemark(
          project.coords,
          {},
          {
            preset: "islands#blueCircleDotIcon",
            iconColor: "#1d4ed8",
          }
        );

        placemark.events.add("click", () => {
          setSelected(project);
        });

        map.geoObjects.add(placemark);
      });
    });
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            География проектов
          </h2>
          <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
            Нажмите на маркер, чтобы узнать подробнее о проекте.
          </p>
        </div>

        <div
          ref={mapRef}
          className="w-full rounded-2xl overflow-hidden border border-border bg-slate-100"
          style={{ height: "500px" }}
        >
          {!isVisible && (
            <div className="w-full h-full flex items-center justify-center text-muted">
              Загрузка карты...
            </div>
          )}
        </div>
      </div>

      {/* Попап проекта */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative h-52 flex-shrink-0">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-cover"
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

            <div className="overflow-y-auto flex-1 p-5">
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: Ruler, label: "Площадь", value: selected.area },
                  { icon: Ruler, label: "Размеры", value: selected.size },
                  { icon: Buildings, label: "Тип", value: selected.type },
                  { icon: Calendar, label: "Срок", value: selected.duration },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-slate-50 rounded-lg p-3 border border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted mb-1">
                      <Icon size={12} weight="bold" className="text-accent-blue" />
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed">{selected.description}</p>

              <div className="mt-5 pt-4 border-t border-border">
                <a
                  href="#contacts"
                  onClick={() => setSelected(null)}
                  className="inline-flex h-11 items-center justify-center w-full text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Обсудить похожий проект
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
