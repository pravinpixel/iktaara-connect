/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

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
export default function CustomCardEventsCategory(props: CustomCardProps) {
  const { variant, img, text } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",
        width: "240px",
        height: "236px",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Stack direction="column" alignItems={"center"}>
        <CardMedia
          component="img"
          image={img}
          alt="Paella dish"
          sx={{ width: 100, height: 100 }}
        />
        <Typography className="mt-[10px] text-center">{text}</Typography>
      </Stack>
    </Card>
  );
}