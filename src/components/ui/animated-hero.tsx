"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 pt-24 lg:pt-28 pb-0 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-accent-blue">Здания из металлоконструкций</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/#contacts">
              <Button className="gap-4 text-accent-blue border-orange-500 hover:bg-orange-500/10" variant="outline">
                Заказать звонок <Phone size={20} />
              </Button>
            </Link>
            <Link href="/catalog">
              <Button className="gap-4 text-accent-blue border-orange-500 hover:bg-orange-500/10" variant="outline">
                Каталог проектов <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          <HeroPhoto />
        </div>
      </div>
    </div>
  );
}

export { Hero };
