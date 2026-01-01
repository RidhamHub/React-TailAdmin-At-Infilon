import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const EcommerceMonthlySalesChart = () => {
  // Use state for the data (series)
  const [series] = useState([75.55]);

  // Use state or useMemo for options to ensure stability
  const [options] = useState({
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
      
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: "80%", // Increasing this number makes the front bar thinner
        },
         
        track: {
          background: "#e7e7e7",
          strokeWidth: "50%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#444",
            opacity: 0.1, // Reduced opacity for a modern 2025 look
            blur: 2,
          },
          
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
        
        colorStops: [
          {
            offset: 0,
            color: "#4361ee",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#4cc9f0",
            opacity: 1,
          },
        ],
      },
    },
    labels: ["Average Results"],
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "-20px" }}>
        <h4 style={{ fontFamily: "sans-serif", color: "#666" }}>
          Monthly Sales Goal
        </h4>
      </div>
    </div>
  );
};

export default EcommerceMonthlySalesChart;
