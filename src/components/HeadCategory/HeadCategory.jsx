import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import comic from "./pic/comic.jpg";
import novel from "./pic/novel.jpg";
import { Box, Typography } from "@mui/material";
import { useGetSubGenresNoticeableQuery } from "../../services/subGenresAPIs";
import { useNavigate } from "react-router-dom";

//the image button
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
    display: "center",
    alignItems: "center",
    justifyContent: "center",
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
      borderRadius: 10,
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
  borderRadius: 10 /****/,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

//underline the typography
const ImageMarked = styled("span")(({ theme }) => ({
  height: 1,
  width: 18,
  backgroundColor: theme.palette.common.white,

  position: "absolute",
  display: "center",
  alignItems: "center",
  justifyContent: "center",
  bottom: 0,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const HeadCategory = () => {
  const navigate = useNavigate()
  const { data: subgenresNoticeable } = useGetSubGenresNoticeableQuery()

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        "& > :not(style)": {
          m: "2.5%",
          width: 120,
          height: 80,
        },
      }}
    >
      {subgenresNoticeable?.map((subgenre, index) => (
        <ImageButton
          focusRipple
          key={subgenre?.id}
          style={{
            width: "28%",
            borderRadius: 10,
          }}
          onClick={()=> navigate(`/search-filter?genres_id=${subgenre?.genres_id}&subgenres_id=${subgenre?.id}`)}
        >
          <ImageSrc
            style={{ backgroundImage: index % 2 == 0 ? `url(${comic})` : `url(${novel})`, borderRadius: 10 }}
          />

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
              {subgenre?.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
};

export default HeadCategory;
