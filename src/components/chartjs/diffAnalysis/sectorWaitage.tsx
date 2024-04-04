import React, { useState } from "react";
import PieChartComponent from "../alltypes/pie";
import { getRandomColor } from "../common/useCommon";

const SectorWaitage = () => {
  const [dataDynamic, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsanalysischartbackend-1.onrender.com/api/v1/amartya/hellosector"
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

  const data = {
    labels: dataDynamic.map((each) => each._id),
    datasets: [
      {
        label: "Sector Waitage",
        data: dataDynamic.map((each) => each.count),
        backgroundColor: dataDynamic.map((each) => getRandomColor()),
      },
    ],
  };

  //   const data = {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "Dataset 1",
  //         data: [12, 19, 3, 5, 2, 3], // Example data values
  //         backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
  //       },
  //     ],
  //   };

  return (
    <div className="">
      <h2 className="mt-8 text-md font-semibold">Sector wise Waitage</h2>
      <PieChartComponent data={data} minWidth={"400px"} minHeight={"500px"} />
    </div>
  );
};

export default SectorWaitage;
