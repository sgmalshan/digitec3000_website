import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWord() {
  const words = ["BUILD  ", "REWAMP ", "OPTIMIZE", "UPGRADE"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 max-w-7xl mx-auto">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        WE
        <FlipWords words={words} /> <br />
        <span className="font-mono text-lg text-neutral-600 dark:text-neutral-400 px-2">
          {` Your system, smarter and stronger than ever`}
        </span>
      </div>
    </div>
  );
}
