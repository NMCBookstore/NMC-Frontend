import { Box, Divider } from '@mui/material'
import Typography from "@mui/joy/Typography";
import React from 'react'
import MiniCarousel from '../../../components/MiniCarousel/MiniCarousel'
import ListProductCart from '../../User/UserCart/ListProductCart'

export default function Wishlist() {
  return (
    <Box marginTop={3}>
      <ListProductCart title="Wishlist"/>
      <Box marginTop={20}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box marginBottom={2} sx={{ display: "flex", justifyContent: "center" }}>
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
        <MiniCarousel/>
      </Box>
    </Box>
  )
}
