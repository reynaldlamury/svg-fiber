import React, { useEffect, useRef, useState } from 'react';
// import { useControls } from 'leva';
import useDeltaY from './useDeltaY';
import gsap from 'gsap';
import useLerp from './useLerp';
import { useStateValue } from '../StateProvider';

const Svg = () => {
  // const [deltaY, scrollMode] = useDeltaY();
  const [speed2] = useLerp();

  const feImageRef = useRef();
  const svgRef = useRef();
  const [{ scrollMode, deltaY }, dispatch] = useStateValue();

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
  const y1 = useRef({ value: 11 });
  const y2 = useRef({ value: 36 });

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

  useEffect(() => {
    console.log('deltaY=', deltaY);
  }, [deltaY]);

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        ref={svgRef}
        width={`${1366}`}
        height={`${0}px`}
        viewBox=' 0 100 100'
      >
        {/* <defs> */}
        {/* <rect id="rectangle" width="1000" height="100" fill="url(#grad1)" /> */}
        <filter
          id='f'
          primitiveUnits='objectBoundingBox'
          // filterUnits='userSpaceOnUse'
          x='-50%'
          y='-10%'
          width='190%'

          // x='0px'
          // y='0px'
          // width='1366px'
          // height='700px'
        >
          <feImage
            ref={feImageRef}
            result='pict2'
            href={
              deltaY > 0
                ? `data:image/svg+xml;charset=UTF-8,%3csvg height="${
                    svgHeightRef.current.value
                  }" width="${1000}%25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"%3e%3cdefs%3e%3clinearGradient id="grad1" x1="0%25" y1="${84}%25" x2="0%25" y2="${71}%25"%3e%3cstop offset="0%25" style="stop-color:rgb(255,0,0);stop-opacity:1" /%3e%3cstop offset="100%25" style="stop-color:rgb(0,0,0);stop-opacity:1" /%3e%3c/linearGradient%3e%3c/defs%3e%3crect id="witness" width="${500}%25" height="${200}" fill="url(%23grad1)"%3e%3c/rect%3e%3c/svg%3e`
                : // ------------------------asdfasdlf
                  `data:image/svg+xml;charset=UTF-8,%3csvg height="${
                    svgHeightRef.current.value
                  }" width="${1000}%25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"%3e%3cdefs%3e%3clinearGradient id="grad1" x1="0%25" y1="${11}%25" x2="0%25" y2="${36}%25"%3e%3cstop offset="0%25" style="stop-color:rgb(255,0,0);stop-opacity:1" /%3e%3cstop offset="100%25" style="stop-color:rgb(0,0,0);stop-opacity:1" /%3e%3c/linearGradient%3e%3c/defs%3e%3crect id="witness" width="${500}%25" height="${100}" fill="url(%23grad1)"%3e%3c/rect%3e%3c/svg%3e`
            }

            // href={`data:image/svg+xml;charset=UTF-8,%3csvg height='${
            //   svgHeightRef.current.value
            // }' width='${1000}%25' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3clinearGradient id='grad1' x1='0%25' y1='${11}%25' x2='0%25' y2='${32}%25'%3e%3cstop offset='0%25' style='stop-color:rgb(255,0,0);stop-opacity:1' /%3e%3cstop offset='20%25' style='stop-color:rgb(255,0,0);stop-opacity:0.' /%3e%3cstop offset='100%25' style='stop-color:rgb(0,0,0);stop-opacity:1' /%3e%3c/linearGradient%3e%3c/defs%3e%3crect id='witness' width='${500}%25' height='${100}' fill='url(%23grad1)'%3e%3c/rect%3e%3c/svg%3e`}
          ></feImage>
          <feDisplacementMap
            rotate={0.08}
            scale={0.04}
            xChannelSelector='R'
            yChannelSelector='R'
            in2='pict2'
            in='SourceGraphic'
          />
        </filter>
        {/* </defs> */}
      </svg>
    </>
  );
};

export default Svg;
