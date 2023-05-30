import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import lightGallery from "lightgallery";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { convertData } from "./ConvertData";

export default function ImageGrid({
  images,
  onSelectImage,
  onYtSrc,
  selectedImage,
  ytSrc,
}) {
  const gallery = convertData(images);
  const dynamicGallery = useRef(null);
  const [dynamicGalleryOpt, setDynamicGalleryOpt] = useState(null);

  useEffect(() => {
    setDynamicGalleryOpt(
      new lightGallery(dynamicGallery?.current, {
        dynamic: true,
        plugins: [
          lgZoom, lgVideo,
          lgThumbnail,
        ],
        dynamicEl: gallery,
      })
    );
  }, [images]);

  const openGallery = (id) => {
    dynamicGalleryOpt.openGallery(id);
  };

  return (
    <>
      {images?.slice(0, 4).map((image, index) =>
        index === 3 && images.length > 4 ? (
          <div
            ref={dynamicGallery}
            key={image}
            style={{
              // filter: "brightness(0.5)",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => openGallery(3)}
          >
            <img
              src={image.includes("youtube") ? images[0] : image}
              width="100%"
              style={{
                filter: "brightness(0.6)",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: "35%",
                left: "30%",
                color: "white",
              }}
            >
              +{images.length - 3}
            </Typography>
          </div>
        ) : (
          <div
            key={image}
            style={{
              border:
                (image === selectedImage && ytSrc === "") || image === ytSrc
                  ? "solid 1px gray"
                  : "solid 1px #eee",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => {
              onSelectImage(image.includes("youtube") ? images[0] : image);
              onYtSrc(image.includes("youtube") ? image : "");
            }}
          >
            <img
              src={image.includes("youtube") ? images[0] : image}
              width="100%"
            />
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: "40%",
                left: "35%",
              }}
            >
              {image.includes("youtube") && (
                <PlayCircleFilledWhiteOutlinedIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                  }}
                />
              )}
            </Typography>
          </div>
        )
      )}
    </>
  );
}
