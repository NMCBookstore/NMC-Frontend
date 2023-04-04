import React, { useState, useEffect, useRef } from "react";
import lightGallery from "lightgallery";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "lightgallery/css/lg-video.css";

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from "lightgallery/plugins/video";
import { convertData } from "./ConvertData";
import { Typography } from "@mui/material";

export default function MainImage({ src, images, ytSrc }) {
  const gallery = convertData(images)
  const dynamicGallery = useRef(null)
  const [dynamicGalleryOpt, setDynamicGalleryOpt] = useState(null)

  useEffect(() => {
    setDynamicGalleryOpt(new lightGallery(dynamicGallery?.current, {
      dynamic: true,
      plugins: [lgZoom, lgVideo, lgThumbnail],
      dynamicEl: gallery
    }))
  }, [images])

  const openGallery = (id) => {
    dynamicGalleryOpt.openGallery(id);
  };


  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => openGallery(ytSrc != "" ? images.indexOf(ytSrc) : images.indexOf(src))}
    >
      <img
        ref={dynamicGallery}
        src={src}
        style={{
          width: "100%",
          cursor: "pointer"
        }}
      />
      {ytSrc != "" &&
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "40%",
            left: "35%",
          }}>
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              color: "white",
              fontSize:"100px"
            }} />
        </Typography>
      }
    </div>
  );
}
