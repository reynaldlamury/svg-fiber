import { useEffect, useState } from 'react';

const useDeltaY = () => {
  const [scrollMode, setScrollMode] = useState(false);
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    function handleWheel(e) {
      setDeltaY(e.deltaY);
      setScrollMode(true);
    }
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScrollMode(false);
    }, 5000);
  }, [scrollMode]);

  return [deltaY, scrollMode];
};

export default useDeltaY;
