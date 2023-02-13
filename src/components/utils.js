import { useControls } from 'leva';

const useUtils = () => {
  const {
    svgWidth,
    svgHeight,
    rectWidth,
    rectHeight,
    x1,
    y1,
    x2,
    y2,
    scale,
    scale1,
    rotate,
    frequency1,
    frequency2,
  } = useControls({
    svgWidth: { value: 1000, min: -1500, max: 1500, step: 2, lock: true },
    svgHeight: { value: 200, min: -1500, max: 1500, step: 2, lock: true },
    rectWidth: { value: 1000, min: -1500, max: 1500, step: 2, lock: true },
    rectHeight: { value: 100, min: -1500, max: 1500, step: 2, lock: true },
    x1: {
      value: 0,
      min: -500,
      max: 500,
      step: 5,
      lock: true,
      disabled: true,
    },
    y1: { value: 11, min: -200, max: 200, step: 0.05, lock: true },
    x2: {
      value: 0,
      min: -500,
      max: 500,
      step: 5,
      lock: true,
      disabled: true,
    },
    y2: { value: 32, min: -500, max: 500, step: 2, lock: true },
    scale: { value: 0.04, min: -1, max: 1, step: 0.0001, lock: true },
    scale1: { value: 10, min: -100, max: 100, step: 5, lock: true },
    rotate: { value: 0.08, min: -1, max: 1, step: 0.0001, lock: true },
    frequency1: { value: 0.01, min: 0, max: 0.5, step: 0.0001, lock: true },
    frequency2: { value: 0.02, min: 0, max: 0.5, step: 0.0001, lock: true },
  });

  return [
    frequency1,
    frequency2,
    scale1,
    y1,
    y2,
    scale,
    rotate,
    svgWidth,
    svgHeight,
    rectWidth,
    rectHeight,
  ];
};

export default useUtils;
