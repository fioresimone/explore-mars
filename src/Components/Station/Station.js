import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { TextureLoader, CubeTextureLoader } from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import bkg1_front from "./../../Assets/front.png";
import bkg1_back from "./../../Assets/back.png";
import bkg1_top from "./../../Assets/top.png";
import bkg1_left from "./../../Assets/left.png";
import bkg1_right from "./../../Assets/right.png";
import bkg1_bot from "./../../Assets/bottom.png";

import Model from "./Model";

export default function Station() {
  function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const environmentMap = loader.load([
      bkg1_front,
      bkg1_back,
      bkg1_top,
      bkg1_bot,
      bkg1_left,
      bkg1_right,
    ]);

    scene.background = environmentMap;

    return null;
  }

  return (
    <>
      <Canvas
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        dpr={2}
        gl={{ antialias: true, alpha: false }}
        camera={{ fov: 55, position: [-10, 24, 20] }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />

          {/* <pointLight position={[0, 0, 12]} /> */}

          {/* <axesHelper scale={5} /> */}

          {/* <Sun /> */}

          {/* <Orbital />
        <Physical /> */}
          <Model />

          <SkyBox />
          <OrbitControls
            minDistance={3}
            maxDistance={45}
            enablePan={false}
            /* enableDamping={true}
          dampingFactor={0.01} */
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
