import { useEffect, useState } from 'react';

const useDeltaY = () => {
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    function handleWheel(e) {
      setDeltaY(e.deltaY);
    }
    window.addEventListener('scroll', handleWheel);
    return () => window.removeEventListener('scroll', handleWheel);
  }, []);

  return [deltaY];
};

export default useDeltaY;
