import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
import PaginationBottom from "./PaginationBottom";
import BookList from "./BookList";
import { useGetSearchQuery } from "../../../services/searchAPI";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useGetAllProductQuery } from "../../../services/productAPIs";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let searchInfo = {
    page_id: !isNaN(parseInt(searchParams.get("page_id")))
      ? parseInt(searchParams.get("page_id"))
      : 1,
    page_size: !isNaN(parseInt(searchParams.get("page_size")))
      ? parseInt(searchParams.get("page_size"))
      : 24,
    min_price: !isNaN(parseInt(searchParams.get("min_price")))
      ? parseInt(searchParams.get("min_price"))
      : 0,
    max_price: !isNaN(parseInt(searchParams.get("max_price")))
      ? parseInt(searchParams.get("max_price"))
      : 10000000,
  };

  if (searchParams.get("text") !== null) {
    searchInfo["text"] = searchParams.get("text");
  }

  if (searchParams.get("genres_id") !== null) {
    searchInfo["genres_id"] = parseFloat(searchParams.get("genres_id"));
  }

  if (searchParams.get("subgenres_id") !== null) {
    searchInfo["subgenres_id"] = parseFloat(searchParams.get("subgenres_id"));
  }

  if (searchParams.get("rating") !== null) {
    searchInfo["rating"] = parseInt(searchParams.get("rating"));
  }

  //API Search
  const { data: allProduct } = useGetSearchQuery(searchInfo, "searchBook", {
    refetchOnMountOrArgChange: true,
  });

  const handlePagination = (pageNum, pageSize) => {
    searchInfo["page_id"] = pageNum;
    searchInfo["page_size"] = pageSize;
    setSearchParams(searchInfo)
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter
            searchInfo={searchInfo}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </Grid>

        {/* Product  */}
        <Grid
          container
          item
          xs={12}
          sm={9}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
            {searchParams.get("text") && (
              <Typography variant="h6">
                Search result for: {searchParams.get("text")}
              </Typography>
            )}
          </Box>
          <BookList data={allProduct} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <PaginationBottom
              allProduct={allProduct}
              searchParams={searchParams}
              handlePageChange={handlePagination}
            />
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchFilter;
