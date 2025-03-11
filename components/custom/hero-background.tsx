"use client";

import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export function HeroBackground() {
  return (
    <div className="relative flex h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {/* <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        cr={1}
        width={18}
        height={18}
      /> */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full  md:pt-0">
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10">
          We Develop Solutions That Shape The Future
        </h1>
        <p className="text-center mt-6 text-base md:text-xl text-gray-500 dark:text-gray-100 max-w-3xl mx-auto relative z-10 text-balance leading-relaxed">
          From AI-driven analytics to IoT-powered smart devices and cutting edge web applications, we develop solutions that shape the future.
        </p>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
