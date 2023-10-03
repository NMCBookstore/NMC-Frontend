import React from "react";
import { Box, Pagination, Stack, useMediaQuery } from "@mui/material";

export default function CommentPagination({ data, handleCommentChange }) {
  const pageNum = parseInt(data?.total_page);

  const onPageChange = (_, value) => {
    handleCommentChange(value, 5);
    window.scrollTo({top: 2200, left: 0, behavior: 'smooth'});
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
