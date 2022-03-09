import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Lights() {
  const light = useRef();

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight
        ref={light}
        color="#ffffff"
        position={[0, 30, 0]}
        intensity={1}
      />
    </>
  );
}
