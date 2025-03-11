import React from "react";
import MobileDetail from "../animata/widgets/mobile-detail";
import ScoreBoard from "../animata/widgets/score-board";

export default function IotWidget() {
  return (
    <div className="flex flex-col md:felx-row xl:flex-col items-center justify-center gap-4">
      <MobileDetail />
      <ScoreBoard
  items={[
    {
      className: 'rounded-md bg-green-500',
      label: 'A',
      progress: 34
    },
    {
      className: 'rounded-md bg-red-500',
      label: 'B',
      progress: 14
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'C',
      progress: 34
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'D',
      progress: 70
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'E',
      progress: 52
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'F',
      progress: 30
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'G',
      progress: 37
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'H',
      progress: 72
    },
    {
      className: 'rounded-md bg-green-500',
      label: 'I',
      progress: 42
    }
  ]}
 />
    </div>
  );
}
