/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { Grid } from "@mui/material";

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const VenueListSection = () => {
  return (
    <>
      <Box className="bg-ik_white py-[26px] px-[21px] mt-[16px] rounded-2xl">
        <Box className="font-semibold text-f20 leading-6 text-ik_bluegreydarken3 text-center mb-[23.2px]">
          Venue
        </Box>
        <Box className="border border-ik_bluegreydarken3-500 py-[29.39px] px-[24px] rounded-2xl">
          <Stack direction="row">
            <Grid item xs={8}>
              <Typography className="text-f20 font-semibold leading-7 text-ik_bluegreydarken3 mb-[8px]">
                Medai - The Stage, Alwarpet, Chennai
              </Typography>
              <Typography className="text-f16 font-normal leading-6 text-ik_bluegreylighten1">
                No.13, Nageswara Rao Rd, 2nd Extension, Panagal Park, T.
                Nagar,  Chennai, Tamil Nadu 600017, India
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
              <CustomButton className={"w-[176px] h-[54px]"} label="Selected" />
            </Grid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default VenueListSection;
