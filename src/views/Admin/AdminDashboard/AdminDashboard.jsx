import React from "react";
import ChartDashboard from "./ChartDashboard";
import Grid from "@mui/material/Unstable_Grid2";
import CardInfo from "./CardInfo";

export default function AdminDashboard() {
  return (
    <Grid container my={2} spacing={2}>
      <Grid spacing={2} xs={12} sm={8}>
        <ChartDashboard />
      </Grid>
      <Grid spacing={2} xs={12} sm={4}>
        <CardInfo />
      </Grid>
    </Grid>
  );
}
