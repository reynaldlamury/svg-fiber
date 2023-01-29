export const vertexShader = `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;

    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fragmentShader = `
  precision mediump float;
  uniform vec3 uColor;
  varying vec2 vUv;
  // uniform sampler2D uTexture;
  uniform float uTime;

  void main() {

    gl_FragColor = vec4(vUv.x, vUv.y, 0., 1.);
  }  
`;
