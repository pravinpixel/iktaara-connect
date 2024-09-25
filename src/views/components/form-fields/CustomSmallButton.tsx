import React from "react";
import { Button, ButtonProps } from "@mui/material";
import ImageComponent from "../ImageComponent";

interface CustomButtonType extends ButtonProps {
  image?: string;
  width?: number;
  height?: number;
}

function CustomSmallButton(props: CustomButtonType) {
  const { image, variant = "contained", width, height, ...rest } = props;

  return (
    <Button
      variant={variant}
      {...rest}
      sx={{
        width: "54px!important",
        height: "54px",
        minWidth: "54px!important",
      }}
    >
      <ImageComponent
        src={image}
        alt="Button Image"
        width={width}
        height={height}
      />
    </Button>
  );
}

export default CustomSmallButton;
