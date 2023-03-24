import React from 'react'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export default function PaginationBottom() {
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
