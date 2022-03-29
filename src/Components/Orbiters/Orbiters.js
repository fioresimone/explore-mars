import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Plane,
  Stage,
  Loader,
  useGLTF,
} from "@react-three/drei";
import { Stats } from "@react-three/drei/core/Stats";
import { Camera, TextureLoader } from "three";

import { Link, useParams } from "react-router-dom";

import Loading from "./../Loading/Loading";

export default function Orbiters() {
  const { modelName } = useParams();

  const Model = React.lazy(() => import(`./${modelName}/${modelName}.js`));
  return (
    <>
      <div className="fixed top-20 h-28 overflow-y-scroll md:h-auto md:top-24 left-0 md:left-4 w-full md:w-32  z-40 flex flex-wrap justify-center md:block  text-white ">
        <Link to="/orbiters/maven">maven</Link>
        <Link to="/orbiters/tgo">tgo</Link>
      </div>

      <Canvas
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        dpr={2}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 55, position: [-5, 15, 15] }}
        className="bg-mars"
      >
        <Stats />

        <Suspense fallback={<Loading />}>
          <Model />

          <spotLight position={[0, 5, 0]} intensity={4} color={"white"} />

          <pointLight position={[10, 10, 0]} intensity={4} />
          <pointLight position={[0, -5, 0]} intensity={1} color={"white"} />

          <OrbitControls
            minDistance={3}
            maxDistance={25}
            enablePan={false}
            /* minPolarAngle={Math.PI / 24}
            maxPolarAngle={Math.PI / 3} */
          />
        </Suspense>
      </Canvas>
      {/* <Loader
        dataInterpolation={(p) =>
          `Loading ${p.toFixed(2)}% \n \n Drag to explore`
        } // Text
      /> */}
    </>
  );
}
