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
    <CustomContainer>
      <Box>
        {" "}
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
            <ImageComponent src="/images/static/image_29.png" alt="image" />
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default EventDetailSection;
