import { User } from 'src/models/User';
import { book } from '../base/baseAPI';

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    listUser: builder.query<User[], void>({
      query: () => ({
        url: `admin/users/`
      })
    }),
    listTotalUserNumber: builder.query<User[], void>({
      query: () => {
        return {
          method: 'GET',
          url: `admin/users/`
        };
      }
    }),
    updateUser: builder.mutation<User, FormData>({
      query: (formData) => {
        return {
          method: 'PUT',
          url: `users/`,
          body: formData
        };
      }
    })
  }),
  overrideExisting: false
});

export const {
  useListUserQuery,
  useListTotalUserNumberQuery,
  useUpdateUserMutation
} = user;
