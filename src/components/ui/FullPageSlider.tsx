"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FullPageSliderProps = {
  sections: React.ReactNode[];
};

export default function FullPageSlider({ sections }: FullPageSliderProps) {
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrolling) return;

      setScrolling(true);

      if (e.deltaY > 0) {
        setIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => setScrolling(false), 1000); // evita scroll rápido
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrolling, sections.length]);

  return (
    <div className="w-screen h-screen overflow-hidden relative pt-[28px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {sections[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
