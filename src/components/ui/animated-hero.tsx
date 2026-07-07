"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import HeroPhoto from "@/components/HeroPhoto";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["ангары", "склады", "цехи", "коровники", "автомойки", "СТО", "птичники", "свинарники", "конюшни", "овощехранилища", "зернохранилища", "теплицы", "выставочные залы", "спортзалы", "торговые павильоны", "офисы", "бытовки", "гаражи", "депо"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: "#F0F0F0" }}>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 pt-24 lg:pt-28 pb-0 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-2xl md:max-w-3xl tracking-tighter text-center font-regular px-2">
              <span className="text-accent-blue">Здания из металлоконструкций</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1" style={{ height: "1.2em" }}>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-orange-500"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/#contacts" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all">
                <Phone size={18} weight="bold" /> Заказать звонок
              </button>
            </Link>
            <Link href="/configurator" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold text-sm transition-all">
                3D Конфигуратор <ArrowRight size={18} weight="bold" />
              </button>
            </Link>
            <Link href="/catalog" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-white hover:bg-slate-50 text-foreground font-semibold text-sm transition-all">
                Каталог проектов <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <HeroPhoto />
        </div>
      </div>
    </div>
  );
}

export { Hero };
