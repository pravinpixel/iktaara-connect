/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// import { CardMedia } from "@mui/material";
import CardMediaComponent from "./CardMediaComponent";

interface CustomCardProps {
  variant?: "elevation" | "outlined";

  img: string;
  text: string;
  reviews: string;
  Contenttext?: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
  type?: boolean;
  typebottomleft?: boolean;
  typetop?: boolean;
  typebottom: boolean;
}
export default function CustomCardEvents(props: CustomCardProps) {
  const {
    variant,
    img,
    text,

    width = "100%",
  } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",

        width: width,
        borderRadius: "16px",
        ...(props.typebottomleft &&
          {
            /* Custom style for bottom-left */
          }),
        ...(props.typetop &&
          {
            /* Custom style for top-right */
          }),
        ...(props.typebottom &&
          {
            /* Custom style for bottom-right */
          }),
      }}
    >
      {/* <CardMedia component="img" image={"/connect/" + img} alt="Paella dish" /> */}
      <CardMediaComponent image={"/connect/" + img} alt="Paella dish" />
      {/* <Box sx={{ position: "relative" }}>
        <ImageComponent src={img} alt="Card Image" width={260} height={360} /> */}

      <>
        <div className="flex justify-between w-full">
          <Box
            sx={{
              position: "absolute",
              width: "84px",
              height: "84px",
              borderRadius: "12px",
              left: "19px",
              bottom: "-34px",
            }}
          >
            <Box className="bg-ik_bluevariantcolor text-center text-ik_white rounded-lg w-[67px] h-[37px] flex items-center justify-center">
              {text}
            </Box>
          </Box>
        </div>
      </>
    </Card>
  );
}
