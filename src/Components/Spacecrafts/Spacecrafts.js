import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Stats } from "@react-three/drei/core/Stats";

import { Link, useParams } from "react-router-dom";
import { data } from "./spacecrafts-data";

export default function Spacecrafts() {
  const { modelName } = useParams();

  const [model, setModel] = useState();

  const Model = React.lazy(() => import(`./${modelName}/${modelName}.js`));

  useEffect(() => {
    setModel(data.filter((el) => el.name === modelName)[0]);
  }, [modelName]);

  function Sun() {
    const ref = useRef();
    useFrame((state, delta) => {
      const elapsed = state.clock.elapsedTime / 2;
      ref.current.position.x = 15 * Math.cos(elapsed);
      ref.current.position.z = 15 * Math.sin(elapsed);
      //ref.current.position.y = 5;
    });
    return (
      <>
        <pointLight ref={ref} />
      </>
    );
  }

  return (
    <>
      <div className="fixed top-20 h-28 overflow-y-scroll md:h-auto md:top-24 left-0 md:left-4 w-full md:w-32  z-40 flex flex-wrap justify-center md:block  text-white ">
        {data &&
          data.map((el) => (
            <Link
              key={el.name}
              to={`/spacecrafts/${el.name}`}
              className="card-border flex pl-1 items-center w-1/2 h-8 md:h-10 md:w-full text-xs mb-2"
            >
              <div>{el.displayName}</div>
            </Link>
          ))}
      </div>

      {model && (
        <>
          <div className="absolute bottom-4 left-0 z-40 w-full md:hidden">
            <div className="card-border text-white p-4 pt-0 h-48">
              <p className=" py-2 bg-black border-b-2 border-cyan-700">
                {model.displayName.toUpperCase()}
              </p>
              <div className="h-32  overflow-y-scroll">
                <p className="mt-10 text-sm">{model.description}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-24 right-4 z-40 w-96 hidden md:block ">
            <div className="card-border text-white p-4 pt-0 h-48 overflow-y-scroll">
              <p className="sticky top-0 left-0 pl-0 py-2 bg-black border-b-2 border-cyan-700">
                {model.displayName.toUpperCase()}
              </p>
              <p className="mt-10 text-sm">{model.description}</p>
            </div>
          </div>

          {/*  <div className="absolute bottom-4 right-4 z-40 w-96 hidden md:block ">
            <div className="card-border text-white p-4 pt-0 h-48 overflow-y-scroll">
              <p className="sticky top-0 left-0 pl-0 py-2 bg-black border-b-2 border-cyan-700">
                {model.displayName.toUpperCase()}
              </p>
              <p className="mt-10 text-sm">{model.description}</p>
            </div>
          </div> */}
        </>
      )}

      <Canvas
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        className="bg-grid"
        dpr={2}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 55, position: [-10, 24, 20] }}
      >
        <Stats />
        {/* <Stars /> */}
        {/* <Skybox /> */}
        <Suspense fallback={null}>
          <ambientLight intensity={1} />

          {/* <axesHelper scale={15} /> */}

          <Sun />

          <Model />

          <OrbitControls minDistance={5} maxDistance={45} enablePan={false} />
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