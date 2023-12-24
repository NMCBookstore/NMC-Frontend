import { AllProduct, Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query<Product, number>({
      query: (id) => `books/${id}`,
      // transformResponse: (response: Product) => {
      //   if (response && response.is_deleted === false) {
      //     console.log("response: ", response);
      //   }
      //   console.log("response2: ", response.id);
      //   return response;
      // },
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
  }),
  overrideExisting: false,
});

export const {
  useGetProductDetailsQuery,
  useGetTopNewProductQuery,
  useGetAllProductsQuery,
} = product;
