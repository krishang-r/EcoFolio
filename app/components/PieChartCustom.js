"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartCustoms({ completed, total }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents rendering on SSR

  const remaining = total - completed;
  const data = [
    { name: "Completed", value: completed, color: "#4CAF50" },
    { name: "Remaining", value: remaining, color: "#FFCE56" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <PieChart width={200} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={50}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
