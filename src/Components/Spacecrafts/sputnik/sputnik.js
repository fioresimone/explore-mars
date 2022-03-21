import { Cone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";

import { GLTFLoader } from "three-stdlib";

function Sputnik() {
  /* const gltf = useLoader(GLTFLoader, gltfModel); */
  const gltf = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/sputnik/scene.gltf`,
  );

  return (
    <>
      <pointLight position={[-8, 0, 0]} intensity={100} />

      <primitive object={gltf.scene} position={[2.3, -3.5, 1.1]} />
    </>
  );
}

export default React.memo(Sputnik);
