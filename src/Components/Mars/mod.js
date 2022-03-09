import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Mod() {
  function Items() {
    const expo1 = useLoader(
      GLTFLoader,
      `${process.env.PUBLIC_URL}/media/moon/scene.gltf`,
    );

    /*     for (const mat in gltf.materials) {
      console.log(mat);
      console.log(gltf.materials[mat]);
      gltf.materials[mat].wireframe = true;
    } */

    return (
      <>
        <primitive
          object={expo1.scene}
          /* scale={[0.1, 0.1, 0.1]} */
          /* position={[0, -20, 0]} */
        />
      </>
    );
  }

  return <Items />;
}
