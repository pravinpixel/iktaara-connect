/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { Grid } from "@mui/material";

const CustomButton = dynamic(() => import("../form-fields/CustomButton"));

const TicketSection = () => {
  return (
    <>
      <Box className="bg-ik_white p-3 mt-1 rounded-2xl">
        <Box className="font-semibold text-f20 leading-6 text-ik_bluegreydarken3 text-center">
          Tickets
        </Box>
        <Box className="border border-ik_bluegreydarken3-500 p-3 rounded-2xl">
          <Stack direction="row">
            <Grid item xs={8}>
              <Typography className="text-f24 font-semibold leading-8 text-ik_bluegreydarken3">
                Silver
              </Typography>
              <Typography className="text-f18 font-normal leading-6 text-ik_bluegreylighten1">
                Rs.100
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CustomButton label="select" variant="primary-button" />
            </Grid>
          </Stack>
        </Box>

        <Box className="border border-ik_bluegreydarken3-500 p-3 rounded-2xl">
          <Stack direction="row">
            <Grid item xs={8}>
              <Typography className="text-f24 font-semibold leading-8 text-ik_bluegreydarken3">
                Silver
              </Typography>
              <Typography className="text-f18 font-normal leading-6 text-ik_bluegreylighten1">
                Rs.100
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box className="flex gap-4 border border-ik_pink px-2 rounded-md">
                <Typography className="text-f20 font-semibold leading-7 text-ik_pink">
                  -
                </Typography>
                <Typography className="text-f22 font-semibold leading-8 text-ik_pink">
                  3
                </Typography>
                <Typography className="text-f20 font-semibold leading-7 text-ik_pink">
                  +
                </Typography>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default TicketSection;
