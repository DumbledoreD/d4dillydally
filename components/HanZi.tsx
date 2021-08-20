// Ref: https://blog.csdn.net/cg1985cg/article/details/113062426
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HanZi = ({
  children,
  containerClass,
}: {
  children: string;
  containerClass: string;
}): JSX.Element => {
  const svgRef = useRef(null);

  const width = 210,
    height = 60,
    color = "white",
    stroke = "#c41b14",
    strokeWidth = 3,
    left = 55,
    top = 5,
    size = 50,
    offset = 7;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    //内横线
    svg
      .selectAll("line.inner-horizontal")
      .data(children)
      .enter()
      .append("line")
      .classed("inner-horizontal", true)
      .attr("x1", (d, i) => left + (i - 1) * size)
      .attr("y1", top + size / 2)
      .attr("x2", (d, i) => left + size + (i - 1) * size)
      .attr("y2", top + size / 2)
      .attr("stroke", stroke)
      .attr("stroke-width", 1);

    //内竖线
    svg
      .selectAll("line.inner-vertical")
      .data(children)
      .enter()
      .append("line")
      .classed("inner-vertical", true)
      .attr("x1", (d, i) => left + size / 2 + (i - 1) * size)
      .attr("y1", top)
      .attr("x2", (d, i) => left + size / 2 + (i - 1) * size)
      .attr("y2", top + size)
      .attr("stroke", stroke)
      .attr("stroke-width", 1);

    //内斜线1
    svg
      .selectAll("line.inner-dashed1")
      .data(children)
      .enter()
      .append("line")
      .classed("inner-dashed1", true)
      .attr("x1", (d, i) => left + (i - 1) * size)
      .attr("y1", top)
      .attr("x2", (d, i) => left + size + (i - 1) * size)
      .attr("y2", top + size)
      .attr("stroke", stroke)
      .attr("stroke-dasharray", "5,5")
      .attr("stroke-width", 1);

    //内斜线2
    svg
      .selectAll("line.inner-dashed2")
      .data(children)
      .enter()
      .append("line")
      .classed("inner-dashed2", true)
      .attr("x1", (d, i) => left + (i - 1) * size)
      .attr("y1", top + size)
      .attr("x2", (d, i) => left + size + (i - 1) * size)
      .attr("y2", top)
      .attr("stroke", stroke)
      .attr("stroke-dasharray", "5,5")
      .attr("stroke-width", 1);

    //外框线
    svg
      .selectAll("rect.frame")
      .data(children)
      .enter()
      .append("rect")
      .classed("frame", true)
      .attr("fill", "transparent")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("x", (d, i) => left + (i - 1) * size)
      .attr("y", top)
      .attr("width", size)
      .attr("height", size);

    //汉字
    svg
      .selectAll("text.chars")
      .data(children)
      .enter()
      .append("text")
      .classed("chars", true)
      .attr("x", (d, i) => left + (i - 1) * size)
      .attr("y", top + size - offset)
      .style("font-size", `${size}px`)
      .style("font-family", "Kaiti")
      .attr("fill", color)
      .text((d) => d);
  }, [children]);

  return (
    <div className={containerClass}>
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
};

export default HanZi;
