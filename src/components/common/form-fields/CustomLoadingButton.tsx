import React from "react";
import { ButtonProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

interface CustomButtonType extends ButtonProps {
  label?: string;
  variant?: ButtonProps["variant"];
  className?: string;
  loading: boolean;
}

function CustomLoadingButton(props: CustomButtonType) {
  const {
    label,
    loading = false,
    variant = "contained",
    className = "",
    ...rest
  } = props;

  return (
    <LoadingButton
      variant={variant}
      {...rest}
      sx={{ textTransform: "capitalize" }}
      className={className}
      loading={loading}
    >
      {label || ""}
    </LoadingButton>
  );
}

export default CustomLoadingButton;
