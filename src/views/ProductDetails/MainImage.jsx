import React from "react";
import { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";

export default function MainImage({src }) {

  // console.log(selectedImage)

  return (
    <div>
        <img
          src={src}
          style={{
            width: "100%",
          }}
        />
    </div>
  );
}
