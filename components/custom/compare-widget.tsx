import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className=" rounded-3xl shadow-2xl">
      <Compare
        firstImage="./b.png"
        secondImage="./a.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] md:h-[500px] w-auto"
        slideMode="hover"
        autoplay
        autoplayDuration={10000}
      />
    </div>
  );
}
