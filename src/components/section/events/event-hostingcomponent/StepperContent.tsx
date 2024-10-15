import React from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const PromotionalCreatives = dynamic(() => import("./PromotionalCreatives"));
const HostingTitle = dynamic(() => import("./HostingTitle"));
const HostingEvent = dynamic(() => import("./HostingEvent"));
const HostType = dynamic(() => import("./HostType"));
export default function StepperContent() {
  return (
    <Box className="">
      <HostingTitle />
      <HostType />
      <HostingEvent />
      <PromotionalCreatives />
    </Box>
  );
}
