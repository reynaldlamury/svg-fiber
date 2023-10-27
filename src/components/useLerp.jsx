import { useCallback, useEffect, useRef, useState } from 'react';
// import { useStateValue } from '../StateProvider';

// lerp function
// const lerpFn = (start, end, t) => {
//   return start * (1 - t) + end * t;
// };
// const clamp = (num, min, max) => {
//   return Math.min(Math.max(num, min), max);
// };

const useLerp = (target = document) => {
  // ------------------------------ reducer ------------------------------- //
  // const [states, dispatch] = useStateValue();
  // ------------------------------ reducer ------------------------------- //
  // const [position, setPosition] = useState(0);
  // const [speed, setSpeed] = useState(0);
  const [speed2, setSpeed2] = useState(0);

  const [targetY, setTargetY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const animationRef = useRef();
  // const lerpValue = useRef(0);

  const lerpFn = useCallback((start, end, t) => {
    return start * (1 - t) + end * t;
  }, []);

  // const lerpValue = useMemo(
  //   () => lerpFn(currentY, targetY, 0.075),
  //   [currentY, targetY]
  // );

  useEffect(() => {
    const getScroll = () => {
      setTargetY(target?.scrollTop);
      console.log(`${target}.scrollTop', ${target?.scrollTop}`);
      // console.log('window.scrollY', window.scrollY);

      // dispatch({
      //   type: 'GET_CURRENTY',
      //   value: targetY,
      // });
      // };

      // const getSpeed = (e) => {
      // const delta = e.deltaY;
      // Check the value of delta
      // if (delta > 0) {
      // The wheel was rotated upwards or away from the user
      // console.log('delta is bigger than 0');
      // } else if (delta < 0) {
      // The wheel was rotated downwards or towards the user
      // console.log('delta is less than 0');
      // }
      // dispatch({
      //   type: 'GET_DELTAY',
      //   value: e.deltaY,
      // });
      // setSpeed((prevSpeed) => (prevSpeed += e.deltaY * 0.0002));
    };

    const getWheel = (e) => {
      setSpeed2((prevSpeed) => (prevSpeed += e.deltaY * 0.0002));
    };

    target.addEventListener('scroll', getScroll);
    target.addEventListener('wheel', getWheel);
    return () => {
      target && target.removeEventListener('scroll', getScroll);
      target && target.removeEventListener('wheel', getWheel);
    };

    // return () => window.removeEventListener('wheel', getSpeed);
  }, []);

  const smoothScroll = useCallback(() => {
    // lerpValue.current = lerpFn(currentY, targetY, 0.075);

    setCurrentY(lerpFn(currentY, targetY, 0.075));
    // setPosition((prevPos) => (prevPos += speed));
    // setSpeed((prevSpeed) => (prevSpeed *= 0.9));
    setSpeed2((prevSpeed) => (prevSpeed *= 0.97));
    // setSpeed2((prevSpeed) => (clamp(prevSpeed, 200, 500)));

    // console.log(lerpValue);

    //   dispatch({
    //     type: 'GET_CURRENTY',
    //     value: currentY,
    //   });

    animationRef.current = requestAnimationFrame(smoothScroll);
  }, [currentY, targetY, lerpFn]);
  // };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationRef.current);
    // }, [animationRef.current]);
  }, [smoothScroll]);

  return [speed2, currentY];
  // return null;
};

export default useLerp;
