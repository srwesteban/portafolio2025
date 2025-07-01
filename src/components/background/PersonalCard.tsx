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
            className="rounded-xl shadow-lg w-[140px] sm:w-[180px] md:w-[260px] h-auto transition-all"
            priority
          />

          {/* Botón contenido y "flotante visualmente" */}
          <button
            className="
              -mt-6
              bg-[#2c365d6c] backdrop-blur-3xl
              px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.5rem,1.2vw,0.9rem)]
              rounded-xl shadow-md
              flex items-center justify-center gap-[clamp(0.25rem,1vw,0.75rem)]
              w-[clamp(160px,50vw,260px)]
              text-center
              z-10
            "
          >
            <p className="text-[clamp(0.75rem,1vw,1.125rem)] text-green-400">
              Online
            </p>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
