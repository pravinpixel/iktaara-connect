/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Typography, Stack } from "@mui/material";

import ImageComponent from "../ImageComponent";

const EnquiryPopOver = () => {
  return (
    <>
      <Box className="flex gap-[10px]">
        <Stack
          direction="row"
          alignItemss={"center"}
          className="border p-2 rounded-[8px] border-ik_bluegreylighten3"
          spacing={2}
        >
          <Box>
            <ImageComponent
              src="/assets/static/phone.svg"
              alt=""
              width={20}
              height={20}
            />
          </Box>
          <Typography>Phone</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItemss={"center"}
          className="border p-2 rounded-[8px] border-ik_bluegreylighten3"
          spacing={2}
        >
          <Box>
            <ImageComponent
              src="/assets/static/email.svg"
              alt=""
              width={20}
              height={20}
            />
          </Box>
          <Typography>Email</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default EnquiryPopOver;
