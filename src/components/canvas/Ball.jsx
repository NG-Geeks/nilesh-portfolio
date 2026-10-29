'use client';

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import Image from "next/image";

const BallMesh = ({ imgUrl, prefersReducedMotion }) => {
  // Extract URL string if imgUrl is a Next.js imported static image object
  const textureUrl = typeof imgUrl === "string" ? imgUrl : imgUrl?.src || "";
  const [decal] = useTexture([textureUrl]);

  return (
    <Float
      speed={prefersReducedMotion ? 0 : 2.2}
      rotationIntensity={prefersReducedMotion ? 0 : 1.4}
      floatIntensity={prefersReducedMotion ? 0 : 1.8}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.1]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1e293b"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.3}
          metalness={0.2}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name = "Technology" }) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
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

  const iconSrc = typeof icon === "string" ? icon : icon?.src || "";

  // Graceful 2D fallback when WebGL is unavailable or unmounted
  if (!mounted || !hasWebGL) {
    return (
      <div
        className="w-full h-full rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center p-4 shadow-sm"
        title={name}
      >
        {iconSrc && (
          <div className="relative w-12 h-12">
            <Image
              src={icon}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing" title={`${name} • Drag to Orbit`}>
      <Canvas
        frameloop={prefersReducedMotion ? "demand" : "always"}
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={!prefersReducedMotion}
            autoRotateSpeed={2}
          />
          <BallMesh imgUrl={icon} prefersReducedMotion={prefersReducedMotion} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
