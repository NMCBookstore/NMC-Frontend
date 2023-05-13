import React, { useState } from "react";
import { Box, Pagination, Stack, useMediaQuery } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function CommentPagination({ data, handleCommentChange }) {
  // const {pagination, onPageChange} = props;
  const pageNum = parseInt(data?.total_page);
  // console.log(pageNum);

  const onPageChange = (_, value) => {
    handleCommentChange(value, 5);
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
          page={data?.page_id}
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
