import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  const labels = ["january", "february", "february", "september"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "my first dataset",
        backgroundColor: "rgb(170,155,255)",
        borderColor: "rgb(225,200,209)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="bg-white border border-secondary">
      <Line data={data}></Line>
    </div>
  );
};

export default LineChart;
