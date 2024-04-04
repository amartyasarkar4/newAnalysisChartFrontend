import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart: React.FC<{
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
    <Radar
      style={{
        minWidth: `${minWidth}`,
        minHeight: `${minHeight}`,
        maxHeight: "600px",
        maxWidth: "450px",
        margin: "auto",
      }}
      data={chartData}
      options={options}
    />
  );
};

export default RadarChart;
