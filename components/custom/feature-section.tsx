"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Built for Developers",
      description: "Designed for engineers, creators, and problem solvers.",
      icon: <IconTerminal2 size={32} />,
    },
    {
      title: "Ease of Use",
      description: "As intuitive as a smartphone, as powerful as a supercomputer.",
      icon: <IconEaseInOut size={32} />,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. No surprises. Just fair pricing.",
      icon: <IconCurrencyDollar size={32} />,
    },
    {
      title: "100% Uptime Guarantee",
      description: "We ensure uninterrupted access, always.",
      icon: <IconCloud size={32} />,
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Designed for scalability and seamless collaboration.",
      icon: <IconRouteAltLeft size={32} />,
    },
    {
      title: "24/7 AI-Powered Support",
      description: "Help is always available—anytime, anywhere.",
      icon: <IconHelp size={32} />,
    },
    {
      title: "Reliability at its Core",
      description: "Engineered for stability, efficiency, and peak performance",
      icon: <IconAdjustmentsBolt size={32} />,
    },
    {
      title: "Everything You Need",
      description: "More features than we can fit in this section.",
      icon: <IconHeart size={32} />,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white text-xl md:text-4xl md:leading-tight px-4"
      >
        Redefining Satisfaction With Innovative Solutions And Exceptional
        Service.
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "flex flex-col lg:border-r py-4 lg:py-10 relative group/feature dark:border-neutral-800 mx-auto transition-transform duration-300",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
