"use client";

import PersonalCard from "@/components/background/PersonalCard";
import { About } from "../about/About";

export default function AboutSection() {



  return (
    <section className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="max-w-[1800px] w-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <section className="max-w-[1400px] sm:w-5/6 md:w-4/5 lg:w-3/4">
         <About/>

        </section>

        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 mt-0 flex justify-center lg:justify-end items-center">
          <PersonalCard />
        </div>
      </div>
    </section>
  );
}
