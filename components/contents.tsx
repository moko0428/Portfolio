import React from 'react';

interface ContentsProps {
  children: React.ReactNode;
}
export const Contents: React.FC<ContentsProps> = ({ children }) => {
  return (
    <div className="Contents bg-blue-300 w-screen h-screen">{children}</div>
  );
};
