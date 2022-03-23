import { Point, Points, PointMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

export default function Particles({ size = 10000 }) {
  const { width, height } = useThree((state) => state.viewport);
  const particleColors = ["white" /* , "blue", "lightblue" */];
  return (
    <Points limit={size}>
      <PointMaterial scale={2} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 1000,
            -Math.random() * 10000,
          ]}
          color={
            particleColors[Math.round(Math.random() * particleColors.length)]
          }
        />
      ))}
    </Points>
  );
}
