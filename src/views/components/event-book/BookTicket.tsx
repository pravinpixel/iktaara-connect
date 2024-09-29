/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));

const BookingTicket = () => {
  return (
    <Box className="bg-ik_white p-3 mt-1">
      <CustomContainer>
        <Stack direction="row" spacing={1} alignItems="center">
          <ImageComponent
            src="/images/static/image_31.png"
            alt="image"
            width={16}
            height={16}
          />
          <Typography>Book Ticket</Typography>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default BookingTicket;