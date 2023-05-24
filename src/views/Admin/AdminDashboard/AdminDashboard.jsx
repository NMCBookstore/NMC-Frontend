import React, { useState, useEffect } from "react";
import ChartDashboard from "./ChartDashboard";
import Grid from "@mui/material/Unstable_Grid2";
import CardInfo from "./CardInfo";
import { useGetRevenueDaysQuery } from "../../../services/revenueAPis";

export default function AdminDashboard() {
  const { data, isFetching } = useGetRevenueDaysQuery()
  const [revenueDaysInfo, setRevenueDaysInfo] = useState()
  const [revenueMonthsInfo, setRevenueMonthsInfo] = useState()
  const [revenueQuartersInfo, setRevenueQuartersInfo] = useState()
  const [revenueYearsInfo, setRevenueYearsInfo] = useState()
  const [revenueInfo, setRevenueInfo] = useState()

  useEffect(() => {
    setRevenueInfo({name: "days",revenue: data})
  }, [isFetching])


  return (
    <Grid container my={2} spacing={2}>
      <Grid spacing={2} xs={12} sm={8}>
        <ChartDashboard
          revenueInfo={revenueInfo}
        />
      </Grid>
      <Grid spacing={2} xs={12} sm={4}>
        <CardInfo
          revenueDaysInfo={revenueDaysInfo}
          revenueMonthsInfo={revenueMonthsInfo}
          revenueQuartersInfo={revenueQuartersInfo}
          revenueYearsInfo={revenueYearsInfo}
          setRevenueDaysInfo={setRevenueDaysInfo}
          setRevenueMonthsInfo={setRevenueMonthsInfo}
          setRevenueQuartersInfo={setRevenueQuartersInfo}
          setRevenueYearsInfo={setRevenueYearsInfo}
          setRevenueInfo={setRevenueInfo}
        />
      </Grid>
    </Grid>
  );
}
