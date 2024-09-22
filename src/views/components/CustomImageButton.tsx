import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Stack } from "@mui/material";

interface CustomButtonType extends ButtonProps {
  image?: string;
  width?: number;
  height?: number;
  label?: string;
}

function CustomImageButton(props: CustomButtonType) {
  const { image, variant = "contained", width, label, height, ...rest } = props;

  return (
    <Button variant={variant} {...rest}>
      <Stack direction="row" spacing={1}>
        <img src={image} alt="Button Image" width={width} height={height} />
        <p>{label}</p>
      </Stack>
    </Button>
  );
}

export default CustomImageButton;
