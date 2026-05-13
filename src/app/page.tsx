"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavorSelector from "@/components/FlavorSelector";
import { DonutFlavor, flavors } from "@/lib/flavors";

export default function Home() {
  const [currentFlavor, setCurrentFlavor] = useState<DonutFlavor>(flavors[0]);

  return (
    <main
      data-theme={currentFlavor.id}
      className="min-h-screen theme-transition relative overflow-hidden"
      style={{ backgroundColor: currentFlavor.bgColor }}
    >
      <Navbar flavor={currentFlavor} />
      <HeroSection flavor={currentFlavor} />
      <FlavorSelector
        flavors={flavors}
        currentFlavor={currentFlavor}
        onSelectFlavor={setCurrentFlavor}
      />
    </main>
  );
}
