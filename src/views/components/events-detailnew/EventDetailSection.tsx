import React from "react";

import dynamic from "next/dynamic";

import { Box, Grid } from "@mui/material";

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
        <Grid container>
          <Grid item xs={9}>
            <BookTicket />
          </Grid>
          <Grid item xs={3}>
            ddd
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={9}>
            s
          </Grid>
          <Grid item xs={3}>
            ddd
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default EventDetailSection;
