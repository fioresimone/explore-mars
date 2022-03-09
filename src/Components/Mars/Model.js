import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import { Suspense, useRef, forwardRef } from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshPhongMaterial, MeshStandardMaterial } from "three";
import { MeshToonMaterial } from "three";
import { MeshBasicMaterial } from "three";

export default function Model() {
  let object = null;
  object = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/webb/scene.gltf`);

  console.log(object);

  for (const material in object.materials) {
    object.materials[material].metalness = 1;
    /* object.materials[material] = new MeshBasicMaterial(); */
    object.materials[material].needsUpdate = true;
  }

  function wire() {
    console.log(object);
    for (const material in object.materials) {
      /* object.materials[material].color = new THREE.Color("skyblue");
      object.materials[material].transparent = true;
      object.materials[material].opacity = 0.04;
      object.materials[material].needsUpdate = true; */

      object.materials[material].wireframe =
        !object.materials[material].wireframe;
    }
  }

  return (
    <Suspense fallback={null}>
      <mesh position={[6, 3, 3]} scale={[1, 1, 1]} onClick={() => wire()}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <primitive object={object.scene} scale={[0.5, 0.5, 0.5]} />
    </Suspense>
  );
}
