"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
}

const MAX_DOTS = 500; // Limit the number of dots for performance

const DotPatternComponent = ({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) => {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width !== dimensionsRef.current.width || height !== dimensionsRef.current.height) {
        dimensionsRef.current = { width, height };
        setDimensions({ width, height });
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const observer = new ResizeObserver(() => updateDimensions());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateDimensions]);

  const dots = useMemo(() => {
    const totalDots =
      Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height);
    const numDots = Math.min(totalDots, MAX_DOTS);

    return Array.from({ length: numDots }, (_, i) => {
      const col = i % Math.ceil(dimensions.width / width);
      const row = Math.floor(i / Math.ceil(dimensions.width / width));
      return {
        x: col * width + cx,
        y: row * height + cy,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
      };
    });
  }, [dimensions, width, height, cx, cy]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {dots.map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          className="text-neutral-400/80"
          initial={glow ? { opacity: 0.5 } : {}}
          animate={glow ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={
            glow
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  );
};

export const DotPattern = React.memo(DotPatternComponent);
