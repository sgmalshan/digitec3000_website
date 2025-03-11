"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { ContactUsForm } from "../ui/contact-form";
import { AnimatedTooltipPreview } from "./people-section";

export function BackgroundBeamsDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full rounded-md bg-white dark:bg-black relative flex flex-col items-center justify-center antialiased">
      {children}
      <BackgroundBeams />
    </div>
  );
}
