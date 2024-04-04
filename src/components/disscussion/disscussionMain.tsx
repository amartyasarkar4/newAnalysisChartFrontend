"use client";

import React, { useState } from "react";
// import GridItems from "../gridComponents/gridItems";
import Image from "next/image";
import * as d3 from "d3";
import LinePlot from "../graps/myGraphs";
import AreaChart from "../graps/areaChart";
import MAreaChart from "../graps/multiAreachart";
import MTAreaChart from "../graps/multiAreaWithTooltip";
import ChartsAll from "../chartjs/first";

const DisscussionMain = () => {
  const pagetitle = "Products";

  const [data, setData] = useState([2, 4, 6, 7]);

  // function onMouseMove(event) {
  //   const [x, y] = d3.pointer(event);
  //   setData(data.slice(-200).concat(Math.atan2(x, y)));
  // }

  const datasets = [
    {
      data: [
        { date: "28 dec", value: 6 },
        { date: "4 jan", value: 67 },
        { date: "23 jan", value: 27 },
        { date: "14 feb", value: 77 },
        { date: "42 jan", value: 167 },
        { date: "23 march", value: 27 },
        { date: "19 feb", value: 17 },
      ],
      color: "steelblue",
    },
    {
      data: [
        { date: "28 dec", value: 26 },
        { date: "4 jan", value: 87 },
        { date: "23 jan", value: 17 },
        { date: "14 feb", value: 77 },
        { date: "42 jan", value: 17 },
        { date: "23 march", value: 37 },
        { date: "19 feb", value: 19 },
      ],
      color: "orange",
    },
    {
      data: [
        { date: "28 dec", value: 146 },
        { date: "4 jan", value: 167 },
        { date: "23 jan", value: 22 },
        { date: "14 feb", value: 66 },
        { date: "42 jan", value: 12 },
        { date: "23 march", value: 127 },
        { date: "19 feb", value: 117 },
      ],
      color: "green",
    },
  ];

  return (
    <div className=" h-full w-full">
      <div className="flex flex-col sm:flex-row justify-between">
        <h2
          className="text-md text-zinc-900 font-semibold ml-4 bg-slate-50 py-1 bg-slate-50"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 99,
            marginBottom: "12px",
          }}
        >
          {/* {pagetitle.toUpperCase()} */}
          {pagetitle}
        </h2>
        <div
          style={{ fontSize: "10px" }}
          className="flex items-center justify-between px-2"
        >
          <div className="flex  w-48 h-6 items-center rounded-xl px-2 border mr-2">
            <Image
              src="/search.svg"
              alt="down"
              width={500}
              height={500}
              style={{
                width: "14px",
                height: "14px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            />
            {/* <p style={{ paddingTop: "2px" }}>All brands</p> */}
            <input type="text" placeholder="Search for..." />
          </div>
          <div className="flex">
            <div>
              <Image
                src="/chat-conversation.svg"
                alt="down"
                width={500}
                height={500}
                style={{
                  width: "18px",
                  height: "18px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <div className="hover:bg-zinc-200 ml-2 items-center">
              <Image
                src="/settings.svg"
                alt="down"
                width={500}
                height={500}
                style={{
                  width: "18px",
                  height: "18px",
                  marginLeft: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <GridItems /> */}

      {/* <div>
        <LinePlot data={data} />
      </div>

      <div>
        <AreaChart
          data={[
            { date: "28 dec", value: 6 },
            { date: "4 jan", value: 67 },
            { date: "23 jan", value: 27 },
            { date: "14 feb", value: 77 },
            { date: "42 jan", value: 167 },
            { date: "23 march", value: 27 },
            { date: "19 feb", value: 17 },
          ]}
          width={760}
          height={450}
        />
      </div>
      <div>
        <MAreaChart datasets={datasets} width={780} height={360} />
      </div>
      <div>
        <MTAreaChart datasets={datasets} width={780} height={360} />
      </div> */}
      <div>
        <ChartsAll />
      </div>
    </div>
  );
};

export default DisscussionMain;
