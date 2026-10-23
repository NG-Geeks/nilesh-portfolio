'use client';

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import CanvasFallback from "./CanvasFallback";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={2.6}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotion = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotion);

    return () => motionQuery.removeEventListener("change", handleMotion);
  }, []);

  if (!mounted) {
    return <CanvasFallback title="Interactive 3D Planetary Node" />;
  }

  if (!hasWebGL) {
    return <CanvasFallback title="3D Globe Visualizer (WebGL Unavailable)" />;
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows
        frameloop={prefersReducedMotion ? "demand" : "always"}
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={!prefersReducedMotion}
            autoRotateSpeed={1.2}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
