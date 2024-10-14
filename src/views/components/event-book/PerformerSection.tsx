/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";

const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));


const PerformerSection: React.FC = () => {
  return (
    <Box className="bg-ik_white p-3 mt-1 rounded-2xl mb-3">
      <CustomContainer>
        <Stack direction="row" spacing={1} alignItems="center">
          <ImageComponent
            src="/assets/static/image_32.png"
            alt="image"
            width={134}
            height={163}
          />
          <Box>
            <Typography className="font-bold text-f22 leading-7 text-ik_bluegreydarken3">
              Need Singham Dhan by SID SRIRAM
            </Typography>
            <Typography className="font-normal text-f16 leading-5 text-ik_bluegreybluegrey">
              Performance
            </Typography>
          </Box>
        </Stack>
        <Divider className="my-2" />
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          className="cursor-pointer mt-3"
        >
          <ImageComponent
            src="/assets/static/clock.svg"
            alt="image"
            width={48}
            height={48}
          />
          <Box>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreybluegrey">
              Date & Time
            </Typography>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreydarken3">
              Saturday, Aug 10, 2024
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          // onClick={onDateClick}
          className="cursor-pointer mt-3"
        >
          <ImageComponent
            src="/assets/static/location.svg"
            alt="image"
            width={48}
            height={48}
          />
          <Box>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreybluegrey">
              Venue
            </Typography>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreydarken3">
              -- / --
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          // onClick={onDateClick1}
          className="cursor-pointer mt-3"
        >
          <ImageComponent
            src="/assets/static/ticket.svg"
            alt="image"
            width={48}
            height={48}
          />
          <Box>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreybluegrey">
              Tickets
            </Typography>
            <Typography className="font-medium text-f16 leading-5 text-ik_bluegreydarken3">
              -- / --
            </Typography>
          </Box>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default PerformerSection;
