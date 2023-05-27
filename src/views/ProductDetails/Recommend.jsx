import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-grid-carousel";
import { Button, Card, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Typography } from "@mui/joy";
import { useRecommendQuery } from "../../services/searchAPI";
import { useEffect } from "react";

export default function Recommend({ bookID, genresID, subgenresID }) {
  const { data: recommend, isFetching } = useRecommendQuery({
    book_id: bookID,
    genres_id: genresID,
    subgenres_id: subgenresID
  })

  useEffect(() => {
    console.log(recommend)
  }, [isFetching])


  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <Box mt="10px" sx={{ display: "flex", justifyContent: "start" }}>
        <Typography
          lineHeight="lg"
          variant="solid"
          level="h5"
          sx={{
            mt: 3,
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            fontSize: 20,
          }}
        >
          Recommend for you
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Carousel
          cols={4}
          rows={1}
          gap={10}
          loop
          autoplay={5000}
          showDots
          responsiveLayout={[
            {
              breakpoint: 3000,
              cols: 4,
            },
            {
              breakpoint: 1024,
              cols: 3,
            },
            {
              breakpoint: 464,
              cols: 2,
            },
          ]}
          mobileBreakpoint={464}
        >
          {recommend?.map((item, index) => (
            <Carousel.Item key={item?.id}>
              <ProductCard productItem={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
}
