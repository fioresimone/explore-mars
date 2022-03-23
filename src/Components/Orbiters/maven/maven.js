import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import model from "./maven.glb";
export default function Maven() {
  const gltf = useLoader(GLTFLoader, model);

  return <primitive rotation={[0, 2, 1]} object={gltf.scene} />;
}
