import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { CodeSnippet } from "./code-snippet";
import { GithubGlobe } from "./github-globe";
import clsx from "clsx";
import IotWidget from "./iot-widget";
import MobileDetail from "../animata/widgets/mobile-detail";
import { CompareDemo } from "./compare-widget";
import { AiTools } from "./ai-tools";
import { Iphone15ProDemo } from "./iphone";
import { WebBrowserWidget } from "./web-browser";

export function BentoSection() {
  return (
    <div className="py-20">
      <BentoGrid className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={clsx(
              i === 0 && "lg:col-span-2" ||
                (i === 1 && "lg:col-span-2") ||
                (i === 2 && "lg:col-span-1") ||
                (i === 3 && "lg:col-span-3") ||
                (i === 4 && "lg:col-span-3") ||
                (i === 6 && "lg:col-span-4"),
              "boder border-dashed border-2 border-gray-200 "
            )}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "AI-Powered Automation Solutions",
    description:
      "Harness the full potential of artificial intelligence to streamline operations and optimize your business processes.",
    header: <AiTools />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise-Grade Custom Development Solutions",
    description: "Delivering high-performance, scalable, and secure software solutions tailored to meet the specific needs of your business.",
    header: <CodeSnippet />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {  
    title: "Mobile App Excellence",
    description: "Build intuitive, high-performance apps for all platforms.",
    header: <Iphone15ProDemo />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {  
    title: "Next-Gen Web Development",
    description: "Building cutting-edge web solutions that drive engagement, improve performance, and scale with your business.",
    header: <WebBrowserWidget />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Legacy System Revitalization",
    description:
      "Transform outdated systems into modern, secure, and efficient solutions that keep you ahead of the curve.",
    header: <CompareDemo />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Empowering IoT Solutions",
    description: "Build smart, scalable, and secure IoT ecosystems.",
    header: <IotWidget />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
