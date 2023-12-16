import { AllProduct, Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const search = book.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query<
      AllProduct,
      {
        page_id: number;
        page_size: number;
        text?: string;
        genres_id?: number;
        min_price?: number;
        max_price?: number;
        rating?: number;
      }
    >({
      query: ({
        page_id,
        page_size,
        text,
        genres_id,
        min_price,
        max_price,
        rating,
      }) =>
        // `searchs?page_id=${page_id}&page_size=${page_size}${
        //   text ? "&text=" + text : ""
        // }${genres_id ? "&genres_id=" + genres_id : ""}${
        //   min_price ? "&min_price=" + min_price : ""
        // }&max_price=${max_price}${rating ? "&rating=" + rating : ""}`,
        `searchs?page_id=${page_id}&page_size=${page_size}${
          text ? "&text=" + text : ""
        }${genres_id ? "&genres_id=" + genres_id : ""}${
          min_price ? "&min_price=" + min_price : ""
        }${max_price ? "&max_price=" + max_price : ""}${
          rating ? "&rating=" + rating : ""
        }`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchQuery } = search;
