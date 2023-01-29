import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Plane from './Plane';
import CameraControls from './CameraControls';

const SceneContainerStyle = {
  backgroundColor: 'lightblue',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  left: '0',
};

const Scene = () => {
  return (
    <div style={SceneContainerStyle}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <CameraControls />
        <PerspectiveCamera
          fov={45}
          aspect={window.innerWidth / window.innerHeight}
          near={1}
          far={1000}
          position={[0, 0, 0]}
        ></PerspectiveCamera>
        <Suspense fallback={null}>
          <Plane />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
