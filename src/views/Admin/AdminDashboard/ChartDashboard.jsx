import React from "react";
import Chart from "react-apexcharts";
import "reactochart/styles.css";
import { Card, Stack, Typography } from "@mui/material";

export default function ChartDashboard({ revenueInfo }) {
  const chartSumOptions = {
    series: [
      {
        name: "Total Revenue",
        data: revenueInfo?.revenue && revenueInfo?.revenue.map(item => item.sum_revenue),
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
        categories: revenueInfo?.revenue && revenueInfo?.revenue.map(item => item.time_revenue),
      },
      legend: {
        position: "bottom",
      },
      grid: {
        show: true,
      },
    },
  };

  const chartAvgOptions = {
    series: [
      {
        name: "Total Revenue",
        data: revenueInfo?.revenue && revenueInfo?.revenue.map(item => item.avg_revenue),
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
        categories: revenueInfo?.revenue && revenueInfo?.revenue.map(item => item.time_revenue),
      },
      legend: {
        position: "bottom",
      },
      grid: {
        show: true,
      },
    },
  };

  return (
    <Stack spacing={3}>
      <Typography
        variant="h3"
      >
        Sum revenue {revenueInfo?.name}
      </Typography>
      <Card sx={{ minHeight: 400 }}>
        <Chart
          options={{
            ...chartSumOptions.options,
          }}
          series={chartSumOptions.series}
          type="line"
          height="100%"
        />
      </Card>
      <Typography
        variant="h3"
      >
        Average revenue {revenueInfo?.name}
      </Typography>
      <Card sx={{ minHeight: 400 }}>
        <Chart
          options={{
            ...chartAvgOptions.options,
          }}
          series={chartAvgOptions.series}
          type="line"
          height="100%"
        />
      </Card>
    </Stack>
  );
}
