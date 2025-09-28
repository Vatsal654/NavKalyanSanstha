import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BackgroundPatternProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
  opacity?: string; // e.g., 'opacity-5', 'opacity-10'
  position?: string; // e.g., 'top-0 left-0', 'bottom-0 right-0'
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  Icon,
  className = '',
  size = 200, // Default large size
  opacity = 'opacity-[0.03]', // Very low opacity for subtle effect
  position = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', // Centered by default
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <Icon
        className={`text-muted-foreground ${opacity} ${position}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default BackgroundPattern;