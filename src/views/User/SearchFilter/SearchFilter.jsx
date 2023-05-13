import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
import PaginationBottom from "./PaginationBottom";
import BookList from "./BookList";
import { useGetAllProductQuery } from "../../../services/productAPIs";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";
import { Button } from "@mui/material";
import { useGetSearchQuery } from "../../../services/searchAPI";

const SearchFilter = () => {
  const [id, setId] = useState(0);

  const [searchInfo, setSearchInfo] = useState(null);

  const [page, setPage] = useState({ id: 1, size: 24 });

  const { data: allProduct } = searchInfo
    ? useGetSearchQuery({
        ...searchInfo,
        page_id: page.id??1,
        page_size: page.size??24,
      })
    : useGetAllProductQuery({
        page_id: page.id,
        page_size: page.size,
      });

  const { data: allGenres } = useGetGenresQuery();
  const { data: allSubGenres } = useGetSubGenresQuery(id, { skip: !id });

  const handlePageChange = (id, size) => {
    setPage({ id, size });
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Filter  */}
        <Grid item xs={12} sm={3}>
          <Filter
            id={id}
            genres={allGenres}
            subGenres={allSubGenres}
            setId={setId}
            setSearchInfo={setSearchInfo}
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
          <BookList allProduct={allProduct} />
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
              handlePageChange={handlePageChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchFilter;
