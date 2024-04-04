import React from "react";
import { Line } from "react-chartjs-2";

interface AreaChartProps {
  chartData: any;
}

const AreaChart: React.FC<{
  chartData: any;
  minWidth: string;
  minHeight: string;
}> = ({ chartData, minHeight, minWidth }) => {
  const options = {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Adjust the maximum number of ticks
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Line
      style={{
        minWidth: `${minWidth}`,
        minHeight: `${minHeight}`,
        maxHeight: "600px",
        maxWidth: "900px",
        margin: "auto",
      }}
      data={chartData}
      options={options}
    />
  );
};

export default AreaChart;
