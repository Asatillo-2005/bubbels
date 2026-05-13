"use client";

import dynamic from "next/dynamic";
import { DonutFlavor } from "@/lib/flavors";

const DonutScene = dynamic(() => import("./DonutScene"), { ssr: false });

interface HeroSectionProps {
  flavor: DonutFlavor;
}

export default function HeroSection({ flavor }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 3D Donut */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] pointer-events-auto">
          <DonutScene flavor={flavor} />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-md">
          <h1
            className="font-script text-6xl md:text-7xl lg:text-8xl mb-6 text-shadow theme-transition"
            style={{ color: flavor.textColor }}
          >
            Donuts
          </h1>
          <p
            className="text-sm md:text-base leading-relaxed opacity-90 theme-transition"
            style={{ color: flavor.textColor }}
          >
            {flavor.description}
          </p>
        </div>
      </div>

      {/* Decorative floating elements */}
      <FloatingDecorations flavor={flavor} />
    </section>
  );
}

function FloatingDecorations({ flavor }: { flavor: DonutFlavor }) {
  return (
    <>
      {/* Top-left decoration */}
      <div className="absolute top-20 left-10 opacity-40">
        <div
          className="w-16 h-16 rounded-full blur-sm"
          style={{ backgroundColor: flavor.icingColor }}
        />
      </div>

      {/* Bottom-right decoration */}
      <div className="absolute bottom-20 right-20 opacity-30">
        <div
          className="w-24 h-24 rounded-full blur-md"
          style={{ backgroundColor: flavor.icingColor }}
        />
      </div>

      {/* Scattered small dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full opacity-50 animate-pulse"
          style={{
            backgroundColor: flavor.sprinkleColors[i % flavor.sprinkleColors.length],
            top: `${20 + Math.sin(i * 1.5) * 30}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </>
  );
}
