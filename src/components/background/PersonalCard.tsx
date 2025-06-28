"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import Image from "next/image";

export default function PersonalCard() {
  return (
    <div className="flex justify-center items-center min-h-[30vh] sm:min-h-screen p-0 sm:p-4">
      <BackgroundGradient className="max-w-sm w-full text-center">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A8AEE7] font-poppins">
          William D. Esteban Mora
        </h1>
        <p className="text-sm text-zinc-400 mb-4 sm:mb-10">Software Engineer</p>

        {/* Imagen principal */}
        <div className="relative w-fit mx-auto mb-8">
          <Image
            src="/images/avatar/avatarCentrado.png"
            alt="me"
            width={350}
            height={350}
            className="rounded-xl shadow-lg w-[200px] sm:w-[180px] md:w-[350px] h-auto"
            priority
          />

          {/* Tarjeta flotante */}
          <button className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#2c365d6c] backdrop-blur-3xl p-3 rounded-xl flex items-center justify-center gap-3 w-[220px] sm:w-[300px] md:w-[350px] text-left shadow-md z-10">
            <p className="text-[15px] sm:text-[20px] text-green-400">Online</p>

          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
