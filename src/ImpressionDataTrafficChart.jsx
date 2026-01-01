import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ImpressionDataTrafficChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Sales",
        // Replaced double comma with 'null' for missing data
        data: [180, 190, 170, 160,  175, 165, 170, 205, 230, 210, 240 , 235],
      },
      {
        name: "Revenue",
        data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: { show: false },
      },
      
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        // Use 'category' for string labels like "Jan", "Feb"
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}`, // Optional: Add currency formatting
        },
      },
    },
  });

  return (
    <div id="chart" style={{ backgroundColor: "#fff", padding: "20px" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ImpressionDataTrafficChart;
