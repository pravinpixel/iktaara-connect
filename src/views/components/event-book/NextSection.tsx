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

const NextSection = () => {
  return (
    <Box className="bg-ik_white p-3 mt-1">
      <CustomContainer>
        <Stack
          direction="row"
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
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
