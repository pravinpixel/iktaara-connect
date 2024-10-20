import React from "react";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

export default function HostInfo() {
  return (
    <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white p-5">
      <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
        Host Info
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" mt={2} mb={"9.78px"}>
        <ImageComponent
          src="/assets/static/image_36.png"
          alt="Business Image"
          width={72}
          height={72}
        />
        <Typography className="text-f18 font-semibold leading-8 text-ik_bluegreydarken3 mt-2 ">
          Name
        </Typography>
      </Stack>
      <Typography className="text-f16 font-normal leading-6 text-ik_bluegreydarken1 mt-2">
        Calling all music lovers! Brace yourselves for the arrival of Nee
        Singham Dhan, a captivating live concert experience featuring the
        phenomenal Sid Sriram!
      </Typography>
    </Box>
  );
}
