"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from "recharts";

// Sample data
const data = [
  { year: "2018", CarbonEmission: 23000 },
  { year: "2019", CarbonEmission: 27000 },
  { year: "2020", CarbonEmission: 20000 },
  { year: "2021", CarbonEmission: 26000 },
  { year: "2022", CarbonEmission: 24000 },
  { year: "2023", CarbonEmission: 28000 },
];

const CarbonCreditsChart = () => {
  const limit = 25000;

  return (
    <div className="w-[] h-[500px] flex flex-col items-center p-4 rounded-lg">
      <h2 className="text-xl text-green-800 font-bold mb-4">Carbon Emission Per Year</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          {/* Reference Line for Carbon Emission Limit */}
          <ReferenceLine y={limit} stroke="black" strokeDasharray="4 4" label="Limit (25,000 tons)" />

          {/* Bars for carbon credits */}
          <Bar
            dataKey="CarbonEmission"
            fill="green"
            barSize={40}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonCreditsChart;
