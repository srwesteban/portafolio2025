"use client";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const locales = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const currentLocale = i18n.language;
  const nextLocale =
    currentLocale === "es"
      ? locales.find((l) => l.code === "en")
      : locales.find((l) => l.code === "es");

  const handleToggle = () => {
    router.push(router.pathname, router.asPath, { locale: nextLocale?.code });
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        flex items-center gap-2 px-4 py-2 border rounded transition
        bg-white text-black hover:bg-gray-200
        dark:bg-neutral-800 dark:text-white dark:hover:bg-gray-700
      `}
      aria-label="Switch language"
    >
      <span>{nextLocale?.flag}</span>
      <span>{nextLocale?.label}</span>
    </button>
  );
};

export default LanguageSwitcher;
