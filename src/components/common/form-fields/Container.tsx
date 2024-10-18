import * as React from "react";
// import { Container } from "@mui/material";
type LayoutsTypes = {
  children: React.ReactNode;
};

export default function CustomContainer({ children }: LayoutsTypes) {
  return <div className="container mx-auto">{children}</div>;
}
