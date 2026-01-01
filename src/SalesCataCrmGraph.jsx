import React, { useState } from "react";
// Make sure you have the react-apexcharts package installed: npm install react-apexcharts apexcharts
import ReactApexChart from "react-apexcharts";

const SalesCataCrmGraph = () => {
  const [state, setState] = useState({
    series: [44, 55, 13],
    options: {
      chart: {
        
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height:230,
      },
    },
  });

  return (
    <div>
      <div>
        <div class="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="donut"
              width={380}
            />
          </div>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

// Remove the standalone ReactDOM.render for standard React applications.
// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexChart />, domContainer);

export default SalesCataCrmGraph;
