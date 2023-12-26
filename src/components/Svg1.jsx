import React, { useEffect, useRef, useState } from 'react';
// import { useControls } from 'leva';
import useDeltaY from './useDeltaY';
import gsap from 'gsap';
import useLerp from './useLerp';
import { useStateValue } from '../StateProvider';

const Svg1 = () => {
  // const [deltaY, scrollMode] = useDeltaY();
  const [speed2] = useLerp();

  const feImageRef = useRef();
  const svgRef = useRef();
  const [{ scrollMode }, dispatch] = useStateValue();

  // const {
  //   svgWidth,
  //   svgHeight,
  //   rectWidth,
  //   rectHeight,
  //   x1,
  //   y1,
  //   x2,
  //   y2,
  //   scale,
  //   rotate,
  //   svgAreaHeight,
  //   svgAreaWidth,
  // } = useControls({
  //   svgWidth: { value: 1000, min: -1500, max: 1500, step: 2, lock: true },
  //   svgHeight: { value: 200, min: 200, max: 500, step: 2, lock: true },
  //   rectWidth: { value: 1000, min: -1500, max: 1500, step: 2, lock: true },
  //   rectHeight: { value: 100, min: -1500, max: 2500, step: 2, lock: true },
  //   x1: {
  //     value: 0,
  //     min: -500,
  //     max: 500,
  //     step: 5,
  //     lock: true,
  //     disabled: true,
  //   },
  //   y1: { value: 11, min: -500, max: 500, step: 2, lock: true },
  //   x2: {
  //     value: 0,
  //     min: -500,
  //     max: 500,
  //     step: 5,
  //     lock: true,
  //     disabled: true,
  //   },
  //   y2: { value: 32, min: -500, max: 500, step: 2, lock: true },
  //   scale: { value: 0.04, min: -1, max: 1, step: 0.0001, lock: true },
  //   rotate: { value: 0.08, min: -1, max: 1, step: 0.0001, lock: true },
  //   svgAreaHeight: { value: 200, min: -2000, max: 2000, step: 10, lock: true },
  //   svgAreaWidth: { value: 1000, min: -2000, max: 2000, step: 10, lock: true },
  // });

  const svgHeightRef = useRef({ value: 500 });

  useEffect(() => {
    // console.log('scrollMode', scrollMode);
    // console.log('speed2', speed2);
    if (scrollMode && speed2) {
      gsap.to(svgHeightRef.current, {
        value: 200,
        duration: 0.2,
      });
    } else {
      gsap.to(svgHeightRef.current, {
        value: 500,
        duration: 5,
      });
    }
  }, [scrollMode, speed2]);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1000'
      height='200'
      style={{
        width: '100%',
        display: 'block',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <defs>
        {/* <rect id="rectangle" width="1000" height="100" fill="url(#grad1)" /> */}
        <filter id='f' primitiveUnits='objectBoundingBox'>
          <feImage result='pict2'>
            <svg
              height={`${svgHeightRef.current.value}`}
              width='1000%'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs>
                <linearGradient id='grad1' x1='0%' y1='11%' x2='0%' y2='32%'>
                  <stop
                    offset='0%'
                    style='stop-color:rgb(255,0,0);stop-opacity:1'
                  />
                  <stop
                    offset='100%'
                    style='stop-color:rgb(0,0,0);stop-opacity:1'
                  />
                </linearGradient>
              </defs>
              <rect
                id='witness'
                width='1000%'
                height='100'
                fill='url(#grad1)'
              ></rect>
            </svg>
          </feImage>

          <feDisplacementMap
            rotate={0.08}
            scale={0.04}
            xChannelSelector='R'
            yChannelSelector='R'
            in2='pict2'
            in='SourceGraphic'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Svg1;
