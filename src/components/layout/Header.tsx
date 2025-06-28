"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import ThemeSwitch from "../ui/ThemeSwitch";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import RotatingText from "../ui/RotatingText";
import { useTheme } from "next-themes";
import { colorPalettes } from "@/config/colors";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname() || "/";
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { resolvedTheme } = useTheme();
  const palette =
    colorPalettes[resolvedTheme as keyof typeof colorPalettes] || colorPalettes.dark;

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-20 w-full px-4 py-3 backdrop-blur-md border-b bg-transparent">
      <nav className="mx-auto max-w-[1800px] flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logos/logowe.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-[50px] h-auto"
            priority
          />
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold rounded px-2 py-1 bg-[#5234FF] text-white"
          >
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-60%", opacity: 0 }}
            >
              <RotatingText
                texts={t("rotatingText", { returnObjects: true }) as string[]}
                staggerFrom="last"
                staggerDuration={0.03}
                rotationInterval={2500}
                className="text-sm sm:font-orbitron md:text-sm"
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4 text-sm font-medium relative">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.path);
              const isHovered = hovered === item.path;

              return (
                <li
                  key={item.path}
                  onMouseEnter={() => setHovered(item.path)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative"
                >
                  {isHovered && (
                    <motion.div
                      layoutId="hoverBackground"
                      className="absolute inset-0 rounded-md bg-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <Link
                    href={item.path}
                    className={`relative px-4 py-2 z-10 transition duration-200 hover:text-white ${
                      isActive ? "font-semibold underline" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded transition hover:scale-105"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden mt-3 px-4 py-4 rounded-lg shadow-xl bg-slate-600 text-white`}
          >
            <ul className="flex flex-col gap-3 mb-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 rounded transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center gap-4 px-2">
              <ThemeSwitch />
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
