import React from "react";
// import dynamic from "next/dynamic";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const DateEventPicker = dynamic(() => import("../DateEventPicker"));
const DateSection = () => {
  return (
    <>
      <Box className="bg-ik_white p-3 mt-1 rounded-2xl">
        <Grid container>
          <Grid item xs={7}>
            <DateEventPicker />
          </Grid>
          <Grid item xs={5}>
            <Typography className="font-semibold text-f20 leading-7 text-ik_bluegreydarken3 mb-[20px]">
              Time Slots
            </Typography>
            <Box className="border border-ik_pink rounded-xl w-[277px] h-[54px] flex items-center justify-center bg-ik_whitevariant mb-2">
              <Typography className="">11:00 A.M</Typography>
            </Box>
            <Box className="border border-ik_bordervariant2 rounded-xl w-[277px] h-[54px] flex items-center justify-center  mb-2">
              <Typography className="">11:00 A.M</Typography>
            </Box>
            <Box className="border border-ik_bordervariant2 rounded-xl w-[277px] h-[54px] flex items-center justify-center  mb-2">
              <Typography className="">11:00 A.M</Typography>
            </Box>
            <Box className="border border-ik_bordervariant2 rounded-xl w-[277px] h-[54px] flex items-center justify-center  mb-2">
              <Typography className="">11:00 A.M</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DateSection;
