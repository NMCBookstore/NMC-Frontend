import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";

export default function ImageGrid({ images, onSelect, selectedImage }) {

  return (
    <Grid container>
      {images?.map((info, index) => (
        <div>
          {info.includes("youtube") ? (
            <iframe
              width="80%"
              // height="150"
              src={info}
              frameborder="0"
              allowfullscreen
              onClick={() => onSelect(info)}
            ></iframe>
          ) : (
            <img
              key={index}
              src={info}
              onClick={() => onSelect(info)}
              style={{
                width: "80%",
                border:
                  index === selectedImage ? "solid 1px gray" : "solid 1px #eee",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      ))}
    </Grid>
  );
}
