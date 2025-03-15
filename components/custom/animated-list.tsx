"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment Successful",
    description: "Your subscription is now active.",
    time: "15m ago",
    icon: "💳",
    color: "#00C9A7",
  },
  {
    name: "New User Joined",
    description: "A new member has signed up.",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Message Received",
    description: "You have a new message.",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "System Update",
    description: "Your app is now up to date.",
    time: "2m ago",
    icon: "🔄",
    color: "#1E86FF",
  },
  {
    name: "New Feature Released",
    description: "Explore the latest updates in the app.",
    time: "30m ago",
    icon: "🚀",
    color: "#FF5733",
  },
  {
    name: "Friend Request",
    description: "John Doe sent you a request.",
    time: "20m ago",
    icon: "🤝",
    color: "#8E44AD",
  },
  {
    name: "File Uploaded",
    description: "Your document has been successfully uploaded.",
    time: "8m ago",
    icon: "📂",
    color: "#27AE60",
  },
  {
    name: "Meeting Reminder",
    description: "Team meeting starts in 10 minutes.",
    time: "5m ago",
    icon: "📅",
    color: "#F39C12",
  },
  {
    name: "Achievement Unlocked",
    description: "You've reached a new milestone!",
    time: "1m ago",
    icon: "🏆",
    color: "#3498DB",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden p-2 pt-14",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
