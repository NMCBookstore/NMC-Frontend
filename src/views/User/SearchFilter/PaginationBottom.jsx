import React, { useState } from "react";
import { Box, Pagination, Stack, useMediaQuery } from "@mui/material";

export default function PaginationBottom({ allProduct,searchParams, handlePageChange }) {
  // const {pagination, onPageChange} = props;
  const pageNum = parseInt(allProduct?.total_page);

  const onPageChange = (_, value) => {
    handlePageChange(value, 24);
  };

  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box
      my={2}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack>
        <Pagination
          count={pageNum}
          page={allProduct?.page_id}
          size={isMobile ? "small" : "large"}
          siblingCount={isMobile ? -1 : 2}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
}
