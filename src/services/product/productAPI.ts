import { AllProduct, Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query<Product, number>({
      query: (id) => `books/${id}`,
      transformResponse: (response: Product) => {
        if (response && response.is_deleted === true) {
          console.log("book is deleted");
        }
        console.log("response2: ", response.id);
        return response;
      },
    }),

    getAllProducts: builder.query<
      AllProduct,
      { page_id: number; page_size: number }
    >({
      query: ({ page_id, page_size }) =>
        `books/?page_id=${page_id}&page_size=${page_size}`,
    }),

    getTopNewProduct: builder.query<Product[], void>({
      query: () => ({
        url: `books/newest`,
      }),
      transformResponse: (response: Product[]) => {
        const productNotDeleted = response.filter((item) => !item.is_deleted);
        return productNotDeleted;
      },
    }),
    getTopBestProduct: builder.query<Product[], void>({
      query: () => ({
        url: `books/the_best`,
      }),
      transformResponse: (response: Product[]) => {
        const productNotDeleted = response.filter((item) => !item.is_deleted);
        return productNotDeleted;
      },
    }),
    getBookByGenres: builder.query<
      Product[],
      { genre_id: number; limit: number }
    >({
      query: ({ genre_id, limit }) => ({
        url: `books/list_book_follow_genre?genre_id=${genre_id}&limit=${limit}`,
      }),
      // transformResponse: (response: Product[]) => {
      //   const productNotDeleted = response.filter((item) => !item.is_deleted);
      //   return productNotDeleted;
      // },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductDetailsQuery,
  useGetTopNewProductQuery,
  useGetAllProductsQuery,
  useGetBookByGenresQuery,
  useGetTopBestProductQuery,
} = product;
