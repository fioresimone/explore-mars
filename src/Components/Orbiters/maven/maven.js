/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import model from "./maven.glb";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BUS.geometry}
          material={nodes.BUS.material}
          position={[0, -0.31, 0.37]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.foil_silver.geometry}
            material={nodes.foil_silver.material}
            position={[0, 1.77, -0.37]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dish_frame.geometry}
            material={materials.AO_dish_frame}
            position={[0, 1.29, -0.37]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shiny_panel.geometry}
            material={materials.shiny_panel}
            position={[-3.14, 1.13, -0.37]}
          />
          <group position={[0, -0.6, -0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_2.geometry}
              material={materials.AO_parts_02}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_3.geometry}
              material={materials.AO_parts_03}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_4.geometry}
              material={materials.AO_parts_01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_5.geometry}
              material={materials.AO_parts_05}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_6.geometry}
              material={materials.AO_parts_04}
            />
          </group>
          <group position={[0, -0.6, -0.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_7.geometry}
              material={materials.tex_01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_8.geometry}
              material={materials["foil silver"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MavenOrbitWide1_0_APP1_0_pCube13000_9.geometry}
              material={materials.thruster}
            />
          </group>
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload(model);
