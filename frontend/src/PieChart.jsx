import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

export const CustomPieChart = () => {
  const data = [
    { name: "Percentage incomplete", value: 90 },
    { name: "Percentage complete", value: 10 }
  ];

  const COLORS = ["#8cf38c", "#095309"]; // Define an array of colors for the segments

  return (
    <div className="pie-chart">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};
