import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import { Grid } from "@mui/material";

const TicketSection = dynamic(() => import("./TicketSection"));

const PerformerSection = dynamic(() => import("./PerformerSection"));
const DateSection = dynamic(() => import("./DateSection"));
const VenueListSection = dynamic(() => import("./VenueListSection"));
const CustomContainer = dynamic(() => import("@/views/components/Container"));

const EventSection = ({ section = 'date' }: { section: EventsBookingSectionType }) => {
  switch (section) {
    case 'date':
      return <DateSection />
    case 'venue':
      return <VenueListSection />
    case 'ticket':
      return <TicketSection />
    default:
      return <DateSection />
  }
}


const VenueSection = ({ section }: { section: EventsBookingSectionType }) => {

  return (
    <Box className=" mt-1 mb-[100px]">
      <CustomContainer>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <PerformerSection
            />
          </Grid>
          <Grid item xs={8}>

            <EventSection section={section} />
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default VenueSection;
