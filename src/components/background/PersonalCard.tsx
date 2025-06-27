"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import Image from "next/image";

export default function PersonalCard() {
  return (
    <div className="flex justify-center items-center min-h-[40vh] sm:min-h-screen p-2 sm:p-4">
      <BackgroundGradient className="max-w-sm w-full text-center">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A8AEE7] font-poppins">
          William D. Esteban Mora
        </h1>
        <p className="text-sm text-zinc-400 mb-10">Software Engineer</p>

        {/* Imagen principal */}
        <div className="relative w-fit mx-auto mb-8">
          <Image
            src="/images/avatar/avatarCentrado.png"
            alt="me"
            width={350}
            height={350}
            className="rounded-xl shadow-lg w-[250px] sm:w-[300px] md:w-[350px] h-auto"
            priority
          />

          {/* Tarjeta flotante */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#2c365d6c] backdrop-blur-3xl p-3 rounded-xl flex items-center justify-between gap-3 w-[250px] sm:w-[300px] md:w-[350px] text-left shadow-md z-10">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/logowe.png"
                alt="mini"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[10px] text-green-400">Online</p>
              </div>
            </div>
            <button className="text-xs bg-transparent px-3 py-1 rounded-full text-white hover:bg-white/20 transition">
              Contact Me
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
