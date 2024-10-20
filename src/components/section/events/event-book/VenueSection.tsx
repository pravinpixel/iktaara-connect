import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import { Grid } from "@mui/material";

const TicketSection = dynamic(() => import("./TicketSection"));

const PerformerSection = dynamic(() => import("./PerformerSection"));
const DateSection = dynamic(() => import("./DateSection"));
const VenueListSection = dynamic(() => import("./VenueListSection"));
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);

const EventSection = ({
  section = "date",
}: {
  section: EventsBookingSectionType;
}) => {
  switch (section) {
    case "date":
      return <DateSection />;
    case "venue":
      return <VenueListSection />;
    case "ticket":
      return <TicketSection />;
    default:
      return <DateSection />;
  }
};

const VenueSection = ({ section }: { section: EventsBookingSectionType }) => {
  const [activeSection, setActiveSection] = useState<EventsBookingSectionType>(
    "date" // Default section to display
  );

  // Step 2: Use a single function to handle all section changes
  const handleSectionChange = (section: EventsBookingSectionType) => {
    setActiveSection(section);
  };
  return (
    <Box className="  mb-[219.02px]">
      <CustomContainer>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <PerformerSection onSectionChange={handleSectionChange} />
          </Grid>
          <Grid item xs={8}>
            <EventSection section={activeSection}  />
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default VenueSection;
