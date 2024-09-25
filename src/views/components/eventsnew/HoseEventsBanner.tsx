import React from "react";
import ImageComponent from "../imageComponent";

import CustomContainer from "../Container";
import { Box } from "@mui/material";

const HostEventsBanner = () => {
  return (
    <CustomContainer>
      <Box className="flex items-center justify-center mb-6">
        <ImageComponent
          alt="calender"
          src="/images/static/image_22.png"
          width={1064}
          height={149}
        />
      </Box>
    </CustomContainer>
  );
};

export default HostEventsBanner;
