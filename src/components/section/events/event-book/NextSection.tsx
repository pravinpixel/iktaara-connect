/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import { Stack } from "@mui/material";

// import CustomButton from "../form-fields/CustomButton";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
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
  showPrev: boolean;
  handleSection: () => void;
  handleBackSection: () => void;
}

const NextSection = ({
  justifyContent = "center",
  alignItems = "center",
  className = "",
  showPrev,
  handleSection,
  handleBackSection,
}: NextSectionProps) => {
  return (
    <Box className={`bg-ik_white p-6  ${className}`}>
      <CustomContainer>
        <Stack
          direction="row"
          spacing={1}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          {showPrev && (
            <div onClick={handleBackSection} className="cursor-pointer">
              <ImageComponent
                src="/assets/static/image_35.png"
                alt="image"
                width={54}
                height={54}
              />
            </div>
          )}

          <CustomButton
            onClick={handleSection}
            label="Next"
            className="w-[217px] h-[54px]"
          ></CustomButton>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default NextSection;
