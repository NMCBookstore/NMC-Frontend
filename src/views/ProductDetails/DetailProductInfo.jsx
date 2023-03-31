import React from "react";
import { Box, Stack } from "@mui/system";
import { Button, Card, Container, Divider, TextField } from "@mui/material";
import { Typography } from "@mui/joy";

const bookInfor = {
  author: "The Author",
  publisher: "NXB Tre",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function DetailProductInfo() {
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
          <Typography variant="body1">Author:</Typography>
          <Typography variant="body1">Publisher:</Typography>
          <Typography variant="body1">Descriptions: {""}</Typography>
          <Typography>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
      </Stack>
    </Box>
  );
}
