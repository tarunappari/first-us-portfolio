'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [containerSize, setContainerSize] = useState(0);

  // Measure container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const size = direction === 'horizontal' 
          ? containerRef.current.offsetWidth 
          : containerRef.current.offsetHeight;
        setContainerSize(size);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [direction]);

  // CSS animation approach instead of framer-motion
  const animationDuration = isHovered && durationOnHover ? durationOnHover : currentDuration;
  
  const hoverProps = durationOnHover
    ? {
        onMouseEnter: () => {
          setIsHovered(true);
          setCurrentDuration(durationOnHover);
        },
        onMouseLeave: () => {
          setIsHovered(false);
          setCurrentDuration(duration);
        },
      }
    : {};

  const animationStyle = {
    animationDuration: `${animationDuration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: reverse ? 'reverse' : 'normal',
    animationName: direction === 'horizontal' ? 'slide-horizontal' : 'slide-vertical',
  };

  return (
    <div className={cn('overflow-hidden', className)} ref={containerRef}>
      <div
        className={cn(
          'flex w-max',
          direction === 'horizontal' ? 'animate-slide-horizontal' : 'animate-slide-vertical'
        )}
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          ...animationStyle,
        }}
        ref={contentRef}
        {...hoverProps}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
