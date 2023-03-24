import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProductCard from "../../components/ProductCard/ProductCard";

export default function BookList() {
  return (
    <>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>{" "}
      <Grid item sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <ProductCard />
      </Grid>
    </>
  );
}
