// import { Pie } from "react-chartjs-2";
// import React from "react";

// const PieChartComponent: React.FC<{ data: any }> = ({ data }) => {
//   return (
//     <div>
//       <h2>Pie Chart</h2>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default PieChartComponent;

import { Pie } from "react-chartjs-2";
import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChartComponent: React.FC<{
  data: any;
  minWidth: string;
  minHeight: string;
}> = ({ data, minHeight, minWidth }) => {
  return (
    <div>
      {/* <h2>Pie Chart</h2> */}
      <Pie
        style={{
          minWidth: `${minWidth}`,
          minHeight: `${minHeight}`,
          maxHeight: "600px",
          maxWidth: "450px",
          margin: "auto",
        }}
        data={data}
        options={{
          // cutoutPercentage: 50, // Adjust the cutout percentage to make the chart smaller or larger
          plugins: {
            datalabels: {
              display: true,
              color: "white",
              font: {
                size: 14,
              },
              formatter: (value: any, context: any) => {
                return (
                  context.chart.data.labels[context.dataIndex] + ": " + value
                ); // Display label and value
              },
              // Adjust position as needed
              anchor: "start",
              align: "end",
              offset: 5,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChartComponent;
