import { User } from 'src/models/User';
import { book } from '../base/baseAPI';
import {
  DayRevenue,
  MonthRevenue,
  QuarterRevenue,
  YearRevenue
} from 'src/models/Revenue';

const revenue = book.injectEndpoints({
  endpoints: (builder) => ({
    getDayRevenue: builder.query<DayRevenue[], void>({
      query: () => ({
        url: `admin/revenues/days`
      })
    }),
    getMonthRevenue: builder.query<MonthRevenue[], void>({
      query: () => ({
        url: `admin/revenues/months`
      })
    }),
    getQuarterRevenue: builder.query<QuarterRevenue[], void>({
      query: () => ({
        url: `admin/revenues/months`
      })
    }),
    getYearRevenue: builder.query<YearRevenue[], void>({
      query: () => ({
        url: `admin/revenues/years`
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetDayRevenueQuery,
  useGetMonthRevenueQuery,
  useGetQuarterRevenueQuery,
  useGetYearRevenueQuery
} = revenue;
