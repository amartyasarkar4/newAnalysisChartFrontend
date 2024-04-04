import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart: React.FC<{
  data: any;
  minWidth: string;
  minHeight: string;
}> = ({ data, minHeight, minWidth }) => {
  return (
    <div>
      <Bar
        style={{
          minWidth: `${minWidth}`,
          minHeight: `${minHeight}`,
          maxHeight: "600px",
          maxWidth: "450px",
          margin: "auto",
        }}
        data={data}
        options={{
          maintainAspectRatio: false,
          indexAxis: "y", // Display bars horizontally

          // Set the height of the chart
          //   height: height || 400, // Default height is 400 pixels
        }}
      />
    </div>
  );
};

export default BarChart;
