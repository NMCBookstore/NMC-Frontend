import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
import PaginationBottom from "./PaginationBottom";
import BookList from "./BookList";
import { useGetAllProductQuery } from "../../../services/productAPIs";

const SearchFilter = () => {

  const {data} = useGetAllProductQuery({page_id:1, page_size:36});

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter />
        </Grid>

        {/* Product  */}
        <Grid container item xs={12} sm={9} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
            <BookList data={data} />
            <PaginationBottom />
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default SearchFilter;
