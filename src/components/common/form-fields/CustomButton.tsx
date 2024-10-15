import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonType extends ButtonProps {
  label?: string;
  variant?: ButtonProps["variant"];
  className?: string;
}

function CustomButton(props: CustomButtonType) {
  const { label, variant = "contained", className = '', ...rest } = props;

  return (
    <Button
      variant={variant}
      {...rest}
      sx={{ textTransform: "capitalize" }}
      className={className}
    >
      {label || "Login"}
    </Button>
  );
}

export default CustomButton;
