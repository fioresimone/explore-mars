import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import model from "./Hubble.glb";
export default function Hubble(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);
  return (
    <>
      <pointLight position={[10, 20, 0]} intensity={5} />
      {/* <ambientLight intensity={10} /> */}
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={[0.5, 0.5, 0.5]}
        rotation={[-30, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._root.geometry}
          material={materials.transparent}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.foil_gold.geometry}
            material={nodes.foil_gold.material}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1.06, 1.06, 1.06]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AO_1.geometry}
            material={materials.AO_1}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[2.26, 2.68, 2.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.foil_silver.geometry}
            material={materials.foil_silver}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1.06, 1.06, 1.06]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AO_light.geometry}
            material={materials.AO_light}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[2.26, 2.68, 2.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.alpha_tex01.geometry}
            material={materials.NASA_logo}
            position={[0.1, 5.58, 1.45]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[0.35, 0.35, 0.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shiny_panel_cylinder.geometry}
            material={materials.shiny_panel_cylinder}
            position={[0, -3.86, 0.72]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[2.26, 2.68, 2.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tex_03.geometry}
            material={materials.tex_03}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[2.26, 2.68, 2.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tex_01.geometry}
            material={materials.tex_01}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[0.35, 0.35, 0.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shiny_panel.geometry}
            material={materials.shiny_panel}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[0.35, 0.35, 0.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tex_02.geometry}
            material={materials.tex_02}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1.06, 1.06, 1.06]}
          />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload(model);
