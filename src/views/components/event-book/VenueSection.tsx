/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import { Grid } from "@mui/material";

const TicketSection = dynamic(() => import("./TicketSection"));

const PerformerSection = dynamic(() => import("./PerformerSection"));
const DateSection = dynamic(() => import("./DateSection"));
const VenueListSection = dynamic(() => import("./VenueListSection"));
const CustomContainer = dynamic(() => import("@/views/components/Container"));

const VenueSection = () => {
  const [showVenueList, setShowVenueList] = useState(false);
  const [showTicketList, setShowTicketList] = useState(false);
  const [showDateList, setShowDateList] = useState(true);
  const handleDateClick = () => {
    setShowVenueList(true); // Show VenueListSection when the date is clicked
    setShowTicketList(false);
    setShowDateList(false);
  };

  const handleDateClick1 = () => {
    setShowTicketList(true);
    setShowVenueList(false);
    setShowDateList(false);
  };

  const handleDateClick2 = () => {
    setShowTicketList(false);
    setShowVenueList(false);
    setShowDateList(true);
  };

  return (
    <Box className=" mt-1 mb-[100px]">
      <CustomContainer>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <PerformerSection
              onDateClick={handleDateClick}
              onDateClick1={handleDateClick1}
              onDateClick2={handleDateClick2}
            />
          </Grid>
          <Grid item xs={8}>
            {showVenueList && <VenueListSection />}
            {showTicketList && <TicketSection />}
            {showDateList && <DateSection />}
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default VenueSection;
