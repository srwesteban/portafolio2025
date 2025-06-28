export const colorPalettes = {
  dark: {
    baseColor: [0, 0, 0] as [number, number, number],
    text: "text-gray-100",
    bg: "bg-neutral-900",
    hoverBg: "bg-neutral-800",
    hoverText: "text-white",
    border: "border-gray-700",
    accent: "text-cyan-400",
  },
  light: {
    baseColor: [1, 1, 1] as [number, number, number],
    text: "text-gray-500",
    bg: "bg-neutral-50",
    hoverBg: "bg-gray-200",
    hoverText: "text-black",
    border: "border-gray-300",
    accent: "text-blue-600",
  },
  blue: {
    baseColor: [0.0, 0.0, 0.3] as [number, number, number],
    text: "text-blue-50",
    bg: "bg-blue-900",
    hoverText: "text-white",
    border: "border-blue-800",
    accent: "text-cyan-300",
  },
  red: {
    baseColor: [0.3, 0, 0] as [number, number, number],
    text: "text-red-50",
    bg: "bg-red-900",
    hoverBg: "bg-red-800",
    hoverText: "text-white",
    border: "border-red-800",
    accent: "text-yellow-200",
  },
  extend: {
    animation: {
      "spin-slow": "spin 6s linear infinite",
    },
  },
};

export const textGradients: Record<"light" | "dark" | "red" | "blue", string> = {
  light: "from-sky-600 via-purple-600 to-rose-600",
  dark: "from-[#00F5A0] via-[#00D9F5] to-[#00F5A0]",
  red: "from-red-400 via-yellow-400 to-orange-400",
  blue: "from-cyan-400 via-sky-400 to-indigo-400",
};
