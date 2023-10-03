import React, { useState, useEffect } from "react";
import ChartDashboard from "./ChartDashboard";
import Grid from "@mui/material/Unstable_Grid2";
import CardInfo from "./CardInfo";
import { useGetRevenueDaysQuery } from "../../../services/revenueAPis";
import Static from "./Static";

export default function AdminDashboard() {
  const { data, isFetching } = useGetRevenueDaysQuery()
  const [revenueDaysInfo, setRevenueDaysInfo] = useState()
  const [revenueMonthsInfo, setRevenueMonthsInfo] = useState()
  const [revenueQuartersInfo, setRevenueQuartersInfo] = useState()
  const [revenueYearsInfo, setRevenueYearsInfo] = useState()
  const [revenueInfo, setRevenueInfo] = useState(null)

  useEffect(() => {
    setRevenueInfo({ name: "days", revenue: data })
  }, [isFetching])


  return (
    <>
      {revenueInfo?.revenue && revenueInfo?.revenue.length > 0 ?
        (<Grid container my={2} spacing={2}>
          <Grid item spacing={2} xs={12} sm={12}>
            <Static />
          </Grid>
          <Grid container item mt={5}>
            <Grid item spacing={2} xs={12} sm={8}>
              <ChartDashboard
                revenueInfo={revenueInfo}
              />
            </Grid>
            <Grid item mt={8} spacing={2} xs={12} sm={4}>
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
        </Grid>)
        : (
          <>No payment</>
        )}
    </>
  );
}
