import React from "react";

export default function MainImage({ src }) {
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
