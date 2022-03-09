import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import mod from "./merged.gltf";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(mod);
  Object.entries(nodes).forEach((el) => {
    if (el[1].material) {
      el[1].material = new THREE.MeshStandardMaterial();
      el[1].material.wireframe = true;
      el[1].material.color = new THREE.Color("cyan");
    }
  });

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime / 2;

    group.current.rotation.y = elapsed;
    //ref.current.position.y = 5;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Torus003.geometry}
        material={nodes.Torus003.material}
        position={[0, -4.57, 0]}
        scale={[1.6, 3.43, 1.6]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0, -4.26, 1.72]}
        rotation={[2.18, Math.PI / 2, 0]}
        scale={[0.29, -0.04, 0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-1.64, -4.26, 0]}
        rotation={[0, 0, 2.18]}
        scale={[0.29, -0.04, 0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[0.52, -5.05, -0.06]}
        scale={[-0.02, -1, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, -0.83, 0.01]}
        scale={[0.68, 3.03, 0.68]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 2.5, 0.01]}
        scale={[0.61, 0.19, 0.61]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0, 2.95, 0.01]}
        scale={[0.61, 0.31, 0.61]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[0, 3.31, 0.01]}
        scale={[-0.14, 1.09, -0.14]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-0.07, 4.72, 0.01]}
        scale={[-0.02, -0.34, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[0, 6.54, 0.01]}
        scale={[0.61, 0.19, 0.61]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-0.55, 3.21, -0.18]}
        scale={[-0.02, -0.34, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[-0.47, 3.7, -0.3]}
        scale={[-0.02, -0.78, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        scale={[5.75, -0.17, 0.2]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5.71, -0.17, 0.2]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[2.69, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.27, -0.28, -0.32]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[-0.63, -5.3, -0.06]}
        scale={[-0.02, -1.63, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
        position={[-0.19, -5.2, -0.6]}
        scale={[-0.02, -1.14, -0.02]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={nodes.Torus001.material}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={nodes.Torus002.material}
        scale={[2.74, 3.43, 2.74]}
      />
      <mesh
        castShadow
        wireframe
        receiveShadow
        geometry={nodes.Torus004.geometry}
        material={nodes.Torus004.material}
        scale={[5.67, 6.59, 5.67]}
      />
    </group>
  );
}

useGLTF.preload(mod);
