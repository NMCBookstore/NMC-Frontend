import React from 'react'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

PaginationBottom.PropTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

PaginationBottom.defaultProps = {
  onPageChange: null,
}

export default function PaginationBottom() {

  // const {pagination, onPageChange} = props;

  function handlePageChange(newPage) {
    if (onPageChange){
      onPageChange(newPage)
    }
  }

  return (
    <Box my={2}
    sx={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Stack>
      <Pagination
        defaultPage={1}
        count={10}
        showFirstButton
        showLastButton
      />
    </Stack>
  </Box>
  )
}
