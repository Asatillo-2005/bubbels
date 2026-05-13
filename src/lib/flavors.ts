export interface DonutFlavor {
  id: string;
  name: string;
  bgColor: string;
  bgGradient: string;
  textColor: string;
  navColor: string;
  icingColor: string;
  sprinkleColors: string[];
  baseColor: string;
  description: string;
}

export const flavors: DonutFlavor[] = [
  {
    id: "blueberry",
    name: "Blueberry Bliss",
    bgColor: "#5BA3E0",
    bgGradient: "from-sky-400 to-blue-500",
    textColor: "#ffffff",
    navColor: "rgba(255,255,255,0.8)",
    icingColor: "#87CEEB",
    sprinkleColors: ["#FF6B9D", "#FFD93D", "#6BCB77", "#4D96FF"],
    baseColor: "#D4873F",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: "lemon",
    name: "Lemon Zest",
    bgColor: "#E8C840",
    bgGradient: "from-yellow-300 to-amber-400",
    textColor: "#4A3600",
    navColor: "rgba(74,54,0,0.8)",
    icingColor: "#FFF176",
    sprinkleColors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
    baseColor: "#D4873F",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: "matcha",
    name: "Matcha Dream",
    bgColor: "#3D8B40",
    bgGradient: "from-green-500 to-green-700",
    textColor: "#ffffff",
    navColor: "rgba(255,255,255,0.8)",
    icingColor: "#81C784",
    sprinkleColors: ["#FFD93D", "#FF6B9D", "#ffffff", "#87CEEB"],
    baseColor: "#8B4513",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];
