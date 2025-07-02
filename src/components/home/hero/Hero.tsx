"use client";

import { About } from "../about/About";
import PersonalCard from "./PersonalCard";

export default function Hero() {
  return (
      <section className="w-full sm:h-screen flex justify-center items-center px-2 pt-12 sm:pt-0">
      <div className="w-full max-w-[1800px] h-full flex flex-col-reverse lg:flex-row  gap-0 sm:gap-6">
        {/* About - 80% de ancho en desktop */}
        <div className="w-full lg:w-[80%] ">
          <About />
        </div>
        {/* PersonalCard - 20% de ancho en desktop */}
        <div className="flex items-center px-24 sm:p-0 justify-center w-full lg:w-[20%] lg:h-full ">
          <PersonalCard />
        </div>
      </div>
    </section>
  );
}
