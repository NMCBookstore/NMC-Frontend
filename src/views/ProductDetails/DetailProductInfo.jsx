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
              my: 3,
              background:
                "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              fontSize: 20,
            }}
          >
            Details product
          </Typography>
        </Box>
        <div style={{ marginLeft: "8px"}}>
          <Typography  fontWeight="600" color="black">Author: <Typography fontWeight="400">{data?.author}</Typography></Typography>
          <Typography  fontWeight="600" color="black">Publisher: <Typography fontWeight="400">{data?.publisher}</Typography></Typography>
          <Typography  fontWeight="600" color="black">Descriptions: </Typography>
          <Typography fontWeight="400">{data?.description}</Typography>
        </div>
      </Stack>
    </Box>
  );
}
