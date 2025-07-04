"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

type SplitResult = {
  chars: HTMLElement[];
  revert: () => void;
};

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    let split: SplitResult;

    Promise.all([
      import("gsap/SplitText"),
      import("gsap/ScrambleTextPlugin"),
    ]).then(([{ SplitText }, { ScrambleTextPlugin }]) => {
      gsap.registerPlugin(SplitText, ScrambleTextPlugin);

      const target = rootRef.current!.firstElementChild as HTMLElement;
      if (!target) return;

      split = SplitText.create(target, {
        type: "words,chars",
        wordsClass: "inline-block whitespace-nowrap",
        charsClass: "inline-block will-change-transform",
      }) as unknown as SplitResult;

      split.chars.forEach((c: HTMLElement) => {
        gsap.set(c, { attr: { "data-content": c.innerHTML } });
      });

      const handleMove = (e: PointerEvent) => {
        split.chars.forEach((c: HTMLElement) => {
          const { left, top, width, height } = c.getBoundingClientRect();
          const dx = e.clientX - (left + width / 2);
          const dy = e.clientY - (top + height / 2);
          const dist = Math.hypot(dx, dy);

          if (dist < radius) {
            gsap.to(c, {
              overwrite: true,
              duration: duration * (1 - dist / radius),
              scrambleText: {
                text: c.dataset.content || "",
                chars: scrambleChars,
                speed,
              },
              ease: "none",
            });
          }
        });
      };

      const el = rootRef.current!;
      el.addEventListener("pointermove", handleMove);

      return () => {
        el.removeEventListener("pointermove", handleMove);
        split?.revert?.();
      };
    });
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`relative ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ScrambledText;
