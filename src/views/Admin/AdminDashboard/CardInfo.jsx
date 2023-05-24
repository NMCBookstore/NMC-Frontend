import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useStyles from "./styles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { CardActionArea, Stack } from "@mui/material";
import {
  useGetRevenueDaysQuery,
  useGetRevenueMonthsQuery,
  useGetRevenueQuartersQuery,
  useGetRevenueYearsQuery
} from "../../../services/revenueAPis";
import { useEffect } from "react";

const currencyExchange = (num) => {
  return parseFloat(num).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};


export default function CardInfo(props) {
  const { data: revenueDays, isFetching: isDayFetching } = useGetRevenueDaysQuery()
  const { data: revenueMonths, isFetching: isMonthFetching } = useGetRevenueMonthsQuery()
  const { data: revenueQuarters, isFetching: isQuarterFetching } = useGetRevenueQuartersQuery()
  const { data: revenueYears, isFetching: isYearFetching } = useGetRevenueYearsQuery()
  const classes = useStyles();

  useEffect(() => {
    props.setRevenueDaysInfo({ name: "days", revenue: revenueDays })
    props.setRevenueMonthsInfo({ name: "months", revenue: revenueMonths })
    props.setRevenueQuartersInfo({ name: "quarters", revenue: revenueQuarters })
    props.setRevenueYearsInfo({ name: "years", revenue: revenueYears })
  }, [isDayFetching,
    isMonthFetching,
    isQuarterFetching,
    isYearFetching])


  const cardRevenue = [
    {
      id: 0,
      title: "Day",
      name: "days",
      revenue: revenueDays,
      revenueInfo: props.revenueDaysInfo,
      setRevenueInfo: function (item) {
        props.setRevenueDaysInfo(item)
      },
    },
    {
      id: 1,
      title: "Month",
      name: "months",
      revenue: revenueMonths,
      revenueInfo: props.revenueMonthsInfo,
      setRevenueInfo: function (item) {
        props.setRevenueMonthsInfo(item)
      },
    },
    {
      id: 2,
      title: "Quarter",
      name: "quarters",
      revenue: revenueQuarters,
      revenueInfo: props.revenueQuartersInfo,
      setRevenueInfo: function (item) {
        props.setRevenueQuartersInfo(item)
      },
    },
    {
      id: 3,
      title: "Year",
      name: "years",
      revenue: revenueYears,
      revenueInfo: props.revenueYearsInfo,
      setRevenueInfo: function (item) {
        props.setRevenueYearsInfo(item)
      },
    },
  ]

  return (
    <Stack>
      <Typography
        level="h3"
        fontWeight="lg"
        mt={{ xs: 1, sm: 1 }}
        marginLeft="12"
        mb={2}
      >
        <MonetizationOnIcon />
        &nbsp;Revenue
      </Typography>
      <Grid container spacing={2}>
        {cardRevenue.map((item, index) => (
          <Grid spacing={2} xs={12} sm={6} key={item.id}>
            <CardActionArea
              onClick={() => {
                item.setRevenueInfo({ name: item.name, revenue: item.revenue })
                props.setRevenueInfo({ name: item.name, revenue: item.revenue })
              }}
            >
              <Card
                variant="outlined"
                className={classes.card}
              >
                <CardContent>
                  <Typography
                    level="h5"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: 1, sm: 1 }}
                    marginLeft="12"
                  >
                    {item.title} {item.revenueInfo?.revenue &&
                      item.revenueInfo.revenue[item.revenueInfo.revenue.length - 1].time_revenue}
                  </Typography>
                  <Stack ml={2}>
                    <Typography
                      level="subtile1"
                      fontWeight="lg"
                      textColor="#fff"
                      mt={{ xs: 1, sm: 1 }}
                    >
                      SUM: {item.revenueInfo?.revenue ?
                        currencyExchange(item.revenueInfo.revenue[item.revenueInfo.revenue.length - 1].sum_revenue) :
                        currencyExchange(0)}
                    </Typography>
                    <Typography
                      level="subtile1"
                      fontWeight="lg"
                      textColor="#fff"
                      mt={{ xs: 1, sm: 1 }}
                    >
                      AVG: {item.revenueInfo?.revenue ?
                        currencyExchange(item.revenueInfo.revenue[item.revenueInfo.revenue.length - 1].avg_revenue):
                        currencyExchange(0)}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Stack >
  );
}
