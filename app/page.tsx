"use client";

import { BentoSection } from "@/components/custom/bento-section";
import { FeaturesSection } from "@/components/custom/feature-section";
import { HeroBackground } from "@/components/custom/hero-background";
import { HeroScrollDemo } from "@/components/custom/hero-scroll";
import React from "react";
import FAQ from "@/components/custom/faq";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="">
      <HeroBackground />
      <HeroScrollDemo />
      <div className="py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
          Got An Idea? Let's Build It Together
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="text-sm md:text-base max-w-4xl my-4 mx-auto text-gray-800 font-normal dark:text-gray-100 text-center px-4">
          From AI-driven analytics to IoT-powered smart devices and <br />{" "}
          cutting-edge web applications, we develop solutions that shape the
          future.
        </motion.h2>
      </div>
      <BentoSection />
      {/* <FlipWord /> */}
      <FeaturesSection />
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}


// Vision -delivering the best customer service at all times 


// Mission - global expansion through latest technology developments