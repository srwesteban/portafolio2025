"use client";

import PersonalCard from "@/components/background/PersonalCard";
import { About } from "../about/About";

export default function Hero() {
  return (
    <section className="w-full sm:h-screen flex justify-center items-center p-4 sm:pt-0">
      <div className="w-full max-w-[1800px] h-full flex flex-col-reverse lg:flex-row  gap-0 sm:gap-6">
        {/* About primero en desktop */}
        <div className="w-full lg:w-[80%] h-[80%] lg:h-full">
          <About />
        </div>
        {/* PersonalCard arriba en móvil */}
        <div className="w-full lg:w-[20%] h-[20%] lg:h-full">
          <PersonalCard />
        </div>
      </div>
    </section>
  );
}
