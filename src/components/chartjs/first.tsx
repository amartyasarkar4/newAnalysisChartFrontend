import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./alltypes/pie";
import MultiLineChart from "./alltypes/Line";
import RegionTopestle from "./diffAnalysis/regionTopestle";
import SectorWaitage from "./diffAnalysis/sectorWaitage";
import SectorToAvgrelevance from "./diffAnalysis/sectorToAvgrelevance";
import SectorTolikelihood from "./diffAnalysis/sectorTolikelihood";
import PestleTolikelihood from "./diffAnalysis/pestleTolikelihood";
import PestleToAvgrelevanceIntensity from "./diffAnalysis/pestleToAvgrelevanceintensity";
import DateWisePublishedCount from "./diffAnalysis/dateWisePublishedCount";
export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 466300,
    userLost: 234,
  },
];

// import "./styles.css";

Chart.register(CategoryScale);

export default function ChartsAll() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      {/* <PieChart chartData={chartData} /> */}
      <RegionTopestle />
      <div className="flex">
        <div className="w-1/2 shadow-xl mt-8 p-4">
          <SectorWaitage />
        </div>
        <div className="w-1/2 m-auto shadow-xl  p-4 mt-8">
          <SectorTolikelihood />
        </div>
      </div>
      <div className="flex w-full shadow-xl p-4">
        <SectorToAvgrelevance />
      </div>
      <div className="flex">
        <div className="w-1/2 shadow-xl mt-8 p-4">
          <PestleTolikelihood />
        </div>
        <div className="w-1/2 m-auto shadow-xl  p-4 mt-8">
          <PestleToAvgrelevanceIntensity />
        </div>
      </div>
      <div className="flex w-full shadow-xl p-4">
        <DateWisePublishedCount />
      </div>
    </div>
  );
}
