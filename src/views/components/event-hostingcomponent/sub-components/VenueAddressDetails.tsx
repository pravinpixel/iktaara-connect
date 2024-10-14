import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import ImageComponent from "../../ImageComponent";

// import CustomButton from "../../form-fields/CustomButton";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VenueAddressDetails = () => {
  return (
    <>
      <Box className="p-6">
        <Box className="flex items-center justify-between border border-ik_bluegreylighten1  rounded-[12px] py-3 ">
          <Stack direction="column">
            {" "}
            <Box className="bg-ik_bluegreylighten5 w-full relative top-[-12px] rounded-tl-[12px] rounded-tr-[12px]">
              <Typography className="text-f18 font-semibold leading-6 text-ik_bluegreydarken3 p-3">
                Venue
              </Typography>
            </Box>
            <Stack direction={"row"} spacing={2}>
              <Box className="px-3">
                <Typography className="text-f18 font-semibold leading-6 text-ik_bluegreydarken3 ">
                  Narada Gana Sabha in Alwarpet, Chennai
                </Typography>
                <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                  No 314, Ttk Road,
                </Typography>
                <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                  Alwarpet, Chennai - 600018
                </Typography>
                <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                  Near Sankara Hall
                </Typography>
              </Box>
              <Box>
                {" "}
                <Divider orientation="vertical" />
              </Box>

              <Box>
                <Stack direction="row">
                  {" "}
                  <Typography className="text-f18 font-semibold leading-6 text-ik_bluegreydarken3 ">
                    July 20,2024
                  </Typography>
                  <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                    09:00 AM - 10:00 AM (1hr)
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Box>
              <Divider orientation="horizontal" className="mt-2" />
            </Box>
            <Stack direction={"row"} className="px-3 mt-2" spacing={2}>
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <ImageComponent
                    src="/assets/static/image_56.png"
                    alt="bin"
                    height={19}
                    width={19}
                  />
                </Box>
                <Typography className="text-f16 font-normal leading-6 text-ik_pink">
                  Edit
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <ImageComponent
                    src="/assets/static/image_52.png"
                    alt="bin"
                    height={20}
                    width={20}
                  />
                </Box>
                <Typography className="text-f16 font-normal leading-6 text-ik_pink">
                  Delete
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default VenueAddressDetails;
