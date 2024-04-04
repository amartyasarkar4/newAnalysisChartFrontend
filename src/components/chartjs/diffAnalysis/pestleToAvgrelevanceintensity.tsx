import React, { useState } from "react";
import RadarChart from "../alltypes/RadarChart";

const PestleToAvgrelevanceIntensity = () => {
  const [dataDynamic, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsanalysischartbackend-1.onrender.com/api/v1/amartya/pestle_to_avgRelevanceAndIntensity"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        console.log("jkjkjf", json);
        setData(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const subPestleFormat = (data: any[]) => {
    // data.filter((pdt) => pdt.pestle != "");
    data.sort((a, b) => a.pestle.localeCompare(b.pestle));
    let myObj: any = {};
    data.map((each) => {
      myObj[each.pestle] = each.count;
    });
    return myObj;
  };

  const chartData = {
    labels: dataDynamic.map((each) => each._id),
    datasets: [
      {
        label: "SectorWiseAverageRelevance",
        data: dataDynamic.map((each) => each.averageRelevance),
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },

      {
        label: "SectorWiseAverageIntensity",
        data: dataDynamic.map((each) => each.averageIntensity),
        fill: true,
        backgroundColor: "rgba(54, 2, 235, 0.2)",
        borderColor: "rgba(54, 12, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full">
      <RadarChart
        chartData={chartData}
        minWidth={"400px"}
        minHeight={"500px"}
      />
    </div>
  );
};

export default PestleToAvgrelevanceIntensity;
