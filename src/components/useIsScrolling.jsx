import * as React from 'react';

export const useIsScrolling = (target = document) => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [scrollValue, setScrollValue] = React.useState(0);

  const on = React.useCallback(() => {
    setScrollValue(target?.scrollTop);
    setIsScrolling(true);
  }, [target]);

  const off = React.useCallback(() => setIsScrolling(false), []);

  React.useEffect(() => {
    target.addEventListener('scroll', on, { passive: true });
    target.addEventListener('scrollend', off);
    return () => {
      target && target.removeEventListener('scroll', on);
      target && target.removeEventListener('scrollend', off);
    };
  });

  return [isScrolling, scrollValue];
};
