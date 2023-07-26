

const generateCircles = () => {
  // Sample data for circle positions
  const circleData = [
    { x: 20 },
    { x: 60 },
    { x: 100 },
    { x: 140 },
    { x: 180 },
    { x: 220 },
    { x: 260 },
    { x: 300 },
  ];

  // Set up the SVG element
  const svg = d3.select("svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  // Create and append circles
  svg.selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", height / 2) // Centers the circles vertically
    .attr("r", 10)
    .attr("fill", "steelblue");
}

export default generateCircles;
