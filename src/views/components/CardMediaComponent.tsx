import * as React from "react";
import { CardMedia } from "@mui/material";

interface CardMediaProps {
  image: string;
  alt: string;
  sx?: object;
}

const CardMediaComponent: React.FC<CardMediaProps> = ({ image, alt, sx }) => {
  return <CardMedia component="img" image={image} alt={alt} sx={sx} />;
};

export default CardMediaComponent;
