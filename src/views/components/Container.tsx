import * as React from "react";
import { Container } from "@mui/material";

export default function CustomContainer() {
  return (
    <Container
      maxWidth={"lg"}
      sx={{ maxWidth: { xl: "200px !important", lg: "200px" } }}
    />
  );
}
