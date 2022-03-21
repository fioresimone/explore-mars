import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import mod from "./Voyager.glb";

export default function Voyager(props) {
  const group = useRef();

  console.log("voyager");
  const { nodes, materials } = useGLTF(mod);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._root.geometry}
        material={materials.clear}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tex_02_AO_dark.geometry}
          material={materials.tex_02_AO_other}
          position={[0, 1.28, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tex_02_AO.geometry}
          material={materials.tex_02_AO}
          position={[0, 1.28, 0]}
        />
        <group position={[0, 1.28, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BODY040.geometry}
            material={materials.tex_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BODY040_1.geometry}
            material={materials.brass}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload(mod);
