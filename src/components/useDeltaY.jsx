import { useEffect, useState } from 'react';

const useDeltaY = (target = document) => {
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    function handleWheel(e) {
      setDeltaY(e.deltaY);
    }
    target.addEventListener('wheel', handleWheel);
    return () => {
      // window.removeEventListener('scroll', handleWheel);
      target && target.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return deltaY;
};

export default useDeltaY;
