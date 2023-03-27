import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function ImageGrid({ images, onSelect, selectedImage }) {
  return (
    <Grid container>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          onClick={() => onSelect(index)}
          style={{
            width: "80%",
            border:
              index === selectedImage ? "solid 1px gray" : "solid 1px #eee",
            cursor: "pointer",
          }}
        />
      ))}
    </Grid>
  );
}
