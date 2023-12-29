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
        name_sort_asc?: string;
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
        name_sort_asc,
      }) => ({
        url: `searchs?page_id=${page_id}&page_size=${page_size}${
          text ? "&text=" + text : ""
        }${genres_id ? "&genres_id=" + genres_id : ""}${
          min_price ? "&min_price=" + min_price : ""
        }${max_price ? "&max_price=" + max_price : ""}${
          name_sort_asc ? "&name_sort_asc=" + name_sort_asc : ""
        }${rating ? "&rating=" + rating : ""}`,
      }),
      transformResponse: (response: AllProduct) => {
        const productNotDeleted = response?.books.filter(
          (item) => !item.is_deleted
        );
        return {
          ...response,
          books: productNotDeleted,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchQuery } = search;
