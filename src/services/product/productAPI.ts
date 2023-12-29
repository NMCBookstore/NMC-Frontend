import { AllProduct, Product } from 'src/models/Product';
import { book } from '../base/baseAPI';
import { Genres } from 'src/models/Genres';

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<Product, FormData>({
      query: (formData) => ({
        method: 'POST',
        url: `admin/books/`,
        body: formData
      }),
      invalidatesTags: ['Product']
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => ({
        url: `/admin/books/all_books`
      }),
      providesTags: ['Product']
    }),
    getProductDetails: builder.query<Product, number>({
      query: (id) => ({ url: `books/${id}` }),
      providesTags: ['Product']
    }),
    updateProduct: builder.mutation<Product, FormData>({
      query: (formData) => ({
        method: 'PUT',
        url: `admin/books/${formData.get('id')}`,
        body: formData
      }),
      invalidatesTags: ['Product']
    }),
    softDeleteProduct: builder.mutation<Product, number>({
      query: (id) => ({
        method: 'DELETE',
        url: `/admin/books/soft/${id}`
      }),
      invalidatesTags: ['Product']
    })
  }),
  overrideExisting: false
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useSoftDeleteProductMutation
} = product;
