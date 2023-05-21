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
      : 100000000,
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

  // console.log(searchInfo);
  const [pagination, setPagination] = useState({ pageNum: 1, pageSize: 24 });

  //API Search
  const { data: allProduct } = useGetSearchQuery(searchInfo, "searchBook", {
    refetchOnMountOrArgChange: true,
    page_id: pagination.pageNum,
    page_size: pagination.pageSize,
  });

  console.log("this is search", allProduct);

  // Api All product
  const { data: allProductForPagination } = useGetAllProductQuery({
    page_id: pagination.pageNum,
    page_size: pagination.pageSize,
    refetchOnMountOrArgChange: true,
  });

  console.log("this is all product", allProductForPagination);

  const handlePagination = (pageNum, pageSize) => {
    setPagination({ pageNum, pageSize });
    console.log(pageNum, pageSize);
  };

  const handlePageChange = (id, size) => {
    searchInfo["page_id"] = id;
    searchInfo["page_size"] = size;
    setPagination(id, size);
  };

  const [isSearching, setIsSearching] = useState(false);

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter
            searchInfo={searchInfo}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
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
          {isSearching ? (
            // Search
            <BookList data={allProduct} />
          ) : (
            //All book
            <BookList data={allProductForPagination} />
          )}
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          {isSearching ? (
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <PaginationBottom
                //searching
                allProduct={allProduct}
                handlePageChange={handlePageChange}
              />
            </Box>
          ) : (
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <PaginationBottom
                //all product
                allProduct={allProductForPagination}
                handlePageChange={handlePagination}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchFilter;
