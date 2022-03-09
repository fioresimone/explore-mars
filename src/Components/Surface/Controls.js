import { OrbitControls, Stars, Html, Loader } from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      zoomSpeed={0.6}
      panSpeed={0.5}
      rotateSpeed={0.4}
      minDistance={10}
      maxDistance={255}
    />
  );
}
