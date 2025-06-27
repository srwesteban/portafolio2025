"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { useEffect, useState, useRef } from "react";

const themes = ["light", "dark", "red", "blue"] as const;

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");

  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="w-40 px-4 py-2 border rounded bg-white text-black dark:bg-neutral-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
        onClick={() => setOpen(!open)}
      >
        {t("theme.label")}
      </button>

      {open && (
        <div
          className={`
            absolute top-full left-0 mt-3.5 w-40 border rounded shadow z-30 transition
            bg-white text-black dark:bg-neutral-800 dark:text-white
          `}
        >
          {themes.map((themeKey) => (
            <button
              key={themeKey}
              onClick={() => {
                setTheme(themeKey);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            >
              {t(`theme.options.${themeKey}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
