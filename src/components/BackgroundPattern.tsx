import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BackgroundPatternProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
  opacity?: string;
  position?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  Icon,
  className = '',
  size = 200,
  opacity = 'opacity-[0.07]', // A subtle but visible opacity
  position = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}) => {
  return (
    <Icon
      className={`pointer-events-none text-primary ${opacity} ${position} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    />
  );
};

export default BackgroundPattern;