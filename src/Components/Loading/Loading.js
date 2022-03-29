import { Html } from "@react-three/drei";

export default function Loading() {
  return (
    <Html center className="">
      {/* <p className="text-white text-center w-96">
        <i className="fal fa-spinner fa-spin fa-2x"></i>
      </p> */}
      <div class="hm-spinner"></div>
    </Html>
  );
}
