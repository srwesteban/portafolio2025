"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import Image from "next/image";

export default function PersonalCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
      <BackgroundGradient className="w-full h-full flex flex-col justify-between items-center text-center">
        {/* Nombre y título */}
        <div>
          <h1 className="text-xs sm:text-[clamp(1rem,2vw,1.5rem)] font-bold text-[#A8AEE7] font-poppins leading-tight">
            William D. Esteban Mora
          </h1>
          <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-zinc-400 mb-4">
            Software Engineer
          </p>
        </div>

        {/* Imagen + botón */}
        <div className="relative w-fit mx-auto flex flex-col items-center">
          <Image
            src="/images/avatar/avatarCentrado.png"
            alt="me"
            width={300}
            height={350}
            className="rounded-xl shadow-lg w-[120px] sm:w-[180px] md:w-[260px] h-auto transition-all"
            priority
          />

          {/* Botón contenido y "flotante visualmente" */}
          <button
            className="
    -mt-2 sm:-mt-6
    px-2 sm:px-6 md:px-8
    py-2 sm:py-2.5 md:py-3
    w-[130px] sm:w-[220px] md:w-[260px]
    rounded-xl shadow-md
    flex items-center justify-center gap-2 sm:gap-3
    bg-[#2c365d6c] backdrop-blur-3xl
    text-center z-10
  "
          >
            <p className="text-sm sm:text-base md:text-lg text-green-400">
              Online
            </p>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
