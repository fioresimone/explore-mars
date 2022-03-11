import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Loader,
  Cone,
  useProgress,
  Html,
  Plane,
  Sphere,
  Torus,
} from "@react-three/drei";
import { TextureLoader, CubeTextureLoader } from "three";
import { Stats } from "@react-three/drei/core/Stats";

import MoonColor from "./marsColor.jpg";
import MoonNormal from "./marsNormal10.jpg";
import MoonBump from "./marsBump10.jpg";
/* import Opacity from "./../../Assets/opacity.png"; */
import Opacity from "./../../Assets/elevation.png";
import Overlay from "../Loader/Overlay";

export default function Mars() {
  function Moon() {
    const [color, normal, bump, opacity] = useLoader(TextureLoader, [
      MoonColor,
      MoonNormal,
      MoonBump,
      Opacity,
    ]);

    /* const point = useRef();
    useFrame((state, delta) => {
      const elapsed = state.clock.elapsedTime;

      point.current.position.x = Math.cos(elapsed) * 24;
      point.current.position.z = Math.sin(elapsed) * 24;
      point.current.position.y = Math.sin(elapsed) * 4;
    }); */

    /* const ref = useRef();
    useFrame((state, delta) => {
      const elapsed = state.clock.elapsedTime;
      ref.current.position.z = Math.sin(elapsed / 2) * 6;
    }); */

    return (
      <>
        {/* <Plane ref={ref} args={[20, 20, 36, 36]}>
          <meshBasicMaterial
            attach="material"
            color="red"
            wireframe
            transparent
            alphaMap={opacity}
          />
        </Plane> */}

        {/*         <Sphere ref={point} args={[1, 36, 36]} scale={0.1}>
          <meshBasicMaterial attach="material" color="orange" />
        </Sphere> */}

        {/* <Sphere args={[6, 128, 128]}>
          <meshBasicMaterial
            attach="material"
            color="red"
            transparent
            wireframe
            

            opacity={0.11}
          />
        </Sphere> */}

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[5, 256, 256]} />
          <meshStandardMaterial
            metalness={0.7}
            map={color}
            bumpMap={bump}
            bumpScale={0.1}
            /* normalMap={normal}
            normalScale={0.2} */
            displacementMap={bump}
            displacementScale={0.07}
          />
        </mesh>
      </>
    );
  }

  function Sun() {
    const ref = useRef();
    useFrame((state, delta) => {
      /* const elapsed = state.clock.elapsedTime / 5; */
      const elapsed = state.clock.elapsedTime / 2;
      ref.current.position.x = 20 * Math.cos(elapsed);
      ref.current.position.z = 20 * Math.sin(elapsed);

      /* ref.current.position.x = 20;
      ref.current.position.z = 20;
      ref.current.position.y = -5; */
    });
    return (
      <>
        <spotLight ref={ref} intensity={1} />
      </>
    );
  }

  function Load() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    console.log(progress);
    return (
      <Html
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        fullscreen
      >
        <div>
          <Overlay progress={progress} />
        </div>
      </Html>
    );
  }

  return (
    <>
      <Canvas
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        dpr={2}
        antialias={true}
        gl={{ antialias: true, alpha: false }}
        camera={{ fov: 55, position: [-10, 4, 20] }}
        dispose={null}
        colorManagement={false}
      >
        {/* <axesHelper scale={15} /> */}
        {/* <ambientLight intensity={0.1} /> */}
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <Sun />
          <Stats />

          <OrbitControls
            minDistance={10}
            maxDistance={120}
            enablePan={false}
            /* minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2} */
          />
          <Moon />
        </Suspense>
      </Canvas>
      <Loader
        dataInterpolation={(p) => {
          return (
            `Loading ${p.toFixed(2)}% \n \n ` +
            (p < 25
              ? "Loading terrains"
              : p < 50
              ? "Hiding martians"
              : p < 75
              ? "Searching Dr. Manhattan"
              : "Locating Matt Damon")
          );
        }}
      />
    </>
  );
}
