import React from "react";
import Chart from "react-apexcharts";
import LineChart from "reactochart/LineChart";
import { Line } from "react-chartjs-2";
import "reactochart/styles.css";
import { Card } from "@mui/material";

const chartOptions = {
  series: [
    {
      name: "Online customer",
      data: [50, 69, 79, 54, 91, 88, 84, 41, 43, 45, 78, 57],
    },
    {
      name: "Store customer",
      data: [77, 50, 42, 81, 82, 95, 48, 70, 99, 84, 96, 82],
    },
    {
      name: "Total Revenue",
      data: [57, 50, 54, 99, 59, 63, 51, 89, 86, 82, 86, 46],
    },
  ],
  options: {
    color: ["#6a04c", "#2980b9", "#DC3545"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr ",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oc",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "bottom",
    },
    grid: {
      show: false,
    },
  },
};

export default function ChartDashboard() {
  return (
    <Card sx={{ minHeight: 350 }}>
      <Chart
        options={{
          ...chartOptions.options,
        }}
        series={chartOptions.series}
        type="line"
        height="100%"
      />
    </Card>
  );
}
