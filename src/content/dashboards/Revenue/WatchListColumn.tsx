import {
  Card,
  Box,
  Typography,
  Avatar,
  Grid,
  alpha,
  useTheme,
  styled
} from '@mui/material';
import Label from 'src/components/Label';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import {
  useGetDayRevenueQuery,
  useGetMonthRevenueQuery,
  useGetQuarterRevenueQuery,
  useGetYearRevenueQuery
} from 'src/services/revenue/revenueAPI';
import { useEffect } from 'react';
import { format, parseISO, isValid } from 'date-fns';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

function WatchListColumn() {
  const theme = useTheme();

  const { data: dayRevenue, isFetching: dayRevenueFetching } =
    useGetDayRevenueQuery();
  const { data: monthRevenue, isFetching: monthRevenueFetching } =
    useGetMonthRevenueQuery();
  const { data: quarterRevenue, isFetching: quarterRevenueFetching } =
    useGetQuarterRevenueQuery();
  const { data: yearRevenue, isFetching: yearRevenueFetching } =
    useGetYearRevenueQuery();

  console.log('yearRevenue: ', yearRevenue);

  const combinedRevenue = [
    { type: 'daily', data: dayRevenue },
    { type: 'monthly', data: monthRevenue },
    { type: 'quarterly', data: quarterRevenue },
    { type: 'yearly', data: yearRevenue }
  ];

  const chartOptions: ApexOptions = {
    series: combinedRevenue.map((revenue) => ({
      name: revenue.type,
      data: revenue.data
        ?.map((item) => Number(item.sum_revenue).toFixed(2))
        .map(Number)
    })),

    chart: {
      background: 'transparent',
      toolbar: {
        show: true
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: true
      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: true
    },
    labels: combinedRevenue.flatMap((revenue) =>
      revenue.data?.map((item) => item.time_revenue)
    ),
    xaxis: {
      labels: {
        show: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: combinedRevenue.flatMap((revenue) =>
        revenue.data?.map((item) => item.time_revenue)
      )
    },
    yaxis: {
      show: false,
      tickAmount: 5
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Price: $';
          }
        }
      },
      marker: {
        show: true
      }
    },
    grid: {
      show: true
    }
  };
  const chart1Data = [
    {
      name: 'Day Revenue',
      data: dayRevenue?.map((item) => item.sum_revenue)
    }
  ];
  const chart2Data = [
    {
      name: 'Month Revenue',
      data: monthRevenue?.map((item) => item?.sum_revenue)
    }
  ];
  const chart3Data = [
    {
      name: 'Quarter Revenue',
      data: quarterRevenue?.map((item) => item?.sum_revenue)
    }
  ];
  const chart4Data = [
    {
      name: 'Year Revenue',
      data: yearRevenue?.map((item) => item?.sum_revenue)
    }
  ];

  const monthlyRevenue = combinedRevenue.find(
    (revenue) => revenue.type === 'monthly'
  );

  //Value of sum day revenue
  const dayRevenueSum =
    dayRevenue &&
    dayRevenue.length > 0 &&
    !isNaN(dayRevenue[dayRevenue.length - 1]?.sum_revenue)
      ? `${dayRevenue[dayRevenue.length - 1]?.sum_revenue}`
      : 'N/A';
  const previousDayRevenueSum =
    dayRevenue &&
    dayRevenue.length > 0 &&
    !isNaN(dayRevenue[dayRevenue.length - 2]?.sum_revenue)
      ? `${dayRevenue[dayRevenue.length - 2]?.sum_revenue}`
      : 'N/A';
  const amountDayDiffenrence =
    Number(dayRevenueSum) - Number(previousDayRevenueSum);

  const percentageDayDifference =
    ((Number(dayRevenueSum) - Number(previousDayRevenueSum)) /
      Number(previousDayRevenueSum)) *
    100;

  //Value of sum month revenue
  const monthRevenueSum =
    monthRevenue &&
    monthRevenue.length > 0 &&
    !isNaN(monthRevenue[monthRevenue.length - 1]?.sum_revenue)
      ? `${monthRevenue[monthRevenue.length - 1]?.sum_revenue}`
      : 'N/A';
  const previousMonthRevenueSum =
    monthRevenue &&
    monthRevenue.length > 0 &&
    !isNaN(monthRevenue[monthRevenue.length - 2]?.sum_revenue)
      ? `${monthRevenue[monthRevenue.length - 2]?.sum_revenue}`
      : 'N/A';
  const amountMonthDiffenrence =
    Number(monthRevenueSum) - Number(previousMonthRevenueSum);

  const percentageMonthDifference =
    ((Number(monthRevenueSum) - Number(previousMonthRevenueSum)) /
      Number(previousMonthRevenueSum)) *
    100;

  //Value of sum quarter revenue
  const quarterRevenueSum =
    quarterRevenue &&
    quarterRevenue.length > 0 &&
    !isNaN(quarterRevenue[quarterRevenue.length - 1]?.sum_revenue)
      ? `${quarterRevenue[quarterRevenue.length - 1]?.sum_revenue}`
      : 'N/A';
  const previousQuarterRevenueSum =
    quarterRevenue &&
    quarterRevenue.length > 0 &&
    !isNaN(quarterRevenue[quarterRevenue.length - 2]?.sum_revenue)
      ? `${quarterRevenue[quarterRevenue.length - 2]?.sum_revenue}`
      : 'N/A';
  const amountQuarterDiffenrence =
    Number(quarterRevenueSum) - Number(previousQuarterRevenueSum);

  const percentageQuarterDifference =
    ((Number(quarterRevenueSum) - Number(previousQuarterRevenueSum)) /
      Number(previousQuarterRevenueSum)) *
    100;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              {/* <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/static/images/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper> */}
              <Box>
                <Typography variant="h4" noWrap>
                  Day revenue
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Sum revenue of the day
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                ${Number(dayRevenueSum).toFixed(2)}
              </Typography>
              <Text color={percentageDayDifference < 0 ? 'error' : 'success'}>
                {percentageDayDifference < 0 ? '-' : '+'}
                <b>{percentageDayDifference.toFixed(2)}%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color={amountDayDiffenrence < 0 ? 'error' : 'success'}>
                {amountDayDiffenrence < 0 ? '-' : '+'}
                {amountDayDiffenrence.toFixed(2)}$
              </Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart1Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Month revenue
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Sum revenue of the month
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                ${Number(monthRevenueSum).toFixed(2)}
              </Typography>
              <Text color={percentageMonthDifference < 0 ? 'error' : 'success'}>
                {percentageMonthDifference < 0 ? '-' : '+'}
                <b>
                  {percentageMonthDifference.toFixed(2)
                    ? percentageMonthDifference.toFixed(2)
                    : 'Not have data'}
                  %
                </b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color={amountMonthDiffenrence < 0 ? 'error' : 'success'}>
                {amountMonthDiffenrence < 0 ? '-' : '+'}
                {amountMonthDiffenrence.toFixed(2)}$
              </Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last month
              </Typography>
            </Box>
          </Box>
          <Chart
            options={{ ...chartOptions }}
            series={chart2Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h4" noWrap>
                  Quarter revenue
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Sum revenue of quarter
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                ${Number(quarterRevenueSum).toFixed(2)}
              </Typography>
              <Text
                color={percentageQuarterDifference < 0 ? 'error' : 'success'}
              >
                {percentageQuarterDifference < 0 ? '-' : '+'}
                <b>
                  {percentageQuarterDifference.toFixed(2)
                    ? percentageQuarterDifference.toFixed(2)
                    : 'Not have data'}
                  %
                </b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color={amountQuarterDiffenrence < 0 ? 'error' : 'success'}>
                {amountQuarterDiffenrence < 0 ? '-' : '+'}
                {amountQuarterDiffenrence.toFixed(2)}$
              </Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last quarter
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart3Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/static/images/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Bitcoin
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                $56,475.99
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color="success">+$500</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart4Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default WatchListColumn;
