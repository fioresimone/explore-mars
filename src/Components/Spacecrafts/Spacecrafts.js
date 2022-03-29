import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { Stats } from "@react-three/drei/core/Stats";
import { TextureLoader } from "three";

import { Link, useParams } from "react-router-dom";

import { data } from "./spacecrafts-data";

import color from "./ground/trestraou2_Base_Color.jpg";
import opacity from "./ground/opacity.png";
import Loading from "../Loading/Loading";

export default function Spacecrafts() {
  const { modelName } = useParams();

  const Model = React.lazy(() => import(`./${modelName}/${modelName}.js`));

  function Terrain() {
    const [colorMap, opacityMap] = useLoader(TextureLoader, [color, opacity]);

    return (
      <>
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          args={[16, 16, 60, 60]}
          receiveShadow
        >
          <meshStandardMaterial
            attach="material"
            map={colorMap}
            color="darkorange"
            alphaMap={opacityMap}
            transparent
          />
        </Plane>
      </>
    );
  }
  return (
    <>
      <div className="fixed top-20 h-28 overflow-y-scroll md:h-auto md:top-24 left-0 md:left-4 w-full md:w-32  z-40 flex flex-wrap justify-center md:block  text-white ">
        <Link to="/spacecrafts/mer">mer</Link>
        <br />
        <Link to="/spacecrafts/curiosity">asd</Link>
        <Link to="/spacecrafts/insight">insight</Link>
        {/* {data &&
          data.map((el) => (
            <Link
              key={el.name}
              to={`/spacecrafts/${el.name}`}
              className="card-border flex pl-1 items-center w-1/2 h-8 md:h-10 md:w-full text-xs mb-2"
            >
              <div>{el.displayName}</div>
            </Link>
          ))} */}
      </div>

      {false && (
        <>
          <div className="absolute bottom-4 left-0 z-40 w-full md:hidden">
            <div className="card-border text-white p-4 pt-0 h-48">
              <p className=" py-2 bg-black border-b-2 border-cyan-700">name</p>
              <div className="h-32  overflow-y-scroll">
                <p className="mt-10 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, tenetur eum adipisci alias impedit obcaecati quo non
                  dignissimos quod in assumenda similique amet dicta accusantium
                  expedita nulla ex? Maxime, ipsam.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-24 right-4 z-40 w-96 hidden md:block ">
            <div className="card-border text-white p-4 pt-0 h-48 overflow-y-scroll">
              <p className="sticky top-0 left-0 pl-0 py-2 bg-black border-b-2 border-cyan-700">
                name
              </p>
              <p className="mt-10 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                amet quas laborum suscipit aliquid, corporis pariatur, error
                officiis mollitia sit minus, accusantium voluptas. Eum
                doloremque necessitatibus fugiat cumque porro. Doloremque?
              </p>
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
        dpr={2}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 55, position: [-5, 5, 5] }}
      >
        <Stats />

        <Suspense fallback={<Loading />}>
          <Terrain />
          <Model />
          <spotLight
            position={[0, 5, 0]}
            intensity={4}
            color={"lightblue"}
            castShadow
          />
          <pointLight position={[10, 10, 0]} intensity={4} castShadow />

          <OrbitControls
            minDistance={3}
            maxDistance={25}
            enablePan={false}
            /* minPolarAngle={Math.PI / 24}
            maxPolarAngle={Math.PI / 3} */
          />
        </Suspense>
      </Canvas>
      {/*       <Loader
        dataInterpolation={(p) =>
          `Loading ${p.toFixed(2)}% \n \n Drag to explore`
        } // Text
      /> */}
    </>
  );
}
