import React from "react";

import dynamic from "next/dynamic";

import { Box, Grid } from "@mui/material";

const ImageComponent = dynamic(() => import("../ImageComponent"));
const HostInfo = dynamic(() => import("./HostInfo"));
const WhyShouldAttend = dynamic(() => import("./WhyShoulAttend"));
const BookTicket = dynamic(() => import("./BookTicket"));
const CustomContainer = dynamic(() => import("../Container"));

// type EventsTitleProps = {
//   label: string;
//   subLabel: string;
// };
const EventDetailSection = () => {
  return (
    <Box className="bg-ik_lightblue">
      <CustomContainer>
        <Box sx={{ marginTop: "-131px" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <BookTicket />
            </Grid>
            <Grid item xs={4}>
              <HostInfo />
            </Grid>
          </Grid>
          <Grid container mt={2} spacing={2}>
            <Grid item xs={8}>
              <WhyShouldAttend />
            </Grid>
            <Grid item xs={4}>
              <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white mt-[-100px]">
                <ImageComponent
                  src="/images/static/image_29.png"
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
