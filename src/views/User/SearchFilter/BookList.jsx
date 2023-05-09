import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../../../components/ProductCard/ProductCard";

export default function BookList({ allProduct }) {
  return (
    <>
      {allProduct?.books.map((productItem) => (
        <Grid
          key={productItem.id}
          item
          margin={1}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <ProductCard productItem={productItem} />
        </Grid>
      ))}
    </>
  );
}
