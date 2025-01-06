import { useRef, useEffect } from 'react';

const useIsFirstRender = () => {
  const isFirst = useRef(true);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  return isFirst.current;
};

export default useIsFirstRender;
