import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface AreaChartProps {
  datasets: { data: { date: string; value: number }[]; color: string }[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const MAreaChart: React.FC<AreaChartProps> = ({
  datasets,
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
      .domain(datasets[0].data.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          datasets.flatMap((d) => d.data),
          (d) => d.value
        )!,
      ])
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

    const areaGenerator = d3
      .area<{ date: string; value: number }>()
      .x((d) => x(d.date)! + x.bandwidth() / 2)
      .y0(y(0))
      .y1((d) => y(d.value));

    datasets.forEach((dataset) => {
      svg
        .append("path")
        .datum(dataset.data)
        .attr("fill", dataset.color)
        .attr("d", areaGenerator)
        .attr("fill-opacity", 0.2) // Set opacity for filled area
        .attr("stroke", dataset.color) // Add stroke to differentiate areas
        .attr("stroke-width", 1); // Adjust stroke width if necessary
    });

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [datasets, width, height, margin]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default MAreaChart;
