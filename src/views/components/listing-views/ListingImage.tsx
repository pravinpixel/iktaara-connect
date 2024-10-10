import React, { useState } from "react";
import { Grid, Stack, Box } from "@mui/material";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import ImageComponent from "../ImageComponent";

const images = {
  mainImage: {
    src: "/assets/image/mask-group1.webp",
    width: 1496,
    height: 461,
  },
  smallImages: [
    {
      src: "/assets/image/bharath.webp",
      width: 241,
      height: 248,
    },
    {
      src: "/assets/image/mask-group3.webp",
      width: 1496,
      height: 461,
    },
    {
      src: "/assets/image/mask-group4.webp",
      width: 1496,
      height: 400,
    },
    {
      src: "/assets/image/mask-group4.webp",
      width: 1496,
      height: 400,
    },
    {
      src: "/assets/image/mask-group4.webp",
      width: 1496,
      height: 400,
    },
  ],
};

const ListingImageComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const hasSmallImages = images.smallImages && images.smallImages.length > 0;
  const isSingleSmallImage = images.smallImages.length === 1;
  const isTwoSmallImages = images.smallImages.length === 2;
  const totalSmallImages = images.smallImages.length;
  const smallImagesToShow = images.smallImages.slice(0, 2);
  const remainingImagesCount = totalSmallImages - smallImagesToShow.length;

  return (
    <section className="pb-5">
      <Grid container spacing={1}>
        {/* Main Image */}
        <Grid item xs={12} sm={hasSmallImages ? 8 : 12}>
          <ImageComponent
            src={images.mainImage.src}
            width={images.mainImage.width}
            height={images.mainImage.height}
            alt="main-image"
            onClick={() => handleImageClick(-1)}
            className="w-full h-full rounded-[15px]"
          />
        </Grid>

        {/* Small Images */}
        {hasSmallImages && (
          <Grid item xs={12} sm={isSingleSmallImage ? 4 : 4}>
            <Stack
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap", height: "100%" }}
            >
              <Grid container spacing={1}>
                {smallImagesToShow.map((img, index) => (
                  <Grid
                    item
                    xs={
                      isSingleSmallImage || isTwoSmallImages
                        ? 12
                        : index === 2
                        ? 12
                        : 6
                    }
                    key={index}
                  >
                    <ImageComponent
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      alt={`small-image-${index}`}
                      onClick={() => handleImageClick(index)}
                      className="w-full h-full rounded-[15px]"
                    />
                  </Grid>
                ))}

                {remainingImagesCount > 0 && (
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "15px",
                        overflow: "hidden",
                      }}
                    >
                      <Box sx={{ filter: "brightness(0.3)" }}>
                        <ImageComponent
                          src={images.smallImages[2].src}
                          width={images.smallImages[2].width}
                          height={images.smallImages[2].height}
                          alt="extra-images"
                          onClick={() => handleImageClick(2)}
                          className="w-full h-full rounded-[15px]"
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="p-4 border border-ik_white text-f16 rounded-full">
                          +{remainingImagesCount} Images
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Grid>
        )}
      </Grid>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={
            currentImageIndex === -1
              ? images.mainImage.src
              : images.smallImages[currentImageIndex].src
          }
          nextSrc={
            currentImageIndex === -1
              ? images.smallImages[0].src
              : images.smallImages[(currentImageIndex + 1) % totalSmallImages]
                  .src
          }
          prevSrc={
            currentImageIndex === -1
              ? images.smallImages[totalSmallImages - 1].src
              : images.smallImages[
                  (currentImageIndex + totalSmallImages - 1) % totalSmallImages
                ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + totalSmallImages - 1) % totalSmallImages
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % totalSmallImages)
          }
        />
      )}
    </section>
  );
};

export default ListingImageComponents;
