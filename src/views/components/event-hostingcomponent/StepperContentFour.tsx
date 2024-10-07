import React, { useState } from "react";
import VenueContentData from "./sub-components/VenueContentData";
import { Grid } from "@mui/material";

import VenueDrawer from "./sub-components/VenueDrawer";
import VenueAddressDetails from "./sub-components/VenueAddressDetails";
import { Box } from "@mui/material";

export default function StepperContentFour() {
  const [value, setValue] = useState(false);

  return (
    <>
      {!value && <VenueContentData setValue={setValue} />}
      {value && (
        <Box className="mb-[100px]">
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <VenueContentData type={true} />
            </Grid>

            <Grid item xs={6} className="">
              <VenueDrawer />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              {" "}
              <VenueAddressDetails />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
