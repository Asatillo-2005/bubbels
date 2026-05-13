"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { DonutFlavor } from "@/lib/flavors";

interface DonutSceneProps {
  flavor: DonutFlavor;
}

export default function DonutScene({ flavor }: DonutSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-3, -3, 2]} intensity={0.3} />
      <pointLight position={[0, 3, 3]} intensity={0.5} />

      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <Donut flavor={flavor} />
      </Float>

      <Sprinkles flavor={flavor} />

      <Environment preset="studio" />
    </Canvas>
  );
}

function Donut({ flavor }: { flavor: DonutFlavor }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1 - 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const icingColor = useMemo(() => new THREE.Color(flavor.icingColor), [flavor.icingColor]);
  const baseColor = useMemo(() => new THREE.Color(flavor.baseColor), [flavor.baseColor]);

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Donut base (torus) */}
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1, 0.45, 32, 64]} />
        <meshStandardMaterial
          color={baseColor}
          roughness={0.6}
          metalness={0.05}
        />
      </mesh>

      {/* Icing layer (slightly larger torus on top) */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <torusGeometry args={[1, 0.47, 32, 64, Math.PI * 2]} />
        <meshStandardMaterial
          color={icingColor}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.95}
        />
        {/* We clip the bottom half using a clipping plane to only show icing on top */}
      </mesh>

      {/* Icing drip effect - small spheres around the edges */}
      <IcingDrips color={icingColor} />

      {/* Sprinkles on top */}
      <DonutSprinkles colors={flavor.sprinkleColors} />
    </group>
  );
}

function IcingDrips({ color }: { color: THREE.Color }) {
  const drips = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const r = 1 + Math.random() * 0.1;
      positions.push([
        Math.cos(angle) * r,
        -0.2 - Math.random() * 0.15,
        Math.sin(angle) * r,
      ]);
    }
    return positions;
  }, []);

  return (
    <>
      {drips.map((pos, i) => (
        <mesh key={i} position={pos} scale={[0.08, 0.15, 0.08]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </mesh>
      ))}
    </>
  );
}

function DonutSprinkles({ colors }: { colors: string[] }) {
  const sprinkles = useMemo(() => {
    const items: { position: [number, number, number]; rotation: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const tubeAngle = (Math.random() - 0.5) * Math.PI * 0.6;
      const r = 1 + 0.45 * Math.cos(tubeAngle);
      const y = 0.45 * Math.sin(tubeAngle);

      if (y < 0) continue; // Only top half

      items.push({
        position: [
          Math.cos(angle) * r,
          y + 0.05,
          Math.sin(angle) * r,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, [colors]);

  return (
    <>
      {sprinkles.map((sprinkle, i) => (
        <mesh
          key={i}
          position={sprinkle.position}
          rotation={sprinkle.rotation}
          scale={[0.02, 0.08, 0.02]}
        >
          <capsuleGeometry args={[1, 2, 4, 8]} />
          <meshStandardMaterial
            color={new THREE.Color(sprinkle.color)}
            roughness={0.4}
          />
        </mesh>
      ))}
    </>
  );
}

function Sprinkles({ flavor }: { flavor: DonutFlavor }) {
  const particles = useMemo(() => {
    const items: { position: [number, number, number]; scale: number; color: string }[] = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4 - 2,
        ],
        scale: 0.02 + Math.random() * 0.04,
        color: flavor.sprinkleColors[Math.floor(Math.random() * flavor.sprinkleColors.length)],
      });
    }
    return items;
  }, [flavor.sprinkleColors]);

  return (
    <>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color={new THREE.Color(particle.color)}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}
