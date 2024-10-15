'use client';
import { useEffect, useState } from 'react';
import { Middle } from './headerWrapper/middle';
import { Left } from './headerWrapper/left';
import { LeftMenu } from './leftMenu';

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return (
    <div
      className={`flex Header fixed items-center   w-[${windowWidth}] h-[70px] right-0  justify-evenly border-b-2 px-2 space-x-2`}
    >
      {windowWidth < 786 && <Left />}
      <Middle />
    </div>
  );
};
