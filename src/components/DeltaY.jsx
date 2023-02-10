import { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';

const DeltaY = () => {
  // ------------------------------ reducer ------------------------------- //
  const [{ state }, dispatch] = useStateValue();
  // ------------------------------ reducer ------------------------------- //
  const [scrollMode, setScrollMode] = useState(false);

  let config = {
    deltaY: 0,
    speed: 0,
    // scrollMode: false,
  };

  useEffect(() => {
    function handleWheel(e) {
      config.deltaY = e.deltaY;
      config.speed += e.deltaY * 0.0002;

      setScrollMode(true);
    }
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScrollMode(true);
    }, 1000);
  }, []);

  // ------------------------------ dispatch ------------------------------- //
  dispatch({
    type: 'GET_DELTAY',
    value: config.deltaY,
  });

  dispatch({
    type: 'GET_SCROLLMODE',
    value: scrollMode,
  });
  // ------------------------------ dispatch ------------------------------- //

  return null;
};

export default DeltaY;
