"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import BlurText from "@/components/ui/BlurText";
import { colorPalettes } from "@/config/colors";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { GithubButton } from "@/components/ui/GithubButton";

export const About = () => {
  const { t } = useTranslation("common");
  const { resolvedTheme } = useTheme();

  // Asegura que el tema sea uno válido
  const theme = ["light", "dark", "blue", "red"].includes(resolvedTheme || "")
    ? (resolvedTheme as "light" | "dark" | "blue" | "red")
    : "dark";

  const palette = colorPalettes[theme] || colorPalettes.dark;

  const ScrambledText = dynamic(() => import("@/components/ui/ScrambledText"), {
    ssr: false,
  });

  return (
    <section className="w-full h-full flex items-center justify-center">
      <BackgroundGradient>
        <div
          className={`
        w-full h-[400px] sm:h-[500px] flex flex-col justify-between rounded-xl border
        px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10
        backdrop-blur-md shadow-lg transition-all duration-300
        ${palette.bg} ${palette.border} ${palette.text}
      `}
        >
          {/* Encabezado */}
          <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-8">
            <div className="flex-1 min-w-[220px]">
              <BlurText
                text={t("about.heading")}
                delay={150}
                animateBy="words"
                direction="top"
                className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-bold text-left text-[#00FFB2]"
              />
            </div>
            <div className="w-12 sm:w-22 md:w-24 lg:w-28 shrink-0">
              <iframe
                src="https://tenor.com/embed/18245534548411146696"
                title="Kitty Inu Cat Pixel GIF"
                className="pointer-events-none w-full aspect-square rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          {/* Párrafo */}
          <div className="flex-1 overflow-hidden mt-4 sm:mt-8">
            <ScrambledText
              radius={80}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              <p className="font-retro text-justify text-xl sm:text-xl md:text-2xl leading-relaxed text-inherit">
                {t("about.paragraph")}
              </p>
            </ScrambledText>
          </div>

          {/* GitHub Button al final */}
          <div className=" sm:mt-4  text-xs sm:text-xl">
            <GithubButton
              url="https://github.com/williamesteban"
              label="GitHub"
            />
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};
