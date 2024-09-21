/* eslint-disable react/jsx-key */
import React from "react";

import { Box, Card, Grid, useTheme } from "@mui/material";

import AddressSection from "./Address";

const BusinessSection = () => {
  const theme = useTheme();

  return (
    <section>
      {" "}
      <Card sx={{ width: "1118px", height: "457px", background: "white" }}>
        <Grid
          container
          sx={{ borderTop: `6px solid ${theme.palette.pink[100]}` }}
        >
          <Grid item xs={3}>
            <Box
              sx={{
                background: theme.palette.pink[100],
                ml: 3,
                textAlign: "center",
                borderRadius: "0px 0px 9px 9px",
                padding: "5px",
                color: theme.palette.customColor.white,
              }}
            >
              Top Buisness
            </Box>
          </Grid>
          <></>
        </Grid>
        <AddressSection />
      </Card>
    </section>
  );
};

export default BusinessSection;
