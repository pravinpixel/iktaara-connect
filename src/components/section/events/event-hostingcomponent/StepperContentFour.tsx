import React, { useState } from "react";
import VenueContentData from "./sub-components/VenueContentData";
import { Grid } from "@mui/material";

import VenueDrawer from "./sub-components/VenueDrawer";
import VenueAddressDetails from "./sub-components/VenueAddressDetails";
import { Box } from "@mui/material";

export default function StepperContentFour() {
  const [value, setValue] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
      {!value && !close && <VenueContentData setValue={setValue} />}
      {value && (
        <Box className="mb-[100px]">
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <VenueContentData type={true} />
            </Grid>

            <Grid item xs={6} className="">
              <VenueDrawer setClose={setClose} setValue={setValue} />
            </Grid>
          </Grid>
        </Box>
      )}

      {close && (
        <Grid container>
          <Grid item xs={6}>
            {" "}
            <VenueContentData type={true} />
          </Grid>

          <Grid item xs={8}>
            {" "}
            <VenueAddressDetails />
          </Grid>
        </Grid>
      )}
    </>
  );
}
