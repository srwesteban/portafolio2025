"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import BlurText from "@/components/ui/BlurText";
import { colorPalettes } from "@/config/colors";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import dynamic from "next/dynamic";

export const About = ({
  theme,
}: {
  theme: "light" | "dark" | "blue" | "red";
}) => {
  const { t } = useTranslation("common");
  const palette = colorPalettes[theme] || colorPalettes.dark;

  const ScrambledText = dynamic(() => import("@/components/ui/ScrambledText"), {
    ssr: false,
  });
  return (
    <section className="w-full flex items-center justify-center ">
      <BackgroundGradient className="w-full max-w-screen-xl rounded-xl p-2">
        <div
          className={`
            w-full rounded-xl border
            px-3 sm:px-8 md:px-12 lg:px-20 py-2 sm:py-10 md:py-14
            backdrop-blur-md shadow-lg transition-all duration-300
            ${palette.bg} ${palette.border} ${palette.text}
          `}
        >
          {/* Título y GIF lado a lado */}
          <div className=" flex flex-wrap items-start justify-between gap-2 mb-2 sm:gap-8 md:mb-6">
            <div className="flex-1 min-w-[220px]">
              <BlurText
                text={t("about.heading")}
                delay={150}
                animateBy="words"
                direction="top"
                className="font-orbitron text-3xl mt-2 sm:text-5xl sm:mt-6 lg:text-6xl font-bold text-left text-[#00FFB2]"
              />
            </div>

            <div className="w-12 sm:w-22 md:w-24 lg:w-28 shrink-0">
              <iframe
                src="https://tenor.com/embed/18245534548411146696"
                title="Kitty Inu Cat Pixel GIF"
                className="w-full aspect-square rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          {/* Párrafo descriptivo */}
          <ScrambledText
            radius={80}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            <p className="font-retro text-justify text-xl sm:text-2xl md:text-4xl w-full leading-relaxed text-inherit md:mt-12">
              {t("about.paragraph")}
            </p>
          </ScrambledText>
        </div>
      </BackgroundGradient>
    </section>
  );
};
