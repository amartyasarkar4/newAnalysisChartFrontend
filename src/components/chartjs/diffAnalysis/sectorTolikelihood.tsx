import React, { useState } from "react";
import BarChart from "../alltypes/BarChart";
import { getRandomColor } from "../common/useCommon";
// ExamplePage.js

const SectorTolikelihood = () => {
  const [dataDynamic, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsanalysischartbackend-1.onrender.com/api/v1/amartya/sector_to_avgLikelihood"
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

  // Sample data
  const data = {
    labels: dataDynamic.map((each) => each._id),
    datasets: [
      {
        axis: "y",
        label: "Setor Wise Avg. Likelihood",
        data: dataDynamic.map((each) => each.averagelikelihood),
        backgroundColor: dataDynamic.map((each, i) => getRandomColor()),
        borderColor: dataDynamic.map((each, i) => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="mt-8 text-md font-semibold">
        SECTOR WISE AVERAGE LIKELIHOOD
      </h1>
      <BarChart data={data} minWidth={"400px"} minHeight={"500px"} />
    </div>
  );
};

export default SectorTolikelihood;
