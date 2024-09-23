/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageComponent from "./imageComponent";
import { CardMedia } from "@mui/material";

interface CustomCardProps {
  variant?: "elevation" | "outlined" | "bottom-right";
  img: string;
  text: string;
  Contenttext?: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
  type?: string;
}
export default function CustomCard(props: CustomCardProps) {
  const {
    variant,
    img,
    text,
    Contenttext,
    img1,
    width = "100%",
    type = "false",
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
      {type === "true" && (
        <Box
          sx={{
            position: "absolute",
            width: "65px",
            height: "65px",
            borderRadius: "12px",
            background: "red",
            left: "13px",
            bottom: "12px",
          }}
        >
          <div style={{ position: "relative", top: "20px", left: "10px" }}>
            <ImageComponent
              src={img1}
              alt="Overlay Image"
              width={50}
              height={50}
            />
          </div>
        </Box>
      )}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <Typography sx={{ fontSize: "22px", fontWeight: 600, color: "#fff" }}>
          {text}
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
          {Contenttext}
        </Typography>
      </Box>

      {/* </Box> */}
    </Card>
  );
}
