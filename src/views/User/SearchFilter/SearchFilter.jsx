import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
import PaginationBottom from "./PaginationBottom";
import BookList from "./BookList";
import { useGetAllProductQuery } from "../../../services/productAPIs";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";

const SearchFilter = () => {
  const [id, setId] = useState(0);

  const { data: allProduct } = useGetAllProductQuery({
    page_id: 1,
    page_size: 24,
  });
  const { data: allGenres } = useGetGenresQuery();
  const { data: allSubGenres } = useGetSubGenresQuery(id, { skip: !id });

  // console.log(allSubGenres);

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter id={id} genres={allGenres} subGenres={allSubGenres} setId={setId} />
        </Grid>

        {/* Product  */}
        <Grid
          container
          item
          xs={12}
          sm={9}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <BookList data={allProduct} />
        </Grid>
        <PaginationBottom data={allProduct} />
      </Grid>
    </Box>
  );
};

export default SearchFilter;
