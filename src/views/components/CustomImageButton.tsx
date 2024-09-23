import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Stack } from "@mui/material";
import ImageComponent from "./imageComponent";

interface CustomButtonType extends ButtonProps {
  image?: string;
  width?: number;
  height?: number;
  label?: string;
}

function CustomImageButton(props: CustomButtonType) {
  const { image, variant = "contained", label, ...rest } = props;

  return (
    <Button variant={variant} {...rest} sx={{ textTransform: "capitalize" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center", padding: "4px" }}
      >
        <ImageComponent src={image} alt="Button Image" width={24} height={24} />
        <p className="font-semibold text-f18 leading-6 ">{label}</p>
      </Stack>
    </Button>
  );
}

export default CustomImageButton;
