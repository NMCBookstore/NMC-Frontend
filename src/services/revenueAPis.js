import { book } from "./baseAPI";

const revenue = book.injectEndpoints({
  endpoints: (builder) => ({
    getRevenueDays: builder.query({
      query: () => ({
        url: `admin/revenues/days`,
      }),
    }),
    getRevenueMonths: builder.query({
      query: () => ({
        url: `admin/revenues/months`,
      }),
    }),
    getRevenueQuarters: builder.query({
      query: () => ({
        url: `admin/revenues/quarters`,
      }),
    }),
    getRevenueYears: builder.query({
      query: () => ({
        url: `admin/revenues/years`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRevenueDaysQuery,
  useGetRevenueMonthsQuery,
  useGetRevenueQuartersQuery,
  useGetRevenueYearsQuery,
} = revenue;
