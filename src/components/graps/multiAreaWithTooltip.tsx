import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

interface AreaChartProps {
  datasets: { data: { date: string; value: number }[]; color: string }[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const MTAreaChart: React.FC<AreaChartProps> = ({
  datasets,
  width,
  height,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    value: string;
  } | null>(null);

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

    datasets.forEach((dataset, index) => {
      svg
        .append("path")
        .datum(dataset.data)
        .attr("fill", dataset.color)
        .attr("fill-opacity", 0.5) // Set opacity for filled area
        .attr("d", areaGenerator)
        .attr("stroke", dataset.color) // Add stroke to differentiate areas
        .attr("stroke-width", 1) // Adjust stroke width if necessary
        .on("mousemove", (event, d) => {
          const mouseX = d3.pointer(event)[0];
          const mouseY = d3.pointer(event)[1];
          const index = Math.floor(mouseX);
          const value = dataset.data[index]?.value ?? "N/A";
          setTooltip({ x: mouseX, y: mouseY, value: value.toString() });
        })
        .on("mouseleave", () => {
          setTooltip(null);
        });
    });

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [datasets, width, height, margin]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {tooltip && (
        <text x={tooltip.x} y={tooltip.y} textAnchor="middle" fontSize="12px">
          {tooltip.value}
        </text>
      )}
    </svg>
  );
};

export default MTAreaChart;
