"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LiquidChrome from "@/components/background/LiquidChrome";
import { colorPalettes } from "@/config/colors";
import Header from "./Header";
import Squares from "@/components/ui/CanvasStrokeStyle";

// Tipografías
import { Poppins } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { VT323 } from "next/font/google";
import WhatsAppButton from "@/contact/WhatsAppButton";

// Cargando fuentes con variables CSS
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pressstart",
});

export const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

// Props
interface MainLayoutProps {
  children: ReactNode;
}

// Componente principal
const MainLayout = ({ children }: MainLayoutProps) => {
  const { resolvedTheme } = useTheme();
  const palette =
    colorPalettes[resolvedTheme as "light" | "dark"] || colorPalettes.dark;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div
      className={`${poppins.variable} ${orbitron.variable} ${pressStart.variable} ${vt323.variable} font-sans`}
    >
      <div className={`relative min-h-screen overflow-hidden ${palette.text}`}>
        {isClient && (
          <>
            {/* Fondo líquido animado */}
            {/* <div className="fixed inset-0 -z-10">
              <LiquidChrome
                baseColor={palette.baseColor}
                speed={0.3}
                amplitude={0.49}
                interactive={false}
              />
            </div>
            <div className="fixed inset-0 z-[-1]">
              <Squares
                speed={0.4}
                squareSize={60}
                direction="diagonal"
                borderColor="#fff"
                hoverFillColor="#222"
              />
            </div> */}
          </>
        )}

        {/* Cabecera y botón flotante */}
        <Header />
        <WhatsAppButton />

        {/* Contenido principal */}
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
