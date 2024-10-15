import React from "react";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
import { Box } from "@mui/material";

const HostEventsBanner = () => {
  return (
    <CustomContainer>
      <Box className="flex items-center justify-center mb-5 cursor-pointer">
        <ImageComponent
          alt="calender"
          src="/assets/static/image_22.png"
          width={1064}
          height={149}
        />
      </Box>
    </CustomContainer>
  );
};

export default HostEventsBanner;
