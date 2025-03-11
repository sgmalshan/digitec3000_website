import BarChart from "../graphs/bar-chart";

interface ScoreBoardProps {
  items: {
    progress: number;
    label: string;
    className?: string;
    containerClassName?: string;
  }[];
}

export const testScoreBoardProps: ScoreBoardProps = {
  items: [
    {
      label: "Device A",
      progress: 34,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device B",
      progress: 14,
      className: "rounded-md bg-red-500",
    },
    {
      label: "Device C",
      progress: 34,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device D",
      progress: 70,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device E",
      progress: 52,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device F",
      progress: 30,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device G",
      progress: 37,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device H",
      progress: 72,
      className: "rounded-md bg-green-500",
    },
    {
      label: "Device I",
      progress: 42,
      className: "rounded-md bg-green-500",
    },
  ],
};

export default function ScoreBoard({
  items = testScoreBoardProps.items,
}: {
  items: {
    progress: number;
    label: string;
    className?: string;
    containerClassName?: string;
  }[];
}) {
  return (
    <div className="group flex size-64 flex-col rounded-3xl border bg-background p-4 shadow-sm shadow-black/15 transition-all duration-700 dark:border-zinc-700">
      <p className="text-base text-foreground">
        System Status:
        <span className="font-semibold text-green-700 dark:text-green-500"> Optimal </span>
      </p>
      <div className="w-full flex-1">
        <BarChart height={90} items={items} />
      </div>
      <h5 className="mt-4 text-sm text-muted-foreground">Overall Device Health</h5>
      <p className="font-semibold text-foreground">
        80% <span className="text-sm text-muted-foreground">(Efficiency, performance)</span>
      </p>
    </div>
  );
}
