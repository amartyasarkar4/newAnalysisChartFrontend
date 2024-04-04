import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface AreaChartProps {
  data: { date: string; value: number }[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  width,
  height,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    // Remove existing elements
    svg.selectAll("*").remove();

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g: any) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3.axisBottom(x).tickValues(
          x.domain().filter(function (d, i) {
            return !(i % 2);
          })
        )
      );

    const yAxis = (g: any) =>
      g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

    const area = d3
      .area<{ date: string; value: number }>()
      .x((d) => x(d.date)! + x.bandwidth() / 2)
      .y0(y(0))
      .y1((d) => y(d.value));

    svg.append("path").datum(data).attr("fill", "steelblue").attr("d", area);

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [data, width, height, margin]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default AreaChart;
