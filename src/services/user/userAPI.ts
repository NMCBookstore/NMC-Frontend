import { User } from 'src/models/User';
import { book } from '../base/baseAPI';

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    listUser: builder.query<User[], void>({
      query: () => ({
        url: `admin/users/`
      })
    })
  }),
  overrideExisting: false
});

export const { useListUserQuery } = user;
