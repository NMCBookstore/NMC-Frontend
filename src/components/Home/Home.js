import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import comic from './pic/comic.jpg';
import novel from './pic/novel.jpg';

const images = [
  {
    url: comic,
    title: "Comic",
    width: "20%",
  },
  {
    url: novel,
    title: "Novel",
    width: "20%",
  },
  {
    url: comic,
    title: "Normal book",
    width: "20%",
  },
  {
    url: novel,
    title: "Book 1",
    width: "20%",
  },
  {
    url: comic,
    title: "Book 2",
    width: "20%",
  },
];

//the image button
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 60,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "2px solid currentColor",
    },
  },
}));

//adjust the image position in the frame
const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

//the text
const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "center",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

//default backdrop color of the image
const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

//underline the typography
const ImageMarked = styled("span")(({ theme }) => ({
  height: 2,
  width: 30,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  display:"center",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Home = () => {
  return (
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})`, borderRadius:20 }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 1,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

  );
};

export default Home;
