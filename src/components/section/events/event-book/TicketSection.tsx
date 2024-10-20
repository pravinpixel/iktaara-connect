/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { Grid } from "@mui/material";

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);

const TicketSection = () => {

    const [ticketCount, setTicketCount] = useState(1); // Initial value can be 1

  // Step 2: Function to handle increment
  const handleIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  // Step 3: Function to handle decrement
  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <>
      <Box className="bg-ik_white py-[26px] px-[21px] mt-[16px] rounded-2xl">
        <Box className="font-semibold text-f20 leading-6 text-ik_bluegreydarken3 text-center mb-[23.2px]">
          Tickets
        </Box>
        <Box className="border border-ik_bluegreydarken3-500 px-[24px] py-[38.21px] rounded-2xl mb-3">
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
              <CustomButton label="select" variant="primary-button" className="w-[176px] h-[54px] text-f16 font-semibold leading-[20.16px]"/>
            </Grid>
          </Stack>
        </Box>

        <Box className="border border-ik_bluegreydarken3-500 px-[24px] py-[38.21px] rounded-2xl mb-3">
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
              <Box className="flex gap-4 border border-ik_pink px-2 rounded-md w-[176px] h-[54px] items-center justify-center">
                <Stack direction="row" spacing={4} >   <Typography className="text-f20 font-semibold leading-7 text-ik_pink cursor-pointer" onClick={handleDecrement}>
                  -
                </Typography>
                <Typography className="text-f22 font-semibold leading-8 text-ik_pink">
            {ticketCount}
                </Typography>
                <Typography className="text-f20 font-semibold leading-7 text-ik_pink cursor-pointer" onClick={handleIncrement}>
                  +
                </Typography></Stack>
             
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default TicketSection;
