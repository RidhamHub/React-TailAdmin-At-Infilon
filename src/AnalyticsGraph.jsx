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
  { name: 1, sales: 168 },
  { name: 2, sales: 385 },
  { name: 3, sales: 201 },
  { name: 4, sales: 298 },
  { name: 5, sales: 187 },
  { name: 6, sales: 195 },
  { name: 7, sales: 291 },
  { name: 8, sales: 110 },
  { name: 9, sales: 215 },
  { name: 10, sales: 390 },
  { name: 11, sales: 280 },
  { name: 12, sales: 112 },
  { name: 13, sales: 123 },
  { name: 14, sales: 212 },
  { name: 15, sales: 270 },
  { name: 16, sales: 190 },
  { name: 17, sales: 210 },
  { name: 18, sales: 115 },
  { name: 19, sales: 90 },
  { name: 20, sales: 380 },
  { name: 21, sales: 112 },
  { name: 22, sales: 223 },
  { name: 23, sales: 292 },
  { name: 24, sales: 170 },
  { name: 25, sales: 290 },
  { name: 26, sales: 110 },
  { name: 27, sales: 115 },
  { name: 28, sales: 290 },
  { name: 29, sales: 380 },
  { name: 30, sales: 312 },

];


function AnalyticsGraph() {
    return (
      <div className=" h-40 ">
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

export default AnalyticsGraph;
