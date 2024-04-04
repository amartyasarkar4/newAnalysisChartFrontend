import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const MultiLineChart: React.FC<{
  data: any;
  minWidth: string;
  minHeight: string;
}> = ({ data, minHeight, minWidth }) => {
  //   React.useEffect(() => {
  //     fetch("http://localhost:4000/api/v1/amartya/region_to_pestle").then(
  //       async (res) => {
  //         console.log("came res", res);
  //         if(res.status==200){
  //         console.log("came res", await res.json());
  //         }
  //         else{
  //             console.log("error,,,,,")
  //         }
  //       }
  //     ).catch(err){
  //         console.log("fetch error::",err);
  //     };
  //   }, []);

  // Sample data for demonstration
  const datastatic = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Dataset 2",
        data: [30, 20, 50, 40, 60, 70, 80],
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line
        style={{
          minWidth: `${minWidth}`,
          minHeight: `${minHeight}`,
          maxHeight: "600px",
          maxWidth: "900px",
          margin: "auto",
        }}
        data={data}
        options={{
          elements: {
            line: {
              tension: 0.4, // Adjust this value to control the curvature of the lines
            },
          },
        }}
      />
    </div>
  );
};

export default MultiLineChart;
