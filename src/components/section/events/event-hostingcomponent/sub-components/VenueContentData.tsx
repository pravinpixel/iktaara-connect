import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { Stack } from "@mui/material";

import dynamic from "next/dynamic";

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VenueContentData = ({ setValue, type }: any) => {
  return (
    <>
      <Box className=" flex justify-center items-center">
        {" "}
        <Box className="p-6 ">
          {type === true ? (
            " "
          ) : (
            <Box className="flex items-center justify-center">
              {" "}
              <ImageComponent
                src="/assets/static/image_50.png"
                alt=""
                width={227}
                height={173}
              />
            </Box>
          )}
          {type === true ? (
            <Typography className="text-f22 font-bold leading-7 text-ik_bluegreybluegrey pb-2">
              Setup a venue to invite audiences
            </Typography>
          ) : (
            <Typography className="text-f36 font-normal leading-10 text-ik_bluegreybluegrey pb-2">
              Setup a venue to invite audiences
            </Typography>
          )}

          <Box className="flex items-center justify-between border border-ik_bluegreylighten1 w-[448px] h-[100px] m-auto rounded-[12px]">
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <Box>
                <ImageComponent
                  src="/assets/static/image_51.png"
                  alt="location"
                  width={91}
                  height={99}
                />
              </Box>
              <Box>
                <Typography className="text-f20 font-medium leading-7 text-ik_bluegreydarken3">
                  Venue
                </Typography>
                <Typography className="text-f16 font-normal leading-5 text-ik_bluegreylighten1">
                  Space to host the event
                </Typography>
              </Box>
              <Box onClick={() => setValue("venue", true)}>
                <CustomButton
                  variant="primary-button"
                  label="+Add"
                  className="w-[140px]"
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VenueContentData;
