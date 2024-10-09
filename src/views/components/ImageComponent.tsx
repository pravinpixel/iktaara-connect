/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const basePath = '/connect/'

const ImageComponent = (props: any) => {
  const {
    aspectRatio,
    objectFit,
    src,
    alt,
    priority = false,
    type,
    width,
    height,
    className,
  } = props;
  return (
    <>
      {/* <div> */}
      {type === 1 ? (
        <div
          className="position-relative "
          style={{
            aspectRatio: aspectRatio,
            objectFit: objectFit,
          }}
        >
          <Image
            src={basePath + src}
            fill
            alt={alt}
            unoptimized={false}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={className}
          />
        </div>
      ) : type === 2 ? (
        <Box
          sx={{
            position: "relative",
            objectFit: "content",
          }}
          className={className}
        >
          <Image src={ basePath + src} alt={"banner"} fill />
        </Box>
      ) : (
        <>
          {" "}
          <Image
            src={basePath + src}
            alt={alt}
            unoptimized={false}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            width={width}
            height={height}
            sizes="100vw"
            className={className}
          />
        </>
      )}
    </>
  );
};

export default ImageComponent;
