import { Box, Divider } from "@mui/material";
import Typography from "@mui/joy/Typography";
import React from "react";
import MiniCarousel from "../../../components/MiniCarousel/MiniCarousel";
import ListProductCart from "../../User/UserCart/ListProductCart";
import ListWishList from "./ListWishList";
import { useGetWishListQuery } from "../../../services/wishlistAPI";
import { useJustForYouQuery } from "../../../services/searchAPI";

export default function Wishlist() {
  const { data, isFetching } = useGetWishListQuery('userWishlist',{refetchOnMountOrArgChange: true});
  const {data: justForYou} = useJustForYouQuery()

  return (
    <Box marginTop={3}>
      <ListWishList title="Wishlist" data = {data} isFetching = {isFetching}/>
      <Box marginTop={20}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box
          marginBottom={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
            Just For You
          </Typography>
        </Box>
        <MiniCarousel value={justForYou}/>
      </Box>
    </Box>
  );
}
