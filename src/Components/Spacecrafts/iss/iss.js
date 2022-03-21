import { Cone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import mod from "./iss.glb";
export default function Iss() {
  /* const gltf = useLoader(GLTFLoader, gltfModel); */
  const gltf = useLoader(GLTFLoader, mod);

  console.log(gltf);
  return (
    <>
      {/* <axesHelper scale={15} /> */}
      {/* <pointLight position={[-8, 0, 0]} intensity={10} /> */}
      {/* <ambientLight intensity={10} /> */}

      {/*       <Cone position={[-8, 5, 0]}>
        <meshBasicMaterial attach="material" color="yellow" wireframe />
      </Cone> */}
      <primitive
        object={gltf.scene}
        /* position={[2.3, -3.5, 1.1]} */
        scale={[0.1, 0.1, 0.1]}
        /* rotation={[-30, 0, 40]} */
      />
    </>
  );
}
