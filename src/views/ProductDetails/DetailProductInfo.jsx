import React from "react";
import { Box, Stack } from "@mui/system";
import { Button, Card, Container, Divider, TextField } from "@mui/material";
import { Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { product } from "../../features/prodDetailSlice";

export default function DetailProductInfo() {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.prod);
  // const status = useSelector((state) => state.products.status);
  // const error = useSelector((state) => state.products.error);

  const [infos, setInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/books/200")
      .then((res) => res.json())
      .then((infos) => {
        setInfo(infos);
      });
  }, []);

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
          <Typography variant="body1">Author: {infos.author}</Typography>

          <Typography variant="body1">Publisher: {infos.publisher}</Typography>
          <Typography variant="body1">Descriptions: </Typography>
          <Typography>{infos.description}</Typography>
        </div>
      </Stack>
    </Box>
  );
}
