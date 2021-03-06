import React, { useRef, useState } from "react";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Controls from "./Controls";

import Lights from "./Lights";
import {
  OrbitControls,
  Stars,
  Plane,
  Sphere,
  Loader,
  Html,
  Torus,
  Cone,
  Stats,
  Billboard,
  Text,
  MapControls,
} from "@react-three/drei";
import { Camera, TextureLoader } from "three";

import elev from "./elevation.png";
import alpha from "./opacity.png";
import rocks from "./mount.jpeg";

import Model from "./Model";

import gsap from "gsap";

function Terrain({ wireframe, range }) {
  const [height, opacity, color] = useLoader(TextureLoader, [
    elev,
    alpha,
    rocks,
  ]);

  return (
    <>
      <Markers />

      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        args={[200, 200, 120, 120]}
      >
        <meshStandardMaterial
          attach="material"
          /* color="#c53934" */
          color="#C1440E"
          wireframe
          map={color}
          displacementMap={height}
          displacementScale={20}
          alphaMap={opacity}
          transparent
          depthWrite={false}
          /* opacity={0.6} */
        />
      </Plane>
    </>
  );
}

function Markers({ handleClick }) {
  const coords = [
    [40, 6, 0],
    [-30, 6, 10],
    [20, 6, 20],
  ];

  return coords.map((el, i) => {
    return <Marker coords={el} key={i} />;
  });
}

function Marker({ coords }) {
  const ref = useRef();
  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    ref.current.rotation.y = elapsed * 2;
    ref.current.rotation.x = -Math.PI;
  });

  const { camera } = useThree();

  const handleClick = (coords) => {
    gsap.to(camera.position, {
      duration: 2,
      delay: 0,
      x: coords[0] * 1.3,
      y: coords[1] * 1.3,
      z: coords[2] * 1.3,
    });
  };

  return (
    <Cone
      ref={ref}
      args={[0.5, 1.5, 3, 1]}
      onClick={() => handleClick(coords)}
      position={coords}
    >
      <meshBasicMaterial attach="material" color="yellow" wireframe />
    </Cone>
  );
}

export default function Surface() {
  return (
    <>
      <Canvas
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        camera={{ fov: 55, position: [125, 10, 0] }}
        linear
        colorManagement={true}
        pixelRatio={2}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* <axesHelper args={[15]} /> */}
          <Terrain />
          <Model />
          <Stats />
          {/* <MapControls /> */}
          <Controls />
          <Lights />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
