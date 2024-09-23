import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonType extends ButtonProps {
  label?: string;
  variant?: string;
}

function CustomButton(props: CustomButtonType) {
  const { label, variant = "contained", ...rest } = props;

  return (
    <Button variant={variant} {...rest}>
      {label || "Login"}
    </Button>
  );
}

export default CustomButton;
