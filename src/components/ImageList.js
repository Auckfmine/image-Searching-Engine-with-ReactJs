import React from "react";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const photos = props.images.map((img) => {
    return (
      <div key={img.id}>
        <ImageCard image={img} />
      </div>
    );
  });
  return photos;
};

export default ImageList;
