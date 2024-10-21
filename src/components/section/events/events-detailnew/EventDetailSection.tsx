import React from "react";

import dynamic from "next/dynamic";

import { Box, Grid } from "@mui/material";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const HostInfo = dynamic(() => import("./HostInfo"));
const WhyShouldAttend = dynamic(() => import("./WhyShoulAttend"));
const BookTicket = dynamic(() => import("./BookTicket"));
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);

// type EventsTitleProps = {
//   label: string;
//   subLabel: string;
// };
const EventDetailSection = () => {
  return (
    <Box className="bg-ik_lightblue h-[639px]">
      <CustomContainer>
        <Box
          // sx={{ marginTop: "-180px" }}
          className="relative top-[-220px] 2xl:top-[-200px]  z-[100]"
        >
          <Grid container className="mx-auto">
            <Grid item xs={8}>
              <BookTicket />
            </Grid>
            <Grid item xs={4} className="pl-[16px]">
              <HostInfo />
            </Grid>
          </Grid>
          <Grid container mt={2} className="mx-auto">
            <Grid item xs={8} sx={{ paddingTop: "0px!important" }}>
              <WhyShouldAttend />
            </Grid>
            <Grid item xs={4} className="pl-[16px] mt-[-136px] 2xl:mt-[-156px]">
              <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white event-image">
                <ImageComponent
                  src="/assets/static/image_29.png"
                  alt="image"
                  width={372}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default EventDetailSection;
