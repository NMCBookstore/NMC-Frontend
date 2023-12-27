import { AllOrder, Order } from 'src/models/Order';
import { book } from '../base/baseAPI';

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    getListOrder: builder.query<
      AllOrder,
      { page_id: number; page_size: number }
    >({
      query: ({ page_id, page_size }) => ({
        url: `admin/orders?page_id=${page_id}&page_size=${page_size}`
      })
    })
  }),
  overrideExisting: false
});

export const { useGetListOrderQuery } = order;
