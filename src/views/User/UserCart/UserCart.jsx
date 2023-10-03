import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

import ProductCheckoutCard from "./ProductCheckoutCard";
import ListProductCart from "./ListProductCart";
import { useGetCartQuery } from "../../../services/cartAPI";

export default function UserCart() {
  const { data, isFetching } = useGetCartQuery("userCart", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container my={2} spacing={2}>
        {/* User Side bar  */}
        <Grid item spacing={2} xs={12} sm={12}>
          <ListProductCart title="Cart" data={data} isFetching={isFetching} />
        </Grid>

        {/* User Content  */}
        <Grid
          item
          container
          spacing={2}
          xs={12}
          sm={12}
          marginTop={3}
          justifyContent="end"
        >
          <ProductCheckoutCard data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}
