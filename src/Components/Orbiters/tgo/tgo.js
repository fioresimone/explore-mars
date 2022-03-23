import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import model from "./TGO.glb";
export default function TGO() {
  const gltf = useLoader(GLTFLoader, model);

  return <primitive rotation={[0, 2, 1]} object={gltf.scene} />;
}
