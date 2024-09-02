import React, { PropsWithChildren } from 'react';
import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';

export const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={twMerge(
      "bg-gray-200 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-black/20 after:rounded-3xl after:pointer-events-none p-6",
      className
    )}>
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {children}
    </div>
  );
};
