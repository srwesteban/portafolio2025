"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateX = -(py - 1) * 10;
    const rotateY = (px - 1) * 10;

    card.style.setProperty("--rotate-x", `${rotateY}deg`);
    card.style.setProperty("--rotate-y", `${rotateX}deg`);
  };

  const handlePointerLeave = () => {
    if (window.innerWidth < 1024) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", `0deg`);
    card.style.setProperty("--rotate-y", `0deg`);
  };

  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative w-full p-[2px] rounded-3xl block", // ⬅️ fix aquí
        containerClassName
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: `rotateX(var(--rotate-y, 0deg)) rotateY(var(--rotate-x, 0deg))`,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.2s ease-out",
        background: "linear-gradient(135deg, #334155, #0f172a)",
        boxShadow:
          "0 0 20px rgba(124, 58, 237, 0.2), 0 0 30px rgba(59, 130, 246, 0.2)",
      }}
    >
      {/* Blur animado - capa inferior */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-[26px] z-[1] opacity-60 blur-2xl pointer-events-none",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#38bdf8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#a78bfa,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_0_0,#22d3ee,#0f172a)]"
        )}
      />

      {/* Blur animado - capa superior */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-[26px] z-[1] pointer-events-none",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#38bdf8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#a78bfa,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_0_0,#22d3ee,#0f172a)]"
        )}
      />

      {/* contenido real */}
      <div
        className={cn(
          "relative z-10 rounded-[26px] bg-[#0f172a]/80 backdrop-blur-md",
          "flex flex-col justify-between items-center",
          "p-4 sm:p-6 md:p-8 lg:p-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
