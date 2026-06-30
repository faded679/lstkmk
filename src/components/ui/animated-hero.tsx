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
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 pt-24 lg:pt-28 pb-4 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-2xl md:max-w-3xl tracking-tighter text-center font-regular px-2">
              <span className="text-accent-blue">Здания из металлоконструкций</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-orange-500"
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
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/#contacts" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-4 text-black border-black hover:bg-black/10" variant="outline">
                Заказать звонок <Phone size={20} />
              </Button>
            </Link>
            <Link href="/catalog" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-4 text-black border-black hover:bg-black/10" variant="outline">
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
