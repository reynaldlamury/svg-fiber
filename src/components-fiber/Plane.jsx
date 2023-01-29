import {
  useFrame,
  // useLoader
} from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { vertexShader, fragmentShader } from './shaders';

const Plane = () => {
  const meshRef = useRef();

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[2, 2, 20, 20]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

const MaterialShader = () => {
  const shaderRef = useRef();

  // const [img] = useLoader(THREE.TextureLoader, [carImg]);
  // texture.encoding = LinearEncoding;

  const data = React.useMemo(
    () => ({
      uniforms: {
        uTexture: { value: null },
        uColor: { value: new THREE.Color(0, 0, 0) },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector4(0, 0, 0) },
        distanceFromCenter: { value: 0 },
        mouse: { value: 0 },
      },
      fragmentShader,
      vertexShader,
      side: THREE.DoubleSide,
      transparent: true,
      // wireframe: true,
    }),
    [],
  );

  useFrame(() => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += 0.05;
    }
  });

  return <shaderMaterial ref={shaderRef} {...data} />;
};

export default Plane;
