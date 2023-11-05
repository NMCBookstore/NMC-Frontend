import { book } from "../Base/baseAPI";
import { Subgenres } from "../../interface/Subgenres";

const subgenres = book.injectEndpoints({
  endpoints: (builder) => ({
    getSubGenres: builder.query<Subgenres, number>({
      query: (id) => ({
        url: `subgenres/${id}`,
      }),
    }),
  }),
});

export const { useGetSubGenresQuery } = subgenres;
