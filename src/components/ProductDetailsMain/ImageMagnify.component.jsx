import React from "react";
import ReactImageMagnify from "react-image-magnify";

function ImageMagnify(props) {
  const { original, thumbnail } = props;

  return (
    <>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: thumbnail,
            width: 400,
            height: 500,
          },
          largeImage: {
            src: original,
            width: 1600,
            height: 2200,
          },
          enlargedImagePortalId: "myPortal",
        }}
      />
    </>
  );
}

export default ImageMagnify;
