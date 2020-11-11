import React from "react";

export default function ImgComp({ src }) {
  let imgStyle = {
    width: 100 + "%",
    height: "auto",
    objectFit: "cover",
  };
  return <img src={src} alt="slide-img" style={imgStyle} />;
}
