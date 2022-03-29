import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Loader,
  useProgress,
  Html,
  Stars,
} from "@react-three/drei";
import { TextureLoader } from "three";
import { Stats } from "@react-three/drei/core/Stats";

import MarsColor from "./marsColor.jpg";
import MarsBump from "./marsBump10.jpg";
import Loading from "../Loading/Loading";

export default function Mars() {
  function Mars() {
    const [color, bump] = useLoader(TextureLoader, [MarsColor, MarsBump]);

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
    });
    return (
      <>
        <spotLight ref={ref} intensity={1} />
      </>
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
        <Suspense fallback={<Loading />}>
          <ambientLight intensity={0.15} />
          <Sun />
          <Stats />
          <Stars />
          <OrbitControls
            minDistance={10}
            maxDistance={120}
            enablePan={false}
            /* minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2} */
          />
          <Mars />
        </Suspense>
      </Canvas>
      {/* <Loader
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
      /> */}
    </>
  );
}
