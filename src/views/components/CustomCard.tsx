/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageComponent from "./imageComponent";
import { CardMedia } from "@mui/material";

interface CustomCardProps {
  variant?: string;
  img: string;
  text: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
}
export default function CustomCard(props: CustomCardProps) {
  const { variant, img, text, img1, width = "100%" } = props;

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

      <Box
        sx={{
          position: "absolute",
          width: "65px",
          height: "65px",
          borderRadius: "12px",
          background: "red",
          left: "13px",
          bottom: "32px",
        }}
      ></Box>
      <div style={{ position: "relative", bottom: "52px", left: "20px" }}>
        <ImageComponent src={img1} alt="Overlay Image" width={50} height={50} />
      </div>

      <Typography>{text}</Typography>

      {/* </Box> */}
    </Card>
  );
}
