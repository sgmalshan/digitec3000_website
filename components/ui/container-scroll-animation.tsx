"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent = null,
  children,
}: {
  titleComponent?: string | React.ReactNode | null;
  children: React.ReactNode;
}) => {
  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const checkMobile = React.useCallback(() => {
    const newIsMobile = window.innerWidth <= 768;
    setIsMobile((prev) => (prev !== newIsMobile ? newIsMobile : prev));
  }, []);

  React.useEffect(() => {
    checkMobile();
    const handleResize = debounce(checkMobile, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkMobile]);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const scaleValues = React.useMemo(
    () => (isMobile ? [0.7, 0.9] : [1.05, 1]),
    [isMobile]
  );

  // const smoothRange = [0, 1];

  // const rotate = useTransform(scrollYProgress, smoothRange, [15, 0], {
  //   clamp: false,
  // });

  // const scale = useTransform(scrollYProgress, smoothRange, scaleValues, {
  //   clamp: false,
  // });

  // const translate = useTransform(scrollYProgress, smoothRange, [0, -80], {
  //   clamp: false,
  // });

  const scale = useTransform(scrollYProgress, [0, 1], scaleValues);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[30rem] md:h-[55rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {titleComponent ? (
          <Header translate={translate} titleComponent={titleComponent} />
        ) : null}

        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = React.memo(({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
});

export const Card = React.memo(({ rotate, scale, children }: any) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        willChange: "transform, opacity",
      }}
      transition={{ ease: "easeOut", duration: 0.2 }} // Smoother transition
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
});
