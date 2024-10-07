import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Stack } from "@mui/material";
import ImageComponent from "./ImageComponent";

interface CustomButtonType extends ButtonProps {
  image?: string;
  width?: number;
  height?: number;
  label?: string;
  className?: string;
  newclass?: string; 
}

function CustomImageButton(props: CustomButtonType) {
  const { image, variant = "contained", label, className, newclass, width, height, ...rest } = props;

  return (
    <Button
      variant={variant}
      className={newclass}
      {...rest}
      sx={{ textTransform: "capitalize" }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems={"center"}
        className="p-[4px]"
      >
        <ImageComponent
          src={image}
          alt="Button Image"
          width={width ? width : 24}
          height={height ? height : 24}
        />
        <p
          className={
            className ? className : "font-semibold text-f18 leading-6 "
          }
        >
          {label}
        </p>
      </Stack>
    </Button>
  );
}

export default CustomImageButton;
