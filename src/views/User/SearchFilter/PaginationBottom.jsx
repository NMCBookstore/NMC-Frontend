import React from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Stack,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";

PaginationBottom.PropTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

PaginationBottom.defaultProps = {
  onPageChange: null,
};

export default function PaginationBottom() {
  // const {pagination, onPageChange} = props;
  const isMobile = useMediaQuery('(max-width: 800px)');

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

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
         defaultPage={1} 
         count={10} 
         size={isMobile ? 'small' : 'large'}
         showFirstButton 
         showLastButton />
      </Stack>
    </Box>
  );
}
