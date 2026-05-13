# Donuts Landing Page

An interactive 3D donut landing page built with **Next.js**, **Three.js** (via React Three Fiber), and **Tailwind CSS**.

## Features

- Interactive 3D donut rendered with Three.js
- Three flavor themes (Blueberry, Lemon, Matcha) with smooth transitions
- Floating animations and particle effects
- Responsive design
- TypeScript for type safety

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page with flavor state
│   └── globals.css     # Global styles & theme vars
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── HeroSection.tsx # Hero with 3D donut & text
│   ├── DonutScene.tsx  # Three.js 3D donut scene
│   └── FlavorSelector.tsx # Flavor picker sidebar
└── lib/
    └── flavors.ts      # Flavor data & types
```

## Flavor Themes

Click the donut icons on the right side to switch between:
- **Blueberry Bliss** - Cool blue tones
- **Lemon Zest** - Warm yellow tones
- **Matcha Dream** - Fresh green tones
