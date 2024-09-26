import React from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const EventsAccordion = dynamic(() => import("./EventsAccordion"));
export default function WhyShouldAttend() {
  return (
    <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white">
      <EventsAccordion />
    </Box>
  );
}
