"use client";

import { DonutFlavor } from "@/lib/flavors";

interface FlavorSelectorProps {
  flavors: DonutFlavor[];
  currentFlavor: DonutFlavor;
  onSelectFlavor: (flavor: DonutFlavor) => void;
}

export default function FlavorSelector({
  flavors,
  currentFlavor,
  onSelectFlavor,
}: FlavorSelectorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {flavors.map((flavor) => (
        <button
          key={flavor.id}
          onClick={() => onSelectFlavor(flavor)}
          className={`group relative w-14 h-14 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
            currentFlavor.id === flavor.id
              ? "scale-110 shadow-lg"
              : "opacity-70 hover:opacity-100"
          }`}
          style={{
            borderColor:
              currentFlavor.id === flavor.id
                ? currentFlavor.textColor
                : "rgba(255,255,255,0.5)",
          }}
          aria-label={`Select ${flavor.name} flavor`}
          title={flavor.name}
        >
          {/* Mini donut icon */}
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{ backgroundColor: flavor.baseColor }}
            >
              <div
                className="w-[70%] h-[70%] rounded-full"
                style={{ backgroundColor: flavor.icingColor }}
              >
                <div
                  className="w-[40%] h-[40%] rounded-full mx-auto mt-[30%]"
                  style={{ backgroundColor: flavor.bgColor }}
                />
              </div>
            </div>
          </div>

          {/* Active indicator */}
          {currentFlavor.id === flavor.id && (
            <div
              className="absolute -inset-1 rounded-full border-2 animate-pulse"
              style={{ borderColor: currentFlavor.textColor }}
            />
          )}

          {/* Tooltip */}
          <span
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundColor: flavor.textColor,
              color: flavor.bgColor,
            }}
          >
            {flavor.name}
          </span>
        </button>
      ))}
    </div>
  );
}
