import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const seriesData = {
  monthDataSeries1: {
    // Note: Ensure price array length matches the dates used
    prices: [8101.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5],
    dates: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
};

const LiveVisitorsgaph = () => {
  const [chartData] = useState({
    series: [
      {
        name: "sales",
        data: seriesData.monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
         height: 150,
        zoom: { enabled: false },
        toolbar: { show: false }, // Optional: hides the download menu
      },
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      xaxis: {
        type: "category", // Changed from datetime to match your "Jan", "Feb" strings
        labels: {
          show: false, // Hides X-axis labels (Jan, Feb, etc.)
        },
        axisBorder: { show: false }, // Optional: hides the bottom line
        axisTicks: { show: false }, // Optional: hides the small tick marks
      },
      yaxis: {
        labels: {
          show: false, // Hides Y-axis labels (Prices)
        },
      },
      grid: {
        show: false, // Optional: removes background grid lines for a cleaner look
      },
      legend: {
        show: false, // Optional: hides the series legend
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default LiveVisitorsgaph;
