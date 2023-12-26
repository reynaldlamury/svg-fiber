import * as React from 'react';
import { useStateValue } from '../StateProvider';

const UseInertia = (target = document) => {
  // const [isScrolling, setIsScrolling] = React.useState(false);
  const [scrollValue, setScrollValue] = React.useState(0);
  const [currentY, setCurrentY] = React.useState(0);
  const [deltaY, setDeltaY] = React.useState(0);
  const [{ state }, dispatch] = useStateValue(0);

  const animationRef = React.useRef();

  const lerpFn = React.useCallback((start, end, t) => {
    return start * (1 - t) + end * t;
  }, []);

  const on = React.useCallback(() => {
    setScrollValue(target?.scrollTop);
    // setIsScrolling(true);
  }, [target]);

  const onWheel = React.useCallback((e) => {
    setDeltaY(e.deltaY);
  }, []);

  // const off = React.useCallback(() => setIsScrolling(false), []);

  React.useEffect(() => {
    target.addEventListener('scroll', on, { passive: true });
    target.addEventListener('wheel', onWheel);
    // target.addEventListener('scrollend', off);
    return () => {
      target && target.removeEventListener('scroll', on);
      // target && target.removeEventListener('scrollend', off);
      target && target.removeEventListener('wheel', onWheel);
    };
  });

  const smoothScroll = React.useCallback(() => {
    setCurrentY(lerpFn(isNaN(currentY) ? 0 : currentY, scrollValue, 0.075));

    animationRef.current = requestAnimationFrame(smoothScroll);
  }, [currentY, scrollValue, lerpFn]);

  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [smoothScroll]);

  return currentY;
};

export default UseInertia;
