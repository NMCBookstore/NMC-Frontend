import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../../../components/ProductCard/ProductCard";

export default function BookList({ data }) {
  return (
    <>
      {data?.map((productItem) => (
        <Grid
          item
          margin={1}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <ProductCard key={productItem?.id} productItem={productItem} />
        </Grid>
      ))}
    </>
  );
}
