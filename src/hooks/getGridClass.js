import { useState, useEffect } from 'react';

/*
Tamanhos de tela
extra small < 768px
small >= 768px
medium >= 992px
large >= 1200px
*/

const getScreenSize = () => {
  const { innerWidth: width } = window;

  if (width >= 1200) {
    return { size: 'lg' };
  }

  if (width >= 992) {
    return { size: 'md' };
  }

  if (width >= 768) {
    return { size: 'sm' };
  }

  return { size: 'xs' };
};

export default function getGridClass() {
  const [windowDimensions, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
