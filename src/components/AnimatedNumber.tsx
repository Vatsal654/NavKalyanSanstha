import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedNumberProps {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to, prefix = '', suffix = '', className }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 1, // Changed from 0.55 to 1 second
      ease: "easeOut",
      onUpdate(value) {
        // Use toLocaleString() to format numbers like 3,000
        node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [to, prefix, suffix]);

  return <h3 ref={nodeRef} className={className} />;
};

export default AnimatedNumber;