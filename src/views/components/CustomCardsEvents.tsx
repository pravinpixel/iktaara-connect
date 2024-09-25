/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageComponent from "./ImageComponent";
import { CardMedia } from "@mui/material";

interface CustomCardProps {
  variant?:
    | "elevation"
    | "outlined"
    | "bottom-right"
    | "bottom-left"
    | "top-right";
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
    reviews,
    Contenttext,
    img1,
    width = "100%",
    type,
    typebottomleft,
    typetop,
    typebottom,
  } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",

        width: width,
        borderRadius: "16px",
      }}
    >
      <CardMedia component="img" image={img} alt="Paella dish" />
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
              left: "39px",
              bottom: "12px",
            }}
          >
            <Box className="bg-ik_bluevariantcolor text-center text-ik_white rounded-lg w-[67px] h-[37px] flex items-center justify-center">
              {"Art"}
            </Box>
          </Box>
        </div>
      </>
    </Card>
  );
}
