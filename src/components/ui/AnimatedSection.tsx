"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  once?: boolean; // permite que el usuario decida si la animación es una vez o cada vez
};

export default function AnimatedSection({ children, once = false }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="snap-start h-screen w-full flex justify-center items-center"
    >
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key="section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex justify-center items-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
