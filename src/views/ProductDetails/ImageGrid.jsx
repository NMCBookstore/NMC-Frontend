import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function ImageGrid({ images, onSelect, selectedImage }) {

  return (
    <Grid container>
      {images?.map((info, index) => (
        info.includes("youtube") ? (
          <iframe
            key={info}
            width="80%"
            src={info}
            frameborder="0"
            allowfullscreen
            onClick={() => onSelect(info)}
          ></iframe>
        ) : (
          <img
            key={info}
            src={info}
            onClick={() => onSelect(info)}
            style={{
              width: "80%",
              border:
                index === selectedImage ? "solid 1px gray" : "solid 1px #eee",
              cursor: "pointer",
            }}
          />
        )
      ))}
    </Grid>
  );
}
