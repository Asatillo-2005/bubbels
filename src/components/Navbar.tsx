"use client";

import { DonutFlavor } from "@/lib/flavors";

interface NavbarProps {
  flavor: DonutFlavor;
}

export default function Navbar({ flavor }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: flavor.textColor }}
          />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About", "Shop", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity theme-transition"
                style={{ color: flavor.navColor }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          style={{ color: flavor.textColor }}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
