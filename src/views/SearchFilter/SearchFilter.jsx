import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Filter from "./Filter";
import PaginationBottom from "./PaginationBottom";
import BookList from "./BookList";

const SearchFilter = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter />
        </Grid>

        {/* Product  */}
        <Grid container item xs={12} sm={9} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
            <BookList />
            <PaginationBottom />
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default SearchFilter;
