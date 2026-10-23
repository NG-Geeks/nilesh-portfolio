'use client';

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    try {
      return random.inSphere(new Float32Array(2400), { radius: 1.2 });
    } catch {
      return new Float32Array(2400);
    }
  });

  useFrame((state, delta) => {
    if (ref.current && !props.prefersReducedMotion) {
      ref.current.rotation.x -= delta / 18;
      ref.current.rotation.y -= delta / 24;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#14b8a6"
          size={0.0022}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotion = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotion);
    return () => motionQuery.removeEventListener("change", handleMotion);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Stars prefersReducedMotion={prefersReducedMotion} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
