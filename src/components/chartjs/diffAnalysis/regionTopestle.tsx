import React, { useState } from "react";
import { getRandomColor } from "../common/useCommon";
import MultiLineChart from "../alltypes/Line";

const RegionTopestle = () => {
  const [dataDynamic, setData] = useState<any[]>([]);

  const [pestle, setPestles] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsanalysischartbackend-1.onrender.com/api/v1/amartya/region_to_pestle"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        console.log("jkjkjf", json);
        setData(json.mv);
        setPestles(json.allPestlesmap0);
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
    labels: pestle.map((each) => each._id).sort(),

    datasets:
      dataDynamic?.map((each) => {
        return {
          label: each._id == "" ? "Not Specified" : each._id,
          data: subPestleFormat(each?.subPestles),
          fill: false,
          color: getRandomColor(),
        };
      }) || [],
  };

  return (
    <div>
      <h2>Region Specific Pestle wise distribution</h2>
      <MultiLineChart data={data} minWidth={"800px"} minHeight={"500px"} />
    </div>
  );
};

export default RegionTopestle;
