import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface CustomCardProps {
  variant?: string;
  img: string;
  text: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
}
export default function CustomCard(props: CustomCardProps) {
  const { variant, img, text, img1, width = "360px", height = "260px" } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",
        height: height,
        width: width,
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src={img}
          alt="Card Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />

        <Box>
          <img
            src={img1}
            alt="Overlay Image"
            style={{ left: "5%", bottom: "5%" }}
          />

          <Typography>{text}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
