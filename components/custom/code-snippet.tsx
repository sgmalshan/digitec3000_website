"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

// dummy code block to show in the UI
const code = `const filteredPoints = points.filter(
  (v, i, a) =>
    a.findIndex((v2) =>
      ["lat", "lng"].every(
        (k) => 
        v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
      )
    ) === i
);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
`;

export function CodeSnippet() {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="util.js"
        highlightLines={[2, 5]}
        code={code}
      />
    </div>
  );
}

const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};


