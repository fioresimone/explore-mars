import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import mod from "./Juno.glb";

export default function JunoModel() {
  const gltf = useLoader(GLTFLoader, mod);
  return (
    <>
      <pointLight position={[-10, 0, 0]} intensity={15} />
      <pointLight position={[10, 0, 0]} intensity={15} />

      <primitive
        object={gltf.scene}
        rotation={[0, 40, 30]}
        scale={[0.5, 0.5, 0.5]}
      />
    </>
  );
}
