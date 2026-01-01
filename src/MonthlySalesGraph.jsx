"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "jan", sales: 168 },
  { name: "Fab", sales: 385 },
  { name: "Mar", sales: 201 },
  { name: "Apr", sales: 298 },
  { name: "May", sales: 187 },
  { name: "Jun", sales: 195 },
  { name: "Jul", sales: 291 },
  { name: "Aug", sales: 110 },
  { name: "Sep", sales: 215 },
  { name: "Oct", sales: 390 },
  { name: "Nov", sales: 280 },
  { name: "Dec", sales: 112 },
  
];

export default function AnalyticsChart() {
  return (
    <div className="w-full h-40 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis ticks={[0, 100, 200, 300, 400]} />
          <Tooltip />
          <Bar
            dataKey="sales"
            radius={[10, 10, 0, 0]}
            fill="#4F46E5"
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
