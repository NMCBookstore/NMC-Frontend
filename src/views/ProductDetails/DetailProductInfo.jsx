import React from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/joy";

export default function DetailProductInfo({ data }) {
  return (
    <Box>
      <Stack direction="column">
        <Box mt="10px" sx={{ display: "flex", justifyContent: "start" }}>
          <Typography
            lineHeight="lg"
            variant="solid"
            level="h5"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              fontSize: 20,
            }}
          >
            Details product
          </Typography>
        </Box>
        <div style={{ marginLeft: "8px" }}>
          <Typography variant="body1">Author: {data?.author}</Typography>
          <Typography variant="body1">Publisher: {data?.publisher}</Typography>
          <Typography variant="body1">Descriptions: </Typography>
          <Typography>{data?.description}</Typography>
        </div>
      </Stack>
    </Box>
  );
}
