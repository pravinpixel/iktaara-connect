/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import { Stack } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));

interface NextSectionProps {
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  className: string;
}

const NextSection = ({
  justifyContent = "center",
  alignItems = "center",
  className = "",
}: NextSectionProps) => {
  return (
    <Box className={`bg-ik_white p-3 mt-1 ${className}`}>
      <CustomContainer>
        <Stack
          direction="row"
          spacing={1}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          <ImageComponent
            src="/images/static/image_35.png"
            alt="image"
            width={54}
            height={54}
          />
          <CustomButton label="Next"></CustomButton>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default NextSection;
