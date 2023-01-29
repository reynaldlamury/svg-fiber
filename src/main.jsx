import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import * as THREE from 'three';
import { extend, createRoot, events } from '@react-three/fiber';
import { SVGRenderer } from 'three-stdlib';
import Plane from './components-fiber/Plane';

extend(THREE);

const root = createRoot(document.querySelector('#root'));

window.addEventListener('resize', () => {
  root.configure({
    // Inject renderer
    gl: (canvas) => {
      const gl = new SVGRenderer();
      canvas.appendChild(gl.domElement);
      return gl;
    },
    // Use events, too ...
    events,
    camera: { position: [0, 0, 50] },
    size: { width: window.innerWidth, height: window.innerHeight },
  });
  root.render(<App />);
});

window.dispatchEvent(new Event('resize'));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
