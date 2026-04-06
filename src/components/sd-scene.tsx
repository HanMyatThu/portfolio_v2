import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.3;
    ref.current.position.y = Math.sin(t) * 0.3;
  });

  return (
    <Float>
      <Sphere ref={ref} args={[1, 64, 64]}>
        <meshStandardMaterial wireframe color="#0ea5e9" />
      </Sphere>
    </Float>
  );
}

function CameraController() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = mouse.x * 1.5;
    camera.position.y = mouse.y * 1.5;
  });

  return null;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight />
      <AnimatedSphere />
      <CameraController />
    </Canvas>
  );
}