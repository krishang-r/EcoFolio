"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartCustom({ completed, total }) {
  const remaining = total - completed;

  const data = [
    { name: "Completed", value: completed, color: "#4CAF50" }, // Green
    { name: "Remaining", value: remaining, color: "#D3D3D3" }, // Yellow
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
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
